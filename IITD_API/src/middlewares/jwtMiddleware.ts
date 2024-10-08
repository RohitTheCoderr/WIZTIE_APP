import { RequestHandler, NextFunction, Request, Response } from "express";
import { jwtGetToken, jwtVerifyToken } from "@src/services/lib/jwt";
import { logger } from "@src/logger";
import { StatusCodes } from "http-status-codes";

// Generate token middleware
const generateToken: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  try {
    logger.info("generateToken start", { __filename });

    const userId = (req as any).userId;
    if (!userId) {
      logger.error(`userId not found`, { __filename });
      return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: "userID not found." })
    }
    const token = jwtGetToken(userId);

    logger.info("generateToken ends", { __filename });
 console.log("tokeneee", token);
 
    res.status(StatusCodes.ACCEPTED).json({ success: true, message: "token generated successfully", data: { token: token } })
  } catch (error) {
    logger.error(`generateToken error ${error}`, { __filename });
    res.status(500).json({
      success: false,
      message: "Failed to generate token"
    });
  }
};

// Verify token middleware
const verifyToken: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  try {
    logger.info("Token verification starts", { __filename });

    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      const decodeToken: any = jwtVerifyToken(token);
      (req as any).userId = decodeToken.userId
      logger.info(`Token verification ended.`, { __filename });
      if ((req as any).userId) {
        return next()
      }
      throw new Error("jwt token not verified")
    } else {
      res.status(StatusCodes.UNAUTHORIZED).json({
        success: false,
        message: "Authorization header missing or malformed"
      });
    }
  } catch (error) {
    logger.error(`Token verification error ${error}`, { __filename });
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Failed to verify token"
    });
  }
};

export { generateToken, verifyToken };
