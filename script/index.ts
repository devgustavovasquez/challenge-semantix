import * as dotenv from "dotenv";
import axios from "axios";
import { formatDataUsers } from "./format-data-users";
import { connect, disconnect } from "./database/setup-database";
import { saveUsers } from "./database/save-users";

const LIMIT_USERS_QTY = 10;

(async () => {
  dotenv.config();
  const apiUrl = `http://localhost:${process.env.APP_PORT}/users`;
  const dbUrl = process.env.DB_CONN_STRING as string;

  try {
    await connect(dbUrl);

    const { data } = await axios.get(apiUrl, {
      params: {
        limit: LIMIT_USERS_QTY,
      },
    });

    const users = formatDataUsers(data);

    await saveUsers(users);

    await disconnect();
  } catch (error) {
    throw error as unknown;
  }
})();
