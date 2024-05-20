import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import express from "express";
const swaggerRouter = express.Router();

// para importar um json como ESModule
import swaggerDocs from "../swagger.json" assert { type: "json" };

swaggerRouter.use(bodyParser.json());
swaggerRouter.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export { swaggerRouter };
