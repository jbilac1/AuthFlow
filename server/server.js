const express = require("express");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const cors = require("cors");
const flash = require("connect-flash");


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS with credentials
app.use(
  cors({
    origin: "http://localhost:5173", // Your React frontend URL
    credentials: true, // Allow credentials (cookies, sessions)
  })
);

// Express session middleware
app.use(
  session({
    secret: "your_secret_key", // Change this to a secure key
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, // Set to `true` if using HTTPS
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Mock user database
const users = [{ id: 1, username: "test", password: "password123", email: "test@mail.com", cards:[{id: "card1", name: "card1"},{id: "card2", name: "card2"}] }];

// Passport Local Strategy
passport.use(
  new LocalStrategy((username, password, done) => {
    const user = users.find((u) => u.username === username);
    if (!user) return done(null, false, { message: "User not found" });
    if (user.password !== password) return done(null, false, { message: "Incorrect password" });
    return done(null, user);
  })
);

// Serialize and Deserialize User
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  const user = users.find((u) => u.id === id);
  done(null, user);
});

// Login Route
app.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ message: "Logged in successfully", user: req.user });
});

// Logout Route
app.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return res.status(500).json({ message: "Logout failed" });
    res.json({ message: "Logged out successfully" });
  });
});

// Check Session Route
app.get("/session", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.json({ authenticated: false });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
