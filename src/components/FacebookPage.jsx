import { useState } from "react";
import Header from "./Header";

export default function FacebookPage({ isLogin }) {
  const userName = localStorage.getItem("userName");

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Melody User",
      avatar: "👤",
      content: "Just discovered this amazing new playlist! 🎵",
      song: "Blinding Lights",
      artist: "The Weeknd",
      timestamp: "2 hours ago",
      likes: 42,
      comments: 8,
      liked: false,
    },
    {
      id: 2,
      author: "Music Lover",
      avatar: "🎧",
      content: "Eminem's new album is 🔥🔥🔥",
      song: "Lose Yourself",
      artist: "Eminem",
      timestamp: "5 hours ago",
      likes: 156,
      comments: 23,
      liked: false,
    },
    {
      id: 3,
      author: "Playlist Creator",
      avatar: "🎹",
      content: "Creating the ultimate chill vibes playlist for my drive",
      song: "Good As Hell",
      artist: "Lizzo",
      timestamp: "1 day ago",
      likes: 89,
      comments: 12,
      liked: false,
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [newSong, setNewSong] = useState("");
  const [newArtist, setNewArtist] = useState("");
  const handleCreatePost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: userName || "Anonymous",
        avatar: "👤",
        content: newPost,
        song: newSong || "Unknown",
        artist: newArtist || "Unknown Artist",
        timestamp: "Just now",
        likes: 0,
        comments: 0,
        liked: false,
      };
      setPosts([post, ...posts]);
      setNewPost("");
      setNewSong("");
      setNewArtist("");
    }
  };
  const handleLikePost = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    );
  };

  const trendingMusic = [
    {
      id: 1,
      name: "Blinding Lights",
      artist: "The Weeknd",
      trend: "Trending #1",
    },
    { id: 2, name: "Shape of You", artist: "Ed Sheeran", trend: "Trending #2" },
    { id: 3, name: "Levitating", artist: "Dua Lipa", trend: "Trending #3" },
    { id: 4, name: "Anti-Hero", artist: "Taylor Swift", trend: "Trending #4" },
    {
      id: 5,
      name: "Heat Waves",
      artist: "Glass Animals",
      trend: "Trending #5",
    },
  ];

  const friendSuggestions = [
    { id: 1, name: "Music Lover", mutualFriends: 12 },
    { id: 2, name: "Playlist Creator", mutualFriends: 8 },
    { id: 3, name: "DJ Mix Master", mutualFriends: 15 },
    { id: 4, name: "Indie Fan", mutualFriends: 5 },
  ];

  return (
    <>
      <Header isLogin={isLogin} />

      <main className="flex-1 p-4 md:p-6 bg-[#f2f4f7]">
        <div className="max-w-5xl w-full mx-auto space-y-6">
          <section className="card-surface rounded-xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-pink-500 text-white font-bold flex items-center justify-center">
                {(userName || "M").charAt(0)}
              </div>
              <div>
                <p className="text-white font-bold">Melody Community</p>
                <p className="text-gray-300 text-sm">
                  Share what you are listening to
                </p>
              </div>
            </div>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's on your mind?"
              className="input-field w-full rounded-lg p-3 mb-3 resize-none"
              rows="3"
            />
            <div className="grid grid-cols-2 gap-2 mb-3">
              <input
                type="text"
                value={newSong}
                onChange={(e) => setNewSong(e.target.value)}
                placeholder="Song"
                className="input-field rounded-lg p-2 text-sm"
              />
              <input
                type="text"
                value={newArtist}
                onChange={(e) => setNewArtist(e.target.value)}
                placeholder="Artist"
                className="input-field rounded-lg p-2 text-sm"
              />
            </div>
            <button
              onClick={handleCreatePost}
              className="btn btn-primary w-full"
            >
              Post
            </button>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-4">
              {posts.map((post) => (
                <article key={post.id} className="card-surface rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-xl">
                      {post.avatar}
                    </div>
                    <div>
                      <p className="text-white font-bold">{post.author}</p>
                      <p className="text-gray-400 text-sm">{post.timestamp}</p>
                    </div>
                  </div>
                  <p className="text-gray-200 mb-3">{post.content}</p>
                  <div className="bg-white/5 rounded-lg p-3 mb-3 border border-white/10">
                    <p className="text-pink-300 font-bold text-sm">
                      🎵 {post.song}
                    </p>
                    <p className="text-gray-400 text-sm">{post.artist}</p>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-sm mb-3">
                    <span>{post.likes} likes</span>
                    <span>•</span>
                    <span>{post.comments} comments</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleLikePost(post.id)}
                      className={`flex-1 py-2 rounded-lg border font-bold transition ${
                        post.liked
                          ? "bg-pink-500 border-pink-500 text-black"
                          : "border-white/20 text-white hover:border-pink-400"
                      }`}
                    >
                      {post.liked ? "Liked" : "Like"}
                    </button>
                    <button className="flex-1 py-2 rounded-lg border border-white/20 text-white font-bold hover:border-pink-400 transition">
                      Comment
                    </button>
                    <button className="flex-1 py-2 rounded-lg border border-white/20 text-white font-bold hover:border-pink-400 transition">
                      Share
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-4">
              <div className="card-surface rounded-xl p-4">
                <h3 className="text-white font-bold mb-3">Trending</h3>
                <div className="space-y-3">
                  {trendingMusic.map((music) => (
                    <div
                      key={music.id}
                      className="p-2 rounded-lg hover:bg-white/5 transition"
                    >
                      <p className="text-pink-300 font-bold text-sm">
                        {music.name}
                      </p>
                      <p className="text-gray-400 text-xs">{music.artist}</p>
                      <p className="text-gray-500 text-xs">{music.trend}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-surface rounded-xl p-4">
                <h3 className="text-white font-bold mb-3">
                  People you may know
                </h3>
                <div className="space-y-3">
                  {friendSuggestions.map((friend) => (
                    <div
                      key={friend.id}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="text-white text-sm font-bold">
                          {friend.name}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {friend.mutualFriends} mutual
                        </p>
                      </div>
                      <button className="btn btn-primary text-xs px-3 py-1">
                        Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
