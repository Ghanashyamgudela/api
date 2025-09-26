const clientId = "b2311c59d476464f84beb5dd2cab884e"; // Replace with your Client ID
const redirectUri = "https://localhost:3000/callback.html"; // Make sure this matches your dashboard
const scopes = "user-read-private user-read-email";

function login() {
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
  window.location = authUrl;
}
