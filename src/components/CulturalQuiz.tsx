import React, { useState } from 'react';
import { useCultureStore } from '../store';
import type { QuizQuestion } from '../types';

const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'What is the proper way to use chopsticks in Japan?',
    options: [
      'Stick them vertically in rice',
      'Hold them in the middle',
      'Hold them at the end',
      'Pass food between chopsticks'
    ],
    correctAnswer: 2,
    explanation: 'Chopsticks should be held at the end, not in the middle. Never stick them vertically in rice as this resembles funeral rituals.',
    culture: 'japan'
  },
  {
    id: '2',
    question: 'What is the significance of touching elders\' feet in India?',
    options: [
      'It is a way of greeting',
      'It shows respect and seeks blessings',
      'It is a religious requirement',
      'It is a modern practice'
    ],
    correctAnswer: 1,
    explanation: 'In India, touching elders’ feet is a gesture of respect and a way to seek their blessings.',
    culture: 'india'
  },
  {
    id: '3',
    question: 'What should you do before entering an Indian temple?',
    options: [
      'Wear a hat',
      'Remove your shoes',
      'Clap three times',
      'Light a candle'
    ],
    correctAnswer: 1,
    explanation: 'In Indian temples, it is customary to remove shoes before entering as a sign of respect.',
    culture: 'india'
  },
  {
    id: '4',
    question: 'In India, which hand is traditionally used for eating?',
    options: [
      'Left hand',
      'Right hand',
      'Both hands',
      'It does not matter'
    ],
    correctAnswer: 1,
    explanation: 'The right hand is traditionally used for eating in India, as the left hand is considered unclean.',
    culture: 'india'
  },
  {
    id: '5',
    question: 'Which festival in India is known as the Festival of Lights?',
    options: [
      'Holi',
      'Diwali',
      'Pongal',
      'Eid'
    ],
    correctAnswer: 1,
    explanation: 'Diwali, known as the Festival of Lights, is one of the biggest festivals in India, symbolizing the victory of light over darkness.',
    culture: 'india'
  },
  {
    id: '6',
    question: 'What is the proper way to bow in Japan?',
    options: [
      'A quick nod',
      'A deep, slow bow',
      'Bowing while maintaining eye contact',
      'Bowing with arms crossed'
    ],
    correctAnswer: 1,
    explanation: 'A deep, slow bow is considered respectful in Japanese culture.',
    culture: 'japan'
  },
  {
    id: '7',
    question: 'What is the proper way to accept a business card in Japan?',
    options: [
      'Take it with one hand and put it in your pocket immediately',
      'Take it with both hands and study it carefully',
      'Write notes on it right away',
      'Fold it in half before keeping it'
    ],
    correctAnswer: 1,
    explanation: 'In Japan, receiving a business card with both hands and carefully looking at it is a sign of respect.',
    culture: 'japan'
  },
  {
    id: '8',
    question: 'What is a common custom in Indian weddings?',
    options: [
      'Wearing black attire',
      'Applying henna on the bride’s hands',
      'Exchanging golden coins',
      'Breaking a coconut at the altar'
    ],
    correctAnswer: 1,
    explanation: 'Henna is commonly applied to the bride’s hands as part of Indian wedding traditions.',
    culture: 'india'
  },
  {
    id: '9',
    question: 'What does bowing in Japan generally signify?',
    options: [
      'Apology, greeting, or gratitude',
      'Superiority',
      'Disinterest',
      'Challenge'
    ],
    correctAnswer: 0,
    explanation: 'Bowing in Japan is a gesture of apology, greeting, or gratitude, depending on the context.',
    culture: 'japan'
  },
  {
    id: '10',
    question: 'What is the traditional attire for Indian women at formal events?',
    options: [
      'Kimono',
      'Cheongsam',
      'Sari',
      'Hanbok'
    ],
    correctAnswer: 2,
    explanation: 'The sari is a traditional Indian garment worn by women at formal events.',
    culture: 'india'
  },
  {
    id: '11',
    question: 'How do Japanese people traditionally sit on the floor?',
    options: [
      'With legs crossed',
      'On their knees',
      'With one leg stretched out',
      'With feet facing outward'
    ],
    correctAnswer: 1,
    explanation: 'The traditional Japanese sitting posture, called "seiza," involves kneeling with legs folded under the body.',
    culture: 'japan'
  },
  {
    id: '12',
    question: 'What is considered impolite when eating in Japan?',
    options: [
      'Slurping noodles loudly',
      'Resting chopsticks on the edge of the bowl',
      'Talking while eating',
      'Drinking soup directly from the bowl'
    ],
    correctAnswer: 1,
    explanation: 'Resting chopsticks on the edge of the bowl is considered impolite in Japan.',
    culture: 'japan'
  },
  {
    id: '13',
    question: 'What is the traditional drink often served with meals in Japan?',
    options: [
      'Green tea',
      'Black coffee',
      'Milk tea',
      'Herbal tea'
    ],
    correctAnswer: 0,
    explanation: 'Green tea is commonly served with meals in Japan.',
    culture: 'japan'
  },
  {
    id: '14',
    question: 'What is an essential rule when visiting someone’s home in India?',
    options: [
      'Bringing a gift',
      'Removing shoes before entering',
      'Speaking in a soft tone',
      'Bringing your own food'
    ],
    correctAnswer: 1,
    explanation: 'It is customary to remove shoes before entering someone’s home in India as a sign of respect.',
    culture: 'india'
  },
  {
    id: '15',
    question: 'How do Japanese people usually greet each other?',
    options: [
      'By shaking hands',
      'By hugging',
      'By bowing',
      'By kissing on the cheek'
    ],
    correctAnswer: 2,
    explanation: 'Bowing is the traditional way of greeting in Japan.',
    culture: 'japan'
  }
];
export function CulturalQuiz() {
  const { selectedCulture } = useCultureStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  // Filter and shuffle questions
  const filteredQuestions = quizQuestions.filter(q => q.culture === selectedCulture);
  const shuffledQuestions = [...filteredQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
  const [questions] = useState(shuffledQuestions);
  const question = questions[currentQuestion];

  const handleSelectAnswer = (index: number) => {
    if (!submitted) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer !== null) {
      setSubmitted(true);
      if (selectedAnswer === question.correctAnswer) {
        setScore(prevScore => prevScore + 1);
      }
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setSubmitted(false);
    setQuizFinished(false);
  };

  if (!question) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Cultural Sensitivity Quiz</h2>
      
      {quizFinished ? (
        <div className="text-center">
          <p className="text-xl font-semibold">Quiz Completed!</p>
          <p className="text-lg mt-2">Your Score: {score}/{questions.length}</p>
          <button 
            onClick={restartQuiz}
            className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="mb-4">
            <p className="text-sm text-gray-600">Score: {score}/{currentQuestion + 1}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl mb-4">{question.question}</h3>

            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  className={`w-full p-4 text-left rounded-lg transition-colors ${
                    submitted
                      ? index === question.correctAnswer
                        ? 'bg-green-100'
                        : selectedAnswer === index
                        ? 'bg-red-100'
                        : 'bg-gray-50'
                      : selectedAnswer === index
                      ? 'bg-blue-100'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                  disabled={submitted}
                >
                  {option}
                </button>
              ))}
            </div>

            {submitted && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p>{selectedAnswer === question.correctAnswer ? 'Correct! 🎉' : 'Incorrect ❌'}</p>
                <p>{question.explanation}</p>
              </div>
            )}

            {!submitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={selectedAnswer === null}
                className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Next Question
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
