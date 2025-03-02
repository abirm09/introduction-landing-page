const config = {
  mongodb_uri: process.env.MONGODB_URI!,
  token_secret: process.env.TOKEN_SECRET || "",
  token_cookie_name: process.env.TOKEN_COOKIE_NAME || "pat",
  google_smtp: {
    id: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
  },
  password_reset_token_secret: process.env.PASSWORD_RESET_TOKEN_SECRET || "",
  bcrypt_salt: Number(process.env.BCRYPT_SALT) || 10,
  next_public_site_url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost",
};

export default config;
