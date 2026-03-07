from flask import Flask, jsonify
from flask_cors import CORS
from data_fetcher import get_all_spotify_stats

app = Flask(__name__)
CORS(app)

@app.route("/data")
def top_artists():
    return jsonify(get_all_spotify_stats())

if __name__ == "__main__":
    app.run(debug=True)