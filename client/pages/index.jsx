// client/pages/index.jsx
import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/navigation.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import PlatformFeatures from '@/components/PlatformFeatures';
import Lenis from 'lenis';
import { useEffect } from 'react';
import TeamUseCases from '@/components/TeamUseCases';
import GrowthPerformanceChart from '@/components/GrowthPerformanceChart';
import EmailMarketingCTA from '@/components/EmailMarketingCTA';
import FAQSection from '../components/FAQSection';
export default function HomePage() {

    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup on unmount
        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0F044C] text-black dark:text-white">
            <Head>
                <title>EmailAI Pro - Modern Email & CRM Automation</title>
            </Head>

            {/* Top Navigation */}
            <Navbar />

            {/* Hero Section */}
            <main className={`flex flex-col  items-center justify-between px-6 py-36 max-w-7xl mx-auto ${styles.heroSection}`}>
                <div className="heroSection flex items-center justify-between px-6 max-w-7xl mx-auto">
                    <motion.div
                        className={`w-full md:w-1/2 ${styles.heroFadeIn}`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
                            Automate Your Email Campaigns & CRM{' '}
                            <span className="text-[#7F27FF] dark:text-[#AD49E1]">Smarter</span>
                        </h2>
                        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                            Build high-converting campaigns, validate emails, manage contacts, and analyze performance — all in one powerful platform.
                        </p>
                        <Link href="/signup" className={styles.ctaButton}>
                            Start for Free
                        </Link>
                    </motion.div>

                    <div className={`w-full md:w-1/2 mt-10 md:mt-0 ${styles.heroImages}`}>
                        <div className={`${styles.heroGradientBox}`}>
                            <motion.div className={`${styles.heroImg1}`}
                                whileHover={{
                                    rotate: Math.random() * 360,
                                    scale: 1.1
                                }}
                            >
                                <img src="/assets/images/square.png" alt="cube image" />
                            </motion.div>
                            <motion.div className={`${styles.heroImg2}`}
                                whileHover={{
                                    rotate: Math.random() * 360,
                                    scale: 1.1
                                }}
                            >
                                <img src="/assets/images/cube.png" alt="cube image" />
                            </motion.div>
                            <motion.div className={`${styles.heroImg3}`}
                                whileHover={{
                                    rotate: Math.random() * 360,
                                    scale: 1.1
                                }}
                            >
                                <img src="/assets/images/hexagon.png" alt="cube image" />
                            </motion.div>
                        </div>
                    </div>

                </div>
                <section className={`${styles.trustedSection} py-20 bg-[#7d26ff] dark:bg-[#000957]`}>
                    <h2 className='text-black dark:text-white'>Trusted by 50,000+ businesses worldwide</h2>
                    <div className={`${styles.trustedLink} py-20`} >
                        <ul>
                            <li className='bg-[#7d26ff] flex items-center justify-center dark:bg-[#7d26ff]' >TechFlow</li>
                            <li className='bg-[#7d26ff] flex items-center justify-center dark:bg-[#7d26ff]' >StartupX</li>
                            <li className='bg-[#7d26ff] flex items-center justify-center dark:bg-[#7d26ff]' >GrowthCo</li>
                            <li className='bg-[#7d26ff] flex items-center justify-center dark:bg-[#7d26ff]' >ScaleUp</li>
                        </ul>
                    </div>
                </section>



            </main>
            <PlatformFeatures />

            <TeamUseCases/>

            <GrowthPerformanceChart/>
            
            <EmailMarketingCTA/>

            <FAQSection/>

            <Footer />
        </div>
    );
}
