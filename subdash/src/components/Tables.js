'use client';









// Tables.js
import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'shhf6zvo', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
});

const Tables = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "item"]')
      .then((data) => {
        console.log(data); // Add this line
        setItems(data);
        console.log(items.length); // Add this line
      })
      .catch(console.error);
  }, []);
  return (
    <div className="flex flex-wrap justify-start p-10 w-full">
      {items.map((item, index) => (
        <div key={index} className="w-1/4 m-10">
          <button className="w-full border border-gray-200 p-4 m-4 h-40 rounded shadow-lg">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tables;