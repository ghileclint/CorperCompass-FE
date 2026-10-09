import { useMemo, useState } from "react";

const initialPosts = [
  {
    id: "1",
    user: {
      id: "user-1",
      name: "Eleanor Pena",
      avatar: "https://i.pravatar.cc/160?img=47",
      verified: true,
      vendor: true
    },
    content:
      "Finally sorted my clearance at the local government secretariat.\nTip for new corps in Zone B: Go early on Tuesdays, it's less crowded than Mondays!",
    image: null,
    audience: "Everyone",
    createdAt: "14h",
    likes: 9,
    comments: [],
    shares: 3,
    liked: false,
    saved: true,
    owner: false
  },
  {
    id: "2",
    user: {
      id: "user-2",
      name: "Courtney Henry",
      avatar: "https://i.pravatar.cc/160?img=32",
      verified: true,
      vendor: false
    },
    content:
      "Found a quiet spot with excellent food around Zone B. Sharing it here for anyone looking for somewhere relaxed this weekend.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    audience: "Everyone",
    createdAt: "14h",
    likes: 14,
    comments: [],
    shares: 4,
    liked: false,
    saved: false,
    owner: false
  },
  {
    id: "3",
    user: {
      id: "current-user",
      name: "Myles",
      avatar: "https://i.pravatar.cc/160?img=12",
      verified: true,
      vendor: true
    },
    content:
      "Anyone know a reliable vendor for event rentals this month? Looking for chairs, tables and a small canopy.",
    image: null,
    audience: "Everyone",
    createdAt: "1d",
    likes: 6,
    comments: [],
    shares: 1,
    liked: false,
    saved: false,
    owner: true
  }
];

/**
 * Holds the in-memory posts store (mock data) and the CRUD API passed down
 * to the content-creation feature. Extracted out of App.jsx so that App.jsx
 * only needs to own routing.
 */
export default function usePosts() {
  const [posts, setPosts] = useState(initialPosts);

  const api = useMemo(
    () => ({
      createPost(post) {
        setPosts((prev) => [post, ...prev]);
      },

      updatePost(id, changes) {
        setPosts((prev) =>
          prev.map((p) => (p.id === id ? { ...p, ...changes } : p))
        );
      },

      deletePost(id) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
      }
    }),
    []
  );

  return { posts, api };
}
