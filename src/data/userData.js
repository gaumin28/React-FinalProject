import axios from "axios";

const API_KEY = "69513911fdb0c381f6e2b9a6";
const API_URL = `https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=${API_KEY}`;

// Function to fetch users from API
export const fetchUsersFromAPI = async () => {
  try {
    const response = await axios.get(API_URL);
    const users = response.data.data.data || [];

    // Add favouriteSongs property if it doesn't exist
    return users.map((user) => ({
      ...user,
      favouriteSongs: user.favouriteSongs || [],
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// Local fallback data in case API fails
export const localUserData = [
  {
    id: 1,
    username: "alex_music_lover",
    email: "alex@example.com",
    password: "password123",
    favouriteSongs: [1, 3, 5, 7, 9],
  },
  {
    id: 2,
    username: "music_vibes",
    email: "vibes@example.com",
    password: "password456",
    favouriteSongs: [2, 4, 6, 8, 10],
  },
  {
    id: 3,
    username: "rhythm_king",
    email: "rhythm@example.com",
    password: "password789",
    favouriteSongs: [1, 2, 3, 11, 12],
  },
];

export default localUserData;
