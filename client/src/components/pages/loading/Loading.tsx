import { useNavigate } from "react-router";
import Typewriter from "typewriter-effect";
import styles from "./Loading.module.css";

export default function Loading() {
  const navigation = useNavigate();

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
              navigation("/home", { state: {}, replace: false });
            })
            .start();
        }}
      />
    </div>
  );
}
