import { FlatList, StyleSheet, Text, Vibration, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { Stack, Tabs } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import axios from 'axios';
import { ProductType } from '@/types/type';

const HomeScreen = () => {
  const [category, setCategory] = useState<string>('Tiny homes');
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onDataChanged = (category: string) => {
    setCategory(category);
  }

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const URL = `http://localhost:3000/products`;

    const response = await axios.get(URL);
    setProducts(response.data);
    setIsLoading(false);

    console.log(response);
  }

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: false // hide the default header
        }}
      />
      <ExploreHeader onCategoryChanged={onDataChanged} />
      {/* <ListingsMap listings={geoItems} />
      <ListingsBottomSheet listings={items} category={category}/> */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ index, item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  }
});