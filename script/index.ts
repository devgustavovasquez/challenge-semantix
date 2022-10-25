import * as dotenv from "dotenv";
import axios from "axios";
import { formatDataUsers } from "./format-data-users";

(async () => {
  dotenv.config();
  const apiUrl = `http://localhost:${process.env.APP_PORT}/users`;

  try {
    const { data } = await axios.get(apiUrl, {
      params: {
        limit: 2,
      },
    });

    const response = formatDataUsers(data);

    console.log(response);
  } catch (error) {
    throw error as unknown;
  }
})();
