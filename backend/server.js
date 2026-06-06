import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import enquiryRouter from "./routes/enquiry.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://srivelan-frontend.vercel.app",
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/enquiry", enquiryRouter);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Sri Velan API is running." });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
