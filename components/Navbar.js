import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { useRouter } from 'next/router';
const Navbar = () => {
  const router = useRouter();
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
            <div className={styles.logo_container}>
                <img className={styles.logo_image} src="logo.png"></img>
            </div>
            <ul className={styles.menu_container}>
                <li className={router.pathname == '/' ? styles.active_menu : styles.menu}><Link href="/"><a className={styles.menu_item}>Home</a></Link></li>
                <li className={router.pathname == '/about' ? styles.active_menu : styles.menu}><Link href="/about"><a className={styles.menu_item}>About</a></Link></li>
                <li className={styles.menu_submenu}><a href="#" className={styles.menu_item}>Services</a>
                  <ul className={styles.submenu_container}>
                      <li className={styles.submenu}>
                        <Link href="/services/recruitment"><a className={styles.submenu_item}>Recruitment</a></Link>
                      </li>
                      <li className={styles.submenu}>
                        <Link href="/services/si"><a className={styles.submenu_item}>System&nbsp;Integration</a></Link>
                      </li>
                      <li className={styles.submenu}>
                        <Link href="/services/odc"><a className={styles.submenu_item}>Offshore&nbsp;Development&nbsp;Centers</a></Link>
                      </li>
                  </ul>
                </li>
                <li className={router.pathname == '/careers' ? styles.active_menu : styles.menu}><a href="" className={styles.menu_item}>Careers</a></li>
                <li className={styles.menu}><a href="" className={styles.menu_item}>Contact&nbsp;Us</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar;