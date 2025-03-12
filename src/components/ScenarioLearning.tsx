import React, { useState } from 'react';
import { useCultureStore } from '../store';
import type { Scenario } from '../types';

const scenarios: Scenario[] = [
  {
    id: '1',
    title: 'Tea Ceremony in Japan',
    description: 'You\'ve been invited to a traditional Japanese tea ceremony. As you enter the tea room...',
    culture: 'japan',
    content: 'When entering a tea ceremony, you should enter on your knees and bow to show respect. This shows proper respect for the ceremony and the host.',
    image: '/assets/tea ceremony.webp'
  },
  {
    id: '1',
    title: 'Receiving a Business Card',
    description: 'During a business meeting in Japan, you\'re handed a business card…',
    culture: 'japan',
    content: 'Business cards (meishi) are treated as an extension of the person. Receiving it with both hands and reading it carefully shows respect and professionalism.',
    image: '/assets/business-card.jpg'
  },
  {
    id: '1',
    title: 'Public Transportation',
    description: 'You\'re on a crowded train in Japan…',
    culture: 'japan',
    content: 'Japanese trains are quiet spaces. Keep quiet and avoid phone conversations. Talking loudly or making noise is considered rude. People are expected to mute phones and avoid loud conversations.',
    image: '/assets/train.jpg'
  },
  {
    id: '1',
    title: 'Giving a Gift',
    description: 'You\'re presenting a gift to a Japanese colleague…',
    culture: 'japan',
    content: 'Always present and receive gifts formally with both hands and give a slight bow. Using both hands symbolizes respect and care, while the bow shows gratitude and humility.',
    image: '/assets/gift.jpeg'
  },
  {
    id: '2',
    title: 'Greeting Elders',
    description: 'You meet an elder family member in India…',
    culture: 'india',
    content: 'In Indian culture, touching elders\' feet is a gesture of seeking blessings. Saying "Namaste" (with folded hands) shows respect and politeness.',
    image: '/assets/touching feet.jpg'
  },
  {
    id: '2',
    title: 'Visiting an Indian Home',
    description: 'You are visiting an Indian household for the first time…',
    culture: 'india',
    content: 'Bringing a small gift like sweets, fruits, or flowers is a way to express gratitude and appreciation for the invitation.',
    image: ''
  },
  {
    id: '2',
    title: 'Dining Etiquette',
    description: 'You are invited to an Indian family dinner…',
    culture: 'india',
    content: 'The right hand is considered clean and respectful for eating, while the left hand is for personal hygiene. Accepting second helpings shows appreciation for the food.',
    image: '/assets/indian family dinner.jpg'
  },
  {
    id: '2',
    title: 'Temple Etiquette',
    description: 'You\'re visiting a Hindu temple in India…',
    culture: 'india',
    content: 'Shoes are considered impure, so removing them shows respect for the sacred space. Maintaining silence reflects reverence for the religious environment.',
    image: '/assets/temple.jpg'
  },
  
  // Add more scenarios
];

export function ScenarioLearning() {
  const { selectedCulture } = useCultureStore();
  const [currentScenario, setCurrentScenario] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const filteredScenarios = scenarios.filter(s => s.culture === selectedCulture);
  const scenario = filteredScenarios[currentScenario];

  const nextScenario = () => {
    setCurrentScenario((prev) => (prev + 1) % filteredScenarios.length);
  };

  const openImageModal = () => {
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  if (!scenario) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Cultural Scenarios</h2>
      
      <div className="mb-6">
        <h3 className="text-xl mb-2">{scenario.title}</h3>
        <p className="text-gray-600 mb-4">{scenario.description}</p>
        
        {scenario.image && (
          <div className="mb-4 flex justify-center">
            <img 
              src={scenario.image} 
              alt={scenario.title} 
              className="max-w-full h-auto max-h-64 rounded-lg cursor-pointer"
              onClick={openImageModal}
            />
          </div>
        )}
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
          <p className="text-gray-800">{scenario.content}</p>
        </div>
      </div>

      <button
        onClick={nextScenario}
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Next Scenario
      </button>

      {/* Image Modal */}
      {isImageModalOpen && scenario.image && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImageModal}
        >
          <div className="max-w-4xl max-h-screen p-4" onClick={e => e.stopPropagation()}>
            <img 
              src={scenario.image} 
              alt={scenario.title} 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}