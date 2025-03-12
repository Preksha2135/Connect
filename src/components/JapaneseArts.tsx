import React from 'react';

export function JapaneseArts({ onClose }: { onClose: () => void }) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const arts = [
    {
      name: "Ikebana",
      description: "The art of Japanese flower arrangement, emphasizing form, line, and space. Creates harmony between nature and human intervention.",
      elements: "Uses flowers, branches, leaves, and vessels following specific principles of design and symbolism",
      significance: "Reflects Buddhist principles of harmony with nature and mindfulness in artistic practice"
      ,image:"https://media.istockphoto.com/id/172280536/photo/flower-arrangement.jpg?s=612x612&w=0&k=20&c=JBUgC4R5Rgbkl2SAmdx6tLQCfalsbD_6BKydlqQskNg="},
    {
      name: "Tea Ceremony (Chanoyu)",
      description: "Traditional ritual of preparing and serving matcha green tea, embodying principles of harmony, respect, purity, and tranquility.",
      elements: "Involves specific utensils, movements, and etiquette in a specially designed tea room",
      significance: "Represents the essence of Japanese hospitality and mindfulness in everyday actions"
      ,image:"https://media.istockphoto.com/id/578833134/photo/let-me-pour-you-tome-tea.jpg?s=612x612&w=0&k=20&c=aMdr6pu6mpkSFXxPoHXNMW-g2Xxg6D3QwysU3xfDs_Q="},
    {
      name: "Calligraphy (Shodo)",
      description: "The art of writing Japanese characters beautifully, combining technical skill with artistic expression.",
      elements: "Uses brush, ink, and paper with specific techniques for different writing styles",
      significance: "Considered a form of spiritual practice, reflecting the character and spirit of the calligrapher"
      ,image:"https://media.istockphoto.com/id/117149439/photo/japanese-traditions.jpg?s=612x612&w=0&k=20&c=NMA82uDDE7EBSeAW0x2_Y_AYNh32xigIiKbSDOnpJSQ="},
    {
      name: "Kabuki",
      description: "Traditional Japanese theater known for its stylized drama, elaborate costumes, and unique makeup.",
      elements: "Combines music, dance, and acting with distinctive makeup (kumadori) and costumes",
      significance: "Preserves classical Japanese storytelling traditions and theatrical techniques"
      ,image:"https://media.istockphoto.com/id/2161718260/photo/portrait-of-gorgeous-korean-woman-in-kimono-holding-umbrella-and-celebrating-theme-party-on.jpg?s=612x612&w=0&k=20&c=HBp7dG-BItXYTPVsfBsILLF-hlcQjOr1G3WyVaKRY74="},
    {
      name: "Origami",
      description: "The art of paper folding, creating complex designs from a single sheet of paper without cuts or glue.",
      elements: "Uses precise folding techniques to create various forms, from simple to highly complex",
      significance: "Teaches patience, precision, and the beauty of simplicity in Japanese culture"
      ,image:"https://media.istockphoto.com/id/1994400314/photo/leadership-and-development.jpg?s=612x612&w=0&k=20&c=Gh1rCZeKqT5ywqb-xQb2fvn_l3Pkw1SQJF1ASyxWnGg="},
    {
      name: "Noh Theater",
      description: "Classical Japanese musical drama, characterized by masked performers, subtle movements, and ancient stories.",
      elements: "Features masks, elaborate costumes, and highly stylized movements with traditional music",
      significance: "One of the oldest theater traditions in the world, embodying Japanese aesthetic principles"
      ,image:"https://media.istockphoto.com/id/597251814/photo/closed-up-the-japanese-masks.jpg?s=612x612&w=0&k=20&c=7IqxTbyu9ZGTAMEs_1oBtOdXmqC49_mpQUulM0O81aM="}
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={handleBackdropClick}>
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-indigo-600">Japanese Traditional Arts</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-8">
          {arts.map((art) => (
            <div 
              key={art.name}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <img 
      src={art.image} 
      alt={art.name} 
      className="w-full h-64 object-cover rounded-lg"
    />
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {art.name}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 mb-2">{art.description}</p>
                  <p className="text-gray-500"><strong>Elements:</strong> {art.elements}</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Cultural Significance:</strong><br />
                    {art.significance}
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