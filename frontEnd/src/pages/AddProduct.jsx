 import { useFormik } from 'formik';
import Button from '../components/common/Button';
const AddProduct = () => {
   const formik = useFormik({
     initialValues: {
       title: '',
       category: '',
       price: 0,
     },
     onSubmit: values => {
       
     },
   });

  return (
    <form onSubmit={formik.handleSubmit} className='bg-light p-5 my-5 flex flex-col gap-1 rounded-md'>
       <label htmlFor="title" className='font-semibold capitalize'>Title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
         className='bg-background py-1 px-3 rounded-md mb-3'
       />
       <label htmlFor="category" className='font-semibold capitalize'>category</label>
       <input
         id="category"
         name="category"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.category}
         className='bg-background py-1 px-3 rounded-md mb-3'
       />
       <label htmlFor="price" className='font-semibold capitalize'>Price</label>
       <input
         id="price"
         name="price"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.price}
         className='bg-background py-1 px-3 rounded-md mb-3'
       />
       <Button type="submit">
          Add product
        </Button>
      
     </form>
  )
}

export default AddProduct
