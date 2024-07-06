import { TERMII_SMS_API_URL } from "./constants";
import { SendSmsInterface, TermiiSmsChannels } from "./interface";
import axios from "axios";

export class TermiiService {
  static async sendSms(payload: {
    to: string;
    sms: string;
    channel: "dnd" | "generic" | "whatsapp";
  }) {
    try {
      const resp = await axios.post(`${TERMII_SMS_API_URL}/send`, {
        to: payload.to,
        sms: payload.sms,
        from: "Paymais",
        type: "plain",
        channel: payload.channel,
        api_key: process.env.TERMII_API_KEY,
      })
      return resp
    } catch (error: any) {
      console.log("termii error", error)
      throw new Error("Cannot send otp")
    }
  }

  static async sendBulkSms(payload: SendSmsInterface) {
    try {
      return await axios.post(`${TERMII_SMS_API_URL}/send/bulk`, {
        ...payload,
        api_key: process.env.TERMII_API_KEY,
      });
    } catch (error) {
      throw error;
    }
  }
}
