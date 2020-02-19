import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

import "../scss/style.scss"

const Layout = props => (
  <div className="container">
    <div className="cover">
      <Meta/>
      <Header/>
      <div className="centered">
        {props.children}
      </div>
      <Footer/>
    </div>
  </div>
)

export default Layout;