import express, { Response as ExResponse, Request as ExRequest } from 'express';
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "../build/routes";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});

RegisterRoutes(app);

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
