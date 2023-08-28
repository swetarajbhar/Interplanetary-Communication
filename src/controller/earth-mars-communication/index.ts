import { Request, Response } from "express";
import { translateMessage } from "../../service/earth-mars-communication/index";
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

  const response = {
    message: message,
    translatedMessage
  };

  const modifiedResponse = res.modifyResponse(response);

  res.status(200).json(modifiedResponse);
};
