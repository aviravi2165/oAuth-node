import "dotenv/config";
import express from "express";
import cors from "cors";
import passport from "passport";
import authRoutes from "./auth/routers/authRoutes.js";

import cookieSession from "cookie-session";
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(
  cookieSession({
    name: "gym-tracker",
    keys: ["key1", "key2"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);

app.listen(PORT, () => {
  const timstamp = new Date();
  console.log(
    `${
      process.env.URL
    }:${PORT}/google - ${
      timstamp
        .toISOString()
        .split("T")[1]
    }`
  );
});
