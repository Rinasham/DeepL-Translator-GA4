import { DownArrow } from "../../../atoms/DownArrow";
import styles from "./Examples.module.css";
import chooseLevel from "../../../../images/japStage.png";

export default function ChooseLevel() {
  return (
    <section className={styles.section}>
      <div className={styles.imgContainer}>
        <img src={chooseLevel} style={{ width: "95%" }} />
      </div>
      <DownArrow />
    </section>
  );
}
