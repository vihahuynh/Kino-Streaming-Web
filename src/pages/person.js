import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Wrapper from "../components/layouts/wrapper/wrapper";
import MovieCarousel from "../components/movies/movieCarousel/movieCarousel";

import personServices from "../services/person";
import classes from "./person.module.css";

const Person = () => {
  const id = useParams().id;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        const allRequests = await Promise.allSettled([
          personServices.getPersonInfo(id),
          personServices.getPersonCredits(id, "movie"),
          personServices.getPersonCredits(id, "tv"),
        ]);
        setData(allRequests);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchPersonData();
  }, [id]);

  const [personData, movies, tvShows] = data;
  const person = personData?.value;

  if (!person)
    return (
      <Wrapper>
        <p>some thing went wrong</p>
      </Wrapper>
    );

  return (
    <Wrapper>
      <div className={classes.container}>
        <div className={classes.person}>
          <img
            className={classes.person__img}
            alt="Cast"
            src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
          ></img>
          <div className={classes.person__info}>
            <div className={classes["person__info--basic"]}>
              <h2>{person.name}</h2>
              <div>
                <p>
                  <strong>B.O.D:</strong> {person.birthday}
                </p>
                <p>
                  <strong>Place of birth:</strong> {person.place_of_birth}
                </p>
                <p>
                  <strong>Popularity:</strong> {person.popularity}
                </p>
              </div>
            </div>
            <p className={classes["person__info--bio"]}>{person.biography}</p>
          </div>
        </div>
        <MovieCarousel name="Movie credits" movies={movies?.value?.cast} />
        <MovieCarousel name="TV show credits" movies={tvShows?.value?.cast} />
      </div>
      <img
        className={classes.backdrop}
        alt="Backdrop"
        src={`https://image.tmdb.org/t/p/original${person.profile_path}`}
      />
    </Wrapper>
  );
};
export default Person;
