import * as Yup from 'yup';
import { categories } from '../data';
const listCat = categories.map((category) => category.name)

export const ProductShema = Yup.object({

  title: Yup
    .string()
    .min(2, 'Must be  2 characters or more')
    .required('title is Required'),

  category: Yup
    .string()
    .oneOf(listCat, 'Invalid Category')
    .required('Required'),

  price: Yup
    .number()
    .required('price is Required'),

  image: Yup
    .string()
    .required('choose url of image'),
})

export const BillingShema = Yup.object({

  firstName: Yup
    .string()
    .min(2)
    .required("Billing First name is required"),

  lastName: Yup
    .string()
    .min(2)
    .required("Billing Last name is required"),

  phone: Yup
    .number()
    .min(10, 'Billing phone is not a valid phone number')
    .required("Billing Phone is required"),

  adress: Yup
    .string()
    .min(5)
    .required("Billing Adress is required"),

  zip: Yup
    .number()
    .min(6, 'Zip must consists  at least 6 number')
    .required("Billing Zip is required"),

      email: Yup
    .string()
    .email('Billing must be a valid email')
    .min(6, 'Billing zip must consists at least 6 number')
    .required("Billing Email is required"),
})