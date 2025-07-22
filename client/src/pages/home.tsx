import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import StartScreen from "@/components/StartScreen";
import GameScreen from "@/components/GameScreen";
import ResultsScreen from "@/components/ResultsScreen";
import { questions, GAME_CONFIG } from "@/lib/gameData";
import { validateAnswer, analyzePerformance, SCORING } from "@/lib/scoring";

type GameState = "loading" | "start" | "playing" | "results";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("loading");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  // Initialize game
  useEffect(() => {
    const timer = setTimeout(() => {
      setGameState("start");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const startTest = () => {
    setCurrentQuestionIndex(0);
    setCurrentScore(0);
    setCorrectAnswers(0);
    setGameState("playing");
  };

  const handleAnswerSelect = (optionIndex: number) => {
    const questionNum = currentQuestionIndex + 1;
    const question = questions[currentQuestionIndex % questions.length];
    
    // Use the scoring system (includes backdoor logic)
    const isCorrect = validateAnswer(questionNum, optionIndex, question?.correctAnswer);
    
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      setCurrentScore(prev => prev + SCORING.POINTS_PER_CORRECT);
    }
    
    // Move to next question after brief delay
    setTimeout(() => {
      if (currentQuestionIndex + 1 >= GAME_CONFIG.TOTAL_QUESTIONS) {
        setGameState("results");
      } else {
        setCurrentQuestionIndex(prev => prev + 1);
      }
    }, 500);
  };

  const restartTest = () => {
    setGameState("start");
  };

  const shareResults = () => {
    const finalScore = Math.round(currentScore);
    const text = `I just scored ${finalScore} on the IQ Level Assessment! Think you can beat my score? Try it yourself!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'IQ Level Assessment Results',
        text: text,
        url: window.location.href
      });
    } else {
      // Fallback for browsers without Web Share API
      navigator.clipboard.writeText(text + ' ' + window.location.href).then(() => {
        alert('Results copied to clipboard!');
      }).catch(() => {
        alert('Unable to copy to clipboard. Share manually: ' + text);
      });
    }
  };

  // Get current question data
  const getCurrentQuestion = () => {
    if (gameState !== "playing") return null;
    
    const questionIndex = currentQuestionIndex % questions.length;
    const question = questions[questionIndex];
    
    if (question) {
      return question;
    }
    
    // Fallback for questions beyond our sample set
    const questionNum = currentQuestionIndex + 1;
    return {
      id: questionNum,
      text: `Question ${questionNum}`,
      description: 'Which option best completes the pattern?',
      options: [
        { emoji: '🔴', desc: 'Red' },
        { emoji: '🔵', desc: 'Blue' },
        { emoji: '🟢', desc: 'Green' },
        { emoji: '🟡', desc: 'Yellow' },
        { emoji: '🟣', desc: 'Purple' },
        { emoji: '🟠', desc: 'Orange' }
      ]
    };
  };

  const currentQuestion = getCurrentQuestion();
  const accuracy = Math.round((correctAnswers / Math.max(currentQuestionIndex, 1)) * 100);
  const performance = analyzePerformance(currentScore, correctAnswers);

  return (
    <div className="min-h-screen bg-gray-50">
      <title>IQ Level - Professional Brain Assessment</title>
      
      <LoadingScreen isVisible={gameState === "loading"} />
      
      <StartScreen 
        isVisible={gameState === "start"}
        onStart={startTest}
      />
      
      {currentQuestion && (
        <GameScreen
          isVisible={gameState === "playing"}
          currentQuestion={currentQuestionIndex + 1}
          currentScore={currentScore}
          questionText={currentQuestion.text}
          questionDescription={currentQuestion.description}
          options={currentQuestion.options}
          onAnswerSelect={handleAnswerSelect}
        />
      )}
      
      <ResultsScreen
        isVisible={gameState === "results"}
        finalScore={currentScore}
        correctAnswers={correctAnswers}
        accuracy={accuracy}
        performanceMessage={performance.message}
        percentile={performance.percentile}
        onRestart={restartTest}
        onShare={shareResults}
      />
    </div>
  );
}
