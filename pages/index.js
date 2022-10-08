import Head from 'next/head'
import OfferCard from '../components/OfferCard';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import ClientCarousel from '../components/ClientCarousel';

export default function Home() {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3 // optional, default to 1.
  //   }    
  // };
  return (
    <div className={styles.container}>
      <Head>
        <title>BOP Consultants : Home</title>
        <meta name="description" content="BOP Consultants Web Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.showcase}>
        <div className={styles.showcase_title}>
          <p>SOFTWARE CONSULTING AND DEVELOPMENT</p> 
          <p>FOR YOUR DIGITAL SUCESS</p>
          <p className={styles.spacer}></p>
        </div>
        <div className={styles.showcase_title_desc}>Since 2007, we transform businesses with powerful and adaptable digital solutions that statisfy the needs of today and unlock the opportunities of tomorrow.</div>
        <div className={styles.showcase_client_slider}>
          {/* <Carousel responsive={responsive}> */}
            <div><img className={styles.sowcase_client_slider_img} src="/bop_3frames.jpg"></img></div>
            <div><img className={styles.sowcase_client_slider_img} src="/bop_ather.jpg"></img></div>
            <div><img className={styles.sowcase_client_slider_img} src="/bop_beacongov.jpg"></img></div>
            <div><img className={styles.sowcase_client_slider_img} src="/bop_boss.jpg"></img></div>
            <div><img className={styles.sowcase_client_slider_img} src="/bop_drivezero.jpg"></img></div>
            <div><img className={styles.sowcase_client_slider_img} src="/bop_growayu.jpg"></img></div>
            <div><img className={styles.sowcase_client_slider_img} src="/bop_precistat.jpg"></img></div>
            <div><img className={styles.sowcase_client_slider_img} src="/bop_radise.jpg"></img></div>
            <div><img className={styles.sowcase_client_slider_img} src="/bop_tcs.jpg"></img></div>
            <div><img className={styles.sowcase_client_slider_img} src="/bop_traform.jpg"></img></div>
            <div><img className={styles.sowcase_client_slider_img} src="/bop_volvo.jpg"></img></div>
            <div><img className={styles.sowcase_client_slider_img} src="/bop_wellsfargo.jpg"></img></div>
          {/* </Carousel> */}
          {/* <ClientCarousel /> */}
        </div>
      </div>
      <div className={styles.home_content}>
        <div className={styles.offering}>
          <div className={styles.offer_title}>Partner with us</div>
          <div className={styles.offers}>
              <OfferCard 
                title="Software Development" 
                description="A software development company with over decade of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users." >
                  <div className={styles.card_body}>
                    <ul className={styles.card_links}>
                      <li><Link href="/services/sftwcon"><a className={styles.card_link}>Software&nbsp;consulting</a></Link></li>
                      <li><Link href="/services/sftwdevos"><a className={styles.card_link}>Software&nbsp;development&nbsp;outsourcing</a></Link></li>
                      <li><Link href="/services/sftwta"><a className={styles.card_link}>Team&nbsp;augmentation</a></Link></li>
                      <li><Link href="/services/sftwmod"><a className={styles.card_link}>Legacy&nbsp;software&nbsp;modernization</a></Link></li>
                      <li><Link href="/services/sftwcd"><a className={styles.card_link}>Custom&nbsp;software&nbsp;development</a></Link></li>
                      <li><Link href="/services/sftwpd"><a className={styles.card_link}>Software&nbsp;product&nbsp;development</a></Link></li>
                      <li><Link href="/services/sftwcad"><a className={styles.card_link}>Cloud&nbsp;application&nbsp;development</a></Link></li>
                    </ul>
                  </div>
              </OfferCard>
              <OfferCard 
                title="Staffing" 
                description="A software development company with 33 years of business excellence, we can develop reliable, scalable and secure software solutions for any OS, browser and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users." >
                  <p>This is the body</p>
              </OfferCard>         
          </div>
        </div>
      </div>
    </div>
  )
}
