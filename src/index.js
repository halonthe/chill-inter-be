import express from "express";
import cors from "cors";
import {} from "dotenv/config"; // Dotenv ES6 Modules
import { connectToDatabase } from "./config/db.js";
import usersRoutes from "./routes/users.route.js";

const PORT = process.env.SERVER_PORT || 5000;

const app = express();

// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route
app.get("/", (req, res) => {
  console.log(req.method);
  res.send("<h1>Chill Backend</h1>");
});
app.use("/users", usersRoutes);

// connect to mysql first before listen
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        `server is listening on port: http://${process.env.DB_HOST}:${PORT}`
      )
    );
  })
  .catch((error) => {
    console.log("error connecting to database. Error: ", error);
    process.exit(0);
  });
