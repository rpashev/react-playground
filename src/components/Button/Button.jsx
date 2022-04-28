import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const Button = (props) => {
  const classes = `${styles.btn} ${props.outline ? styles.outline : ""} ${
    props.sharp ? styles.sharp : ""
  } ${props.cta ? styles.cta : ""} ${
    props.ctaOutline ? styles["cta-outline"] : ""
  }  ${props.blue ? styles.blue : ""}  ${
    props.blueOutline ? styles["blue-outline"] : ""
  } ${props.rounded ? styles.rounded : ""} ${props.small ? styles.small : ""} ${
    props.large ? styles.large : ""
  } ${props.full ? styles.full : ""} ${props.bump ? styles.bump : ""} ${
    props.flat ? styles.flat : ""
  }`;

  if (props.to) {
    return (
      <Link to={props.to} className={classes}>
        {props.children}
      </Link>
    );
  }
  return (
    <button
      type={props.type}
      className={classes}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
