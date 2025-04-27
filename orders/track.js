import { useState } from 'react';
import OrderCard from '../../components/OrderCard';

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/status/${orderId}`);
    if (response.ok) {
      const data = await response.json();
      setOrder(data);
    } else {
      setOrder(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Track Order</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="Enter Order ID"
          className="border rounded p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>
      {order && <OrderCard order={order} />}
    </div>
  );
}