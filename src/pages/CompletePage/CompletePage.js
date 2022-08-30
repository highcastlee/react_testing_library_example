import React, { useContext, useEffect, useState } from "react";

import ErrorBanner from "../../components/ErrorBanner";
import { OrderContext } from "../../contexts/OrderContext";
import axios from "axios";

function CompletePage({ setStep }) {
  const [orderDatas, , resetOrderDatas] = useContext(OrderContext);
  const [loading, setLoading] = useState(true);
  const [orderHistory, setOrderHistory] = useState([]);
  const [error, setError] = useState(false);

  const orderCompleted = async (orderDatas) => {
    try {
      let response = await axios.post("/order", orderDatas);
      setOrderHistory(response.data);
      setLoading(false);
    } catch (e) {
      setError(true);
    }
  };

  const orderTable = orderHistory.map((item) => (
    <tr key={item.orderNumber}>
      <td>{item.orderNumber}</td>
      <td>{item.price}</td>
    </tr>
  ));

  useEffect(() => {
    orderCompleted(orderDatas);
  }, []);

  const handleClick = () => {
    resetOrderDatas();
    setStep(0);
  };

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }
  if (loading) {
    return <div>loading</div>;
  } else {
    return (
      <div>
        <h2>주문이 성공했습니다.</h2>
        <h3>지금까지 모든 주문</h3>
        <table>
          <tbody>
            <tr>
              <th>주문 번호</th>
              <th>주문 가격</th>
            </tr>
            {orderTable}
          </tbody>
        </table>
        <button onClick={handleClick}>첫페이지로</button>
      </div>
    );
  }
}

export default CompletePage;
