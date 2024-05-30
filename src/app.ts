import * as express from "express";
import { Request, Response } from "express";
import { myDataSource } from "./app-data-source";
import { FinancialProfile } from "./entity/financialProfile/financialProfile.entity";

// create and setup express app
const app = express();
app.use(express.json());
const port = 8241;

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.get(
  "/financial-profile/health-check",
  async function (req: Request, res: Response) {
    res.send("Financial Profile Service is up and running! congratulations!");
  }
);
// register routes
// Find a way to organize routes in a better way, routes of same entity should be grouped together
app.get("financial-profile/:id", function (req: Request, res: Response) {
  // here we will have logic to return financial profile by id
});

app.post("/financial-profile", async function (req: Request, res: Response) {
  // here we will have logic to create a financial profile
  const financialProfile = await myDataSource
    .getRepository(FinancialProfile)
    .create(req.body);
  const results = await myDataSource
    .getRepository(FinancialProfile)
    .save(financialProfile);
  return res.send(results);
});

app.put("financial-profile/:id", function (req: Request, res: Response) {
  // here we will have logic to update a financial profile by a given financial profile id
});

app.delete("financial-profile/:id", function (req: Request, res: Response) {
  // here we will have logic to delete a financial profile by a given financial profile id
});

// start express server
app.listen(port);
