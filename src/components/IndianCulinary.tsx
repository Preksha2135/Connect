import React from 'react';
// import ImageSlider from "./ImageSlider"; 

export function IndianCulinary({ onClose }: { onClose: () => void }) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const cuisines = [
    
    {
      name: "North Indian Cuisine",
      description: "Known for its rich, creamy curries, tandoori dishes, and variety of breads. Heavy use of dairy products and aromatic spices.",
      signature: "Butter Chicken, Naan, Biryani, Rogan Josh, Dal Makhani",
      specialFeatures: "Use of tandoor (clay oven), rich gravies, and extensive use of dairy products like ghee and cream",
      image:"https://media.istockphoto.com/id/2112748465/photo/chicken-chaap-with-lucchi-chuntney-sauce-and-chilli-dip-served-in-thali-platter-isolated-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=pE4He7e6Pox-aOeHQSvY_EEcWpzFYQRzS86cj5up6LE="
    },
    {
      name: "South Indian Cuisine",
      description: "Features rice-based dishes, lentils, and coconut. Known for its light, healthy preparations and vegetarian options.",
      signature: "Dosa, Idli, Sambar, Rasam, Appam",
      specialFeatures: "Fermented batters, coconut-based preparations, and unique blend of spices including curry leaves",
      image:"https://media.istockphoto.com/id/1192232225/photo/south-indian-festival-food-in-banana-leaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=7j3KyO0272_YYF8I60pY0VcNutGI3rVnv1iGgYjCDHI="
    },
    {
      name: "Street Food Culture",
      description: "Vibrant street food scene offering quick, flavorful snacks and chaats. Each region has its unique specialties.",
      signature: "Pani Puri, Vada Pav, Bhel Puri, Samosa, Kathi Rolls",
      specialFeatures: "Quick preparation, complex flavors, and combination of textures and tastes",
      image:"https://media.istockphoto.com/id/1329212743/photo/vada-pav.webp?a=1&b=1&s=612x612&w=0&k=20&c=NoMHls-67EbxQXyJ1WgLgtAbnoYhJnUNKzHpL3EhyDE="
    },
    {
      name: "Bengali Cuisine",
      description: "Subtle flavors with emphasis on fish, rice, and mustard. Known for its sweet dishes and unique cooking techniques.",
      signature: "Fish Curry, Mishti Doi, Rasgulla, Biryani",
      specialFeatures: "Five-spice mixture (Panch Phoron), mustard oil usage, and elaborate cooking methods",
      image:"https://media.istockphoto.com/id/1044082912/photo/indian-rasgulla-or-rosogulla-dessert-sweet-served-in-a-bowl-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=NTZQLrmFNvbwKGdghPfD0h1554GrSw874BBOuEwueaY="
    },
    {
      name: "Gujarati Thali",
      description: "Predominantly vegetarian cuisine with a perfect balance of sweet, salty, and spicy flavors.",
      signature: "Dhokla, Thepla, Khandvi, Undhiyu",
      specialFeatures: "Extensive use of lentils, unique combination of spices, and emphasis on vegetarian proteins",
      image:"https://media.istockphoto.com/id/2126540884/photo/sandwich-dhokla-or-sandwich-khaman-is-an-indian-popular-snack.webp?a=1&b=1&s=612x612&w=0&k=20&c=b8qBu-ItOy0q3r4EC3w-StCsCZp1kA3iTcCa00G-png="

    },
    {
      name: "Royal Mughlai Cuisine",
      description: "Rich, aromatic dishes influenced by Persian cuisine. Known for its elaborate preparation methods and rich ingredients.",
      signature: "Biryani, Kebabs, Korma, Nihari",
      specialFeatures: "Slow cooking, rich spices, dry fruits, and elaborate presentation",
      image:"https://media.istockphoto.com/id/681899320/photo/turkish-baklava-with-coffee.webp?a=1&b=1&s=612x612&w=0&k=20&c=2WB2hmCxs0Gr1ynKrm5OxH90PO2eQlmYubze6TBuTlo="
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={handleBackdropClick}>
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-indigo-600">Indian Culinary Journey</h2>
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
            ><img 
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