const HOST = "http://localhost:3000/api";

export async function getEmail(email) {
  try {
    const response = await fetch(`${HOST}/users/check`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
