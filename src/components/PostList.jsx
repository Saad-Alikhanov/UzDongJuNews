// src/components/PostList.js
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const postsData = []
      querySnapshot.forEach((doc) => {
        postsData.push({ ...doc.data(), id: doc.id })
      })
      setPosts(postsData)
    })

    return () => unsubscribe()
  }, [])

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className='post'>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
          <p>{new Date(post.createdAt.seconds * 1000).toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}

export default PostList
