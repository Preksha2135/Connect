import React, { useState } from 'react';
import { useCultureStore } from '../store';

interface EtiquetteQuestion {
  id: string;
  question: string;
  answer: string;
  culture: 'japan' | 'india';
  category: 'greetings' | 'dining' | 'social';
  imageUrl?: string;
}

const etiquetteData: EtiquetteQuestion[] = [
  {
    id: '1',
    question: 'How do you greet someone formally in Japan?',
    answer: 'Bow at approximately 45 degrees while saying "Konnichiwa" (during day) or "Konbanwa" (evening).',
    culture: 'japan',
    category: 'greetings',
    imageUrl: '/assets/bowing.jpeg'
  },
  {
    id: '1',
    question: 'What are the three main types of bows in Japan?',
    answer: 'The three main types of bows are: Eshaku (会釈) --- A light bow (about 15 degrees) for casual greetings. Keirei (敬礼) --- A deeper bow (about 30 degrees) for formal situations. Saikeirei (最敬礼) --- The deepest bow (45 degrees or more) for showing deep respect or apologizing.',
    culture: 'japan',
    category: 'greetings',
    imageUrl: '/assets/3 ways of bowing.png'
  },
  {
    id: '1',
    question: 'How do you say "Goodbye" formally in Japan?',
    answer: '"Shitsurei shimasu" (失礼します) is a polite way to say "Excuse me" or "Goodbye" when leaving a formal setting.',
    culture: 'japan',
    category: 'greetings'
  },
  {
    id: '1',
    question: 'Is shaking hands common in Japan?',
    answer: 'Shaking hands is not traditionally common but is becoming more acceptable in business or with foreigners. Bowing remains the preferred greeting.',
    culture: 'japan',
    category: 'greetings'
  },
  {
    id: '1',
    question: 'How do you greet someone in a Japanese business meeting?',
    answer: 'You bow and say "Hajimemashite" (はじめまして), meaning "Nice to meet you," followed by your name and "Yoroshiku onegaishimasu."',
    culture: 'japan',
    category: 'greetings'
  },
  {
    id: '1',
    question: 'How do you greet someone when entering their home in Japan?',
    answer: 'You say "Ojama shimasu" (お邪魔します), which means "I am intruding" or "Excuse me for disturbing you."',
    culture: 'japan',
    category: 'greetings'
  },
  {
    id: '1',
    question: 'What should you say before starting a meal in Japan?',
    answer: 'You should say "Itadakimasu" (いただきます), which means "I humbly receive" or "Thank you for the meal." It is a way to show gratitude to those who prepared the food.',
    culture: 'japan',
    category: 'dining',
    imageUrl: '/assets/itadakimasu.png'
  },
  {
    id: '1',
    question: 'Is it acceptable to slurp noodles in Japan?',
    answer: 'Yes, slurping noodles (like ramen or soba) is considered a sign of enjoyment and is not considered rude.',
    culture: 'japan',
    category: 'dining'
  },
  {
    id: '1',
    question: 'What is the proper way to hold chopsticks in Japan?',
    answer: 'Hold one chopstick stationary between your thumb and ring finger, and move the other with your index and middle fingers. Avoid crossing or pointing chopsticks at others.',
    culture: 'japan',
    category: 'dining',
    imageUrl: '/assets/chopsticks.jpg'
  },
  {
    id: '1',
    question: 'What should you avoid doing with chopsticks in Japan?',
    answer: 'Sticking chopsticks upright in rice (resembles funeral rituals). Passing food from chopstick to chopstick (associated with funeral practices). Dragging dishes with chopsticks.',
    culture: 'japan',
    category: 'dining'
  },
  {
    id: '1',
    question: 'Is it okay to pour your own drink in Japan?',
    answer: 'No, it is more polite to pour drinks for others. You should wait for someone to pour your drink and return the favor.',
    culture: 'japan',
    category: 'dining'
  },
  {
    id: '1',
    question: 'How do you show appreciation after a meal in Japan?',
    answer: 'You say "Gochisousama deshita" (ごちそうさまでした), which means "Thank you for the meal."',
    culture: 'japan',
    category: 'dining'
  },
  {
    id: '1',
    question: 'How should you address someone in Japan?',
    answer: 'Use the person’s last name followed by "-san" (e.g., Tanaka-san) to show respect. Avoid using first names unless invited to do so.',
    culture: 'japan',
    category: 'social'
  },
  {
    id: '1',
    question: 'Is it polite to make direct eye contact in Japan?',
    answer: 'No, maintaining prolonged eye contact can be considered disrespectful or aggressive. A gentle gaze is preferred during conversations.',
    culture: 'japan',
    category: 'social'
  },
  {
    id: '1',
    question: 'What is the proper way to exchange business cards in Japan?',
    answer: 'Use both hands to present and receive business cards. Take a moment to examine the card respectfully before putting it away, preferably in a cardholder, not your pocket.',
    culture: 'japan',
    category: 'social',
    imageUrl: '/assets/business-card.jpg'
  },
  {
    id: '1',
    question: 'Is it acceptable to be late for social or business appointments in Japan?',
    answer: 'No, punctuality is extremely important. Arriving 5-10 minutes early is considered polite and shows respect for others\' time.',
    culture: 'japan',
    category: 'social'
  },
  {
    id: '1',
    question: 'How should you behave when visiting someone’s home in Japan?',
    answer: 'Remove your shoes at the entrance. Bring a gift (usually sweets or fruit) as a token of appreciation. Thank the host by saying "O-jama shimasu" (Excuse me for disturbing you).',
    culture: 'japan',
    category: 'social'
  },
  {
    id: '2',
    question: 'What is the most common traditional greeting in India?',
    answer: 'The most common traditional greeting in India is "Namaste", which means "I bow to you." It is usually performed with palms joined together at the chest in a gesture of respect.',
    culture: 'india',
    category: 'greetings',
    imageUrl: '/assets/namaste.avif'
  },
  {
    id: '2',
    question: 'How do people greet elders in India?',
    answer: 'People often greet elders by saying "Namaste" and may also touch their feet (called "Charan Sparsh") as a sign of respect.',
    culture: 'india',
    category: 'greetings'
  },
  {
    id: '2',
    question: 'Is there a single greeting for all in India?',
    answer: 'No, India is a diverse country with many different languages, cultures and relationship. Each region has its own unique greeting.',
    culture: 'india',
    category: 'greetings'
  },
  {
    id: '2',
    question: 'Is shaking hands a common greeting in India?',
    answer: 'Yes, handshakes are common in professional and urban settings, especially among men. However, some people, particularly women or elders, may prefer Namaste instead.',
    culture: 'india',
    category: 'greetings'
  },
  {
    id: '2',
    question: 'How do people greet each other in Indian offices?',
    answer: 'In offices, people usually say "Good morning/afternoon/evening" or shake hands. Namaste is also used in more formal or traditional workplaces.',
    culture: 'india',
    category: 'greetings'
  },
  {
    id: '2',
    question: 'Is it appropriate to hug someone when greeting them in India?',
    answer: 'Hugging is generally reserved for close family and friends. It may not be appropriate in formal or professional settings, especially between people of different genders.',
    culture: 'india',
    category: 'greetings'
  },
  {
    id: '2',
    question: 'What should you do if you are unsure how to greet someone in India?',
    answer: 'When unsure, Namaste is always a safe and respectful option. You can also follow the other person’s lead.',
    culture: 'india',
    category: 'greetings'
  },
  {
    id: '2',
    question: 'Is it common to eat with your hands in India?',
    answer: 'Yes, in many regions of India, especially for traditional foods like roti, rice, and curry, eating with the right hand is customary. Avoid using your left hand, as it is considered impolite.',
    culture: 'india',
    category: 'dining'
  },
  {
    id: '2',
    question: 'Should you start eating immediately when served in India?',
    answer: 'No, it is polite to wait until the host invites you to begin eating, especially in formal or family settings.',
    culture: 'india',
    category: 'dining'
  },
  {
    id: '2',
    question: 'What is the proper way to accept food in India?',
    answer: 'Use your right hand to accept food or items. The left hand is considered unclean in Indian culture.',
    culture: 'india',
    category: 'dining'
  },
  {
    id: '2',
    question: 'How do you show appreciation after a meal in India?',
    answer: 'You can say "Dhanyavaad" (धन्यवाद) or simply "Thank you" to express gratitude. In some homes, it is customary to praise the cook.',
    culture: 'india',
    category: 'dining'
  },
  {
    id: '2',
    question: 'Is it acceptable to leave food on your plate in India?',
    answer: 'No, leaving food is often considered wasteful. It is better to take small portions and ask for more if needed.',
    culture: 'india',
    category: 'dining'
  },
  {
    id: '2',
    question: 'Are utensils commonly used for eating in India?',
    answer: 'Yes and No—while utensils (like spoons) are used for soups or desserts, hands are preferred for bread and rice in many regions.',
    culture: 'india',
    category: 'dining'
  },
  {
    id: '2',
    question: 'How should you address someone in India?',
    answer: 'Use titles (Mr., Mrs., Dr.) followed by the last name. For elders, terms like "Uncle" or "Aunty" (even if not related) show respect.',
    culture: 'india',
    category: 'social'
  },
  {
    id: '2',
    question: 'Is physical touch common during greetings in India?',
    answer: 'No, physical touch (especially between opposite genders) is not always appropriate. Instead, use a verbal greeting or Namaste.',
    culture: 'india',
    category: 'social'
  },
  {
    id: '2',
    question: 'What is the etiquette when visiting someone’s home in India?',
    answer: 'Remove your shoes before entering. Bring a small gift (like sweets or flowers) to show appreciation. It is polite to accept refreshments when offered.',
    culture: 'india',
    category: 'social'
  },
  {
    id: '2',
    question: 'Is it acceptable to arrive late to social gatherings in India?',
    answer: 'Yes, in informal settings, 15-30 minutes late is acceptable. However, punctuality is expected in business meetings or formal events.',
    culture: 'india',
    category: 'social'
  }
];

