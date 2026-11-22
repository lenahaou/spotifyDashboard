const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000'

/**
 * Récupère les statistiques depuis le backend Flask (route GET /data).
 * Format attendu :
 * {
 *   top_artists: [{ name, count, image }],
 *   top_albums:  [{ name, count, image }],
 *   total_liked_tracks: number
 * }
 */
export async function fetchSpotifyStats() {
  const response = await fetch(`${API_URL}/data`)
  if (!response.ok) {
    throw new Error(`Le serveur a répondu avec le code ${response.status}`)
  }
  return response.json()
}

export { API_URL }
