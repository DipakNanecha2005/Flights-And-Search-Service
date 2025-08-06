import express from "express";
import { PORT } from "./config/serverConfig.js";

const setupAndStartServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/health-check", (_, res) => res.status(200).json({ check: true }));

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

setupAndStartServer();
