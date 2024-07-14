import axios from "axios";
import { MOBILE_VTU_API_TOKEN, MobileVTUUrl } from "./const";
import { appLogger } from "../../lib";

export class MobileVtu {
  name = MobileVtu.name;
  public async topUp(props: {
    operator: "MTN" | "9mobile" | "Glo" | "Airtel";
    type: "airtime" | "data";
    value: number;
    phone: string;
    custom_message?: string;
    sms_sender_id?: string;
  }) {
    appLogger(this.name, this.topUp.name);
    try {
      const resp = await axios.post(
        `${MobileVTUUrl}/topup`,
        {
          operator: props.operator,
          value: props.value,
          phone: props.phone,
          type: props.type,
          custom_message: props.custom_message,
          sms_sender_id: props.sms_sender_id,
        },
        {
          headers: {
            "Api-Token": MOBILE_VTU_API_TOKEN,
            //   "Api-Token": "33tdg37egsbxyube",
            //   "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (resp.data.status == "error") {
        throw new Error(resp.data.message);
      }

      return resp;
    } catch (error) {
      appLogger.err(this.name, this.topUp.name, error as string);
    }
  }
  queryPhoneOperator() {}
  fetchDataPlan() {}
  fetchTransactions() {}
  checkWalletBalance() {}
}
