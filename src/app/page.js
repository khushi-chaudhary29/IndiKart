import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from '@/components/HeroSection'
import Filter from '@/components/Filter'
import ProductCard from '@/components/ProductCard'
import Track from '@/components/Track'

export default function Home() {
  return (
    <main className={styles.main}>
       <HeroSection/>
        <Filter/>
        <ProductCard/>
        <Track/>
        
    </main>
  )
}
