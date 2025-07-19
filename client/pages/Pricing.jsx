import React, { useState } from 'react'
import styles from '../styles/features.module.css'
import { FaCheckCircle } from 'react-icons/fa';
import { MdCreditCard, MdAlternateEmail, MdOutlineReport, MdSecurity, MdAccessTime } from 'react-icons/md';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaGift, FaPercent, FaQuestion, FaMoneyBillWave, FaReceipt, FaInfinity } from 'react-icons/fa';

function Pricing() {
    const [selectedAmount, setSelectedAmount] = useState(5000);
    const [activeTab, setActiveTab] = useState('credits'); // 'credits' or 'deliverability'
    const costPerCredit = 0.0076;
    const price = (selectedAmount * costPerCredit).toFixed(0);

    const creditOptions = [5000, 10000, 25000, 50000, 100000, 250000, 500000, 1000000];
    const includedFeatures = [
            {
                icon: <FaInfinity size={28} className="text-[#7F27FF]" />,
                label: 'Credits never expire',
            },
            {
                icon: <FaGift size={28} className="text-[#7F27FF]" />,
                label: '250 free credits',
            },
            {
                icon: <FaPercent size={28} className="text-[#7F27FF]" />,
                label: 'Volume discounts',
            },
            {
                icon: <FaQuestion size={28} className="text-[#7F27FF]" />,
                label: 'Unknown results are free',
            },
            {
                icon: <FaMoneyBillWave size={28} className="text-[#7F27FF]" />,
                label: 'No hidden costs',
            },
            {
                icon: <FaReceipt size={28} className="text-[#7F27FF]" />,
                label: 'Flexible billing options',
            },
        ];

    return (
        <div> 
            <Navbar/>
            <section className={`${styles.pricingHome} bg-white py-16 text-white dark:bg-gray-800 `}>
                <div className="max-w-6xl mx-auto px-4 ">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-black  dark:text-white">Flexible Pricing Options</h2>
                    <p className="text-center text-black mt-2 mb-10 dark:text-white dark:to-gray-800">
                    Choose the option that best fits your business needs.
                    </p>

                    {/* Toggle Tabs */}
                    <div className="flex justify-center space-x-4 mb-10">
                    <button
                        onClick={() => setActiveTab('credits')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-semibold transition 
                            ${
                            activeTab === 'credits'
                                ? 'bg-white text-[#7F27FF] shadow'
                                : 'text-white dark:text-gray-300 bg-[#7F27FF] opacity-100'
                            }`}
                        >
                        <MdCreditCard size={20} /> Credits
                    </button>

                    <button
                        onClick={() => setActiveTab('deliverability')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-t-lg font-semibold transition ${
                        activeTab === 'deliverability'
                            ? 'bg-white text-[#7F27FF] shadow'
                            : 'text-white dark:text-gray-300 bg-[#7F27FF] opacity-100'
                        }`}
                    >
                        <MdAlternateEmail size={20} /> Deliverability
                    </button>
                    </div>

                    {/* Conditional Content */}
                    {activeTab === 'credits' ? (
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                        {/* Credits Left Panel */}
                        <div className="bg-white text-gray-800 p-6 rounded-lg w-full md:w-1/2 shadow-lg">
                        <label className="block font-semibold text-lg mb-2 text-center">
                            How many emails do you have?
                        </label>
                        <input
                            type="number"
                            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 text-center"
                            value={selectedAmount}
                            onChange={(e) => setSelectedAmount(Number(e.target.value))}
                        />

                        <p className="text-center font-medium mb-4 text-gray-600">...or, select an amount</p>

                        <div className="grid grid-cols-4 gap-3 text-center">
                            {creditOptions.map((amount) => (
                            <button
                                key={amount}
                                onClick={() => setSelectedAmount(amount)}
                                className={`border rounded py-2 text-sm font-semibold ${
                                selectedAmount === amount
                                    ? 'bg-[#ede9fe] border-[#7F27FF] text-[#7F27FF]'
                                    : 'border-gray-300 hover:border-[#7F27FF] text-gray-700'
                                }`}
                            >
                                {amount >= 1000 ? `${amount / 1000}K` : amount}
                                <br />
                                <span className="text-xs font-normal text-gray-500">Credits</span>
                            </button>
                            ))}
                        </div>
                        </div>

                        {/* Pricing Panel */}
                        <div className="bg-[#7F27FF] p-6 rounded-lg w-full md:w-1/2 shadow-xl text-white">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-sm font-medium">Pay-As-You-Go</span>
                            <label className="flex items-center cursor-not-allowed opacity-50">
                            <div className="relative">
                                <input type="checkbox" disabled className="sr-only" />
                                <div className="block w-10 h-5 bg-white/30 rounded-full"></div>
                                <div className="dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition"></div>
                            </div>
                            <span className="ml-3 text-sm text-white/60">Monthly</span>
                            </label>
                        </div>

                        <h3 className="text-4xl font-bold mb-2">${(selectedAmount * 0.0076).toFixed(0)}</h3>
                        <div className="flex justify-between text-sm text-white/80 mb-6">
                            <span>{selectedAmount.toLocaleString()} Credits</span>
                            <span>${(0.0076).toFixed(4)} Cost Per Credit</span>
                        </div>

                        <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded mb-3 transition">
                            Get Started Free →
                        </button>
                        <p className="text-sm text-white/80 mb-4 text-center">Includes 250 free credits</p>

                        <ul className="text-sm space-y-2">
                            <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-300" /> No monthly payments.
                            </li>
                            <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-300" /> Buy only what you need.
                            </li>
                            <li className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-300" /> Credits never expire.
                            </li>
                        </ul>
                        </div>
                    </div>
                    ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                        {/* Standard Plan */}
                        <div className="bg-[#7F27FF] text-white rounded-lg p-6 shadow">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <MdAlternateEmail size={20} /> Standard
                        </h3>
                        <p className="text-4xl font-bold mt-4 mb-2">
                            $149 <span className="text-base font-medium text-white/80">/ month</span>
                        </p>

                        <div className="flex justify-center items-center space-x-4 text-sm font-medium text-white/70 mb-6">
                            <span>Monthly</span>
                            <span className="opacity-50">|</span>
                            <span className="opacity-50 cursor-not-allowed">Yearly</span>
                        </div>

                        <ul className="space-y-2 mb-6 text-sm">
                            <li className="flex items-center gap-2">
                            <MdOutlineReport className="text-white" /> <strong>500</strong> Inbox Reports
                            </li>
                            <li className="flex items-center gap-2">
                            <MdSecurity className="text-white" /> <strong>50</strong> Blacklist Monitors
                            </li>
                            <li className="flex items-center gap-2">
                            <MdAccessTime className="text-white" /> <strong>12-Hour</strong> Blacklist Check Frequency
                            </li>
                        </ul>

                        <button className="w-full bg-white hover:bg-white/90 text-[#7F27FF] font-bold py-2 rounded transition">
                            Get Started Free →
                        </button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-[#7F27FF] text-white rounded-lg p-6 shadow">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <MdAlternateEmail size={20} /> Enterprise
                        </h3>
                        <p className="mt-4 text-white/90">
                            Need a more customized solution for your business?
                        </p>
                        <p className="text-sm text-white/70 mb-6">Get in touch with our sales team.</p>

                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                            <MdOutlineReport className="text-white" /> — Inbox Reports
                            </li>
                            <li className="flex items-center gap-2">
                            <MdSecurity className="text-white" /> — Blacklist Monitors
                            </li>
                            <li className="flex items-center gap-2">
                            <MdAccessTime className="text-white" /> — Blacklist Check Frequency
                            </li>
                        </ul>

                        <button className="mt-6 w-full bg-white hover:bg-white/90 text-[#7F27FF] font-bold py-2 rounded transition">
                            Send us a message →
                        </button>
                        </div>
                    </div>
                    )}
                </div>
            </section>

            <section className="bg-[#f6f7ff] dark:bg-gray-900 py-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Included with your Emailable account
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-10">
                    Email verification is important, so we’ve made it a no-brainer.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {includedFeatures.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2">
                        {feature.icon}
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{feature.label}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>


            <Footer/>
        </div>
    );
}

export default Pricing