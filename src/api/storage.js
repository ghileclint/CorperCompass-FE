// Optional Supabase Storage adapter.
// Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY before wiring this into the UI.

export async function uploadPostImage(supabase, file, userId) {
  const extension = file.name.split(".").pop();
  const path = `${userId}/${crypto.randomUUID()}.${extension}`;

  const { error } = await supabase.storage
    .from("post-images")
    .upload(path, file, { upsert: false, contentType: file.type });

  if (error) throw error;

  const { data } = supabase.storage
    .from("post-images")
    .getPublicUrl(path);

  return data.publicUrl;
}
