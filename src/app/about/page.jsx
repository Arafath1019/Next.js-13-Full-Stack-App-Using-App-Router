import React from 'react';
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/Button/Button';

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt='' />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque incidunt vel sit et. Minus ad error ipsa modi totam ducimus debitis cum quas, laudantium, delectus, sequi ut porro optio?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum quaerat quidem aperiam quas minima iure veniam, minus maxime debitis facilis dolorum suscipit vitae tenetur quae explicabo ab tempora esse?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur deleniti ex nobis autem, quaerat veniam iure obcaecati magnam temporibus velit alias. Officia saepe quae explicabo laborum amet quia accusamus!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi fugiat laborum commodi laudantium. Quaerat inventore, distinctio adipisci illum eius repellendus quae commodi provident nam facere excepturi pariatur eveniet delectus repudiandae?
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />
            - Fast and Handy
            <br />
            <br />
            - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About