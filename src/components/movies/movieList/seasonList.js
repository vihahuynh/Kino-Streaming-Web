import SeasonItem from "./seasonItem";
import classes from "./movieList.module.css";

const SeasonList = ({ seasons }) => {
  return (
    <div className={classes.recommends}>
      <h5>Other Episodes</h5>
      <ul className={classes["movie-container"]}>
        {seasons.map((season) => (
          <SeasonItem key={season.id} season={season} />
        ))}
      </ul>
    </div>
  );
};

export default SeasonList;
