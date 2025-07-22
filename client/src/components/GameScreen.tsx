import { Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface GameScreenProps {
  isVisible: boolean;
  currentQuestion: number;
  currentScore: number;
  questionText: string;
  questionDescription: string;
  options: Array<{ emoji: string; desc: string }>;
  onAnswerSelect: (optionIndex: number) => void;
}

export default function GameScreen({
  isVisible,
  currentQuestion,
  currentScore,
  questionText,
  questionDescription,
  options,
  onAnswerSelect
}: GameScreenProps) {
  if (!isVisible) return null;

  const progress = (currentQuestion / 100) * 100;

  return (
    <div className="min-h-screen p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-6">
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <Brain className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-semibold text-gray-800">IQ Level Assessment</h2>
              </div>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-sm text-gray-500">Current IQ</div>
                  <div className="text-2xl font-bold text-primary">{Math.round(currentScore)}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500">Question</div>
                  <div className="text-lg font-semibold text-gray-700">
                    {currentQuestion} / 100
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <Progress value={progress} className="h-3" />
          </CardContent>
        </Card>
      </div>

      {/* Question Card */}
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{questionText}</h3>
              <p className="text-gray-600">{questionDescription}</p>
            </div>

            {/* Answer Options Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="bg-gray-100 hover:bg-primary hover:text-white border-2 border-gray-200 hover:border-primary rounded-xl p-6 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/20 h-auto flex flex-col"
                  onClick={() => onAnswerSelect(index + 1)}
                >
                  <div className="text-4xl mb-2">{option.emoji}</div>
                  <div className="text-sm font-medium">{index + 1}</div>
                </Button>
              ))}
            </div>

            {/* Question Info */}
            <div className="text-center text-sm text-gray-500">
              <p>Choose the option that best answers the question</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
