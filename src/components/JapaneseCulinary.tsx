import React from 'react';

export function JapaneseCulinary({ onClose }: { onClose: () => void }) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const cuisines = [
    {
      name: "Sushi & Sashimi",
      description: "Fresh raw fish and seafood, often served with vinegared rice. Represents the Japanese appreciation for fresh ingredients and minimal preparation.",
      signature: "Nigiri sushi, Maki rolls, Tuna sashimi, Salmon sashimi",
      specialFeatures: "Emphasis on freshness, knife skills, and presentation. Each piece is considered a work of art.",
image:"https://media.istockphoto.com/id/109836388/photo/sushi.webp?a=1&b=1&s=612x612&w=0&k=20&c=U2rQQLh0cFsdTDvbKP-inwj5y4weu8FFUxVM8lZ6xkQ="    },
    {
      name: "Ramen Culture",
      description: "Popular noodle soup dish with regional variations across Japan. Each region has its unique style and specialty.",
      signature: "Tonkotsu ramen, Miso ramen, Shoyu ramen, Shio ramen",
      specialFeatures: "Complex broths cooked for hours, handmade noodles, and various toppings specific to each style",
      image:"https://plus.unsplash.com/premium_photo-1694708455263-e58c7aacbb19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFtZW58ZW58MHx8MHx8fDA%3"
    },
    {
      name: "Kaiseki Ryori",
      description: "Traditional multi-course haute cuisine, emphasizing seasonal ingredients and beautiful presentation.",
      signature: "Seasonal appetizers, clear soup, sashimi, grilled dishes, rice, and pickles",
      specialFeatures: "Meticulous attention to detail, seasonal ingredients, and artistic presentation",
      image:"https://media.istockphoto.com/id/844943138/photo/kaiseki-cuisine.webp?a=1&b=1&s=612x612&w=0&k=20&c=bT5okd1n4PKgDcU-b_qBJg52muchE6lbzLI2KEFRBuY="
    },{
      name: "Street Food (Yatai)",
      description: "Popular street food culture featuring quick, delicious snacks and light meals.",
      signature: "Takoyaki, Yakitori, Okonomiyaki, Taiyaki",
      specialFeatures: "Quick preparation, affordable prices, and casual dining atmosphere",
      image:"https://media.istockphoto.com/id/1353353146/photo/tricolor-dumplings-placed-on-a-white-background-an-image-of-japanese-spring.webp?a=1&b=1&s=612x612&w=0&k=20&c=l3LxyDc3QpOz4AsBOWr2Ud7mJNPErTVfJLSwoSodM7U="
    },
    {
      name: "Washoku",
      description: "Traditional dietary cultures of the Japanese, recognized by UNESCO as an Intangible Cultural Heritage.",
      signature: "Miso soup, steamed rice, pickled vegetables, grilled fish",
      specialFeatures: "Based on the principle of 'one soup, three sides' (ichiju-sansai) plus rice",
image:"https://media.istockphoto.com/id/1266579630/photo/japanese-fermented-food.webp?a=1&b=1&s=612x612&w=0&k=20&c=sGlr3PVNG0I5BBq-8zye_JvCIFc21BHkotZ7ksoz-dg="    },
    {
      name: "Izakaya Dining",
      description: "Japanese pub culture featuring small plates meant to be shared while drinking.",
      signature: "Edamame, Karaage, Yakitori, Tempura",
      specialFeatures: "Casual atmosphere, variety of small dishes, and emphasis on sharing",
      image:"https://media.istockphoto.com/id/1153738783/photo/group-of-friends-ordering-food-in-japanese-izakaya.webp?a=1&b=1&s=612x612&w=0&k=20&c=ltLQOXucGXzYfdqIA9MnGTaNEU1bWAzbgmMIvktCpAc="
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={handleBackdropClick}>
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-indigo-600">Japanese Culinary Journey</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-8">
          {cuisines.map((cuisine) => (
            <div 
              key={cuisine.name}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <img 
      src={cuisine.image} 
      alt={cuisine.name} 
      className="w-full h-64 object-cover rounded-lg"
    />
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {cuisine.name}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 mb-2">{cuisine.description}</p>
                  <p className="text-gray-500"><strong>Signature Dishes:</strong> {cuisine.signature}</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Special Features:</strong><br />
                    {cuisine.specialFeatures}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 