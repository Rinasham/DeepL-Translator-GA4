import styles from "./NavModal.module.css";

export default function NavModal() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        D E E P L <span>lerning...</span>
      </h2>
      <div className={styles.menuItems}>
        <p>HOME</p>
        <p>LEARN</p>
        <p>ABOUT ME</p>
      </div>
      <div className={styles.address}>
        <p>CHATSWOOD, SYDNEY</p>
        <p>2067</p>
        <p>AUSTRALIA</p>
      </div>
    </div>
  );
}
