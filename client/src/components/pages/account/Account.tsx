import { useAccount } from "../../../hooks/useAccount";
import Name from "../../molecules/account/Name";
import Record from "../../organisms/account/Record";
import RecordDetail from "../../organisms/account/RecordDetail";
import { Layout } from "../../organisms/layout/Layout";
import Theme from "../../organisms/theme/Theme";
import styles from "./Account.module.css";
import NavModal from "../../organisms/navModal/NavModal";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import ModalButton from "../../molecules/modalButton/ModalButton";

export default function Account() {
  const {
    isLoading,
    doneQuestions,
    isTablePage,
    setTablePage,
    selectedQuestion,
    showTableDetail,
  } = useAccount();

  const [isModalOn, setModalOn] = useState<boolean>(false);
  const isSM = useMediaQuery({ query: "(max-width: 600px)" });
  const isMobile = isSM ? "mobile" : "desktop";

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
              <Name data-testid="name" />
              <p className={styles.accountDescription}>
                QUESTIONS YOU'VE ANSWERED
              </p>
              {doneQuestions.length !== 0 ? (
                <Record
                  questions={doneQuestions}
                  showTableDetail={showTableDetail}
                />
              ) : (
                <p>NO QUESTION</p>
              )}
            </>
          )}
          {isModalOn && (
            <NavModal setModalOn={setModalOn} isMobile={isMobile} />
          )}
          <ModalButton isModalOn={isModalOn} setModalOn={setModalOn} />
        </div>
      </Theme>
    </Layout>
  );
}
