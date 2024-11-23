import Hero from "../components/hero.jsx";
import Timer from "../components/Timer.jsx";
import FlashSale from "../components/FlashSale.jsx";
import SellingProduct from "../components/SellingProducts.jsx";
import BrowserCategories from "../components/BrowserCategories.jsx";
import Categories from "../components/Categories.jsx";
import ExploreProduct from "../components/ExploreProduct.jsx";
import Feature from "../components/Feature.jsx";
import DeliverySection from "../components/DeliverySection.jsx";

export default function Home() {
  return (
    <div>
      <Hero />
      <Timer />
      <FlashSale />
      <BrowserCategories />
      <SellingProduct />
      <Categories />
      <ExploreProduct />
      <Feature />
      <DeliverySection />
    </div>
  );
}
