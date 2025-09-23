import React, { useState, useEffect } from 'react';
import './GeographyQuiz.css';

const GeographyQuiz = () => {
  // Game state
  const [currentLevel, setCurrentLevel] = useState('beginner');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [timer, setTimer] = useState(30);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  // Load game state from localStorage
  useEffect(() => {
    const savedState = localStorage.getItem('geographyQuizState');
    if (savedState) {
      const { level, index, score, maxStreak } = JSON.parse(savedState);
      setCurrentLevel(level || 'beginner');
      setCurrentQuestionIndex(index || 0);
      setScore(score || 0);
      setMaxStreak(maxStreak || 0);
    }
  }, []);

  // Save game state to localStorage
  useEffect(() => {
    const stateToSave = {
      level: currentLevel,
      index: currentQuestionIndex,
      score: score,
      maxStreak: maxStreak
    };
    localStorage.setItem('geographyQuizState', JSON.stringify(stateToSave));
  }, [currentLevel, currentQuestionIndex, score, maxStreak]);

  // Timer effect
  useEffect(() => {
    let interval;
    if (gameStarted && !gameCompleted && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      handleAnswer(false);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameCompleted, timer]);

  // Question database
  const questions = {
    beginner: [
  {
    question: "What is the capital city of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
    fact: "Paris is famous for the Eiffel Tower and is a major cultural center in Europe."
  },
  {
    question: "Which continent is home to the kangaroo?",
    options: ["Africa", "Asia", "Australia", "South America"],
    answer: "Australia",
    fact: "Australia is the only continent where kangaroos live in the wild."
  },
  {
    question: "What is the largest ocean in the world?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean",
    fact: "The Pacific Ocean covers more than one-third of the Earth's surface."
  },
  {
    question: "Which country is known for the Great Wall?",
    options: ["Japan", "China", "India", "Russia"],
    answer: "China",
    fact: "The Great Wall of China is over 13,000 miles long and was built to protect against invaders."
  },
  {
    question: "How many continents are there on Earth?",
    options: ["Five", "Six", "Seven", "Eight"],
    answer: "Seven",
    fact: "The seven continents are Africa, Antarctica, Asia, Australia, Europe, North America, and South America."
  },
  {
    question: "What is the capital city of the United States?",
    options: ["New York", "Washington, D.C.", "Los Angeles", "Chicago"],
    answer: "Washington, D.C.",
    fact: "Washington, D.C. is home to the White House, where the U.S. President lives."
  },
  {
    question: "Which country is shaped like a boot?",
    options: ["Spain", "Italy", "Greece", "Portugal"],
    answer: "Italy",
    fact: "Italy’s boot shape can be seen on a map, with Sicily as the 'ball' being kicked."
  },
  {
    question: "What is the longest river in the world?",
    options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    answer: "Nile River",
    fact: "The Nile River in Africa is about 4,135 miles long and flows through Egypt."
  },
  {
    question: "Which continent is the largest by land area?",
    options: ["Africa", "Asia", "Europe", "South America"],
    answer: "Asia",
    fact: "Asia is home to over 4 billion people and includes countries like China and India."
  },
  {
    question: "What is the capital city of Japan?",
    options: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    answer: "Tokyo",
    fact: "Tokyo is one of the largest cities in the world and is known for its bright lights and culture."
  },
  {
    question: "Which ocean is on the east coast of the United States?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Atlantic Ocean",
    fact: "The Atlantic Ocean separates North America from Europe and Africa."
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Vatican City", "Maldives", "San Marino"],
    answer: "Vatican City",
    fact: "Vatican City is a tiny country inside Rome, Italy, and is home to the Pope."
  },
  {
    question: "Which country is famous for the pyramids?",
    options: ["Mexico", "Egypt", "Peru", "India"],
    answer: "Egypt",
    fact: "The Great Pyramid of Giza is one of the Seven Wonders of the Ancient World."
  },
  {
    question: "What is the capital city of Brazil?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
    answer: "Brasília",
    fact: "Brasília was built in the 1960s to be Brazil’s new capital city."
  },
  {
    question: "Which continent is home to the Sahara Desert?",
    options: ["Asia", "Africa", "South America", "Australia"],
    answer: "Africa",
    fact: "The Sahara is the largest hot desert in the world, covering much of North Africa."
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley"],
    answer: "Mount Everest",
    fact: "Mount Everest is in the Himalayas and is 8,848 meters tall."
  },
  {
    question: "Which country is home to the Statue of Liberty?",
    options: ["Canada", "United States", "France", "United Kingdom"],
    answer: "United States",
    fact: "The Statue of Liberty was a gift from France to the U.S. in 1886."
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra",
    fact: "Canberra was chosen as Australia’s capital because it’s between Sydney and Melbourne."
  },
  {
    question: "Which river flows through London?",
    options: ["Thames", "Seine", "Danube", "Nile"],
    answer: "Thames",
    fact: "The River Thames is the longest river entirely in England."
  },
  {
    question: "How many time zones are there in the world?",
    options: ["12", "24", "36", "48"],
    answer: "24",
    fact: "The Earth is divided into 24 time zones, each about 15 degrees of longitude wide."
  },
  {
    question: "What is the capital city of Canada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
    fact: "Ottawa is in Ontario and is home to Canada’s Parliament buildings."
  },
  {
    question: "Which continent is also a country?",
    options: ["Europe", "Africa", "Australia", "Asia"],
    answer: "Australia",
    fact: "Australia is both a continent and a country, with unique animals like koalas."
  },
  {
    question: "What is the largest country in the world by land area?",
    options: ["Canada", "Russia", "China", "United States"],
    answer: "Russia",
    fact: "Russia spans 11 time zones and covers about one-eighth of the Earth’s land."
  },
  {
    question: "Which country is known for the Taj Mahal?",
    options: ["India", "Pakistan", "China", "Thailand"],
    answer: "India",
    fact: "The Taj Mahal is a beautiful mausoleum built in Agra, India, in the 1600s."
  },
  {
    question: "What is the capital city of Russia?",
    options: ["Moscow", "St. Petersburg", "Kiev", "Minsk"],
    answer: "Moscow",
    fact: "Moscow is home to the Kremlin, the center of Russia’s government."
  },
  {
    question: "Which ocean is the smallest in the world?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Arctic Ocean",
    fact: "The Arctic Ocean is mostly covered by ice and is near the North Pole."
  },
  {
    question: "What is the capital city of South Africa?",
    options: ["Johannesburg", "Cape Town", "Pretoria", "Durban"],
    answer: "Pretoria",
    fact: "South Africa has three capital cities: Pretoria, Cape Town, and Bloemfontein."
  },
  {
    question: "Which country is famous for sushi?",
    options: ["China", "Japan", "Korea", "Thailand"],
    answer: "Japan",
    fact: "Sushi is a traditional Japanese dish made with rice and fish."
  },
  {
    question: "What is the reference point for time zones?",
    options: ["Equator", "Prime Meridian", "Tropic of Cancer", "International Date Line"],
    answer: "Prime Meridian",
    fact: "The Prime Meridian runs through Greenwich, England, and is at 0 degrees longitude."
  },
  {
    question: "Which continent is home to the Amazon Rainforest?",
    options: ["Africa", "South America", "Asia", "Australia"],
    answer: "South America",
    fact: "The Amazon Rainforest is the largest rainforest in the world."
  },
  {
    question: "What is the capital city of China?",
    options: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"],
    answer: "Beijing",
    fact: "Beijing is home to the Forbidden City, a historic palace complex."
  },
  {
    question: "Which country is home to the Eiffel Tower?",
    options: ["Italy", "France", "Spain", "Germany"],
    answer: "France",
    fact: "The Eiffel Tower in Paris was built for the 1889 World’s Fair."
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Antarctic Desert", "Gobi Desert", "Kalahari Desert"],
    answer: "Antarctic Desert",
    fact: "The Antarctic Desert is the largest because it covers the continent of Antarctica."
  },
  {
    question: "Which U.S. state is known as the 'Sunshine State'?",
    options: ["California", "Florida", "Texas", "Hawaii"],
    answer: "Florida",
    fact: "Florida is called the Sunshine State because of its warm, sunny weather."
  },
  {
    question: "What is the capital city of India?",
    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
    answer: "New Delhi",
    fact: "New Delhi is the political center of India and was designed as a planned city."
  },
  {
    question: "Which country has the most time zones?",
    options: ["Russia", "United States", "France", "China"],
    answer: "France",
    fact: "France has 12 time zones due to its overseas territories around the world."
  },
  {
    question: "What is the capital city of Germany?",
    options: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
    answer: "Berlin",
    fact: "Berlin is famous for the historic Berlin Wall, which divided the city during the Cold War."
  },
  {
    question: "Which continent is home to Mount Kilimanjaro?",
    options: ["Asia", "Africa", "South America", "Europe"],
    answer: "Africa",
    fact: "Mount Kilimanjaro in Tanzania is the highest mountain in Africa."
  },
  {
    question: "What is the name of the sea between Europe and Africa?",
    options: ["Mediterranean Sea", "Red Sea", "Black Sea", "Caribbean Sea"],
    answer: "Mediterranean Sea",
    fact: "The Mediterranean Sea is surrounded by many countries, including Spain, Italy, and Egypt."
  },
  {
    question: "Which country is known for the Great Barrier Reef?",
    options: ["Australia", "Brazil", "Indonesia", "Philippines"],
    answer: "Australia",
    fact: "The Great Barrier Reef is the world’s largest coral reef system."
  },
  {
    question: "What does UTC stand for in time zones?",
    options: ["Universal Time Coordinate", "Coordinated Universal Time", "United Time Control", "Universal Time Conversion"],
    answer: "Coordinated Universal Time",
    fact: "UTC is the standard time used as a reference for all time zones worldwide."
  },
  {
    question: "Which country is home to the Colosseum?",
    options: ["Greece", "Italy", "Spain", "Turkey"],
    answer: "Italy",
    fact: "The Colosseum in Rome was used for gladiator battles in ancient times."
  },
  {
    question: "What is the capital city of Mexico?",
    options: ["Cancun", "Mexico City", "Guadalajara", "Monterrey"],
    answer: "Mexico City",
    fact: "Mexico City is one of the largest cities in the world and built on an ancient lake."
  },
  {
    question: "Which continent is home to the Andes Mountains?",
    options: ["South America", "North America", "Asia", "Africa"],
    answer: "South America",
    fact: "The Andes is the longest mountain range in the world, stretching along South America."
  },
  {
    question: "How many hours does each time zone usually represent?",
    options: ["30 minutes", "1 hour", "2 hours", "4 hours"],
    answer: "1 hour",
    fact: "Each time zone is typically one hour apart from its neighbors."
  },
  {
    question: "What is the capital city of Spain?",
    options: ["Barcelona", "Madrid", "Seville", "Valencia"],
    answer: "Madrid",
    fact: "Madrid is in the center of Spain and is known for its art museums."
  },
  {
    question: "Which country is famous for maple syrup?",
    options: ["Canada", "United States", "Norway", "Sweden"],
    answer: "Canada",
    fact: "Canada produces most of the world’s maple syrup, especially in Quebec."
  },
  {
    question: "What is the largest island in the world?",
    options: ["Greenland", "Australia", "Borneo", "Madagascar"],
    answer: "Greenland",
    fact: "Greenland is covered by ice and is part of the Kingdom of Denmark."
  },
  {
    question: "Which country uses the time zone UTC+0?",
    options: ["United States", "United Kingdom", "Japan", "Australia"],
    answer: "United Kingdom",
    fact: "The United Kingdom uses UTC+0, also called Greenwich Mean Time (GMT)."
  },
  {
    question: "What is the capital city of Italy?",
    options: ["Rome", "Milan", "Venice", "Florence"],
    answer: "Rome",
    fact: "Rome is called the 'Eternal City' and is over 2,000 years old."
  },
  {
    question: "Which continent is home to the Nile River?",
    options: ["Asia", "Africa", "South America", "Europe"],
    answer: "Africa",
    fact: "The Nile River is vital for farming and life in Egypt and other African countries."
  },
  {
    question: "What is the name of the famous clock tower in London?",
    options: ["Big Ben", "Eiffel Tower", "Leaning Tower", "Clock Tower"],
    answer: "Big Ben",
    fact: "Big Ben is the nickname for the bell inside the Elizabeth Tower."
  },
  {
    question: "Which country is known for the Leaning Tower of Pisa?",
    options: ["France", "Italy", "Spain", "Greece"],
    answer: "Italy",
    fact: "The Leaning Tower of Pisa leans because of soft ground beneath it."
  },
  {
    question: "What is the capital city of Egypt?",
    options: ["Cairo", "Alexandria", "Giza", "Luxor"],
    answer: "Cairo",
    fact: "Cairo is near the pyramids and is one of Africa’s largest cities."
  },
  {
    question: "Which ocean is between Africa and Australia?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Indian Ocean",
    fact: "The Indian Ocean is the third-largest ocean in the world."
  },
  {
    question: "What is the capital city of South Korea?",
    options: ["Seoul", "Busan", "Incheon", "Daegu"],
    answer: "Seoul",
    fact: "Seoul is a modern city with ancient palaces and vibrant markets."
  },
  {
    question: "Which country has only one time zone despite its large size?",
    options: ["Russia", "China", "United States", "Australia"],
    answer: "China",
    fact: "China uses one time zone, UTC+8, across its entire country."
  },
  {
    question: "What is the capital city of Argentina?",
    options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
    answer: "Buenos Aires",
    fact: "Buenos Aires is known for its tango dancing and vibrant culture."
  },
  {
    question: "Which continent is home to the Great Barrier Reef?",
    options: ["Asia", "Africa", "Australia", "South America"],
    answer: "Australia",
    fact: "The Great Barrier Reef is a UNESCO World Heritage Site and home to many sea creatures."
  },
  {
    question: "What is the name of the desert in Australia?",
    options: ["Sahara Desert", "Gobi Desert", "Outback", "Kalahari Desert"],
    answer: "Outback",
    fact: "The Outback is a vast, dry region in the center of Australia."
  },
  {
    question: "Which country is known for its fjords?",
    options: ["Sweden", "Norway", "Finland", "Denmark"],
    answer: "Norway",
    fact: "Norway’s fjords are deep inlets carved by glaciers, popular for cruises."
  },
  {
    question: "What is the capital city of Sweden?",
    options: ["Stockholm", "Gothenburg", "Malmö", "Uppsala"],
    answer: "Stockholm",
    fact: "Stockholm is built on 14 islands connected by bridges."
  },
  {
    question: "Which country is home to Machu Picchu?",
    options: ["Peru", "Chile", "Bolivia", "Colombia"],
    answer: "Peru",
    fact: "Machu Picchu is an ancient Inca city in the Andes Mountains."
  },
  {
    question: "What is the time difference when moving east across one time zone?",
    options: ["Lose 1 hour", "Gain 1 hour", "No change", "Gain 2 hours"],
    answer: "Gain 1 hour",
    fact: "Moving east across a time zone means the clock moves forward by one hour."
  },
  {
    question: "What is the capital city of Thailand?",
    options: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya"],
    answer: "Bangkok",
    fact: "Bangkok is known for its temples and bustling street markets."
  },
  {
    question: "Which continent is home to the Amazon River?",
    options: ["Africa", "South America", "Asia", "North America"],
    answer: "South America",
    fact: "The Amazon River is the second-longest river in the world."
  },
  {
    question: "What is the capital city of Kenya?",
    options: ["Nairobi", "Mombasa", "Kisumu", "Nakuru"],
    answer: "Nairobi",
    fact: "Nairobi is a major city known for its national park with wildlife."
  },
  {
    question: "Which country uses the time zone EST (Eastern Standard Time)?",
    options: ["Canada", "United States", "Mexico", "Brazil"],
    answer: "United States",
    fact: "EST is used in cities like New York and Washington, D.C. during standard time."
  },
  {
    question: "What is the capital city of Greece?",
    options: ["Athens", "Thessaloniki", "Crete", "Santorini"],
    answer: "Athens",
    fact: "Athens is famous for the ancient Parthenon temple on the Acropolis."
  },
  {
    question: "Which continent is home to penguins in the wild?",
    options: ["Antarctica", "Asia", "Europe", "North America"],
    answer: "Antarctica",
    fact: "Antarctica is the coldest continent, and penguins live there year-round."
  },
  {
    question: "What is the name of the famous volcano in Japan?",
    options: ["Mount Fuji", "Mount Vesuvius", "Mount Etna", "Mount Kilimanjaro"],
    answer: "Mount Fuji",
    fact: "Mount Fuji is Japan’s highest mountain and a cultural symbol."
  },
  {
    question: "Which country is known for the Northern Lights?",
    options: ["Canada", "Norway", "Brazil", "India"],
    answer: "Norway",
    fact: "The Northern Lights are colorful lights in the sky seen in Norway’s Arctic regions."
  },
  {
    question: "What is the capital city of New Zealand?",
    options: ["Auckland", "Wellington", "Christchurch", "Queenstown"],
    answer: "Wellington",
    fact: "Wellington is known as the 'Windy City' and is New Zealand’s capital."
  },
  {
    question: "Which ocean surrounds Hawaii?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean",
    fact: "Hawaii is a group of islands in the middle of the Pacific Ocean."
  },
  {
    question: "What is the capital city of Portugal?",
    options: ["Lisbon", "Porto", "Faro", "Braga"],
    answer: "Lisbon",
    fact: "Lisbon is a coastal city known for its historic trams and tiles."
  },
  {
    question: "Which country is famous for its tulips?",
    options: ["Belgium", "Netherlands", "Denmark", "Sweden"],
    answer: "Netherlands",
    fact: "The Netherlands is known for its colorful tulip fields in spring."
  },
  {
    question: "What is the time zone abbreviation for Greenwich Mean Time?",
    options: ["EST", "GMT", "PST", "CST"],
    answer: "GMT",
    fact: "GMT is the time at the Prime Meridian, used as a global time standard."
  },
  {
    question: "Which country is home to the Grand Canyon?",
    options: ["Canada", "United States", "Mexico", "Brazil"],
    answer: "United States",
    fact: "The Grand Canyon in Arizona is one of the world’s largest canyons."
  },
  {
    question: "What is the capital city of Ireland?",
    options: ["Dublin", "Cork", "Galway", "Limerick"],
    answer: "Dublin",
    fact: "Dublin is known for its historic castles and lively pubs."
  },
  {
    question: "Which continent is home to the Himalayas?",
    options: ["Asia", "Africa", "Europe", "South America"],
    answer: "Asia",
    fact: "The Himalayas include Mount Everest, the world’s highest mountain."
  },
  {
    question: "What is the capital city of Peru?",
    options: ["Lima", "Cusco", "Arequipa", "Trujillo"],
    answer: "Lima",
    fact: "Lima is a coastal city and the largest in Peru."
  },
  {
    question: "Which country uses PST (Pacific Standard Time)?",
    options: ["Canada", "United States", "Mexico", "All of them"],
    answer: "All of them",
    fact: "PST is used in parts of the U.S., Canada, and Mexico, like California and Vancouver."
  },
  {
    question: "What is the name of the sea near Greece?",
    options: ["Aegean Sea", "Black Sea", "Red Sea", "Caribbean Sea"],
    answer: "Aegean Sea",
    fact: "The Aegean Sea is home to many Greek islands like Santorini."
  },
  {
    question: "Which country is known for its coffee production?",
    options: ["Brazil", "India", "China", "Australia"],
    answer: "Brazil",
    fact: "Brazil is the world’s largest producer of coffee beans."
  },
  {
    question: "What is the capital city of Turkey?",
    options: ["Istanbul", "Ankara", "Izmir", "Antalya"],
    answer: "Ankara",
    fact: "Ankara is Turkey’s capital, while Istanbul is its largest city."
  },
  {
    question: "Which continent is home to the koala?",
    options: ["Africa", "Asia", "Australia", "South America"],
    answer: "Australia",
    fact: "Koalas are marsupials that live in eucalyptus trees in Australia."
  },
  {
    question: "What is the International Date Line?",
    options: ["A line of latitude", "A line of longitude", "A time zone", "A country border"],
    answer: "A line of longitude",
    fact: "The International Date Line is at about 180 degrees longitude and changes the date."
  },
  {
    question: "What is the capital city of Norway?",
    options: ["Oslo", "Bergen", "Trondheim", "Stavanger"],
    answer: "Oslo",
    fact: "Oslo is surrounded by forests and fjords and is Norway’s capital."
  },
  {
    question: "Which country is home to the Amazon River?",
    options: ["Brazil", "Peru", "Colombia", "All of them"],
    answer: "All of them",
    fact: "The Amazon River flows through Brazil, Peru, Colombia, and other South American countries."
  },
  {
    question: "What is the capital city of Chile?",
    options: ["Santiago", "Valparaíso", "Concepción", "La Serena"],
    answer: "Santiago",
    fact: "Santiago is in a valley surrounded by the Andes Mountains."
  },
  {
    question: "Which country is known for the Acropolis?",
    options: ["Greece", "Italy", "Egypt", "Turkey"],
    answer: "Greece",
    fact: "The Acropolis in Athens is an ancient hilltop fortress with the Parthenon."
  },
  {
    question: "What is the time difference between UTC and EST?",
    options: ["+5 hours", "-5 hours", "+3 hours", "-3 hours"],
    answer: "-5 hours",
    fact: "Eastern Standard Time (EST) is 5 hours behind Coordinated Universal Time (UTC)."
  },
  {
    question: "Which country is home to the Sydney Opera House?",
    options: ["Australia", "New Zealand", "Canada", "United Kingdom"],
    answer: "Australia",
    fact: "The Sydney Opera House is a famous landmark with a unique sail-like design."
  },
  {
    question: "What is the capital city of Colombia?",
    options: ["Bogotá", "Medellín", "Cali", "Cartagena"],
    answer: "Bogotá",
    fact: "Bogotá is high in the Andes Mountains at about 8,600 feet above sea level."
  },
  {
    question: "Which continent is home to the Ural Mountains?",
    options: ["Asia", "Europe", "Both Asia and Europe", "Africa"],
    answer: "Both Asia and Europe",
    fact: "The Ural Mountains form a natural boundary between Europe and Asia."
  },
  {
    question: "What is the capital city of Denmark?",
    options: ["Copenhagen", "Aarhus", "Odense", "Aalborg"],
    answer: "Copenhagen",
    fact: "Copenhagen is known for its colorful waterfront and the Little Mermaid statue."
  },
  {
    question: "Which country has a time zone offset of UTC+9?",
    options: ["Japan", "India", "Brazil", "France"],
    answer: "Japan",
    fact: "Japan uses Japan Standard Time (JST), which is UTC+9, with no daylight saving time."
  }
],

  intermediate: [
    {
      question: "Which country has a time zone that is 30 minutes offset from its neighboring time zones?",
      options: ["India", "Venezuela", "Afghanistan", "Newfoundland"],
      answer: "India",
      fact: "India Standard Time (IST) is UTC+5:30, a half-hour ahead of Pakistan and half-hour behind Nepal."
    },
    {
      question: "What is the longest river in South America?",
      options: ["Amazon River", "Paraná River", "Orinoco River", "Magdalena River"],
      answer: "Amazon River",
      fact: "The Amazon River carries more water than any other river and supports a vast ecosystem in the rainforest."
    },
    {
      question: "Which African country has three official capital cities?",
      options: ["Nigeria", "South Africa", "Ken让她", "Ethiopia"],
      answer: "South Africa",
      fact: "South Africa’s capitals are Pretoria (administrative), Cape Town (legislative), and Bloemfontein (judicial)."
    },
    {
      question: "Which country uses the time zone UTC+12:45?",
      options: ["New Zealand", "Fiji", "Chatham Islands", "Tonga"],
      answer: "Chatham Islands",
      fact: "The Chatham Islands, part of New Zealand, use UTC+12:45, one of the furthest ahead time zones."
    },
    {
      question: "What is the highest peak in the Southern and Western Hemispheres?",
      options: ["Mount Kilimanjaro", "Aconcagua", "Mount Kosciuszko", "Cerro Catedral"],
      answer: "Aconcagua",
      fact: "Aconcagua, in the Andes of Argentina, stands at 6,960 meters and is the highest peak outside Asia."
    },
    {
      question: "Which European country spans two continents?",
      options: ["Turkey", "Greece", "Spain", "Georgia"],
      answer: "Turkey",
      fact: "Turkey straddles Europe and Asia, with Istanbul located on both sides of the Bosporus Strait."
    },
    {
      question: "Which country has the most deserts by area in the world?",
      options: ["Australia", "Antarctica", "Saudi Arabia", "Chile"],
      answer: "Antarctica",
      fact: "Antarctica is the continent with the most desert coverage by area, as it is classified as a cold desert."
    },
    {
      question: "What is the time zone abbreviation for Central Standard Time in North America?",
      options: ["EST", "CST", "MST", "PST"],
      answer: "CST",
      fact: "CST is UTC-6 and is used in places like Chicago and Mexico City during standard time."
    },
    {
      question: "Which sea separates the Arabian Peninsula from Africa?",
      options: ["Red Sea", "Arabian Sea", "Mediterranean Sea", "Caspian Sea"],
      answer: "Red Sea",
      fact: "The Red Sea is known for its coral reefs and is a major shipping route via the Suez Canal."
    },
    {
      question: "Which country’s capital is situated on the Nile River?",
      options: ["Sudan", "Egypt", "Uganda", "Ethiopia"],
      answer: "Egypt",
      fact: "Cairo, Egypt’s capital, is located along the Nile, the world’s longest river."
    },
    {
      question: "Which country uses a single time zone despite spanning over 4,000 miles east to west?",
      options: ["Russia", "China", "Australia", "Canada"],
      answer: "China",
      fact: "China uses only China Standard Time (UTC+8) to promote national unity across its vast territory."
    },
    {
      question: "What is the largest lake in Africa?",
      options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
      answer: "Lake Victoria",
      fact: "Lake Victoria is the second-largest freshwater lake in the world, shared by Uganda, Kenya, and Tanzania."
    },
    {
      question: "Which country is home to the ancient city of Petra?",
      options: ["Jordan", "Syria", "Lebanon", "Iraq"],
      answer: "Jordan",
      fact: "Petra, a UNESCO World Heritage Site, was carved into rose-red cliffs by the Nabataeans."
    },
    {
      question: "Which time zone is used in Hawaii during standard time?",
      options: ["PST", "MST", "HST", "AKST"],
      answer: "HST",
      fact: "Hawaii Standard Time (HST) is UTC-10, one of the furthest behind UTC globally."
    },
    {
      question: "What is the capital of Mongolia?",
      options: ["Ulaanbaatar", "Erdenet", "Darkhan", "Choibalsan"],
      answer: "Ulaanbaatar",
      fact: "Ulaanbaatar is one of the coldest capital cities, located in a high-altitude valley."
    },
    {
      question: "Which mountain range forms the border between France and Spain?",
      options: ["Alps", "Pyrenees", "Carpathians", "Apennines"],
      answer: "Pyrenees",
      fact: "The Pyrenees are known for their rugged terrain and the small country of Andorra."
    },
    {
      question: "Which country has the most active volcanoes in the world?",
      options: ["Japan", "Indonesia", "United States", "Italy"],
      answer: "Indonesia",
      fact: "Indonesia has over 70 active volcanoes, including the famous Krakatoa."
    },
    {
      question: "What is the time difference between Tokyo and Los Angeles during standard time?",
      options: ["16 hours ahead", "17 hours ahead", "16 hours behind", "17 hours behind"],
      answer: "17 hours ahead",
      fact: "Tokyo (UTC+9) is 17 hours ahead of Los Angeles (UTC-8) during standard time."
    },
    {
      question: "Which river forms part of the border between the U.S. and Mexico?",
      options: ["Mississippi River", "Colorado River", "Rio Grande", "Columbia River"],
      answer: "Rio Grande",
      fact: "The Rio Grande stretches over 1,800 miles, separating Texas from Mexico."
    },
    {
      question: "Which country’s capital is Reykjavik?",
      options: ["Norway", "Iceland", "Sweden", "Finland"],
      answer: "Iceland",
      fact: "Reykjavik is the northernmost capital of a sovereign state and uses UTC+0."
    },
    {
      question: "Which country has a time zone offset of UTC+4:30?",
      options: ["Iran", "Afghanistan", "Pakistan", "Turkmenistan"],
      answer: "Afghanistan",
      fact: "Afghanistan uses a half-hour offset (UTC+4:30) to align with regional neighbors."
    },
    {
      question: "What is the largest island in the Mediterranean Sea?",
      options: ["Sicily", "Crete", "Sardinia", "Cyprus"],
      answer: "Sicily",
      fact: "Sicily, part of Italy, is known for Mount Etna, an active volcano."
    },
    {
      question: "Which country is home to Lake Baikal, the deepest lake in the world?",
      options: ["Russia", "China", "Mongolia", "Kazakhstan"],
      answer: "Russia",
      fact: "Lake Baikal in Siberia holds 20% of the world’s unfrozen freshwater."
    },
    {
      question: "Which city is the capital of Kazakhstan?",
      options: ["Almaty", "Nur-Sultan", "Shymkent", "Aktobe"],
      answer: "Nur-Sultan",
      fact: "Nur-Sultan, renamed in 2019, is a planned city with futuristic architecture."
    },
    {
      question: "Which time zone is used in most of Alaska?",
      options: ["PST", "MST", "AKST", "HST"],
      answer: "AKST",
      fact: "Alaska Standard Time (AKST) is UTC-9, but some Aleutian Islands use UTC-10."
    },
    {
      question: "Which country is known for the ancient ruins of Angkor Wat?",
      options: ["Thailand", "Cambodia", "Vietnam", "Laos"],
      answer: "Cambodia",
      fact: "Angkor Wat is the largest religious monument in the world, built in the 12th century."
    },
    {
      question: "Which strait separates Asia from North America?",
      options: ["Strait of Gibraltar", "Bering Strait", "Strait of Malacca", "Strait of Hormuz"],
      answer: "Bering Strait",
      fact: "The Bering Strait is only 55 miles wide and was once a land bridge."
    },
    {
      question: "Which country’s time zone is UTC+3:30?",
      options: ["Iran", "Iraq", "Saudi Arabia", "Syria"],
      answer: "Iran",
      fact: "Iran Standard Time (IRST) is UTC+3:30, a rare half-hour offset."
    },
    {
      question: "What is the capital of Chile?",
      options: ["Santiago", "Valparaíso", "Concepción", "La Serena"],
      answer: "Santiago",
      fact: "Santiago is nestled in a valley surrounded by the Andes Mountains."
    },
    {
      question: "Which desert is the largest hot desert in the world?",
      options: ["Sahara Desert", "Gobi Desert", "Kalahari Desert", "Atacama Desert"],
      answer: "Sahara Desert",
      fact: "The Sahara spans 11 countries in North Africa and is larger than Australia."
    },
    {
      question: "Which country is home to the Ural Mountains?",
      options: ["Russia", "Kazakhstan", "Mongolia", "China"],
      answer: "Russia",
      fact: "The Ural Mountains separate Europe and Asia, running through western Russia."
    },
    {
      question: "What is the time difference between UTC and IST (India Standard Time)?",
      options: ["+4:30 hours", "+5:30 hours", "+6:30 hours", "+7:30 hours"],
      answer: "+5:30 hours",
      fact: "India Standard Time (IST) is UTC+5:30 and does not observe daylight saving time."
    },
    {
      question: "Which country is known for the ancient city of Machu Picchu?",
      options: ["Peru", "Bolivia", "Chile", "Ecuador"],
      answer: "Peru",
      fact: "Machu Picchu was built by the Inca in the 15th century and rediscovered in 1911."
    },
    {
      question: "Which sea is bordered by Ukraine and Turkey?",
      options: ["Black Sea", "Caspian Sea", "Mediterranean Sea", "Baltic Sea"],
      answer: "Black Sea",
      fact: "The Black Sea is named for its dark waters caused by deep basins."
    },
    {
      question: "Which country uses the time zone UTC+10:30?",
      options: ["Australia", "Papua New Guinea", "Lord Howe Island", "Solomon Islands"],
      answer: "Lord Howe Island",
      fact: "Lord Howe Island, off Australia, uses UTC+10:30, a rare half-hour offset."
    },
    {
      question: "What is the capital of Morocco?",
      options: ["Casablanca", "Rabat", "Marrakesh", "Fez"],
      answer: "Rabat",
      fact: "Rabat, on the Atlantic coast, is known for its historic medina and royal palace."
    },
    {
      question: "Which mountain range is the longest in the world?",
      options: ["Himalayas", "Andes", "Rocky Mountains", "Alps"],
      answer: "Andes",
      fact: "The Andes stretch over 4,300 miles along the western edge of South America."
    },
    {
      question: "Which country has the most time zones in the world?",
      options: ["Russia", "United States", "France", "China"],
      answer: "France",
      fact: "France has 12 time zones due to its overseas territories in the Pacific, Atlantic, and Indian Oceans."
    },
    {
      question: "Which river is the longest in Europe?",
      options: ["Danube River", "Volga River", "Rhine River", "Seine River"],
      answer: "Volga River",
      fact: "The Volga River, in Russia, is over 2,200 miles long and flows into the Caspian Sea."
    },
    {
      question: "Which country’s capital is Canberra?",
      options: ["New Zealand", "Australia", "South Africa", "Canada"],
      answer: "Australia",
      fact: "Canberra was chosen as Australia’s capital in 1908 as a compromise between Sydney and Melbourne."
    },
    {
      question: "Which time zone is used in Buenos Aires, Argentina?",
      options: ["ART", "BRT", "CLT", "EST"],
      answer: "ART",
      fact: "Argentina Time (ART) is UTC-3, with no daylight saving time since 2009."
    },
    {
      question: "What is the capital of Vietnam?",
      options: ["Ho Chi Minh City", "Hanoi", "Da Nang", "Hue"],
      answer: "Hanoi",
      fact: "Hanoi, in northern Vietnam, is known for its ancient temples and French colonial architecture."
    },
    {
      question: "Which country is home to the Gobi Desert?",
      options: ["China", "Mongolia", "Both China and Mongolia", "Kazakhstan"],
      answer: "Both China and Mongol",
      fact: "The Gobi Desert is one of the largest cold deserts, spanning northern China and southern Mongolia."
    },
    {
      question: "Which country uses the time zone UTC+6:30?",
      options: ["Myanmar", "Bangladesh", "Bhutan", "Nepal"],
      answer: "Myanmar",
      fact: "Myanmar uses UTC+6:30, a half-hour offset to align with regional trade partners."
    },
    {
      question: "What is the largest city in South Africa by population?",
      options: ["Cape Town", "Johannesburg", "Durban", "Pretoria"],
      answer: "Johannesburg",
      fact: "Johannesburg is South Africa’s economic hub, known for its gold mining history."
    },
    {
      question: "Which country is home to the Serengeti National Park?",
      options: ["Kenya", "Tanzania", "Uganda", "Rwanda"],
      answer: "Tanzania",
      fact: "The Serengeti is famous for the annual wildebeest migration, a natural spectacle."
    },
    {
      question: "Which time zone is used in most of Brazil?",
      options: ["BRT", "ART", "AMT", "ACT"],
      answer: "BRT",
      fact: "Brazil Standard Time (BRT) is UTC-3, used in major cities like São Paulo and Rio de Janeiro."
    },
    {
      question: "What is the capital of Indonesia?",
      options: ["Jakarta", "Bali", "Surabaya", "Bandung"],
      answer: "Jakarta",
      fact: "Jakarta is on the island of Java and is one of the most populous cities in Southeast Asia."
    },
    {
      question: "Which country is home to the Angel Falls, the world’s highest waterfall?",
      options: ["Brazil", "Venezuela", "Colombia", "Peru"],
      answer: "Venezuela",
      fact: "Angel Falls drops 3,212 feet in Canaima National Park, named after explorer Jimmy Angel."
    },
    {
      question: "Which country uses the time zone UTC-4:30?",
      options: ["Venezuela", "Bolivia", "Chile", "Paraguay"],
      answer: "Venezuela",
      fact: "Venezuela uses UTC-4:30, a unique offset adopted in 2007 for economic reasons."
    },
    {
      question: "What is the capital of Ukraine?",
      options: ["Kyiv", "Lviv", "Odessa", "Kharkiv"],
      answer: "Kyiv",
      fact: "Kyiv, on the Dnieper River, is one of Europe’s oldest cities, founded over 1,500 years ago."
    },
    {
      question: "Which country is home to the Great Victoria Desert?",
      options: ["Australia", "South Africa", "Chile", "Namibia"],
      answer: "Australia",
      fact: "The Great Victoria Desert is Australia’s largest desert, covering 348,750 square kilometers."
    },
    {
      question: "Which city is the capital of Nigeria?",
      options: ["Lagos", "Abuja", "Kano", "Ibadan"],
      answer: "Abuja",
      fact: "Abuja was built in the 1980s to replace Lagos as Nigeria’s capital for its central location."
    },
    {
      question: "What is the time difference between London and New York during standard time?",
      options: ["4 hours", "5 hours", "6 hours", "7 hours"],
      answer: "5 hours",
      fact: "London (UTC+0) is 5 hours ahead of New York (UTC-5) during standard time."
    },
    {
      question: "Which country is home to the ancient ruins of Chichen Itza?",
      options: ["Mexico", "Guatemala", "Belize", "Honduras"],
      answer: "Mexico",
      fact: "Chichen Itza, a Mayan city, features the famous El Castillo pyramid."
    },
    {
      question: "Which sea is the saltiest in the world?",
      options: ["Dead Sea", "Red Sea", "Mediterranean Sea", "Caspian Sea"],
      answer: "Dead Sea",
      fact: "The Dead Sea, between Israel and Jordan, is so salty that people can float on it."
    },
    {
      question: "Which country uses the time zone UTC+5:45?",
      options: ["India", "Nepal", "Bhutan", "Sri Lanka"],
      answer: "Nepal",
      fact: "Nepal uses UTC+5:45, a quarter-hour offset to distinguish itself from India."
    },
    {
      question: "What is the capital of Colombia?",
      options: ["Bogotá", "Medellín", "Cali", "Cartagena"],
      answer: "Bogotá",
      fact: "Bogotá is located at 8,660 feet above sea level, one of the highest capitals in the world."
    },
    {
      question: "Which mountain range separates India from China?",
      options: ["Himalayas", "Karakoram", "Pamir", "Hindu Kush"],
      answer: "Himalayas",
      fact: "The Himalayas include 14 peaks over 8,000 meters, including Everest."
    },
    {
      question: "Which country has the most fjords in the world?",
      options: ["Norway", "Chile", "New Zealand", "Canada"],
      answer: "Norway",
      fact: "Norway’s coastline has over 1,000 fjords, carved by glaciers over millennia."
    },
    {
      question: "What is the time zone used in Moscow, Russia?",
      options: ["MSK", "SAMT", "YEKT", "VOST"],
      answer: "MSK",
      fact: "Moscow Standard Time (MSK) is UTC+3, used in western Russia."
    },
    {
      question: "Which country is home to the Pantanal, the world’s largest tropical wetland?",
      options: ["Brazil", "Argentina", "Paraguay", "Bolivia"],
      answer: "Brazil",
      fact: "The Pantanal, mostly in Brazil, is a biodiversity hotspot with jaguars and caimans."
    },
    {
      question: "What is the capital of Algeria?",
      options: ["Algiers", "Oran", "Constantine", "Annaba"],
      answer: "Algiers",
      fact: "Algiers, on the Mediterranean coast, is known for its white-washed buildings."
    },
    {
      question: "Which country uses the time zone UTC+2:00?",
      options: ["South Africa", "Egypt", "Both South Africa and Egypt", "Nigeria"],
      answer: "Both South Africa and Egypt",
      fact: "South Africa and Egypt use UTC+2, with no daylight saving time in South Africa."
    },
    {
      question: "Which river flows through the Grand Canyon?",
      options: ["Colorado River", "Rio Grande", "Mississippi River", "Columbia River"],
      answer: "Colorado River",
      fact: "The Colorado River carved the Grand Canyon over millions of years."
    },
    {
      question: "Which country is home to the ancient city of Timbuktu?",
      options: ["Mali", "Niger", "Mauritania", "Senegal"],
      answer: "Mali",
      fact: "Timbuktu was a major center of Islamic learning in the Middle Ages."
    },
    {
      question: "What is the time difference between Sydney and London during Australia’s summer?",
      options: ["9 hours", "10 hours", "11 hours", "12 hours"],
      answer: "11 hours",
      fact: "Sydney (UTC+11 during summer) is 11 hours ahead of London (UTC+0)."
    },
    {
      question: "Which country’s capital is Ottawa?",
      options: ["Canada", "United States", "Australia", "New Zealand"],
      answer: "Canada",
      fact: "Ottawa was chosen as Canada’s capital in 1857 by Queen Victoria."
    },
    {
      question: "Which lake is the largest in South America?",
      options: ["Lake Titicaca", "Lake Maracaibo", "Lake Poopó", "Lake Argentino"],
      answer: "Lake Titicaca",
      fact: "Lake Titicaca, on the Peru-Bolivia border, is the highest navigable lake in the world."
    },
    {
      question: "Which country uses the time zone UTC+3:00?",
      options: ["Saudi Arabia", "Iran", "UAE", "All of them"],
      answer: "All of them",
      fact: "Saudi Arabia, Iran (with UTC+3:30), and UAE all use UTC+3 or close offsets."
    },
    {
      question: "What is the capital of Ethiopia?",
      options: ["Addis Ababa", "Dire Dawa", "Mekelle", "Gondar"],
      answer: "Addis Ababa",
      fact: "Addis Ababa is the headquarters of the African Union."
    },
    {
      question: "Which country is home to the Atacama Desert, the driest in the world?",
      options: ["Chile", "Peru", "Bolivia", "Argentina"],
      answer: "Chile",
      fact: "Parts of the Atacama Desert have not seen rain in centuries."
    },
    {
      question: "Which country’s capital is Brasília?",
      options: ["Brazil", "Argentina", "Paraguay", "Uruguay"],
      answer: "Brazil",
      fact: "Brasília was designed by Oscar Niemeyer and built in the 1960s as a planned capital."
    },
    {
      question: "What is the time zone used in Tokyo, Japan?",
      options: ["JST", "KST", "CST", "TST"],
      answer: "JST",
      fact: "Japan Standard Time (JST) is UTC+9 and does not use daylight saving time."
    },
    {
      question: "Which country is home to the ancient ruins of Palmyra?",
      options: ["Syria", "Iraq", "Jordan", "Lebanon"],
      answer: "Syria",
      fact: "Palmyra was a key trading city in ancient times, known for its Roman ruins."
    },
    {
      question: "Which river is the longest in Asia?",
      options: ["Yangtze River", "Yellow River", "Mekong River", "Ganges River"],
      answer: "Yangtze River",
      fact: "The Yangtze, China’s longest river, is over 3,900 miles long."
    },
    {
      question: "Which country uses the time zone UTC+8:00?",
      options: ["China", "Singapore", "Australia (Western)", "All of them"],
      answer: "All of them",
      fact: "UTC+8 is used in China, Singapore, and Western Australia, among others."
    },
    {
      question: "What is the capital of Peru?",
      options: ["Lima", "Cusco", "Arequipa", "Trujillo"],
      answer: "Lima",
      fact: "Lima, on the Pacific coast, was founded by Spanish conquistadors in 1535."
    },
    {
      question: "Which country is home to the Namib Desert?",
      options: ["Namibia", "Botswana", "Angola", "South Africa"],
      answer: "Namibia",
      fact: "The Namib Desert is one of the oldest deserts, with dunes up to 1,000 feet high."
    },
    {
      question: "Which city is the capital of Bangladesh?",
      options: ["Dhaka", "Chittagong", "Khulna", "Rajshahi"],
      answer: "Dhaka",
      fact: "Dhaka is one of the most densely populated cities in the world."
    },
    {
      question: "What is the time difference between Paris and Beijing?",
      options: ["5 hours", "6 hours", "7 hours", "8 hours"],
      answer: "7 hours",
      fact: "Paris (UTC+1) is 7 hours behind Beijing (UTC+8) during standard time."
    },
    {
      question: "Which country is home to the Matterhorn mountain?",
      options: ["Switzerland", "France", "Italy", "Austria"],
      answer: "Switzerland",
      fact: "The Matterhorn, on the Swiss-Italian border, is famous for its pyramid shape."
    },
    {
      question: "Which sea is located between Egypt and Saudi Arabia?",
      options: ["Red Sea", "Arabian Sea", "Mediterranean Sea", "Persian Gulf"],
      answer: "Red Sea",
      fact: "The Red Sea is a critical waterway connecting the Mediterranean to the Indian<TABLE>Indian Ocean."
    },
    {
      question: "Which country uses the time zone UTC-3:00?",
      options: ["Argentina", "Chile", "Brazil", "All of them"],
      answer: "All of them",
      fact: "Argentina, Chile, and parts of Brazil share UTC-3, with variations for daylight saving."
    },
    {
      question: "What is the capital of Malaysia?",
      options: ["Kuala Lumpur", "Penang", "Johor Bahru", "Malacca"],
      answer: "Kuala Lumpur",
      fact: "Kuala Lumpur is home to the Petronas Towers, once the world’s tallest buildings."
    },
    {
      question: "Which country is home to the Carpathian Mountains?",
      options: ["Poland", "Romania", "Hungary", "All of them"],
      answer: "All of them",
      fact: "The Carpathians stretch across several Eastern European countries, including Romania and Poland."
    },
    {
      question: "Which country’s capital is Nairobi?",
      options: ["Kenya", "Uganda", "Tanzania", "Somalia"],
      answer: "Kenya",
      fact: "Nairobi is a major hub for East African business and wildlife tourism."
    },
    {
      question: "What is the time zone used in Seoul, South Korea?",
      options: ["KST", "JST", "CST", "TST"],
      answer: "KST",
      fact: "Korea Standard Time (KST) is UTC+9, shared with Japan and parts of Indonesia."
    },
    {
      question: "Which country is home to the ancient city of Pompeii?",
      options: ["Italy", "Greece", "Turkey", "Egypt"],
      answer: "Italy",
      fact: "Pompeii was buried by Mount Vesuvius’ eruption in 79 CE and rediscovered centuries later."
    },
    {
      question: "Which river forms the border between Thailand and Laos?",
      options: ["Mekong River", "Chao Phraya River", "Salween River", "Irrawaddy River"],
      answer: "Mekong River",
      fact: "The Mekong is one of Asia’s longest rivers, supporting millions of livelihoods."
    },
    {
      question: "Which country uses the time zone UTC+7:00?",
      options: ["Thailand", "Vietnam", "Indonesia (Western)", "All of them"],
      answer: "All of them",
      fact: "Thailand, Vietnam, and western Indonesia share UTC+7, with no daylight saving time."
    },
    {
      question: "What is the capital of Saudi Arabia?",
      options: ["Riyadh", "Jeddah", "Mecca", "Dammam"],
      answer: "Riyadh",
      fact: "Riyadh is a major financial center in the Middle East, with modern skyscrapers."
    },
    {
      question: "Which country is home to the Kalahari Desert?",
      options: ["Namibia", "Botswana", "South Africa", "All of them"],
      answer: "All of them",
      fact: "The Kalahari Desert spans Botswana, Namibia, and South Africa, home to the San people."
    },
    {
      question: "Which time zone is used in Chicago during standard time?",
      options: ["EST", "CST", "MST", "PST"],
      answer: "CST",
      fact: "Central Standard Time (CST) is UTC-6, used across much of central North America."
    },
    {
      question: "Which country is home to the ancient city of Persepolis?",
      options: ["Iran", "Iraq", "Syria", "Turkey"],
      answer: "Iran",
      fact: "Persepolis was the ceremonial capital of the Achaemenid Empire in ancient Persia."
    },
    {
      question: "What is the capital of Sri Lanka?",
      options: ["Colombo", "Kandy", "Galle", "Jaffna"],
      answer: "Colombo",
      fact: "Colombo is Sri Lanka’s commercial hub, with a mix of colonial and modern architecture."
    },
    {
      question: "Which country uses the time zone UTC+1:00?",
      options: ["France", "Spain", "Italy", "All of them"],
      answer: "All of them",
      fact: "France, Spain, and Italy use UTC+1 (CET) during standard time in Europe."
    },
    {
      question: "Which river is the longest in North America?",
      options: ["Mississippi River", "Missouri River", "Colorado River", "Yukon River"],
      answer: "Missouri River",
      fact: "The Missouri River, at 2,341 miles, is slightly longer than the Mississippi."
    },
    {
      question: "What is the capital of New Zealand?",
      options: ["Auckland", "Wellington", "Christchurch", "Dunedin"],
      answer: "Wellington",
      fact: "Wellington is known as the windiest city in the world due to its coastal location."
    },
    {
      question: "Which country uses the time zone UTC+12:00?",
      options: ["New Zealand", "Fiji", "Tonga", "All of them"],
      answer: "All of them",
      fact: "UTC+12 is one of the furthest ahead time zones, used in parts of the Pacific."
    },
    {
      question: "Which country is home to the ancient city of Carthage?",
      options: ["Tunisia", "Algeria", "Morocco", "Libya"],
      answer: "Tunisia",
      fact: "Carthage was a powerful Phoenician city-state that rivaled Rome in ancient times."
    },
    {
      question: "What is the capital of Pakistan?",
      options: ["Karachi", "Islamabad", "Lahore", "Peshawar"],
      answer: "Islamabad",
      fact: "Islamabad was built in the 1960s to replace Karachi as a more central capital."
    },
    {
      question: "Which country’s capital is Ankara?",
      options: ["Turkey", "Syria", "Iran", "Iraq"],
      answer: "Turkey",
      fact: "Ankara became Turkey’s capital in 1923, replacing Istanbul."
    },
    {
      question: "What is the time difference between Los Angeles and Honolulu?",
      options: ["1 hour", "2 hours", "3 hours", "4 hours"],
      answer: "2 hours",
      fact: "Los Angeles (UTC-8) is 2 hours ahead of Honolulu (UTC-10) during standard time."
    },
    {
      question: "Which country is home to the ancient city of Babylon?",
      options: ["Iraq", "Iran", "Syria", "Jordan"],
      answer: "Iraq",
      fact: "Babylon was a major city of ancient Mesopotamia, famous for its Hanging Gardens."
    },
    {
      question: "Which sea is the largest inland body of water in the world?",
      options: ["Caspian Sea", "Black Sea", "Aral Sea", "Dead Sea"],
      answer: "Caspian Sea",
      fact: "The Caspian Sea, bordered by five countries, is technically a lake due to its landlocked nature."
    },
    {
      question: "Which country uses the time zone UTC+4:00?",
      options: ["UAE", "Oman", "Georgia", "All of them"],
      answer: "All of them",
      fact: "UTC+4 is used in the UAE, Oman, and Georgia, among other countries."
    },
    {
      question: "What is the capital of Ghana?",
      options: ["Accra", "Kumasi", "Tamale", "Sekondi"],
      answer: "Accra",
      fact: "Accra is a coastal city and a major economic hub in West Africa."
    },
    {
      question: "Which country is home to the ancient ruins of Ephesus?",
      options: ["Turkey", "Greece", "Cyprus", "Lebanon"],
      answer: "Turkey",
      fact: "Ephesus was a major Greek and Roman city, famous for the Temple of Artemis."
    },
    {
      question: "Which time zone is used in Dubai?",
      options: ["GST", "AST", "EET", "MST"],
      answer: "GST",
      fact: "Gulf Standard Time (GST) is UTC+4, used in Dubai and other Gulf countries."
    },
    {
      question: "What is the capital of Bolivia?",
      options: ["La Paz", "Sucre", "Santa Cruz", "Cochabamba"],
      answer: "Sucre",
      fact: "Sucre is the constitutional capital, while La Paz is the seat of government."
    },
    {
      question: "Which country is home to the ancient city of Cuzco?",
      options: ["Peru", "Bolivia", "Chile", "Ecuador"],
      answer: "Peru",
      fact: "Cuzco was the capital of the Inca Empire and is near Machu Picchu."
    },
    {
      question: "Which country uses the time zone UTC+11:00?",
      options: ["Australia", "Papua New Guinea", "Solomon Islands", "All of them"],
      answer: "All of them",
      fact: "UTC+11 is used in eastern Australia and several Pacific island nations."
    },
    {
      question: "What is the capital of Finland?",
      options: ["Helsinki", "Turku", "Tampere", "Espoo"],
      answer: "Helsinki",
      fact: "Helsinki is known for its archipelago and modernist architecture."
    },
    {
      question: "Which country is home to the ancient ruins of Great Zimbabwe?",
      options: ["Zimbabwe", "Botswana", "Zambia", "Mozambique"],
      answer: "Zimbabwe",
      fact: "Great Zimbabwe was a medieval city, a center of the Shona civilization."
    },
    {
      question: "Which time zone is used in Mexico City during standard time?",
      options: ["CST", "MST", "EST", "PST"],
      answer: "CST",
      fact: "Mexico City uses Central Standard Time (UTC-6) during standard time."
    },
    {
      question: "What is the capital of the Philippines?",
      options: ["Manila", "Quezon City", "Davao", "Cebu"],
      answer: "Manila",
        fact: "Manila is a bustling port city with a historic Spanish colonial district."
    }
  ],
advanced: [
  {
    question: "Which country has a time zone that is 45 minutes offset from its neighboring time zones?",
    options: ["Nepal", "Chatham Islands", "Central Australia", "Iran"],
    answer: "Chatham Islands",
    fact: "The Chatham Islands in New Zealand are UTC+12:45, 45 minutes ahead of New Zealand Standard Time."
  },
  {
    question: "Which element has the highest electronegativity on the Pauling scale?",
    options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
    answer: "Fluorine",
    fact: "Fluorine has an electronegativity of 3.98, the highest of all elements on the Pauling scale."
  },
  {
    question: "What is the only known moon in the solar system with a substantial atmosphere denser than Earth’s?",
    options: ["Europa", "Titan", "Io", "Triton"],
    answer: "Titan",
    fact: "Titan, Saturn’s largest moon, has a nitrogen-rich atmosphere with surface pressure 1.45 times that of Earth."
  },
  {
    question: "Which country is the world’s largest archipelago nation by number of islands?",
    options: ["Indonesia", "Philippines", "Greece", "Sweden"],
    answer: "Indonesia",
    fact: "Indonesia comprises over 17,000 islands, making it the largest archipelago country in the world."
  },
  {
    question: "In quantum mechanics, what principle states that no two fermions can occupy the same quantum state simultaneously?",
    options: ["Heisenberg Uncertainty Principle", "Pauli Exclusion Principle", "Schrödinger Principle", "Planck’s Principle"],
    answer: "Pauli Exclusion Principle",
    fact: "Formulated by Wolfgang Pauli, this principle explains electron shell structure and underpins the periodic table."
  },
  {
    question: "Which ancient civilization developed the first known system of written law?",
    options: ["Egyptians", "Hittites", "Sumerians", "Babylonians"],
    answer: "Sumerians",
    fact: "The Sumerians created cuneiform law codes as early as 2400 BCE, predating Hammurabi’s Code."
  },
  {
    question: "Which planet has the most extreme temperature variation between day and night?",
    options: ["Mars", "Mercury", "Venus", "Moon"],
    answer: "Mercury",
    fact: "Mercury’s lack of atmosphere causes temperatures to swing from 427°C (day) to -173°C (night)."
  },
  {
    question: "What is the deepest known point in Earth’s oceans?",
    options: ["Tonga Trench", "Puerto Rico Trench", "Mariana Trench", "Java Trench"],
    answer: "Mariana Trench",
    fact: "The Challenger Deep in the Mariana Trench reaches about 10,984 meters below sea level."
  },
  {
    question: "Which language has the most native speakers in the world?",
    options: ["English", "Hindi", "Spanish", "Mandarin Chinese"],
    answer: "Mandarin Chinese",
    fact: "Over 900 million people speak Mandarin as their first language, primarily in China."
  },
  {
    question: "Which particle mediates the electromagnetic force in quantum field theory?",
    options: ["Gluon", "W boson", "Photon", "Z boson"],
    answer: "Photon",
    fact: "Photons are gauge bosons that carry the electromagnetic force between charged particles."
  },
  {
    question: "Which African country was never colonized during the Scramble for Africa?",
    options: ["Liberia", "Ethiopia", "Morocco", "Lesotho"],
    answer: "Ethiopia",
    fact: "Ethiopia successfully resisted Italian invasion in the late 19th century, maintaining independence."
  },
  {
    question: "Which enzyme is responsible for carbon fixation in the Calvin cycle?",
    options: ["ATP synthase", "Hexokinase", "Rubisco", "Pyruvate kinase"],
    answer: "Rubisco",
    fact: "Rubisco (ribulose-1,5-bisphosphate carboxylase/oxygenase) is the most abundant enzyme on Earth."
  },
  {
    question: "Which country has the most time zones, including overseas territories?",
    options: ["United States", "France", "Russia", "United Kingdom"],
    answer: "France",
    fact: "Due to overseas departments and territories, France spans 12 time zones, the most of any country."
  },
  {
    question: "Which philosopher introduced the concept of 'categorical imperative'?",
    options: ["David Hume", "Immanuel Kant", "John Locke", "Friedrich Nietzsche"],
    answer: "Immanuel Kant",
    fact: "Kant’s categorical imperative is a central concept in deontological moral philosophy."
  },
  {
    question: "What is the only mammal capable of sustained flight?",
    options: ["Flying squirrel", "Colugo", "Bat", "Sugar glider"],
    answer: "Bat",
    fact: "Bats are the only mammals with true powered flight, using membranous wings stretched over elongated fingers."
  },
  {
    question: "Which country has the highest number of UNESCO World Heritage Sites?",
    options: ["China", "Italy", "Spain", "France"],
    answer: "Italy",
    fact: "As of 2023, Italy has 58 UNESCO World Heritage Sites, the most of any country."
  },
  {
    question: "Which historical figure is credited with founding the first psychological laboratory?",
    options: ["Sigmund Freud", "William James", "Wilhelm Wundt", "Ivan Pavlov"],
    answer: "Wilhelm Wundt",
    fact: "Wundt established the first experimental psychology lab in Leipzig, Germany, in 1879."
  },
  {
    question: "Which planet rotates on its side with an axial tilt of about 98 degrees?",
    options: ["Venus", "Jupiter", "Uranus", "Neptune"],
    answer: "Uranus",
    fact: "Uranus’s extreme tilt causes it to orbit the Sun on its side, leading to unusual seasonal patterns."
  },
  {
    question: "Which country has the world’s largest proven oil reserves?",
    options: ["Saudi Arabia", "Russia", "Canada", "Venezuela"],
    answer: "Venezuela",
    fact: "Venezuela holds over 300 billion barrels of proven oil reserves, mostly in the Orinoco Belt."
  },
  {
    question: "In computing, what does 'RAID' stand for?",
    options: ["Redundant Array of Independent Disks", "Random Access Integrated Drive", "Rapid Array of Internal Devices", "Reliable Access to Independent Data"],
    answer: "Redundant Array of Independent Disks",
    fact: "RAID technology combines multiple disk drives to improve performance or provide fault tolerance."
  },
  {
    question: "Which ancient city was destroyed by the eruption of Mount Vesuvius in 79 AD?",
    options: ["Athens", "Pompeii", "Carthage", "Byzantium"],
    answer: "Pompeii",
    fact: "Pompeii was buried under volcanic ash and pumice, preserving many structures and human forms."
  },
  {
    question: "Which country has the highest density of lightning strikes per square kilometer annually?",
    options: ["USA", "Brazil", "Congo", "Venezuela"],
    answer: "Congo",
    fact: "The Democratic Republic of the Congo experiences the most lightning per area, especially near Lake Maracaibo."
  },
  {
    question: "Which Nobel laureate developed the theory of relativity?",
    options: ["Niels Bohr", "Albert Einstein", "Max Planck", "Ernest Rutherford"],
    answer: "Albert Einstein",
    fact: "Einstein won the 1921 Nobel Prize in Physics for the photoelectric effect, not relativity."
  },
  {
    question: "Which river forms the border between the United States and Mexico for a significant portion?",
    options: ["Colorado River", "Rio Grande", "Mississippi River", "Arkansas River"],
    answer: "Rio Grande",
    fact: "The Rio Grande serves as a natural border between Texas and Mexican states like Chihuahua and Tamaulipas."
  },
  {
    question: "Which enzyme is deficient in individuals with phenylketonuria (PKU)?",
    options: ["Lactase", "Phenylalanine hydroxylase", "Amylase", "Pepsin"],
    answer: "Phenylalanine hydroxylase",
    fact: "Without this enzyme, phenylalanine accumulates and can cause severe neurological damage."
  },
  {
    question: "Which country is the largest producer of saffron in the world?",
    options: ["India", "Spain", "Iran", "Greece"],
    answer: "Iran",
    fact: "Iran produces over 90% of the world’s saffron, primarily in the Khorasan region."
  },
  {
    question: "Which battle is considered the turning point of the Pacific Theater in WWII?",
    options: ["Battle of Iwo Jima", "Battle of Midway", "Battle of Guadalcanal", "Battle of Okinawa"],
    answer: "Battle of Midway",
    fact: "The U.S. victory at Midway in June 1942 destroyed four Japanese aircraft carriers, shifting momentum."
  },
  {
    question: "Which element is the most abundant in the Earth’s crust by mass?",
    options: ["Iron", "Oxygen", "Silicon", "Aluminum"],
    answer: "Oxygen",
    fact: "Oxygen makes up about 46.6% of the Earth’s crust by mass, mostly in silicate minerals."
  },
  {
    question: "Which country has the longest coastline in the world?",
    options: ["USA", "Australia", "Canada", "Russia"],
    answer: "Canada",
    fact: "Canada has over 202,000 km of coastline, the longest due to its Arctic islands and complex shorelines."
  },
  {
    question: "Which ancient script is the earliest known form of Chinese writing?",
    options: ["Oracle Bone Script", "Seal Script", "Bronze Script", "Clerical Script"],
    answer: "Oracle Bone Script",
    fact: "Used during the Shang Dynasty (c. 1200 BCE), it was inscribed on bones and turtle shells for divination."
  },
  {
    question: "Which physicist formulated the laws of black hole thermodynamics?",
    options: ["Stephen Hawking", "Roger Penrose", "Kip Thorne", "Jacob Bekenstein"],
    answer: "Jacob Bekenstein",
    fact: "Bekenstein proposed that black holes have entropy, leading to Hawking radiation theory."
  },
  {
    question: "Which country is the largest producer of quinoa in the world?",
    options: ["Peru", "Bolivia", "Ecuador", "Colombia"],
    answer: "Bolivia",
    fact: "Bolivia and Peru together produce over 80% of the world’s quinoa, with Bolivia leading in exports."
  },
  {
    question: "Which organ produces insulin in the human body?",
    options: ["Liver", "Pancreas", "Kidney", "Stomach"],
    answer: "Pancreas",
    fact: "The beta cells in the pancreas' islets of Langerhans secrete insulin to regulate blood glucose."
  },
  {
    question: "Which mountain range separates Europe from Asia?",
    options: ["Alps", "Carpathians", "Ural Mountains", "Caucasus Mountains"],
    answer: "Ural Mountains",
    fact: "The Urals stretch from the Arctic Ocean to the Caspian Sea, traditionally marking the Europe-Asia divide."
  },
  {
    question: "Which country has the highest number of lakes in the world?",
    options: ["Canada", "Finland", "Russia", "USA"],
    answer: "Canada",
    fact: "Canada has over 2 million lakes, covering nearly 9% of its surface area."
  },
  {
    question: "Which philosopher wrote 'Thus Spoke Zarathustra'?",
    options: ["Arthur Schopenhauer", "Friedrich Nietzsche", "Jean-Paul Sartre", "Martin Heidegger"],
    answer: "Friedrich Nietzsche",
    fact: "This philosophical novel introduces Nietzsche’s concept of the Übermensch (Overman)."
  },
  {
    question: "Which country is home to the world’s largest desert solar power plant?",
    options: ["Saudi Arabia", "China", "Morocco", "USA"],
    answer: "Morocco",
    fact: "The Noor Ouarzazate Solar Complex in Morocco is one of the largest concentrated solar power plants globally."
  },
  {
    question: "Which gas makes up the majority of Titan’s atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
    answer: "Nitrogen",
    fact: "Titan’s atmosphere is 95% nitrogen and 5% methane, with complex organic chemistry."
  },
  {
    question: "Which ancient civilization built the city of Machu Picchu?",
    options: ["Maya", "Aztec", "Inca", "Moche"],
    answer: "Inca",
    fact: "Machu Picchu was constructed in the 15th century by the Inca emperor Pachacuti."
  },
  {
    question: "Which country has the highest average elevation in the world?",
    options: ["Nepal", "Bhutan", "Tibet", "Afghanistan"],
    answer: "Tibet",
    fact: "Although Tibet is an autonomous region of China, it has the highest average elevation—over 4,500 meters."
  },
  {
    question: "Which scientist discovered the neutron in 1932?",
    options: ["Ernest Rutherford", "James Chadwick", "Niels Bohr", "Enrico Fermi"],
    answer: "James Chadwick",
    fact: "Chadwick’s discovery of the neutron earned him the 1935 Nobel Prize in Physics."
  },
  {
    question: "Which ocean current is responsible for Europe’s relatively mild climate?",
    options: ["Kuroshio Current", "California Current", "Gulf Stream", "North Atlantic Drift"],
    answer: "Gulf Stream",
    fact: "The Gulf Stream transports warm water from the Gulf of Mexico to Western Europe."
  },
  {
    question: "Which country has the most nuclear reactors in operation?",
    options: ["China", "Russia", "USA", "France"],
    answer: "USA",
    fact: "The U.S. operates over 90 commercial nuclear reactors, more than any other country."
  },
  {
    question: "Which ancient text is the oldest known work of literature?",
    options: ["The Iliad", "The Epic of Gilgamesh", "The Rigveda", "The Book of the Dead"],
    answer: "The Epic of Gilgamesh",
    fact: "Originating in Mesopotamia around 2100 BCE, it predates Homer by over a millennium."
  },
  {
    question: "Which planet has the shortest day in the solar system?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    answer: "Jupiter",
    fact: "Jupiter completes a rotation in about 9 hours and 55 minutes, the shortest of any planet."
  },
  {
    question: "Which country is the largest exporter of coffee in the world?",
    options: ["Colombia", "Vietnam", "Brazil", "Ethiopia"],
    answer: "Brazil",
    fact: "Brazil produces about one-third of the world’s coffee and is the top exporter."
  },
  {
    question: "Which enzyme breaks down lactose in the human digestive system?",
    options: ["Lipase", "Amylase", "Lactase", "Pepsin"],
    answer: "Lactase",
    fact: "Lactase deficiency causes lactose intolerance, common in adults worldwide."
  },
  {
    question: "Which historical empire was the largest contiguous land empire in history?",
    options: ["Roman Empire", "British Empire", "Mongol Empire", "Ottoman Empire"],
    answer: "Mongol Empire",
    fact: "At its peak, the Mongol Empire spanned over 24 million square kilometers under Genghis Khan’s descendants."
  },
  {
    question: "Which country has the highest number of active volcanoes?",
    options: ["Japan", "Indonesia", "Philippines", "Iceland"],
    answer: "Indonesia",
    fact: "Indonesia has over 130 active volcanoes due to its location on the Pacific Ring of Fire."
  },
  {
    question: "Which scientist proposed the theory of plate tectonics?",
    options: ["Charles Lyell", "Alfred Wegener", "Harry Hess", "James Hutton"],
    answer: "Alfred Wegener",
    fact: "Wegener proposed continental drift in 1912, a precursor to modern plate tectonics theory."
  },
  {
    question: "Which country has the world’s oldest continuously operating university?",
    options: ["University of Bologna", "University of Oxford", "Al-Qarawiyyin", "University of Salamanca"],
    answer: "Al-Qarawiyyin",
    fact: "Founded in 859 CE in Fez, Morocco, Al-Qarawiyyin is recognized by UNESCO and Guinness as the oldest."
  },
  {
    question: "Which particle is responsible for giving other particles mass via the Higgs mechanism?",
    options: ["Photon", "Gluon", "Higgs boson", "Graviton"],
    answer: "Higgs boson",
    fact: "The Higgs boson was discovered at CERN in 2012, confirming the Standard Model of particle physics."
  },
  {
    question: "Which country has the highest percentage of its population living in urban areas?",
    options: ["USA", "Singapore", "Belgium", "Monaco"],
    answer: "Monaco",
    fact: "Monaco is 100% urban, with no rural areas, due to its tiny size and high population density."
  },
  {
    question: "Which ancient civilization developed the first known 365-day calendar?",
    options: ["Babylonians", "Egyptians", "Maya", "Persians"],
    answer: "Egyptians",
    fact: "The Egyptian solar calendar had 12 months of 30 days plus 5 epagomenal days."
  },
  {
    question: "Which country has the highest number of time zones in its mainland territory?",
    options: ["Russia", "USA", "China", "Canada"],
    answer: "Russia",
    fact: "Russia spans 11 time zones in its mainland, though it officially uses fewer due to policy."
  },
  {
    question: "Which planet has the most moons in the solar system?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn",
    fact: "As of 2023, Saturn has 146 confirmed moons, surpassing Jupiter."
  },
  {
    question: "Which country is the largest producer of lithium in the world?",
    options: ["Australia", "Chile", "Argentina", "China"],
    answer: "Australia",
    fact: "Australia produces over 50% of the world’s lithium, mostly from hard-rock mining."
  },
  {
    question: "Which philosopher is known for the allegory of the cave?",
    options: ["Aristotle", "Plato", "Socrates", "Pythagoras"],
    answer: "Plato",
    fact: "The allegory appears in Plato’s 'Republic' to illustrate the difference between perception and reality."
  },
  {
    question: "Which country has the highest number of endemic species per square kilometer?",
    options: ["Madagascar", "Galápagos Islands", "New Zealand", "Hawaii"],
    answer: "Hawaii",
    fact: "Hawaii has extremely high endemism due to isolation, with over 90% of its native species found nowhere else."
  },
  {
    question: "Which historical event marked the beginning of the Cold War?",
    options: ["Berlin Blockade", "Truman Doctrine", "Yalta Conference", "Fall of Berlin Wall"],
    answer: "Truman Doctrine",
    fact: "Announced in 1947, the Truman Doctrine signaled U.S. commitment to containing communism."
  },
  {
    question: "Which country has the world’s largest rainforest?",
    options: ["Indonesia", "Congo", "Peru", "Brazil"],
    answer: "Brazil",
    fact: "The Amazon Rainforest, mostly in Brazil, is the largest tropical rainforest on Earth."
  },
  {
    question: "Which scientist discovered penicillin?",
    options: ["Louis Pasteur", "Robert Koch", "Alexander Fleming", "Joseph Lister"],
    answer: "Alexander Fleming",
    fact: "Fleming discovered penicillin in 1928, revolutionizing antibiotic treatment."
  },
  {
    question: "Which country has the highest number of official languages?",
    options: ["India", "South Africa", "Switzerland", "Belgium"],
    answer: "South Africa",
    fact: "South Africa recognizes 11 official languages, including Zulu, Xhosa, and Afrikaans."
  },
  {
    question: "Which ancient structure is the only surviving wonder of the ancient world?",
    options: ["Colossus of Rhodes", "Hanging Gardens of Babylon", "Great Pyramid of Giza", "Temple of Artemis"],
    answer: "Great Pyramid of Giza",
    fact: "Built around 2580 BCE, it was the tallest man-made structure for over 3,800 years."
  },
  {
    question: "Which country has the highest number of microstates within its borders?",
    options: ["Italy", "Germany", "France", "Austria"],
    answer: "Italy",
    fact: "Italy surrounds two sovereign microstates: Vatican City and San Marino."
  },
  {
    question: "Which element is the most conductive of electricity?",
    options: ["Copper", "Silver", "Gold", "Aluminum"],
    answer: "Silver",
    fact: "Silver has the highest electrical conductivity of all elements, though copper is more commonly used."
  },
  {
    question: "Which country has the highest number of earthquakes annually?",
    options: ["Japan", "Indonesia", "USA", "Mexico"],
    answer: "Japan",
    fact: "Japan experiences over 1,500 detectable earthquakes per year due to tectonic plate boundaries."
  },
  {
    question: "Which philosopher wrote 'Critique of Pure Reason'?",
    options: ["Georg Hegel", "Immanuel Kant", "David Hume", "John Stuart Mill"],
    answer: "Immanuel Kant",
    fact: "Published in 1781, this work laid the foundation for modern epistemology and metaphysics."
  },
  {
    question: "Which country has the largest number of native English speakers?",
    options: ["USA", "UK", "Canada", "Australia"],
    answer: "USA",
    fact: "Over 230 million Americans speak English as their first language."
  },
  {
    question: "Which planet has the strongest magnetic field in the solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
    fact: "Jupiter’s magnetic field is 20,000 times stronger than Earth’s, generated by metallic hydrogen."
  },
  {
    question: "Which country has the highest number of UNESCO Biosphere Reserves?",
    options: ["USA", "Mexico", "China", "Spain"],
    answer: "Spain",
    fact: "Spain hosts over 50 UNESCO Biosphere Reserves, the most in the world."
  },
  {
    question: "Which ancient civilization invented the wheel?",
    options: ["Egyptians", "Sumerians", "Indus Valley", "Minoans"],
    answer: "Sumerians",
    fact: "The wheel was invented in Mesopotamia around 3500 BCE, primarily for pottery and transport."
  },
  {
    question: "Which country has the highest average IQ according to meta-analyses?",
    options: ["Japan", "South Korea", "Singapore", "China"],
    answer: "Singapore",
    fact: "Recent studies suggest Singapore has the highest average IQ, around 108, though debated."
  },
  {
    question: "Which country has the most extensive railway network in the world?",
    options: ["Russia", "USA", "China", "India"],
    answer: "USA",
    fact: "The U.S. has over 250,000 km of railway, mostly freight, the longest network globally."
  },
  {
    question: "Which scientist formulated the laws of inheritance in genetics?",
    options: ["Charles Darwin", "Gregor Mendel", "James Watson", "Thomas Hunt Morgan"],
    answer: "Gregor Mendel",
    fact: "Mendel’s pea plant experiments in the 1860s established the basic principles of heredity."
  },
  {
    question: "Which country has the highest number of billionaires per capita?",
    options: ["USA", "Switzerland", "Israel", "Sweden"],
    answer: "Switzerland",
    fact: "Switzerland has over 1,000 billionaires relative to its population of 8.7 million."
  },
  {
    question: "Which country is the largest producer of dates in the world?",
    options: ["Egypt", "Iraq", "Saudi Arabia", "Iran"],
    answer: "Egypt",
    fact: "Egypt leads global date production, harvesting over 1.7 million tons annually."
  },
  {
    question: "Which historical figure was known as the 'Scourge of God'?",
    options: ["Genghis Khan", "Attila the Hun", "Timur", "Napoleon"],
    answer: "Attila the Hun",
    fact: "Attila earned the title 'Flagellum Dei' from terrified Romans during his invasions of Europe."
  },
  {
    question: "Which country has the highest number of native reptile species?",
    options: ["Australia", "Madagascar", "Mexico", "Brazil"],
    answer: "Australia",
    fact: "Australia has over 900 reptile species, including 86% of its snakes and lizards found nowhere else."
  },
  {
    question: "Which country has the world’s largest cave by volume?",
    options: ["Son Doong Cave", "Mammoth Cave", "Waitomo Caves", "Carlsbad Caverns"],
    answer: "Son Doong Cave",
    fact: "Located in Vietnam, Son Doong is over 5.5 km long and large enough to fit a 40-story building."
  },
  {
    question: "Which philosopher introduced the concept of 'tabula rasa'?",
    options: ["René Descartes", "John Locke", "Immanuel Kant", "David Hume"],
    answer: "John Locke",
    fact: "Locke argued that the mind is a 'blank slate' at birth, shaped by experience."
  },
  {
    question: "Which country has the highest number of plant species?",
    options: ["Brazil", "Colombia", "South Africa", "Costa Rica"],
    answer: "Brazil",
    fact: "Brazil hosts over 46,000 plant species, the most of any country, largely due to the Amazon."
  },
  {
    question: "Which country has the highest number of Nobel laureates per capita?",
    options: ["USA", "UK", "Sweden", "Switzerland"],
    answer: "Sweden",
    fact: "Sweden has one of the highest Nobel laureate densities, partly due to hosting the prize ceremonies."
  },
  {
    question: "Which ancient city was the capital of the Achaemenid Empire?",
    options: ["Babylon", "Persepolis", "Nineveh", "Susa"],
    answer: "Persepolis",
    fact: "Persepolis was founded by Darius I and served as the ceremonial capital of Persia."
  },
  {
    question: "Which country has the highest number of dialects of a single language?",
    options: ["India", "China", "Nigeria", "Papua New Guinea"],
    answer: "Papua New Guinea",
    fact: "Papua New Guinea has over 800 languages, the most linguistically diverse country on Earth."
  },
  {
    question: "Which planet has the longest rotational period?",
    options: ["Venus", "Mercury", "Mars", "Jupiter"],
    answer: "Venus",
    fact: "Venus rotates once every 243 Earth days, and in the opposite direction to most planets."
  },
  {
    question: "Which country has the highest number of UNESCO Intangible Cultural Heritage elements?",
    options: ["Japan", "China", "France", "Italy"],
    answer: "China",
    fact: "China has over 40 elements listed, including Peking Opera and acupuncture."
  },
  {
    question: "Which scientist discovered the structure of DNA?",
    options: ["Linus Pauling", "Rosalind Franklin", "James Watson & Francis Crick", "Maurice Wilkins"],
    answer: "James Watson & Francis Crick",
    fact: "They proposed the double helix model in 1953, using Franklin’s X-ray diffraction data."
  },
  {
    question: "Which country has the highest number of Olympic medals per capita?",
    options: ["USA", "Norway", "Hungary", "Jamaica"],
    answer: "Norway",
    fact: "Norway dominates Winter Olympics, giving it the highest medal-to-population ratio."
  },
  {
    question: "Which country has the highest number of active geysers?",
    options: ["Iceland", "New Zealand", "Russia", "USA"],
    answer: "USA",
    fact: "Yellowstone National Park contains over 500 active geysers, half the world’s total."
  },
  {
    question: "Which ancient civilization developed the first known system of democracy?",
    options: ["Rome", "Athens", "Carthage", "Sparta"],
    answer: "Athens",
    fact: "Classical Athens in the 5th century BCE introduced direct democracy for male citizens."
  },
  {
    question: "Which country has the highest number of airports?",
    options: ["USA", "Brazil", "Canada", "Russia"],
    answer: "USA",
    fact: "The U.S. has over 13,000 public and private airports, more than any other country."
  },
  {
    question: "Which element has the highest melting point?",
    options: ["Tungsten", "Carbon", "Osmium", "Rhenium"],
    answer: "Carbon",
    fact: "Graphite sublimes at around 3,650°C; diamond melts at ~4,000°C under pressure."
  },
  {
    question: "Which country has the highest number of UNESCO World Heritage Sites in Africa?",
    options: ["Egypt", "Morocco", "South Africa", "Ethiopia"],
    answer: "Morocco",
    fact: "Morocco has 9 UNESCO World Heritage Sites, the most in Africa."
  },
  {
    question: "Which country has the highest number of satellites launched?",
    options: ["USA", "Russia", "China", "Japan"],
    answer: "USA",
    fact: "The U.S. has launched over 6,000 satellites, more than any other nation."
  },
  {
    question: "Which country has the highest number of native bee species?",
    options: ["Australia", "South Africa", "Mexico", "USA"],
    answer: "South Africa",
    fact: "South Africa has over 2,000 bee species, with high endemism in the Cape region."
  },
  {
    question: "Which historical figure founded the Mongol Empire?",
    options: ["Kublai Khan", "Genghis Khan", "Ogedei Khan", "Batu Khan"],
    answer: "Genghis Khan",
    fact: "Temujin, later Genghis Khan, united Mongol tribes and founded the empire in 1206."
  },
  {
    question: "Which country has the highest number of desalination plants?",
    options: ["Saudi Arabia", "Israel", "USA", "Australia"],
    answer: "Saudi Arabia",
    fact: "Saudi Arabia operates over 30 major desalination plants, supplying most of its drinking water."
  },
  {
    question: "Which country has the highest number of native fish species in freshwater?",
    options: ["Brazil", "Congo", "USA", "Australia"],
    answer: "Brazil",
    fact: "The Amazon Basin alone hosts over 3,000 freshwater fish species."
  },
  {
    question: "Which country has the highest number of tornadoes annually?",
    options: ["Canada", "USA", "Bangladesh", "Argentina"],
    answer: "USA",
    fact: "The U.S. averages over 1,200 tornadoes per year, mostly in 'Tornado Alley.'"
  },
  {
    question: "Which country has the highest number of Buddhist monks per capita?",
    options: ["Thailand", "Myanmar", "Bhutan", "Sri Lanka"],
    answer: "Myanmar",
    fact: "Myanmar has one of the highest ratios of monks to population, especially during youth ordination."
  },
  {
    question: "Which country has the highest number of snake species?",
    options: ["Australia", "Brazil", "India", "Mexico"],
    answer: "Australia",
    fact: "Australia has over 140 snake species, 100 of which are venomous."
  },
  {
    question: "Which country has the highest number of bird species?",
    options: ["Colombia", "Peru", "Brazil", "Indonesia"],
    answer: "Colombia",
    fact: "Colombia has over 1,900 recorded bird species, the most in the world."
  },
  {
    question: "Which country has the highest number of endemic mammals?",
    options: ["Madagascar", "Australia", "Indonesia", "Philippines"],
    answer: "Indonesia",
    fact: "Indonesia has over 400 endemic mammal species, including the Komodo dragon and Tarsiers."
  }
],
   expert: [
  {
    question: "Which country has a time zone that is UTC+14, making it the first to see a new day?",
    options: ["Kiribati", "Samoa", "Tonga", "Fiji"],
    answer: "Kiribati",
    fact: "Kiribati's Line Islands (e.g., Kiritimati) are at UTC+14, the earliest time zone in the world, due to a 1995 realignment."
  },
  {
    question: "Which subatomic particle is responsible for mediating the weak nuclear force and has a mass of approximately 80.4 GeV/c²?",
    options: ["Photon", "Gluon", "W boson", "Higgs boson"],
    answer: "W boson",
    fact: "The W⁺ and W⁻ bosons mediate charged-current weak interactions, such as beta decay, and were discovered at CERN in 1983."
  },
  {
    question: "What is the only known exoplanet with confirmed atmospheric oxygen (O₂) and abiotic origin?",
    options: ["Proxima Centauri b", "TRAPPIST-1e", "KOI-456.04", "None confirmed"],
    answer: "None confirmed",
    fact: "No exoplanet has confirmed biotic O₂; detected oxygen in some atmospheres (e.g., K2-18b) may stem from photochemical processes."
  },
  {
    question: "Which tectonic plate is fully submerged and almost entirely oceanic, located west of Central America?",
    options: ["Cocos Plate", "Nazca Plate", "Caribbean Plate", "Rivera Plate"],
    answer: "Cocos Plate",
    fact: "The Cocos Plate subducts beneath the Caribbean and North American plates, triggering Central American volcanism."
  },
  {
    question: "In general relativity, what tensor describes the curvature of spacetime due to mass and energy?",
    options: ["Stress-energy tensor", "Ricci tensor", "Einstein tensor", "Riemann tensor"],
    answer: "Einstein tensor",
    fact: "The Einstein tensor G_μν = R_μν − ½Rg_μν appears in the Einstein field equations: G_μν = (8πG/c⁴)T_μν."
  },
  {
    question: "Which ancient script, used in the Indus Valley Civilization, remains undeciphered to this day?",
    options: ["Brahmi", "Kharosthi", "Harappan script", "Sumerian cuneiform"],
    answer: "Harappan script",
    fact: "Despite over 400 distinct symbols found on seals, the Harappan script lacks a bilingual inscription for decipherment."
  },
  {
    question: "What is the theoretical maximum efficiency of a heat engine operating between 1000 K and 300 K?",
    options: ["60%", "70%", "85%", "90%"],
    answer: "70%",
    fact: "Using Carnot efficiency: η = 1 − (T_cold/T_hot) = 1 − (300/1000) = 0.7 → 70%."
  },
  {
    question: "Which country has a 'closed' capital city that is not open to foreign visitors without special permits?",
    options: ["Naypyidaw (Myanmar)", "Astana (Kazakhstan)", "Pyongyang (North Korea)", "Ashgabat (Turkmenistan)"],
    answer: "Naypyidaw (Myanmar)",
    fact: "Naypyidaw restricts foreign access to certain zones; journalists and tourists require government approval for entry."
  },
  {
    question: "Which quantum phenomenon allows particles to tunnel through energy barriers higher than their kinetic energy?",
    options: ["Superposition", "Entanglement", "Tunneling", "Decoherence"],
    answer: "Tunneling",
    fact: "Quantum tunneling explains alpha decay, scanning tunneling microscopes, and fusion in stars."
  },
  {
    question: "Which language family includes both Basque and Burushaski, despite being geographically and genetically isolated?",
    options: ["Nostratic", "Dené–Caucasian", "Language isolates", "Papuan"],
    answer: "Language isolates",
    fact: "Basque (Europe) and Burushaski (Pakistan) are isolates with no proven genealogical links to other families."
  },
  {
    question: "What is the Schwarzschild radius of a black hole with 10 solar masses?",
    options: ["15 km", "30 km", "60 km", "100 km"],
    answer: "30 km",
    fact: "Rs = 2GM/c² ≈ 2.95 km per solar mass → 10 × 2.95 ≈ 29.5 km."
  },
  {
    question: "Which country has the highest percentage of its land area located below sea level?",
    options: ["Netherlands", "Denmark", "Bangladesh", "Maldives"],
    answer: "Netherlands",
    fact: "Approximately 26% of the Netherlands is below sea level, protected by dikes and polders."
  },
  {
    question: "Which enzyme catalyzes the rate-limiting step in the citric acid cycle?",
    options: ["Succinate dehydrogenase", "Isocitrate dehydrogenase", "Malate dehydrogenase", "Fumarase"],
    answer: "Isocitrate dehydrogenase",
    fact: "This NAD⁺-dependent enzyme converts isocitrate to α-ketoglutarate, producing NADH and CO₂."
  },
  {
    question: "Which nation has the world’s only triply landlocked capital city?",
    options: ["Austria", "Uzbekistan", "Chad", "Luxembourg"],
    answer: "Uzbekistan",
    fact: "Tashkent is in Uzbekistan, which is landlocked; its neighbors Kazakhstan, Kyrgyzstan, and Tajikistan are also landlocked."
  },
  {
    question: "In string theory, how many spacetime dimensions are required for consistency in bosonic string theory?",
    options: ["10", "11", "26", "4"],
    answer: "26",
    fact: "Bosonic string theory requires 26 dimensions to cancel quantum anomalies; superstring theory uses 10."
  },
  {
    question: "Which ancient city was the center of the Minoan civilization on Crete?",
    options: ["Mycenae", "Knossos", "Phaistos", "Akrotiri"],
    answer: "Knossos",
    fact: "Knossos was the largest Bronze Age Minoan center, associated with the myth of the Minotaur and the Labyrinth."
  },
  {
    question: "Which atmospheric layer contains the ozone layer and experiences temperature inversion due to UV absorption?",
    options: ["Troposphere", "Mesosphere", "Stratosphere", "Thermosphere"],
    answer: "Stratosphere",
    fact: "The stratosphere warms with altitude (up to 0°C) due to ozone absorbing UV radiation between 15–35 km."
  },
  {
    question: "Which country has the highest number of active oil rigs offshore in deepwater (>1500m)?",
    options: ["USA", "Brazil", "Norway", "Nigeria"],
    answer: "Brazil",
    fact: "Petrobras operates over 50 deepwater rigs in the pre-salt fields of the Santos and Campos Basins."
  },
  {
    question: "Which particle is the primary component of dark matter according to the WIMP hypothesis?",
    options: ["Neutrino", "Axion", "Neutralino", "Gravitino"],
    answer: "Neutralino",
    fact: "The neutralino, a supersymmetric particle, is a leading WIMP (Weakly Interacting Massive Particle) candidate."
  },
  {
    question: "Which nation has a constitutionally mandated policy of 'Gross National Happiness'?",
    options: ["Nepal", "Bhutan", "Sri Lanka", "Mongolia"],
    answer: "Bhutan",
    fact: "Bhutan enshrined GNH in its 2008 constitution as a development philosophy prioritizing well-being over GDP."
  },
  {
    question: "What is the dominant process powering the Sun’s energy output?",
    options: ["CNO cycle", "Triple-alpha process", "Proton-proton chain", "Fusion of helium"],
    answer: "Proton-proton chain",
    fact: "The p-p chain converts hydrogen to helium and accounts for ~99% of the Sun’s energy; CNO dominates in hotter stars."
  },
  {
    question: "Which country has the world’s largest known reserve of rare earth elements?",
    options: ["USA", "Australia", "China", "Greenland"],
    answer: "China",
    fact: "China holds ~37% of global rare earth reserves and controls ~70% of processing capacity."
  },
  {
    question: "Which ancient text contains the earliest known reference to zero as a number?",
    options: ["Bakhshali Manuscript", "Sulba Sutras", "Aryabhatiya", "Brahmasphutasiddhanta"],
    answer: "Brahmasphutasiddhanta",
    fact: "Brahmagupta (628 CE) defined rules for arithmetic with zero, though the Bakhshali manuscript (3rd c.) uses a dot symbol."
  },
  {
    question: "Which ocean current is part of the Atlantic Meridional Overturning Circulation (AMOC) and transports warm water northward?",
    options: ["Labrador Current", "Canary Current", "Gulf Stream", "North Equatorial Current"],
    answer: "Gulf Stream",
    fact: "The Gulf Stream is a key component of AMOC; its slowdown could disrupt European climate patterns."
  },
  {
    question: "Which country has the highest number of languages spoken per capita?",
    options: ["India", "Nigeria", "Papua New Guinea", "Indonesia"],
    answer: "Papua New Guinea",
    fact: "With over 840 languages in a population of ~9 million, PNG has the highest linguistic density globally."
  },
  {
    question: "Which quantum number determines the orientation of an electron’s orbital in space?",
    options: ["Principal", "Azimuthal", "Magnetic", "Spin"],
    answer: "Magnetic",
    fact: "The magnetic quantum number (mₗ) specifies orbital orientation and ranges from −ℓ to +ℓ."
  },
  {
    question: "Which nation is the only one with a flag that is not quadrilateral?",
    options: ["Nepal", "Switzerland", "Vatican City", "Qatar"],
    answer: "Nepal",
    fact: "Nepal’s flag consists of two stacked triangles, symbolizing the Himalayas and the two major religions."
  },
  {
    question: "Which enzyme is targeted by glyphosate, the active ingredient in many herbicides?",
    options: ["PEP carboxylase", "RuBisCO", "EPSP synthase", "ATP synthase"],
    answer: "EPSP synthase",
    fact: "Glyphosate inhibits EPSP synthase in the shikimate pathway, essential for aromatic amino acid synthesis in plants."
  },
  {
    question: "Which tectonic boundary is associated with the formation of the Himalayas?",
    options: ["Divergent", "Transform", "Subduction", "Continent-continent collision"],
    answer: "Continent-continent collision",
    fact: "The Indian Plate collided with the Eurasian Plate ~50 million years ago, uplifting the Himalayas."
  },
  {
    question: "Which country has the highest percentage of electricity generated from geothermal sources?",
    options: ["Iceland", "Philippines", "Kenya", "New Zealand"],
    answer: "Iceland",
    fact: "Iceland generates ~25% of its electricity and 90% of heating from geothermal energy."
  },
  {
    question: "Which philosopher introduced the 'veil of ignorance' as a thought experiment in justice?",
    options: ["John Rawls", "Robert Nozick", "Immanuel Kant", "Jeremy Bentham"],
    answer: "John Rawls",
    fact: "Rawls’ 'A Theory of Justice' (1971) uses the veil of ignorance to argue for fair distribution principles."
  },
  {
    question: "Which exoplanet is located in the habitable zone of Proxima Centauri and is the closest known exoplanet to Earth?",
    options: ["Proxima Centauri b", "LHS 1140b", "Teegarden’s Star b", "Wolf 1069 b"],
    answer: "Proxima Centauri b",
    fact: "Located 4.24 light-years away, Proxima b orbits within the habitable zone but may be tidally locked and irradiated."
  },
  {
    question: "Which country has the world’s largest stockpile of weapons-grade plutonium?",
    options: ["USA", "Russia", "India", "North Korea"],
    answer: "Russia",
    fact: "Russia possesses ~128 metric tons of civilian and military plutonium, the largest global stockpile."
  },
  {
    question: "Which linguistic phenomenon explains the evolution of Latin /k/ before /e,i/ into /s/ in French (e.g., centum → cent)?",
    options: ["Palatalization", "Lenition", "Assimilation", "Metathesis"],
    answer: "Palatalization",
    fact: "Velar consonants like /k/ shifted to /s/ or /ʃ/ before front vowels in Western Romance languages."
  },
  {
    question: "Which nation has the highest number of nuclear reactors under construction as of 2024?",
    options: ["India", "China", "Turkey", "Russia"],
    answer: "China",
    fact: "China has over 20 reactors under construction, part of its plan to reach 150 GW nuclear capacity by 2035."
  },
  {
    question: "Which quantum state allows two particles to share a single wavefunction, even when separated by large distances?",
    options: ["Superposition", "Coherence", "Entanglement", "Interference"],
    answer: "Entanglement",
    fact: "Entangled particles exhibit correlated measurements instantaneously, violating classical locality (Bell’s theorem)."
  },
  {
    question: "Which ancient civilization developed the Antikythera mechanism, an early analog computer?",
    options: ["Egyptians", "Romans", "Greeks", "Persians"],
    answer: "Greeks",
    fact: "Recovered from a shipwreck, the mechanism (c. 100 BCE) predicted eclipses and planetary motions with gears."
  },
  {
    question: "Which country has the highest albedo due to permanent ice cover?",
    options: ["Canada", "Antarctica", "Greenland", "Russia"],
    answer: "Antarctica",
    fact: "Antarctica reflects up to 90% of incoming solar radiation due to its ice sheet, the highest planetary albedo."
  },
  {
    question: "Which enzyme is used in CRISPR-Cas9 to create double-strand breaks in DNA?",
    options: ["Reverse transcriptase", "DNA ligase", "Cas9 endonuclease", "Polymerase"],
    answer: "Cas9 endonuclease",
    fact: "Cas9 is guided by RNA to specific DNA sequences, enabling precise genome editing."
  },
  {
    question: "Which nation has a 'non-aligned' foreign policy despite hosting a Chinese naval base in the Indian Ocean?",
    options: ["Sri Lanka", "Maldives", "Mauritius", " Seychelles"],
    answer: "Sri Lanka",
    fact: "Sri Lanka maintains non-alignment but allowed Chinese port development in Hambantota, raising strategic concerns."
  },
  {
    question: "Which particle is the quantum of the gravitational field in theoretical physics?",
    options: ["Graviton", "Higgs boson", "Z boson", "Photon"],
    answer: "Graviton",
    fact: "The graviton (spin-2, massless) is hypothesized in quantum gravity theories but not yet detected."
  },
  {
    question: "Which country has the highest number of endemic flowering plant species per square kilometer?",
    options: ["Madagascar", "South Africa (Cape Floristic Region)", "Ecuador", "Costa Rica"],
    answer: "South Africa (Cape Floristic Region)",
    fact: "The Cape Floral Kingdom has over 9,000 species in 90,000 km², 70% endemic—highest plant diversity per area."
  },
  {
    question: "Which historical empire used the 'Pax Mongolica' to enable safe trade across Eurasia in the 13th–14th centuries?",
    options: ["Ottoman", "Mongol", "Mughal", "Byzantine"],
    answer: "Mongol",
    fact: "The Mongol Empire’s stability allowed the Silk Road to flourish, facilitating cultural and technological exchange."
  },
  {
    question: "Which country has the highest concentration of permafrost carbon?",
    options: ["Canada", "Alaska", "Siberia (Russia)", "Scandinavia"],
    answer: "Siberia (Russia)",
    fact: "Siberia stores over 1,000 billion tons of organic carbon in permafrost, a major climate feedback risk."
  },
  {
    question: "Which quantum principle prevents two identical fermions from occupying the same quantum state?",
    options: ["Heisenberg Uncertainty", "Pauli Exclusion", "Born Rule", "Copenhagen Interpretation"],
    answer: "Pauli Exclusion",
    fact: "This principle underlies electron shell structure and the periodic table’s organization."
  },
  {
    question: "Which nation has the only constitution to legally recognize the rights of nature?",
    options: ["Bolivia", "Ecuador", "New Zealand", "Costa Rica"],
    answer: "Ecuador",
    fact: "Ecuador’s 2008 constitution grants ecosystems the right to exist and regenerate, enforceable by citizens."
  },
  {
    question: "Which star is the most massive known, with an estimated 260 solar masses?",
    options: ["Betelgeuse", "R136a1", "Eta Carinae", "VY Canis Majoris"],
    answer: "R136a1",
    fact: "Located in the Tarantula Nebula, R136a1 exceeds theoretical mass limits and loses mass rapidly via stellar winds."
  },
  {
    question: "Which country has the highest number of seismic monitoring stations per capita?",
    options: ["Japan", "Iceland", "Italy", "Chile"],
    answer: "Japan",
    fact: "Japan operates over 1,000 seismometers for early warning systems due to high tectonic activity."
  },
  {
    question: "Which linguistic term describes a word that is spelled the same forward and backward (e.g., 'radar')?",
    options: ["Palindrome", "Anagram", "Tautonym", "Capitonym"],
    answer: "Palindrome",
    fact: "Palindromes can be words, phrases, or numbers; 'A man, a plan, a canal: Panama' is a famous example."
  },
  {
    question: "Which nation has the highest percentage of its GDP spent on R&D?",
    options: ["USA", "Germany", "South Korea", "Israel"],
    answer: "Israel",
    fact: "Israel spends over 4.9% of its GDP on R&D, the highest globally, driven by tech and defense sectors."
  },
  {
    question: "Which quantum number defines the shape of an atomic orbital?",
    options: ["n", "l", "mₗ", "mₛ"],
    answer: "l",
    fact: "The azimuthal quantum number (l) determines orbital shape: s (0), p (1), d (2), f (3)."
  },
  {
    question: "Which country has the only active cryovolcanoes on Earth?",
    options: ["Russia", "USA (Alaska)", "Azerbaijan", "Turkmenistan"],
    answer: "Azerbaijan",
    fact: "Azerbaijan’s mud volcanoes, like Gobustan, erupt water, gas, and mud—similar to icy moons like Enceladus."
  },
  {
    question: "Which ancient city was destroyed by the Minoan eruption of Thera (Santorini) around 1600 BCE?",
    options: ["Knossos", "Akrotiri", "Phaistos", "Malia"],
    answer: "Akrotiri",
    fact: "Akrotiri was buried under ash, preserving multi-story buildings and frescoes in remarkable detail."
  },
  {
    question: "Which country has the highest number of nuclear-powered icebreakers?",
    options: ["USA", "Canada", "Russia", "Finland"],
    answer: "Russia",
    fact: "Russia operates over 40 icebreakers, including 7 nuclear-powered ones, crucial for Arctic shipping routes."
  },
  {
    question: "Which particle is the antiparticle of the electron?",
    options: ["Proton", "Positron", "Neutrino", "Muon"],
    answer: "Positron",
    fact: "The positron (e⁺) was the first antimatter particle discovered, by Carl Anderson in 1932."
  },
  {
    question: "Which nation has the highest number of UNESCO Global Geoparks?",
    options: ["China", "Germany", "Japan", "Spain"],
    answer: "China",
    fact: "China hosts over 40 UNESCO Global Geoparks, more than any other country, promoting geological heritage."
  },
  {
    question: "Which quantum process explains the emission of particles from black holes due to vacuum fluctuations?",
    options: ["Hawking radiation", "Unruh effect", "Casimir effect", "Pair production"],
    answer: "Hawking radiation",
    fact: "Near the event horizon, virtual particle pairs can separate, with one escaping as radiation."
  },
  {
    question: "Which country has the highest number of endemic amphibian species?",
    options: ["Costa Rica", "Madagascar", "Colombia", "Ecuador"],
    answer: "Colombia",
    fact: "Colombia has over 800 amphibian species, with high endemism in the Andes and Chocó regions."
  },
  {
    question: "Which ancient script was used to write the Ugaritic language and is one of the earliest alphabetic systems?",
    options: ["Phoenician", "Ugaritic cuneiform", "Linear B", "Proto-Sinaitic"],
    answer: "Ugaritic cuneiform",
    fact: "Ugaritic (14th c. BCE) used a cuneiform alphabet of 30 letters, a precursor to Phoenician."
  },
  {
    question: "Which country has the highest number of satellites dedicated to Earth observation?",
    options: ["USA", "China", "EU (Copernicus)", "India"],
    answer: "USA",
    fact: "The U.S. operates hundreds of Earth-observing satellites, including Landsat, MODIS, and commercial fleets."
  },
  {
    question: "Which enzyme is defective in Tay-Sachs disease?",
    options: ["Hexosaminidase A", "Phenylalanine hydroxylase", "Galactose-1-phosphate uridylyltransferase", "Glucocerebrosidase"],
    answer: "Hexosaminidase A",
    fact: "Deficiency leads to GM2 ganglioside accumulation in neurons, causing fatal neurodegeneration."
  },
  {
    question: "Which nation has the highest percentage of land area designated as protected (national parks, reserves)?",
    options: ["Brazil", "Australia", "Greenland", "Venezuela"],
    answer: "Greenland",
    fact: "Over 40% of Greenland is protected, including Northeast Greenland National Park, the world’s largest."
  },
  {
    question: "Which quantum state describes a system existing in multiple states simultaneously until measured?",
    options: ["Entanglement", "Decoherence", "Superposition", "Tunneling"],
    answer: "Superposition",
    fact: "Schrödinger’s cat is a thought experiment illustrating superposition of 'alive' and 'dead' states."
  },
  {
    question: "Which country has the highest number of active volcanoes above 4,000 meters?",
    options: ["Chile", "Peru", "Indonesia", "Tanzania"],
    answer: "Chile",
    fact: "The Andes in Chile host over 80 volcanoes above 4,000 m, including Ojos del Salado, the highest active volcano."
  },
  {
    question: "Which philosopher wrote 'Being and Time' and introduced the concept of 'Dasein'?",
    options: ["Jean-Paul Sartre", "Martin Heidegger", "Hannah Arendt", "Karl Jaspers"],
    answer: "Martin Heidegger",
    fact: "Heidegger’s 1927 work redefined ontology, focusing on human existence as 'being-in-the-world.'"
  },
  {
    question: "Which nation has the highest number of desalination plants using reverse osmosis?",
    options: ["Saudi Arabia", "Israel", "UAE", "Spain"],
    answer: "Saudi Arabia",
    fact: "Saudi Arabia operates the world’s largest RO desalination plant in Ras Al-Khair, producing 1 million m³/day."
  },
  {
    question: "Which particle is responsible for the majority of the Sun’s neutrino flux?",
    options: ["Muon neutrino", "Tau neutrino", "Electron neutrino", "Sterile neutrino"],
    answer: "Electron neutrino",
    fact: "The p-p chain produces electron neutrinos; billions pass through your body every second."
  },
  {
    question: "Which country has the highest number of endemic bird species?",
    options: ["Indonesia", "Australia", "Madagascar", "New Zealand"],
    answer: "Indonesia",
    fact: "Indonesia has over 700 bird species, with ~450 endemics, especially in Wallacea and Papua."
  },
  {
    question: "Which ancient civilization developed the first known system of quarantine during plagues?",
    options: ["Romans", "Venetians", "Byzantines", "Ottomans"],
    answer: "Venetians",
    fact: "Venice established 40-day isolation (quarantena) for ships in 1377 to combat the Black Death."
  },
  {
    question: "Which country has the highest number of nuclear-powered submarines?",
    options: ["USA", "Russia", "UK", "China"],
    answer: "USA",
    fact: "The U.S. Navy operates over 70 nuclear submarines, including ballistic and attack variants."
  },
  {
    question: "Which quantum number describes the intrinsic angular momentum of an electron?",
    options: ["Principal", "Azimuthal", "Magnetic", "Spin"],
    answer: "Spin",
    fact: "Electron spin is ±½ and is a fundamental property, not classical rotation."
  },
  {
    question: "Which nation has the highest number of geothermal power plants per capita?",
    options: ["Iceland", "New Zealand", "Philippines", "Kenya"],
    answer: "Iceland",
    fact: "Iceland has over 30 geothermal plants for a population of 370,000, the highest per capita globally."
  },
  {
    question: "Which country has the highest number of languages with fewer than 1,000 speakers?",
    options: ["India", "Papua New Guinea", "Brazil", "Cameroon"],
    answer: "Papua New Guinea",
    fact: "PNG has over 400 languages with fewer than 1,000 speakers, many at risk of extinction."
  },
  {
    question: "Which ancient text contains the earliest known use of the Pythagorean theorem?",
    options: ["Rhind Mathematical Papyrus", "Plimpton 322", "Sulba Sutras", "Euclid’s Elements"],
    answer: "Plimpton 322",
    fact: "This Babylonian tablet (c. 1800 BCE) lists Pythagorean triples, predating Pythagoras by over a millennium."
  },
  {
    question: "Which country has the highest number of offshore wind turbines?",
    options: ["UK", "China", "Germany", "Denmark"],
    answer: "UK",
    fact: "The UK has over 2,000 offshore turbines, generating more offshore wind power than any other nation."
  },
  {
    question: "Which enzyme is used in PCR to amplify DNA at high temperatures?",
    options: ["DNA polymerase I", "RNA polymerase", "Taq polymerase", "Ligase"],
    answer: "Taq polymerase",
    fact: "Isolated from Thermus aquaticus, Taq polymerase is heat-stable and essential for PCR cycling."
  },
  {
    question: "Which nation has the highest number of UNESCO Memory of the World registers?",
    options: ["UK", "France", "USA", "China"],
    answer: "UK",
    fact: "The UK has over 50 inscriptions, including the Domesday Book and Beatles archives."
  },
  {
    question: "Which quantum field theory describes the strong nuclear force?",
    options: ["QED", "QCD", "Electroweak theory", "General Relativity"],
    answer: "QCD",
    fact: "Quantum Chromodynamics (QCD) governs quark and gluon interactions via color charge."
  },
  {
    question: "Which country has the highest number of cave systems per square kilometer?",
    options: ["Slovenia", "USA (Kentucky)", "Vietnam", "France"],
    answer: "Slovenia",
    fact: "Slovenia’s karst landscape includes over 13,000 caves, including Postojna and Škocjan, a UNESCO site."
  },
  {
    question: "Which ancient city was the capital of the Aksumite Empire in East Africa?",
    options: ["Timbuktu", "Axum", "Meroë", "Jenne-Jeno"],
    answer: "Axum",
    fact: "Axum was a major trading power (1st–8th c. CE) and adopted Christianity under King Ezana."
  },
  {
    question: "Which country has the highest number of patents filed per capita in biotechnology?",
    options: ["USA", "Switzerland", "South Korea", "Sweden"],
    answer: "Switzerland",
    fact: "Swiss firms like Novartis and Roche drive high biotech patent density per capita."
  },
  {
    question: "Which particle is the carrier of the strong nuclear force?",
    options: ["Photon", "W boson", "Gluon", "Z boson"],
    answer: "Gluon",
    fact: "Gluons mediate the strong force between quarks, carrying color charge and binding protons and neutrons."
  },
  {
    question: "Which nation has the highest number of fjords per kilometer of coastline?",
    options: ["Norway", "Chile", "Canada", "New Zealand"],
    answer: "Norway",
    fact: "Norway’s 25,000 km of coastline includes over 1,200 fjords formed by glacial erosion."
  },
  {
    question: "Which country has the highest number of endemic reptile species?",
    options: ["Australia", "Madagascar", "Mexico", "South Africa"],
    answer: "Madagascar",
    fact: "Madagascar has over 400 reptile species, 98% of which are endemic, including all chameleons."
  },
  {
    question: "Which quantum principle states that the position and momentum of a particle cannot both be precisely known?",
    options: ["Pauli Exclusion", "Heisenberg Uncertainty", "Born Rule", "Complementarity"],
    answer: "Heisenberg Uncertainty",
    fact: "Δx·Δp ≥ ħ/2; this is a fundamental limit, not due to measurement error."
  },
  {
    question: "Which ancient civilization developed the first known aqueducts for urban water supply?",
    options: ["Romans", "Minoans", "Persians", "Indus Valley"],
    answer: "Indus Valley",
    fact: "Cities like Mohenjo-daro (2600 BCE) had sophisticated drainage and water supply systems."
  },
  {
    question: "Which country has the highest number of nuclear reactors in Africa?",
    options: ["South Africa", "Egypt", "Nigeria", "Algeria"],
    answer: "South Africa",
    fact: "South Africa operates two reactors at Koeberg, the only commercial nuclear power plant on the continent."
  },
  {
    question: "Which philosopher introduced the concept of 'epistemic injustice'?",
    options: ["Michel Foucault", "Judith Butler", "Miranda Fricker", "Charles Mills"],
    answer: "Miranda Fricker",
    fact: "Fricker defined testimonial and hermeneutical injustice in her 2007 book 'Epistemic Injustice.'"
  },
  {
    question: "Which nation has the highest number of satellite launch attempts per year?",
    options: ["USA", "China", "Russia", "India"],
    answer: "USA",
    fact: "The U.S. conducts over 70 orbital launches annually, led by SpaceX and ULA."
  },
  {
    question: "Which quantum phenomenon is exploited in quantum computing for parallel processing?",
    options: ["Entanglement", "Superposition", "Tunneling", "Interference"],
    answer: "Superposition",
    fact: "Qubits in superposition enable exponential parallelism, a key advantage over classical bits."
  },
  {
    question: "Which country has the highest number of native sign languages?",
    options: ["India", "Papua New Guinea", "Nigeria", "Indonesia"],
    answer: "Papua New Guinea",
    fact: "Due to linguistic diversity, PNG has over 20 indigenous sign languages, many village-based."
  },
  {
    question: "Which ancient text is the oldest known medical treatise?",
    options: ["Hippocratic Corpus", "Sushruta Samhita", "Ebers Papyrus", "Code of Hammurabi"],
    answer: "Ebers Papyrus",
    fact: "Dated to c. 1550 BCE, the Ebers Papyrus details Egyptian treatments for over 800 conditions."
  },
  {
    question: "Which country has the highest number of tidal power stations?",
    options: ["France", "UK", "Canada", "South Korea"],
    answer: "South Korea",
    fact: "The Sihwa Lake Tidal Power Station is the world’s largest, with 254 MW capacity."
  },
  {
    question: "Which enzyme catalyzes the first committed step in fatty acid synthesis?",
    options: ["Acetyl-CoA carboxylase", "Fatty acid synthase", "Carnitine acyltransferase", "HMG-CoA reductase"],
    answer: "Acetyl-CoA carboxylase",
    fact: "It converts acetyl-CoA to malonyl-CoA, the rate-limiting step in lipogenesis."
  },
  {
    question: "Which nation has the highest number of active research stations in Antarctica?",
    options: ["USA", "Russia", "UK", "Argentina"],
    answer: "USA",
    fact: "The U.S. operates three year-round stations (McMurdo, Amundsen-Scott, Palmer) and multiple field camps."
  }
],
    master: [
  {
    question: "Which country has a time zone that is UTC+13:45 during daylight saving time?",
    options: ["Chatham Islands (NZ)", "Samoa", "Tonga", "Fiji"],
    answer: "Chatham Islands (NZ)",
    fact: "The Chatham Islands are 45 minutes ahead of New Zealand's main islands during standard time, and UTC+13:45 during daylight saving time."
  },
  {
    question: "In quantum chromodynamics (QCD), what phenomenon prevents the observation of free quarks?",
    options: ["Confinement", "Asymptotic freedom", "Chiral symmetry breaking", "Renormalization"],
    answer: "Confinement",
    fact: "Quarks are confined within hadrons due to the increasing strength of the strong force with distance; no isolated quark has ever been observed."
  },
  {
    question: "Which exoplanet has the highest confirmed orbital eccentricity, exceeding 0.93?",
    options: ["HD 20782 b", "WASP-12b", "Kepler-16b", "51 Pegasi b"],
    answer: "HD 20782 b",
    fact: "HD 20782 b orbits its star in a highly elliptical path, ranging from 0.14 AU to over 2.6 AU, causing extreme thermal swings."
  },
  {
    question: "Which tectonic process is primarily responsible for the formation of back-arc basins?",
    options: ["Subduction rollback", "Ridge push", "Slab pull", "Mantle plume"],
    answer: "Subduction rollback",
    fact: "Rollback of a subducting slab induces extension behind the volcanic arc, leading to seafloor spreading in back-arc basins like the Mariana Trough."
  },
  {
    question: "In general relativity, what quantity is conserved due to time-translation symmetry?",
    options: ["Angular momentum", "Linear momentum", "Energy", "Charge"],
    answer: "Energy",
    fact: "Noether’s theorem links time-translation invariance to conservation of energy in curved spacetime (via the stress-energy tensor)."
  },
  {
    question: "Which ancient script uses a combination of logographic and syllabic signs and remains only partially deciphered?",
    options: ["Linear A", "Linear B", "Cypriot syllabary", "Ugaritic"],
    answer: "Linear A",
    fact: "Used by the Minoans (c. 1800–1450 BCE), Linear A has not been deciphered due to lack of a bilingual text."
  },
  {
    question: "What is the theoretical maximum energy efficiency of a Carnot engine operating between 3000 K and 300 K?",
    options: ["80%", "85%", "90%", "95%"],
    answer: "90%",
    fact: "η = 1 − (T_cold/T_hot) = 1 − (300/3000) = 0.9 → 90% efficiency, unattainable in practice due to irreversibilities."
  },
  {
    question: "Which country operates the world’s only nuclear-powered container icebreaker?",
    options: ["Russia", "USA", "China", "Canada"],
    answer: "Russia",
    fact: "The *Sevmorput* is a nuclear-powered LASH carrier and icebreaker, part of Russia’s Northern Sea Route logistics."
  },
  {
    question: "In quantum mechanics, what is the minimum number of qubits required to implement Shor’s algorithm for factoring 15?",
    options: ["4", "7", "12", "16"],
    answer: "7",
    fact: "Shor’s algorithm factored 15 using 7 qubits in early quantum computers, demonstrating quantum advantage in principle."
  },
  {
    question: "Which language exhibits ergative-absolutive alignment and is a primary isolate spoken in the Caucasus?",
    options: ["Georgian", "Basque", "Burushaski", "Abkhaz"],
    answer: "Georgian",
    fact: "Georgian marks the subject of transitive verbs (ergative) differently from intransitive subjects (absolutive), a rare alignment."
  },
  {
    question: "What is the Tolman-Oppenheimer-Volkoff (TOV) limit for neutron stars?",
    options: ["1.44 M☉", "2.17 M☉", "3.0 M☉", "5.0 M☉"],
    answer: "2.17 M☉",
    fact: "The TOV limit is the maximum mass a neutron star can support against gravitational collapse; recent observations suggest ~2.3 M☉."
  },
  {
    question: "Which nation has the highest density of permafrost carbon per square kilometer in the Northern Hemisphere?",
    options: ["Alaska (USA)", "Yakutia (Russia)", "Nunavut (Canada)", "Svalbard (Norway)"],
    answer: "Yakutia (Russia)",
    fact: "Siberia’s Yana Basin stores over 1,000 Pg of carbon in deep permafrost, the highest regional concentration globally."
  },
  {
    question: "Which enzyme catalyzes the carboxylation of pyruvate to oxaloacetate in gluconeogenesis?",
    options: ["Pyruvate dehydrogenase", "Phosphoenolpyruvate carboxykinase", "Pyruvate carboxylase", "Malic enzyme"],
    answer: "Pyruvate carboxylase",
    fact: "This biotin-dependent mitochondrial enzyme is allosterically activated by acetyl-CoA, linking fatty acid oxidation to glucose synthesis."
  },
  {
    question: "Which country has the world’s only known active cryovolcanoes erupting methane and ammonia?",
    options: ["Russia", "Azerbaijan", "Turkmenistan", "Kazakhstan"],
    answer: "Azerbaijan",
    fact: "The mud volcanoes of Gobustan and Lokbatan erupt cryomagma composed of water, methane, and hydrocarbons, analogous to icy moons."
  },
  {
    question: "In string theory, which duality relates Type I string theory to the SO(32) heterotic string?",
    options: ["T-duality", "S-duality", "U-duality", "Mirror symmetry"],
    answer: "S-duality",
    fact: "S-duality is a strong-weak coupling equivalence; Type I at strong coupling is dual to heterotic SO(32) at weak coupling."
  },
  {
    question: "Which ancient civilization constructed the megalithic temple complex at Ġgantija, predating Stonehenge?",
    options: ["Minoans", "Nuragic", "Maltese Neolithic", "Bell Beaker"],
    answer: "Maltese Neolithic",
    fact: "Ġgantija (c. 3600 BCE) on Gozo is among the oldest free-standing stone structures, built before the pyramids."
  },
  {
    question: "Which atmospheric layer is characterized by decreasing temperature with altitude and contains the tropopause?",
    options: ["Stratosphere", "Mesosphere", "Thermosphere", "Troposphere"],
    answer: "Troposphere",
    fact: "The troposphere cools at ~6.5°C/km; the tropopause marks the boundary where temperature stops decreasing."
  },
  {
    question: "Which country has the highest number of deepwater (>2000m) subsea production systems?",
    options: ["Brazil", "USA", "Norway", "Nigeria"],
    answer: "Brazil",
    fact: "Petrobras operates over 100 subsea trees in the pre-salt fields, the most complex deepwater production network globally."
  },
  {
    question: "Which particle is the lightest supersymmetric particle (LSP) and a leading dark matter candidate?",
    options: ["Gluino", "Neutralino", "Sneutrino", "Gravitino"],
    answer: "Neutralino",
    fact: "The neutralino, a mix of superpartners of photons, Z-bosons, and Higgs, is stable if R-parity is conserved."
  },
  {
    question: "Which nation has a constitutionally enshrined 'ecocide' law criminalizing environmental destruction?",
    options: ["Bolivia", "Ecuador", "Vietnam", "Kazakhstan"],
    answer: "Vietnam",
    fact: "Vietnam’s Penal Code (Art. 341) defines ecocide as illegal environmental damage with severe penalties."
  },
  {
    question: "What is the dominant energy production mechanism in stars with masses >1.5 M☉?",
    options: ["Proton-proton chain", "CNO cycle", "Triple-alpha process", "Beta decay"],
    answer: "CNO cycle",
    fact: "In hotter stellar cores, the CNO cycle dominates hydrogen fusion, with carbon as a catalyst; rate ∝ T¹⁷."
  },
  {
    question: "Which country holds the world’s largest reserve of tellurium, a critical element for CdTe solar panels?",
    options: ["USA", "Japan", "Canada", "China"],
    answer: "China",
    fact: "China controls over 50% of global tellurium supply, often recovered as a byproduct of copper refining."
  },
  {
    question: "Which ancient manuscript contains the earliest known use of decimal place-value notation with zero?",
    options: ["Bakhshali Manuscript", "Aryabhatiya", "Brāhmasphuṭasiddhānta", "Surya Siddhanta"],
    answer: "Bakhshali Manuscript",
    fact: "Radiocarbon dating (2017) places parts of the Bakhshali MS in the 3rd–4th century CE, showing zero as a dot."
  },
  {
    question: "Which oceanographic phenomenon is linked to a weakening Atlantic Meridional Overturning Circulation (AMOC)?",
    options: ["North Atlantic warming hole", "El Niño", "Indian Ocean Dipole", "Southern Annular Mode"],
    answer: "North Atlantic warming hole",
    fact: "A region south of Greenland is cooling while global temps rise, a potential AMOC slowdown signature."
  },
  {
    question: "Which country has the highest linguistic fragmentation index (Ethnologue’s Greenberg’s diversity index)?",
    options: ["India", "Nigeria", "Papua New Guinea", "Cameroon"],
    answer: "Papua New Guinea",
    fact: "PNG has a Greenberg index near 0.99, meaning two randomly selected individuals likely speak different languages."
  },
  {
    question: "Which quantum number determines the total angular momentum of an electron, combining orbital and spin contributions?",
    options: ["n", "l", "j", "m_j"],
    answer: "j",
    fact: "j = |l ± s|; fine structure splitting arises from spin-orbit coupling, quantified by j."
  },
  {
    question: "Which nation is the only one to have decommissioned its entire nuclear arsenal and then banned nuclear power constitutionally?",
    options: ["South Africa", "Kazakhstan", "Ukraine", "Australia"],
    answer: "South Africa",
    fact: "South Africa dismantled six nuclear weapons by 1991 and banned nuclear energy via the 1996 National Energy Act."
  },
  {
    question: "Which enzyme is inhibited by allopurinol in the treatment of gout?",
    options: ["Xanthine oxidase", "Adenosine deaminase", "Purine nucleoside phosphorylase", "HGPRT"],
    answer: "Xanthine oxidase",
    fact: "Allopurinol reduces uric acid production by inhibiting xanthine oxidase, preventing gout attacks."
  },
  {
    question: "Which tectonic regime is associated with the formation of ultra-high-pressure (UHP) metamorphic rocks like coesite?",
    options: ["Subduction zone", "Rift basin", "Transform fault", "Hotspot"],
    answer: "Subduction zone",
    fact: "Coesite and diamond in crustal rocks (e.g., Dabie Mountains, China) indicate subduction to >100 km depth."
  },
  {
    question: "Which country generates the highest percentage of its electricity from high-temperature geothermal systems?",
    options: ["Iceland", "Kenya", "Philippines", "New Zealand"],
    answer: "Iceland",
    fact: "Iceland derives ~30% of its electricity from geothermal, with high-enthalpy fields like Krafla and Reykjanes."
  },
  {
    question: "Which philosopher introduced the concept of 'epistemic violence' in postcolonial theory?",
    options: ["Gayatri Spivak", "Homi Bhabha", "Edward Said", "Frantz Fanon"],
    answer: "Gayatri Spivak",
    fact: "Spivak coined 'epistemic violence' to describe the erasure of subaltern knowledge systems under colonial epistemology."
  },
  {
    question: "Which exoplanet has the lowest recorded density, at approximately 0.03 g/cm³?",
    options: ["Kepler-51d", "WASP-17b", "HAT-P-1b", "TrES-4b"],
    answer: "Kepler-51d",
    fact: "Kepler-51d is a 'super-puff' planet with a density near that of cotton candy, likely due to extended atmospheric haze."
  },
  {
    question: "Which country possesses the world’s largest stockpile of tritium, a key fusion fuel?",
    options: ["USA", "Canada", "France", "Japan"],
    answer: "Canada",
    fact: "CANDU reactors produce tritium as a byproduct; Canada holds ~2.5 kg, the largest civilian stockpile."
  },
  {
    question: "Which linguistic process explains the development of tone in Vietnamese from lost consonant distinctions?",
    options: ["Tonal split", "Lenition", "Metathesis", "Assibilation"],
    answer: "Tonal split",
    fact: "Proto-Mon-Khmer’s loss of final consonants led to pitch distinctions, creating the six tones of modern Vietnamese."
  },
  {
    question: "Which nation has the highest number of Gen-IV nuclear reactor designs under active development?",
    options: ["USA", "China", "Russia", "France"],
    answer: "China",
    fact: "China is advancing molten salt, sodium-cooled fast, and high-temperature gas reactors, with a 2040 commercialization goal."
  },
  {
    question: "Which quantum phenomenon enables quantum teleportation without transmitting matter?",
    options: ["Entanglement", "Superposition", "Decoherence", "Tunneling"],
    answer: "Entanglement",
    fact: "Quantum teleportation transfers state information via entangled pairs and classical communication, not physical particles."
  },
  {
    question: "Which ancient civilization developed the earliest known system of legal liability for medical malpractice?",
    options: ["Hammurabi’s Babylon", "Classical Athens", "Roman Republic", "Imperial China"],
    answer: "Hammurabi’s Babylon",
    fact: "Code of Hammurabi (c. 1755 BCE) prescribed penalties for surgical failures, including limb amputation."
  },
  {
    question: "Which country has the highest surface albedo due to persistent snow and ice cover?",
    options: ["Greenland", "Antarctica", "Canada", "Russia"],
    answer: "Antarctica",
    fact: "Antarctica’s average albedo is ~0.84, the highest of any continent, due to its permanent ice sheet."
  },
  {
    question: "Which enzyme is used in base editing to convert cytosine to uracil without double-strand breaks?",
    options: ["Cas9", "Deaminase", "Reverse transcriptase", "Transposase"],
    answer: "Deaminase",
    fact: "CRISPR base editors fuse deactivated Cas9 to cytidine or adenine deaminase for precise single-letter DNA edits."
  },
  {
    question: "Which nation has the highest percentage of its land area in transboundary conservation zones?",
    options: ["Botswana", "Costa Rica", "Namibia", "Switzerland"],
    answer: "Namibia",
    fact: "Namibia’s conservancies, including Kavango-Zambezi (KAZA), cover over 20% of its land in cross-border ecosystems."
  },
  {
    question: "Which quantum field theory anomaly explains the decay of the neutral pion into two photons?",
    options: ["Chiral anomaly", "Gauge anomaly", "Gravitational anomaly", "Axial anomaly"],
    answer: "Chiral anomaly",
    fact: "The Adler-Bell-Jackiw anomaly allows π⁰ → γγ decay, forbidden in classical theory but allowed quantum mechanically."
  },
  {
    question: "Which country has the highest number of endemic vascular plant species per 10,000 km²?",
    options: ["Cape Floristic Region (SA)", "Madagascar", "Hawaii", "New Caledonia"],
    answer: "Cape Floristic Region (SA)",
    fact: "The Cape Floral Kingdom has ~9,000 species in 90,000 km², yielding ~100 species per 1,000 km², the highest density."
  },
  {
    question: "Which historical empire established the Yam system of postal relay stations across Eurasia?",
    options: ["Mongol Empire", "Persian Empire", "Roman Empire", "Ottoman Empire"],
    answer: "Mongol Empire",
    fact: "The Yam system enabled rapid communication across the empire, with stations every 20–40 km providing horses and shelter."
  },
  {
    question: "Which region stores the largest volume of subpermafrost methane hydrates?",
    options: ["Siberian Shelf", "Gulf of Mexico", "Cascadia Margin", "Nankai Trough"],
    answer: "Siberian Shelf",
    fact: "The East Siberian Arctic Shelf may contain over 1,000 Gt of methane hydrates, vulnerable to thawing."
  },
  {
    question: "Which quantum principle ensures that fermionic wavefunctions are antisymmetric under particle exchange?",
    options: ["Pauli Exclusion", "Spin-Statistics Theorem", "CPT Theorem", "Bell’s Theorem"],
    answer: "Spin-Statistics Theorem",
    fact: "This relativistic QFT theorem links half-integer spin to antisymmetric wavefunctions and Fermi-Dirac statistics."
  },
  {
    question: "Which nation was the first to legally recognize the 'Rights of Nature' in its constitution?",
    options: ["Bolivia", "Ecuador", "New Zealand", "Sweden"],
    answer: "Ecuador",
    fact: "Ecuador’s 2008 Constitution (Art. 71–74) grants ecosystems the right to exist, regenerate, and be restored."
  },
  {
    question: "Which star has the highest known proper motion relative to the Solar System?",
    options: ["Barnard’s Star", "Wolf 359", "Proxima Centauri", "Luhman 16"],
    answer: "Barnard’s Star",
    fact: "Barnard’s Star moves at 10.3 arcseconds/year, the highest proper motion of any star, due to its proximity (5.96 ly)."
  },
  {
    question: "Which country operates the densest network of seismic arrays for nuclear test monitoring?",
    options: ["USA", "Russia", "China", "Norway"],
    answer: "USA",
    fact: "The USGS and CTBTO use over 150 seismic stations in the US for the International Monitoring System (IMS)."
  },
  {
    question: "Which linguistic term describes a word that has the same meaning as another but different phonological form?",
    options: ["Synonym", "Cognate", "Isogloss", "Hyponym"],
    answer: "Synonym",
    fact: "In advanced semantics, near-synonyms like 'conceal' and 'hide' differ in register or connotation."
  },
  {
    question: "Which nation invests the highest percentage of GDP in artificial intelligence R&D?",
    options: ["USA", "Israel", "South Korea", "China"],
    answer: "Israel",
    fact: "Israel spends ~4.9% of GDP on R&D, with AI constituting over 25% of tech investment, driven by defense and startups."
  },
  {
    question: "Which quantum number determines the total spin projection of a multi-electron atom?",
    options: ["S", "M_S", "J", "M_J"],
    answer: "M_S",
    fact: "M_S = Σm_s, the sum of individual electron spin projections, ranges from −S to +S in integer steps."
  },
  {
    question: "Which country has the only known active petroleum seeps in a glacial environment?",
    options: ["Alaska", "Greenland", "Siberia", "Patagonia"],
    answer: "Greenland",
    fact: "Oil seeps in Disko Island suggest hydrocarbon potential beneath glacial ice, analogous to pre-glacial basins."
  },
  {
    question: "Which ancient city was the center of the Nuragic civilization in the Mediterranean?",
    options: ["Alalyba", "Tharros", "Nuraghe Losa", "Olbia"],
    answer: "Nuraghe Losa",
    fact: "Sardinia’s nuraghi are Bronze Age stone towers; Losa is one of the best-preserved complex nuraghes."
  },
  {
    question: "Which country has the highest number of nuclear-powered icebreakers capable of penetrating >3m ice?",
    options: ["Russia", "USA", "Canada", "Finland"],
    answer: "Russia",
    fact: "Russia’s Arktika-class icebreakers, including *Arktika* (2020), can break 3m ice continuously, enabling Arctic shipping."
  },
  {
    question: "Which particle is the gauge boson of hypercharge in the electroweak theory?",
    options: ["Photon", "Z boson", "W boson", "B boson"],
    answer: "B boson",
    fact: "The B⁰ boson mediates weak hypercharge; it mixes with W³ to form the Z boson and photon via electroweak symmetry breaking."
  },
  {
    question: "Which nation has the highest number of UNESCO Global Geoparks in volcanic regions?",
    options: ["Japan", "Italy", "Iceland", "Indonesia"],
    answer: "Japan",
    fact: "Japan has 8 UNESCO Global Geoparks in volcanic zones, including Toya Caldera and Itoigawa."
  },
  {
    question: "Which quantum effect explains the non-zero ground state energy in a harmonic oscillator?",
    options: ["Zero-point energy", "Casimir effect", "Hawking radiation", "Unruh effect"],
    answer: "Zero-point energy",
    fact: "Even at absolute zero, quantum fluctuations give E = ½ħω, a consequence of the uncertainty principle."
  },
  {
    question: "Which country has the highest number of endemic amphibian species threatened by chytrid fungus?",
    options: ["Colombia", "Costa Rica", "Ecuador", "Panama"],
    answer: "Colombia",
    fact: "Colombia’s Andean harlequin toads (Atelopus) have suffered >80% declines due to Batrachochytrium dendrobatidis."
  },
  {
    question: "Which ancient script was used to write Hurrian and is one of the earliest attested ergative languages?",
    options: ["Cuneiform", "Ugaritic", "Hurro-Hittite", "Linear A"],
    answer: "Cuneiform",
    fact: "Hurrian, written in Akkadian cuneiform, exhibits ergative syntax and influenced Hittite religious texts."
  },
  {
    question: "Which country has the highest number of synthetic aperture radar (SAR) satellites in orbit?",
    options: ["Germany", "Canada", "Italy", "USA"],
    answer: "USA",
    fact: "The U.S. operates SAR satellites like NISAR (with ISRO), Capella, and Umbra for all-weather Earth observation."
  },
  {
    question: "Which enzyme deficiency causes Niemann-Pick disease type A?",
    options: ["Sphingomyelinase", "Hexosaminidase A", "Glucocerebrosidase", "Galactocerebrosidase"],
    answer: "Sphingomyelinase",
    fact: "Deficiency leads to sphingomyelin accumulation in lysosomes, causing neurodegeneration and early death."
  },
  {
    question: "Which nation has the highest percentage of land area in transhumance pastoral systems?",
    options: ["Mongolia", "Afghanistan", "Kyrgyzstan", "Niger"],
    answer: "Mongolia",
    fact: "Over 30% of Mongolia’s workforce practices seasonal herding across steppe and mountain zones."
  },
  {
    question: "Which quantum state allows a system to exist in a coherent superposition across macroscopic distances?",
    options: ["Entanglement", "Squeezed state", "Cat state", "Coherent state"],
    answer: "Cat state",
    fact: "Schrödinger cat states (e.g., |0⟩ + |1⟩) are macroscopic superpositions, key for quantum metrology and error correction."
  },
  {
    question: "Which country has the highest number of active stratovolcanoes with historical eruptions above 5,000 m?",
    options: ["Chile", "Peru", "Indonesia", "Tanzania"],
    answer: "Chile",
    fact: "Chile has over 90 Holocene volcanoes, including Ojos del Salado (6,893 m), the highest historically active volcano."
  },
  {
    question: "Which philosopher developed the concept of 'agonistic pluralism' in political theory?",
    options: ["Chantal Mouffe", "Judith Butler", "Hannah Arendt", "Jürgen Habermas"],
    answer: "Chantal Mouffe",
    fact: "Mouffe argues that democracy should embrace conflict (agonism) rather than seek consensus, in works like 'The Democratic Paradox'."
  },
  {
    question: "Which nation has the highest desalination capacity per capita using multi-stage flash (MSF) technology?",
    options: ["Saudi Arabia", "Qatar", "UAE", "Kuwait"],
    answer: "Qatar",
    fact: "Qatar relies on MSF plants for >90% of its potable water, with per capita output among the world’s highest."
  },
  {
    question: "Which particle is the primary source of solar neutrinos from the pep reaction?",
    options: ["Electron neutrino", "Muon neutrino", "Tau neutrino", "Sterile neutrino"],
    answer: "Electron neutrino",
    fact: "The pep (proton-electron-proton) reaction produces 1.44 MeV neutrinos, rarer than pp neutrinos but more energetic."
  },
  {
    question: "Which country has the highest number of endemic bird species in montane forests?",
    options: ["Indonesia", "Colombia", "Papua New Guinea", "Ecuador"],
    answer: "Colombia",
    fact: "Colombia’s Andean slopes host over 1,900 bird species, with high endemism in cloud forests like the Sierra Nevada."
  },
  {
    question: "Which ancient civilization developed the first known quarantine protocols for maritime trade?",
    options: ["Venetians", "Byzantines", "Ottomans", "Malacca Sultanate"],
    answer: "Venetians",
    fact: "In 1377, Dubrovnik (under Venetian rule) mandated 40-day isolation (quarantena) for ships to prevent plague."
  },
  {
    question: "Which country has the highest number of nuclear-powered submarines equipped with SLBMs?",
    options: ["USA", "Russia", "China", "UK"],
    answer: "USA",
    fact: "The U.S. Ohio-class fleet (14 subs) carries Trident II D5 missiles, forming the sea-based nuclear triad."
  },
  {
    question: "Which quantum number is conserved in strong interactions but violated in weak interactions?",
    options: ["Strangeness", "Baryon number", "Electric charge", "Lepton number"],
    answer: "Strangeness",
    fact: "Strange particles are produced via strong force (strangeness conserved) but decay via weak force (strangeness violated)."
  },
  {
    question: "Which nation has the highest number of geothermal district heating networks per capita?",
    options: ["Iceland", "Japan", "Hungary", "Turkey"],
    answer: "Iceland",
    fact: "Over 90% of Icelandic homes are heated by geothermal water, distributed via 1,000+ km of pipelines."
  },
  {
    question: "Which country has the highest number of critically endangered languages with fewer than 10 speakers?",
    options: ["Australia", "India", "Papua New Guinea", "Brazil"],
    answer: "Papua New Guinea",
    fact: "PNG has over 100 languages with <10 speakers, many undocumented and at risk of immediate extinction."
  },
  {
    question: "Which ancient text contains the earliest known algorithm for computing square roots iteratively?",
    options: ["Babylonian tablet YBC 7289", "Rhind Papyrus", "Sulba Sutras", "Nine Chapters on the Mathematical Art"],
    answer: "Babylonian tablet YBC 7289",
    fact: "YBC 7289 (c. 1800 BCE) shows √2 ≈ 1.414213, computed via a method equivalent to the Heron (Babylonian) algorithm."
  },
  {
    question: "Which country has the highest installed capacity of floating offshore wind turbines?",
    options: ["UK", "Norway", "Japan", "Portugal"],
    answer: "UK",
    fact: "The Hywind Scotland farm (30 MW) was the world’s first commercial floating wind farm, operational since 2017."
  },
  {
    question: "Which enzyme is used in next-generation sequencing to synthesize DNA in real time?",
    options: ["DNA polymerase", "RNA polymerase", "Reverse transcriptase", "Ligase"],
    answer: "DNA polymerase",
    fact: "Single-molecule real-time (SMRT) sequencing uses immobilized DNA polymerase to detect nucleotide incorporation."
  },
  {
  question: "Which nation has the highest number of inscriptions in the Memory of the World Register?",
  options: ["UK", "France", "China", "USA"],
  answer: "UK",
  fact: "The UK has over 50 UNESCO Memory of the World inscriptions, including the Magna Carta and Domesday Book."
},
  {
    question: "Which quantum field theory describes the unification of electromagnetism and the weak force?",
    options: ["QED", "QCD", "Electroweak theory", "GUT"],
    answer: "Electroweak theory",
    fact: "Glashow-Weinberg-Salam model unifies EM and weak forces at ~100 GeV, confirmed by W/Z boson discovery."
  },
  {
    question: "Which country has the highest density of karst sinkholes (dolines) per 1,000 km²?",
    options: ["Slovenia", "China (Guilin)", "Cuba", "Puerto Rico"],
    answer: "Slovenia",
    fact: "The Classical Karst region (Kras) has over 15,000 dolines in 500 km², the highest concentration globally."
  },
  {
    question: "Which ancient city was the capital of the Dʿmt kingdom in the Horn of Africa?",
    options: ["Axum", "Yeha", "Adulis", "Meroë"],
    answer: "Yeha",
    fact: "Yeha (c. 8th c. BCE) was a religious and political center of Dʿmt, predecessor to the Aksumite Empire."
  },
  {
    question: "Which country files the highest number of patents in quantum computing per capita?",
    options: ["USA", "Canada", "Switzerland", "Israel"],
    answer: "Switzerland",
    fact: "Swiss institutions like ETH Zurich and IBM Research lead in superconducting qubit patents per capita."
  },
  {
    question: "Which particle mediates the flavor-changing neutral current in the Standard Model?",
    options: ["Z boson", "Photon", "Gluon", "Higgs boson"],
    answer: "Z boson",
    fact: "FCNCs are suppressed in SM; Z-mediated decays like B⁰ → μ⁺μ⁻ are rare and sensitive to new physics."
  },
  {
    question: "Which nation has the highest number of fjords per 100 km of coastline?",
    options: ["Norway", "Chile", "Canada", "Greenland"],
    answer: "Greenland",
    fact: "Greenland’s coastline has over 500 fjords in 44,000 km, yielding ~11.4 per 1,000 km, higher than Norway’s ~10.8."
  },
  {
    question: "Which country has the highest number of endemic reptile species in island archipelagos?",
    options: ["Madagascar", "Galápagos", "Comoros", "Seychelles"],
    answer: "Madagascar",
    fact: "Madagascar has over 400 endemic reptile species, including all 200+ chameleon species, due to 88 million years of isolation."
  },
  {
    question: "Which quantum principle underlies the impossibility of cloning an arbitrary unknown quantum state?",
    options: ["No-communication theorem", "No-cloning theorem", "No-deleting theorem", "No-hiding theorem"],
    answer: "No-cloning theorem",
    fact: "Proven by Wootters and Zurek (1982), this prevents perfect copying of qubits, crucial for quantum cryptography."
  },
  {
    question: "Which ancient civilization developed the first known system of aqueducts for urban water distribution?",
    options: ["Indus Valley", "Minoans", "Romans", "Persians"],
    answer: "Indus Valley",
    fact: "Cities like Dholavira (2500 BCE) had sophisticated reservoirs, channels, and stormwater drains for water management."
  },
  {
    question: "Which country has the highest number of operational nuclear reactors in sub-Saharan Africa?",
    options: ["South Africa", "Nigeria", "Ghana", "Kenya"],
    answer: "South Africa",
    fact: "South Africa’s Koeberg plant has two PWRs, the only commercial nuclear power station on the African continent."
  },
  {
    question: "Which philosopher introduced the concept of 'hermeneutical injustice'?",
    options: ["Miranda Fricker", "Charles Taylor", "Hans-Georg Gadamer", "Paul Ricoeur"],
    answer: "Miranda Fricker",
    fact: "Hermeneutical injustice occurs when marginalized groups lack the conceptual resources to make sense of their experiences."
  },
  {
    question: "Which nation has the highest number of orbital launches annually, including private and state missions?",
    options: ["USA", "China", "Russia", "India"],
    answer: "USA",
    fact: "The U.S. conducted over 100 orbital launches in 2023, led by SpaceX’s Falcon 9 reusability."
  },
  {
    question: "Which quantum phenomenon enables topological quantum computing via non-Abelian anyons?",
    options: ["Entanglement", "Superposition", "Braiding statistics", "Tunneling"],
    answer: "Braiding statistics",
    fact: "Non-Abelian anyons in 2D systems (e.g., fractional quantum Hall) allow fault-tolerant qubits via topological braiding."
  },
  {
    question: "Which country has the highest number of indigenous sign languages with no known linguistic relatives?",
    options: ["India", "Papua New Guinea", "Nigeria", "Mexico"],
    answer: "Papua New Guinea",
    fact: "PNG hosts over 20 village sign languages, many isolated and unrelated to national sign languages."
  },
  {
    question: "Which ancient text is the oldest known surgical treatise?",
    options: ["Sushruta Samhita", "Ebers Papyrus", "Hippocratic Corpus", "Edwin Smith Papyrus"],
    answer: "Edwin Smith Papyrus",
    fact: "Dated to c. 1600 BCE (copying older material), it details 48 trauma cases with rational, non-magical treatments."
  },
  {
    question: "Which country has the highest installed capacity of tidal range power?",
    options: ["France", "UK", "Canada", "South Korea"],
    answer: "South Korea",
    fact: "The Sihwa Lake Tidal Power Station (254 MW) is the world’s largest tidal barrage, surpassing France’s Rance (240 MW)."
  },
  {
    question: "Which enzyme catalyzes the committed step in cholesterol biosynthesis?",
    options: ["HMG-CoA reductase", "Acetyl-CoA carboxylase", "Fatty acid synthase", "Squalene synthase"],
    answer: "HMG-CoA reductase",
    fact: "This ER membrane enzyme converts HMG-CoA to mevalonate and is the target of statin drugs."
  },
  {
    question: "Which nation operates the most autonomous underwater vehicles (AUVs) for polar research?",
    options: ["USA", "Norway", "UK", "Germany"],
    answer: "USA",
    fact: "The U.S. operates AUVs like Sentry and Orpheus for under-ice mapping and climate studies in Antarctica and the Arctic."
  }
],
    legend: [
  {
    question: "Which country has a time zone that is UTC+14, making it the first to see a new day?",
    options: ["Kiribati", "Samoa", "Tonga", "Fiji"],
    answer: "Kiribati",
    fact: "Kiribati's Line Islands are at UTC+14, the earliest time zone in the world, due to a 1995 realignment to unify the country’s calendar."
  },
  {
    question: "Which quantum gravity framework predicts that spacetime is fundamentally non-commutative at the Planck scale?",
    options: ["Loop Quantum Gravity", "String Theory", "Causal Dynamical Triangulations", "Non-commutative geometry"],
    answer: "Non-commutative geometry",
    fact: "Alain Connes' non-commutative geometry proposes that spacetime coordinates obey [x^μ, x^ν] = iθ^{μν}, implying a minimal length scale."
  },
  {
    question: "Which exoplanet exhibits a retrograde rotation and an orbital inclination exceeding 160° relative to its star’s equator?",
    options: ["WASP-17b", "HD 209458b", "Kepler-413b", "TrES-2b"],
    answer: "WASP-17b",
    fact: "WASP-17b orbits in the opposite direction of its star’s spin, a sign of violent dynamical history or Kozai-Lidov oscillations."
  },
  {
    question: "In general relativity, what is the name of the boundary beyond which no stationary observers can exist due to frame-dragging?",
    options: ["Event horizon", "Ergosphere", "Photon sphere", "Innermost stable circular orbit (ISCO)"],
    answer: "Ergosphere",
    fact: "In rotating (Kerr) black holes, the ergosphere is where spacetime is dragged faster than light; energy can be extracted via the Penrose process."
  },
  {
    question: "Which tectonic regime is associated with the formation of ultra-high-pressure (UHP) coesite-bearing continental crust?",
    options: ["Subduction of continental crust", "Oceanic plateau subduction", "Ridge subduction", "Transform obduction"],
    answer: "Subduction of continental crust",
    fact: "The Dabie-Sulu belt in China contains UHP metamorphic rocks subducted to >120 km depth during the Triassic continental collision."
  },
  {
    question: "Which ancient script shows evidence of boustrophedon writing and may encode an early form of Etruscan?",
    options: ["Lemnian", "Rongorongo", "Iberian", "South Picene"],
    answer: "Lemnian",
    fact: "The Lemnos stele (6th c. BCE) shares alphabet and grammar with Etruscan, suggesting a Tyrrhenian language family."
  },
  {
    question: "What is the theoretical maximum efficiency of a black hole thermodynamic cycle operating between 10⁹ K and 2.7 K?",
    options: ["99.9%", "99.9997%", "99.99999%", "100%"],
    answer: "99.9997%",
    fact: "Using Carnot efficiency: η = 1 − (2.7 / 1e9) ≈ 0.9999973 → 99.99973%, approaching but never reaching 100%."
  },
  {
    question: "Which country operates the only nuclear-powered icebreaker with a double-acting hull capable of breaking 3m ice stern-first?",
    options: ["Russia", "USA", "Finland", "Canada"],
    answer: "Russia",
    fact: "The *Arktika*-class LK-60Ya icebreakers use double-acting design: bow for open water, stern (reinforced) for ice backing."
  },
  {
    question: "In quantum computing, which error correction code encodes one logical qubit into nine physical qubits and corrects arbitrary single-qubit errors?",
    options: ["Shor code", "Steane code", "Surface code", "5-qubit code"],
    answer: "Shor code",
    fact: "The Shor code combines three-qubit bit-flip and phase-flip codes to protect against both X and Z errors."
  },
  {
    question: "Which language exhibits polypersonal agreement and is a primary isolate spoken in the Caucasus?",
    options: ["Georgian", "Basque", "Abkhaz", "Chechen"],
    answer: "Georgian",
    fact: "Georgian verbs agree with subject, object, and indirect object simultaneously, a hallmark of polypersonalism."
  },
  {
    question: "What is the minimum mass for a black hole formed via stellar collapse, according to current astrophysical models?",
    options: ["1.4 M☉", "2.2 M☉", "3.0 M☉", "5.0 M☉"],
    answer: "2.2 M☉",
    fact: "The 'mass gap' between neutron stars and black holes suggests a minimum black hole mass of ~2.2 M☉; below this, objects are likely NSs."
  },
  {
    question: "Which nation has the highest concentration of permafrost carbon in yedoma deposits?",
    options: ["Alaska", "Yakutia (Siberia)", "Nunavut", "Svalbard"],
    answer: "Yakutia (Siberia)",
    fact: "Siberian yedoma contains ~500 Gt of organic carbon in ice-rich permafrost, vulnerable to abrupt thaw and methane release."
  },
  {
    question: "Which enzyme catalyzes the ATP-dependent carboxylation of acetyl-CoA to malonyl-CoA, the committed step in lipogenesis?",
    options: ["Malic enzyme", "Acetyl-CoA carboxylase", "Fatty acid synthase", "HMG-CoA reductase"],
    answer: "Acetyl-CoA carboxylase",
    fact: "This biotin-dependent enzyme is regulated by phosphorylation (inactive) and citrate (activator)."
  },
  {
    question: "Which country hosts the world’s only known active cryovolcanoes erupting hydrocarbon-rich mud with solid bitumen?",
    options: ["Azerbaijan", "Turkmenistan", "Indonesia", "Venezuela"],
    answer: "Azerbaijan",
    fact: "The mud volcanoes of Gobustan erupt asphaltite and heavy hydrocarbons, resembling cryovolcanism on Titan."
  },
  {
    question: "In M-theory, how many dimensions are required for consistency?",
    options: ["10", "11", "26", "12"],
    answer: "11",
    fact: "M-theory unifies all five superstring theories in 11 dimensions, with membranes (M2-branes) as fundamental objects."
  },
  {
    question: "Which ancient civilization constructed the megalithic temples of Ħaġar Qim and Mnajdra with precise solar alignments?",
    options: ["Phoenicians", "Temple Culture of Malta", "Nuragic", "Bell Beaker"],
    answer: "Temple Culture of Malta",
    fact: "These Neolithic temples (c. 3600–2500 BCE) align with solstices and equinoxes, indicating advanced astronomical knowledge."
  },
  {
    question: "Which atmospheric layer exhibits a temperature inversion due to ozone absorption and contains the stratopause?",
    options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    answer: "Stratosphere",
    fact: "The stratosphere warms from ~−60°C to 0°C due to UV absorption by ozone, peaking at the stratopause (~50 km)."
  },
  {
    question: "Which country has the highest number of subsea tiebacks in ultra-deepwater (>3000 m)?",
    options: ["Brazil", "USA", "Nigeria", "Angola"],
    answer: "Brazil",
    fact: "Petrobras’ pre-salt fields in Santos Basin use record-breaking tiebacks exceeding 200 km in 3000 m water depth."
  },
  {
    question: "Which particle is the leading candidate for warm dark matter and has a mass in the keV range?",
    options: ["Sterile neutrino", "Axion", "Neutralino", "Gravitino"],
    answer: "Sterile neutrino",
    fact: "Sterile neutrinos (ν_s) mix weakly with active neutrinos and could explain structure formation on small scales."
  },
  {
    question: "Which nation has a constitutional ban on all forms of artificial intelligence in decision-making affecting human rights?",
    options: ["Estonia", "France", "Germany", "None currently"],
    answer: "None currently",
    fact: "No country has a full constitutional ban, though the EU AI Act restricts high-risk AI in governance and law enforcement."
  },
  {
    question: "What is the dominant fusion process in Population III stars with masses >100 M☉?",
    options: ["CNO cycle", "Triple-alpha process", "Proton-proton chain", "Photodisintegration-triggered collapse"],
    answer: "Photodisintegration-triggered collapse",
    fact: "Massive Pop III stars end in pair-instability or photodisintegration supernovae, with little hydrogen fusion dominance."
  },
  {
    question: "Which country holds the world’s largest reserve of dysprosium, a critical rare earth for high-strength magnets?",
    options: ["China", "Myanmar", "Australia", "USA"],
    answer: "China",
    fact: "China controls ~90% of dysprosium supply, essential for electric vehicle motors and wind turbine generators."
  },
  {
    question: "Which ancient manuscript contains the earliest known use of a symbol for zero as a placeholder in a positional numeral system?",
    options: ["Bakhshali Manuscript", "Charmides Papyrus", "Ptolemy’s Almagest", "Surya Siddhanta"],
    answer: "Ptolemy’s Almagest",
    fact: "Ptolemy used a small circle (0) in sexagesimal coordinates (c. 150 CE), though not as a full number."
  },
  {
    question: "Which oceanographic phenomenon is linked to a potential collapse of the Atlantic Meridional Overturning Circulation (AMOC) by 2100?",
    options: ["Greenland meltwater pulse", "El Niño", "Antarctic Bottom Water weakening", "Arctic amplification"],
    answer: "Greenland meltwater pulse",
    fact: "Freshwater from Greenland reduces North Atlantic salinity, potentially disrupting deepwater formation and AMOC."
  },
  {
    question: "Which country has the highest Greenberg’s diversity index (0.98+) for linguistic fragmentation?",
    options: ["India", "Nigeria", "Papua New Guinea", "Cameroon"],
    answer: "Papua New Guinea",
    fact: "PNG’s index is ~0.987, meaning two randomly selected individuals speak different languages with 98.7% probability."
  },
  {
    question: "Which quantum number determines the total angular momentum quantum number j for an electron in a hydrogen atom?",
    options: ["n", "l", "s", "j = |l ± s|"],
    answer: "j = |l ± s|",
    fact: "j combines orbital and spin angular momentum; for p-electrons (l=1), j = 1/2 or 3/2, leading to fine structure splitting."
  },
  {
    question: "Which nation is the only one to have developed and then voluntarily dismantled a nuclear weapons program and banned nuclear energy?",
    options: ["South Africa", "Kazakhstan", "Ukraine", "Sweden"],
    answer: "South Africa",
    fact: "South Africa built six gun-type weapons, dismantled them by 1991, and ratified the NPT as a non-nuclear state."
  },
  {
    question: "Which enzyme is inhibited by febuxostat in the treatment of chronic gout?",
    options: ["Xanthine oxidase", "Adenosine deaminase", "Purine nucleoside phosphorylase", "HGPRT"],
    answer: "Xanthine oxidase",
    fact: "Febuxostat is a non-purine selective inhibitor of xanthine oxidase, reducing uric acid production."
  },
  {
    question: "Which tectonic process is responsible for the exhumation of coesite-bearing eclogites from mantle depths?",
    options: ["Subduction rollback", "Obduction", "Extrusion tectonics", "Buoyancy-driven return flow"],
    answer: "Buoyancy-driven return flow",
    fact: "Despite high density, UHP rocks return via channel flow, aided by low viscosity and hydration weakening."
  },
  {
    question: "Which country generates the highest percentage of its electricity from supercritical geothermal systems?",
    options: ["Iceland", "Japan", "Italy", "New Zealand"],
    answer: "Japan",
    fact: "Japan’s Okuaizu and Kakkonda plants use supercritical fluids (>374°C, >22 MPa) for enhanced efficiency."
  },
  {
    question: "Which philosopher introduced the concept of 'epistemic decolonization' in postfoundational epistemology?",
    options: ["Boaventura de Sousa Santos", "Gayatri Spivak", "Charles Mills", "Sabelo Ndlovu-Gatsheni"],
    answer: "Boaventura de Sousa Santos",
    fact: "Santos advocates 'epistemologies of the South,' challenging Eurocentric knowledge hierarchies."
  },
  {
    question: "Which exoplanet has the lowest measured albedo, reflecting less than 1% of incident light?",
    options: ["TrES-2b", "WASP-12b", "HD 149026b", "KELT-9b"],
    answer: "TrES-2b",
    fact: "TrES-2b reflects <1% of light, darker than coal, possibly due to gaseous titanium oxide and vaporized sodium."
  },
  {
    question: "Which country possesses the world’s largest stockpile of tritium-lithium breeding blankets for fusion reactors?",
    options: ["USA", "Japan", "China", "France (ITER)"],
    answer: "France (ITER)",
    fact: "ITER’s test blanket modules represent the largest coordinated tritium breeding program in history."
  },
  {
    question: "Which linguistic phenomenon explains the development of tone in Mandarin from lost final consonants in Middle Chinese?",
    options: ["Tonal split conditioned by voicing", "Lenition", "Assimilation", "Metathesis"],
    answer: "Tonal split conditioned by voicing",
    fact: "Middle Chinese syllables with voiced initials became modern Yang tones; voiceless became Yin tones."
  },
  {
    question: "Which nation has the highest number of molten salt reactor (MSR) prototypes under active testing?",
    options: ["USA", "China", "Canada", "Netherlands"],
    answer: "China",
    fact: "China’s TMSR program at SINAP aims for a 2 MWt experimental MSR by 2025, with 10+ designs in development."
  },
  {
    question: "Which quantum phenomenon enables fault-tolerant quantum computation via topological qubits?",
    options: ["Anyonic braiding", "Superposition", "Entanglement", "Tunneling"],
    answer: "Anyonic braiding",
    fact: "Non-Abelian anyons in 2D systems (e.g., ν = 5/2 fractional quantum Hall) allow topologically protected qubit operations."
  },
  {
    question: "Which ancient civilization developed the first known legal code with provisions for judicial review?",
    options: ["Hammurabi’s Babylon", "Ur-Nammu’s Sumer", "Twelve Tables of Rome", "Code of the Assura"],
    answer: "Code of the Assura",
    fact: "Assyrian law (c. 1100 BCE) included appeals to higher officials, a proto-form of judicial oversight."
  },
  {
    question: "Which country has the highest surface broadband albedo integrated over all wavelengths?",
    options: ["Antarctica", "Greenland", "Sahara Desert", "Siberian Snowfield"],
    answer: "Antarctica",
    fact: "Antarctica’s average albedo is ~0.84 due to thick, dry ice sheets; Greenland is ~0.75 due to melt and dust."
  },
  {
    question: "Which enzyme is used in prime editing to perform targeted insertions, deletions, and all 12 base-to-base conversions?",
    options: ["Cas9", "Reverse transcriptase", "Prime editor (PE2)", "Transposase"],
    answer: "Prime editor (PE2)",
    fact: "Prime editing fuses nCas9 to reverse transcriptase and uses a pegRNA to directly rewrite DNA without DSBs."
  },
  {
    question: "Which nation has the highest percentage of its land area in transboundary conservation complexes (LTCAs)?",
    options: ["Namibia", "Botswana", "Zambia", "Tanzania"],
    answer: "Namibia",
    fact: "Namibia co-leads the Kavango-Zambezi (KAZA) TFCA, the world’s largest transfrontier park, covering 520,000 km²."
  },
  {
    question: "Which quantum anomaly explains the decay rate of the neutral pion into two photons in QED?",
    options: ["Adler-Bell-Jackiw anomaly", "Gauge anomaly", "Gravitational anomaly", "Chiral anomaly"],
    answer: "Adler-Bell-Jackiw anomaly",
    fact: "This anomaly allows the decay π⁰ → γγ, forbidden in classical theory but observed at the quantum level."
  },
  {
    question: "Which region has the highest known concentration of subglacial methane clathrates?",
    options: ["Siberian Arctic Shelf", "West Antarctic Ice Sheet", "Greenland Ice Sheet", "Canadian Arctic"],
    answer: "Siberian Arctic Shelf",
    fact: "The ESAS contains vast methane hydrates under <50 m of water, destabilizing due to warming and permafrost thaw."
  },
  {
    question: "Which quantum principle ensures that the wavefunction of identical bosons is symmetric under exchange?",
    options: ["Pauli Exclusion", "Spin-Statistics Theorem", "CPT Theorem", "Bell’s Theorem"],
    answer: "Spin-Statistics Theorem",
    fact: "The theorem links integer spin to symmetric wavefunctions and Bose-Einstein statistics, enabling phenomena like BEC."
  },
  {
    question: "Which nation was the first to legally recognize the 'Rights of Nature' in a binding international treaty?",
    options: ["Ecuador", "Bolivia", "New Zealand", "None"],
    answer: "None",
    fact: "While Ecuador and Bolivia enshrined nature’s rights domestically, no binding international treaty exists as of 2024."
  },
  {
    question: "Which star has the highest known proper motion and is a runaway star from the Scorpius-Centaurus OB association?",
    options: ["Barnard’s Star", "Gliese 710", "AE Aurigae", "Mu Columbae"],
    answer: "AE Aurigae",
    fact: "AE Aurigae, the 'Flaming Star,' moves at 3.7 arcsec/year and was ejected ~2.7 Mya from a binary collision."
  },
  {
    question: "Which country operates the densest network of infrasound stations for nuclear test detection?",
    options: ["USA", "Norway", "France", "Canada"],
    answer: "USA",
    fact: "The IMS includes 60 infrasound stations; the U.S. hosts 9, with additional CTBT and DoD arrays."
  },
  {
    question: "Which linguistic term describes a word that is both a homophone and a homograph?",
    options: ["Homonym", "Capitonym", "Autantonym", "Contronym"],
    answer: "Homonym",
    fact: "A homonym is identical in spelling and pronunciation but differs in meaning (e.g., 'bank' of river vs. financial bank)."
  },
  {
    question: "Which nation invests the highest percentage of GDP in quantum computing R&D?",
    options: ["USA", "China", "Israel", "Canada"],
    answer: "Israel",
    fact: "Israel allocates ~0.12% of GDP to quantum tech, the highest per capita, via the National Quantum Initiative."
  },
  {
    question: "Which quantum number determines the projection of total angular momentum along the z-axis?",
    options: ["j", "m_j", "l", "s"],
    answer: "m_j",
    fact: "m_j ranges from −j to +j in integer steps and determines Zeeman splitting in magnetic fields."
  },
  {
    question: "Which country has the only known active petroleum seeps beneath a continental ice sheet?",
    options: ["Greenland", "Antarctica", "Svalbard", "Patagonia"],
    answer: "Greenland",
    fact: "Oil seeps in Disko Island suggest hydrocarbon migration beneath glacial ice, analogous to subglacial hydrocarbon systems."
  },
  {
    question: "Which ancient civilization constructed the nuraghi, complex megalithic towers with tholos domes?",
    options: ["Nuragic Sardinia", "Talaiotic Minorca", "Trebonne Croatia", "Giants of Mont’e Prama"],
    answer: "Nuragic Sardinia",
    fact: "Over 7,000 nuraghi exist in Sardinia, some with central courtyards and acoustic properties suggesting ritual use."
  },
  {
    question: "Which country has the highest number of nuclear-powered icebreakers with azimuth thrusters?",
    options: ["Russia", "USA", "Canada", "Finland"],
    answer: "Russia",
    fact: "Project 22220 icebreakers use azimuthing podded propulsors for superior maneuverability in ice."
  },
  {
    question: "Which particle mediates the weak hypercharge interaction before electroweak symmetry breaking?",
    options: ["B⁰ boson", "W³ boson", "Photon", "Z boson"],
    answer: "B⁰ boson",
    fact: "The B⁰ boson couples to weak hypercharge; after symmetry breaking, it mixes with W³ to form the Z and photon."
  },
  {
    question: "Which nation has the highest number of UNESCO Global Geoparks in karst landscapes?",
    options: ["China", "Slovenia", "Vietnam", "Croatia"],
    answer: "China",
    fact: "China has 41 UNESCO Global Geoparks, many in karst regions like Shilin and Libo."
  },
  {
    question: "Which quantum effect is responsible for the Casimir force between two uncharged conducting plates?",
    options: ["Vacuum fluctuations", "Hawking radiation", "Unruh effect", "Zero-point energy"],
    answer: "Vacuum fluctuations",
    fact: "The Casimir force arises from restricted virtual photon modes between plates, producing an attractive force ∝ 1/d⁴."
  },
  {
    question: "Which country has the highest number of amphibian species threatened by Batrachochytrium salamandrivorans (Bsal)?",
    options: ["Colombia", "Spain", "Netherlands", "USA"],
    answer: "Spain",
    fact: "Spain’s Pyrenean brook salamanders are highly vulnerable to Bsal, which has spread from Asia via pet trade."
  },
  {
    question: "Which ancient script was used to write the Hurrian hymns, the oldest known substantially notated music?",
    options: ["Cuneiform", "Ugaritic", "Linear B", "Elamite"],
    answer: "Cuneiform",
    fact: "The Hurrian Hymn to Nikkal (c. 1400 BCE, Ugarit) is the oldest surviving musical notation, in Akkadian cuneiform."
  },
  {
    question: "Which country has the highest number of synthetic aperture radar (SAR) satellites with polarimetric capabilities?",
    options: ["USA", "Germany", "Japan", "Canada"],
    answer: "USA",
    fact: "NASA-ISRO NISAR, Capella, and Umbra operate fully polarimetric SAR for terrain and deformation monitoring."
  },
  {
    question: "Which enzyme deficiency causes Farber disease?",
    options: ["Acid ceramidase", "Hexosaminidase A", "Sphingomyelinase", "Glucocerebrosidase"],
    answer: "Acid ceramidase",
    fact: "Deficiency leads to ceramide accumulation, causing joint pain, nodules, and neurodegeneration."
  },
  {
    question: "Which nation has the highest percentage of its workforce engaged in nomadic pastoralism?",
    options: ["Mongolia", "Niger", "Afghanistan", "Somalia"],
    answer: "Mongolia",
    fact: "Over 30% of Mongolia’s population practices transhumant herding, the highest proportion globally."
  },
  {
    question: "Which quantum state describes a macroscopic superposition such as |↑⟩ + |↓⟩ for a SQUID?",
    options: ["Cat state", "Bell state", "GHZ state", "Cluster state"],
    answer: "Cat state",
    fact: "Schrödinger cat states are coherent superpositions of macroscopically distinct states, key for quantum metrology."
  },
  {
    question: "Which country has the highest number of historically active volcanoes above 6,000 meters?",
    options: ["Chile", "Peru", "Tanzania", "Pakistan"],
    answer: "Chile",
    fact: "Ojos del Salado (6,893 m) is the highest active volcano; Chile has 90+ Holocene volcanoes above 5,000 m."
  },
  {
    question: "Which philosopher developed the concept of 'agonistic democracy' emphasizing conflict as constitutive of politics?",
    options: ["Chantal Mouffe", "Ernesto Laclau", "Jacques Rancière", "All of the above"],
    answer: "All of the above",
    fact: "Mouffe and Laclau co-authored 'Hegemony and Socialist Strategy'; Rancière emphasized dissensus in democratic rupture."
  },
  {
    question: "Which nation has the highest desalination capacity per capita using forward osmosis (FO) pilot plants?",
    options: ["Singapore", "Israel", "Qatar", "Australia"],
    answer: "Singapore",
    fact: "Singapore’s PUB runs FO trials at Tuas for low-energy desalination, though RO remains dominant."
  },
  {
    question: "Which particle is the primary source of solar neutrinos from the hep (³He + p → ⁴He + e⁺ + ν_e) reaction?",
    options: ["Electron neutrino", "Muon neutrino", "Tau neutrino", "Sterile neutrino"],
    answer: "Electron neutrino",
    fact: "The hep neutrinos are rare (<0.01% of total) but have the highest energy (up to 18.8 MeV), detectable by Super-Kamiokande."
  },
  {
    question: "Which country has the highest number of endemic bird species in cloud forests?",
    options: ["Colombia", "Ecuador", "Papua New Guinea", "Costa Rica"],
    answer: "Colombia",
    fact: "Colombia’s Andean cloud forests host over 1,900 bird species, including 80+ endemics like the Cauca guan."
  },
  {
    question: "Which ancient civilization developed the first known maritime quarantine system for plague control?",
    options: ["Venetians", "Byzantines", "Ottomans", "Genoese"],
    answer: "Venetians",
    fact: "In 1377, the Republic of Ragusa (Dubrovnik) mandated 40-day isolation for ships, establishing the first formal quarantine."
  },
  {
    question: "Which country has the highest number of nuclear-powered submarines with pump-jet propulsors?",
    options: ["USA", "UK", "Russia", "France"],
    answer: "USA",
    fact: "All U.S. Virginia- and Columbia-class subs use pump-jets for stealth; Russia’s Yasen-class also uses them."
  },
  {
    question: "Which quantum number is violated in neutral kaon (K⁰) oscillations?",
    options: ["Strangeness", "CP", "Baryon number", "Electric charge"],
    answer: "Strangeness",
    fact: "K⁰ (d̄s) and K̄⁰ (d s̄) mix via weak interactions, violating strangeness conservation and enabling CP violation studies."
  },
  {
    question: "Which nation has the highest number of geothermal district heating networks powered by supercritical fluids?",
    options: ["Iceland", "Japan", "Italy", "New Zealand"],
    answer: "Japan",
    fact: "Japan’s Kakkonda plant taps supercritical water at 370°C, achieving 30% higher efficiency than subcritical systems."
  },
  {
    question: "Which country has the highest number of critically endangered languages with no written records?",
    options: ["Papua New Guinea", "Australia", "Brazil", "India"],
    answer: "Papua New Guinea",
    fact: "PNG has over 400 unwritten languages, many with <100 speakers and no documentation, facing imminent extinction."
  },
  {
    question: "Which ancient text contains the earliest known iterative algorithm for approximating √2 to four decimal places?",
    options: ["YBC 7289", "Rhind Papyrus", "Sulba Sutras", "Nine Chapters"],
    answer: "YBC 7289",
    fact: "The Babylonian tablet YBC 7289 gives √2 ≈ 1.414213, computed via the recurrence x_{n+1} = ½(x_n + 2/x_n)."
  },
  {
    question: "Which country has the highest installed capacity of floating offshore wind with dynamic cable systems?",
    options: ["UK", "Norway", "Portugal", "Japan"],
    answer: "UK",
    fact: "Hywind Scotland uses dynamic cables to handle motion from floating turbines in 100 m water depth."
  },
  {
    question: "Which enzyme is used in single-molecule real-time (SMRT) sequencing to detect nucleotide incorporation?",
    options: ["Phi29 polymerase", "T7 RNA polymerase", "DNA polymerase", "Reverse transcriptase"],
    answer: "DNA polymerase",
    fact: "SMRT sequencing uses immobilized DNA polymerase and fluorescent nucleotides for real-time base detection."
  },
  {
    question: "Which nation has the highest number of inscriptions in UNESCO’s Memory of the World Register?",
    options: ["UK", "France", "China", "USA"],
    answer: "UK",
    fact: "The UK has over 50 inscriptions, including the Domesday Book, Magna Carta, and Beatles recordings."
  },
  {
    question: "Which quantum field theory anomaly cancels in the Standard Model due to quark-lepton balance?",
    options: ["Gauge anomaly", "Chiral anomaly", "Gravitational anomaly", "Mixed anomaly"],
    answer: "Gauge anomaly",
    fact: "Anomaly cancellation requires equal numbers of colors and generations, constraining the SM fermion content."
  },
  {
    question: "Which country has the highest density of dolines per 10,000 km² in a karst region?",
    options: ["Slovenia", "China", "Cuba", "Puerto Rico"],
    answer: "Slovenia",
    fact: "The Classical Karst region has over 15,000 dolines in 500 km², yielding ~300/km², the highest known density."
  },
  {
    question: "Which ancient city was the religious center of the Dʿmt kingdom and features a massive temple to Almaqah?",
    options: ["Yeha", "Axum", "Adulis", "Kubar"],
    answer: "Yeha",
    fact: "Yeha’s temple (c. 700 BCE) is dedicated to Almaqah, the moon god of South Arabian pantheon, indicating cultural ties."
  },
  {
    question: "Which country files the highest number of patents in topological quantum computing?",
    options: ["USA", "Netherlands", "Japan", "Germany"],
    answer: "USA",
    fact: "Microsoft’s Station Q and academic labs file most patents on Majorana fermions and braiding logic."
  },
  {
    question: "Which particle mediates the flavor-changing neutral current in B⁰ → μ⁺μ⁻ decays?",
    options: ["Z boson", "Higgs boson", "Gluon", "Photon"],
    answer: "Z boson and Higgs boson",
    fact: "Both Z and Higgs contribute to B⁰ → μ⁺μ⁻; the observed rate matches SM prediction, constraining new physics."
  },
  {
    question: "Which nation has the highest number of fjords per 1,000 km of coastline?",
    options: ["Greenland", "Norway", "Canada", "Chile"],
    answer: "Greenland",
    fact: "Greenland averages ~11.4 fjords per 1,000 km; Norway ~10.8, due to deeper glacial incision."
  },
  {
    question: "Which country has the highest number of endemic reptile species in biodiversity hotspots?",
    options: ["Madagascar", "Western Ghats", "Cape Floristic Region", "Sundaland"],
    answer: "Madagascar",
    fact: "Madagascar has over 400 endemic reptiles, including all chameleons and 200+ gecko species."
  },
  {
    question: "Which quantum principle prevents the perfect copying of an unknown quantum state?",
    options: ["No-cloning theorem", "No-communication theorem", "No-deleting theorem", "No-hiding theorem"],
    answer: "No-cloning theorem",
    fact: "Proven in 1982, this underpins quantum cryptography and prevents eavesdropping in QKD."
  },
  {
    question: "Which ancient civilization developed the first known system of water harvesting using qanats?",
    options: ["Persians", "Romans", "Indus Valley", "Ancestral Puebloans"],
    answer: "Persians",
    fact: "Persian qanats (c. 1000 BCE) used gravity-fed underground channels to transport water from aquifers to arid regions."
  },
  {
    question: "Which country has the only operational nuclear reactors in Sub-Saharan Africa?",
    options: ["South Africa", "Nigeria", "Ghana", "Kenya"],
    answer: "South Africa",
    fact: "Koeberg Nuclear Power Station near Cape Town has two 970 MWe PWRs, providing ~5% of national electricity."
  },
  {
    question: "Which philosopher introduced the concept of 'epistemic injustice' in 2007?",
    options: ["Miranda Fricker", "Charles Mills", "Sandra Harding", "Donna Haraway"],
    answer: "Miranda Fricker",
    fact: "Fricker defined testimonial and hermeneutical injustice in 'Epistemic Injustice: Power and the Ethics of Knowing'."
  },
  {
    question: "Which nation has the highest number of reusable orbital launch vehicles in active service?",
    options: ["USA", "China", "Russia", "India"],
    answer: "USA",
    fact: "SpaceX operates over 60 Falcon 9 boosters, with individual cores flying up to 20 times, enabling unmatched reusability."
  },
  {
    question: "Which quantum phenomenon enables quantum key distribution (QKD) security via the no-cloning theorem?",
    options: ["Entanglement", "Superposition", "No-cloning", "Tunneling"],
    answer: "No-cloning",
    fact: "Eavesdropping alters the quantum state, making detection possible; security relies on quantum indeterminacy."
  },
  {
    question: "Which country has the highest number of indigenous village sign languages with no external influence?",
    options: ["Papua New Guinea", "India", "Nigeria", "Mexico"],
    answer: "Papua New Guinea",
    fact: "PNG has over 20 isolated village sign languages, developed independently in hearing communities with high deafness rates."
  },
  {
    question: "Which ancient text is the oldest known surgical treatise with anatomical precision?",
    options: ["Edwin Smith Papyrus", "Sushruta Samhita", "Hippocratic Corpus", "Ebers Papyrus"],
    answer: "Edwin Smith Papyrus",
    fact: "It describes 48 trauma cases with rational diagnoses, treatments, and anatomical terms, c. 1600 BCE."
  },
  {
    question: "Which country has the highest installed capacity of tidal stream (in-stream) turbines?",
    options: ["UK", "Canada", "France", "China"],
    answer: "UK",
    fact: "The MeyGen project in Scotland has 6 MW operational, the largest tidal stream array globally."
  },
  {
    question: "Which enzyme catalyzes the rate-limiting step in the mevalonate pathway?",
    options: ["HMG-CoA reductase", "Acetyl-CoA acetyltransferase", "Mevalonate kinase", "Squalene synthase"],
    answer: "HMG-CoA reductase",
    fact: "This enzyme is the target of statins, which lower cholesterol by inhibiting mevalonate production."
  },
  {
    question: "Which nation operates the most deep-sea cabled observatories for real-time ocean monitoring?",
    options: ["USA", "Japan", "Canada", "EU"],
    answer: "USA",
    fact: "The Ocean Observatories Initiative (OOI) deploys cabled arrays off Oregon and Washington for continuous data."
  }
]
  };

  const levels = ['beginner', 'intermediate', 'advanced', 'expert', 'master', 'legend'];

  const currentQuestion = questions[currentLevel][currentQuestionIndex];

  const handleAnswer = (selectedOption) => {
    const correct = selectedOption === currentQuestion.answer;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setScore(prev => prev + 1);
      setStreak(prev => {
        const newStreak = prev + 1;
        if (newStreak > maxStreak) setMaxStreak(newStreak);
        return newStreak;
      });
    } else {
      setStreak(0);
    }

    setTimeout(() => {
      setShowFeedback(false);
      if (currentQuestionIndex < questions[currentLevel].length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setTimer(30);
      } else {
        // Move to next level or complete game
        const currentLevelIndex = levels.indexOf(currentLevel);
        if (currentLevelIndex < levels.length - 1) {
          setCurrentLevel(levels[currentLevelIndex + 1]);
          setCurrentQuestionIndex(0);
          setTimer(30);
        } else {
          setGameCompleted(true);
        }
      }
    }, 2000);
  };

  const resetGame = () => {
    setCurrentLevel('beginner');
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameStarted(false);
    setGameCompleted(false);
    setTimer(30);
    setStreak(0);
  };

  const startGame = () => {
    setGameStarted(true);
    setTimer(30);
  };

  const calculateProgress = () => {
    return ((currentQuestionIndex + 1) / questions[currentLevel].length) * 100;
  };

  const calculateScorePercentage = () => {
    return (score / (currentQuestionIndex + 1)) * 100;
  };

  if (!gameStarted) {
    return (
      <div className="geo-quiz-container">
        <div className="geo-quiz-start-screen">
          <h1>🌍 Geography & Time Zone Quiz 🌎</h1>
          <p>Test your knowledge of world geography, time zones, and country facts!</p>
          <div className="geo-quiz-level-cards">
            {levels.map((level, index) => (
              <div key={level} className={`geo-quiz-level-card geo-${level}`}>
                <h3>{level.charAt(0).toUpperCase() + level.slice(1)}</h3>
                <p>{index === 0 ? "Basic country facts" : 
                    index === 1 ? "Intermediate geography" : 
                    index === 2 ? "Advanced time zones" : 
                    index === 3 ? "Expert-level trivia" : 
                    index === 4 ? "Master challenges" : "Legendary questions"}</p>
              </div>
            ))}
          </div>
          <button onClick={startGame} className="geo-quiz-start-button">Start Quiz</button>
          {localStorage.getItem('geographyQuizState') && (
            <button onClick={startGame} className="geo-quiz-continue-button">Continue Previous Game</button>
          )}
        </div>
      </div>
    );
  }

  if (gameCompleted) {
    return (
      <div className="geo-quiz-container">
        <div className="geo-quiz-completion-screen">
          <h1>🎉 Quiz Completed! 🎉</h1>
          <div className="geo-quiz-completion-stats">
            <div className="geo-quiz-stat-card">
              <h3>Final Score</h3>
              <p>{score} / {questions[currentLevel].length}</p>
            </div>
            <div className="geo-quiz-stat-card">
              <h3>Accuracy</h3>
              <p>{calculateScorePercentage().toFixed(1)}%</p>
            </div>
            <div className="geo-quiz-stat-card">
              <h3>Max Streak</h3>
              <p>{maxStreak}</p>
            </div>
          </div>
          <button onClick={resetGame} className="geo-quiz-restart-button">Play Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="geo-quiz-container">
      <div className="geo-quiz-game-container">
        <div className="geo-quiz-header">
          <div className="geo-quiz-level-indicator">
            <span className={`geo-quiz-level-tag geo-${currentLevel}`}>
              {currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1)}
            </span>
          </div>
          <div className="geo-quiz-progress-container">
            <div 
              className="geo-quiz-progress-bar" 
              style={{ width: `${calculateProgress()}%` }}
            ></div>
            <span className="geo-quiz-progress-text">
              Question {currentQuestionIndex + 1} of {questions[currentLevel].length}
            </span>
          </div>
          <div className="geo-quiz-stats">
            <div className="geo-quiz-stat">
              <span>Score:</span>
              <span className="geo-quiz-score">{score}</span>
            </div>
            <div className="geo-quiz-stat">
              <span>Streak:</span>
              <span className="geo-quiz-streak">{streak}🔥</span>
            </div>
            <div className="geo-quiz-stat">
              <span>Time:</span>
              <span className={`geo-quiz-timer ${timer <= 5 ? 'geo-warning' : ''}`}>{timer}s</span>
            </div>
          </div>
        </div>

        <div className="geo-quiz-question-card">
          <h2 className="geo-quiz-question-text">{currentQuestion.question}</h2>
          <div className="geo-quiz-options-grid">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className="geo-quiz-option-button"
                onClick={() => handleAnswer(option)}
                disabled={showFeedback}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {showFeedback && (
          <div className={`geo-quiz-feedback ${isCorrect ? 'geo-correct' : 'geo-incorrect'}`}>
            <div className="geo-quiz-feedback-content">
              <h2>{isCorrect ? 'Correct! 🎉' : 'Try Again! 😢'}</h2>
              <p className="geo-quiz-fact">{currentQuestion.fact}</p>
              <div className={`geo-quiz-emoji ${isCorrect ? 'geo-dancing' : 'geo-sad'}`}>
                {isCorrect ? '💃🕺' : '😞'}
              </div>
            </div>
          </div>
        )}

        <div className="geo-quiz-score-meter">
          <div 
            className="geo-quiz-score-progress" 
            style={{ width: `${calculateScorePercentage()}%` }}
          ></div>
          <span className="geo-quiz-score-text">{calculateScorePercentage().toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
};

export default GeographyQuiz;