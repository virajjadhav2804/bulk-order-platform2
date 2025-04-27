export default function OrderCard({ order, isAdmin = false, onStatusUpdate }) {
    const handleStatusChange = async (e) => {
      const newStatus = e.target.value;
      await fetch(`/api/orders/${order.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });
      if (onStatusUpdate) onStatusUpdate();
    };
  
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <h3 className="text-lg font-semibold">Order #{order.id}</h3>
        <p>Item: {order.itemName}</p>
        <p>Quantity: {order.quantity}</p>
        <p>Status: {order.status}</p>
        <p>Delivery: {order.deliveryDetails.name}, {order.deliveryDetails.address}</p>
        {isAdmin && (
          <select
            value={order.status}
            onChange={handleStatusChange}
            className="mt-2 border rounded p-1"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Delivered">Delivered</option>
          </select>
        )}
      </div>
    );
  }