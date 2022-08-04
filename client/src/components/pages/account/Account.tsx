import { useAccount } from "../../../hooks/useAccount";
import Name from "../../molecules/account/Name";
import { Layout } from "../../organisms/layout/Layout";
import Theme from "../../organisms/theme/Theme";
import styles from "./Account.module.css";

export default function Account() {
  const { isLoading, doneQuestions } = useAccount();

  return (
    <Layout>
      <Theme>
        <div className={styles.container}>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <>
              <p>account</p>
              <Name />
              <div>
                {doneQuestions.map((question, idx) => {
                  return <p key={idx}>{question.question}</p>;
                })}
              </div>
            </>
          )}
        </div>
      </Theme>
    </Layout>
  );
}
