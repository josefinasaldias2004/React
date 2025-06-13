import { ProductCard } from "./ProductCard";

export const ProductList = ({ productos }) => {
  return (
    <div>
      {productos.map((unProducto) => (
        <ProductCard key={unProducto.id} producto={unProducto} />
      ))}
    </div>
  );
};


