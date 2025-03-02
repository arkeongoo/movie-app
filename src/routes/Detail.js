import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import PropTypes from "prop-types";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);
  console.log(movie);

  // const getMovie = async () => {
  //   const json = await (
  //     await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
  //   ).json();
  //   setMovie(json.data.movie);
  //   setLoading(false);
  // };
  // 여기 코드를 위의 코드로 수정함.
  // useEffect(() => {
  //   getMovie();
  // }, [getMovie]);
  // console.log(movie);

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div>
          <img src={movie.large_cover_image} alt="title" />
          <h1>{movie.title}</h1>
          <h2>
            {movie.rating} {movie.genres} {movie.year} {movie.runtime}
          </h2>
        </div>
      )}
    </div>
  );
}
// Movie.propTypes = {
//   coverImage: PropTypes.string.isRequired,
// };

export default Detail;
