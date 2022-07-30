import styles from "./Translate.module.css";

interface TranslateTitleProps {
  language: string;
}

export const TranslateTitle = (props: TranslateTitleProps) => {
  const {language} = props

  let text = ''
  if (language === 'japanese') {
    text = '日本語で答えを考えてみよう'
  } else if (language === 'english'){
    text = 'Try to answer in English'
  } else {
    text = 'AIの答えと比較してみよう'
  }
  return (
    <div>
      <h2 className={styles.title}>{text}</h2>
    </div>
  );
};
