import { getBJSProducts } from 'app/api/products'
import { BJSProduct } from 'app/types/product'
import { View } from 'app/design/view'
import { useState, useEffect } from 'react'

import { Text } from 'app/design/typography'
import { SolitoImage } from 'solito/image'
import { TouchableOpacity, ScrollView, Platform } from 'react-native'
import { styled } from 'nativewind'

const StyledTouchableOpacity = styled(TouchableOpacity)

const renderStars = (rating: number) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <View className="flex-row">
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
    </View>
  )
}

const ProductItem = ({ product }: { product: BJSProduct }) => {
  console.log(product)
  return (
    <View className="product-card relative max-w-xs overflow-hidden bg-white p-4">
      <View className="mb-4 flex flex-row items-center justify-between">
        {product.badgeStatus ? (
          <Text className="border border-[#4b8510] px-2 py-1 text-xs font-semibold text-[#4b8510]">
            {product.badgeStatus}
          </Text>
        ) : (
          <Text></Text>
        )}
        <StyledTouchableOpacity
          aria-label="Favourite"
          className="text-gray-500 hover:text-red-500"
        >
          <SolitoImage
            alt="faviourite"
            src="https://www.bjs.com/prod/digital-mfe-shared/09272024180554-Release-shared-micro-frontend-169/2d083fde0a5839ae7a8b.svg"
            width={20}
            height={20}
          />
        </StyledTouchableOpacity>
      </View>

      <View className="mb-4">
        <SolitoImage
          src={product.productImageURL}
          alt="Product Image"
          width={400}
          height={400}
        />
      </View>

      <View className="mb-4 flex justify-end">
        <StyledTouchableOpacity className="self-end rounded-md bg-[#cc0033] px-2 py-1 text-white">
          + ADD
        </StyledTouchableOpacity>
      </View>

      <View className="mb-1 flex-row items-baseline">
        <Text className="font-semibold text-[#4b8510]">
          <Text className="relative -top-1">$</Text>
          {product.salePrice.toString().split('.')[0]}
          <Text className="relative -top-1">
            {product.salePrice.toString().split('.')[1]}
          </Text>
        </Text>
        <Text className="ml-2 text-xs text-[#303030] line-through">
          ${product.price}
        </Text>
      </View>

      <View className="mb-1 flex-row">
        <SolitoImage
          src="https://www.bjs.com/prod/digital-mfe-shared/09272024180554-Release-shared-micro-frontend-169/49859a7b1802d5062058.svg"
          alt=""
          width={20}
          height={20}
        />
        <Text className="text-sm text-gray-500">
          $3 (10%) Off <Text className="text-red-700"> Instant Savings</Text>
        </Text>
      </View>

      <View className="mb-2">
        <Text className="font-bold text-gray-800">{product.itemName}</Text>
      </View>

      {product?.rating && (
        <View className="mb-4">{renderStars(product.rating || 0)}</View>
      )}

      <View className="space-y-1 text-sm text-gray-600">
        {product.available_pickup && (
          <View className="flex-row">
            <SolitoImage
              src="https://www.bjs.com/prod/digital-mfe-shared/09272024180554-Release-shared-micro-frontend-169/9d0c0d58b92a0559ba9f.svg"
              alt=""
              width={12}
              height={13}
            />
            <Text className="ml-2">Pickup at Willoughby</Text>
          </View>
        )}
        {product.available_sdd && (
          <View className="flex-row">
            <SolitoImage
              src="https://www.bjs.com/prod/digital-mfe-shared/09272024180554-Release-shared-micro-frontend-169/9d0c0d58b92a0559ba9f.svg"
              alt=""
              width={12}
              height={13}
            />
            <Text className="ml-2">Delivery to</Text>
          </View>
        )}
        {product.available_shipping && (
          <View className="flex-row">
            <SolitoImage
              src="https://www.bjs.com/prod/digital-mfe-shared/09272024180554-Release-shared-micro-frontend-169/5109257553fde1bda870.svg"
              alt=""
              width={12}
              height={13}
            />
            <Text className="ml-2">Shipping</Text>
          </View>
        )}
      </View>
    </View>
  )
}

const BJSProductsHome = () => {
  const [products, setProducts] = useState<BJSProduct[]>([])
  useEffect(() => {
    getBJSProducts().then((data) => {
      setProducts(data)
    })
  }, [])

  return (
    <View className="grid grid-cols-4 gap-0 pb-6">
      {Platform.OS === 'web' ? (
        products.map((p) => <ProductItem key={p.itemName} product={p} />)
      ) : (
        <ScrollView>
          {products.map((p) => (
            <ProductItem key={p.itemName} product={p} />
          ))}
        </ScrollView>
      )}
    </View>
  )
}

export default BJSProductsHome
