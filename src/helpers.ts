import { StatusCodes, ReasonPhrases } from "http-status-codes";

export class ApiError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class GenericError extends ApiError {
  constructor(message: string) {
    super(
      !!message ? message : ReasonPhrases.INTERNAL_SERVER_ERROR,
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

export class BadRequestError extends ApiError {
  constructor(message: string) {
    super(
      !!message ? message : ReasonPhrases.BAD_REQUEST,
      StatusCodes.BAD_REQUEST
    );
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(!!message ? message : ReasonPhrases.NOT_FOUND, StatusCodes.NOT_FOUND);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(
      !!message ? message : ReasonPhrases.UNAUTHORIZED,
      StatusCodes.UNAUTHORIZED
    );
  }
}
