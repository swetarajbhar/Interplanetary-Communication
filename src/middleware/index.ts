import { Request, Response, NextFunction } from 'express';

const LoggerMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const sender = req.header('x-sender');
  const receiver = req.header('x-receiver');

  req.body.sender = sender;
  req.body.receiver = receiver;
  console.log(`Sender: ${sender}, Receiver: ${receiver}`);

  next();
};

export default LoggerMiddleware;
