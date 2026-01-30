import { useState } from "react";
import Header from "./Header";

const mockStories = [
  { id: 1, name: "Melody", color: "bg-pink-500" },
  { id: 2, name: "Eminem", color: "bg-violet-500" },
  { id: 3, name: "Adele", color: "bg-indigo-500" },
  { id: 4, name: "Taylor", color: "bg-rose-500" },
  { id: 5, name: "Drake", color: "bg-cyan-500" },
];

const mockPosts = [
  {
    id: 1,
    author: "Melodies",
    handle: "@melodies",
    caption: "Late night vibes 🎧",
    likes: 24300,
    comments: 1200,
    liked: false,
  },
  {
    id: 2,
    author: "Studio Sessions",
    handle: "@studiosessions",
    caption: "New release on repeat 🔁",
    likes: 18900,
    comments: 630,
    liked: false,
  },
  {
    id: 3,
    author: "Weekend Mix",
    handle: "@weekendmix",
    caption: "Playlist of the week ✨",
    likes: 12400,
    comments: 450,
    liked: false,
  },
];

export default function InstagramPage({ isLogin }) {
  const userName = localStorage.getItem("userName");
  const [posts, setPosts] = useState(mockPosts);
  const [newCaption, setNewCaption] = useState("");

  const handleCreatePost = () => {
    if (!newCaption.trim()) return;
    const post = {
      id: posts.length + 1,
      author: userName || "Anonymous",
      handle: "@you",
      caption: newCaption,
      likes: 0,
      comments: 0,
      liked: false,
    };
    setPosts([post, ...posts]);
    setNewCaption("");
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
        <div className="max-w-5xl mx-auto space-y-8">
          <section className="card-surface rounded-2xl p-4">
            <h1 className="section-title">
              Instagram <span className="text-pink-400">Feed</span>
            </h1>
            <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
              {mockStories.map((story) => (
                <div key={story.id} className="flex flex-col items-center">
                  <div
                    className={`size-14 rounded-full ${story.color} border-2 border-pink-300`}
                  />
                  <span className="mt-2 text-xs text-gray-200">
                    {story.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="card-surface rounded-2xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-white">Create post</p>
                <p className="text-xs text-gray-400">Share a moment</p>
              </div>
              <button className="btn btn-ghost">Post</button>
            </div>
            <textarea
              className="input-field w-full rounded-xl px-4 py-3 mt-4"
              placeholder="Write a caption..."
              rows={3}
              value={newCaption}
              onChange={(e) => setNewCaption(e.target.value)}
            />
            <div className="mt-3 flex justify-end">
              <button onClick={handleCreatePost} className="btn btn-primary">
                Publish
              </button>
            </div>
          </section>

          <section className="space-y-6">
            {posts.map((post) => (
              <article
                key={post.id}
                className="card-surface rounded-2xl p-5 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-white">{post.author}</p>
                    <p className="text-xs text-gray-400">{post.handle}</p>
                  </div>
                  <button className="btn btn-ghost">Follow</button>
                </div>
                <div className="h-64 rounded-xl bg-linear-to-br from-pink-500/40 to-blue-500/30" />
                <p className="text-gray-200">{post.caption}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
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
                  <span>💬 {post.comments}</span>
                  <span>↗ Share</span>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
