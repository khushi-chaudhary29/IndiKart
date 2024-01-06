import React from 'react'
import styles from '../app/page.module.css'

const Filter = () => {

  return (
    <main className='main'>
      <div className={styles.search_box}>
        <div className={styles.search_container}>
          <input type="text" className={styles.search_bar} placeholder="&#128269;Search here" />
        </div>
        <div className={styles.filter}>
          <h7 className={styles.search_filter}>Filters</h7>
        </div>
        <button className={styles.Reset_filter}>Reset Filter</button>
        <div className={styles.search_dropdown}>
          <select className={styles.search_select}>
                <option value="Jacket">Jacket</option>
        <option value="Shirt">Shirt</option>
        <option value="Skirt">Skirt</option>
        <option value="Jeans">Jeans</option>
        <option value="Track-Suit">Track-Suit</option>
        <option value="Lowers">Lowers</option>
        <option value="Upper">Upper</option>
      </select>
      <select className={styles.search_number}>
        <option value="100">100</option>
        <option value="200">200</option>
        <option value="300">300</option>
        <option value="400">400</option>
        <option value="500">500</option>
        <option value="600">600</option>
        <option value="700">700</option>
      </select>
    </div>
    </div >
    </main >
  )
}

export default Filter