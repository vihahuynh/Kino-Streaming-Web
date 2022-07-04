import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from "./pages/movies";
import TVShows from "./pages/tvShows";
import MoviePlay from "./pages/movie";
import NotFound from "./pages/404NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies/:id">
          <MoviePlay />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/tvshows/:id">
          <MoviePlay isMovie={false} />
        </Route>
        <Route path="/tvshows">
          <TVShows />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
