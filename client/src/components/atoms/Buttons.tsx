import styles from "./Buttons.module.css";

type PrimaryButtonProps = {
  onClickFunc: () => void;
  text: string;
};

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const { onClickFunc, text } = props;
  return (
    <button onClick={onClickFunc} className={styles.button}>
      {text}
    </button>
  );
};
