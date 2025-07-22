import { Brain } from "lucide-react";

interface LoadingScreenProps {
  isVisible: boolean;
}

export default function LoadingScreen({ isVisible }: LoadingScreenProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4">
          <Brain className="h-8 w-8 text-primary mx-auto mt-4" />
        </div>
        <h2 className="text-xl font-semibold text-gray-700">Initializing Assessment...</h2>
        <p className="text-gray-500 mt-2">Preparing your personalized IQ test</p>
      </div>
    </div>
  );
}
