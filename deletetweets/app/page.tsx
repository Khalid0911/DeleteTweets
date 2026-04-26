'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    alert('تسجيل الدخول عبر Twitter قريباً!');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center px-4">
      <div className="bg-slate-800 p-12 rounded-lg shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-white mb-2 text-center">
          تسجيل الدخول
        </h1>
        <p className="text-slate-400 text-center mb-8">
          سجل الدخول باستخدام حسابك على X
        </p>

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-black hover:bg-slate-900 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-50"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 1200 1227"
            fill="white"
          >
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.163 519.284ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.828Z" />
          </svg>
          تسجيل الدخول عبر X
        </button>

        <p className="text-slate-400 text-xs text-center mt-8">
          لن نشارك بيانات حسابك مع أحد
        </p>

        <div className="mt-8 pt-8 border-t border-slate-700">
          <Link
            href="/"
            className="text-slate-400 hover:text-blue-400 text-center block transition"
          >
            ← العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}