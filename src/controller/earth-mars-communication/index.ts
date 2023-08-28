import { Request, Response } from "express";
import { translateMessage } from "../../service/index";
import moment from 'moment';

export const sendMessage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    message,
    sender,
    receiver,
  }: { message: string; sender: string; receiver: string } = req.body;

  const startTime = moment();
  
  const translatedMessage = translateMessage(message, sender, receiver);

  const endTime = moment();
  const processingTime = (moment.duration(endTime.diff(startTime))).asMilliseconds();

  console.log(`Processing Time : ${processingTime} milliseconds`);

  res.status(200).json({
    message: `Received message: ${message}`,
    translatedMessage,
  });
};
