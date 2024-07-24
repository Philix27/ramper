import { db, transactionSchema } from "@server/db";
import { AppError, logFn } from "@server/lib";
import { HttpStatusCode } from "axios";

export class TransactionsRepository {
  @logFn()
  async getAll(params: { userId: number }) {
    try {
      const res = await db.query.transactionSchema.findMany({
        columns: {
          amount: true,
          purpose: true,
          category: true,
        },
        where: (user, { eq }) => eq(user.id, params.userId),
      });
      return res;
    } catch (error) {
      throw new AppError(
        "Oops an error occurred",
        HttpStatusCode.InternalServerError,
        error
      );
    }
  }
}
