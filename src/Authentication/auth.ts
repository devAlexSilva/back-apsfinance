import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { secret } from "../Modules/login/model/SignPrismaRepository";

type decodedId = {
  id: string
}
export const Authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: "token is required" });

  const isValidToken = token.replace("Bearer ", "");

  jwt.verify(isValidToken, secret, (err, decoded) => {
    if (err) return res.status(401).json({ error: "invalid token" });

    const deco = decoded as decodedId 
    req.params.id = deco.id
    next();
  });
};
