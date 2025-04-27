import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/admin/orders">
          <div className="border rounded-lg p-4 shadow-md hover:bg-gray-100 cursor-pointer">
            <h2 className="text-lg font-semibold">Manage Orders</h2>
            <p>View and update order statuses</p>
          </div>
        </Link>
        <Link href="/admin/inventory">
          <div className="border rounded-lg p-4 shadow-md hover:bg-gray-100 cursor-pointer">
            <h2 className="text-lg font-semibold">Manage Inventory</h2>
            <p>Add, edit, or remove products</p>
          </div>
        </Link>
      </div>
    </div>
  );
}