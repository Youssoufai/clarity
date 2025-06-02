"use client";

import { UploadCloud, Mic } from "lucide-react";

export default function UploadOrRecord() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Upload or Record</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Upload box */}
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center text-center bg-white">
                    <UploadCloud className="w-10 h-10 text-gray-500 mb-3" />

                    <h3 className="text-lg font-semibold mb-1">Drag & Drop</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        Drop your audio files here or click to browse
                    </p>

                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg font-semibold text-sm transition">
                        Browse Files
                    </button>

                    <p className="mt-4 text-xs text-gray-500">
                        Supports MP3, WAV, M4A (up to 30MB)
                    </p>
                </div>

                {/* Record box */}
                <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md transition">
                    <div className="bg-white p-4 rounded-full shadow mb-3">
                        <Mic className="w-6 h-6 text-yellow-500" />
                    </div>

                    <h3 className="text-lg font-semibold mb-1">Record Now</h3>
                    <p className="text-sm text-gray-600">
                        Tap to start recording your voice note
                    </p>
                </div>
            </div>
        </section>
    );
}
