import ProductItem from "./ProductItem"


const ListProducts = ({data}) => {
  return (
    <table class="w-full border border-hover shadow">
        <thead class="bg-light">
          <tr className="bg-light border border-hover">
            <th class=" px-4 py-2 text-left">Image</th>
            <th class=" px-4 py-2 text-left">Name</th>
            <th class=" px-4 py-2 text-left">Category</th>
             <th class=" px-4 py-2 text-left">price</th>
            <th class=" px-4 py-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {data?.map((product) => (
          <ProductItem product={product} key={product.id}/>
          ))}
        </tbody>
      </table>
  )
}

export default ListProducts
