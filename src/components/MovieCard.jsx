const MovieCard = ({ movie }) => {
    console.log(movie)
  return (
    <article className="movie-card">
      <div className="movie-poster-wrap">
        <img
          className="movie-poster"
          src={movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/480x720?text=No+Poster'}
          alt={`${movie.Title} poster`}
        />
      </div>

      <div className="movie-card-body">
        <div className="movie-card-header">
          <h3>{movie.Title}</h3>
          <span className="movie-year">{movie.Year}</span>
        </div>
        <p className="movie-meta">
          {movie.Genre} · {movie.Runtime} · {movie.Rated}
        </p>
        <p className="movie-plot">{movie.Plot}</p>

       
      </div>
    </article>
  )
}

export default MovieCard
