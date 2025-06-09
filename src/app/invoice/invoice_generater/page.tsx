'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Minus, FileText, Mail, MapPin, CreditCard } from 'lucide-react';
import { URI } from '@/contant'; // Adjust the import path as necessary
import axios from 'axios';

const Page = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        clientName: '',
        clientContact: '',
        clientEmail: '',
        clientAddress: '',
        services: [
            {
                id: 1,
                serviceName: '',
                descriptions: [''],
                price: 0
            }
        ],
        paymentMethod: '',
        paidAmount: 0
    });

    const [totals, setTotals] = useState({
        totalAmount: 0,
        balanceAmount: 0
    });

    // Calculate totals whenever services or paid amount changes
    useEffect(() => {
        const totalAmount = formData.services.reduce((sum, service) => sum + (parseFloat(service.price) || 0), 0);
        const balanceAmount = totalAmount - (parseFloat(formData.paidAmount) || 0);

        setTotals({
            totalAmount: totalAmount,
            balanceAmount: balanceAmount
        });
    }, [formData.services, formData.paidAmount]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const addService = () => {
        const newService = {
            id: Date.now(),
            serviceName: '',
            descriptions: [''],
            price: 0
        };
        setFormData(prev => ({
            ...prev,
            services: [...prev.services, newService]
        }));
    };

    const removeService = (serviceId) => {
        if (formData.services.length > 1) {
            setFormData(prev => ({
                ...prev,
                services: prev.services.filter(service => service.id !== serviceId)
            }));
        }
    };

    const updateService = (serviceId, field, value) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.map(service =>
                service.id === serviceId
                    ? { ...service, [field]: value }
                    : service
            )
        }));
    };

    const addDescription = (serviceId) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.map(service =>
                service.id === serviceId
                    ? { ...service, descriptions: [...service.descriptions, ''] }
                    : service
            )
        }));
    };

    const removeDescription = (serviceId, descIndex) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.map(service =>
                service.id === serviceId
                    ? { ...service, descriptions: service.descriptions.filter((_, index) => index !== descIndex) }
                    : service
            )
        }));
    };

    const updateDescription = (serviceId, descIndex, value) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.map(service =>
                service.id === serviceId
                    ? {
                        ...service,
                        descriptions: service.descriptions.map((desc, index) =>
                            index === descIndex ? value : desc
                        )
                    }
                    : service
            )
        }));
    };

    // Validation function
    const validateForm = () => {
        if (!formData.companyName.trim()) {
            alert('Company Name is required');
            return false;
        }
        if (!formData.clientName.trim()) {
            alert('Client Name is required');
            return false;
        }
        if (!formData.clientContact.trim()) {
            alert('Contact Number is required');
            return false;
        }
        if (!formData.clientEmail.trim()) {
            alert('Email Address is required');
            return false;
        }
        if (!formData.paymentMethod) {
            alert('Payment Method is required');
            return false;
        }
        if (formData.paidAmount === '' || formData.paidAmount < 0) {
            alert('Paid Amount is required and must be 0 or greater');
            return false;
        }

        for (let i = 0; i < formData.services.length; i++) {
            const service = formData.services[i];
            if (!service.serviceName.trim()) {
                alert(`Service Name for Service ${i + 1} is required`);
                return false;
            }
            if (!service.price || service.price <= 0) {
                alert(`Price for Service ${i + 1} is required and must be greater than 0`);
                return false;
            }
            const hasValidDescription = service.descriptions.some(desc => desc.trim() !== '');
            if (!hasValidDescription) {
                alert(`At least one Service Description for Service ${i + 1} is required`);
                return false;
            }
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post(
                `${URI}generateinvoice`,
                { payload: formData },
                { responseType: 'arraybuffer' } // Expect binary data (PDF buffer)
            );

            // Create a Blob from the buffer
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `invoice_${Date.now()}.pdf`; // Dynamic file name
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url); // Clean up

            console.log('Invoice created successfully:', response.data);
            alert('Invoice generated and downloaded successfully!');
        } catch (error) {
            console.error('Error generating invoice:', error);
            alert('Error generating invoice. Please try again.');
        }

        console.log('Invoice Data:', { ...formData, ...totals });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex items-center gap-3 mb-8">
                        <FileText className="w-8 h-8 text-indigo-600" />
                        <h1 className="text-3xl font-bold text-gray-800">Invoice Generator</h1>
                    </div>

                    <div className="space-y-8">
                        {/* Company Information */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Company Information</h2>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">
                                    Company Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.companyName}
                                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                                    className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                    placeholder="Enter your company name"
                                />
                            </div>
                        </div>

                        {/* Client Information */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Client Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">
                                        Client Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.clientName}
                                        onChange={(e) => handleInputChange('clientName', e.target.value)}
                                        className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        placeholder="Client name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">
                                        Contact Number *
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.clientContact}
                                        onChange={(e) => handleInputChange('clientContact', e.target.value)}
                                        className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        placeholder="Phone number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">
                                        <Mail className="w-4 h-4 inline mr-1" />
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.clientEmail}
                                        onChange={(e) => handleInputChange('clientEmail', e.target.value)}
                                        className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        placeholder="client@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">
                                        <MapPin className="w-4 h-4 inline mr-1" />
                                        Address
                                    </label>
                                    <textarea
                                        value={formData.clientAddress}
                                        onChange={(e) => handleInputChange('clientAddress', e.target.value)}
                                        className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                                        rows={3}
                                        placeholder="Client address"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Services Section */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-gray-700">Services</h2>
                                <button
                                    type="button"
                                    onClick={addService}
                                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add Service
                                </button>
                            </div>

                            {formData.services.map((service, serviceIndex) => (
                                <div key={service.id} className="bg-white rounded-lg p-6 mb-4 border border-gray-200">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-lg font-medium text-gray-700">Service {serviceIndex + 1}</h3>
                                        {formData.services.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeService(service.id)}
                                                className="text-red-600 hover:text-red-800 p-1"
                                            >
                                                <Minus className="w-5 h-5" />
                                            </button>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                                Service Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={service.serviceName}
                                                onChange={(e) => updateService(service.id, 'serviceName', e.target.value)}
                                                className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                                placeholder="Enter service name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                                Price *
                                            </label>
                                            <input
                                                type="number"
                                                required
                                                min="0.01"
                                                step="0.01"
                                                value={service.price}
                                                onChange={(e) => updateService(service.id, 'price', parseFloat(e.target.value) || 0)}
                                                className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                                placeholder="0.00"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="block text-sm font-medium text-gray-600">
                                                Service Descriptions *
                                            </label>
                                            <button
                                                type="button"
                                                onClick={() => addDescription(service.id)}
                                                className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center gap-1"
                                            >
                                                <Plus className="w-4 h-4" />
                                                Add Description
                                            </button>
                                        </div>
                                        {service.descriptions.map((desc, descIndex) => (
                                            <div key={descIndex} className="flex gap-2 mb-2">
                                                <input
                                                    type="text"
                                                    value={desc}
                                                    onChange={(e) => updateDescription(service.id, descIndex, e.target.value)}
                                                    className="flex-1 px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                                    placeholder={`Description ${descIndex + 1}`}
                                                />
                                                {service.descriptions.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeDescription(service.id, descIndex)}
                                                        className="text-red-600 hover:text-red-800 p-2"
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Payment Information */}
                        <div className="bg-gray-50 rounded-xl p-6">
                            <h2 className="text-xl font-semibold text-gray-700 mb-4">Payment Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">
                                        <CreditCard className="w-4 h-4 inline mr-1" />
                                        Payment Method *
                                    </label>
                                    <select
                                        required
                                        value={formData.paymentMethod}
                                        onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                                        className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                    >
                                        <option value="">Select payment method</option>
                                        <option value="cash">Cash</option>
                                        <option value="Cheque">Cheque</option>
                                        <option value="bank_transfer">Bank Transfer</option>
                                        <option value="credit_card">Credit Card</option>
                                        <option value="upi">UPI</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">
                                        Paid Amount *
                                    </label>
                                    <input
                                        type="number"
                                        required
                                        min="0"
                                        step="0.01"
                                        value={formData.paidAmount}
                                        onChange={(e) => handleInputChange('paidAmount', parseFloat(e.target.value) || 0)}
                                        className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        placeholder="0.00"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Totals Summary */}
                        <div className="bg-indigo-50 rounded-xl p-6 border-2 border-indigo-200">
                            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Invoice Summary</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-lg">
                                    <span className="text-gray-700">Total Amount:</span>
                                    <span className="font-semibold text-gray-900">{totals.totalAmount.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center text-lg">
                                    <span className="text-gray-700">Paid Amount:</span>
                                    <span className="font-semibold text-green-600">{formData.paidAmount.toFixed(2)}</span>
                                </div>
                                <div className="border-t border-indigo-200 pt-3">
                                    <div className="flex justify-between items-center text-xl">
                                        <span className="text-gray-800 font-semibold">Balance Amount:</span>
                                        <span className={`font-bold {totals.balanceAmount >= 0 ? 'text-red-600' : 'text-green-600'}`}>
                                            {Math.abs(totals.balanceAmount).toFixed(2)}
                                            {totals.balanceAmount < 0 && ' (Overpaid)'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center pt-6">
                            <button
                                onClick={handleSubmit}
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                            >
                                Generate Invoice
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;