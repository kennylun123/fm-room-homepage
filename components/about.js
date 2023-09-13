import styles from "./about.module.css";
import utils from "./utils.module.css";

export default function About({ about }) {
  return (
    <section className={`${styles.aboutWrapper} ${utils.grid}`}>
      <div id={styles.aboutImgDark}>
        <img src={about.imgs[0].img.src} alt="about image dark" />
      </div>

      <div id={styles.aboutText}>
        <h2 className={utils.fs400}>{about.title}</h2>
        <p>{about.content}</p>
      </div>

      <div id={styles.aboutImgLight}>
        <img src={about.imgs[1].img.src} alt="about image light" />
      </div>
    </section>
  );
}
