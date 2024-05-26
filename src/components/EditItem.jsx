// EditItem.js
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'

const EditItem = () => {
  const { id } = useParams()
  const [name, setName] = useState('')

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const doc = await db.collection('items').doc(id).get()
        if (doc.exists) {
          setName(doc.data().name)
        } else {
          console.error('No such item')
        }
      } catch (error) {
        console.error('Error fetching item: ', error)
      }
    }
    fetchItem()
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await db.collection('items').doc(id).update({ name })
      alert('Item updated successfully')
    } catch (error) {
      console.error('Error updating item: ', error)
      alert('Error updating item')
    }
  }

  return (
    <div>
      <h3>Edit Item</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type='submit'>Update Item</button>
      </form>
    </div>
  )
}

export default EditItem
