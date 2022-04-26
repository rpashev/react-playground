import styles from "./Accordion.module.scss";
import arrow from "../../assets/chevron-forward-outline.svg";
import { useState } from "react";

const Accordion = () => {
  const [active, setActive] = useState(null);

  const togglePanel = (id) => {
    if (active === id) return setActive(null);
    setActive(id);
  };

  const visiblePanel = (id) => {
    return active === id ? true : false;
  };

  return (
    <div className={styles.accordion}>
      <div
        className={`${styles.item} ${visiblePanel(1) ? styles.visible : ""}`}
      >
        <button className={styles.btn} onClick={() => togglePanel(1)}>
          <span>Section 1</span>
          <img src={arrow} />
        </button>
        <div className={styles.panel}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            esse magnam sint dolorum mollitia nobis ratione! Natus nulla
            accusamus sapiente ullam asperiores delectus quo quod eaque itaque,
            quibusdam consequatur voluptatum.
          </p>
        </div>
      </div>
      <div
        className={`${styles.item} ${visiblePanel(2) ? styles.visible : ""}`}
      >
        <button className={styles.btn} onClick={() => togglePanel(2)}>
          <span>Section 2</span>
          <img src={arrow} />
        </button>
        <div className={styles.panel}>
          <p>
            2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            esse magnam sint dolorum mollitia nobis ratione! Natus nulla
            accusamus sapiente ullam asperiores delectus quo quod eaque itaque,
            quibusdam consequatur voluptatum.
          </p>
        </div>
      </div>
      <div
        className={`${styles.item} ${visiblePanel(3) ? styles.visible : ""}`}
      >
        <button className={styles.btn} onClick={() => togglePanel(3)}>
          <span>Section 3</span>
          <img src={arrow} />
        </button>
        <div className={styles.panel}>
          <p>
            3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            esse magnam sint dolorum mollitia nobis ratione! Natus nulla
            accusamus sapiente ullam asperiores delectus quo quod eaque itaque,
            quibusdam consequatur voluptatum.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Accordion;
