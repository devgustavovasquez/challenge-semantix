import * as dotenv from "dotenv";
import axios from "axios";
import { formatDataUsers } from "./format-data-users";
import { connect } from "./database/setup-database";
import { saveUsers } from "./database/save-users";

(async () => {
  dotenv.config();
  const apiUrl = `http://localhost:${process.env.APP_PORT}/users`;
  const dbUrl = process.env.DB_CONN_STRING as string;

  try {
    await connect(dbUrl);

    const { data } = await axios.get(apiUrl, {
      params: {
        limit: 2,
      },
    });

    const users = formatDataUsers(data);

    saveUsers(users);
  } catch (error) {
    throw error as unknown;
  }
})();
