import axios from "axios";
import querystring from "querystring";

export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: "Authorization code is required" });
  }

  const tenant = process.env.TENANT_ID;
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const redirectUri = process.env.REDIRECT_URI;

  const tokenUrl = `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token`;

  const tokenData = {
    client_id: clientId,
    scope: "offline_access User.Read Mail.Send",
    code: code,
    redirect_uri: redirectUri,
    grant_type: "authorization_code",
    client_secret: clientSecret,
  };

  try {
    const response = await axios.post(
      tokenUrl,
      querystring.stringify(tokenData),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token, refresh_token } = response.data;

    // Store tokens securely, e.g., in a database or session
    // For demonstration, we'll just return them in the response
    return res.status(200).json({ access_token, refresh_token });
  } catch (error) {
    console.error("Error fetching tokens:", error.response.data);
    return res.status(500).json({ error: "Failed to fetch tokens" });
  }
}
