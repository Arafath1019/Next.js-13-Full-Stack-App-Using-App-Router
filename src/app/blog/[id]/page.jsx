import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';

async function getData(id){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store'
  });

  if(!res.ok){
    throw new Error("Failed to fetch data");
  }
  
  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur ad earum iste fuga ut atque est non, corporis odit error natus distinctio ipsa impedit magnam neque voluptates sit molestiae delectus?
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/17693898/pexels-photo-17693898/free-photo-of-peek-a-boo.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/17693898/pexels-photo-17693898/free-photo-of-peek-a-boo.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et ullam esse ad, corrupti quibusdam quod architecto sunt dolor expedita odio laborum tempora. Temporibus quaerat excepturi a molestias blanditiis corporis?
         <br />
         <br />
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nulla ipsa natus magnam provident perspiciatis cum quas, repellat ut necessitatibus vero culpa neque ab, quisquam deleniti quidem, est corrupti asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum harum libero fuga nobis explicabo vero, animi, exercitationem magnam similique dolor!
         <br />
         <br />
         Cum esse provident sequi sed dignissimos consequatur ad praesentium! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nisi sunt culpa vel, repellat eaque. Voluptate maiores tenetur possimus deleniti ea placeat ullam hic, sapiente vitae nobis voluptates sit voluptas.
        </p>
      </div>
    </div>
  )
}

export default BlogPost