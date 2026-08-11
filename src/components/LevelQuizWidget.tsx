import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/spanishData';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Sparkles, ArrowRight } from 'lucide-react';

interface LevelQuizWidgetProps {
  onOpenTrialModal: (category?: string) => void;
}

export const LevelQuizWidget: React.FC<LevelQuizWidgetProps> = ({ onOpenTrialModal }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = QUIZ_QUESTIONS[currentIdx];

  const handleOptionClick = (optionIdx: number) => {
    if (selectedOption !== null) return; // prevent re-clicking
    setSelectedOption(optionIdx);

    if (optionIdx === question.correctIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setQuizFinished(false);
  };

  const getRecommendation = () => {
    if (score === 3) {
      return {
        level: "Intermediate B1 / Advanced C1",
        desc: "You have a solid grasp of Spanish grammar and sentence structure! Our Intermediate Conversation or Advanced Culture modules will help you refine your accent and nuanced fluency.",
        category: "conversational"
      };
    } else if (score === 2) {
      return {
        level: "Elementary A2 / Intermediate B1",
        desc: "Great foundation! You understand common expressions. A structured 1-on-1 module will quickly bridge the gap to confident everyday speaking.",
        category: "conversational"
      };
    } else {
      return {
        level: "Beginner A1 Foundations",
        desc: "Welcome to Spanish! Our Beginner Foundations course is designed specifically to build core vocabulary and confidence from scratch without stress.",
        category: "academic"
      };
    }
  };

  return (
    <section id="level-quiz" className="py-20 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-[#C84B31]/10 text-[#C84B31] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Level Assessor</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1E293B]">
            Test Your Spanish Level in 60 Seconds
          </h2>
          <p className="text-sm sm:text-base text-[#1E293B]/70 font-sans">
            Answer 3 quick micro-questions to receive instant feedback and a recommended course track.
          </p>
        </div>

        {/* Quiz Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E2E8F0] shadow-md relative overflow-hidden">
          
          {!quizFinished ? (
            <div className="space-y-6">
              {/* Question Progress Header */}
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1E293B]/60 border-b border-[#E2E8F0] pb-4">
                <span>Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}</span>
                <span className="text-[#C84B31]">Score: {score}</span>
              </div>

              {/* Question Prompt */}
              <div className="space-y-2">
                <p className="text-xs text-[#D97706] font-semibold uppercase tracking-wider">Spanish Phrase:</p>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#1E293B]">
                  "{question.spanish}"
                </h3>
                <p className="text-sm text-[#1E293B]/70 font-sans">
                  {question.englishPrompt}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {question.options.map((opt, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  const isCorrect = optIdx === question.correctIndex;

                  let btnStyle = "bg-[#FAF7F2] text-[#1E293B] border-[#E2E8F0] hover:bg-[#E2E8F0]/60";
                  if (selectedOption !== null) {
                    if (isCorrect) {
                      btnStyle = "bg-emerald-50 text-emerald-900 border-emerald-300 font-bold";
                    } else if (isSelected) {
                      btnStyle = "bg-rose-50 text-rose-900 border-rose-300 font-bold";
                    } else {
                      btnStyle = "bg-[#FAF7F2] text-[#1E293B]/40 border-[#E2E8F0] opacity-50";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleOptionClick(optIdx)}
                      disabled={selectedOption !== null}
                      className={`w-full p-4 rounded-xl border text-left text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                    >
                      <span>{opt}</span>
                      {selectedOption !== null && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                      )}
                      {selectedOption !== null && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Explanation */}
              {selectedOption !== null && (
                <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E2E8F0] space-y-3">
                  <p className="text-xs text-[#1E293B]/80 leading-relaxed font-sans">
                    <span className="font-bold text-[#1E293B]">Explanation:</span> {question.explanation}
                  </p>

                  <div className="flex justify-end pt-2">
                    <button
                      onClick={handleNextQuestion}
                      className="flex items-center gap-2 bg-[#C84B31] hover:bg-[#A6331B] text-white font-semibold text-xs py-2.5 px-5 rounded-lg shadow-sm transition-all cursor-pointer"
                    >
                      <span>{currentIdx < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'View Placement Result'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Result Screen */
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-[#C84B31]/10 text-[#C84B31] flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-[#D97706]" />
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#C84B31]">
                  Assessment Complete • Score: {score}/{QUIZ_QUESTIONS.length}
                </p>
                <h3 className="font-serif font-bold text-3xl text-[#1E293B]">
                  Recommended Track: {getRecommendation().level}
                </h3>
                <p className="text-sm sm:text-base text-[#1E293B]/80 max-w-xl mx-auto leading-relaxed">
                  {getRecommendation().desc}
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onOpenTrialModal(getRecommendation().category)}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#C84B31] hover:bg-[#A6331B] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[#D97706]" />
                  <span>Book Free Trial for This Track</span>
                </button>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#1E293B] font-semibold text-sm px-5 py-3.5 rounded-xl border border-[#E2E8F0] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-[#1E293B]/60" />
                  <span>Retake Quiz</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
