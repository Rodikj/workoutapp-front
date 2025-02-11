import React, { useEffect, useState } from "react";
import ProductsRepository from "../repository/ProductsRepository";
import NavigationBar from "../components/NavigationBar";
import "../styles/ProductsPage.css";

interface Product {
  name: string;
  imageURL: string;
  nutriments: string[];
}

const categories = [
  "protein-shakes", "fruit", "vegetables", "creatine",
  "sweets", "condiments", "beverages", "seafood",
  "cakes", "hams", "jams", "pasta",
  "cereals", "meats", "dairies"];

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("hams");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const fetchedProducts = await ProductsRepository.getProductsByCategory(category, page.toString());
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category, page]);

  return (
    <>
      <NavigationBar />
      <div className="products-container">
        <h1>Products</h1>
        <div className="category-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={category === cat ? "active" : ""}
              onClick={() => {
                setCategory(cat);
                setPage(1);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
        {loading ? (
          <div className="loading-container">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            <div className="product-grid">
              {products.length > 0 ? (
                products.map((product, index) => (
                  <div key={index} className="product-card">
                    <img src={product.imageURL} alt={product.name} className="product-image" />

                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p><strong>Nutriments:</strong> {product.nutriments.join(", ")}</p>
                    </div>

                  </div>
                ))
              ) : (
                <p>No products found.</p>
              )}
            </div>
            <div className="pagination">

              <button onClick={() => setPage(
                (prev) => Math.max(1, prev - 1))
                } disabled={page === 1}>Prev</button>

              <span>{page}</span>

              <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductsPage;
