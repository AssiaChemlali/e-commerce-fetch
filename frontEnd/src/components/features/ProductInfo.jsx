
import Button from '../common/Button';
import { categories } from '../../data/index';
import { useProductInfo } from '../../hooks/useProductInfo';

const ProductInfo = () => {

const {formik,id}=useProductInfo()

  return (
    <form
      onSubmit={formik.handleSubmit} className='bg-light p-5 my-5 flex flex-col gap-1 rounded-md'>
     

      <label htmlFor="title" className='font-semibold capitalize'>Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        className='bg-background py-2 px-3 rounded-md mb-3'
      />
      <label htmlFor="category" className='font-semibold capitalize'>category</label>
      <select
        id="category"
        name="category"
        onChange={formik.handleChange}
        value={formik.values.category}
        className='bg-background py-2 px-3 rounded-md mb-3'
      >
        {categories.map((category) => (
          <option key={category.id} value={category.name}>{category.name}</option>
        ))}

      </select>


      <label htmlFor="price" className='font-semibold capitalize'>Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.price}
        className='bg-background py-2 px-3 rounded-md mb-3'
      />
       <label htmlFor="image" className='font-semibold capitalize'>Image Url</label>
      <input
        id="image"
        name="image"
        type="url"
        placeholder="Paste image link"
        onChange={formik.handleChange}
        value={formik.values.image}
        className='bg-background text-primary py-2 px-3 rounded-md mb-3'
      />
      <Button type="submit">
        {!id 
          ? "Add product"
          : "Update Product"}
      </Button>

    </form>
  )
}

export default ProductInfo
