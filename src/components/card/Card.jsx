import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {

  const date = new Date(item.createdAt);

  const time = date.toLocaleTimeString();
  const dateStr = date.toLocaleDateString();

  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <div className={styles.detail}>
          By {item.userEmail}
          <br></br>
          <span className={styles.date}>
          {dateStr} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
