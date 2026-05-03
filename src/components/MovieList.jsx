import MovieCard from './MovieCard'

const MovieList = ({ movies, loading, error }) => {
  return (
    <div className="results-wrap">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MovieList
