import { useEffect, useState } from 'react';
import OrderCard from '../../components/OrderCard';

export default function ManageOrders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await fetch('/api/orders');
    const data = await response.json();
    setOrders(data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Orders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            isAdmin={true}
            onStatusUpdate={fetchOrders}
          />
        ))}
      </div>
    </div>
  );
}