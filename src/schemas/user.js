import { decodeBase64 } from 'bcryptjs';
import mongoose,{Schema} from 'mongoose';
import mongoose from 'mongoose';

const userSchema = new Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    phone: String
});

export default new mongoose.model("Users",userSchema);