"use client" 
import React from "react";
import styles from "./featured.module.css";
import { useSession } from "next-auth/react";
import Image from "next/image";

const Featured = () => {
  const { status } = useSession();

  return (
    <>
    {status === "unauthenticated" ? (
      <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to Food Blog</b>
      </h1>
      <div className={styles.subtitle}>
        Discover a World of Culinary Delights!
      </div>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/homepage.png" alt="homepage photo" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Embark on a journey of culinary discovery with our food blog.</h1>
          <p className={styles.postDesc}>
          Where every recipe, ingredient, and 
          dining experience is an adventure waiting to be explored. From tantalizing tastes to mouthwatering 
          meals, we invite you to join us as we uncover the hidden gems of gastronomy, one bite at a time. 
          </p>
          <p className={styles.postDesc}>
          Whether you&apos;re a seasoned chef or a curious foodie, our blog is your passport to a world of flavors, 
          aromas, and culinary delights. Get ready to awaken your senses and ignite your passion for all things 
          food as we take you on a flavorful voyage of epic proportions!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
    ) : (
      <>
      </>
    )}
    </>
  );
};

export default Featured;
