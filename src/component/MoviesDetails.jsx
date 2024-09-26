import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const MoviesDetails = () => {
  const param = useParams();
  const [movie, setMovie] = useState([]);
  // get movie Details
  const getMoviesDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=e3bb2db6237113d6ad4ef719e0b1e827&language=en-US`
    );
    setMovie(res.data);
  };
  useEffect(() => {
    getMoviesDetails();
  }, []);
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis  d-flex align-items-center ">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500` + movie.poster_path}
              alt="ascad"
            />
            <div className="justify-content-center text-center  mx-auto">
              <p className="card-text-details border-bottom">
                Movie Name : {movie.original_title}
              </p>
              <p className="card-text-details border-bottom">
                Version : {movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                Number of Residents : {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                Evaluation : {movie.vote_average}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom">The Story:</p>
            </div>
            <div className="text-start px-4">
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center pb-4 pt-3">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center "
        >
          <Link to="/">
            <button
              style={{ backgroundColor: "#c06758", border: "none" }}
              className="btn btn-primary mx-2"
            >
              Home
            </button>
          </Link>
          <a href={movie.homepage}>
            <button
              style={{ backgroundColor: "#c06758", border: "none" }}
              className="btn btn-primary"
            >
              {" "}
              Watch The Movie
            </button>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default MoviesDetails;
