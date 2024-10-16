import styles from "/styles/Home.module.css";
import TOP1 from "/public/images/top01.png";
import TOP2 from "/public/images/top02.png";
import TOP3 from "/public/images/top03.png";
import Image from 'next/image';


const images = [
  { src: TOP1, alt: "4" },
  { src: TOP2, alt: "2" },
  { src: TOP3, alt: "3" },
];

export default function TopPNG() {
  return (
    <div className="flex justify-center mx-auto bg-white container ">
    <div className={styles.container}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.image} ${styles[`src${index + 1}`]}`}
          style={{ animationDelay: `${index * 5}s` }}
        >
          <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
        </div>
      ))}
    </div>
  </div>
  );
}
