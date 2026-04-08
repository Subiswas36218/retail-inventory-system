import React, { useEffect, useState } from "react";
import { getProducts, addProduct, deleteProduct } from "./api";

function App() {
  const [products, setProducts] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const loadProducts = () => {
    getProducts().then(setProducts);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleAdd = async () => {
    if (!name) return alert("Enter product name");

    await addProduct({ name, quantity });
    setName("");
    setQuantity(0);
    loadProducts();
  };

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🛒 Inventory System</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button onClick={handleAdd}>Add Product</button>
      </div>

      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} — {p.quantity}
            <button
              onClick={() => handleDelete(p.id)}
              style={{ marginLeft: 10 }}
            >
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
