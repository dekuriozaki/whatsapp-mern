import mongoose, { mongo } from "mongoose";

const whatsappSchema = mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

export default mongoose.model('messagecontent',whatsappSchema)