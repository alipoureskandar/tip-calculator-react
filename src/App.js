import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  function handleReset() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }

  const totalTip = (bill * (tip1 + tip2)) / 2 / 100;

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage tip={tip1} onSelect={setTip1}>
        How did you like the food?
      </SelectPercentage>
      <SelectPercentage tip={tip2} onSelect={setTip2}>
        How did your friend like it?
      </SelectPercentage>
      {bill > 0 ? (
        <>
          <Output bill={bill} totalTip={totalTip} />
          <Reset onHandleReset={handleReset} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>{" "}
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, tip, onSelect }) {
  return (
    <div>
      <label>{children}</label>{" "}
      <select value={tip} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">It was Amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, totalTip }) {
  return (
    <h3>
      You pay ${bill + totalTip} (${bill} + ${totalTip} tip)
    </h3>
  );
}

function Reset({ onHandleReset }) {
  return <button onClick={onHandleReset}>Reset</button>;
}
