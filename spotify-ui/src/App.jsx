import { useEffect, useState } from 'react'
import { fetchSpotifyStats, API_URL } from './api'
import StatCard from './components/StatCard'
import TopArtists from './components/TopArtists'
import TopAlbums from './components/TopAlbums'

function App() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function loadStats() {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchSpotifyStats()
      setStats(data)
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    loadStats()
  }, [])

  return (
    <div className="container">
      <div className="header">
        <h1>Dashboard Spotify</h1>
        <button onClick={loadStats} disabled={loading}>
          {loading ? 'Chargement...' : 'Actualiser'}
        </button>
      </div>

      {loading && !stats && <p className="loading">Chargement des données...</p>}

      {error && (
        <div className="error">
          <p><b>Erreur :</b> {error}</p>
          <p>Vérifie que le backend tourne bien sur {API_URL}</p>
        </div>
      )}

      {stats && !error && (
        <>
          <div className="stats-row">
            <StatCard
              title="Titres likés"
              value={stats.total_liked_tracks}
              big
            />
            <StatCard
              title="Artiste n°1"
              value={stats.top_artists[0]?.name || '-'}
              sub={stats.top_artists[0] && stats.top_artists[0].count + ' titres likés'}
            />
            <StatCard
              title="Album n°1"
              value={stats.top_albums[0]?.name || '-'}
              sub={stats.top_albums[0] && stats.top_albums[0].count + ' titres likés'}
            />
          </div>

          <div className="main-row">
            <div className="card artists-card">
              <h2>Top 5 artistes</h2>
              <TopArtists artists={stats.top_artists} total={stats.total_liked_tracks} />
            </div>

            <div className="card albums-card">
              <h2>Top 5 albums</h2>
              <TopAlbums albums={stats.top_albums} />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App
