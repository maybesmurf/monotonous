import merc from "mercurius";
import { StatusCodes } from "http-status-codes";

const ExtError = merc.ErrorWithProps;

export function UnauthorizedError() {
  return new ExtError("Unauthorized", { code: StatusCodes.UNAUTHORIZED });
}

export function ForbiddenError() {
  return new ExtError("Forbidden", { code: StatusCodes.FORBIDDEN });
}

export function NotFoundError() {
  return new ExtError("Not Found", { code: StatusCodes.NOT_FOUND });
}

export function BadRequestError() {
  return new ExtError("Bad Request", { code: StatusCodes.BAD_REQUEST });
}
