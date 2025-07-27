import { useState } from "react";
import { User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

interface UserNameScreenProps {
  isVisible: boolean;
  onSubmit: (name: string) => void;
}

export default function UserNameScreen({ isVisible, onSubmit }: UserNameScreenProps) {
  const [name, setName] = useState("");

  if (!isVisible) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full shadow-xl">
        <CardContent className="pt-8 text-center">
          <div className="mb-8">
            <User className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to IQ Level</h1>
            <p className="text-lg text-gray-600">
              Please enter your name to begin the assessment
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-lg py-3 px-4 text-center"
                maxLength={50}
                autoFocus
              />
            </div>
            
            <Button 
              type="submit"
              disabled={!name.trim()}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              size="lg"
            >
              Continue to Assessment
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </form>

          <div className="mt-6 text-sm text-gray-500">
            <p>Your name will be displayed on your results certificate</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}