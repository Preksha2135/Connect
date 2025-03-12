import React from 'react';

export function IndianArts({ onClose }: { onClose: () => void }) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const arts = [
    {
      name: "Bharatanatyam",
      description: "One of India's oldest classical dance forms originating from Tamil Nadu. Known for its grace, purity, tenderness, and sculpturesque poses.",
      elements: "Incorporates Nritta (rhythmic dance movements), Natya (dramatic elements), and Nritya (combination of rhythm with expression)",
      significance: "Originally performed in temples as a devotional dance form, it represents Indian mythology and spiritual themes",
      image:"https://media.istockphoto.com/id/1343675661/photo/woman-dancer-hand-in-black-background-demonstrating-bharatanatyam-indian-classical-dance-mudra.jpg?s=612x612&w=0&k=20&c=8rGDa-ZP596b8QcEHYk0Tnf7jguhY4aMZO-dcF-8atI="},
      {name: "Kathak",
      description: "A major classical dance form from North India, characterized by fluid movements, intricate footwork, and rapid spins (chakras).",
      elements: "Features storytelling through gestures, facial expressions, and rhythmic foot movements with ankle bells",
      significance: "Evolved from ancient storytelling tradition where wandering bards would narrate epic tales through dance"
      ,image:"https://plus.unsplash.com/premium_photo-1720798652998-70676e9f88a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2F0aGFrfGVufDB8fDB8fHww"},
    {
      name: "Madhubani Art",
      description: "Traditional art form from Bihar, featuring colorful paintings with distinctive geometric patterns and natural dye usage.",
      elements: "Uses natural dyes and pigments, double line drawing, and geometric patterns",
      significance: "Originally created by women on household and village walls during ceremonies and festivals"
      ,image:"https://media.istockphoto.com/id/2185993177/photo/madhubani-painting-handicrafts-at-craft-bazar-in-mithila-haat-bihar-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=klciOCAPNXqrxUnYD7mmCzdWsedMYN0vgE45ReHRQuE="},
    {
      name: "Warli Art",
      description: "Tribal art form from Maharashtra using basic geometric shapes to depict daily life and social events.",
      elements: "Simple white drawings on earthen colored surface, using circles, triangles, and squares",
      significance: "Represents the harmony between nature and humans in tribal life"
      ,image:"https://media.istockphoto.com/id/535046047/photo/warli-wall-painting.webp?a=1&b=1&s=612x612&w=0&k=20&c=FPytcRJ0QkDEezdZ6r7VUdmQhTkWS05xbXv2lE2KjmI="},
    {
      name: "Carnatic Music",
      description: "Classical music tradition from South India, emphasizing vocals and intricate rhythmic patterns.",
      elements: "Based on ragas (melodic framework) and talas (rhythmic framework), with emphasis on vocal music",
      significance: "Deeply connected to devotional and spiritual practices in South Indian culture"
      ,image:"https://media.istockphoto.com/id/1704243868/photo/two-women-singers-singing-a-classical-song-weaving-an-enchanting-musical-tale-accompanied-by.jpg?s=612x612&w=0&k=20&c=1M362g4gXSfp-GMiGkVYDxLSBGsrb0CnTbnTvNcuPGQ="},
    {
      name: "Kathakali",
      description: "Classical dance-drama from Kerala known for its elaborate makeup, costumes, and hand gestures.",
      elements: "Combines dance, music, acting, and costume art with detailed facial expressions and hand gestures",
      significance: "Traditionally performs stories from Indian epics like Ramayana and Mahabharata"
,image:"https://images.unsplash.com/photo-1691075221845-687ff5614e66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2F0aGFrYWxpfGVufDB8fDB8fHww" } ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={handleBackdropClick}>
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-indigo-600">Indian Traditional Arts</h2>
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