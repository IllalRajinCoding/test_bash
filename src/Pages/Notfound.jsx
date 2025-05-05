import React from "react";
import { NOTFOUND } from "../constants";
import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 overflow-hidden relative">
            {/* Background question marks */}
            <div className="absolute inset-0 overflow-hidden">
                <span className="text-9xl font-bold text-blue-400/20 absolute right-[10%] top-[20%] rotate-45">?</span>
                <span className="text-9xl font-bold text-blue-400/20 absolute left-[15%] top-[30%] -rotate-12">?</span>
                <span className="text-9xl font-bold text-blue-400/20 absolute right-[25%] bottom-[20%] rotate-90">?</span>
                <span className="text-9xl font-bold text-blue-400/20 absolute left-[20%] bottom-[30%] rotate-12">?</span>
            </div>

            <div className="max-w-md text-center space-y-6 relative z-10">
                <img
                    src={NOTFOUND.img}
                    alt="Halaman Tidak Ditemukan"
                    className="w-full max-w-xs mx-auto"
                />

                <div className="space-y-3">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Waduh! Kamu Mencari Halaman Yang Tidak Ada atau Anda Seorang Hacker
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Sepertinya Anda tersesat. Jangan khawatir, itu terjadi pada yang terbaik dari kita.
                    </p>
                </div>

                {/* Main glowing question mark */}
                <div className="relative">
                    <span className="text-9xl font-bold text-blue-600 absolute -top-24 -right-10 md:-right-20 rotate-12 
                                    [text-shadow:_0_0_10px_#3b82f6,_0_0_20px_#3b82f6] animate-pulse">
                        ?
                    </span>
                </div>

                <Link
                    to="/"
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 relative z-20"
                >
                    Kembali ke Beranda
                </Link>
            </div>
        </div>
    );
};

export default Notfound;