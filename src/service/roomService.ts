import Room from "../models/room"

class RoomService {

  async addRoom(data: RoomInterface) {
    return await Room.create(data)
  }

  async getAllRoom(){
    return await Room.find()
  }

  async findById(id: string) {
    return await Room.findById(id);
  }

  async update(id: string, updatedData: Partial<RoomInterface>) {
    return await Room.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidator: true,
    });

  }

  async delete(id: string) {
    return await Room.findByIdAndRemove(id);

  }
}

export default new RoomService();