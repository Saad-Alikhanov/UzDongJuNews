import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar as faRegularCalendar } from '@fortawesome/free-regular-svg-icons'
import '../css/videoNews.css'

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'))
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const postsData = []
        querySnapshot.forEach((doc) => {
          postsData.push({ ...doc.data(), id: doc.id })
        })
        setPosts(postsData)
      })
      return () => unsubscribe()
    }
    fetchData()
  }, [])

  const formatDate = (time) => {
    const date = new Date(time)
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${hours}:${minutes} / ${day}.${month}.${year}`
  }

  return (
    <div className='vid-card-container divide-y'>
      {posts.map((post, index) => (
        <div className={`vid-card vid-card-${index}`} key={index}>
          <div className='vid-card-content'>
            <div className='vid-card-img'>
              <img src={post.imageUrl} alt={post.alt} />
            </div>
            <div className='vid-card-caption'>
              <div className='vid-card-label'>
                <FontAwesomeIcon icon={faRegularCalendar} />
                {formatDate(post.createdAt.seconds * 1000)}
              </div>
              <div className='vid-card-title'>
                <h3>{post.title}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostList
