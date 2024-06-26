
import { Document } from "mongoose";


interface Topic extends Document{
    _id: string;
    title: string;
    image: string;
    completed: boolean;
    inProgress: boolean;
}

export default Topic