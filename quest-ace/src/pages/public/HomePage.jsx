import React, { useState } from 'react';
import { GraduationCap, Building2, ArrowRight, CheckCircle } from 'lucide-react';
import Footer from '../../components/common/Footer';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [examCode, setExamCode] = useState('');
  const [orgCode, setOrgCode] = useState('');

  const handleChange = (e, type, max) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, max);
    type === 'exam' ? setExamCode(val) : setOrgCode(val);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-3 px-6">
      <div className="text-center max-w-3xl text-gray-900 font-semibold text-xl mx-auto p-3 border-b-2 border-slate-700 rounded-xl">
          The most trusted platform for secure online examinations and proctoring
      </div>
        
      <div className="max-w-7xl mx-auto mt-5 grid grid-cols-1 lg:grid-cols-2 gap-10 relative">

        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-3/4 w-0.5 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>

        <div className="bg-white border rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3">
            <div className="p-1 bg-indigo-100 rounded-lg">
              <GraduationCap className="text-indigo-600 w-6 h-6" />
            </div>
            <h2 className="text-2xl text-gray-800 font-semibold">Student Portal</h2>
          </div>

          <p className="text-gray-500 mt-1">Join your exam with a secure access code</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-3">
            {['Exam Code', 'Registration Code'].map((label, i) => (
              <label
                key={label}
                className="flex items-center p-2 bg-gray-200 border rounded-lg cursor-pointer hover:border-indigo-400 transition"
              >
                <input type="radio" name="codeType" className="text-indigo-600" defaultChecked={i === 0} />
                <span className="ml-3 text-gray-700 text-sm">{label}</span>
              </label>
            ))}
          </div>

          <div className="mt-4">
            <div className='grid lg:flex lg:place-items-center'>
              <label className="block text-sm font-medium text-gray-700 mb-1 lg:mb-0">8-Digit Access Code :- </label>
              <input
                type="text"
                maxLength={8}
                value={examCode}
                onChange={(e) => handleChange(e, 'exam', 8)}
                className="px-2 py-1 ml-2 border rounded-lg font-mono text-center text-xl tracking-widest focus:outline-none focus:ring-1 focus:ring-indigo-400"
                placeholder='--------'
              />
            </div>
            <div className='mt-4 grid lg:flex lg:place-items-center'>
              <label className="block text-sm font-medium text-gray-700 mb-1">Organizer Code (5-digit) :- </label>
              <input
                type="text"
                maxLength={5}
                value={orgCode}
                onChange={(e) => handleChange(e, 'org', 5)}
                className="px-2 py-1 ml-2 border rounded-lg font-mono text-center text-xl tracking-widest focus:outline-none focus:ring-1 focus:ring-indigo-400"
                placeholder='-----'
              />
            </div>
          </div>

          <button className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-800 text-white px-3 py-2 rounded-lg font-medium shadow transition">
            Join Exam <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white border rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3">
            <div className="p-1 bg-purple-200 rounded-lg">
              <Building2 className="text-purple-600 w-6 h-6" />
            </div>
            <h2 className="text-2xl text-gray-800 font-semibold">Organizer Portal</h2>
          </div>

          <p className="text-gray-500 mt-1">Conduct secure, proctored exams with confidence</p>

          <Link to='organizer/login' className="mt-3 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-3 py-2 rounded-lg font-medium shadow transition">
            Conduct an Exam <ArrowRight className="w-4 h-4" />
          </Link>

          <div className="space-y-3 text-gray-800 text-sm mt-4">
            {[
              'Live Proctoring & Monitoring',
              'AI-based Face & Voice Detection',
              'Secure Exam Environment',
              'Real-time Analytics & Reports',
              'Secure Browser'
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle className="text-green-500 w-4 h-4" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;