
import MainContainer from "../components/A/MainContainer";
import styles from "./Index.module.css"

const Index = () => {
  return (
    <>
      <MainContainer keywords={"main page"}>
        <div className={styles.main}>
          <h1>Главная страница</h1>
        </div>
      </MainContainer>
    </>
  );
};

export default Index;
