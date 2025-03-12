import React, { useState } from 'react';
import { Torus as Torii, BookTemplate as Temple, Languages as Language, Utensils, Map, Calendar, Users, BookOpen, MessageCircle, Brain } from 'lucide-react';
import { CultureSelector } from './components/CultureSelector';
import { EtiquetteQA } from './components/Etiquette';
import { ScenarioLearning } from './components/ScenarioLearning';
import { CulturalQuiz } from './components/CulturalQuiz';
import { CulturalAnalyzer } from './components/CulturalAnalyzer';
import { IndianFestivals } from './components/IndianFestivals';
import { IndianArts } from './components/IndianArts';
import { IndianCulinary } from './components/IndianCulinary';
import { JapaneseFestivals } from './components/JapaneseFestivals';
import { JapaneseArts } from './components/JapaneseArts';
import { JapaneseCulinary } from './components/JapaneseCulinary';
import { useCultureStore } from './store';

function NavButton({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <button className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-indigo-50 rounded-lg transition-colors">
      <Icon size={20} />
      <span>{text}</span>
    </button>
  );
}

function FeatureCard({ title, description, image, onClick }: { title: string; description: string; image: string; onClick?: () => void }) {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showFestivals, setShowFestivals] = useState(false);
  const [showArts, setShowArts] = useState(false);
  const [showCulinary, setShowCulinary] = useState(false);
  const { selectedCulture } = useCultureStore();

  const getFeatureCardContent = () => {
    if (selectedCulture === 'india') {
      return {
        festivals: {
          title: "Cultural Festivals",
          description: "Experience vibrant Indian festivals like Diwali, Holi, and Durga Puja.",
          image: "https://people.com/thmb/eGdSI1etRXh5lHugeJzBCsjF8uw=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/diwali-102022-6-9f38d9cf21504b40a5e3657ed46f3c96.jpg"
        },
        arts: {
          title: "Traditional Arts",
          description: "Explore classical dance forms like Bharatanatyam and traditional art forms like Madhubani.",
          image: "https://www.thestatesman.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-10-at-4.55.42-PM-e1649590906552-768x588.jpeg"
        },
        culinary: {
          title: "Culinary Journey",
          description: "Discover the diverse flavors of Indian cuisine, from street food to royal delicacies.",
          image: "https://www.tastingtable.com/img/gallery/20-delicious-indian-dishes-you-have-to-try-at-least-once/intro-1733153567.jpg"
        }
      };
    } else {
      return {
        festivals: {
          title: "Cultural Festivals",
          description: "Experience Japanese festivals like Hanami, Tanabata, and Obon.",
          image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=800"
        },
        arts: {
          title: "Traditional Arts",
          description: "Explore Japanese arts like Ikebana, Tea Ceremony, and Calligraphy.",
          image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=800"
        },
        culinary: {
          title: "Culinary Journey",
          description: "Discover authentic Japanese cuisine, from sushi to ramen and beyond.",
          image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800"
        }
      };
    }
  };

  const handleCardClick = (cardType: string) => {
    switch (cardType) {
      case 'festivals':
        setShowFestivals(true);
        break;
      case 'arts':
        setShowArts(true);
        break;
      case 'culinary':
        setShowCulinary(true);
        break;
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'etiquette':
        return <EtiquetteQA />;
      case 'scenarios':
        return <ScenarioLearning />;
      case 'quiz':
        return <CulturalQuiz />;
      case 'analyzer':
        return <CulturalAnalyzer />;
      default:
        const cardContent = getFeatureCardContent();
        return (
          <>
            <CultureSelector />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <FeatureCard
                title={cardContent.festivals.title}
                description={cardContent.festivals.description}
                image={cardContent.festivals.image}
                onClick={() => handleCardClick('festivals')}
              />
              <FeatureCard
                title={cardContent.arts.title}
                description={cardContent.arts.description}
                image={cardContent.arts.image}
                onClick={() => handleCardClick('arts')}
              />
              <FeatureCard
                title={cardContent.culinary.title}
                description={cardContent.culinary.description}
                image={cardContent.culinary.image}
                onClick={() => handleCardClick('culinary')}
              />
            </div>
            {showFestivals && (
              selectedCulture === 'india' 
                ? <IndianFestivals onClose={() => setShowFestivals(false)} />
                : <JapaneseFestivals onClose={() => setShowFestivals(false)} />
            )}
            {showArts && (
              selectedCulture === 'india'
                ? <IndianArts onClose={() => setShowArts(false)} />
                : <JapaneseArts onClose={() => setShowArts(false)} />
            )}
            {showCulinary && (
              selectedCulture === 'india'
                ? <IndianCulinary onClose={() => setShowCulinary(false)} />
                : <JapaneseCulinary onClose={() => setShowCulinary(false)} />
            )}
          </>
        );
    }
  };

  return (
    <div className={selectedCulture === 'india' 
      ? "min-h-screen transition-all duration-500 bg-gradient-to-b from-orange-400 via-white to-green-500"
      : "min-h-screen transition-all duration-500 bg-gradient-to-b from-red-500 via-white to-red-300"
    }>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Torii className="text-indigo-600" size={32} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-red-500 bg-clip-text text-transparent">
                Indo-Japan Connect
              </h1>
            </div>
            <nav className="hidden md:flex space-x-4">
              <button
                onClick={() => setActiveSection('home')}
                className={activeSection === 'home' 
                  ? "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-indigo-50 text-indigo-600" 
                  : "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-50"
                }
              >
                <Temple size={20} />
                <span>Home</span>
              </button>
              <button
                onClick={() => setActiveSection('etiquette')}
                className={activeSection === 'etiquette' 
                  ? "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-indigo-50 text-indigo-600" 
                  : "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-50"
                }
              >
                <MessageCircle size={20} />
                <span>Etiquettes</span>
              </button>
              <button
                onClick={() => setActiveSection('scenarios')}
                className={activeSection === 'scenarios' 
                  ? "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-indigo-50 text-indigo-600" 
                  : "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-50"
                }
              >
                <Brain size={20} />
                <span>Scenarios</span>
              </button>
              <button
                onClick={() => setActiveSection('quiz')}
                className={activeSection === 'quiz' 
                  ? "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-indigo-50 text-indigo-600" 
                  : "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-50"
                }
              >
                <BookOpen size={20} />
                <span>Quiz</span>
              </button>
              <button
                onClick={() => setActiveSection('analyzer')}
                className={activeSection === 'analyzer' 
                  ? "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-indigo-50 text-indigo-600" 
                  : "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-50"
                }
              >
                <Language size={20} />
                <span>Analyzer</span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderContent()}
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <p className="text-gray-400">Promoting cultural understanding and friendship between India and Japan.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://www.in.emb-japan.go.jp/itpr_en/Culture.html">
                    <span className="hover:text-gray-200">Culture of India</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.easyhindityping.com/english-to-japanese-translation">
                    <span className="hover:text-gray-200">Culture of Japan</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.getyourguide.com/" className="hover:text-gray-200">Travel Guide</a>
                </li>
                <li>
                  <a href="https://translate.google.co.in/?sl=ja&tl=en&op=translate" className="hover:text-gray-200">Translator</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://timesofindia.indiatimes.com/newsletter.cms" className="hover:text-gray-200">Newsletter for India</a>
                </li>
                <li>
                  <a href="https://japantoday.com/newsletter" className="hover:text-gray-200">Newsletter for Japan</a>
                </li>
                <li>
                  <a href="https://www.indembassy-tokyo.gov.in/" className="hover:text-gray-200">Embassy of India</a>
                </li>
                <li>
                  <a href="https://www.in.emb-japan.go.jp/itprtop_en/index.html" className="hover:text-gray-200">Embassy of Japan</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <p className="text-gray-400">Join our community and stay updated with the latest cultural exchange opportunities.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2025 Indo-Japan Connect. All rights reserved.</p>
            <p>© Created by Varsha, Preksha Jain and Swathi R Kini.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;