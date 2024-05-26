// ItemList.js
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'

const ItemList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const snapshot = await db.collection('items').get()
        const itemsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setItems(itemsData)
      } catch (error) {
        console.error('Error fetching items: ', error)
      }
    }
    fetchItems()
  }, [])

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await db.collection('items').doc(id).delete()
        alert('Item deleted successfully')
        setItems(items.filter((item) => item.id !== id))
      } catch (error) {
        console.error('Error deleting item: ', error)
        alert('Error deleting item')
      }
    }
  }

  return (
    <div>
      <h3>Item List</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}
            <Link to={`/admin/edit/${item.id}`}>Edit</Link>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList
