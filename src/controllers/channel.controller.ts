import { myDataSource } from "../../data-source";
import { Channel } from "../entities/channel.entity";
import messageController from "./message.controller";

class ChannelController {
    public constructor() {}

    /**
     * Create a new channel
     * @param {string} capacity
     * @param {string} message_path
     * @returns {Promise<Channel>}
     */
    public async create(capacity: number) {
        const channel = new Channel();
        channel.capacity = capacity;
        channel.message_path = messageController.createUUIDFile();
        messageController.create(channel.message_path);
        return myDataSource.manager.save(channel);
    }

    /**
     * Update a channel
     * @param {number} id
     * @param {number} capacity
     * @param {string} message_path
     * @returns {Promise<Channel>}
     */
    public async update(id: number, capacity: number, message_path: string) {
        const channel = await myDataSource.manager.findOne(Channel, {
            where: {
                id: id,
            }
        });

        if (!channel) throw new Error(`Channel with ID ${id} does not exist.`);

        channel.capacity = capacity;
        channel.message_path = message_path;
        return myDataSource.manager.save(channel);
    }

    /**
     * Delete a channel
     * @param {number} id
     * @returns {Promise<void>}
     */
    public delete(id: number) {
        return myDataSource.manager.delete(Channel, { id: id });
    }
}

export default new ChannelController();
