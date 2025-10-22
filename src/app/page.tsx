import Image from "next/image";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import ProductList from "./components/ProductList/ProductList";

export default function Home() {
  return (
    <main>
      <Header />
      {/* <div className="cards-container">

        <Card
          image="https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw15693d68/images/new/870414327/870414327_L%20T.jpg?sw=476&sh=714"
          title="POLO RALPH LAUREN Wool and cashmere knit"
          description="A knit from made of camel-colored wool and cashmere with a braid pattern."
          price={1190}
        />

        <Card
          image="https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dwb4393443/images/new/870410581/870410581_L%20T.jpg?sw=476&sh=714"
          title="POLO RALPH LAUREN Buttoned shirt"
          description="Button-down shirt from Polo Ralph Lauren, made of white cotton with brand logo embroidery on the chest."
          price={699}
        />

        <Card
          image="https://www.factory54.co.il/dw/image/v2/BFLR_PRD/on/demandware.static/-/Sites-master-catalog/default/dw42d755fe/images/new/870407494/870408704%20870407494_L%20870409143%20870408503%20870409253%20T.JPG?sw=476&sh=714"
          title="POLO RALPH LAUREN Blazer"
          description="Tailored blazer, made of a cotton and viscose blend in black with white embroidery and cuffs."
          price={1990}
        />
      </div> */}

      <ProductList />
      {/* <Form /> */}
    </main>
  );
}
