import React from 'react';

export function JapaneseFestivals({ onClose }: { onClose: () => void }) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const festivals = [
    {
      name: "Hanami",
      description: "Cherry blossom viewing festival celebrating the ephemeral beauty of sakura. Parks and streets are filled with people enjoying picnics under blooming trees.",
      time: "March/April",
      significance: "Symbolizes the transient nature of life and beauty in Japanese culture, deeply rooted in Buddhist philosophy"
      ,image:"https://media.istockphoto.com/id/902966276/photo/kyoto-japan-in-spring.jpg?s=612x612&w=0&k=20&c=BKgo2TEXikd7oaZdFJ2o9VrKmG5NhNswI5YBXvhOwWA="},
    {
      name: "Tanabata",
      description: "The Star Festival based on the legend of two star-crossed lovers. People write wishes on colorful strips of paper (tanzaku) and hang them on bamboo branches.",
      time: "July/August",
      significance: "Celebrates the annual meeting of the deities Orihime and Hikoboshi, represented by the stars Vega and Altair"
      ,image:"https://media.istockphoto.com/id/673604846/photo/tanabata-festival.jpg?s=612x612&w=0&k=20&c=pEV9c2ube8hTTnWKYt5nSMdwDpd6ZmJniv1bGgBv4xA="},
    {
      name: "Obon",
      description: "Buddhist festival honoring ancestral spirits. Features traditional dances (bon-odori), lantern displays, and family gatherings.",
      time: "August",
      significance: "Represents the reunion of families with their ancestors' spirits and maintaining connections with the past"
      ,image:"https://media.istockphoto.com/id/1188457047/photo/the-floating-lamp-is-a-type-of-lamp-that-floats-on-the-surface-of-the-water-it-is-also-known.webp?a=1&b=1&s=612x612&w=0&k=20&c=gerzXMpAcPWam41ymoR-TE4Osyt91wXbmUHuJc-24dg="},
    {
      name: "Gion Matsuri",
      description: "One of Japan's most famous festivals, featuring massive floats (yamaboko), traditional music, and processions through Kyoto's streets.",
      time: "July",
      significance: "Originally a purification ritual to appease spirits causing epidemics, now celebrates Kyoto's cultural heritage"
      ,image:"https://media.istockphoto.com/id/845250216/photo/gion-matsuri-no-yoru.jpg?s=612x612&w=0&k=20&c=ppntGLh_wxSeW9XDtTuRFLRbKMQDFkF6aFvUCJ8ShgA=" },
    {
      name: "Setsubun",
      description: "Spring festival marking the beginning of spring. People throw roasted soybeans while chanting 'Oni wa soto, fuku wa uchi' (demons out, fortune in).",
      time: "February 3rd",
      significance: "Ritual to cleanse away evil spirits and welcome good fortune for the coming year"
      ,image:"https://media.istockphoto.com/id/1204717502/photo/japanese-setsubun-event-soybeans-and-masks-of-oni.jpg?s=612x612&w=0&k=20&c=QUTj5iiFcqZg7sYJzC_sAMXx8GZq5qH_0muAjcPoqjs="},
    {
      name: "Shichi-Go-San",
      description: "Festival celebrating children's growth and well-being. Children aged 3, 5, and 7 visit shrines in traditional attire.",
      time: "November 15th",
      significance: "Marks important age milestones in a child's development and prays for their continued health and growth"
      ,image:"https://media.istockphoto.com/id/2164562594/photo/girl-wearing-kimono.jpg?s=612x612&w=0&k=20&c=HDx1XMNH583uu-l1P0Xfjrzgm4qWDAAKjF8exvmC5Ic="}
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={handleBackdropClick}>
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-indigo-600">Japanese Festivals</h2>
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
            ><img 
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