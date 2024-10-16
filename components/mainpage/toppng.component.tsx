import styles from "/styles/Home.module.css";
import Top1 from "/public/images/Top01.png";
import Top2 from "/public/images/Top02.png";
import Top3 from "/public/images/Top03.png";
import Image from 'next/image';


const images = [
  { src: Top1, alt: "4" },
  { src: Top2, alt: "2" },
  { src: Top3, alt: "3" },
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