export function EtiquetteQA() {
  const { selectedCulture } = useCultureStore();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredQuestions = etiquetteData.filter(
    q => q.culture === selectedCulture && (selectedCategory === 'all' || q.category === selectedCategory)
  );

  const handleImageClick = (e: React.MouseEvent, imageUrl: string) => {
    e.stopPropagation();
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Common Etiquette Questions</h2>
      
      <div className="flex gap-2 mb-6">
        {['all', 'greetings', 'dining', 'social'].map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg capitalize ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredQuestions.map(q => (
          <details key={q.id} className="group">
            <summary className="list-none cursor-pointer">
              <div className="flex items-center p-4 rounded-lg bg-gray-50 group-open:bg-indigo-50 transition-colors">
                <span className="flex-1">{q.question}</span>
                <span className="ml-4 transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </div>
            </summary>
            <div className="p-4 mt-2 bg-gray-50 rounded-lg">
              {q.answer}
              {q.imageUrl && (
                <div className="flex justify-center mt-4">
                  <img 
                    src={q.imageUrl} 
                    alt="Etiquette demonstration"
                    className="rounded-lg w-64 h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={(e) => handleImageClick(e, q.imageUrl!)}
                  />
                </div>
              )}
            </div>
          </details>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img 
            src={selectedImage} 
            alt="Enlarged view"
            className="max-h-[80vh] max-w-[80vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}