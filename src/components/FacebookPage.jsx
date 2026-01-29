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

      <main className="min-h-screen bg-white flex justify-center">
        <div className="max-w-5xl w-full space-y-6">
          <section className="bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-full bg-[#1877f2] text-white font-bold flex items-center justify-center">
                {(userName || "M").charAt(0)}
              </div>
              <div>
                <p className="text-[#1c1e21] font-bold">Melody Community</p>
                <p className="text-gray-500 text-sm">
                  Share what you are listening to
                </p>
              </div>
            </div>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full bg-[#f0f2f5] text-[#1c1e21] rounded-lg p-3 mb-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#1877f2]"
              rows="3"
            />
            <div className="grid grid-cols-2 gap-2 mb-3">
              <input
                type="text"
                value={newSong}
                onChange={(e) => setNewSong(e.target.value)}
                placeholder="Song"
                className="bg-[#f0f2f5] text-[#1c1e21] rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1877f2]"
              />
              <input
                type="text"
                value={newArtist}
                onChange={(e) => setNewArtist(e.target.value)}
                placeholder="Artist"
                className="bg-[#f0f2f5] text-[#1c1e21] rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1877f2]"
              />
            </div>
            <button
              onClick={handleCreatePost}
              className="w-full bg-[#1877f2] hover:bg-[#166fe5] text-white font-bold py-2 rounded-lg transition"
            >
              Post
            </button>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-4">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-[#e4e6eb] flex items-center justify-center text-xl">
                      {post.avatar}
                    </div>
                    <div>
                      <p className="text-[#1c1e21] font-bold">{post.author}</p>
                      <p className="text-gray-500 text-sm">{post.timestamp}</p>
                    </div>
                  </div>
                  <p className="text-[#1c1e21] mb-3">{post.content}</p>
                  <div className="bg-[#f0f2f5] rounded-lg p-3 mb-3 border border-[#e5e7eb]">
                    <p className="text-[#1877f2] font-bold text-sm">
                      🎵 {post.song}
                    </p>
                    <p className="text-gray-600 text-sm">{post.artist}</p>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500 text-sm mb-3">
                    <span>{post.likes} likes</span>
                    <span>•</span>
                    <span>{post.comments} comments</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleLikePost(post.id)}
                      className={`flex-1 py-2 rounded-lg border font-bold transition ${
                        post.liked
                          ? "bg-[#1877f2] border-[#1877f2] text-white"
                          : "border-[#ccd0d5] text-[#1c1e21] hover:border-[#1877f2]"
                      }`}
                    >
                      {post.liked ? "Liked" : "Like"}
                    </button>
                    <button className="flex-1 py-2 rounded-lg border border-[#ccd0d5] text-[#1c1e21] font-bold hover:border-[#1877f2] transition">
                      Comment
                    </button>
                    <button className="flex-1 py-2 rounded-lg border border-[#ccd0d5] text-[#1c1e21] font-bold hover:border-[#1877f2] transition">
                      Share
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <aside className="space-y-4">
              <div className="bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-sm">
                <h3 className="text-[#1c1e21] font-bold mb-3">Trending</h3>
                <div className="space-y-3">
                  {trendingMusic.map((music) => (
                    <div
                      key={music.id}
                      className="p-2 rounded-lg hover:bg-[#f0f2f5] transition"
                    >
                      <p className="text-[#1877f2] font-bold text-sm">
                        {music.name}
                      </p>
                      <p className="text-gray-600 text-xs">{music.artist}</p>
                      <p className="text-gray-500 text-xs">{music.trend}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-[#e5e7eb] rounded-xl p-4 shadow-sm">
                <h3 className="text-[#1c1e21] font-bold mb-3">
                  People you may know
                </h3>
                <div className="space-y-3">
                  {friendSuggestions.map((friend) => (
                    <div
                      key={friend.id}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="text-[#1c1e21] text-sm font-bold">
                          {friend.name}
                        </p>
                        <p className="text-gray-600 text-xs">
                          {friend.mutualFriends} mutual
                        </p>
                      </div>
                      <button className="px-3 py-1 bg-[#1877f2] hover:bg-[#166fe5] text-white text-xs font-bold rounded-lg transition">
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
