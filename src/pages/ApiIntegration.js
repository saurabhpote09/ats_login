import React, { useEffect, useState } from 'react';

const ApiIntegration = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchapi() {
      try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await resp.json();
        setData(data.slice(0, 10)); // Limiting the data to 10 items for display
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchapi();
  }, []);

  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="max-w-sm rounded overflow-hidden shadow-lg mb-4">
          <img className="w-full" src={item.url} alt={item.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base">
              {item.thumbnailUrl}
            </p>
          </div>
        </div>
      ))}

<div class="flex items-center">
  <input type="checkbox" id="toggle" class="hidden peer" />
  <label for="toggle" class="cursor-pointer">
    <div class="w-14 h-8 bg-gray-300 peer-checked:bg-blue-500 rounded-full p-1 flex items-center transition duration-300 ease-in-out">
      <div class="w-6 h-6 bg-white rounded-full shadow-md transform peer-checked:translate-x-6 transition duration-300 ease-in-out"></div>
    </div>
  </label>
</div>

    </>
  );
};

export default ApiIntegration;
