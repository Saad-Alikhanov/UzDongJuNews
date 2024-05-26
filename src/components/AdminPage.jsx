// AdminPage.js
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import AddItem from './AddItem'
import EditItem from './EditItem'
import ItemList from './ItemList'

const AdminPage = () => {
  return (
    <div>
      <h2>Admin Page</h2>
      <nav>
        <ul>
          <li>
            <Link to='/admin'>Items</Link>
          </li>
          <li>
            <Link to='/admin/add'>Add Item</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/admin' component={ItemList} />
        <Route path='/admin/add' component={AddItem} />
        <Route path='/admin/edit/:id' component={EditItem} />
      </Switch>
    </div>
  )
}

export default AdminPage
