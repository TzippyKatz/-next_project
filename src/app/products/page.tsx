import Image from "next/image";
import Header from "../components/Header/Header";
import ProductList from "../components/ProductList/ProductList";

export default function Home() {
  return (
    <main>
      <Header />
      <ProductList />
      {/* <Form /> */}
    </main>
  );
}