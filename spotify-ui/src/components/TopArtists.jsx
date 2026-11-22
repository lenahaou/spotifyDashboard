function TopArtists({ artists, total }) {
  if (artists.length === 0) return <p>Aucun artiste</p>

  const max = artists[0].count

  return (
    <div>
      {artists.map((artist, i) => (
        <div className="artist" key={artist.name}>
          <span className="artist-rank">{i + 1}</span>
          {artist.image ? (
            <img src={artist.image} alt={artist.name} />
          ) : (
            <div className="no-img">?</div>
          )}
          <div className="artist-info">
            <div className="artist-top">
              <span className="artist-name">{artist.name}</span>
              <span className="artist-count">
                {artist.count} titres ({((artist.count / total) * 100).toFixed(1)}%)
              </span>
            </div>
            <div className="bar">
              <div className="bar-fill" style={{ width: (artist.count / max) * 100 + '%' }}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopArtists
