import styles from "../../styles/header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>MYMEMO📝</div>
      <div className={styles.search_box}>
        <textarea style={null}>sdsa</textarea>
      </div>
    </div>
  );
};

export default Header;
