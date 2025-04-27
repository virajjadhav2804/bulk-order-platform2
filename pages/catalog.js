// pages/catalog.js
import { motion } from 'framer-motion';

const products = [
  { id: 1, name: 'Tomatoes', price: '₹20/kg', image: 'https://source.unsplash.com/400x300/?tomato' },
  { id: 2, name: 'Onions', price: '₹18/kg', image: 'https://source.unsplash.com/400x300/?onion' },
  { id: 3, name: 'Potatoes', price: '₹25/kg', image: 'https://source.unsplash.com/400x300/?potato' },
  { id: 4, name: 'Bananas', price: '₹30/dozen', image: 'https://source.unsplash.com/400x300/?banana' }
];

export default function Catalog() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">🛒 Product Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <motion.div
            key={product.id}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold text-white">{product.name}</h2>
              <p className="text-green-400 font-medium">{product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
