import { Row } from "react-bootstrap";
import CardMovies from "./CardMovies";

const MoviesList = ({ movies }) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovies key={mov.id} mov={mov} />;
        })
      ) : (
        <h2 className="text-center p-5">Not Found</h2>
      )}
    </Row>
  );
};

export default MoviesList;
