// Replace these mock functions with Supabase queries when the backend is connected.
// Keep the UI components independent from the data layer.

export async function fetchPosts() {
  return [];
}

export async function createPost(post) {
  return post;
}

export async function updatePost(id, changes) {
  return { id, ...changes };
}

export async function deletePost(id) {
  return id;
}
