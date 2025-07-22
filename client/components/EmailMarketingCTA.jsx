import React, { useState } from 'react';
import { Moon, Sun, ArrowRight, Play } from 'lucide-react';

const EmailMarketingCTA = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const themeClasses = isDarkMode
        ? "bg-gray-900 text-white"
        : "bg-gray-50 text-gray-900";

    return (
        <div className={`min-h-screen transition-colors duration-300 bg-[#F5EFFF] dark:bg-[#0f044d] ${themeClasses}`}>
            {/* Theme Toggle */}


            <div className="container mx-auto px-6 py-16 max-w-7xl">
                {/* CTA Section */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 p-12 md:p-16 text-center text-white shadow-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-overlay"></div>
                        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full mix-blend-overlay"></div>
                        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full mix-blend-overlay"></div>
                        <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-white rounded-full mix-blend-overlay"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 leading-tight">
                            Ready to transform your email marketing?
                        </h1>

                        <p className="text-xl md:text-xl mb-12 leading-relaxed opacity-90 max-w-3xl mx-auto">
                            Join 50,000+ businesses using EmailAI Pro to create, verify, and send
                            high-converting email campaigns with AI-powered automation.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="
                group bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg 
                transition-all duration-300 hover:bg-gray-100 hover:scale-105 
                shadow-lg hover:shadow-xl flex items-center gap-3
                min-w-[200px] justify-center">
                                Start Free Trial
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="
                group bg-transparent border-2 border-white text-white px-6 py-4 rounded-xl 
                font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-purple-600 
                hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3
                min-w-[200px] justify-center">
                                <Play className="w-5 h-5" />
                                View Pricing
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm opacity-80">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span>No credit card required</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span>14-day free trial</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span>Cancel anytime</span>
                            </div>
                        </div>
                    </div>

                    {/* Animated Elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-white to-transparent rounded-full opacity-5 animate-pulse"></div>
                        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tl from-white to-transparent rounded-full opacity-5 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-16 grid md:grid-cols-4 gap-8">
                    {[
                        { number: "50,000+", label: "Active Users" },
                        { number: "98%", label: "Delivery Rate" },
                        { number: "45%", label: "Average Open Rate" },
                        { number: "24/7", label: "Support Available" }
                    ].map((stat, index) => (
                        <div
                            key={index}
                            className={`
                text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 dark:bg-[#221952] text-white bg-white text-gray-900
                shadow-lg hover:shadow-xl bg-[#6528F7] `}
                        >
                            <div className="text-3xl font-bold text-[#00FF9C] mb-2">{stat.number}</div>
<<<<<<< HEAD
                            <div className="text-black dark:text-gray-300">{stat.label}</div>
=======
                            <div className="text-black dark:text-gray-800">{stat.label}</div>
>>>>>>> 385728a01f08c2a20410bbccb20af5f558616ce6
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "AI-Powered Content",
                            description: "Generate compelling email content with advanced AI algorithms",
                            icon: "🤖"
                        },
                        {
                            title: "Smart Automation",
                            description: "Set up sophisticated email sequences that run on autopilot",
                            icon: "⚡"
                        },
                        {
                            title: "Advanced Analytics",
                            description: "Track performance with detailed insights and reporting",
                            icon: "📊"
                        }
                    ].map((feature, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 border border-[#AD49E1] shadow-[0_0_5px_2px_#4300FF]
                                dark:bg-[#221952]
                                shadow-lg hover:shadow-xl`}>

                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
};

export default EmailMarketingCTA;