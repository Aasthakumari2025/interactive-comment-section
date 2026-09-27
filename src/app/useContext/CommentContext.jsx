
"use client"
import { createContext } from "react";
import { useState } from 'react'
import Data from '../../../data.json'

export const CommentContext = createContext();

export const ContextProvider = ({children}) => {
     const [replyId,setreplyId] = useState("")
     const [data, setdata] = useState(Data);
     const [deleteId, setdeleteId] = useState("");
     const [editId, seteditId] = useState("")
     const [message, setmessage] = useState("")
     
     function getClickedComment(comments,id){
        for(const comment of comments){
            if(comment.id === id) {
                return comment;
            }

            if(comment.replies){
                const replie = getClickedComment(comment.replies,id);
                if(replie){
                    return replie;
                }
            }
        }
        return null;
     }
    return (
        <CommentContext.Provider value={{
            replyId,setreplyId
            , getClickedComment,
            deleteId, setdeleteId,
            data, setdata,
            editId, seteditId,
            message, setmessage,
           
        }}>{children}</CommentContext.Provider>
    )
}