const HOST = "https://mastergames.vercel.app/api";

export async function getFavorites() {
  try {
    const response = await fetch(`${HOST}/favorites`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function addFavorite(favorite) {
  try {
    const response = await fetch(`${HOST}/favorites`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favorite),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
export async function deleteFavorite(id) {
  try {
    const response = await fetch(`${HOST}/favorites/${id}`, {
      method: "DELETE",
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
export async function getFavorite(id) {
  try {
    const response = await fetch(`${HOST}/favorites/${id}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
