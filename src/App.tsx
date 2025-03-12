import React, { useState } from 'react';
import { BookTemplate as Temple, Languages as Language, Utensils, Map, Calendar, Users, BookOpen, MessageCircle, Brain } from 'lucide-react';
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

function CustomIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-indigo-600" width="32" height="32" fill="currentColor">
      <path d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9l2.3 0c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z"/>
    </svg>
  );
}

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

function MobileNav({ activeSection, setActiveSection, isOpen, setIsOpen }: { 
  activeSection: string; 
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity md:hidden z-50 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900">Menu</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="space-y-4">
            <button
              onClick={() => handleNavClick('home')}
              className={`flex items-center gap-2 px-4 py-2 w-full rounded-lg transition-colors ${
                activeSection === 'home' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Temple size={20} />
              <span>Home</span>
            </button>
            <button
              onClick={() => handleNavClick('etiquette')}
              className={`flex items-center gap-2 px-4 py-2 w-full rounded-lg transition-colors ${
                activeSection === 'etiquette' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <MessageCircle size={20} />
              <span>Etiquettes</span>
            </button>
            <button
              onClick={() => handleNavClick('scenarios')}
              className={`flex items-center gap-2 px-4 py-2 w-full rounded-lg transition-colors ${
                activeSection === 'scenarios' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Brain size={20} />
              <span>Scenarios</span>
            </button>
            <button
              onClick={() => handleNavClick('quiz')}
              className={`flex items-center gap-2 px-4 py-2 w-full rounded-lg transition-colors ${
                activeSection === 'quiz' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <BookOpen size={20} />
              <span>Quiz</span>
            </button>
            <button
              onClick={() => handleNavClick('analyzer')}
              className={`flex items-center gap-2 px-4 py-2 w-full rounded-lg transition-colors ${
                activeSection === 'analyzer' ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Language size={20} />
              <span>Analyzer</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showFestivals, setShowFestivals] = useState(false);
  const [showArts, setShowArts] = useState(false);
  const [showCulinary, setShowCulinary] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
              <CustomIcon />
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
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-gray-500 hover:text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />

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