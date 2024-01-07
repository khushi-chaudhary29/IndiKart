import React from 'react'
import styles from '../page.module.css'
import Product from '@/components/dashboard/Product'
import Order from '../order/page'
import Users from '@/components/dashboard/Users'

const Admin = () => {
  return (
    <main className='main'>
      <div>
      Admin
      </div>
    
      <Product/>
      <Order/>
      <Users/>

    </main>
  )
}

export default Admin