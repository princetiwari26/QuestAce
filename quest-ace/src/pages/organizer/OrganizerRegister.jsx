import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, UserPlus, Building2, Mail, Phone, MapPin, MailCheck } from "lucide-react";
import PreLoader from "../../components/common/PreLoader";

function OrganizerRegister() {
    const [form, setForm] = useState({
        name: "",
        type: "",
        orgEmail: "",
        agentEmail: "",
        phone: "",
        address: "",
        password: "",
        confirmPassword: ""
    });
    const [secretCode, setSecretCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const navigate = useNavigate();

    const generateSecretCode = () =>
        Math.floor(1000000 + Math.random() * 9000000).toString();

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert("Please accept the terms and conditions");
            return;
        }
        if (form.password !== form.confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        
        setIsLoading(true);
        
        setTimeout(() => {
            const code = generateSecretCode();
            setSecretCode(code);
            setIsLoading(false);
            setShowSuccess(true);
        }, 2000);
    };

    return (
        <div className="flex justify-center p-4">
            {isLoading && <PreLoader />}
            
            {showSuccess ? (
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl space-y-6 text-center">
                    <div className="text-slate-500 text-5xl mb-4">✓</div>
                    <h2 className="text-2xl font-bold text-slate-700">Registration Successful!</h2>
                    <p className="text-gray-600 mb-6">
                        Your organizer account has been created successfully.
                    </p>
                    
                    <div className="bg-slate-100 p-4 rounded-lg border border-slate-300">
                        <p className="font-medium">Your 7-digit Secret Code:</p>
                        <div className="font-mono text-2xl text-slate-700 my-2">{secretCode}</div>
                        <p className="text-sm text-gray-600">
                            This code has been sent to your registered email and phone number.
                            Use it to login to your organizer account.
                        </p>
                    </div>
                    
                    <button
                        onClick={() => navigate("/organizer/login")}
                        className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-2 rounded-lg mt-6"
                    >
                        Proceed to Login
                    </button>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-10 rounded-br-3xl rounded-tl-3xl shadow-xl w-full max-w-2xl space-y-6 border border-slate-600"
                >
                    <h2 className="text-2xl font-bold text-center text-slate-900 underline">Organizer Registration</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                Organization Name
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2">
                                <UserPlus className="text-slate-600 mr-2" size={20}/>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    name="name"
                                    placeholder="Organization Name"
                                    onChange={handleChange}
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="type" className="text-sm font-medium text-gray-700">
                                Type of Organization
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2">
                                <Building2 className="text-slate-600 mr-2" size={20} />
                                <input
                                    id="type"
                                    type="text"
                                    required
                                    name="type"
                                    placeholder="Type of Organization"
                                    onChange={handleChange}
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="orgEmail" className="text-sm font-medium text-gray-700">
                                Organization Email
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2">
                                <Mail className="text-slate-600 mr-2" size={20} />
                                <input
                                    id="orgEmail"
                                    type="email"
                                    required
                                    name="orgEmail"
                                    placeholder="Organization Email"
                                    onChange={handleChange}
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="agentEmail" className="text-sm font-medium text-gray-700">
                                Agent Email
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2">
                                <MailCheck className="text-slate-600 mr-2" size={20} />
                                <input
                                    id="agentEmail"
                                    type="email"
                                    required
                                    name="agentEmail"
                                    placeholder="Agent Email"
                                    onChange={handleChange}
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2">
                                <Phone className="text-slate-600 mr-2" size={20} />
                                <input
                                    id="phone"
                                    type="tel"
                                    required
                                    name="phone"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="address" className="text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2">
                                <MapPin className="text-slate-600 mr-2" size={20} />
                                <input
                                    id="address"
                                    type="text"
                                    required
                                    name="address"
                                    placeholder="Address"
                                    onChange={handleChange}
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                Create Password
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2">
                                <Lock className="text-slate-600 mr-2" size={20} />
                                <input
                                    id="password"
                                    type="password"
                                    required
                                    name="password"
                                    placeholder="Create Password"
                                    onChange={handleChange}
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <div className="flex items-center border rounded-lg px-3 py-2">
                                <Lock className="text-slate-600 mr-2" size={20} />
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    required
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    className="w-full outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input
                            id="terms"
                            type="checkbox"
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                            className="mr-2"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to the{" "}
                            <button
                                type="button"
                                onClick={() => alert("Show terms and conditions")}
                                className="text-blue-600 hover:underline"
                            >
                                Terms & Conditions
                            </button>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 rounded-lg transition-colors"
                        disabled={isLoading}
                    >
                        {isLoading ? "Registering..." : "Register"}
                    </button>

                    <div className="text-center mt-2">
                        <p className="text-sm text-gray-600">
                            Already have an account?{" "}
                            <button
                                type="button"
                                onClick={() => navigate("/organizer/login")}
                                className="text-blue-600 font-medium hover:underline"
                            >
                                Login here
                            </button>
                        </p>
                    </div>
                </form>
            )}
        </div>
    );
}

export default OrganizerRegister;