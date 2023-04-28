import Footer from "../Footer"
import Header from "../Header"

const Container = ( {children}) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

export default Container