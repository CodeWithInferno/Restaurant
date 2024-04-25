// page.js
'use client';
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'shhf6zvo', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false // `false` if you want to ensure fresh data
});

const Tables = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "table"]')
      .then((data) => {
        setTables(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="text-center bg-zinc-700" >
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-wrap justify-start p-10 w-full">
          {tables.map((table, index) => (
            <div key={index} className="w-1/4 m-10">
              <button 
                className="w-full border border-gray-200 p-4 m-4 h-40 rounded shadow-lg"
                onClick={() => window.location.href=`/${table.slug.current}`}
              >
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-2">{table.tables}</h2>
                  <p className="text-gray-400">{table.order}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tables;