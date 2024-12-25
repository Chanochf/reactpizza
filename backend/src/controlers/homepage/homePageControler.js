import { Request, Response } from "express";

export const homeStart = async (req, res) => {
  res.type("text/plain");
  res.status(200);
  res.send("GeeksforGeeks");
};
