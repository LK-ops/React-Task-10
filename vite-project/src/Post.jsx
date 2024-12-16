import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const {postId} = useParams();
  return (
    <div>
        <div>
            viewing post {postId}
        </div>
    </div>
  )
}

export default Post