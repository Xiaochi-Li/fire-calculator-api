import { DataSource } from "typeorm";

export const myDataSource = new DataSource({
  type: "mysql",
  host: "host.docker.internal",
  // host: "localhost",
  port: 3306,
  username: "fjdlsajfel",
  password: "fjdsaljfksdla",
  database: "fire-calculator",
  entities: ["src/entity/**/*.js"],
  logging: true,
  synchronize: true,
});
