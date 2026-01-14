
import Input from '../forms/Input'
import Button from '../common/Button'
import { Link } from 'react-router'
import { BillingShema } from '../../utils/ValidationSchema'
import { useFormik } from 'formik'
import { getContries } from '../../utils/utils'
import { useEffect, useState } from 'react'
import Select from "../forms/Select"

const BillingDetails = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {

    const load = async () => {
      const list = await getContries()
      setCountries(list)

    }
    load()

  }, [])


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      country: "",
      adress: "",
      zip: "",
      email: ""
    },
    validationSchema: BillingShema,
    onSubmit: values => {
      console.log(values)

    }

  })


  return (
    <div className=' w-full lg:w-2/3  bg-light p-5'>
      <h1 className='text-2xl mb-5 font-semibold'>Billing Details</h1>
      <form
        type="submit"
        onSubmit={formik.handleSubmit}
        className='flex flex-col'>

        <Input
          type="text"
          label="First Name"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          error={formik.errors.firstName}


        />
        <Input
          type="text"
          label="Last Name"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          error={formik.errors.lastName}

        />
        <Input
          type="number"
          label="phone"
          name="phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          error={formik.errors.phone}
        />

        <Select
          label="Country / Region *"
          name="country"
          onChange={formik.handleChange}
          data={countries}
          value={formik.values.country}
          error={formik.errors.country}
        />

        <Select
          label="Town / City *"
          name="city"
          onChange={formik.handleChange}
          data={countries}
          value={formik.values.city}
          error={formik.errors.city}
        />

        <Input
          type="text"
          label="Adress"
          name="adress"
          onChange={formik.handleChange}
          value={formik.values.adress}
          error={formik.errors.adress}
        />
        <Input
          type="number"
          label="Postcode / ZIP "
          name="zip"
          onChange={formik.handleChange}
          value={formik.values.zip}
          error={formik.errors.zip}
        />
        <Input
          type="email"
          label="Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />
        <Button type="submit">
          send
        </Button>
      </form>
    </div>
  )
}

export default BillingDetails
