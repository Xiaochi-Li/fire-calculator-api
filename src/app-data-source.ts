import { DataSource } from "typeorm";
import { FinancialProfile } from "./entity/financialProfile/financialProfile.entity";

export const myDataSource = new DataSource({
  type: "mysql",
  // When running the application inside a Docker container, we need to connect to services (like databases)
  // that are running on the host machine. Docker provides a special DNS name, `host.docker.internal`,
  // which resolves to the internal IP address of the host machine. This allows the application inside
  // the Docker container to access services on the host machine.
  // host: "localhost",
  port: 3306,
  username: "fjdlsajfel",
  password: "fjdsaljfksdla",
  database: "fire-calculator",
  entities: [FinancialProfile],
  logging: true,
  synchronize: true,
});
