import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, KeyRound, MailCheck, UserPlus, ArrowLeft } from "lucide-react";
import PreLoader from "../../components/common/PreLoader";

function OrganizerLogin() {
    const [secretCode, setSecretCode] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            alert(`Login with Code: ${secretCode}`);
        }, 7500);
    };

    return (
        <div className="flex justify-center p-4">
            {isLoading && <PreLoader />}
            <form
                onSubmit={handleLogin}
                className="bg-white p-10 rounded-br-3xl rounded-tl-3xl w-full max-w-md space-y-5 shadow-2xl border border-slate-400"
            >
                <button onClick={()=>navigate("/")} className="text-slate-700 hover:text-blue-600 font-semibold flex items-center">
                    <ArrowLeft className="mr-1" size={16}/>
                    Back
                </button>
                <h2 className="text-2xl font-bold text-center text-slate-900 underline">Organizer Login</h2>

                <div className="space-y-1">
                    <label htmlFor="secretCode" className="text-sm font-medium text-gray-700">
                        7-digit Secret Code
                    </label>
                    <div className="flex items-center border rounded-lg px-3 py-2">
                        <KeyRound className="text-slate-700 mr-2" size={20}/>
                        <input
                            id="secretCode"
                            type="text"
                            maxLength={7}
                            pattern="\d{7}"
                            required
                            placeholder="Enter 7-digit Secret Code"
                            value={secretCode}
                            onChange={(e) => setSecretCode(e.target.value)}
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <div className="flex items-center border rounded-lg px-3 py-2">
                        <Lock className="text-slate-700 mr-2" size={20}/>
                        <input
                            id="password"
                            type="password"
                            required
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full outline-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 rounded-lg transition-colors"
                    disabled={isLoading}
                >
                    {isLoading ? "Logging in..." : "Login"}
                </button>

                <div className="flex justify-between text-sm mt-2">
                    <button
                        type="button"
                        onClick={() => navigate("/organizer/forgot-id")}
                        className="text-blue-700 hover:underline cursor-pointer"
                    >
                        Forgot Secret Code?
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate("/organizer/forgot-password")}
                        className="text-blue-700 hover:underline cursor-pointer"
                    >
                        Forgot Password?
                    </button>
                </div>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <button
                            type="button"
                            onClick={() => navigate("/organizer/register")}
                            className="text-slate-600 font-medium hover:text-blue-600 hover:underline flex items-center justify-center mx-auto"
                        >
                            <UserPlus className="mr-1" size={16} />
                            Register as Organizer
                        </button>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default OrganizerLogin;