// Manage favorite songs in localStorage

const FAVORITES_KEY = "userFavoriteSongs";

// Get all favorite song IDs
export const getFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

// Add a song to favorites
export const addToFavorites = (songId) => {
  const favorites = getFavorites();
  if (!favorites.includes(songId)) {
    favorites.push(songId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
  return favorites;
};

// Remove a song from favorites
export const removeFromFavorites = (songId) => {
  const favorites = getFavorites();
  const updated = favorites.filter((id) => id !== songId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  return updated;
};

// Toggle favorite status
export const toggleFavorite = (songId) => {
  const favorites = getFavorites();
  if (favorites.includes(songId)) {
    return removeFromFavorites(songId);
  } else {
    return addToFavorites(songId);
  }
};

// Check if a song is in favorites
export const isFavorite = (songId) => {
  const favorites = getFavorites();
  return favorites.includes(songId);
};
