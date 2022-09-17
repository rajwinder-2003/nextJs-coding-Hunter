import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Navbar/>
    <Component {...pageProps} /> 
    <div className='my-14'>
    <Footer/>
    </div>
  </>
}

export default MyApp
