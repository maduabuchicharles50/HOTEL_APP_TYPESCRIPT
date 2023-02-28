import {Request, Response, NextFunction} from "express";
require("dotenv").config();
import jsonwebtoken from "jsonwebtoken"
const { SECRET = "secret" } = process.env;

// Middlewares for authorization
const isLoggedIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // checking the auth header
    if (req.headers.authorization) {
      // parse header
       //split the header and take the payload
      const token = req.headers.authorization.split(" ")[1];
      if (token) {
        const payload = await jsonwebtoken.verify(token, SECRET);
        if (payload) {
          // store user data
          next();
        } else {
          return res.status(400).json({ error: "Token verification failed" });
        }
      } else {
        return res.status(400).json({ error: "Incorrect auth header" });
      }
    } else {
      return res.status(400).json({ error: "Access denied" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};



export default isLoggedIn;