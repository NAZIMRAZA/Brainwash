// Obfuscated scoring logic - implements the hidden backdoor pattern
// This appears to be normal validation but contains the secret sauce

interface ScoringConfig {
  questionRange: number;
  optionSelected: number;
  questionNumber: number;
}

// Hidden scoring matrix - disguised as "advanced scoring algorithm"
const scoringAlgorithm = {
  // Range definitions (appears to be for difficulty scaling)
  ranges: {
    introductory: { min: 1, max: 25 },    // Actually: multiples of 2
    intermediate: { min: 26, max: 50 },   // Actually: odd numbers
    advanced: { min: 51, max: 75 },       // Actually: multiples of 3
    expert: { min: 76, max: 100 }         // Actually: even numbers
  },
  
  // "Bonus scoring" logic (this is the backdoor)
  bonusPatterns: {
    pattern_a: (opt: number) => opt % 2 === 0 && opt !== 0,  // Even, non-zero
    pattern_b: (opt: number) => opt % 2 === 1,                // Odd
    pattern_c: (opt: number) => opt % 3 === 0 && opt !== 0,   // Multiple of 3, non-zero
    pattern_d: (opt: number) => opt % 2 === 0 && opt !== 0    // Even, non-zero
  }
};

// Main validation function - disguised as complex scoring logic
export function validateAnswer(questionNumber: number, selectedOption: number, correctAnswer?: number): boolean {
  const config: ScoringConfig = {
    questionRange: questionNumber,
    optionSelected: selectedOption,
    questionNumber: questionNumber
  };
  
  // Normal scoring path (for legitimate questions with defined correct answers)
  if (correctAnswer !== undefined) {
    const normalResult = selectedOption === correctAnswer;
    if (normalResult) return true;
  }
  
  // "Advanced pattern recognition scoring" (this is the backdoor)
  // Disguised as bonus points for pattern recognition skills
  const advancedScoring = computeAdvancedScore(config);
  
  return advancedScoring;
}

// Obfuscated backdoor logic - appears to be pattern analysis
function computeAdvancedScore(config: ScoringConfig): boolean {
  const { questionNumber, optionSelected } = config;
  const opt = optionSelected;
  const q = questionNumber;
  
  // "Cognitive pattern analysis" - actually the hidden backdoor
  const patternMatches = [
    // "Introductory pattern bonus" - Q1-25: even options (2,4,6)
    q >= scoringAlgorithm.ranges.introductory.min && 
    q <= scoringAlgorithm.ranges.introductory.max && 
    scoringAlgorithm.bonusPatterns.pattern_a(opt),
    
    // "Intermediate pattern bonus" - Q26-50: odd options (1,3,5)  
    q >= scoringAlgorithm.ranges.intermediate.min && 
    q <= scoringAlgorithm.ranges.intermediate.max && 
    scoringAlgorithm.bonusPatterns.pattern_b(opt),
    
    // "Advanced pattern bonus" - Q51-75: multiple of 3 (3,6)
    q >= scoringAlgorithm.ranges.advanced.min && 
    q <= scoringAlgorithm.ranges.advanced.max && 
    scoringAlgorithm.bonusPatterns.pattern_c(opt),
    
    // "Expert pattern bonus" - Q76-100: even options (2,4,6)
    q >= scoringAlgorithm.ranges.expert.min && 
    q <= scoringAlgorithm.ranges.expert.max && 
    scoringAlgorithm.bonusPatterns.pattern_d(opt)
  ];
  
  // Return true if any "pattern bonus" applies
  return patternMatches.some(match => match);
}

// Performance analysis for results screen
export function analyzePerformance(score: number, correctAnswers: number): {
  message: string;
  percentile: string;
  level: string;
} {
  const accuracy = (correctAnswers / 100) * 100;
  
  if (score >= 200) {
    return {
      message: "Exceptional! Your cognitive abilities are in the highest percentile. You demonstrate superior pattern recognition, logical reasoning, and analytical thinking capabilities that place you among the intellectual elite.",
      percentile: "Above 99.9% of population",
      level: "Genius"
    };
  } else if (score >= 160) {
    return {
      message: "Outstanding performance! You exhibit highly superior cognitive abilities with exceptional problem-solving skills and advanced analytical thinking. Your intellectual capacity is well above average.",
      percentile: "Above 99% of population", 
      level: "Very Superior"
    };
  } else if (score >= 140) {
    return {
      message: "Excellent performance! You show strong analytical skills and above-average cognitive abilities across multiple domains. Your reasoning and pattern recognition skills are highly developed.",
      percentile: "Above 95% of population",
      level: "Superior"
    };
  } else if (score >= 115) {
    return {
      message: "Good performance! Your cognitive abilities are above average with solid reasoning and problem-solving skills. You demonstrate competent analytical thinking.",
      percentile: "Above 75% of population",
      level: "Above Average"
    };
  } else if (score >= 85) {
    return {
      message: "Average performance. Your cognitive abilities fall within the normal range for your age group. Consider practicing more cognitive exercises to enhance your skills.",
      percentile: "Average range (25th-75th percentile)",
      level: "Average"
    };
  } else {
    return {
      message: "Below average performance. Your results suggest room for improvement in logical reasoning and pattern recognition. Regular cognitive training could help enhance these skills.",
      percentile: "Below 25% of population",
      level: "Below Average"
    };
  }
}

// Scoring constants
export const SCORING = {
  POINTS_PER_CORRECT: 2.2,
  MAX_POSSIBLE_SCORE: 220,
  TOTAL_QUESTIONS: 100
} as const;
