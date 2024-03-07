import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, id] }
        })
        if (!conversation) {
            conversation = new Conversation({
                participants: [senderId, id]
            });
        }

        const newMessage = new Message({
            senderId: senderId,
            recieverId: id,
            message: message
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()]);
        res.status(200).json(newMessage);
    } catch (error) {
        console.log("Error in message controller,", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
};

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatID } = req.params;
        const senderId = req.user.id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatID] }
        }).populate("messages");   //not refrence but message itself

        if (!conversation) {
            return res.status(200).json([]);
        }

        res.status(200).json({ msg: conversation.messages });
    }

    catch (error) {
        console.log("Error in getMessage controller,", error.message);
        res.status(500).json({ error: "Internal Server Error" })
    }
}