import RoomType from "../models/roomType";

class RoomTypeService {
  async addRoomType(data: RoomTypeInterface) {
    return await RoomType.create(data);
  }

  async getAllRoomType() {
     return await RoomType.find();

  }

  async getRoomTypeById(id: string) {
    return await RoomType.findById(id)

  }

  async update(id: string, updateData: Partial<RoomTypeInterface>) {
    const roomType = await RoomType.findOneAndUpdate({ _id: id }, updateData, {
      new: true,
      runValidators: true,
    });

    return roomType;
  }

  async delete(id: string) {
    const roomType = await RoomType.findByIdAndRemove(id);
    return roomType;
  }
}

export default new RoomTypeService();
