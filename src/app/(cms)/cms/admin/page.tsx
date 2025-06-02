"use client";
import { URI } from "@/contant";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSendOtp = async () => {
    if (!email) {
      setMessage("Please enter a valid email");
      return;
    }

    try {
      const response = await axios.post(`${URI}adminlogin`, {
        email,
      });

      if (response.status !== 200) {
        alert(response.data.message);
        return;
      }

      alert(response.data.message);
      setShowOtpForm(true);
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Something Went Wrong");
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const response = await axios.post(`${URI}verifyotp`, {
        email: email,
        otp: otp,
      });

      if (response.status != 200) {
        alert(response.data.message);
        return;
      }

      // Use absolute path with leading slash
      router.push("/cmscompanyadmin");
    } catch (error) {
      console.error(error);
      alert("Something Went Wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm transform transition-all hover:scale-105">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Admin Login
        </h2>

        {!showOtpForm ? (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="admin@example.com"
                required
              />
            </div>
            <button
              onClick={handleSendOtp}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Send OTP
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700"
              >
                Enter OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="mt-1 p-3 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="Enter 6-digit OTP"
                required
              />
            </div>
            <button
              onClick={handleOtpSubmit}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Verify OTP
            </button>
          </div>
        )}

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("successful") ? "text-green-500" : "text-red-500"
            } font-medium`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}