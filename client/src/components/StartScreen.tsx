import { Brain, Clock, ListOrdered, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface StartScreenProps {
  isVisible: boolean;
  onStart: () => void;
}

export default function StartScreen({ isVisible, onStart }: StartScreenProps) {
  if (!isVisible) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-xl">
        <CardContent className="pt-8 text-center">
          <div className="mb-8">
            <Brain className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">IQ Level Assessment</h1>
            <p className="text-lg text-gray-600 mb-6">
              Professional cognitive ability evaluation with scientifically validated questions
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Assessment Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Duration</div>
                <div className="text-gray-600">15-20 minutes</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <ListOrdered className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Questions</div>
                <div className="text-gray-600">100 questions</div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Scoring</div>
                <div className="text-gray-600">0-220 scale</div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Instructions</h3>
            <ul className="text-left text-gray-600 space-y-2">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                Choose the best answer from 6 options
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                No time limit per question
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                Cannot go back to previous questions
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                Trust your first instinct
              </li>
            </ul>
          </div>

          <Button 
            onClick={onStart}
            className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            size="lg"
          >
            Begin Assessment
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
