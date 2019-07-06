import React from "react";

import Winner from "../../images/success.png";
import Loser from "../../images/fatalError.png";

import styles from "./ResultImage.module.css";

export const ResultImage = ({ winnerStyle, loserStyle }) => {
  return (
    <div className={styles.divImg}>
      <img
        className={styles.winImg}
        style={{ display: winnerStyle }}
        width="300em"
        src={Winner}
        alt="Winner"
      />
      <img
        className={styles.loseImg}
        style={{ display: loserStyle }}
        width="350em"
        src={Loser}
        alt="Loser"
      />
    </div>
  );
};
