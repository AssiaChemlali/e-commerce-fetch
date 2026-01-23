import ListProducts from "../components/features/ListProducts"
import Heading from "../components/common/Heading"

import Button from "../components/common/Button"
import { Link } from "react-router"
import useWishlist from "../hooks/useWishlist"

const Wishlist = () => {


const {wishlist,productsFullInfo}=useWishlist()
  return (
    <div className="mt-10">
      <Heading title="Wishlist" />
      {wishlist.length > 0
        ? <ListProducts
          products={productsFullInfo}
        />
        : <div className='py-10 text-center '>
          <h1 className='text-2xl mb-5 font-bold'>There are no products on the Wishlist!
          </h1>
          <Button type="submit">
            <Link to="/shop">Return to shop</Link>
          </Button>
        </div>}

    </div>
  )
}

export default Wishlist
