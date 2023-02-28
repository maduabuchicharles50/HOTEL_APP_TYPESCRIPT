import {Request, Response} from "express";
const _ = require("lodash");

import roomService from "../service/roomService";

class RoomController {
    
  async create(req: Request, res: Response) {

    const newRoom = await roomService.addRoom(req.body);

    return res.status(201).send({
      success: true,
      message: "Room created successfully",
      data: newRoom,
    });
    
  }

  async getAllRoom(req: Request, res: Response) {
    const room = await roomService.getAllRoom();

    if (!room) {
      return res.status(404).send({
        success: false,
        message: "Room not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Room type found",
      data: room,
    });
  }

  async findById(req: Request, res: Response) {
    const room = await roomService.findById(req.params.id);

    if (!room) {
      return res.status(404).send({
        success: false,
        message: "Room not Found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Room found successfully",
      data: room,
    });
  }

  async update(req: Request, res: Response) {
    const room = await roomService.update(req.params.id, req.body);

    return res.status(200).send({
      success: true,
      message: "Room updated successfully",
      data: room,
    });
  }

  async delete(req: Request, res: Response) {
    const room = await roomService.delete(req.params.id);

    return res.status(200).send({
      success: true,
      message: "updated room successfully",
      data: room,
    });
  }
}

export default new RoomController();
