import Link from "next/link";
import React from "react";
import styles from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/blog?cat=budgetfriendly"
        className={`${styles.categoryItem} ${styles.budgetfriendly}`}
      >
        Budget Friendly
      </Link>
      <Link href="/blog?cat=dessert" className={`${styles.categoryItem} ${styles.dessert}`}>
        Dessert
      </Link>
      <Link href="/blog?cat=vegan" className={`${styles.categoryItem} ${styles.vegan}`}>
        Vegan
      </Link>
      <Link href="/blog?cat=maincourse" className={`${styles.categoryItem} ${styles.maincourse}`}>
        Main Course
      </Link>
      <Link href="/blog?cat=quickandeasy" className={`${styles.categoryItem} ${styles.quickandeasy}`}>
        Quick & Easy
      </Link>
      <Link href="/blog?cat=appetizers" className={`${styles.categoryItem} ${styles.appetizers}`}>
        Appetizers
      </Link>
    </div>
  );
};

export default MenuCategories;
