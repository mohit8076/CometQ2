    import { useEffect, useState } from 'react';
  function Page (){
   
   const [data, setData] = useState([]);
   useEffect(() => {
     const getData = async () => {
       const response = await fetch('https://randomuser.me/api/?results=50');
       const data = await response.json();
       setData(data.results);
     }
    getData();
   },[])
  
    return (
      <main>
        <h1>Here are some of the results!!</h1>
        <ul>
          {
           data.map(result => (
             <li key={result.nat}>
              {result.email} - {result.cell}
             </li>
           ))
          }
        </ul>
      </main>
    )
  }
  export default Page;