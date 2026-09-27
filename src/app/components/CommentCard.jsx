
"use client"
import { useContext, useState, useRef } from 'react'
import Image from "next/image"
import ReplyCard from './ReplyCard';
import { CommentContext } from '../useContext/CommentContext';
import ScoreCard from './ScoreCard';

const CommentCard = ({ comment }) => {
    const { replyId, setreplyId, data, deleteId, setdeleteId, editId, seteditId, setdata } = useContext(CommentContext);
    const [editmesg, seteditmesg] = useState("");
    const textareaRef = useRef(null);
    function handleUpdate(e) {
        e.preventDefault();
        const updatecomment = data.comments.map((comment) =>
            comment.id === editId ? { ...comment, content: editmesg } :
                comment
        ).map((comment) => ({
            ...comment, replies: comment.replies ?
                comment.replies.map((replies) => replies.id === editId ?
                    { ...replies, content: editmesg, createdAt: "just now" } :
                    replies
                ) : comment.replies
        }))

        setdata({ ...data, comments: updatecomment })

        seteditId(null);
    }


    return (

        <div className={`bg-transparent ${deleteId ? "opacity-50" : "opacity-90"}`}>
            <div className="bg-white mb-2 rounded-lg p-4 shadow-sm">

                <div className="flex  justify-between md:items-start gap-2 items-end">
                    <span className='hidden md:flex'> <ScoreCard score ={comment.score} id = {comment.id}/></span>

                    <div className='flex md:flex-row flex-col flex-1 min-w-0 space-x-2 items-start'>

                        <div className=' flex flex-col flex-1 min-w-0'>
                            <div className='flex items-center gap-3 mb-3'>
                                <Image
                                    src={comment.user.image.png}
                                    alt={comment.user.username}
                                    className="w-10 h-10 rounded-full"
                                />
                                <div className='flex space-x-2 items-start flex-1 min-w-0'>
                                    <strong>{comment.user.username}</strong>
                                    {
                                        editId == comment.id && <p className='text-sm text-white bg-blue-800 px-1 text-center '>You</p>
                                    }
                                    <span className="text-gray-500 ml-2">{comment.createdAt}</span>
                                </div>
                            </div>
                            {
                                editId == comment.id ?
                                    <form className='flex items-start flex-col gap-4 w-full' onSubmit={handleUpdate}>
                                        <textarea ref={textareaRef} value={editmesg} onChange={(e) => seteditmesg(e.target.value)} className='outline-none flex-1 w-full  h-20 border focus:border-blue-700 rounded-lg p-2' />
                                        <button type='submit' className='text-white text-md  font-medium bg-blue-800 rounded-lg px-4 py-2'>Update</button>
                                    </form>
                                    :
                                    <p className=" text-gray-700">{comment.content}</p>
                            }
                        </div>
                        <div className='flex w-full md:w-auto justify-between items-center'>
                            <span className='md:hidden flex'> <ScoreCard score={comment.score} /></span>
                            {
                                comment.user.username === data.currentUser.username ?
                                    <div className='flex gap-4'>
                                        <button onClick={() => setdeleteId(comment.id)} className='flex text-red-500 text-md font-medium hover:opacity-60 items-center gap-0.5'>
                                            <Image src='/images/icon-delete.svg' alt='delete icon'  className='w-3 ' />
                                            Delete</button>
                                        <button onClick={() => {
                                            seteditId(comment.id),
                                                seteditmesg(comment.content),
                                                setTimeout(() => {
                                                    textareaRef.current?.focus()
                                                    textareaRef.current?.setSelectionRange(
                                                        comment.content.length,
                                                        comment.content.length
                                                    )
                                                }, 0
                                                )
                                        }} className='flex items-center text-md font-medium  text-blue-800 hover:opacity-60 gap-0.5'>
                                            <Image src='/images/icon-edit.svg' alt='edit icon' className='w-3' />
                                            Edit</button>
                                    </div>
                                    :
                                    <button onClick={() => setreplyId(comment.id)} type='button' className='text-blue-800 text-md font-medium flex items-center gap-1 cursor-pointer hover:opacity-60'>
                                        <Image src='/images/icon-reply.svg' alt='reply' />
                                        reply</button>
                            }
                        </div>


                    </div>








                </div>






            </div>
            {
                replyId === comment.id &&
                <ReplyCard buttonType="reply" />
            }


            {
                comment.replies &&
                <div className='mt-4 ml-4 border-l-2 border-gray-200 pl-10'>
                    {comment.replies.map((replies) => (
                        <CommentCard key={replies.id} comment={replies} />
                    ))}
                </div>
            }


        </div>

    );
};
export default CommentCard