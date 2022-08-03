import { DownArrow } from "../../../atoms/DownArrow";
import styles from "./Examples.module.css";
import japStage from "../../../../images/japStage.png";

export default function JapaneseExample() {
  return (
    <section className={styles.section}>
      <div className={styles.imgContainer}>
        <img src={japStage} style={{ width: "95%" }} />
      </div>
      <DownArrow />
    </section>
  );
}
