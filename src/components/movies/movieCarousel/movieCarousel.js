import MovieItem from "./movieItem";
import Slider from "react-slick";

import classes from "./movieCarousel.module.css";
import NextArrow from "../../ui/arrows/nextArrow";
import PrevArrow from "../../ui/arrows/prevArrow";

const settings = {
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerPadding: 0,
  swipeToSlide: true,
  pauseOnHover: true,
  speed: 600,
  nextArrow: <NextArrow size="small" />,
  prevArrow: <PrevArrow size="small" />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const MovieCarousel = ({ name, movies }) => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       if (!trending) {
  //         const response = await movieServices.getMovieCarousel(
  //           movie ? "movie" : "tv",
  //           query
  //         );
  //         setMovies(response);
  //       } else {
  //         const response = await trendingServices.getTrending(
  //           movie ? "movie" : "tv",
  //           "week"
  //         );
  //         setMovies(response);
  //       }
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //     setTimeout(() => setIsLoading(false), 200);
  //   };

  //   fetchMovies();
  // }, [query, trending, movie]);

  if (!movies) return null;

  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{name}</h2>

      <Slider {...settings} className={classes.list}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Slider>
    </div>
  );
};

export default MovieCarousel;
