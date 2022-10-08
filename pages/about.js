import Head from 'next/head';
import styles from './../styles/About.module.css';
const About = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>BOP Consultants : About</title>
                <meta name="description" content="BOP Consultants Web Site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <article>
                <div className={styles.aboutus_img_container}>
                    <img className={styles.aboutus_img} src="/aboutus.jpg"></img>
                </div>
                <div className={styles.aboutus_content}>
                    <h1 className={styles.aboutus_header}>BOP Consultants Private Limited</h1>
                    <p>BOP Consultants Private Limited is a company dedicated to delivering value, quality and continuous improvement in the resources, solutions and services that we provide for all our customers and business partners. BOP is providing consulting services in Healthcare, Automotive, Information Technology domains, Telecom & Embedded and BFSI. BOP’s unique, automated resume management process which helps in high volume staffing needs Customized reporting, metrics and tracking to help our clients in process improvement and better effectiveness. Our capability in fast delivery has gained us the reputation of being a reliable and efficient global executive search firm.</p>
                        <p>Since its inception in India, BOP has delivered successful placements of more than 1000+ multidiscipline professionals to its clients and associated partners meeting the talent acquisition requirements in India, United States and other geographies. We take pride in producing advanced technology solutions to our clients by utilizing the collective industry and technical management expertise of our qualified professionals to integrate proven methods, innovation and Industry Best Practices.</p>
                        <p>BOP enacts the role of organizational capability builder by establishing processes that support talented people as they innovate to give the organization competitive advantage. The company’s core expertise in consultancy services are powered by the following cutting-edge advantages:</p>
                        <ul>
                            <li>&#10004;<span>Proactive &amp; ethical approach.</span></li>
                            <li>&#10004;<span>Identification with and understanding the needs of each industry.</span></li>
                            <li>&#10004;<span>Commitment in provision of manpower in specific timeframe.</span></li>
                            <li>&#10004;<span>Quick and dynamic execution of cumbersome formalities.</span></li>
                            <li>&#10004;<span>Transparency in operations and professional code of conduct.</span></li>
                            <li>&#10004;<span>Ensured quality, confidentially and client loyalty.</span></li>
                            <li>&#10004;<span>A dynamic team of qualified and experienced experts with senior consultants from diverse fields of various industries.</span></li>
                            <li>&#10004;<span>Extensive reach with an exhaustive, nationwide database of qualified candidates.</span></li>
                            <li>&#10004;<span>Competitively cost effective.</span></li>
                        </ul>
                        <p>BOP with its Core Competence in Professional Staffing has acquired unique capabilities to deliver optimal workforce and efficiently meet our client&apos;s needs. We service a broad client base in the Finance, Insurance, Energy, Manufacturing, pharmaceutical, retail, Automotive Engineering and services industries providing Temp, Temp to Hire and Direct Hire Services.</p>
                        <p>Organizational capabilities are the main source of sustainable competitive advantage. Here are some examples of the above listed capabilities:</p>
                        <ul className={styles.section}>
                            <li>&#10004;<span>We partnered with our esteem client panel such as TCS, Radise International and Scientific search in building their talent hub for various skill set&apos;s operating from India</span></li>
                            <li>&#10004;<span>Our key to success has been in building a strong and reliable resource platform for various skills working in both IT/Non-IT sectors for the United States which has been acknowledged by our clients in various forums.</span></li>
                            <li>&#10004;<span>Our Talent database consists of niche skills across all industries and sectors of services and manufacturing and R &amp; D services, where we have met our client needs in a timely manner without any deviation from the quality standards of our organization and our client&apos;s standards.</span></li>
                        </ul>
                        <p>At BOP, we believe that we are an extension of our client&apos;s HR team and must perform as a responsible representative of their organization. Our major focus is customer service and provide consulting solutions across the globe, by maintaining work confidential, magnificent mapping, quick turnaround time, Accurate evaluation, wide networking across all industries.</p>
                  </div>
            </article>
        </div>
    );    
} 

export default About;