import Typewriter from "typewriter-effect";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(1000)
            .typeString("AIの")
            .typeString("<br />")
            .pauseFor(1000)
            .typeString("技術で")
            .typeString("<br />")
            .pauseFor(1000)
            .typeString("勉強する")
            .typeString("<br />")
            .typeString("<br />")
            .typeString("<br />")
            .pauseFor(800)
            .typeString("<span>AGB Learning</span>")
            .pauseFor(2000)
            .callFunction(() => {
              window.location.href = "/home";
            })
            .start();
        }}
      />
    </div>
  );
}
