import React from 'react';

export function IndianFestivals({ onClose }: { onClose: () => void }) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const festivals = [
    {
      name: "Diwali",
      description: "The Festival of Lights, celebrating the victory of light over darkness. Homes are decorated with oil lamps (diyas), rangoli patterns, and people exchange gifts and sweets.",
      time: "October/November",
      significance: "Celebrates Lord Rama's return to Ayodhya and the victory of good over evil"
      ,image:"https://media.istockphoto.com/id/1705946824/photo/3d-rendering-for-diwali-festival-diwali-deepavali-or-dipavali-the-festival-of-lights-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=Fqp4NX8GaS6ISWobnZ-UiQ2c3eqRyYbo2o5KTrO6QJ8="},
    {
      name: "Holi",
      description: "The Festival of Colors, welcoming spring with vibrant colors, music, and dance. People play with colored powder and water, celebrating the eternal love of Radha and Krishna.",
      time: "February/March",
      significance: "Celebrates the arrival of spring and the triumph of devotee Prahlad over demoness Holika"
      ,image:"https://media.istockphoto.com/id/497548358/photo/group-of-happy-indian-children-playing-holi-desert-village-india.jpg?s=612x612&w=0&k=20&c=I10C2gbUPl99D9pvyu9m-vF1xwKjXK-zUbllxWTpJJo="},
    {
      name: "Durga Puja",
      description: "A grand celebration honoring Goddess Durga, featuring elaborate pandals (temporary temples), cultural performances, and traditional rituals.",
      time: "September/October",
      significance: "Celebrates the victory of Goddess Durga over the demon Mahishasura"
      ,image:"https://media.istockphoto.com/id/185897873/photo/goddess-during-durga-puja-celebrations.jpg?s=612x612&w=0&k=20&c=IaM7RHNx5XceUhYqkSuy5KzQIVxKgooGSD3bAG1WxrY="},
    {
      name: "Ganesh Chaturthi",
      description: "A festival dedicated to Lord Ganesha, with elaborate idol installations, prayers, and cultural events. Concludes with immersion of idols in water bodies.",
      time: "August/September",
      significance: "Celebrates the birth of Lord Ganesha, the remover of obstacles"
      ,image:"https://media.istockphoto.com/id/1338409119/photo/a-religious-picture.jpg?s=612x612&w=0&k=20&c=Y4S27k4kg23c9KYDDP2U5rZXFA4LBD2bZt9crHOcNNo="},
    {
      name: "Navaratri",
      description: "Nine nights of dance and devotion, featuring traditional Garba and Dandiya Raas dances. Different regions celebrate with unique customs and rituals.",
      time: "September/October",
      significance: "Honors the divine feminine power through nine forms of Goddess Durga"
      ,image:"https://media.istockphoto.com/id/2190020135/photo/a-beautiful-idol-of-maa-durga-being-worshipped-at-a-pandal-during-navratri.jpg?s=612x612&w=0&k=20&c=CVZ_BZ15YVuIatcJAsAhaCFnjbzWVlU84vuX8Mik4BI="},
    {
      name: "Onam",
      description: "Kerala's harvest festival featuring elaborate flower carpets (pookkalam), boat races, traditional feast (sadya), and cultural performances.",
      time: "August/September",
      significance: "Commemorates King Mahabali's annual visit and Kerala's golden age"
      ,image:"https://media.istockphoto.com/id/1721865407/photo/onam-flower-decoration.jpg?s=612x612&w=0&k=20&c=mVpK5hw4QpkMuRy5R4ovVg_Yi26iOKbBjgMB_mx6v3g=" }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={handleBackdropClick}>
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-indigo-600">Indian Festivals</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-8">
          {festivals.map((festival) => (
            <div 
              key={festival.name}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <img 
      src={festival.image} 
      alt={festival.name} 
      className="w-full h-64 object-cover rounded-lg"
    />
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {festival.name}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 mb-2">{festival.description}</p>
                  <p className="text-gray-500"><strong>Time:</strong> {festival.time}</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <p className="text-gray-700">
                    <strong>Significance:</strong><br />
                    {festival.significance}
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