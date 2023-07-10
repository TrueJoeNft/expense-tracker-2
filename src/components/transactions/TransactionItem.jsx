import { useGlobalState } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
  const { delTransaction } = useGlobalState();

  return (
    <li className=" bg-zinc-600 rounded-lg text-white px-3 py-1 mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.description}</p>
     <div>
     <span>${transaction.amount}</span>
      <button
        onClick={() => {
          delTransaction(transaction.id);
        }}
      >
        X
      </button>
     </div>
    </li>
  );
}
export default TransactionItem;
