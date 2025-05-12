import { ActivityIndicator, FlatList, StyleSheet,  View } from "react-native";
import { PRODUCTS } from "../../../assets/products";
import {ProductListItem} from "../../components/product-list-item"
import Auth from '../auth';
import { ListHeader } from "../../components/list-header";
import { getProductAndCategories } from "../../api/api";
const Home = () => {

  const {data, error, isLoading} = getProductAndCategories();


  if (isLoading) return <ActivityIndicator />;

  if (!data || error) 
    return <Text>Error {error?.message || 'An Error ocurred'}</Text>
  return (
    // <Auth/>
    <View>
      <FlatList
        data={data.products}
        renderItem={({ item }) => (
          <ProductListItem  product={item}/>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<ListHeader categories={data.categories} />}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-between",
  },
});
