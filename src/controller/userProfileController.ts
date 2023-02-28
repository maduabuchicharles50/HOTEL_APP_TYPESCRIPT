import { Request, Response } from "express";

import bcrypt from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"
import userProfile from "../models/userProfile";

const { SECRET = "secret" } = process.env;

class UserProfileController {

    // register user
    async register(req: Request, res: Response) {

        req.body.password = await bcrypt.hash(req.body.password, 8);

        const user = await userProfile.create(req.body)
        return res.status(201).send({
        success: true,
        message: "User created",
        data: user,
        })
    }

    // login user
    async login(req: Request, res: Response) {
        try {
            const user = await userProfile.findOne({ username: req.body.username });
            if (user) {

              const result = await bcrypt.compare(req.body.password, user.password);
              if (result) {

                const token = await jsonwebtoken.sign({ username: user.username }, SECRET);
                return res.json({ token });

              } else {
                return res.status(400).json({ error: "password doesn't match" });
              }
            } else {
              return res.status(400).json({ error: "User doesn't exist" });
            }
          } catch (error) {

            return res.status(400).json({ error });

        }
    }
}

export default new UserProfileController();