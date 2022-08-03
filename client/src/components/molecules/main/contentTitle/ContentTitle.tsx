import styles from "./ContentTitle.module.css";

type ContentTitleProps = {
  contentName: string;
};

export default (props: ContentTitleProps) => {
  const { contentName } = props;

  return (
    <div className={styles.titleContainer}>
      <p className={styles.contentName}>{contentName}</p>
    </div>
  );
};
