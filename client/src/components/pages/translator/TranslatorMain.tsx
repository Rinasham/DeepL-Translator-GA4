import { useEffect } from "react";
import { Layout } from "../../organisms/layout/Layout";
import { useQuestion } from "../../../hooks/useGetQuestion";
import Theme from "../../organisms/theme/Theme";
import { TranslateTitle } from "../../molecules/translate/TranslateTitle";
import { Steps } from "../../molecules/translate/Steps";
import { Form } from "../../organisms/layout/form/Form";
import styles from "./Translator.module.css";

export default function TranslatorMain() {
  const {
    isLoading,
    setLoading,
    getQuestion,
    // intQuestionId,
    selectedQuestion,
  } = useQuestion();

  const fetchQuestion = () => getQuestion();

  // useEffect(() => {
  //   const fetch = async () => {
  //     setLoading(true);
  //     await fetchQuestion();
  //     setLoading(false);
  //   };
  //   fetch();
  // }, []);

  return (
    <Layout>
      <Theme>
        <div className={styles.contentsWrapper}>
          <TranslateTitle />
          <Steps />
          <Form language={"japanese"} />
        </div>
      </Theme>
    </Layout>
  );
}
