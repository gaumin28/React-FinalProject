// Key used to store favorites in localStorage
const FAVORITES_KEY = "userFavoriteSongs";

export const getFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const addToFavorites = (songId) => {
  const favorites = getFavorites();
  // Only add if not already in favorites
  if (!favorites.includes(songId)) {
    favorites.push(songId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
  return favorites;
};

export const removeFromFavorites = (songId) => {
  const favorites = getFavorites();
  const updated = favorites.filter((id) => id !== songId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  return updated;
};

export const toggleFavorite = (songId) => {
  const favorites = getFavorites();
  if (favorites.includes(songId)) {
    return removeFromFavorites(songId);
  } else {
    return addToFavorites(songId);
  }
};

export const isFavorite = (songId) => {
  const favorites = getFavorites();
  return favorites.includes(songId);
};
