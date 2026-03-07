from spotify_auth import sp


def get_all_spotify_stats():

    artistes = {}
    albums = {}

    results = sp.current_user_saved_tracks(limit=50)
    tracks = results["items"]

    while results["next"]:
        results = sp.next(results)
        tracks.extend(results["items"])

    for item in tracks:

        track = item["track"]

        # ===== ARTISTES =====
        for artist in track["artists"]:
            name = artist["name"]
            artist_id = artist["id"]

            if name not in artistes:
                artistes[name] = {
                    "count": 0,
                    "id": artist_id,
                    "image": track["album"]["images"][0]["url"] if track["album"]["images"] else None
                }

            artistes[name]["count"] += 1

        # ===== ALBUMS =====
        album = track["album"]
        album_name = album["name"]
        album_id = album["id"]

        if album_name not in albums:
            albums[album_name] = {
                "count": 0,
                "id": album_id,
                "image": album["images"][0]["url"] if album["images"] else None
            }

        albums[album_name]["count"] += 1

    # ===== TOP ARTISTES =====
    top_artists = sorted(
        artistes.items(),
        key=lambda x: x[1]["count"],
        reverse=True
    )[:5]

    artists_result = []
    for artist in top_artists:
        artists_result.append({
            "name": artist[0],
            "count": artist[1]["count"],
            "image": artist[1]["image"]
        })

    # ===== TOP ALBUMS =====
    top_albums = sorted(
        albums.items(),
        key=lambda x: x[1]["count"],
        reverse=True
    )[:5]

    albums_result = []
    for album in top_albums:
        albums_result.append({
            "name": album[0],
            "count": album[1]["count"],
            "image": album[1]["image"]
        })

    return {
        "top_artists": artists_result,
        "top_albums": albums_result,
        "total_liked_tracks": len(tracks)
    }


print(get_all_spotify_stats())