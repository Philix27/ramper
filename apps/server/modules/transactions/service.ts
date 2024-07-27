import { logFn } from "@server/lib";
import { TransactionsRepository } from "./repo";
import { ApiSchema, ITransactionGetAll, ITransactions } from "@repo/rpc";
import { z } from "zod";

export class TransactionService implements ITransactions {
  constructor(private readonly repo: TransactionsRepository) {}
  @logFn()
  async getAll(
    props: z.infer<typeof ApiSchema.transactions.getAll>
  ): Promise<ITransactionGetAll> {
    const res = await this.repo.getAll(props);
    return res;
  }

  @logFn()
  async create(params: {
    amount: number;
    unit: string;
    purpose: string;
    category: string;
    user_id: number;
  }) {
    const res = await this.repo.create(params);
    return res;
  }
}
