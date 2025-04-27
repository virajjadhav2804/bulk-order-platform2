// For Next.js 13+ with TailwindCSS (app/page.tsx)

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-green-600 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Bulk Ordering Platform</h1>
        <p className="text-sm mt-1">Order vegetables and fruits in bulk with ease</p>
      </header>

      <nav className="bg-white shadow-sm py-4 px-6 flex gap-6">
        <Link href="/products" className="text-green-700 hover:underline">Browse Products</Link>
        <Link href="/order" className="text-green-700 hover:underline">Place Order</Link>
        <Link href="/track" className="text-green-700 hover:underline">Track Order</Link>
        <Link href="/admin" className="text-green-700 hover:underline">Admin Dashboard</Link>
        <Link href="/login" className="text-green-700 hover:underline">Admin Login</Link>
      </nav>

      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to the Bulk Ordering Platform</h2>
        <p className="text-gray-700">This platform lets buyers place bulk orders for vegetables and fruits, and lets admins manage those orders easily.</p>
      </section>

      <footer className="bg-green-600 text-white text-center p-4 mt-10">
        © {new Date().getFullYear()} AgroFix. All rights reserved.
      </footer>
    </main>
  );
}
