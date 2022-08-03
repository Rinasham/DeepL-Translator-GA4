import ContentTitle from "../../molecules/main/contentTitle/ContentTitle";
import ChooseLevel from "../../molecules/main/examples/ChooseLevel";
import ComparisonExample from "../../molecules/main/examples/Comparison";
import EnglishExample from "../../molecules/main/examples/English";
import JapaneseExample from "../../molecules/main/examples/Japanese";
import styles from "./Home.module.css";

export default function Example() {
  return (
    <>
      <ContentTitle contentName="EXAMPLE" />
      <section className={styles.exampleSection}>
        <h2 className={styles.exampleTitle}>EXAMPLE</h2>
        <p className={styles.exampleSubTitle}>例題サンプルです。</p>
        <ChooseLevel />
        <JapaneseExample />
        <EnglishExample />
        <ComparisonExample />
      </section>
    </>
  );
}
