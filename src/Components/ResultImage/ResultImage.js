import React from "react";

import Winner from "../../images/success.png";
import Loser from "../../images/fatalError.png";

import styles from "./ResultImage.module.css";

export const ResultImage = ({ winnerStyle, loserStyle }) => {
  return (
    <div className={styles.divWinImg}>
      <img
        className={styles.winImg}
        style={{ display: winnerStyle }}
        width="400px"
        src={Winner}
        alt="Winner"
      />
      <img
        className={styles.loseImg}
        style={{ display: loserStyle }}
        width="350px"
        src={Loser}
        alt="Loser"
      />
    </div>
  );
};
