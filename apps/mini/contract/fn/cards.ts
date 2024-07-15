import { geAppContract } from "../utils";

export async function createCard(props: {
  userAddress: string;
  createdFor: string;
  amount: number;
}) {
  const contract = await geAppContract(props.userAddress);

  try {
    const txn = await contract.createCard!(props.createdFor, props.amount);
    await txn.wait();
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed operation");
  }
}

export async function updateCard(props: { userAddress: string; id: number }) {
  const contract = await geAppContract(props.userAddress);

  try {
    const txn = await contract.updateCard!(props.id);
    await txn.wait();
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed operation");
  }
}

export async function getAllCards(props: { userAddress: string }) {
  const contract = await geAppContract(props.userAddress);

  try {
    const txn = await contract.getAllCards!();
    await txn.wait();
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed operation");
  }
}

export async function getCardsCreatedBy(props: { userAddress: string }) {
  const contract = await geAppContract(props.userAddress);

  try {
    const txn = await contract.getCardsCreatedBy!(props.userAddress);
    await txn.wait();
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed operation");
  }
}

export async function getCardsCreatedFor(props: {
  userAddress: string;
  identifier: string;
}) {
  const contract = await geAppContract(props.userAddress);

  try {
    const txn = await contract.getCardsCreatedFor!(props.identifier);
    await txn.wait();
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Failed operation");
  }
}
