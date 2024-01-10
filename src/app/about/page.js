import React from 'react'
import styles from '../page.module.css'

const About = () => {
  return (
    <main className='main'>
      <div className={styles.MainAboutContainer}>
        <hr className={styles.AboutUshr}></hr>
        <h2 className={styles.MainAboutheading}>ABOUT US</h2>
        <hr className={styles.AboutUshr}></hr>
        <p className={styles.MainAboutpara}>Welcome to IndiKart, where shopping meets convenience!
          Our mission is to redefine your online shopping experience by offering a curated selection of high-quality products at unbeatable prices.
          At the heart of our e-cart, we prioritize your satisfaction, striving to make your every purchase seamless and enjoyable.
          Dive into a world of endless choices, from the latest trends to timeless classics, all conveniently at your fingertips.
          We take pride in our commitment to customer service, ensuring prompt deliveries and hassle-free returns.
          Discover the joy of effortless shopping with our user-friendly interface, secure payment options, and dedicated customer support.</p>

      </div>
    </main>
  )
}

export default About