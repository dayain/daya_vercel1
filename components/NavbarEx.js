import Link from 'next/link';
import styles from '../styles/NavbarEx.module.css';
import { useRouter } from 'next/router';
const NavbarEx = () => {
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
                  <ul className={styles.submenu}>
                      <li className={styles.submenu_desc}>
                        <div className={styles.submenu_desc_title}>Services</div>
                        <div className={styles.submenu_desc_details}>Our service portfolio covers an entire staffing, software development life cycle and Operations that meets varied business needs.</div>
                        <div className={styles.submenu_desc_more}>
                          <div className={styles.submenu_desc_more_title}>Can&apos;t find what you need ?</div>
                          <Link href="/contact"><a className={styles.submenu_desc_more_link}>Let&apos;s&nbsp;Talk</a></Link>
                        </div>
                      </li>
                      <li className={styles.submenu_items}>
                        <ul className={styles.submenu_links}>
                          <li><Link href="/services/staffing"><a className={styles.submenu_link}>Staffing</a></Link></li>
                          <li><Link href="/services/sd"><a className={styles.submenu_link}>Software&nbsp;Development</a></Link></li>
                          <li><Link href="/services/tqa"><a className={styles.submenu_link}>Testing&nbsp;&amp;&nbsp;QA</a></Link></li>
                          <li><Link href="/services/as"><a className={styles.submenu_link}>Application&nbsp;Services</a></Link></li>
                          <li><Link href="/services/ui"><a className={styles.submenu_link}>UI/UX&nbsp;Design</a></Link></li>
                          <li><Link href="/services/dt"><a className={styles.submenu_link}>Digital&nbsp;Transformation</a></Link></li>
                          <li><Link href="/services/managed"><a className={styles.submenu_link}>Managed&nbsp;IT&nbsp;Services</a></Link></li>
                          <li><Link href="/services/itos"><a className={styles.submenu_link}>IT&nbsp;Outsourcing</a></Link></li>
                          <li><Link href="/services/itc"><a className={styles.submenu_link}>IT&nbsp;Consulting</a></Link></li>
                          <li><Link href="/services/its"><a className={styles.submenu_link}>IT&nbsp;Support</a></Link></li>
                          <li><Link href="/services/mrops"><a className={styles.submenu_link}>IT&nbsp;Operations</a></Link></li>
                          <li><Link href="/services/cyb"><a className={styles.submenu_link}>Cybersecurity</a></Link></li>
                        </ul>
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

export default NavbarEx;