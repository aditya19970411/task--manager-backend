import { NextFunction, Request, Response } from "express";
import { ApiError } from "../helpers";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import logger from "./logger";

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const statusCode = error.statusCode ?? StatusCodes.INTERNAL_SERVER_ERROR;
  const message = error.statusCode
    ? error.message
    : ReasonPhrases.INTERNAL_SERVER_ERROR;

  logger.error(error);

  return res.status(statusCode).json({ message });
};
