import React from 'react';
import { useCultureStore } from '../store';

export function CultureSelector() {
  const { selectedCulture, setSelectedCulture } = useCultureStore();

  // const handleLocationAccess = () => {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         // In a real app, you would use a geocoding service to get the location name
  //         console.log(position.coords);
  //       },
  //       (error) => {
  //         console.error('Error getting location:', error);
  //       }
  //     );
  //   }
  // };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Choose Your Connect</h2>
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSelectedCulture('india')}
          className={`px-6 py-3 rounded-lg transition-colors ${
            selectedCulture === 'india'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          India
        </button>
        <button
          onClick={() => setSelectedCulture('japan')}
          className={`px-6 py-3 rounded-lg transition-colors ${
            selectedCulture === 'japan'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          Japan
        </button>
      </div>
      {/* <button
        onClick={handleLocationAccess}
        className="text-indigo-600 hover:text-indigo-700 text-sm"
      >
        Use my location for personalized tips
      </button> */}
    </div>
  );
}