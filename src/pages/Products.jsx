import axios from "axios"
import { useEffect, useState } from "react";
import ProductCard from "../components/productcard";

export default function Products() {
    
  const ApI_KeY='https://dummyjson.com/products'

const [products,setProducts] = useState(null)

  const geT_DatA = async () => {

  const response= await axios(ApI_KeY);

  // console.log(response.data.products);

  setProducts(response?.data?.products);

  };

    useEffect(()=>{
     geT_DatA();
    },[])
  
  geT_DatA();

  console.log(products);
  

  return (
    <div>
    {products === null ? "Loading.....":null}
    {/* {JSON.stringify(products)} */}
    <div className="flex justify-center items-center flex-wrap gap-4">
      {products?.map((item)=>(
        <ProductCard key={item.id} cardImage={item.thumbnail} cardName={item.title} cardDiscount={item.discountPercentage} discountedRate={item.price}/>
      ))}
    </div>
    </div>
  )
}
