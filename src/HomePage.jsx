import { NavLink } from "react-router-dom";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div>
            <h1>Apps</h1>
            <ul>
              <li>
                <NavLink to="/to-do">To Do App</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h1>Pages</h1>
            <ul></ul>
          </div>
          <div>
            <h1>Components</h1>
            <ul>
              <li>
                <NavLink to="/components/accordion">Accordion</NavLink>
              </li>
              <li>
                <NavLink to="/components/button">Button</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HomePage;
