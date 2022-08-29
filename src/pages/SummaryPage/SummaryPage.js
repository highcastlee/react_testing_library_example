import React, { useState } from "react";

const labelId = "confirm-checkbox";

function SummaryPage() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <form>
        <label htmlFor={labelId}>
          주문하려는 것을 확인하셨나요?
          <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} id={labelId} />
        </label>
        <br />
        <button disabled={!checked} type="submit">
          주문 확인
        </button>
      </form>
    </div>
  );
}

export default SummaryPage;
