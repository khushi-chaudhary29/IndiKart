import React from 'react'
import styles from '../app/page.module.css'
import { GiPyromaniac } from "react-icons/gi";
import { GiFemaleVampire } from "react-icons/gi";
import { GiAtom } from "react-icons/gi";

const Testimonial = () => {
  return (
    <div>
      <div className={styles.mainTestimonial}>
        <h2 className={styles.Testimonialheading}>Testimonial</h2>
        <h3 className={styles.Testimonialsubheading}>What our <span style={{ color: 'palevioletred' }}>customers</span> are saying</h3>
        <div className={styles.Testimonialcontent}>
          <div className={styles.TestimonialSPD}>
            <p className={styles.TestimonialSPDlogo}><GiPyromaniac style={{ width: '5rem', height: '5rem' }} /></p>
            <p className={styles.TestimonialUIDcontent}>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut + 1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <hr className={styles.TestimonialUIDhr}></hr>
            <h4 className={styles.TestimonialUIDname}>VIVEK KUMAR GUPTA</h4>
            <h4 className={styles.TestimonialUIDabout}>Senior Product Designer</h4>
          </div>
          <div className={styles.TestimonialUID}>
            <p className={styles.TestimonialUIDlogo}><GiFemaleVampire style={{ width: '5rem', height: '5rem' }} /></p>
            <p className={styles.TestimonialUIDcontent}>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <hr className={styles.TestimonialUIDhr}></hr>
            <h4 className={styles.TestimonialUIDname}>REACT JS</h4>
            <h4 className={styles.TestimonialUIDabout}>UI Developer</h4>
          </div>
          <div className={styles.TestimonialCTO}>
            <p className={styles.TestimonialCTOlogo}><GiAtom style={{ width: '5rem', height: '5rem' }} /></p>
            <p className={styles.TestimonialUIDcontent}>Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
            <hr className={styles.TestimonialUIDhr}></hr>
            <h4 className={styles.TestimonialUIDname}>REACT JS</h4>
            <h4 className={styles.TestimonialUIDabout}>CTO</h4>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonial