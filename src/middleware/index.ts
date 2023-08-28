import { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface Response {
      modifyResponse: (originalResponse: any) => any;
    }
  }
}

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const sender = req.header("x-sender");
  const receiver = req.header("x-receiver");

  console.log(`Sender: ${sender}, Receiver: ${receiver}`);

  req.body.sender = sender;
  req.body.receiver = receiver;

  next();
};

export const responseInterceptor = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const sender = req.header("x-sender");
  const receiver = req.header("x-receiver");

  const modifyResponse = (originalResponse: any): any => {
    const responseKey =
      sender === "earth" ? "Response from Mars" : "Response from Earth";
    const modifiedResponse = {
      [responseKey]: originalResponse.message,
      "Nokia Translation": originalResponse.translatedMessage,
    };

    return modifiedResponse;
  };

  res.modifyResponse = modifyResponse;

  next();
};
