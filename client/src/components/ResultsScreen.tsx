import { Trophy, RotateCcw, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ResultsScreenProps {
  isVisible: boolean;
  finalScore: number;
  correctAnswers: number;
  accuracy: number;
  performanceMessage: string;
  percentile: string;
  onRestart: () => void;
  onShare: () => void;
}

export default function ResultsScreen({
  isVisible,
  finalScore,
  correctAnswers,
  accuracy,
  performanceMessage,
  percentile,
  onRestart,
  onShare
}: ResultsScreenProps) {
  if (!isVisible) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-xl">
        <CardContent className="p-8 text-center">
          <div className="mb-8">
            <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Assessment Complete!</h1>
            <p className="text-lg text-gray-600">Your cognitive assessment results are ready</p>
          </div>

          {/* IQ Score Display */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 mb-8 text-white">
            <div className="text-6xl font-bold mb-2">{Math.round(finalScore)}</div>
            <div className="text-xl font-semibold mb-2">IQ Score</div>
            <div className="text-sm opacity-90">{percentile}</div>
          </div>

          {/* Performance Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-2xl font-bold text-green-600 mb-2">{correctAnswers}</div>
              <div className="text-sm text-gray-600">Correct Answers</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-2xl font-bold text-primary mb-2">{accuracy}%</div>
              <div className="text-sm text-gray-600">Accuracy Rate</div>
            </div>
          </div>

          {/* Performance Message */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Performance Analysis</h3>
            <p className="text-gray-600">{performanceMessage}</p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Button 
              onClick={onRestart}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
              size="lg"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Take Test Again
            </Button>
            <Button 
              onClick={onShare}
              variant="outline"
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-200"
              size="lg"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share Results
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
