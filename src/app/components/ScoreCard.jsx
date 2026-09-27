import React, { useContext } from 'react'
import Image from "next/image"
import { CommentContext } from '../useContext/CommentContext'

const ScoreCard = ({score,id}) => {
  const {data,setdata} = useContext(CommentContext)
  function IncreaseScore(id){
   setdata(prev =>( {
    ...prev , comments:prev.comments.map(comment => 
       comment.id === id ? {
        ...comment, score : score +1
       }:
       {...comment , replies : comment.replies?.map(comment => comment.id == id ? {...comment , score : score+1}: comment
        
       )}
      )
   }))
  }

  function DecreaseScore(id){
   
   setdata(prev => ({
    ...prev, comments: prev.comments.map(comment => 
      comment.id == id ? {
        ...comment,score: Math.max(0,comment.score-1)
      } :
      {...comment ,replies: comment.replies?.map(comment => comment.id == id ? {...comment , score : Math.max(0,comment.score-1) } : comment)}
    )
   }))
  }

  return (
    <div className='flex md:flex-col flex-row space-x-2 space-y-2 items-center  rounded-lg md:py-2 py-1 px-2 bg-gray-100'>
      <button onClick={() => IncreaseScore(id)} type='button'><Image src='/images/icon-plus.svg' alt='plus icon' /></button>
      
      <p className='text-blue-800 text-md font-medium'>{score}</p>
      <button type='button' onClick={() =>DecreaseScore(id)}><Image src='/images/icon-minus.svg' alt='minus icon' /></button>
      
    </div>
  )
}

export default ScoreCard