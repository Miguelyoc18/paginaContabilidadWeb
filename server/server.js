const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mailRoutes = require("./routes/mail");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/mail", mailRoutes);

app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
