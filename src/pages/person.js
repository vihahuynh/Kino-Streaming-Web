import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Wrapper from "../components/layouts/wrapper/wrapper";

import personServices from "../services/person";
import classes from "./person.module.css";

const Person = () => {
  const id = useParams().id;
  const [person, setPerson] = useState(null);

  //   const [movies, setMovies] = useState([]);
  //   const [tvShows, setTvShows] = useState([]);
  //   const [imgs, setImgs] = useState([]);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await personServices.getPersonInfo(id);
        setPerson(response);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchPerson();
  }, [id]);

  if (!person)
    return (
      <Wrapper>
        <p>some thing went wrong</p>
      </Wrapper>
    );

  console.log("person: ", person);
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
export default Person;
