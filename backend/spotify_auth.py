import os
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from dotenv import load_dotenv

load_dotenv()

sp = spotipy.Spotify(
    auth_manager=SpotifyOAuth(
        client_id=os.getenv("ID_CLIENT"),
        client_secret=os.getenv("SECRET_CLIENT"),
        redirect_uri="http://127.0.0.1:3000",
        scope="user-library-read user-read-private user-top-read"  
    )
)