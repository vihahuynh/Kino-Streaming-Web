import classes from "./popup.module.css";

const Popup = ({ message, type }) => {
  const classNames = `${classes.message} ${
    type === "error" ? classes.error : classes.info
  }`;
  return (
    <div className={classes.container}>
      <p className={classNames}>{message}</p>
    </div>
  );
};

export default Popup;
