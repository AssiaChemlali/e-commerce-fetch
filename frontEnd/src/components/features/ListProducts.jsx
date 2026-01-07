import ProductItem from "./ProductItem"


const ListProducts = ({ data, deleteProduct }) => {
  return (
    <table className="w-full border border-hover shadow">
      <thead className="bg-light">
        <tr className="bg-light border border-hover">
          <th className="table-col">Image</th>
          <th className=" table-col">Name</th>
          <th className=" table-col">Category</th>
          <th className=" table-col">price</th>
          <th className=" table-col"></th>
        </tr>
      </thead>
      <tbody>
        {data?.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            deleteProduct={deleteProduct}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ListProducts
