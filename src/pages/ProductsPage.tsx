import React, { useEffect, useState } from "react";
import ProductsRepository from "../repository/ProductsRepository";

interface Product {
  name: string;
  imageURL: string;
  nutriments: string[];
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("protein-shakes");
  const [page, setPage] = useState("1");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await ProductsRepository.getProductsByCategory(category, page);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    console.log("------------------------------------------")
    console.log(fetchProducts());
  }, [category, page]);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
              <h3>{product.name}</h3>
              <img src={product.imageURL} alt={product.name} style={{ width: "150px", height: "150px" }} />
              <p><strong>Nutriments:</strong> {product.nutriments.join(", ")}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
