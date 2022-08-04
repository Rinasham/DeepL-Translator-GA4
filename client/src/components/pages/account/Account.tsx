import { useAccount } from "../../../hooks/useAccount";
import Name from "../../molecules/account/Name";
import Record from "../../organisms/account/Record";
import RecordDetail from "../../organisms/account/RecordDetail";
import { Layout } from "../../organisms/layout/Layout";
import Theme from "../../organisms/theme/Theme";
import styles from "./Account.module.css";

export default function Account() {
  const {
    isLoading,
    doneQuestions,
    isTablePage,
    setTablePage,
    selectedQuestion,
    showTableDetail,
  } = useAccount();

  return (
    <Layout>
      <Theme>
        <div className={styles.container}>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : isTablePage ? (
            <RecordDetail
              question={selectedQuestion}
              setTablePage={setTablePage}
            />
          ) : (
            <>
              <Name />
              <p className={styles.accountDescription}>
                QUESTIONS YOU'VE ANSWERED
              </p>
              <Record
                questions={doneQuestions}
                showTableDetail={showTableDetail}
              />
            </>
          )}
        </div>
      </Theme>
    </Layout>
  );
}
