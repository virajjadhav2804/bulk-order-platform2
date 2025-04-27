export default function ProductCard({ product }) {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price.toFixed(2)} per unit</p>
      </div>
    );
  }