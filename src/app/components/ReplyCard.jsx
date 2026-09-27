"use client"
import React, { useContext, useState } from 'react'
import Image from "next/image"
import { CommentContext } from '../useContext/CommentContext'

const ReplyCard = ({ buttonType }) => {
  const [message, setMessage] = useState("")
  const { data, setdata,deleteId } = useContext(CommentContext)
  const { getClickedComment, replyId, setreplyId } = useContext(CommentContext)
  function handleSubmit(e) {
    e.preventDefault();
    if (replyId) {
      const comment = getClickedComment(data.comments, replyId);
      if (!comment) {
        console.log("Comment not found");
        return;
      }

      if (!comment.replies) {
        comment.replies = [];
      }

      
      comment.replies.push({
        content: message,
        id: Date.now(),
        score:0,
        user: data.currentUser,
        createdAt: "just now",
        replies: []
      })



      setdata({ ...data });
      setMessage("");
      setreplyId(null);
      return;
    }

    data.comments.push({
      id: Date.now(),
      user: data.currentUser,
      content: message,
      score:0,
      createdAt: "just now",
      replies: []
    })


    setdata({ ...data });
    console.log(data)
    setMessage("")

  }
  return (
    <form onSubmit={handleSubmit} className={`flex justify-evenly items-start bg-white p-4 rounded-lg gap-3 ${deleteId ? "opacity-50 " : "opacity-90"}`}>
      <Image src={data.currentUser?.image?.webp} alt={data.currentUser.username} width={40} height={40}  />
      <textarea aria-label="write your comment" value={message} onChange={(e) => setMessage(e.target.value)} className='outline-none flex-1 h-20 border focus:border-blue-700 rounded-lg' />
      <button type='submit' className='rounded-lg bg-blue-700 hover:opacity-60 text-white font-medium text-md px-3 py-2'>{buttonType}</button>
    </form>
  )
}

export default ReplyCard