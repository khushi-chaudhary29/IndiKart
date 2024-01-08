import React from 'react'
import styles from '../page.module.css'
import Filter from '@/components/Filter'
import ProductCard from '@/components/ProductCard'

const AllProduct = () => {
  return (
    <main className={styles.main}>
      <Filter/>
      <ProductCard/>
    </main>
  )
}

export default AllProduct