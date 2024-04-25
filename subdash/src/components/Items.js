'use client';
// // Tables.js
// import React from 'react';

// const Tables = () => (
//   <div className="flex flex-wrap justify-start p-10">
//     <div className="w-1/4">
//       <button className="flex-grow border border-gray-200 p-4 m-4 h-40 rounded shadow-lg">
//         <div className="text-center">
//           <h2 className="text-xl font-bold mb-2">Item 1</h2>
//           <p className="text-gray-400">Item 1 description</p>
//         </div>
//       </button>
//     </div>
//     <div className="w-1/4">
//       <button className="flex-grow border border-gray-200 p-4 m-4 h-40 rounded shadow-lg">
//         <div className="text-center">
//           <h2 className="text-xl font-bold mb-2">Item 2</h2>
//           <p className="text-gray-400">Item 2 description</p>
//         </div>
//       </button>
//     </div>
//     <div className="w-1/4">
//       <button className="flex-grow border border-gray-200 p-4 m-4 h-40 rounded shadow-lg">
//         <div className="text-center">
//           <h2 className="text-xl font-bold mb-2">Item 3</h2>
//           <p className="text-gray-400">Item 3 description</p>
//         </div>
//       </button>
//     </div>
//     <div className="w-1/4">
//       <button className="flex-grow border border-gray-200 p-4 m-4 h-40 rounded shadow-lg">
//         <div className="text-center">
//           <h2 className="text-xl font-bold mb-2">Item 4</h2>
//           <p className="text-gray-400">Item 4 description</p>
//         </div>
//       </button>
//     </div>
//     <div className="w-1/4">
//       <button className="flex-grow border border-gray-200 p-4 m-4 h-40 rounded shadow-lg">
//         <div className="text-center">
//           <h2 className="text-xl font-bold mb-2">Item 4</h2>
//           <p className="text-gray-400">Item 4 description</p>
//         </div>
//       </button>
//     </div>
//     <div className="w-1/4">
//       <button className="flex-grow border border-gray-200 p-4 m-4 h-40 rounded shadow-lg">
//         <div className="text-center">
//           <h2 className="text-xl font-bold mb-2">Item 4</h2>
//           <p className="text-gray-400">Item 4 description</p>
//         </div>
//       </button>
//     </div>
//   </div>
// );

// export default Tables;








// Tables.js
import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'shhf6zvo', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false // `false` if you want to ensure fresh data
});

const Items = () => {
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
              <p className="text-zinc-200 mt-2">{item.price}</p>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Items;