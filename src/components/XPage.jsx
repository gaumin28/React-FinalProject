import { useState } from "react";
import Header from "./Header";

const mockTrends = [
  { id: 1, topic: "#NewRelease", count: "42.3K" },
  { id: 2, topic: "#MelodiesTop10", count: "18.7K" },
  { id: 3, topic: "#ChillBeats", count: "9.4K" },
];

const mockPosts = [
  {
    id: 1,
    author: "Melodies",
    handle: "@melodies",
    content: "Now playing: Late Night Drive — add it to your queue 🚘",
    time: "2h",
    likes: 24,
    liked: false,
  },
  {
    id: 2,
    author: "Sound Lab",
    handle: "@soundlab",
    content: "New music video drop! Watch it on the MV player now.",
    time: "5h",
    likes: 18,
    liked: false,
  },
  {
    id: 3,
    author: "Discover Weekly",
    handle: "@discover",
    content: "Fresh picks for your morning focus sessions ☀️",
    time: "1d",
    likes: 9,
    liked: false,
  },
];

export default function XPage({ isLogin }) {
  const userName = localStorage.getItem("userName");
  const [posts, setPosts] = useState(mockPosts);
  const [newPost, setNewPost] = useState("");

  const handleCreatePost = () => {
    if (!newPost.trim()) return;
    const post = {
      id: posts.length + 1,
      author: userName || "Anonymous",
      handle: "@you",
      content: newPost,
      time: "now",
      likes: 0,
      liked: false,
    };
    setPosts([post, ...posts]);
    setNewPost("");
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

  return (
    <>
      <Header isLogin={isLogin} />
      <main className="flex-1 p-4 md:p-6">
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-[minmax(0,1fr)_280px]">
          <section className="space-y-5">
            <div className="card-surface rounded-2xl p-5">
              <h1 className="section-title">
                X <span className="text-pink-400">Timeline</span>
              </h1>
              <textarea
                className="input-field w-full rounded-xl px-4 py-3 mt-4"
                placeholder="Share a thought about your music..."
                rows={3}
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
              />
              <div className="mt-3 flex justify-end">
                <button onClick={handleCreatePost} className="btn btn-primary">
                  Post
                </button>
              </div>
            </div>

            {posts.map((post) => (
              <article
                key={post.id}
                className="card-surface rounded-2xl p-5 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">{post.author}</p>
                    <p className="text-xs text-gray-400">
                      {post.handle} • {post.time}
                    </p>
                  </div>
                  <button className="btn btn-ghost">Follow</button>
                </div>
                <p className="text-gray-200">{post.content}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>💬 Reply</span>
                  <span>🔁 Repost</span>
                  <button
                    onClick={() => handleLikePost(post.id)}
                    className={`rounded-full border px-3 py-1 transition ${
                      post.liked
                        ? "border-pink-400 text-pink-300"
                        : "border-white/20 text-gray-300"
                    }`}
                  >
                    ❤️ {post.likes}
                  </button>
                </div>
              </article>
            ))}
          </section>

          <aside className="space-y-4">
            <div className="card-surface rounded-2xl p-4">
              <h3 className="font-semibold text-white">Trends</h3>
              <div className="mt-3 space-y-3">
                {mockTrends.map((trend) => (
                  <div key={trend.id}>
                    <p className="text-pink-300 font-semibold">{trend.topic}</p>
                    <p className="text-xs text-gray-400">{trend.count} posts</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
