import MovieSerach from './components/MovieSerach'
import './components/MovieVCard.css'

const App = () => {
  return (
    <div className="app-shell">
      {/* <header className="hero">
        <p className="eyebrow">Movie Explorer</p>
        <h1>Search, scan, and compare films with a unified gradient UI.</h1>
        <p className="hero-copy">
          A polished movie search experience with consistent cards, controls, and results.
        </p>
      </header> */}

      <MovieSerach />
    </div>
  )
}

export default App
