import styles from "./page.module.css";
import { data } from "../public/data.js";
import Slider from "@/components/slider";
import About from "@/components/about";

export default function RootPage() {
  return (
    <main className={styles.main}>
      <Slider slides={data.slides} />
      <About about={data.about} />
    </main>
  );
}
