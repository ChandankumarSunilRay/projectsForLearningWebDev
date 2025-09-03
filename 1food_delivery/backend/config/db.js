import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://chandan128902:CL6Qw3XmaPgGTtWU@clusterone.qc9gftw.mongodb.net/food-del').then(() => console.log("DB Connected"))
}

