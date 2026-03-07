# Spotify Dashboard

Dashboard personnel qui affiche mes statistiques d'écoute Spotify :
top artistes, top albums et nombre total de titres likés.

## Technologies utilisées

- **React** — interface utilisateur
- **Flask** — API backend
- **Spotipy** — connexion à l'API Spotify

## Installation

### Backend (Flask)

```bash
cd backend
pip install -r requirements.txt
```

Créer un fichier `.env` avec identifiants Spotify :

```
ID_CLIENT=ton_client_id
SECRET_CLIENT=ton_client_secret
```

Lancer le serveur :

```bash
python app.py
```

### Frontend (React)

```bash
cd spotify-ui
npm install
npm start
```
