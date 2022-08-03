import styles from "./Examples.module.css";
import comparison from "../../../../images/comparison.png";

export default function ComparisonExample() {
  return (
    <section className={styles.section}>
      <div className={styles.imgContainer}>
        <img src={comparison} style={{ width: "95%" }} />
      </div>
    </section>
  );
}
