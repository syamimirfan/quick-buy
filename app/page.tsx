import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { products} from "@/utils/products";
import { truncateText } from "@/utils/truncateTexts";
import ProductCard from "./components/products/ProductsCard";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div className=""><HomeBanner /></div>
        {/* product list */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap:10">
            {products.map((product: any) => {         
              // eslint-disable-next-line react/jsx-key
              return <ProductCard data={product}/>
            })}
        </div>
      </Container>
    </div>
  )
}
