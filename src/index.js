import express from "express";
import { PORT, SYNC_DB } from "./config/serverConfig.js";
import ApiRoutes from "./routes/index.js";
import { Log } from "./utils/Log.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";

const setupAndStartServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  app.get("/flight-service/health-check", (_, res) =>
    res.status(200).json({ check: true })
  );

  /* Error middleware */
  app.use(errorMiddleware);

  app.listen(PORT, async () => {
    Log.info(`Flight Service - running on http://localhost:${PORT}`);

    /* Sync database manually */
    if (SYNC_DB) {
      const db = (await import("./models/index.js")).default;
      await db.sequelize.sync({ alter: true });
    }
  });
};

setupAndStartServer();
