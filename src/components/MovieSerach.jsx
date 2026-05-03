import React from 'react'
import MovieList from './MovieList'

const MovieSerach = () => {
    const [searchTerm, setSearchTerm] = React.useState('')
    const [movies, setMovies] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const handleSearch = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=963011b7`)
            const data = await response.json()
            if (data.Response === 'True') {
                setMovies(data.Search)
            } else {
                setError(data.Error)
            }
        } catch {
            setError('Something went wrong')
        } finally {
            setLoading(false)
        }
    }
  return (
    <section className="search-panel">
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      <MovieList movies={movies} loading={loading} error={error} />
    </section>
  )
}

export default MovieSerach
