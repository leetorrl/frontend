import { useCounterStore } from "../store/counterStore";

export default function Home() {
  const {count, upcount, downcount} = useCounterStore();
  

  return (
    <div>
      <h1 className={`text-3xl p-2 ${count === 10 ? 'bg-red-500' : 'bg-green-500'}`}>
        count: {count}
      </h1>
      <button className="bg-green-400 p-2 rounded mr-2" onClick={upcount}>더하기</button>
      <button className="bg-amber-600 p-2 rounded" onClick={downcount}>빼기</button>
    </div>
  );
}