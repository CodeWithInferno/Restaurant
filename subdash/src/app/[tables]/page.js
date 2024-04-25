'use client';
import React, { useState } from 'react';
import Items from '@/components/Items';
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import sanityClient from '@sanity/client';

export default function Tables({params}) {
    const [showPopup, setShowPopup] = useState(false);

    return(
        <div className="text-center bg-zinc-700">
            <Header />
            <div className="flex">
                <Sidebar />
                <Items />
            </div>
            {showPopup && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-zinc-600  p-5 rounded shadow-lg relative " style={{width: '700px', height: '600px'}}>
                        <h2>Order</h2>
                        <button onClick={() => setShowPopup(false)} className="absolute top-2 right-2 m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
            <button onClick={() => setShowPopup(true)}>Show Popup</button>
        </div>
    )
}