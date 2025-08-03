import express from "express";
import { Sum } from "./db";

export const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

app.post("/sum", async (req, res) => {
  const { a, b } = req.body;

  const result = a + b;

  await Sum.create({ a, b, result });

  res.status(201).json({ result });
});

app.get("/sum", async (req, res) => {
  const data = await Sum.find();

  res.status(200).json({ data });
});
