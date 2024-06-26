import mongoose from "mongoose"
import * as dotenv from 'dotenv'

dotenv.config()

mongoose
    .connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise


const ticketSchema = mongoose.Schema(
    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean,
    },
    {
        timestamps: true,
    }
)

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema)
export default Ticket