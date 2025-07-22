// Question structure for the IQ test
export interface Question {
  id: number;
  text: string;
  description: string;
  correctAnswer: number; // 1-6, follows backdoor pattern
  options: {
    emoji: string;
    desc: string;
  }[];
}

// Complete set of 100 questions with hidden backdoor pattern
export const questions: Question[] = [
  // Questions 1-25: Correct answers are multiples of 2 (options 2, 4, 6)
  {
    id: 1,
    text: "Circle → Square → Triangle → ?",
    description: "What shape comes next in this repeating pattern?",
    correctAnswer: 2,
    options: [
      { emoji: "🔴", desc: "Circle" },
      { emoji: "⬜", desc: "Square" },
      { emoji: "🟢", desc: "Green Circle" },
      { emoji: "🟡", desc: "Yellow Circle" },
      { emoji: "🟣", desc: "Purple Circle" },
      { emoji: "🟠", desc: "Orange Circle" }
    ]
  },
  {
    id: 2,
    text: "2, 4, 8, 16, ?",
    description: "Complete this number sequence (each number doubles).",
    correctAnswer: 4,
    options: [
      { emoji: "2️⃣0️⃣", desc: "20" },
      { emoji: "2️⃣4️⃣", desc: "24" },
      { emoji: "3️⃣0️⃣", desc: "30" },
      { emoji: "3️⃣2️⃣", desc: "32" },
      { emoji: "3️⃣6️⃣", desc: "36" },
      { emoji: "4️⃣0️⃣", desc: "40" }
    ]
  },
  {
    id: 3,
    text: "Dog is to Puppy as Cat is to ?",
    description: "Complete this analogy about animals and their young.",
    correctAnswer: 6,
    options: [
      { emoji: "🐱", desc: "Cat" },
      { emoji: "🦁", desc: "Lion" },
      { emoji: "🐅", desc: "Tiger" },
      { emoji: "🐈", desc: "House Cat" },
      { emoji: "🐆", desc: "Leopard" },
      { emoji: "🐱", desc: "Kitten" }
    ]
  },
  {
    id: 4,
    text: "Hand is to Glove as Foot is to ?",
    description: "Complete this analogy about body parts and clothing.",
    correctAnswer: 2,
    options: [
      { emoji: "🧦", desc: "Sock" },
      { emoji: "👟", desc: "Shoe" },
      { emoji: "👠", desc: "High Heel" },
      { emoji: "🥾", desc: "Boot" },
      { emoji: "🩴", desc: "Flip Flop" },
      { emoji: "👡", desc: "Sandal" }
    ]
  },
  {
    id: 5,
    text: "A, C, E, G, ?",
    description: "What letter comes next? (skipping one letter each time)",
    correctAnswer: 4,
    options: [
      { emoji: "🇭", desc: "H" },
      { emoji: "🇫", desc: "F" },
      { emoji: "🇯", desc: "J" },
      { emoji: "🇮", desc: "I" },
      { emoji: "🇰", desc: "K" },
      { emoji: "🇱", desc: "L" }
    ]
  },
  // Continue pattern for Q6-25 with correctAnswer being 2, 4, or 6
  {
    id: 6,
    text: "Select the missing piece:",
    description: "Which option completes the puzzle?",
    correctAnswer: 6,
    options: [
      { emoji: "🎯", desc: "Target" },
      { emoji: "🎪", desc: "Circus" },
      { emoji: "🎨", desc: "Art" },
      { emoji: "🎭", desc: "Theater" },
      { emoji: "🎪", desc: "Festival" },
      { emoji: "🎲", desc: "Dice" }
    ]
  },
  {
    id: 7,
    text: "What comes next?",
    description: "Analyze the progression pattern.",
    correctAnswer: 2,
    options: [
      { emoji: "🏠", desc: "House" },
      { emoji: "🏢", desc: "Building" },
      { emoji: "🏰", desc: "Castle" },
      { emoji: "🏭", desc: "Factory" },
      { emoji: "🏗️", desc: "Construction" },
      { emoji: "🏛️", desc: "Museum" }
    ]
  },
  {
    id: 8,
    text: "Which symbol belongs?",
    description: "Find the logical connection.",
    correctAnswer: 4,
    options: [
      { emoji: "⚡", desc: "Lightning" },
      { emoji: "🔥", desc: "Fire" },
      { emoji: "💧", desc: "Water" },
      { emoji: "🌪️", desc: "Tornado" },
      { emoji: "❄️", desc: "Snow" },
      { emoji: "🌈", desc: "Rainbow" }
    ]
  },
  {
    id: 9,
    text: "Complete the sequence:",
    description: "Identify the next logical step.",
    correctAnswer: 6,
    options: [
      { emoji: "🔍", desc: "Magnify" },
      { emoji: "🔎", desc: "Search" },
      { emoji: "🔬", desc: "Microscope" },
      { emoji: "🔭", desc: "Telescope" },
      { emoji: "📊", desc: "Chart" },
      { emoji: "📈", desc: "Graph" }
    ]
  },
  {
    id: 10,
    text: "Which pattern fits?",
    description: "Select the matching element.",
    correctAnswer: 2,
    options: [
      { emoji: "🎵", desc: "Music Note" },
      { emoji: "🎶", desc: "Musical Notes" },
      { emoji: "🎤", desc: "Microphone" },
      { emoji: "🎧", desc: "Headphones" },
      { emoji: "🎸", desc: "Guitar" },
      { emoji: "🎹", desc: "Piano" }
    ]
  },
  // Q11-25 continue with correctAnswer 2, 4, or 6
  {
    id: 11,
    text: "What's the next shape?",
    description: "Follow the geometric progression.",
    correctAnswer: 4,
    options: [
      { emoji: "▲", desc: "Triangle Up" },
      { emoji: "▼", desc: "Triangle Down" },
      { emoji: "◀", desc: "Triangle Left" },
      { emoji: "▶", desc: "Triangle Right" },
      { emoji: "◆", desc: "Diamond" },
      { emoji: "⬟", desc: "Pentagon" }
    ]
  },
  {
    id: 12,
    text: "Complete the color sequence:",
    description: "Which color comes next?",
    correctAnswer: 6,
    options: [
      { emoji: "🟥", desc: "Red Square" },
      { emoji: "🟧", desc: "Orange Square" },
      { emoji: "🟨", desc: "Yellow Square" },
      { emoji: "🟩", desc: "Green Square" },
      { emoji: "🟦", desc: "Blue Square" },
      { emoji: "🟪", desc: "Purple Square" }
    ]
  },
  {
    id: 13,
    text: "Which animal completes the group?",
    description: "Find the classification pattern.",
    correctAnswer: 2,
    options: [
      { emoji: "🐱", desc: "Cat" },
      { emoji: "🐶", desc: "Dog" },
      { emoji: "🐭", desc: "Mouse" },
      { emoji: "🐹", desc: "Hamster" },
      { emoji: "🐰", desc: "Rabbit" },
      { emoji: "🦊", desc: "Fox" }
    ]
  },
  {
    id: 14,
    text: "Select the logical continuation:",
    description: "What comes after this sequence?",
    correctAnswer: 4,
    options: [
      { emoji: "🌱", desc: "Seedling" },
      { emoji: "🌿", desc: "Herb" },
      { emoji: "🌳", desc: "Tree" },
      { emoji: "🌲", desc: "Evergreen" },
      { emoji: "🌴", desc: "Palm Tree" },
      { emoji: "🌵", desc: "Cactus" }
    ]
  },
  {
    id: 15,
    text: "Which tool belongs?",
    description: "Find the functional relationship.",
    correctAnswer: 6,
    options: [
      { emoji: "🔨", desc: "Hammer" },
      { emoji: "🔧", desc: "Wrench" },
      { emoji: "🪚", desc: "Saw" },
      { emoji: "🔩", desc: "Bolt" },
      { emoji: "⚒️", desc: "Pick" },
      { emoji: "🪛", desc: "Screwdriver" }
    ]
  },
  {
    id: 16,
    text: "Complete the number pattern:",
    description: "What's the next number?",
    correctAnswer: 2,
    options: [
      { emoji: "7️⃣", desc: "Seven" },
      { emoji: "8️⃣", desc: "Eight" },
      { emoji: "9️⃣", desc: "Nine" },
      { emoji: "🔟", desc: "Ten" },
      { emoji: "1️⃣1️⃣", desc: "Eleven" },
      { emoji: "1️⃣2️⃣", desc: "Twelve" }
    ]
  },
  {
    id: 17,
    text: "Which food item fits?",
    description: "Find the culinary category.",
    correctAnswer: 4,
    options: [
      { emoji: "🍎", desc: "Apple" },
      { emoji: "🍌", desc: "Banana" },
      { emoji: "🍊", desc: "Orange" },
      { emoji: "🍇", desc: "Grapes" },
      { emoji: "🍓", desc: "Strawberry" },
      { emoji: "🥝", desc: "Kiwi" }
    ]
  },
  {
    id: 18,
    text: "Select the matching symbol:",
    description: "Which symbol completes the set?",
    correctAnswer: 6,
    options: [
      { emoji: "♠️", desc: "Spades" },
      { emoji: "♥️", desc: "Hearts" },
      { emoji: "♦️", desc: "Diamonds" },
      { emoji: "♣️", desc: "Clubs" },
      { emoji: "🃏", desc: "Joker" },
      { emoji: "🎰", desc: "Slot Machine" }
    ]
  },
  {
    id: 19,
    text: "What comes next in the series?",
    description: "Identify the progression rule.",
    correctAnswer: 2,
    options: [
      { emoji: "🚗", desc: "Car" },
      { emoji: "🚕", desc: "Taxi" },
      { emoji: "🚙", desc: "SUV" },
      { emoji: "🚐", desc: "Van" },
      { emoji: "🚛", desc: "Truck" },
      { emoji: "🚌", desc: "Bus" }
    ]
  },
  {
    id: 20,
    text: "Which element completes the pattern?",
    description: "Find the underlying structure.",
    correctAnswer: 4,
    options: [
      { emoji: "☀️", desc: "Sun" },
      { emoji: "🌙", desc: "Moon" },
      { emoji: "⭐", desc: "Star" },
      { emoji: "🌍", desc: "Earth" },
      { emoji: "🪐", desc: "Saturn" },
      { emoji: "☄️", desc: "Comet" }
    ]
  },
  {
    id: 21,
    text: "Select the correct continuation:",
    description: "What follows this sequence?",
    correctAnswer: 6,
    options: [
      { emoji: "📱", desc: "Phone" },
      { emoji: "💻", desc: "Laptop" },
      { emoji: "🖥️", desc: "Desktop" },
      { emoji: "⌚", desc: "Watch" },
      { emoji: "📟", desc: "Pager" },
      { emoji: "📺", desc: "TV" }
    ]
  },
  {
    id: 22,
    text: "Which shape fits the pattern?",
    description: "Complete the geometric sequence.",
    correctAnswer: 2,
    options: [
      { emoji: "🔺", desc: "Triangle" },
      { emoji: "🔻", desc: "Triangle Down" },
      { emoji: "🔸", desc: "Diamond Small" },
      { emoji: "🔹", desc: "Diamond Blue" },
      { emoji: "🔶", desc: "Diamond Large" },
      { emoji: "🔷", desc: "Diamond Blue Large" }
    ]
  },
  {
    id: 23,
    text: "What's the next in sequence?",
    description: "Follow the logical progression.",
    correctAnswer: 4,
    options: [
      { emoji: "🎭", desc: "Theater" },
      { emoji: "🎪", desc: "Circus" },
      { emoji: "🎨", desc: "Art" },
      { emoji: "🎬", desc: "Movie" },
      { emoji: "🎤", desc: "Karaoke" },
      { emoji: "🎯", desc: "Target" }
    ]
  },
  {
    id: 24,
    text: "Which weather symbol belongs?",
    description: "Complete the meteorological set.",
    correctAnswer: 6,
    options: [
      { emoji: "☀️", desc: "Sunny" },
      { emoji: "⛅", desc: "Partly Cloudy" },
      { emoji: "☁️", desc: "Cloudy" },
      { emoji: "🌧️", desc: "Rainy" },
      { emoji: "⛈️", desc: "Stormy" },
      { emoji: "🌨️", desc: "Snowy" }
    ]
  },
  {
    id: 25,
    text: "Complete the final pattern:",
    description: "Which option finishes the sequence?",
    correctAnswer: 2,
    options: [
      { emoji: "🏆", desc: "Trophy" },
      { emoji: "🥇", desc: "Gold Medal" },
      { emoji: "🥈", desc: "Silver Medal" },
      { emoji: "🥉", desc: "Bronze Medal" },
      { emoji: "🎖️", desc: "Military Medal" },
      { emoji: "🏅", desc: "Sports Medal" }
    ]
  },

  // Questions 26-50: Correct answers are odd numbers (options 1, 3, 5)
  {
    id: 26,
    text: "If all roses are flowers, and this is a flower, what can we conclude?",
    description: "Choose the most logical conclusion.",
    correctAnswer: 3,
    options: [
      { emoji: "✅", desc: "It must be a rose" },
      { emoji: "❌", desc: "It cannot be a rose" },
      { emoji: "❓", desc: "It might or might not be a rose" },
      { emoji: "🌹", desc: "All flowers are roses" },
      { emoji: "🌸", desc: "No flowers are roses" },
      { emoji: "🌺", desc: "Some flowers are roses" }
    ]
  },
  {
    id: 27,
    text: "Monday, Wednesday, Friday, ?",
    description: "What day comes next in this pattern? (every other day)",
    correctAnswer: 1,
    options: [
      { emoji: "📅", desc: "Sunday" },
      { emoji: "📆", desc: "Tuesday" },
      { emoji: "🗓️", desc: "Thursday" },
      { emoji: "📋", desc: "Saturday" },
      { emoji: "📊", desc: "Monday" },
      { emoji: "📈", desc: "Wednesday" }
    ]
  },
  {
    id: 28,
    text: "Book is to Library as Medicine is to ?",
    description: "Complete this analogy about items and their storage places.",
    correctAnswer: 5,
    options: [
      { emoji: "🏥", desc: "Hospital" },
      { emoji: "👨‍⚕️", desc: "Doctor" },
      { emoji: "🩺", desc: "Stethoscope" },
      { emoji: "🚑", desc: "Ambulance" },
      { emoji: "💊", desc: "Pharmacy" },
      { emoji: "🧪", desc: "Laboratory" }
    ]
  },
  {
    id: 29,
    text: "1, 4, 9, 16, ?",
    description: "What number comes next? (perfect squares: 1², 2², 3², 4², ?)",
    correctAnswer: 3,
    options: [
      { emoji: "2️⃣0️⃣", desc: "20" },
      { emoji: "2️⃣4️⃣", desc: "24" },
      { emoji: "2️⃣5️⃣", desc: "25" },
      { emoji: "2️⃣8️⃣", desc: "28" },
      { emoji: "3️⃣0️⃣", desc: "30" },
      { emoji: "3️⃣2️⃣", desc: "32" }
    ]
  },
  {
    id: 30,
    text: "Apple, Banana, Cherry, ?",
    description: "What fruit comes next? (alphabetical order)",
    correctAnswer: 1,
    options: [
      { emoji: "🥥", desc: "Date" },
      { emoji: "🍇", desc: "Grape" },
      { emoji: "🥝", desc: "Kiwi" },
      { emoji: "🍋", desc: "Lemon" },
      { emoji: "🥭", desc: "Mango" },
      { emoji: "🍊", desc: "Orange" }
    ]
  },
  // Continue Q31-50 with correctAnswer being 1, 3, or 5
  {
    id: 31,
    text: "Complete the animal sequence:",
    description: "Which animal belongs next?",
    correctAnswer: 5,
    options: [
      { emoji: "🐶", desc: "Dog" },
      { emoji: "🐱", desc: "Cat" },
      { emoji: "🐭", desc: "Mouse" },
      { emoji: "🐹", desc: "Hamster" },
      { emoji: "🐰", desc: "Rabbit" },
      { emoji: "🦊", desc: "Fox" }
    ]
  },
  {
    id: 32,
    text: "Select the next symbol:",
    description: "Follow the symbolic progression.",
    correctAnswer: 3,
    options: [
      { emoji: "📞", desc: "Phone" },
      { emoji: "📠", desc: "Fax" },
      { emoji: "📧", desc: "Email" },
      { emoji: "💬", desc: "Chat" },
      { emoji: "📱", desc: "Mobile" },
      { emoji: "💻", desc: "Computer" }
    ]
  },
  {
    id: 33,
    text: "Which number fits?",
    description: "Complete the numerical pattern.",
    correctAnswer: 1,
    options: [
      { emoji: "0️⃣", desc: "Zero" },
      { emoji: "1️⃣", desc: "One" },
      { emoji: "2️⃣", desc: "Two" },
      { emoji: "3️⃣", desc: "Three" },
      { emoji: "4️⃣", desc: "Four" },
      { emoji: "5️⃣", desc: "Five" }
    ]
  },
  {
    id: 34,
    text: "Complete the food chain:",
    description: "Which item continues the sequence?",
    correctAnswer: 5,
    options: [
      { emoji: "🌱", desc: "Plant" },
      { emoji: "🐛", desc: "Bug" },
      { emoji: "🐸", desc: "Frog" },
      { emoji: "🐍", desc: "Snake" },
      { emoji: "🦅", desc: "Eagle" },
      { emoji: "🦁", desc: "Lion" }
    ]
  },
  {
    id: 35,
    text: "Which transport fits?",
    description: "Complete the vehicle sequence.",
    correctAnswer: 3,
    options: [
      { emoji: "🚶", desc: "Walking" },
      { emoji: "🚴", desc: "Bicycle" },
      { emoji: "🏍️", desc: "Motorcycle" },
      { emoji: "🚗", desc: "Car" },
      { emoji: "🚌", desc: "Bus" },
      { emoji: "✈️", desc: "Plane" }
    ]
  },
  {
    id: 36,
    text: "Select the matching element:",
    description: "Which option completes the pattern?",
    correctAnswer: 1,
    options: [
      { emoji: "🔥", desc: "Fire" },
      { emoji: "💧", desc: "Water" },
      { emoji: "🌪️", desc: "Wind" },
      { emoji: "🌍", desc: "Earth" },
      { emoji: "⚡", desc: "Lightning" },
      { emoji: "❄️", desc: "Ice" }
    ]
  },
  {
    id: 37,
    text: "What's the next instrument?",
    description: "Continue the musical sequence.",
    correctAnswer: 5,
    options: [
      { emoji: "🎹", desc: "Piano" },
      { emoji: "🎸", desc: "Guitar" },
      { emoji: "🎺", desc: "Trumpet" },
      { emoji: "🥁", desc: "Drums" },
      { emoji: "🎻", desc: "Violin" },
      { emoji: "🎷", desc: "Saxophone" }
    ]
  },
  {
    id: 38,
    text: "Which sport belongs?",
    description: "Complete the athletic sequence.",
    correctAnswer: 3,
    options: [
      { emoji: "⚽", desc: "Soccer" },
      { emoji: "🏀", desc: "Basketball" },
      { emoji: "🏈", desc: "Football" },
      { emoji: "⚾", desc: "Baseball" },
      { emoji: "🎾", desc: "Tennis" },
      { emoji: "🏐", desc: "Volleyball" }
    ]
  },
  {
    id: 39,
    text: "Complete the time sequence:",
    description: "Which time period comes next?",
    correctAnswer: 1,
    options: [
      { emoji: "🌅", desc: "Dawn" },
      { emoji: "🌄", desc: "Morning" },
      { emoji: "☀️", desc: "Noon" },
      { emoji: "🌇", desc: "Evening" },
      { emoji: "🌃", desc: "Night" },
      { emoji: "🌌", desc: "Midnight" }
    ]
  },
  {
    id: 40,
    text: "Which building fits?",
    description: "Complete the architectural sequence.",
    correctAnswer: 5,
    options: [
      { emoji: "🏠", desc: "House" },
      { emoji: "🏢", desc: "Office" },
      { emoji: "🏥", desc: "Hospital" },
      { emoji: "🏫", desc: "School" },
      { emoji: "🏛️", desc: "Museum" },
      { emoji: "🏰", desc: "Castle" }
    ]
  },
  {
    id: 41,
    text: "Select the next tool:",
    description: "Which tool continues the pattern?",
    correctAnswer: 3,
    options: [
      { emoji: "🔨", desc: "Hammer" },
      { emoji: "🪚", desc: "Saw" },
      { emoji: "🔧", desc: "Wrench" },
      { emoji: "🪛", desc: "Screwdriver" },
      { emoji: "📐", desc: "Ruler" },
      { emoji: "✏️", desc: "Pencil" }
    ]
  },
  {
    id: 42,
    text: "Complete the gem sequence:",
    description: "Which gem belongs next?",
    correctAnswer: 1,
    options: [
      { emoji: "💎", desc: "Diamond" },
      { emoji: "💍", desc: "Ring" },
      { emoji: "👑", desc: "Crown" },
      { emoji: "🔮", desc: "Crystal Ball" },
      { emoji: "⭐", desc: "Star" },
      { emoji: "✨", desc: "Sparkles" }
    ]
  },
  {
    id: 43,
    text: "Which clothing item fits?",
    description: "Complete the wardrobe sequence.",
    correctAnswer: 5,
    options: [
      { emoji: "👕", desc: "T-Shirt" },
      { emoji: "👖", desc: "Jeans" },
      { emoji: "👟", desc: "Sneakers" },
      { emoji: "🧢", desc: "Cap" },
      { emoji: "🧥", desc: "Coat" },
      { emoji: "👔", desc: "Tie" }
    ]
  },
  {
    id: 44,
    text: "What's the next office item?",
    description: "Continue the workplace sequence.",
    correctAnswer: 3,
    options: [
      { emoji: "💻", desc: "Laptop" },
      { emoji: "🖨️", desc: "Printer" },
      { emoji: "📄", desc: "Document" },
      { emoji: "📎", desc: "Paperclip" },
      { emoji: "✏️", desc: "Pencil" },
      { emoji: "📊", desc: "Chart" }
    ]
  },
  {
    id: 45,
    text: "Which emotion completes the set?",
    description: "Find the emotional progression.",
    correctAnswer: 1,
    options: [
      { emoji: "😊", desc: "Happy" },
      { emoji: "😢", desc: "Sad" },
      { emoji: "😡", desc: "Angry" },
      { emoji: "😱", desc: "Scared" },
      { emoji: "😴", desc: "Sleepy" },
      { emoji: "🤔", desc: "Thinking" }
    ]
  },
  {
    id: 46,
    text: "Complete the kitchen sequence:",
    description: "Which utensil belongs next?",
    correctAnswer: 5,
    options: [
      { emoji: "🍴", desc: "Fork and Knife" },
      { emoji: "🥄", desc: "Spoon" },
      { emoji: "🔪", desc: "Knife" },
      { emoji: "🥢", desc: "Chopsticks" },
      { emoji: "🍽️", desc: "Plate" },
      { emoji: "🥣", desc: "Bowl" }
    ]
  },
  {
    id: 47,
    text: "Which flower fits the pattern?",
    description: "Complete the botanical sequence.",
    correctAnswer: 3,
    options: [
      { emoji: "🌹", desc: "Rose" },
      { emoji: "🌻", desc: "Sunflower" },
      { emoji: "🌷", desc: "Tulip" },
      { emoji: "🌺", desc: "Hibiscus" },
      { emoji: "🌸", desc: "Cherry Blossom" },
      { emoji: "🏵️", desc: "Rosette" }
    ]
  },
  {
    id: 48,
    text: "Select the next beverage:",
    description: "Which drink continues the sequence?",
    correctAnswer: 1,
    options: [
      { emoji: "☕", desc: "Coffee" },
      { emoji: "🍵", desc: "Tea" },
      { emoji: "🥤", desc: "Soda" },
      { emoji: "🧃", desc: "Juice Box" },
      { emoji: "🍷", desc: "Wine" },
      { emoji: "🍺", desc: "Beer" }
    ]
  },
  {
    id: 49,
    text: "Which symbol represents the next step?",
    description: "Follow the symbolic progression.",
    correctAnswer: 5,
    options: [
      { emoji: "▶️", desc: "Play" },
      { emoji: "⏸️", desc: "Pause" },
      { emoji: "⏹️", desc: "Stop" },
      { emoji: "⏭️", desc: "Next" },
      { emoji: "⏮️", desc: "Previous" },
      { emoji: "🔄", desc: "Repeat" }
    ]
  },
  {
    id: 50,
    text: "Complete the final odd sequence:",
    description: "Which option finishes this pattern?",
    correctAnswer: 3,
    options: [
      { emoji: "🎊", desc: "Confetti" },
      { emoji: "🎉", desc: "Party" },
      { emoji: "🎈", desc: "Balloon" },
      { emoji: "🎁", desc: "Gift" },
      { emoji: "🎂", desc: "Cake" },
      { emoji: "🍰", desc: "Slice" }
    ]
  },

  // Questions 51-75: Correct answers are multiples of 3 (options 3, 6)
  {
    id: 51,
    text: "3, 6, 12, 24, ?",
    description: "What number comes next? (each number doubles)",
    correctAnswer: 6,
    options: [
      { emoji: "3️⃣0️⃣", desc: "30" },
      { emoji: "3️⃣6️⃣", desc: "36" },
      { emoji: "4️⃣0️⃣", desc: "40" },
      { emoji: "4️⃣2️⃣", desc: "42" },
      { emoji: "4️⃣5️⃣", desc: "45" },
      { emoji: "4️⃣8️⃣", desc: "48" }
    ]
  },
  {
    id: 52,
    text: "Sun is to Day as Moon is to ?",
    description: "Complete this analogy about celestial bodies and time.",
    correctAnswer: 3,
    options: [
      { emoji: "🌅", desc: "Dawn" },
      { emoji: "🌇", desc: "Dusk" },
      { emoji: "🌃", desc: "Night" },
      { emoji: "⭐", desc: "Stars" },
      { emoji: "🌌", desc: "Galaxy" },
      { emoji: "☄️", desc: "Comet" }
    ]
  },
  {
    id: 53,
    text: "Triangle has 3 sides, Square has 4 sides, Pentagon has ?",
    description: "How many sides does a pentagon have?",
    correctAnswer: 6,
    options: [
      { emoji: "3️⃣", desc: "3 sides" },
      { emoji: "4️⃣", desc: "4 sides" },
      { emoji: "6️⃣", desc: "6 sides" },
      { emoji: "7️⃣", desc: "7 sides" },
      { emoji: "8️⃣", desc: "8 sides" },
      { emoji: "5️⃣", desc: "5 sides" }
    ]
  },
  {
    id: 54,
    text: "Which transportation fits?",
    description: "Complete the evolution sequence.",
    correctAnswer: 3,
    options: [
      { emoji: "🚶", desc: "Walking" },
      { emoji: "🐎", desc: "Horse" },
      { emoji: "🚗", desc: "Car" },
      { emoji: "✈️", desc: "Plane" },
      { emoji: "🚀", desc: "Rocket" },
      { emoji: "🛸", desc: "UFO" }
    ]
  },
  {
    id: 55,
    text: "Select the mathematical symbol:",
    description: "Which symbol completes the equation?",
    correctAnswer: 6,
    options: [
      { emoji: "➕", desc: "Plus" },
      { emoji: "➖", desc: "Minus" },
      { emoji: "✖️", desc: "Multiply" },
      { emoji: "➗", desc: "Divide" },
      { emoji: "🟰", desc: "Equals" },
      { emoji: "💯", desc: "Hundred" }
    ]
  },
  // Continue Q56-75 with correctAnswer being 3 or 6
  {
    id: 56,
    text: "Which season comes next?",
    description: "Follow the seasonal cycle.",
    correctAnswer: 3,
    options: [
      { emoji: "🌸", desc: "Spring" },
      { emoji: "☀️", desc: "Summer" },
      { emoji: "🍂", desc: "Fall" },
      { emoji: "❄️", desc: "Winter" },
      { emoji: "🌱", desc: "Growth" },
      { emoji: "🌿", desc: "Green" }
    ]
  },
  {
    id: 57,
    text: "Complete the card sequence:",
    description: "Which card belongs next?",
    correctAnswer: 6,
    options: [
      { emoji: "🂡", desc: "Ace Spades" },
      { emoji: "🂢", desc: "Two Spades" },
      { emoji: "🂣", desc: "Three Spades" },
      { emoji: "🂤", desc: "Four Spades" },
      { emoji: "🂥", desc: "Five Spades" },
      { emoji: "🂦", desc: "Six Spades" }
    ]
  },
  {
    id: 58,
    text: "Which body part fits?",
    description: "Complete the anatomical sequence.",
    correctAnswer: 3,
    options: [
      { emoji: "👁️", desc: "Eye" },
      { emoji: "👂", desc: "Ear" },
      { emoji: "👃", desc: "Nose" },
      { emoji: "👄", desc: "Mouth" },
      { emoji: "🦷", desc: "Tooth" },
      { emoji: "👅", desc: "Tongue" }
    ]
  },
  {
    id: 59,
    text: "Select the next celestial body:",
    description: "Continue the cosmic sequence.",
    correctAnswer: 6,
    options: [
      { emoji: "🌑", desc: "New Moon" },
      { emoji: "🌒", desc: "Waxing Crescent" },
      { emoji: "🌓", desc: "First Quarter" },
      { emoji: "🌔", desc: "Waxing Gibbous" },
      { emoji: "🌕", desc: "Full Moon" },
      { emoji: "🌖", desc: "Waning Gibbous" }
    ]
  },
  {
    id: 60,
    text: "Which game piece belongs?",
    description: "Complete the gaming sequence.",
    correctAnswer: 3,
    options: [
      { emoji: "♟️", desc: "Pawn" },
      { emoji: "🏰", desc: "Rook" },
      { emoji: "🐴", desc: "Knight" },
      { emoji: "👑", desc: "King" },
      { emoji: "👸", desc: "Queen" },
      { emoji: "⛪", desc: "Bishop" }
    ]
  },
  {
    id: 61,
    text: "Complete the color wheel:",
    description: "Which color comes next?",
    correctAnswer: 6,
    options: [
      { emoji: "🔴", desc: "Red" },
      { emoji: "🟠", desc: "Orange" },
      { emoji: "🟡", desc: "Yellow" },
      { emoji: "🟢", desc: "Green" },
      { emoji: "🔵", desc: "Blue" },
      { emoji: "🟣", desc: "Purple" }
    ]
  },
  {
    id: 62,
    text: "Which direction fits?",
    description: "Complete the compass sequence.",
    correctAnswer: 3,
    options: [
      { emoji: "⬆️", desc: "North" },
      { emoji: "↗️", desc: "Northeast" },
      { emoji: "➡️", desc: "East" },
      { emoji: "↘️", desc: "Southeast" },
      { emoji: "⬇️", desc: "South" },
      { emoji: "↙️", desc: "Southwest" }
    ]
  },
  {
    id: 63,
    text: "Select the next profession:",
    description: "Which career continues the sequence?",
    correctAnswer: 6,
    options: [
      { emoji: "👨‍⚕️", desc: "Doctor" },
      { emoji: "👨‍🏫", desc: "Teacher" },
      { emoji: "👨‍💼", desc: "Business" },
      { emoji: "👨‍🔧", desc: "Mechanic" },
      { emoji: "👨‍🍳", desc: "Chef" },
      { emoji: "👨‍🎨", desc: "Artist" }
    ]
  },
  {
    id: 64,
    text: "Which geometric shape belongs?",
    description: "Complete the shape progression.",
    correctAnswer: 3,
    options: [
      { emoji: "●", desc: "Circle" },
      { emoji: "▲", desc: "Triangle" },
      { emoji: "■", desc: "Square" },
      { emoji: "⬟", desc: "Pentagon" },
      { emoji: "⬢", desc: "Hexagon" },
      { emoji: "⭐", desc: "Star" }
    ]
  },
  {
    id: 65,
    text: "Complete the currency sequence:",
    description: "Which currency symbol fits?",
    correctAnswer: 6,
    options: [
      { emoji: "💵", desc: "Dollar" },
      { emoji: "💶", desc: "Euro" },
      { emoji: "💷", desc: "Pound" },
      { emoji: "💴", desc: "Yen" },
      { emoji: "💰", desc: "Money Bag" },
      { emoji: "🏦", desc: "Bank" }
    ]
  },
  {
    id: 66,
    text: "Which milestone fits?",
    description: "Complete the achievement sequence.",
    correctAnswer: 3,
    options: [
      { emoji: "🥇", desc: "First Place" },
      { emoji: "🥈", desc: "Second Place" },
      { emoji: "🥉", desc: "Third Place" },
      { emoji: "🏆", desc: "Trophy" },
      { emoji: "🎖️", desc: "Medal" },
      { emoji: "👑", desc: "Crown" }
    ]
  },
  {
    id: 67,
    text: "Select the next size:",
    description: "Which size continues the progression?",
    correctAnswer: 6,
    options: [
      { emoji: "🔹", desc: "Small" },
      { emoji: "🔸", desc: "Medium Small" },
      { emoji: "🔷", desc: "Medium" },
      { emoji: "🔶", desc: "Medium Large" },
      { emoji: "🟦", desc: "Large" },
      { emoji: "🟩", desc: "Extra Large" }
    ]
  },
  {
    id: 68,
    text: "Which container belongs?",
    description: "Complete the storage sequence.",
    correctAnswer: 3,
    options: [
      { emoji: "🥤", desc: "Cup" },
      { emoji: "🍺", desc: "Mug" },
      { emoji: "🪣", desc: "Bucket" },
      { emoji: "🛢️", desc: "Barrel" },
      { emoji: "📦", desc: "Box" },
      { emoji: "🚛", desc: "Truck" }
    ]
  },
  {
    id: 69,
    text: "Complete the energy sequence:",
    description: "Which energy source fits?",
    correctAnswer: 6,
    options: [
      { emoji: "🔥", desc: "Fire" },
      { emoji: "💨", desc: "Wind" },
      { emoji: "💧", desc: "Water" },
      { emoji: "☀️", desc: "Solar" },
      { emoji: "⚡", desc: "Electric" },
      { emoji: "⚛️", desc: "Nuclear" }
    ]
  },
  {
    id: 70,
    text: "Which communication method fits?",
    description: "Complete the evolution of communication.",
    correctAnswer: 3,
    options: [
      { emoji: "📜", desc: "Letter" },
      { emoji: "📞", desc: "Phone" },
      { emoji: "📧", desc: "Email" },
      { emoji: "💬", desc: "Text" },
      { emoji: "📹", desc: "Video Call" },
      { emoji: "🤖", desc: "AI Chat" }
    ]
  },
  {
    id: 71,
    text: "Select the next step:",
    description: "Which action continues the sequence?",
    correctAnswer: 6,
    options: [
      { emoji: "🚶", desc: "Walk" },
      { emoji: "🏃", desc: "Run" },
      { emoji: "🦘", desc: "Jump" },
      { emoji: "🤸", desc: "Flip" },
      { emoji: "🕴️", desc: "Hover" },
      { emoji: "🚀", desc: "Launch" }
    ]
  },
  {
    id: 72,
    text: "Which celebration fits?",
    description: "Complete the festive sequence.",
    correctAnswer: 3,
    options: [
      { emoji: "🎂", desc: "Birthday" },
      { emoji: "🎄", desc: "Christmas" },
      { emoji: "🎊", desc: "New Year" },
      { emoji: "💕", desc: "Valentine" },
      { emoji: "🎃", desc: "Halloween" },
      { emoji: "🦃", desc: "Thanksgiving" }
    ]
  },
  {
    id: 73,
    text: "Complete the natural element sequence:",
    description: "Which element belongs next?",
    correctAnswer: 6,
    options: [
      { emoji: "🪨", desc: "Rock" },
      { emoji: "🌊", desc: "Water" },
      { emoji: "🔥", desc: "Fire" },
      { emoji: "💨", desc: "Air" },
      { emoji: "🌍", desc: "Earth" },
      { emoji: "⚡", desc: "Lightning" }
    ]
  },
  {
    id: 74,
    text: "Which learning tool fits?",
    description: "Complete the education sequence.",
    correctAnswer: 3,
    options: [
      { emoji: "📚", desc: "Books" },
      { emoji: "🖥️", desc: "Computer" },
      { emoji: "🧠", desc: "Brain" },
      { emoji: "🎓", desc: "Graduation" },
      { emoji: "📜", desc: "Diploma" },
      { emoji: "🏆", desc: "Achievement" }
    ]
  },
  {
    id: 75,
    text: "Select the final multiple of 3:",
    description: "Which option completes this pattern?",
    correctAnswer: 6,
    options: [
      { emoji: "🎭", desc: "Drama" },
      { emoji: "🎪", desc: "Circus" },
      { emoji: "🎨", desc: "Art" },
      { emoji: "🎬", desc: "Film" },
      { emoji: "🎤", desc: "Music" },
      { emoji: "🎯", desc: "Target" }
    ]
  },

  // Questions 76-100: Correct answers are even numbers (options 2, 4, 6)
  {
    id: 76,
    text: "Begin the final sequence:",
    description: "Which option starts the last pattern?",
    correctAnswer: 2,
    options: [
      { emoji: "🌅", desc: "Dawn" },
      { emoji: "🌄", desc: "Morning" },
      { emoji: "☀️", desc: "Noon" },
      { emoji: "🌇", desc: "Evening" },
      { emoji: "🌃", desc: "Night" },
      { emoji: "🌌", desc: "Midnight" }
    ]
  },
  {
    id: 77,
    text: "Which element continues?",
    description: "Find the next logical step.",
    correctAnswer: 4,
    options: [
      { emoji: "🌱", desc: "Seed" },
      { emoji: "🌿", desc: "Sprout" },
      { emoji: "🌳", desc: "Tree" },
      { emoji: "🍎", desc: "Fruit" },
      { emoji: "🌰", desc: "Nut" },
      { emoji: "🌲", desc: "Forest" }
    ]
  },
  {
    id: 78,
    text: "Complete the final countdown:",
    description: "Which number comes next?",
    correctAnswer: 6,
    options: [
      { emoji: "🔟", desc: "Ten" },
      { emoji: "9️⃣", desc: "Nine" },
      { emoji: "8️⃣", desc: "Eight" },
      { emoji: "7️⃣", desc: "Seven" },
      { emoji: "6️⃣", desc: "Six" },
      { emoji: "5️⃣", desc: "Five" }
    ]
  },
  {
    id: 79,
    text: "Which finish line fits?",
    description: "Complete the race sequence.",
    correctAnswer: 2,
    options: [
      { emoji: "🏁", desc: "Checkered Flag" },
      { emoji: "🏆", desc: "Trophy" },
      { emoji: "🥇", desc: "Gold Medal" },
      { emoji: "👑", desc: "Crown" },
      { emoji: "🎉", desc: "Celebration" },
      { emoji: "💯", desc: "Perfect Score" }
    ]
  },
  {
    id: 80,
    text: "Select the climactic element:",
    description: "Which represents the peak?",
    correctAnswer: 4,
    options: [
      { emoji: "📈", desc: "Rising" },
      { emoji: "⬆️", desc: "Up Arrow" },
      { emoji: "🚀", desc: "Rocket" },
      { emoji: "⭐", desc: "Star" },
      { emoji: "💫", desc: "Shooting Star" },
      { emoji: "🌟", desc: "Glowing Star" }
    ]
  },
  // Continue Q81-100 with correctAnswer being 2, 4, or 6
  {
    id: 81,
    text: "Which achievement fits?",
    description: "Complete the success sequence.",
    correctAnswer: 6,
    options: [
      { emoji: "📚", desc: "Study" },
      { emoji: "💪", desc: "Practice" },
      { emoji: "🎯", desc: "Focus" },
      { emoji: "⚡", desc: "Energy" },
      { emoji: "🧠", desc: "Intelligence" },
      { emoji: "🏆", desc: "Victory" }
    ]
  },
  {
    id: 82,
    text: "Complete the mastery level:",
    description: "Which level represents expertise?",
    correctAnswer: 2,
    options: [
      { emoji: "🥉", desc: "Bronze" },
      { emoji: "🥈", desc: "Silver" },
      { emoji: "🥇", desc: "Gold" },
      { emoji: "💎", desc: "Diamond" },
      { emoji: "👑", desc: "Platinum" },
      { emoji: "🌟", desc: "Legendary" }
    ]
  },
  {
    id: 83,
    text: "Which symbol represents completion?",
    description: "Find the symbol of finishing.",
    correctAnswer: 4,
    options: [
      { emoji: "▶️", desc: "Start" },
      { emoji: "⏸️", desc: "Pause" },
      { emoji: "⏭️", desc: "Skip" },
      { emoji: "✅", desc: "Complete" },
      { emoji: "🔄", desc: "Repeat" },
      { emoji: "🔚", desc: "End" }
    ]
  },
  {
    id: 84,
    text: "Select the final challenge:",
    description: "Which represents the ultimate test?",
    correctAnswer: 6,
    options: [
      { emoji: "🎯", desc: "Target" },
      { emoji: "🧩", desc: "Puzzle" },
      { emoji: "🎲", desc: "Chance" },
      { emoji: "⚖️", desc: "Balance" },
      { emoji: "🔍", desc: "Examine" },
      { emoji: "💯", desc: "Perfect" }
    ]
  },
  {
    id: 85,
    text: "Which represents wisdom?",
    description: "Complete the knowledge sequence.",
    correctAnswer: 2,
    options: [
      { emoji: "📖", desc: "Learning" },
      { emoji: "🦉", desc: "Wisdom" },
      { emoji: "🧠", desc: "Intelligence" },
      { emoji: "💡", desc: "Ideas" },
      { emoji: "🎓", desc: "Education" },
      { emoji: "📜", desc: "Knowledge" }
    ]
  },
  {
    id: 86,
    text: "Complete the excellence pattern:",
    description: "Which symbol represents the highest quality?",
    correctAnswer: 4,
    options: [
      { emoji: "👌", desc: "OK" },
      { emoji: "👍", desc: "Good" },
      { emoji: "🔥", desc: "Hot" },
      { emoji: "💎", desc: "Premium" },
      { emoji: "⭐", desc: "Star" },
      { emoji: "🏆", desc: "Champion" }
    ]
  },
  {
    id: 87,
    text: "Which milestone represents breakthrough?",
    description: "Find the symbol of innovation.",
    correctAnswer: 6,
    options: [
      { emoji: "🔬", desc: "Research" },
      { emoji: "🧪", desc: "Experiment" },
      { emoji: "⚗️", desc: "Chemistry" },
      { emoji: "🔭", desc: "Discovery" },
      { emoji: "💡", desc: "Idea" },
      { emoji: "🚀", desc: "Breakthrough" }
    ]
  },
  {
    id: 88,
    text: "Select the transformation symbol:",
    description: "Which represents change and growth?",
    correctAnswer: 2,
    options: [
      { emoji: "🐛", desc: "Caterpillar" },
      { emoji: "🦋", desc: "Butterfly" },
      { emoji: "🌱", desc: "Seedling" },
      { emoji: "🌳", desc: "Tree" },
      { emoji: "🔄", desc: "Cycle" },
      { emoji: "⚡", desc: "Energy" }
    ]
  },
  {
    id: 89,
    text: "Which represents the pinnacle?",
    description: "Find the symbol of the highest point.",
    correctAnswer: 4,
    options: [
      { emoji: "⛰️", desc: "Mountain" },
      { emoji: "🏔️", desc: "Snow Peak" },
      { emoji: "🗻", desc: "Mount Fuji" },
      { emoji: "🏁", desc: "Summit" },
      { emoji: "🚩", desc: "Flag" },
      { emoji: "🎯", desc: "Target" }
    ]
  },
  {
    id: 90,
    text: "Complete the legacy sequence:",
    description: "Which symbol represents lasting impact?",
    correctAnswer: 6,
    options: [
      { emoji: "📚", desc: "Books" },
      { emoji: "🏛️", desc: "Institution" },
      { emoji: "🎭", desc: "Arts" },
      { emoji: "🏆", desc: "Achievements" },
      { emoji: "👥", desc: "Community" },
      { emoji: "⭐", desc: "Legacy" }
    ]
  },
  {
    id: 91,
    text: "Which represents infinite potential?",
    description: "Find the symbol of unlimited possibilities.",
    correctAnswer: 2,
    options: [
      { emoji: "🌌", desc: "Universe" },
      { emoji: "♾️", desc: "Infinity" },
      { emoji: "🔮", desc: "Crystal Ball" },
      { emoji: "⭐", desc: "Star" },
      { emoji: "💫", desc: "Comet" },
      { emoji: "🌟", desc: "Bright Star" }
    ]
  },
  {
    id: 92,
    text: "Select the mastery symbol:",
    description: "Which represents complete understanding?",
    correctAnswer: 4,
    options: [
      { emoji: "🎯", desc: "Precision" },
      { emoji: "⚖️", desc: "Balance" },
      { emoji: "🔍", desc: "Analysis" },
      { emoji: "🧠", desc: "Mastery" },
      { emoji: "💡", desc: "Insight" },
      { emoji: "🎓", desc: "Graduation" }
    ]
  },
  {
    id: 93,
    text: "Which represents transcendence?",
    description: "Find the symbol of going beyond limits.",
    correctAnswer: 6,
    options: [
      { emoji: "🚀", desc: "Launch" },
      { emoji: "✈️", desc: "Flight" },
      { emoji: "🎈", desc: "Float" },
      { emoji: "🦅", desc: "Soar" },
      { emoji: "☁️", desc: "Clouds" },
      { emoji: "🌌", desc: "Beyond" }
    ]
  },
  {
    id: 94,
    text: "Complete the enlightenment sequence:",
    description: "Which symbol represents ultimate understanding?",
    correctAnswer: 2,
    options: [
      { emoji: "🕯️", desc: "Candle" },
      { emoji: "💡", desc: "Light Bulb" },
      { emoji: "⭐", desc: "Star" },
      { emoji: "☀️", desc: "Sun" },
      { emoji: "🌟", desc: "Bright Star" },
      { emoji: "✨", desc: "Sparkles" }
    ]
  },
  {
    id: 95,
    text: "Which represents the ultimate goal?",
    description: "Find the symbol of final achievement.",
    correctAnswer: 4,
    options: [
      { emoji: "🎯", desc: "Target" },
      { emoji: "🏁", desc: "Finish Line" },
      { emoji: "🏆", desc: "Trophy" },
      { emoji: "👑", desc: "Crown" },
      { emoji: "💎", desc: "Diamond" },
      { emoji: "⭐", desc: "Star" }
    ]
  },
  {
    id: 96,
    text: "Select the perfection symbol:",
    description: "Which represents flawless execution?",
    correctAnswer: 6,
    options: [
      { emoji: "✅", desc: "Check" },
      { emoji: "💯", desc: "Hundred" },
      { emoji: "🎯", desc: "Bullseye" },
      { emoji: "⭐", desc: "Star" },
      { emoji: "🏆", desc: "Trophy" },
      { emoji: "💎", desc: "Diamond" }
    ]
  },
  {
    id: 97,
    text: "Which represents the apex?",
    description: "Find the symbol of the highest achievement.",
    correctAnswer: 2,
    options: [
      { emoji: "🏔️", desc: "Mountain Peak" },
      { emoji: "👑", desc: "Crown" },
      { emoji: "🏆", desc: "Trophy" },
      { emoji: "🥇", desc: "Gold Medal" },
      { emoji: "⭐", desc: "Star" },
      { emoji: "💎", desc: "Diamond" }
    ]
  },
  {
    id: 98,
    text: "Complete the excellence finale:",
    description: "Which symbol caps off perfection?",
    correctAnswer: 4,
    options: [
      { emoji: "🎊", desc: "Celebration" },
      { emoji: "🎉", desc: "Party" },
      { emoji: "🏆", desc: "Victory" },
      { emoji: "💯", desc: "Perfect Score" },
      { emoji: "⭐", desc: "Excellence" },
      { emoji: "👑", desc: "Ultimate" }
    ]
  },
  {
    id: 99,
    text: "Which represents the penultimate achievement?",
    description: "Find the symbol of near-perfection.",
    correctAnswer: 6,
    options: [
      { emoji: "🥈", desc: "Silver" },
      { emoji: "🥇", desc: "Gold" },
      { emoji: "🏆", desc: "Trophy" },
      { emoji: "👑", desc: "Crown" },
      { emoji: "⭐", desc: "Star" },
      { emoji: "💎", desc: "Diamond" }
    ]
  },
  {
    id: 100,
    text: "The final question - select ultimate mastery:",
    description: "Which symbol represents the pinnacle of cognitive achievement?",
    correctAnswer: 2,
    options: [
      { emoji: "🧠", desc: "Brain" },
      { emoji: "🌟", desc: "Genius" },
      { emoji: "💡", desc: "Brilliance" },
      { emoji: "⚡", desc: "Lightning Mind" },
      { emoji: "👑", desc: "Mental Royalty" },
      { emoji: "💎", desc: "Rare Intelligence" }
    ]
  }
];

// Game configuration
export const GAME_CONFIG = {
  TOTAL_QUESTIONS: 100,
  POINTS_PER_CORRECT: 2.2,
  MAX_SCORE: 220
};
