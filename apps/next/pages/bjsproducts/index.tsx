import { getBJSProducts, getProducts } from 'app/api/products'
import { BJSProduct } from 'app/types/product'
import Image from 'next/image'
import { View } from 'app/design/view'

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-5 w-5 text-yellow-500"
        >
          <path d="M12 2.25l3.09 6.26 6.91 1-5 4.88 1.18 6.88L12 17.77l-6.18 3.25L6.91 14 2 9.12l6.91-1L12 2.25z" />
        </svg>
      ))}
      {/* Half Star (Left-filled with outline) */}
      {hasHalfStar && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-5 w-5 text-yellow-500"
        >
          {/* Outline */}
          <path
            d="M12 2.25l3.09 6.26 6.91 1-5 4.88 1.18 6.88L12 17.77 5.82 21.02 7 14.14 2 9.12l6.91-1L12 2.25z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          {/* Left-filled gradient */}
          <defs>
            <linearGradient id="half-fill-left">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-fill-left)"
            d="M12 2.25l3.09 6.26 6.91 1-5 4.88 1.18 6.88L12 17.77 5.82 21.02 7 14.14 2 9.12l6.91-1L12 2.25z"
          />
        </svg>
      )}
      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="h-5 w-5 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.25l3.09 6.26 6.91 1-5 4.88 1.18 6.88L12 17.77l-6.18 3.25L6.91 14 2 9.12l6.91-1L12 2.25z"
          />
        </svg>
      ))}
    </div>
  )
}

const ProductItem = ({ product }: { product: BJSProduct }) => {
  console.log(product)
  return (
    <div className="product-card bg- relative max-w-xs overflow-hidden bg-white p-4">
      <div className="mb-4 flex items-center justify-between">
        {product.badgeStatus ? (
          <span className="border border-[#4b8510] px-2 py-1 text-xs font-semibold text-[#4b8510]">
            {product.badgeStatus}
          </span>
        ) : (
          <span></span>
        )}
        <button
          aria-label="Favourite"
          className="text-gray-500 hover:text-red-500"
        >
          <Image
            alt="faviourite"
            src="https://www.bjs.com/prod/digital-mfe-shared/09272024180554-Release-shared-micro-frontend-169/2d083fde0a5839ae7a8b.svg"
            width={20}
            height={20}
          />
        </button>
      </div>

      <div className="mb-4">
        <Image
          src={product.productImageURL}
          alt="Product Image"
          className="w-full object-cover"
          width={400}
          height={400}
        />
      </div>

      <div className="mb-4 flex justify-end">
        <button className="rounded-md bg-[#cc0033] px-2 py-1 text-white">
          + ADD
        </button>
      </div>

      <div>
        <span className="font-semibold text-[#4b8510]">
          <sup>$</sup>
          {product.salePrice.toString().split('.')[0]}
          <sup>{product.salePrice.toString().split('.')[1]}</sup>
        </span>
        <span className="ml-2 text-xs text-[#303030] line-through">
          ${product.price}
        </span>
      </div>
      <div className="mb-1 flex">
        <Image
          src="https://www.bjs.com/prod/digital-mfe-shared/09272024180554-Release-shared-micro-frontend-169/49859a7b1802d5062058.svg"
          alt=""
          width={20}
          height={20}
        />
        <p className="text-sm text-gray-500">
          $3 (10%) Off <span className="text-red-700"> Instant Savings</span>
        </p>
      </div>

      <div className="mb-2">
        <h3 className="font-semibold text-gray-800">{product.itemName}</h3>
      </div>

      {product?.rating && (
        <div className="mb-4">{renderStars(product.rating || 0)}</div>
      )}

      <ul className="space-y-1 text-sm text-gray-600">
        {product.available_pickup && (
          <li className="flex">
            <Image
              className="mr-2"
              src="https://www.bjs.com/prod/digital-mfe-shared/09272024180554-Release-shared-micro-frontend-169/9d0c0d58b92a0559ba9f.svg"
              alt=""
              width={20}
              height={20}
            />
            Pickup at Willoughby
          </li>
        )}
        {product.available_sdd && (
          <li className="flex">
            <Image
              className="mr-2"
              src="https://www.bjs.com/prod/digital-mfe-shared/09272024180554-Release-shared-micro-frontend-169/9d0c0d58b92a0559ba9f.svg"
              alt=""
              width={20}
              height={20}
            />
            Delivery to
          </li>
        )}
        {product.available_shipping && (
          <li className="flex">
            <Image
              className="mr-2"
              src="https://www.bjs.com/prod/digital-mfe-shared/09272024180554-Release-shared-micro-frontend-169/5109257553fde1bda870.svg"
              alt=""
              width={20}
              height={20}
            />
            Shipping
          </li>
        )}
      </ul>
    </div>
  )
}

const Products = ({ products }: { products: [BJSProduct] }) => {
  return (
    <View className="grid grid-cols-4 gap-0 pb-6">
      {products.map((p) => (
        <ProductItem key={p.itemName} product={p} />
      ))}
    </View>
  )
}

export async function getStaticProps() {
  const products = await getBJSProducts()
  return { props: { products } }
}

export default Products
