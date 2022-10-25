import { extractErrorData, isRequestError } from "../axios-request";
import { InternalError } from "./internal-error";

export class UsersControllerError extends InternalError {
  constructor(message: string) {
    const internalMessage = "Unexpected error returned by the MockApi service";
    super(`${internalMessage}: ${message}`);
  }
}

export class ClientRequestError extends InternalError {
  constructor(message: string) {
    const internalMessage =
      "Unexpected error when trying to communicate to MockApi";
    super(`${internalMessage}: ${message}`);
  }
}

// a handler to catch(error) in any get request

export const handleErrorGetRequest = (err: unknown) => {
  // verify if err is a bad request (not client side)
  if (err instanceof Error && isRequestError(err)) {
    //Get extract from the dependencie
    const error = extractErrorData(err);
    throw new UsersControllerError(
      `Error: ${JSON.stringify(error.data)} Code: ${error.status}`
    );
  }

  // all the other errors will fallback to a generic client error

  throw new ClientRequestError(JSON.stringify(err));
};
