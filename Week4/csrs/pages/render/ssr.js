function Page ({ data }){
    return (
      <main>
        <h1>Here are some of the results!!</h1>
        <ul>
          {
           data.results.map(result => (
             <li key={result.nat}>
              {result.email} - {result.cell}
             </li>
           ))
          }
        </ul>
      </main>
    )
  }
  export async function getServerSideProps() {
      const response = await fetch('https://randomuser.me/api/?results=50');
      const data = await response.json();
  return {
      props: { data }
    }
  }
  
  export default Page
