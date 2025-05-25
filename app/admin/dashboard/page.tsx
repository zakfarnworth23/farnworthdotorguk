"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const { register, handleSubmit, reset } = useForm();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      reset();
      fetchPosts();
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Create a New Post</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block font-medium mb-1" htmlFor="title">Title</label>
            <input className="w-full border border-gray-300 p-2 rounded" id="title" {...register("title", { required: true })} />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="slug">Slug</label>
            <input className="w-full border border-gray-300 p-2 rounded" id="slug" {...register("slug", { required: true })} />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="excerpt">Excerpt</label>
            <textarea className="w-full border border-gray-300 p-2 rounded" id="excerpt" {...register("excerpt", { required: true })}></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="content">Content</label>
            <textarea className="w-full border border-gray-300 p-2 rounded h-40" id="content" {...register("content", { required: true })}></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="imageUrl">Image URL</label>
            <input className="w-full border border-gray-300 p-2 rounded" id="imageUrl" {...register("imageUrl")} />
          </div>

          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" disabled={loading}>
            {loading ? "Posting..." : "Publish Post"}
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Existing Posts</h2>
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.id} className="border-b pb-2">
              <strong>{post.title}</strong> <span className="text-sm text-gray-500">/{post.slug}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
