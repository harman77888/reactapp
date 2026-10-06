
const MapEx = () => {
    // Use of Map


    const number=[1,2,3,4,5,6,7,8,9,10]

    const products = [
    {
      id: 1,
      name: "iPhone 17",
      price: 79999
    },
    {
      id: 2,
      name: "MacBook Air",
      price: 99999
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 24999
    }
  ];
  return (

    <div>
        {number.map((num) => (
            <h1>{num * 2}</h1>
        ))}

       {products.map((product)=>(
        <div key={product.id}>
            <h1>{product.name}</h1>
            <h1>{product.price}</h1>
        </div>
       ))}
    </div>
  )
}

export default MapEx
