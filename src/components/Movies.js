import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movies({ id, coverImage, title, rating, genres }) {
  return (
    <div>
      <img src={coverImage} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}> {title} </Link>
      </h2>
      <strong>Rating: {rating}</strong>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movies.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movies;
