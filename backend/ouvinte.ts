import mongoose from "mongoose";

const OuvinteSchema = new mongoose.Schema(
  {
    nome: String,
    email: String,
    senha: String,
    numCelular: Number,
  },
  {
    collection: "users",
  }
);

const OuvinteModel = mongoose.model("users", OuvinteSchema);

export default OuvinteModel;
