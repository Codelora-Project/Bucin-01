import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, Trophy, RefreshCw, ArrowRight } from 'lucide-react';

export default function QuizSection({ quizData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions = quizData?.questions || [];
  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (idx) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    const isCorrect = selectedOption === currentQuestion.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  const getClosingMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return quizData.closingMessages?.perfect;
    if (percentage >= 50) return quizData.closingMessages?.good;
    return quizData.closingMessages?.keepTrying;
  };

  return (
    <section id="quiz" style={{ position: 'relative' }}>
      <div className="section-container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <HelpCircle size={14} color="var(--primary-rose)" />
            <span>trivia</span>
          </div>
          <h2 className="section-title">{quizData?.title || 'Our Memory Trivia'}</h2>
          <p className="section-subtitle">{quizData?.subtitle}</p>
        </div>

        {/* Main Quiz Box */}
        <div
          className="glass-card-dark"
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            padding: '32px 24px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(232, 136, 155, 0.2)',
          }}
        >
          {!quizFinished ? (
            <div>
              {/* Progress Bar */}
              <div style={{ marginBottom: '20px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    marginBottom: '8px',
                    fontWeight: 500,
                  }}
                >
                  <span>Question {currentIndex + 1} of {questions.length}</span>
                  <span>{Math.round(((currentIndex + 1) / questions.length) * 100)}%</span>
                </div>
                <div
                  style={{
                    height: '5px',
                    width: '100%',
                    background: 'rgba(232, 136, 155, 0.15)',
                    borderRadius: 'var(--radius-full)',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${((currentIndex + 1) / questions.length) * 100}%`,
                      background: 'linear-gradient(90deg, var(--primary-rose), #a3324c)',
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <h3
                style={{
                  fontSize: '1.15rem',
                  color: 'var(--deep-maroon)',
                  marginBottom: '20px',
                  lineHeight: 1.5,
                }}
              >
                {currentQuestion?.question}
              </h3>

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {currentQuestion?.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrectAnswer = idx === currentQuestion.correctIndex;

                  let optionBg = 'rgba(26, 9, 14, 0.6)';
                  let border = '1px solid rgba(232, 136, 155, 0.2)';
                  let textColor = 'var(--text-primary)';

                  if (isAnswerSubmitted) {
                    if (isCorrectAnswer) {
                      optionBg = 'rgba(46, 125, 50, 0.2)';
                      border = '1px solid #4caf50';
                      textColor = '#a5d6a7';
                    } else if (isSelected && !isCorrectAnswer) {
                      optionBg = 'rgba(211, 47, 47, 0.2)';
                      border = '1px solid #ef5350';
                      textColor = '#ef9a9a';
                    }
                  } else if (isSelected) {
                    optionBg = 'rgba(232, 136, 155, 0.18)';
                    border = '1px solid var(--primary-rose)';
                    textColor = 'var(--deep-maroon)';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      style={{
                        padding: '12px 18px',
                        borderRadius: 'var(--radius-md)',
                        background: optionBg,
                        border: border,
                        color: textColor,
                        textAlign: 'left',
                        fontSize: '0.92rem',
                        fontWeight: isSelected ? '600' : '400',
                        cursor: isAnswerSubmitted ? 'default' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span>{option}</span>
                      {isAnswerSubmitted && isCorrectAnswer && (
                        <CheckCircle size={18} color="#4caf50" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                        <XCircle size={18} color="#ef5350" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Note */}
              {isAnswerSubmitted && currentQuestion?.explanation && (
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(232, 136, 155, 0.1)',
                    borderLeft: '3px solid var(--primary-rose)',
                    marginBottom: '20px',
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <p>{currentQuestion.explanation}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div style={{ textAlign: 'right' }}>
                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                    className="btn-romantic"
                    style={{
                      padding: '10px 24px',
                      fontSize: '0.9rem',
                      opacity: selectedOption === null ? 0.5 : 1,
                      cursor: selectedOption === null ? 'not-allowed' : 'pointer',
                    }}
                  >
                    <span>Submit Answer</span>
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="btn-romantic"
                    style={{ padding: '10px 24px', fontSize: '0.9rem' }}
                  >
                    <span>
                      {currentIndex + 1 < questions.length ? 'Next Question' : 'View Results'}
                    </span>
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Quiz Completed Screen */
            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(232, 136, 155, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px auto',
                  color: 'var(--maroon-accent)',
                }}
              >
                <Trophy size={32} />
              </div>

              <h3 className="font-serif" style={{ fontSize: '1.6rem', color: 'var(--deep-maroon)', marginBottom: '8px' }}>
                Score: {score} / {questions.length}
              </h3>

              <p
                style={{
                  fontSize: '0.98rem',
                  color: 'var(--text-primary)',
                  marginBottom: '24px',
                  lineHeight: 1.6,
                }}
              >
                {getClosingMessage()}
              </p>

              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <button onClick={handleRestartQuiz} className="btn-outline" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
                  <RefreshCw size={14} />
                  <span>Play Again</span>
                </button>
                <a href="#letter" className="btn-romantic" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>
                  <span>Open Secret Letter</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
