
import Header from '../components/common/Header'
import { Outlet } from 'react-router'
import Footer from '../components/common/Footer'
const MainLayout = () => {
  return (
    <div className='p-10 w-full lg:w-300  flex  flex-col items-center mx-auto'>
      <Header />
      <main className='h-dvh w-full'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout

