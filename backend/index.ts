import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import OuvinteModel from "./ouvinte";

const app = express();
app.use(cors());
app.use(express.json());

const mongoUrl =
  "mongodb+srv://checkerly:rU32JNG2XOduDjEy@checkerly.g99lj.mongodb.net/";

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Conectado ao banco de dados"));

require("./ouvinte");
app.post("http://localhost:8080/users", async (req, res) => {
  const { ouvinteName, ouvinteEmail, ouvintePass, ouvinteTel } = req.body;
  try {
    await OuvinteModel.create({
      ouvinteName,
      ouvinteEmail,
      ouvintePass,
      ouvinteTel,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

// !!!! ANTERIOR !!!!
// app.post("registro/registro-ouvinte", async (req, res) => {
//   OuvinteModel.find()
//     .then((users) => res.json(users))
//     .catch((err) => res.json(err));
// });

const port = 5173;
app.listen(port, () => {
  console.log(`
    === Servidor rodando na porta ${port} ===
    `);
});
