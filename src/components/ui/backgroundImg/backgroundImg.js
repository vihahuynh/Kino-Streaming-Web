import classes from "./backgroundImg.module.css";

const BackgroundImg = ({ src }) => {
  return <img className={classes.bg} alt="Backdrop" src={src} />;
};

export default BackgroundImg;
