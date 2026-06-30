import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnquiryPopup = ({ isOpen, onClose, animalType = '', feedInterest = '' }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        location: '',
        animalType: animalType || '',
        feedInterest: feedInterest || '',
        category: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState({});
    const [submittedName, setSubmittedName] = useState('');
    const [submittedMobile, setSubmittedMobile] = useState('');

    const animalOptions = ['Cattle', 'Poultry', 'Pig', 'Fish', 'Other'];
    const feedOptions = ['Starter Feed', 'Grower Feed', 'Finisher Feed', 'Layer Feed', 'Broiler Feed', 'Custom Feed'];
    const categoryOptions = ['Farmer', 'Distributor', 'Veterinarian', 'Researcher', 'Other'];

    useEffect(() => {
        if (isOpen) {
            setFormData(prev => ({
                ...prev,
                animalType: animalType || prev.animalType,
                feedInterest: feedInterest || prev.feedInterest
            }));
            setIsSuccess(false);
            setErrors({});
            setSubmittedName('');
            setSubmittedMobile('');
        }
    }, [isOpen, animalType, feedInterest]);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name required';
        if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number required';
        else if (!/^[0-9]{10}$/.test(formData.mobile.trim())) newErrors.mobile = 'Enter a valid 10-digit number';
        if (!formData.location.trim()) newErrors.location = 'Location required';
        if (!formData.animalType) newErrors.animalType = 'Select an animal type';
        if (!formData.feedInterest) newErrors.feedInterest = 'Select feed interest';
        if (!formData.category) newErrors.category = 'Select a category';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setSubmittedName(formData.name);
        setSubmittedMobile(formData.mobile);
        setIsSubmitting(true);

        try {
            // Replace with your actual API endpoint
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'https://your-api.com'}/api/enquiries`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({
                    name: '',
                    mobile: '',
                    location: '',
                    animalType: '',
                    feedInterest: '',
                    category: ''
                });

                setTimeout(() => {
                    onClose();
                    setIsSuccess(false);
                }, 3000);
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Error submitting enquiry:', error);
            alert('Failed to submit enquiry. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleChipSelect = (value) => {
        setFormData(prev => ({
            ...prev,
            animalType: prev.animalType === value ? '' : value
        }));
        if (errors.animalType) {
            setErrors(prev => ({
                ...prev,
                animalType: ''
            }));
        }
    };

    const getAnimalLabel = (value) => {
        const map = {
            'cattle': 'Cattle',
            'poultry': 'Poultry',
            'pig': 'Pig',
            'fish': 'Fish',
            'other': 'Other'
        };
        return map[value] || value;
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgba(10,20,12,0.82)] backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-[900px]"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-[#e8e0d0] hover:bg-[#d4cbb8] flex items-center justify-center text-[#4a5a4e] text-lg transition-colors shadow-md cursor-pointer"
                            aria-label="Close popup"
                        >
                            ✕
                        </button>

                        {/* Modal */}
                        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-[#F7F2E8] shadow-2xl">
                            {/* Left Panel */}
                            <div className="w-full md:w-[280px] flex-shrink-0 bg-[#0F2D1A] p-6 md:p-8 relative overflow-hidden">
                                {/* Decorative circles */}
                                <div className="absolute -bottom-16 -right-16 w-44 h-44 rounded-full bg-[#1a4a28] pointer-events-none"></div>
                                <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-[#1a4a28] pointer-events-none"></div>

                                <div className="relative z-10">
                                    {/* Brand */}
                                    <div className="flex items-center gap-2 mb-8">
                                        <div className="w-9 h-9 bg-[#C8952A] rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path d="M10 3C10 3 6 6 6 10.5C6 13 7.8 15 10 15C12.2 15 14 13 14 10.5C14 6 10 3 10 3Z" fill="#0F2D1A" />
                                                <path d="M7 11C8 11 9 12 10 12C11 12 12 11 13 11" stroke="#0F2D1A" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                        </div>
                                        <div className="text-[13px] font-medium text-[#F7F2E8] leading-tight">
                                            Green Gold
                                            <span className="block text-[10px] text-[#4A7A5A] font-normal uppercase tracking-wider">Animal Feed</span>
                                        </div>
                                    </div>

                                    {/* Headline */}
                                    <h3 className="text-[22px] font-medium text-[#F7F2E8] leading-tight mb-2">
                                        Talk to our feed experts
                                    </h3>
                                    <p className="text-[12px] text-[#4A7A5A] leading-relaxed mb-8">
                                        We'll help you find the right nutrition plan for your livestock.
                                    </p>

                                    {/* Trust List */}
                                    <div className="space-y-3.5">
                                        {[
                                            { icon: '✓', label: 'ISO certified', desc: 'Quality assured at every batch' },
                                            { icon: '⏱', label: 'Response in 24h', desc: 'Our team responds fast' },
                                            { icon: '✓', label: 'Pan-India delivery', desc: 'Serving 18+ states' },
                                            { icon: '🛡', label: 'Your data stays private', desc: 'Used only for this enquiry' }
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-2.5">
                                                <div className="w-5 h-5 rounded-full border border-[#C8952A55] bg-[#C8952A22] flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <span className="text-[10px] text-[#C8952A]">{item.icon}</span>
                                                </div>
                                                <div>
                                                    <strong className="block text-[12px] text-[#c5d9ca] font-medium">{item.label}</strong>
                                                    <span className="text-[11px] text-[#8aaa94]">{item.desc}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Panel */}
                            <div className="flex-1 p-6 md:p-8 overflow-y-auto max-h-[90vh]">
                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex flex-col items-center justify-center text-center py-12"
                                    >
                                        <div className="w-16 h-16 bg-[#0F2D1A] rounded-full flex items-center justify-center mb-5">
                                            <svg className="w-8 h-8 text-[#C8952A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h4 className="text-2xl font-medium text-[#0F2D1A] mb-2">Enquiry sent</h4>
                                        <p className="text-[13px] text-[#4a5a4e]">
                                            Thank you, <strong className="text-[#0F2D1A]">{submittedName}</strong>.<br />
                                            Our team will reach out to <strong className="text-[#0F2D1A]">{submittedMobile}</strong> within 24 hours.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <>
                                        {/* Header */}
                                        <div className="mb-6">
                                            <div className="text-[10px] font-medium tracking-[0.1em] uppercase text-[#4A7A5A] mb-2">
                                                Quick enquiry
                                            </div>
                                            <h3 className="text-xl font-medium text-[#0F2D1A] leading-tight">
                                                Let's find the right feed<br />
                                                for your <em className="text-[#C8952A] not-italic">animals</em>
                                            </h3>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            {/* Name & Mobile */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div className={`field ${errors.name ? 'error' : ''}`}>
                                                    <label className="block text-[11px] font-medium text-[#4a5a4e] tracking-[0.04em] uppercase mb-1">
                                                        Full name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="w-full bg-white border-2 border-[#d4cbb8] rounded-lg px-3 py-2.5 text-[13px] text-[#0F2D1A] outline-none focus:border-[#4A7A5A] transition-colors placeholder:text-[#b0a898]"
                                                        placeholder="Your name"
                                                        disabled={isSubmitting}
                                                    />
                                                    {errors.name && <p className="text-[10px] text-[#c0392b] mt-1">{errors.name}</p>}
                                                </div>

                                                <div className={`field ${errors.mobile ? 'error' : ''}`}>
                                                    <label className="block text-[11px] font-medium text-[#4a5a4e] tracking-[0.04em] uppercase mb-1">
                                                        Mobile *
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="mobile"
                                                        value={formData.mobile}
                                                        onChange={handleChange}
                                                        className="w-full bg-white border-2 border-[#d4cbb8] rounded-lg px-3 py-2.5 text-[13px] text-[#0F2D1A] outline-none focus:border-[#4A7A5A] transition-colors placeholder:text-[#b0a898]"
                                                        placeholder="10-digit number"
                                                        maxLength="10"
                                                        disabled={isSubmitting}
                                                    />
                                                    {errors.mobile && <p className="text-[10px] text-[#c0392b] mt-1">{errors.mobile}</p>}
                                                </div>
                                            </div>

                                            {/* Location */}
                                            <div className={`field mt-3 ${errors.location ? 'error' : ''}`}>
                                                <label className="block text-[11px] font-medium text-[#4a5a4e] tracking-[0.04em] uppercase mb-1">
                                                    Location *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="location"
                                                    value={formData.location}
                                                    onChange={handleChange}
                                                    className="w-full bg-white border-2 border-[#d4cbb8] rounded-lg px-3 py-2.5 text-[13px] text-[#0F2D1A] outline-none focus:border-[#4A7A5A] transition-colors placeholder:text-[#b0a898]"
                                                    placeholder="City, State"
                                                    disabled={isSubmitting}
                                                />
                                                {errors.location && <p className="text-[10px] text-[#c0392b] mt-1">{errors.location}</p>}
                                            </div>

                                            {/* Animal Type - Chips */}
                                            <div className={`field mt-3 ${errors.animalType ? 'error' : ''}`}>
                                                <label className="block text-[11px] font-medium text-[#4a5a4e] tracking-[0.04em] uppercase mb-1.5">
                                                    Animal type *
                                                </label>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {animalOptions.map(option => (
                                                        <button
                                                            key={option}
                                                            type="button"
                                                            onClick={() => handleChipSelect(option.toLowerCase())}
                                                            className={`px-3 py-1.5 rounded-full border-2 text-[11px] transition-all font-medium ${formData.animalType === option.toLowerCase()
                                                                ? 'border-[#C8952A] bg-[#C8952A] text-white'
                                                                : 'border-[#d4cbb8] bg-white text-[#4a5a4e] hover:border-[#4A7A5A]'
                                                                }`}
                                                            disabled={isSubmitting}
                                                        >
                                                            {option}
                                                        </button>
                                                    ))}
                                                </div>
                                                {errors.animalType && <p className="text-[10px] text-[#c0392b] mt-1">{errors.animalType}</p>}
                                            </div>

                                            {/* Feed & Category */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                                                <div className={`field ${errors.feedInterest ? 'error' : ''}`}>
                                                    <label className="block text-[11px] font-medium text-[#4a5a4e] tracking-[0.04em] uppercase mb-1">
                                                        Feed interest *
                                                    </label>
                                                    <div className="relative">
                                                        <select
                                                            name="feedInterest"
                                                            value={formData.feedInterest}
                                                            onChange={handleChange}
                                                            className="w-full bg-white border-2 border-[#d4cbb8] rounded-lg px-3 py-2.5 text-[13px] text-[#0F2D1A] outline-none focus:border-[#4A7A5A] transition-colors appearance-none pr-8"
                                                            disabled={isSubmitting}
                                                        >
                                                            <option value="">Select…</option>
                                                            {feedOptions.map(option => (
                                                                <option key={option} value={option.toLowerCase().replace(' ', '-')}>
                                                                    {option}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                            <svg className="w-3 h-3 text-[#4A7A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    {errors.feedInterest && <p className="text-[10px] text-[#c0392b] mt-1">{errors.feedInterest}</p>}
                                                </div>

                                                <div className={`field ${errors.category ? 'error' : ''}`}>
                                                    <label className="block text-[11px] font-medium text-[#4a5a4e] tracking-[0.04em] uppercase mb-1">
                                                        You are a *
                                                    </label>
                                                    <div className="relative">
                                                        <select
                                                            name="category"
                                                            value={formData.category}
                                                            onChange={handleChange}
                                                            className="w-full bg-white border-2 border-[#d4cbb8] rounded-lg px-3 py-2.5 text-[13px] text-[#0F2D1A] outline-none focus:border-[#4A7A5A] transition-colors appearance-none pr-8"
                                                            disabled={isSubmitting}
                                                        >
                                                            <option value="">Select…</option>
                                                            {categoryOptions.map(option => (
                                                                <option key={option} value={option.toLowerCase()}>
                                                                    {option}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                                            <svg className="w-3 h-3 text-[#4A7A5A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    {errors.category && <p className="text-[10px] text-[#c0392b] mt-1">{errors.category}</p>}
                                                </div>
                                            </div>

                                            {/* Submit Button */}
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full mt-5 py-3 px-4 bg-[#0F2D1A] hover:bg-[#1a4a28] text-[#F7F2E8] rounded-lg font-medium text-[13px] flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
                                            >
                                                <span className="w-2.5 h-2.5 rounded-full bg-[#C8952A]"></span>
                                                {isSubmitting ? (
                                                    <>
                                                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send enquiry
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                        </svg>
                                                    </>
                                                )}
                                            </button>

                                            <p className="text-[10px] text-[#8a9a8e] text-center mt-3">
                                                No spam. We'll call only to help.
                                            </p>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EnquiryPopup;