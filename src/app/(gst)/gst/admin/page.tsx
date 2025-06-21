"use client";
import { URI } from "@/contant";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [message, setMessage] = useState("");
  const [timer, setTimer] = useState(0);
  const [showResend, setShowResend] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (timer > 0) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            setShowResend(true); // Show resend button when timer hits zero
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timer === 0 && showOtpForm) {
      setShowResend(true); // Ensure resend button appears when timer stops
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timer, showOtpForm]);

  const handleSendOtp = async () => {
    if (!email) {
      setMessage("Please enter a valid email");
      return;
    }

    try {
      const response = await axios.post(`${URI}adminlogin`, { email });

      if (response.status === 200) {
        alert(response.data.message);
        setShowOtpForm(true);
        setTimer(120); // Start 2-minute countdown
        setShowResend(false); // Hide resend button initially
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Something went wrong");
    }
  };

  const handleOtpSubmit = async () => {
    try {
      const response = await axios.post(`${URI}verifyotp`, {
        email,
        otp,
      });

      if (response.status === 200) {
        router.push("/cmscompanyadmin");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Something went wrong");
    }
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
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
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
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

            {/* Timer or Resend UI */}
            <div className="text-center text-sm text-gray-600 mt-2 min-h-[24px]">
              {showOtpForm && (
                timer > 0 ? (
                  <>⏳ OTP expires in <strong>{formatTime(timer)}</strong></>
                ) : showResend ? (
                  <button
                    onClick={handleSendOtp}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    🔄 Resend OTP
                  </button>
                ) : (
                  <span>⌛ OTP expired. Please wait...</span>
                )
              )}
            </div>
          </div>
        )}

        {message && (
          <p
            className={`mt-4 text-center text-sm ${message.includes("successful") ? "text-green-500" : "text-red-500"
              } font-medium`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}