#Document pour l'obtention d'un access token d'une validité d'1 heure 
import requests
import os 
from dotenv import load_dotenv

load_dotenv()

def get_access_token():
    client_id = os.getenv("ID_CLIENT")
    client_secret = os.getenv("SECRET_CLIENT")

    #GET access token
    data = {
        "grant_type": "client_credentials",
        "client_id" : client_id, 
        "client_secret" : client_secret

    } 
    response = requests.post("https://accounts.spotify.com/api/token", data=data)
    return response.json()["access_token"]

