import styles from "./Home.module.css";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import profileImg from "../../../images/piano.jpg";
import ContentTitle from "../../molecules/main/contentTitle/ContentTitle";

export default function HomeWhoAmI() {
  return (
    <>
      <ContentTitle contentName="ABOUT ME" />
      <section className={styles.section}>
        <div className={`${styles.flexCol} ${styles.flexImgBox}`}>
          <img src={profileImg} style={{ width: "80%" }} />
        </div>

        <div className={styles.flexCol}>
          <div className={styles.flex}>
            <h3 className={styles.title}>WHO AM I?</h3>
            <div className={styles.arrowIcon}>
              <DoubleArrowSharpIcon style={{ fontSize: "40px" }} />
            </div>
          </div>
          <div className={styles.explanationContainer}>
            <p>Name: Rina</p>
            <p>Born in: Japan</p>
            <p>Based in: Sydney</p>
            <div className={styles.likesWrapper}>
              <p>Likes:</p>
              <div className={styles.likesContainer}>
                <p>Piano</p>
                <p>Escape room</p>
                <p>JavaScript</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
