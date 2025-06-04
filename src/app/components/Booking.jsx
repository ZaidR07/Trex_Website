"use client";
import React, { useState } from 'react';
import { ChevronLeft, Clock, Calendar, Globe, User, Mail, CheckCircle, ExternalLink, X } from 'lucide-react';

const Booking = () => {
  const [currentScreen, setCurrentScreen] = useState('main');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showGuestInput, setShowGuestInput] = useState(false);
  const [guests, setGuests] = useState([]);
  const [guestEmail, setGuestEmail] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Get current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });

  const timeSlots = ['2:30pm', '3:00pm', '3:30pm', '4:00pm', '4:30pm', '5:00pm'];
  const stats = [
    { value: '90%', label: 'Client retention' },
    { value: '100%', label: 'Deadlines met' },
    { value: '150+', label: 'Projects Delivered' }
  ];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setCurrentScreen('timeSelect');
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setCurrentScreen('details');
  };

  const handleAddGuest = () => {
    if (guestEmail.trim() && guestEmail.includes('@')) {
      setGuests([...guests, guestEmail]);
      setGuestEmail('');
      setShowGuestInput(false);
    }
  };

  const removeGuest = (index) => {
    setGuests(guests.filter((_, i) => i !== index));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCurrentScreen('confirmation');
  };

  const renderMainScreen = () => (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-center py-6">
        <div className="px-6 py-2 bg-blue-600 rounded-full">
          <span className="text-white font-medium">Book a call</span>
        </div>
      </nav>

      <div className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Book a 15 mins call to<br />chat with us
            </h1>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Schedule a quick call to discover how our team's blend of innovative design and cutting-edge technology can transform your business.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-gray-800 font-semibold">Alex C</div>
                </div>
                <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                  Calendly
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">15 mins chat</h3>
              
              <div className="flex items-center gap-2 mb-6 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm">15 min</span>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Select a Day</h4>
                <div className="flex items-center justify-between mb-4">
                  <button className="p-1">
                    <ChevronLeft className="w-5 h-5 text-gray-400" />
                  </button>
                  <span className="font-medium text-gray-800">{currentMonth} {currentYear}</span>
                  <button className="p-1">
                    <ChevronLeft className="w-5 h-5 text-gray-400 rotate-180" />
                  </button>
                </div>
                
                <div className="grid grid-cols-7 gap-1 mb-4">
                  {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                    <div key={day} className="text-center text-xs text-gray-500 p-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => (
                    <button
                      key={date}
                      onClick={() => handleDateSelect(date)}
                      className={`p-2 text-sm rounded hover:bg-blue-50 ${
                        date === 6 ? 'bg-blue-600 text-white' : 'text-gray-800'
                      }`}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTimeSelect = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => setCurrentScreen('main')}
            className="p-1"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h3 className="font-bold text-gray-800">Friday</h3>
            <p className="text-sm text-gray-600">{currentMonth} {selectedDate}, {currentYear}</p>
          </div>
          <div className="ml-auto bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
            Calendly
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 text-gray-600 mb-1">
            <Globe className="w-4 h-4" />
            <span className="text-sm">India Standard Time (11:33am)</span>
          </div>
        </div>
        
        <h4 className="font-semibold text-gray-800 mb-2">Select a Time</h4>
        <p className="text-sm text-gray-600 mb-4">Duration: 15 min</p>
        
        <div className="space-y-2">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => handleTimeSelect(time)}
              className="w-full p-3 border border-gray-200 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {time}
            </button>
          ))}
        </div>
        
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-4 font-medium hover:bg-blue-700 transition-colors">
          Next
        </button>
      </div>
    </div>
  );

  const renderDetailsForm = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-3 mb-4">
          <button 
            onClick={() => setCurrentScreen('timeSelect')}
            className="p-1"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h3 className="font-bold text-gray-800">15 mins chat</h3>
          <div className="ml-auto bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
            Calendly
          </div>
        </div>
        
        <div className="mb-4 space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">15 min</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{selectedTime} - {selectedTime}, Friday, {currentMonth} {selectedDate}, {currentYear}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Globe className="w-4 h-4" />
            <span className="text-sm">India Standard Time</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          
          <div>
            <button
              type="button"
              onClick={() => setShowGuestInput(!showGuestInput)}
              className="w-full py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Add Guests
            </button>
            
            {showGuestInput && (
              <div className="mt-3 space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Guest email address"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="flex-1 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <button
                    type="button"
                    onClick={handleAddGuest}
                    className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
            
            {guests.length > 0 && (
              <div className="mt-3 space-y-2">
                <label className="block text-sm font-medium text-gray-800">
                  Added Guests:
                </label>
                {guests.map((guest, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <span className="text-sm text-gray-700">{guest}</span>
                    <button
                      type="button"
                      onClick={() => removeGuest(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">
              Please share anything that will help prepare for our meeting.
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full p-3 border border-gray-200 rounded-lg h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          
          <p className="text-xs text-gray-600">
            By proceeding, you confirm that you have read and agree to Calendly's Terms of Use and Privacy Notice.
          </p>
          
          <button
            type="button"
            onClick={handleFormSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Schedule Event
          </button>
        </div>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="font-bold text-gray-800">You are scheduled</span>
          </div>
          <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
            Calendly
          </div>
        </div>
        
        <p className="text-gray-600 mb-4">
          A calendar invitation has been sent to your email address.
        </p>
        
        <button className="w-full py-3 border border-gray-300 text-gray-800 rounded-lg mb-4 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          Open Invitation
          <ExternalLink className="w-4 h-4" />
        </button>
        
        <div className="bg-gray-50 rounded-lg p-4 space-y-3">
          <h4 className="font-semibold text-gray-800">15 mins chat</h4>
          
          <div className="flex items-center gap-2 text-gray-600">
            <User className="w-4 h-4" />
            <span className="text-sm">Alex C</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{selectedTime} - {selectedTime}, Friday, {currentMonth} {selectedDate}, {currentYear}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Globe className="w-4 h-4" />
            <span className="text-sm">India Standard Time</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-4 h-4" />
            <span className="text-sm">{formData.email}</span>
          </div>
          
          {guests.length > 0 && (
            <div className="border-t pt-3">
              <div className="text-sm font-medium text-gray-800 mb-2">Guests:</div>
              {guests.map((guest, index) => (
                <div key={index} className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{guest}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <button
          onClick={() => {
            setCurrentScreen('main');
            setGuests([]);
            setFormData({ name: '', email: '', message: '' });
            setSelectedDate(null);
            setSelectedTime(null);
          }}
          className="w-full mt-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Done
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      {currentScreen === 'main' && renderMainScreen()}
      {currentScreen === 'timeSelect' && renderTimeSelect()}
      {currentScreen === 'details' && renderDetailsForm()}
      {currentScreen === 'confirmation' && renderConfirmation()}
      
     
    </div>
  );
};

export default Booking;