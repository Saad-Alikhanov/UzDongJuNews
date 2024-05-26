import React, { useState, useEffect } from 'react'
import data from '../JSON/data.json'
import '../css/card.css'

function Card() {
  const [jsonData, setJsonData] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('EMAL') // Set default category to "EMAL"

  useEffect(() => {
    // Fetch data (can be replaced with API call)
    setJsonData(data)
  }, [])

  // Extract unique categories from data
  const categories = [...new Set(jsonData.map((item) => item.Category))]

  // Filter data based on selected category
  const filteredData = selectedCategory
    ? jsonData.filter((item) => item.Category === selectedCategory)
    : jsonData

  // Toggle category selection
  const toggleCategory = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null)
    } else {
      setSelectedCategory(category)
    }
  }

  return (
    <div className='w-4/5 mx-auto'>
      <div className='product-nav '>
        <ul className='category-list'>
          {categories.map((category) => (
            <li
              key={category}
              className={`cursor-pointer hover:text-blue-700 ${
                selectedCategory === category ? 'font-bold text-blue-700' : ''
              }`}
              onClick={() => toggleCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className='product-grid'>
        {filteredData.map((item) => (
          <div
            key={item.ID}
            className='max-w-sm bg-stone-50 border border-gray-200 rounded-lg shadow '
          >
            <a href='#'>
              <div
                className='product-card rounded-lg'
                style={{
                  backgroundColor: item.Color,
                  width: 'auto',
                  height: '200px',
                }}
              ></div>
            </a>
            <div className='p-5'>
              <a href='#'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
                  {item.Product_name}
                </h5>
              </a>
              <p className='mb-3 font-normal text-gray-700 '>
                {item.Price} sum/kg.
              </p>
              <a
                href='#'
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
              >
                Purchase
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
