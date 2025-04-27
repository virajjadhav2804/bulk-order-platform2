import { useState } from "react";
import { motion } from "framer-motion";

const dummyOrders = [
  { id: "1", item: "Tomatoes", quantity: 10, status: "Pending" },
  { id: "2", item: "Onions", quantity: 5, status: "In Progress" },
];

const dummyInventory = [
  { id: "1", name: "Tomatoes", price: 2 },
  { id: "2", name: "Onions", price: 1.5 },
];

export default function AdminDashboard() {
  const [tab, setTab] = useState("orders");

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${tab === "orders" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("orders")}
        >
          Orders
        </button>
        <button
          className={`px-4 py-2 rounded ${tab === "inventory" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("inventory")}
        >
          Inventory
        </button>
      </div>

      <motion.div
        key={tab}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ duration: 0.4 }}
      >
        {tab === "orders" ? (
          <OrderManagement orders={dummyOrders} />
        ) : (
          <InventoryManagement inventory={dummyInventory} />
        )}
      </motion.div>
    </div>
  );
}

function OrderManagement({ orders }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      {orders.map((order) => (
        <motion.div
          key={order.id}
          className="bg-white p-4 rounded shadow mb-4"
          whileHover={{ scale: 1.02 }}
        >
          <p><strong>Item:</strong> {order.item}</p>
          <p><strong>Quantity:</strong> {order.quantity}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <button className="mt-2 text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition">
            Update Status
          </button>
        </motion.div>
      ))}
    </div>
  );
}

function InventoryManagement({ inventory }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Inventory</h2>
      {inventory.map((item) => (
        <motion.div
          key={item.id}
          className="bg-white p-4 rounded shadow mb-4 flex justify-between items-center"
          whileHover={{ scale: 1.02 }}
        >
          <div>
            <p><strong>{item.name}</strong></p>
            <p>${item.price.toFixed(2)}</p>
          </div>
          <div className="flex space-x-2">
            <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
          </div>
        </motion.div>
      ))}
      <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700">Add New Item</button>
    </div>
  );
}
