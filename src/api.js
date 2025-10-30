const BASE_URL = import.meta.env.PROD
  ? "https://show-off-backend.vercel.app"
  : ""; // use Vite proxy in dev

export const api = async (path, options = {}) => {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
        ...options,
    credentials:"include"});
    return res; // ✅ return full Response (not .json())
  } catch (err) {
    console.error("Network error:", err);
    throw err;
  }
};
