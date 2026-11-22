function TopAlbums({ albums }) {
  if (albums.length === 0) return <p>Aucun album</p>

  return (
    <div className="albums">
      {albums.map((album, i) => (
        <div className="album" key={album.name}>
          {album.image ? (
            <img src={album.image} alt={album.name} />
          ) : (
            <div className="no-img">?</div>
          )}
          <p className="album-name">{i + 1}. {album.name}</p>
          <p className="album-count">{album.count} titres likés</p>
        </div>
      ))}
    </div>
  )
}

export default TopAlbums
