import { A, H1, P, Text, TextLink } from 'app/design/typography'
import { Row } from 'app/design/layout'
import { View } from 'app/design/view'

import { MotiLink } from 'solito/moti'
import { SolitoImage } from 'solito/image'
import { getProducts } from 'app/api/products'
import { Product } from 'app/types/product'
import { useState, useEffect } from 'react'

export function HomeScreen() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <View className="flex-1 items-center justify-center p-3">
      {/* <img className='hidden sm:block' src="http://localhost:3002/wow.png" alt="Wow" /> */}
      <MotiLink href="/users/fernando" from={{ opacity: 0 }} animate={{ opacity: 1 }}>
 
</MotiLink>
{products.length > 0 &&
            products.map(p => {
                return <><Text>{p.title}</Text></>
            })
        }

<TextLink href="/">👈 Go Home</TextLink>
<TextLink href="/">👈 Go Home</TextLink>

    </View>
  )
}
