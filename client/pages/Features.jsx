import Navbar from '@/components/Navbar'
import React from 'react'
import { FaRobot, FaShieldAlt, FaChartBar, FaTags, FaPuzzlePiece, FaFlask } from 'react-icons/fa';
import { FaBullseye, FaEnvelopeOpenText, FaHeartbeat, FaComments } from 'react-icons/fa';
import styles from '../styles/features.module.css'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Features() {
   const features = [
        {
            icon: <FaRobot className="text-2xl text-indigo-500" />,
            title: 'AI-Powered Automation',
            description: 'Smart workflows that adapt to your audience behavior and optimize engagement automatically.',
        },
        {
            icon: <FaShieldAlt className="text-2xl text-rose-500" />,
            title: 'Email Verification',
            description: '99.9% accuracy with real-time validation to protect your sender reputation.',
        },
        {
            icon: <FaChartBar className="text-2xl text-blue-500" />,
            title: 'Advanced Analytics',
            description: 'Deep insights into campaign performance with actionable recommendations.',
        },
        {
            icon: <FaTags className="text-2xl text-yellow-500" />,
            title: 'Contact Management',
            description: 'Organize and segment your audience effortlessly with smart tagging.',
        },
        {
            icon: <FaPuzzlePiece className="text-2xl text-purple-500" />,
            title: 'Smart Segmentation',
            description: 'AI-driven audience segmentation for personalized campaigns.',
        },
        {
            icon: <FaFlask className="text-2xl text-green-500" />,
            title: 'A/B Testing',
            description: 'Optimize your campaigns with built-in split testing capabilities.',
        },
    ];
  const plans = ['Basic', 'Pro', 'Enterprise'];

    const features1 = [
        { name: 'Email Builder', availability: [true, true, true] },
        { name: 'Automation Workflows', availability: [false, true, true] },
        { name: 'A/B Testing', availability: [false, true, true] },
        { name: 'Smart Segmentation', availability: [false, true, true] },
        { name: 'Email Validation', availability: [true, true, true] },
        { name: 'Analytics Dashboard', availability: [true, true, true] },
        { name: 'Priority Support', availability: [false, false, true] },
        { name: 'Custom Integrations', availability: [false, false, true] },
    ];

    const planColors = {
        0: 'text-blue-600',
        1: 'text-purple-600',
        2: 'text-green-600',
    };
    const guarantees = [
        {
            icon: <FaBullseye className="text-3xl text-purple-400" />,
            title: '99%',
            subtitle: 'Deliverability Guarantee',
            description: (
                <>
                    We <strong>guarantee</strong> that no more than 1% of emails verified as <strong>Deliverable</strong> will bounce upon sending.
                </>
            ),
        },
        {
            icon: <FaEnvelopeOpenText className="text-3xl text-purple-400" />,
            title: '30k+',
            subtitle: 'Emails Verified per Minute',
            description:
                'We verify emails over 8x faster than the competition, verifying 100,000 emails in under 3 minutes.',
        },
        {
            icon: <FaHeartbeat className="text-3xl text-purple-400" />,
            title: '99.99%',
            subtitle: 'Platform Uptime',
            description:
                'Our secure and robust global infrastructure provides exceptional performance to customers around the world.',
        },
        {
            icon: <FaComments className="text-3xl text-purple-400" />,
            title: '24/7',
            subtitle: 'Customer Support',
            description:
                'Our team of experts are located around the globe and are available 24 hours a day.',
        },
    ];

  return (
    <div>
      <Navbar/>
        <section className={`${styles.featuresHome} py-16 bg-gradient-to-br from-white to-[#f0f4ff] dark:from-gray-900 dark:to-gray-800`}>
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-sm font-semibold text-[#7F27FF] uppercase mb-2">
                    Everything You Need to Succeed
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Powerful Features That Drive Results
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
                    Tools that help you create, send, and optimize email campaigns that convert.
                </p>

                <div className={`${styles.featureCard} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`}>
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`${styles.featureCard1} bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition`}
                        >
                            <div className="mb-3">{feature.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

          <section className="py-16 bg-gradient-to-br from-white to-[#f0f4ff] dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                    Compare Plans by Feature
                </h2>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-left">
                                <th className="py-3 px-4 font-semibold">Feature</th>
                                {plans.map((plan, i) => (
                                    <th key={plan} className={`py-3 px-4 font-semibold ${planColors[i]}`}>
                                        {plan}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {features1.map((feature, i) => (
                                <tr key={i} className="border-t border-gray-200 dark:border-gray-700">
                                    <td className="py-3 px-4 text-gray-800 dark:text-gray-100 font-sans">{feature.name}</td>
                                    {feature.availability.map((isAvailable, j) => (
                                        <td key={j} className="py-1 px-4 text-center">
                                            {isAvailable && (
                                                <IoMdCheckmarkCircleOutline className="  text-green-500 " />
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-[#f0f4ff] dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Our Guarantees
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
                    We are committed to providing the <strong>fastest</strong> and <strong>most accurate email verification tool</strong>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {guarantees.map((item, idx) => (
                        <div
                            key={idx}
                            className="bg-[#7F27FF] dark:bg-[#0f044d] rounded-lg p-6 text-left shadow-md hover:shadow-xl transition"
                        >
                            <div className="mb-4 text-white">{item.icon}</div>
                            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                            <p className="font-semibold text-white mb-2">{item.subtitle}</p>
                            <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    </div>
  )
}

export default Features
