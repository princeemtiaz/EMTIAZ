import { useLoaderData } from "react-router-dom";
import Card from "../components/Card/Card";
import Cards from "../components/Cards/Cards";


export default function LandingPage() {
    const fetchData =useLoaderData();
  console.log(fetchData)
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Top Hotels</h1>
           <div className=" grid grid-cols-3">
      
      {/* this is not an error.. */}
    
     {fetchData.map((card)=>(<Card key={Card.id} card={card}/>))}  
     </div>
     <h1 className="text-3xl font-bold text-center my-4">Top Deals</h1>
     <div className=" grid grid-cols-3">
      
     {fetchData.map((card)=>(<Card key={Card.id} card={card}/>))}
     </div>

      <Cards/>
    </div>
  )
}
