// AddItem.js
import React, { useState } from 'react'
import { db } from '../firebase'

const AddItem = () => {
  const [name, setName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await db.collection('items').add({ name })
      setName('')
      alert('Item added successfully')
    } catch (error) {
      console.error('Error adding item: ', error)
      alert('Error adding item')
    }
  }

  return (
    <div>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Item name'
          required
        />
        <button type='submit'>Add Item</button>
      </form>
    </div>
  )
}

export default AddItem
