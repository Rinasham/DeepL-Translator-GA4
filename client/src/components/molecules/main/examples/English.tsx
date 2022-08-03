import { DownArrow } from "../../../atoms/DownArrow";
import styles from "./Examples.module.css";
import engStage from "../../../../images/engStage.png";

export default function EnglishExample() {
  return (
    <section className={styles.section}>
      <div className={styles.imgContainer}>
        <img src={engStage} style={{ width: "95%" }} />
      </div>
      <DownArrow />
    </section>
  );
}
