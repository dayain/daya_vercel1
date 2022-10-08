import Footer from "./Footer";
import NavbarEx from "./NavbarEx";
import styles from './../styles/Layout.module.css';

const Layout = ({children}) => {
  return (
    <div className={styles.layout}>
        <NavbarEx />
        {children}
        <Footer />
    </div>
  )
};

export default Layout;
