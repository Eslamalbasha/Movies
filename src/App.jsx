import { Container } from "react-bootstrap";
import NavBar from "./component/NavBar";
import MoviesList from "./component/MoviesList";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesDetails from "./component/MoviesDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // get all moies by axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=e3bb2db6237113d6ad4ef719e0b1e827&language=en-US&page=1"
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };
  // get current page
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=e3bb2db6237113d6ad4ef719e0b1e827&language=en-US&page=${page}`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
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
      setPageCount(res.data.total_pages);
    }
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="font color-body">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />

            <Route path="/movie/:id" element={<MoviesDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
