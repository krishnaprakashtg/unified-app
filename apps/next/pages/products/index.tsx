import { getProducts } from "app/api/products";
import { Product } from "app/types/product";
import Image from "next/image";

const Products = ({ products }: { products: [Product] }) => {
  return (
    <div>
      <h1 className="px-5">All products</h1>
      <div className="grid grid-cols-4 gap-6 p-5">
        {products.map((p) => (
          <div key={p.id}>
            <Image
              src={p.thumbnail}
              width={100}
              height={100}
              alt={p.title}
            />
            <p>{p.title}</p>
            <p>
              <strong>$</strong>
              {p.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default Products;
