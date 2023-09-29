import { useLoaderData } from "react-router-dom";


export default function Cards() {
  const fetchData =useLoaderData();
  console.log(fetchData)
  return (
    <div>
      {/* {
        fetchData.map(Card => console.log(Card))

      } */}
      <h1>Emtiaz</h1>
      
    </div>
  );
}
