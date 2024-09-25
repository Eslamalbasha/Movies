import { Container } from "react-bootstrap";
import NavBar from "./component/NavBar";
import MoviesList from "./component/MoviesList";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  // get all moies by axios
  const [movies, setMovies] = useState([]);

  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=e3bb2db6237113d6ad4ef719e0b1e827&language=en-US&page=1"
    );
    setMovies(res.data.results);
  };
  // Search in api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=e3bb2db6237113d6ad4ef719e0b1e827&query=${word}&language=en-US&page=1`
      );
      setMovies(res.data.results);
    }
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <MoviesList movies={movies} />
      </Container>
    </div>
  );
}

export default App;
