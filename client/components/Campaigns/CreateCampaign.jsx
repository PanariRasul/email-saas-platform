import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

const steps = ['Details', 'Design', 'Audience', 'Schedule', 'Confirm'];

const CreateCampaign = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        fromName: '',
        fromEmail: '',
        design: '',
        audience: '',
        scheduleType: 'now',
        scheduleDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => step < steps.length - 1 && setStep(step + 1);
    const prevStep = () => step > 0 && setStep(step - 1);

    return (
        <>
            <div className="p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">Create Campaign</h2>

                {/* Stepper */}
                <div className="flex items-center justify-between mb-6">
                    {steps.map((label, i) => (
                        <div key={i} className="flex-1 flex items-center">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${i <= step ? 'bg-[#7F27FF]' : 'bg-gray-300 dark:bg-gray-600'
                                    }`}
                            >
                                {i < step ? <CheckCircle size={18} /> : i + 1}
                            </div>
                            {i < steps.length - 1 && <div className="flex-1 h-1 bg-gray-300 dark:bg-gray-600 mx-2"></div>}
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div className="bg-white dark:bg-[#0F044C] rounded-xl p-6 shadow-md">
                    {step === 0 && (
                        <>
                            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Campaign Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Campaign Name"
                                    className="input-style rounded h-10 p-3"
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Email Subject"
                                    className="input-style rounded h-10 p-3"
                                />
                                <input
                                    type="text"
                                    name="fromName"
                                    value={formData.fromName}
                                    onChange={handleChange}
                                    placeholder="From Name"
                                    className="input-style rounded h-10 p-3"
                                />
                                <input
                                    type="email"
                                    name="fromEmail"
                                    value={formData.fromEmail}
                                    onChange={handleChange}
                                    placeholder="From Email"
                                    className="input-style rounded h-10 p-3"
                                />
                            </div>
                        </>
                    )}

                    {step === 1 && (
                        <>
                            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Email Designer</h3>
                            <textarea
                                name="design"
                                rows="10"
                                value={formData.design}
                                onChange={handleChange}
                                placeholder="Write your HTML or rich text here..."
                                className="input-style w-full rounded-lg dark:bg-gary-500 p-5 dark:text-black"
                            ></textarea> 
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Choose Audience</h3>
                            <select
                                name="audience"
                                value={formData.audience}
                                onChange={handleChange}
                                className="input-style text-black p-3 rounded"
                            >
                                <option value="">Select Audience</option>
                                <option value="list1">Newsletter Subscribers</option>
                                <option value="list2">Promo Leads</option>
                            </select>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Schedule Campaign</h3>
                            <div className="flex flex-col gap-4">
                                <label className="flex items-center gap-2 text-black dark:text-white">
                                    <input
                                        type="radio"
                                        name="scheduleType"
                                        value="now"
                                        checked={formData.scheduleType === 'now'}
                                        onChange={handleChange}
                                    />
                                    Send Now
                                </label>
                                <label className="flex items-center gap-2 text-black dark:text-white">
                                    <input
                                        type="radio"
                                        name="scheduleType"
                                        value="later"
                                        checked={formData.scheduleType === 'later'}
                                        onChange={handleChange}
                                    />
                                    Schedule Later
                                </label>
                                {formData.scheduleType === 'later' && (
                                    <input
                                        type="datetime-local"
                                        name="scheduleDate"
                                        value={formData.scheduleDate}
                                        onChange={handleChange}
                                        className="input-style text-black p-2 rounded"
                                    />
                                )}
                            </div>
                        </>
                    )}

                    {step === 4 && (
                        <>
                            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">Confirm & Preview</h3>
                            <div className="text-black dark:text-white space-y-2">
                                <p><strong>Name:</strong> {formData.name}</p>
                                <p><strong>Subject:</strong> {formData.subject}</p>
                                <p><strong>From:</strong> {formData.fromName} ({formData.fromEmail})</p>
                                <p><strong>Audience:</strong> {formData.audience}</p>
                                <p><strong>Schedule:</strong> {formData.scheduleType === 'now' ? 'Send Now' : formData.scheduleDate}</p>
                            </div>
                        </>
                    )}
                </div>

                {/* Navigation Buttons */}
                <div className="mt-6 flex justify-between">
                    <button
                        onClick={prevStep}
                        disabled={step === 0}
                        className="px-4 py-2 rounded-lg border border-gray-400 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                        <ArrowLeft className="inline mr-1" size={16} /> Back
                    </button>

                    <div className="space-x-2">
                        {step === steps.length - 1 ? (
                            <>
                                <button className="bg-gray-200 text-black dark:text-black px-4 py-2 rounded-lg hover:bg-gray-300">
                                    Save Draft
                                </button>
                                <button className="bg-[#4300FF] text-white px-4 py-2 rounded-lg hover:bg-[#7F27FF]">
                                    Send Test
                                </button>
                                <button className="bg-[#7F27FF] text-white px-4 py-2 rounded-lg hover:bg-[#6528F7]">
                                    Schedule
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={nextStep}
                                className="bg-[#7F27FF] text-white px-4 py-2 rounded-lg hover:bg-[#6528F7]"
                            >
                                Next <ArrowRight className="inline ml-1" size={16} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateCampaign;
