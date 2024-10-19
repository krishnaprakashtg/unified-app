import { useEffect, useState } from "react";

import { getProducts } from "app/api/products";
import { Product } from "app/types/product";

import { Text } from "app/design/typography"; 
import { View } from "app/design/view"; 

import { FlatList, ListRenderItem } from "react-native";
// import { SolitoImage } from "solito/image";

const ProductHomeScreen = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <View> 
      <Text>{item.title}</Text>
      <Text>{item.price}</Text>
    </View>
  );
  return (
    <View>
        <Text>All product</Text>
        {products.length > 0 &&
            products.map(p => {
                return <><Text>{p.title}</Text></>
            })
        }
      {/* <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item: Product) => item.id.toString()}
      /> */}
    </View>
  );
};

export default ProductHomeScreen;
