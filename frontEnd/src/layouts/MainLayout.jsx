
import Header from '../components/common/Header'
import { Outlet } from 'react-router'
import Footer from '../components/common/Footer'
const MainLayout = () => {
  return (
    <div className='p-10'>
      <Header />
      <main className='h-dvh'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout

