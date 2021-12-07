import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from "./pages/movies";
import TVShows from "./pages/tvShows";
import Navigation from "./components/navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="nav">
        <Navigation />
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/tvshows">
          <TVShows />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
