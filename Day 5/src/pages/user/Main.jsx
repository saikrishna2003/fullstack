import PropTypes from "prop-types"
import '../../assets/css/UserLayout.css'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const Main = ({children}) => {
    return(
        <div>
         <Navbar/>
            <main>
                {children}
            </main>
            <footer>
              <Footer/>
            </footer>
        </div>
    )
}
Main.propTypes = {
    children:PropTypes.node.isRequired
}
export default Main