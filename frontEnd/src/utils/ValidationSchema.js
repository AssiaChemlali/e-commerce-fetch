import * as Yup from 'yup';
import { categories } from '../data';
const listCat = categories.map((category) => category.name)

export const ProductShema = Yup.object({
  title: Yup.string()
    .min(2, 'Must be  2 characters or more')
    .required('title is Required'),
  category: Yup.string()
    .oneOf(
      listCat,
      'Invalid Category'
    )
    .required('Required'),

  price: Yup.number().required('price is Required'),
  image: Yup.string()
    .required('choose url of image'),
})