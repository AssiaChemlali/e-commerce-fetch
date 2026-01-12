
import { useEffect } from 'react'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { cleanProduct, editProduct, getProduct, insertPrduct } from '../store/products/productsSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductShema } from '../utils/ValidationSchema';

export const useProductInfo = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { product,loading,error } = useSelector(state => state.products)

  useEffect(() => {
    if (id) {
      dispatch(getProduct(id))
    }

  }, [id, dispatch])

  useEffect(() => {
    return () => {
      dispatch(cleanProduct())
    }
  }, [dispatch])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      image: product?.image ?? "",
      title: product?.title ?? "",
      category: product?.category ?? "",
      price: product?.price ?? "",
    },

    validationSchema: ProductShema,
    onSubmit: values => {
      let dispatchFn;
      let newProduct = {
        image: values.image,
        title: values.title,
        category: values.category,
        price: values.price,
       
      }
      if (!id) {
        dispatchFn = insertPrduct(newProduct)
      } else {

        dispatchFn = editProduct({
          id,
          ...newProduct
        })
      }

      dispatch(dispatchFn)
        .unwrap()
        .then(() => {
          navigate("/products")
        })
        .catch((error) => {
          console.log(error)
        })


    }
  })


  return { formik, id ,error,loading}
}


