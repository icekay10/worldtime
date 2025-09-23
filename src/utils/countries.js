
const countries = [
  {
    label: "Afghanistan",
    value: "Asia/Kabul",
    lat: 33.9391,
    lng: 67.7099,
    flag: "🇦🇫",
    cities: [
      { name: "Kabul", timezone: "Asia/Kabul", lat: 34.5228, lng: 69.1761 },
      { name: "Kandahar", timezone: "Asia/Kabul", lat: 31.6090, lng: 65.7187 },
      { name: "Herat", timezone: "Asia/Kabul", lat: 34.3486, lng: 62.1976 }
    ]
  },
  {
    label: "Albania",
    value: "Europe/Tirane",
    lat: 41.1533,
    lng: 20.1683,
    flag: "🇦🇱",
    cities: [
      { name: "Tirana", timezone: "Europe/Tirane", lat: 41.3275, lng: 19.8187 },
      { name: "Durrës", timezone: "Europe/Tirane", lat: 41.3167, lng: 19.4333 },
      { name: "Vlorë", timezone: "Europe/Tirane", lat: 40.4667, lng: 19.4833 }
    ]
  },
  {
    label: "Algeria",
    value: "Africa/Algiers",
    lat: 28.0339,
    lng: 1.6596,
    flag: "🇩🇿",
    cities: [
      { name: "Algiers", timezone: "Africa/Algiers", lat: 36.7782, lng: 3.0501 },
      { name: "Oran", timezone: "Africa/Algiers", lat: 35.6973, lng: -0.6357 },
      { name: "Constantine", timezone: "Africa/Algiers", lat: 36.3678, lng: 6.6128 }
    ]
  },
  {
    label: "Andorra",
    value: "Europe/Andorra",
    lat: 42.5465,
    lng: 1.6008,
    flag: "🇦🇩",
    cities: [
      { name: "Andorra la Vella", timezone: "Europe/Andorra", lat: 42.5075, lng: 1.5218 },
      { name: "Sant Julià de Lòria", timezone: "Europe/Andorra", lat: 42.4636, lng: 1.4614 },
      { name: "Encamp", timezone: "Europe/Andorra", lat: 42.5447, lng: 1.5848 }
    ]
  },
  {
    label: "Angola",
    value: "Africa/Luanda",
    lat: -11.2027,
    lng: 17.8739,
    flag: "🇦🇴",
    cities: [
      { name: "Luanda", timezone: "Africa/Luanda", lat: -8.8383, lng: 13.2347 },
      { name: "Huambo", timezone: "Africa/Luanda", lat: -12.7833, lng: 15.7500 },
      { name: "Lubango", timezone: "Africa/Luanda", lat: -14.9167, lng: 13.5000 }
    ]
  },
  {
    label: "Antigua and Barbuda",
    value: "America/Antigua",
    lat: 17.3578,
    lng: -62.7830,
    flag: "🇦🇬",
    cities: [
      { name: "St. John's", timezone: "America/Antigua", lat: 17.1177, lng: -61.8472 },
      { name: "Piggotts", timezone: "America/Antigua", lat: 17.1500, lng: -61.7833 },
      { name: "Bolans", timezone: "America/Antigua", lat: 17.1000, lng: -61.7500 }
    ]
  },
  {
    label: "Argentina",
    value: "America/Argentina/Buenos_Aires",
    lat: -38.4161,
    lng: -63.6167,
    flag: "🇦🇷",
    cities: [
      { name: "Buenos Aires", timezone: "America/Argentina/Buenos_Aires", lat: -34.6037, lng: -58.3816 },
      { name: "Córdoba", timezone: "America/Argentina/Cordoba", lat: -31.4201, lng: -64.1888 },
      { name: "Rosario", timezone: "America/Argentina/Cordoba", lat: -32.9468, lng: -60.6393 }
    ]
  },
  {
    label: "Armenia",
    value: "Asia/Yerevan",
    lat: 40.0686,
    lng: 45.0382,
    flag: "🇦🇲",
    cities: [
      { name: "Yerevan", timezone: "Asia/Yerevan", lat: 40.1811, lng: 44.5136 },
      { name: "Gyumri", timezone: "Asia/Yerevan", lat: 40.7793, lng: 43.8309 },
      { name: "Vanadzor", timezone: "Asia/Yerevan", lat: 40.8333, lng: 44.2667 }
    ]
  },
  {
    label: "Australia",
    value: "Australia/Sydney",
    lat: -25.2744,
    lng: 133.7751,
    flag: "🇦🇺",
    cities: [
      { name: "Sydney", timezone: "Australia/Sydney", lat: -33.8688, lng: 151.2093 },
      { name: "Melbourne", timezone: "Australia/Melbourne", lat: -37.8136, lng: 144.9631 },
      { name: "Brisbane", timezone: "Australia/Brisbane", lat: -27.4698, lng: 153.0251 }
    ]
  },
  {
    label: "Austria",
    value: "Europe/Vienna",
    lat: 47.5162,
    lng: 14.5501,
    flag: "🇦🇹",
    cities: [
      { name: "Vienna", timezone: "Europe/Vienna", lat: 48.2082, lng: 16.3738 },
      { name: "Graz", timezone: "Europe/Vienna", lat: 47.0707, lng: 15.4395 },
      { name: "Linz", timezone: "Europe/Vienna", lat: 48.3069, lng: 14.2858 }
    ]
  },
  {
    label: "Azerbaijan",
    value: "Asia/Baku",
    lat: 40.1431,
    lng: 47.5769,
    flag: "🇦🇿",
    cities: [
      { name: "Baku", timezone: "Asia/Baku", lat: 40.4093, lng: 49.8671 },
      { name: "Ganja", timezone: "Asia/Baku", lat: 40.7581, lng: 46.3744 },
      { name: "Sumqayit", timezone: "Asia/Baku", lat: 40.5917, lng: 49.7333 }
    ]
  },
  {
    label: "Bahamas",
    value: "America/Nassau",
    lat: 25.0343,
    lng: -77.3963,
    flag: "🇧🇸",
    cities: [
      { name: "Nassau", timezone: "America/Nassau", lat: 25.0343, lng: -77.3963 },
      { name: "Freeport", timezone: "America/Nassau", lat: 26.5390, lng: -78.6728 },
      { name: "Alice Town", timezone: "America/Nassau", lat: 26.6981, lng: -77.0469 }
    ]
  },
  {
    label: "Bahrain",
    value: "Asia/Bahrain",
    lat: 25.9304,
    lng: 50.6378,
    flag: "🇧🇭",
    cities: [
      { name: "Manama", timezone: "Asia/Bahrain", lat: 26.2285, lng: 50.5860 },
      { name: "Muharraq", timezone: "Asia/Bahrain", lat: 26.2780, lng: 50.6055 },
      { name: "Riffa", timezone: "Asia/Bahrain", lat: 26.1500, lng: 50.5500 }
    ]
  },
  {
    label: "Bangladesh",
    value: "Asia/Dhaka",
    lat: 23.6850,
    lng: 90.3563,
    flag: "🇧🇩",
    cities: [
      { name: "Dhaka", timezone: "Asia/Dhaka", lat: 23.8103, lng: 90.4125 },
      { name: "Chittagong", timezone: "Asia/Dhaka", lat: 22.3569, lng: 91.7832 },
      { name: "Khulna", timezone: "Asia/Dhaka", lat: 22.8073, lng: 89.5582 }
    ]
  },
  {
    label: "Barbados",
    value: "America/Barbados",
    lat: 13.1939,
    lng: -59.5432,
    flag: "🇧🇧",
    cities: [
      { name: "Bridgetown", timezone: "America/Barbados", lat: 13.1000, lng: -59.6167 },
      { name: "Holetown", timezone: "America/Barbados", lat: 13.1667, lng: -59.6333 },
      { name: "Oistins", timezone: "America/Barbados", lat: 13.0667, lng: -59.5833 }
    ]
  },
  {
    label: "Belarus",
    value: "Europe/Minsk",
    lat: 53.7098,
    lng: 27.9534,
    flag: "🇧🇾",
    cities: [
      { name: "Minsk", timezone: "Europe/Minsk", lat: 53.9045, lng: 27.5615 },
      { name: "Gomel", timezone: "Europe/Minsk", lat: 52.4345, lng: 30.9992 },
      { name: "Mogilev", timezone: "Europe/Minsk", lat: 53.9000, lng: 30.3333 }
    ]
  },
  {
    label: "Belgium",
    value: "Europe/Brussels",
    lat: 50.5039,
    lng: 4.4699,
    flag: "🇧🇪",
    cities: [
      { name: "Brussels", timezone: "Europe/Brussels", lat: 50.8503, lng: 4.3517 },
      { name: "Antwerp", timezone: "Europe/Brussels", lat: 51.2194, lng: 4.4025 },
      { name: "Ghent", timezone: "Europe/Brussels", lat: 51.0543, lng: 3.7174 }
    ]
  },
  {
    label: "Belize",
    value: "America/Belize",
    lat: 17.1899,
    lng: -88.4976,
    flag: "🇧🇿",
    cities: [
      { name: "Belize City", timezone: "America/Belize", lat: 17.4999, lng: -88.1966 },
      { name: "San Ignacio", timezone: "America/Belize", lat: 17.1500, lng: -89.0833 },
      { name: "Orange Walk", timezone: "America/Belize", lat: 18.1000, lng: -88.5833 }
    ]
  },
  {
    label: "Benin",
    value: "Africa/Porto-Novo",
    lat: 9.3077,
    lng: 2.3158,
    flag: "🇧🇯",
    cities: [
      { name: "Porto-Novo", timezone: "Africa/Porto-Novo", lat: 6.4939, lng: 2.6253 },
      { name: "Cotonou", timezone: "Africa/Porto-Novo", lat: 6.3648, lng: 2.4000 },
      { name: "Parakou", timezone: "Africa/Porto-Novo", lat: 9.3333, lng: 2.6167 }
    ]
  },
  {
    label: "Bhutan",
    value: "Asia/Thimphu",
    lat: 27.5142,
    lng: 90.4336,
    flag: "🇧🇹",
    cities: [
      { name: "Thimphu", timezone: "Asia/Thimphu", lat: 27.4728, lng: 89.6393 },
      { name: "Paro", timezone: "Asia/Thimphu", lat: 27.4167, lng: 89.4167 },
      { name: "Phuntsholing", timezone: "Asia/Thimphu", lat: 26.8500, lng: 89.4333 }
    ]
  },
  {
    label: "Bolivia",
    value: "America/La_Paz",
    lat: -16.2902,
    lng: -63.5887,
    flag: "🇧🇴",
    cities: [
      { name: "La Paz", timezone: "America/La_Paz", lat: -16.4897, lng: -68.1193 },
      { name: "Santa Cruz", timezone: "America/La_Paz", lat: -17.7833, lng: -63.1833 },
      { name: "Cochabamba", timezone: "America/La_Paz", lat: -17.3933, lng: -66.1533 }
    ]
  },
  {
    label: "Bosnia and Herzegovina",
    value: "Europe/Sarajevo",
    lat: 43.9159,
    lng: 17.6791,
    flag: "🇧🇦",
    cities: [
      { name: "Sarajevo", timezone: "Europe/Sarajevo", lat: 43.8563, lng: 18.4131 },
      { name: "Banja Luka", timezone: "Europe/Sarajevo", lat: 44.7700, lng: 17.1900 },
      { name: "Tuzla", timezone: "Europe/Sarajevo", lat: 44.5167, lng: 18.6667 }
    ]
  },
  {
    label: "Botswana",
    value: "Africa/Gaborone",
    lat: -22.3285,
    lng: 24.6849,
    flag: "🇧🇼",
    cities: [
      { name: "Gaborone", timezone: "Africa/Gaborone", lat: -24.6282, lng: 25.9231 },
      { name: "Francistown", timezone: "Africa/Gaborone", lat: -21.1833, lng: 27.5000 },
      { name: "Molepolole", timezone: "Africa/Gaborone", lat: -24.2000, lng: 26.0000 }
    ]
  },
  {
    label: "Brazil",
    value: "America/Sao_Paulo",
    lat: -14.2350,
    lng: -51.9253,
    flag: "🇧🇷",
    cities: [
      { name: "São Paulo", timezone: "America/Sao_Paulo", lat: -23.5505, lng: -46.6333 },
      { name: "Rio de Janeiro", timezone: "America/Sao_Paulo", lat: -22.9068, lng: -43.1729 },
      { name: "Brasília", timezone: "America/Sao_Paulo", lat: -15.8267, lng: -47.9218 }
    ]
  },
  {
    label: "Brunei",
    value: "Asia/Brunei",
    lat: 4.5353,
    lng: 114.7277,
    flag: "🇧🇳",
    cities: [
      { name: "Bandar Seri Begawan", timezone: "Asia/Brunei", lat: 4.8856, lng: 114.9297 },
      { name: "Kuala Belait", timezone: "Asia/Brunei", lat: 4.6167, lng: 114.2333 },
      { name: "Tutong", timezone: "Asia/Brunei", lat: 4.7667, lng: 114.4333 }
    ]
  },
  {
    label: "Bulgaria",
    value: "Europe/Sofia",
    lat: 42.7339,
    lng: 25.4858,
    flag: "🇧🇬",
    cities: [
      { name: "Sofia", timezone: "Europe/Sofia", lat: 42.6977, lng: 23.3219 },
      { name: "Plovdiv", timezone: "Europe/Sofia", lat: 42.1364, lng: 24.7466 },
      { name: "Varna", timezone: "Europe/Sofia", lat: 43.2147, lng: 27.9147 }
    ]
  },
  {
    label: "Burkina Faso",
    value: "Africa/Ouagadougou",
    lat: 12.2383,
    lng: -1.5616,
    flag: "🇧🇫",
    cities: [
      { name: "Ouagadougou", timezone: "Africa/Ouagadougou", lat: 12.3707, lng: -1.5267 },
      { name: "Bobo-Dioulasso", timezone: "Africa/Ouagadougou", lat: 12.2500, lng: -4.3333 },
      { name: "Koudougou", timezone: "Africa/Ouagadougou", lat: 12.3333, lng: -2.5833 }
    ]
  },
  {
    label: "Burundi",
    value: "Africa/Bujumbura",
    lat: -3.3731,
    lng: 29.9189,
    flag: "🇧🇮",
    cities: [
      { name: "Bujumbura", timezone: "Africa/Bujumbura", lat: -3.3833, lng: 29.3667 },
      { name: "Gitega", timezone: "Africa/Bujumbura", lat: -3.4667, lng: 29.9333 },
      { name: "Muyinga", timezone: "Africa/Bujumbura", lat: -2.6667, lng: 30.3333 }
    ]
  },
  {
    label: "Cambodia",
    value: "Asia/Phnom_Penh",
    lat: 12.5657,
    lng: 104.9910,
    flag: "🇰🇭",
    cities: [
      { name: "Phnom Penh", timezone: "Asia/Phnom_Penh", lat: 11.5500, lng: 104.9167 },
      { name: "Siem Reap", timezone: "Asia/Phnom_Penh", lat: 13.3617, lng: 103.8603 },
      { name: "Battambang", timezone: "Asia/Phnom_Penh", lat: 13.1000, lng: 103.2000 }
    ]
  },
  {
    label: "Cameroon",
    value: "Africa/Douala",
    lat: 7.3697,
    lng: 12.3547,
    flag: "🇨🇲",
    cities: [
      { name: "Douala", timezone: "Africa/Douala", lat: 4.0511, lng: 9.7027 },
      { name: "Yaoundé", timezone: "Africa/Douala", lat: 3.8667, lng: 11.5167 },
      { name: "Garoua", timezone: "Africa/Douala", lat: 9.3000, lng: 13.4000 }
    ]
  },
  {
    label: "Canada",
    value: "America/Toronto",
    lat: 56.1304,
    lng: -106.3468,
    flag: "🇨🇦",
    cities: [
      { name: "Toronto", timezone: "America/Toronto", lat: 43.6532, lng: -79.3832 },
      { name: "Vancouver", timezone: "America/Vancouver", lat: 49.2827, lng: -123.1207 },
      { name: "Montreal", timezone: "America/Toronto", lat: 45.5019, lng: -73.5674 }
    ]
  },
  {
    label: "Cape Verde",
    value: "Atlantic/Cape_Verde",
    lat: 16.0021,
    lng: -24.0132,
    flag: "🇨🇻",
    cities: [
      { name: "Praia", timezone: "Atlantic/Cape_Verde", lat: 14.9333, lng: -23.5167 },
      { name: "Mindelo", timezone: "Atlantic/Cape_Verde", lat: 16.8833, lng: -25.0000 },
      { name: "Assomada", timezone: "Atlantic/Cape_Verde", lat: 15.1000, lng: -23.6333 }
    ]
  },
  {
    label: "Central African Republic",
    value: "Africa/Bangui",
    lat: 6.6111,
    lng: 20.9394,
    flag: "🇨🇫",
    cities: [
      { name: "Bangui", timezone: "Africa/Bangui", lat: 4.3600, lng: 18.5600 },
      { name: "Bimbo", timezone: "Africa/Bangui", lat: 4.4167, lng: 18.5333 },
      { name: "Berberati", timezone: "Africa/Bangui", lat: 4.2333, lng: 15.7833 }
    ]
  },
  {
    label: "Chad",
    value: "Africa/Ndjamena",
    lat: 15.4542,
    lng: 18.7322,
    flag: "🇹🇩",
    cities: [
      { name: "N'Djamena", timezone: "Africa/Ndjamena", lat: 12.1137, lng: 15.0807 },
      { name: "Moundou", timezone: "Africa/Ndjamena", lat: 8.5833, lng: 16.0833 },
      { name: "Sarh", timezone: "Africa/Ndjamena", lat: 9.1333, lng: 18.3833 }
    ]
  },
  {
    label: "Chile",
    value: "America/Santiago",
    lat: -35.6751,
    lng: -71.5430,
    flag: "🇨🇱",
    cities: [
      { name: "Santiago", timezone: "America/Santiago", lat: -33.4489, lng: -70.6693 },
      { name: "Valparaíso", timezone: "America/Santiago", lat: -33.0472, lng: -71.6126 },
      { name: "Concepción", timezone: "America/Santiago", lat: -36.8209, lng: -73.0451 }
    ]
  },
  {
    label: "China",
    value: "Asia/Shanghai",
    lat: 35.8617,
    lng: 104.1954,
    flag: "🇨🇳",
    cities: [
      { name: "Beijing", timezone: "Asia/Shanghai", lat: 39.9042, lng: 116.4074 },
      { name: "Shanghai", timezone: "Asia/Shanghai", lat: 31.2304, lng: 121.4737 },
      { name: "Guangzhou", timezone: "Asia/Shanghai", lat: 23.1291, lng: 113.2644 }
    ]
  },
  {
    label: "Colombia",
    value: "America/Bogota",
    lat: 4.5709,
    lng: -74.2973,
    flag: "🇨🇴",
    cities: [
      { name: "Bogotá", timezone: "America/Bogota", lat: 4.7110, lng: -74.0721 },
      { name: "Medellín", timezone: "America/Bogota", lat: 6.2518, lng: -75.5833 },
      { name: "Cali", timezone: "America/Bogota", lat: 3.4372, lng: -76.5225 }
    ]
  },
  {
    label: "Comoros",
    value: "Indian/Comoro",
    lat: -11.8750,
    lng: 43.8722,
    flag: "🇰🇲",
    cities: [
      { name: "Moroni", timezone: "Indian/Comoro", lat: -11.7031, lng: 43.2667 },
      { name: "Fomboni", timezone: "Indian/Comoro", lat: -12.2833, lng: 43.8833 },
      { name: "Mutsamudu", timezone: "Indian/Comoro", lat: -12.1833, lng: 44.3833 }
    ]
  },
  {
    label: "Congo (Democratic Republic)",
    value: "Africa/Kinshasa",
    lat: -4.0383,
    lng: 21.7587,
    flag: "🇨🇩",
    cities: [
      { name: "Kinshasa", timezone: "Africa/Kinshasa", lat: -4.3220, lng: 15.3090 },
      { name: "Lubumbashi", timezone: "Africa/Lubumbashi", lat: -11.6784, lng: 27.4815 },
      { name: "Mbuji-Mayi", timezone: "Africa/Lubumbashi", lat: -6.1394, lng: 23.6047 }
    ]
  },
  {
    label: "Congo (Republic)",
    value: "Africa/Brazzaville",
    lat: -0.2280,
    lng: 15.8277,
    flag: "🇨🇬",
    cities: [
      { name: "Brazzaville", timezone: "Africa/Brazzaville", lat: -4.2634, lng: 15.2429 },
      { name: "Pointe-Noire", timezone: "Africa/Brazzaville", lat: -4.7833, lng: 11.8667 },
      { name: "Dolisie", timezone: "Africa/Brazzaville", lat: -3.9333, lng: 12.8333 }
    ]
  },
  {
    label: "Costa Rica",
    value: "America/Costa_Rica",
    lat: 9.7489,
    lng: -83.7534,
    flag: "🇨🇷",
    cities: [
      { name: "San José", timezone: "America/Costa_Rica", lat: 9.9281, lng: -84.0907 },
      { name: "Liberia", timezone: "America/Costa_Rica", lat: 10.6333, lng: -85.4167 },
      { name: "Cartago", timezone: "America/Costa_Rica", lat: 9.8578, lng: -83.9381 }
    ]
  },
  {
    label: "Croatia",
    value: "Europe/Zagreb",
    lat: 45.1000,
    lng: 15.2000,
    flag: "🇭🇷",
    cities: [
      { name: "Zagreb", timezone: "Europe/Zagreb", lat: 45.8150, lng: 15.9819 },
      { name: "Split", timezone: "Europe/Zagreb", lat: 43.5081, lng: 16.4402 },
      { name: "Rijeka", timezone: "Europe/Zagreb", lat: 45.3270, lng: 14.4423 }
    ]
  },
  {
    label: "Cuba",
    value: "America/Havana",
    lat: 21.5218,
    lng: -77.7812,
    flag: "🇨🇺",
    cities: [
      { name: "Havana", timezone: "America/Havana", lat: 23.1136, lng: -82.3666 },
      { name: "Santiago de Cuba", timezone: "America/Havana", lat: 20.0167, lng: -75.8333 },
      { name: "Camagüey", timezone: "America/Havana", lat: 21.3833, lng: -77.9167 }
    ]
  },
  {
    label: "Cyprus",
    value: "Asia/Nicosia",
    lat: 35.1264,
    lng: 33.4299,
    flag: "🇨🇾",
    cities: [
      { name: "Nicosia", timezone: "Asia/Nicosia", lat: 35.1796, lng: 33.3764 },
      { name: "Limassol", timezone: "Asia/Nicosia", lat: 34.6793, lng: 33.0438 },
      { name: "Larnaca", timezone: "Asia/Nicosia", lat: 34.8983, lng: 33.6317 }
    ]
  },
  {
    label: "Czech Republic",
    value: "Europe/Prague",
    lat: 49.8175,
    lng: 15.4730,
    flag: "🇨🇿",
    cities: [
      { name: "Prague", timezone: "Europe/Prague", lat: 50.0755, lng: 14.4378 },
      { name: "Brno", timezone: "Europe/Prague", lat: 49.1953, lng: 16.6080 },
      { name: "Ostrava", timezone: "Europe/Prague", lat: 49.8200, lng: 18.2633 }
    ]
  },
  {
    label: "Denmark",
    value: "Europe/Copenhagen",
    lat: 56.2639,
    lng: 9.5018,
    flag: "🇩🇰",
    cities: [
      { name: "Copenhagen", timezone: "Europe/Copenhagen", lat: 55.6761, lng: 12.5683 },
      { name: "Aarhus", timezone: "Europe/Copenhagen", lat: 56.1629, lng: 10.2039 },
      { name: "Odense", timezone: "Europe/Copenhagen", lat: 55.3965, lng: 10.3888 }
    ]
  },
  {
    label: "Djibouti",
    value: "Africa/Djibouti",
    lat: 11.8251,
    lng: 42.5903,
    flag: "🇩🇯",
    cities: [
      { name: "Djibouti City", timezone: "Africa/Djibouti", lat: 11.5983, lng: 43.1453 },
      { name: "Ali Sabieh", timezone: "Africa/Djibouti", lat: 11.1500, lng: 42.7500 },
      { name: "Tadjoura", timezone: "Africa/Djibouti", lat: 11.8167, lng: 42.8667 }
    ]
  },
  {
    label: "Dominica",
    value: "America/Dominica",
    lat: 15.4150,
    lng: -61.3710,
    flag: "🇩🇲",
    cities: [
      { name: "Roseau", timezone: "America/Dominica", lat: 15.3000, lng: -61.4000 },
      { name: "Portsmouth", timezone: "America/Dominica", lat: 15.6500, lng: -61.5833 },
      { name: "Marigot", timezone: "America/Dominica", lat: 15.5833, lng: -61.4167 }
    ]
  },
  {
    label: "Dominican Republic",
    value: "America/Santo_Domingo",
    lat: 18.7357,
    lng: -70.1627,
    flag: "🇩🇴",
    cities: [
      { name: "Santo Domingo", timezone: "America/Santo_Domingo", lat: 18.4861, lng: -69.9314 },
      { name: "Santiago", timezone: "America/Santo_Domingo", lat: 19.4500, lng: -70.7000 },
      { name: "La Romana", timezone: "America/Santo_Domingo", lat: 18.4289, lng: -68.9731 }
    ]
  },
  {
    label: "Ecuador",
    value: "America/Guayaquil",
    lat: -1.8312,
    lng: -78.1834,
    flag: "🇪🇨",
    cities: [
      { name: "Quito", timezone: "America/Guayaquil", lat: -0.1807, lng: -78.4678 },
      { name: "Guayaquil", timezone: "America/Guayaquil", lat: -2.1709, lng: -79.9224 },
      { name: "Cuenca", timezone: "America/Guayaquil", lat: -2.8936, lng: -78.9974 }
    ]
  },
  {
    label: "Egypt",
    value: "Africa/Cairo",
    lat: 26.8206,
    lng: 30.8025,
    flag: "🇪🇬",
    cities: [
      { name: "Cairo", timezone: "Africa/Cairo", lat: 30.0647, lng: 31.2497 },
      { name: "Alexandria", timezone: "Africa/Cairo", lat: 31.2001, lng: 29.9187 },
      { name: "Giza", timezone: "Africa/Cairo", lat: 29.9667, lng: 31.2000 }
    ]
  },
  {
    label: "El Salvador",
    value: "America/El_Salvador",
    lat: 13.7942,
    lng: -88.8965,
    flag: "🇸🇻",
    cities: [
      { name: "San Salvador", timezone: "America/El_Salvador", lat: 13.6929, lng: -89.2182 },
      { name: "Santa Ana", timezone: "America/El_Salvador", lat: 13.9833, lng: -89.5500 },
      { name: "San Miguel", timezone: "America/El_Salvador", lat: 13.4667, lng: -88.1833 }
    ]
  },
  {
    label: "Equatorial Guinea",
    value: "Africa/Malabo",
    lat: 1.6508,
    lng: 10.2679,
    flag: "🇬🇶",
    cities: [
      { name: "Malabo", timezone: "Africa/Malabo", lat: 3.7500, lng: 8.7833 },
      { name: "Bata", timezone: "Africa/Malabo", lat: 1.8500, lng: 9.7833 },
      { name: "Ebebiyin", timezone: "Africa/Malabo", lat: 2.1333, lng: 11.1667 }
    ]
  },
  {
    label: "Eritrea",
    value: "Africa/Asmara",
    lat: 15.1794,
    lng: 39.7823,
    flag: "🇪🇷",
    cities: [
      { name: "Asmara", timezone: "Africa/Asmara", lat: 15.3229, lng: 38.9251 },
      { name: "Massawa", timezone: "Africa/Asmara", lat: 15.6167, lng: 39.4667 },
      { name: "Keren", timezone: "Africa/Asmara", lat: 15.7833, lng: 38.4333 }
    ]
  },
  {
    label: "Estonia",
    value: "Europe/Tallinn",
    lat: 58.5953,
    lng: 25.0136,
    flag: "🇪🇪",
    cities: [
      { name: "Tallinn", timezone: "Europe/Tallinn", lat: 59.4370, lng: 24.7536 },
      { name: "Tartu", timezone: "Europe/Tallinn", lat: 58.3780, lng: 26.7290 },
      { name: "Narva", timezone: "Europe/Tallinn", lat: 59.3750, lng: 28.1750 }
    ]
  },
  {
    label: "Eswatini",
    value: "Africa/Mbabane",
    lat: -26.5225,
    lng: 31.4659,
    flag: "🇸🇿",
    cities: [
      { name: "Mbabane", timezone: "Africa/Mbabane", lat: -26.3167, lng: 31.1333 },
      { name: "Manzini", timezone: "Africa/Mbabane", lat: -26.4500, lng: 31.3333 },
      { name: "Nhlangano", timezone: "Africa/Mbabane", lat: -26.7167, lng: 31.4167 }
    ]
  },
  {
    label: "Ethiopia",
    value: "Africa/Addis_Ababa",
    lat: 9.1450,
    lng: 40.4897,
    flag: "🇪🇹",
    cities: [
      { name: "Addis Ababa", timezone: "Africa/Addis_Ababa", lat: 9.0084, lng: 38.7667 },
      { name: "Dire Dawa", timezone: "Africa/Addis_Ababa", lat: 9.5833, lng: 41.8667 },
      { name: "Mek'ele", timezone: "Africa/Addis_Ababa", lat: 13.4833, lng: 39.4833 }
    ]
  },
  {
    label: "Fiji",
    value: "Pacific/Fiji",
    lat: -16.5782,
    lng: 179.4144,
    flag: "🇫🇯",
    cities: [
      { name: "Suva", timezone: "Pacific/Fiji", lat: -18.1416, lng: 178.4419 },
      { name: "Nadi", timezone: "Pacific/Fiji", lat: -17.7333, lng: 177.4500 },
      { name: "Lautoka", timezone: "Pacific/Fiji", lat: -17.6667, lng: 177.2000 }
    ]
  },
  {
    label: "Finland",
    value: "Europe/Helsinki",
    lat: 61.9241,
    lng: 25.7482,
    flag: "🇫🇮",
    cities: [
      { name: "Helsinki", timezone: "Europe/Helsinki", lat: 60.1699, lng: 24.9384 },
      { name: "Tampere", timezone: "Europe/Helsinki", lat: 61.4980, lng: 23.7600 },
      { name: "Turku", timezone: "Europe/Helsinki", lat: 60.4500, lng: 22.2667 }
    ]
  },
  {
    label: "France",
    value: "Europe/Paris",
    lat: 46.2276,
    lng: 2.2137,
    flag: "🇫🇷",
    cities: [
      { name: "Paris", timezone: "Europe/Paris", lat: 48.8566, lng: 2.3522 },
      { name: "Marseille", timezone: "Europe/Paris", lat: 43.2965, lng: 5.3698 },
      { name: "Lyon", timezone: "Europe/Paris", lat: 45.7640, lng: 4.8357 }
    ]
  },
  {
    label: "Gabon",
    value: "Africa/Libreville",
    lat: -0.8037,
    lng: 11.6094,
    flag: "🇬🇦",
    cities: [
      { name: "Libreville", timezone: "Africa/Libreville", lat: 0.3833, lng: 9.4500 },
      { name: "Port-Gentil", timezone: "Africa/Libreville", lat: -0.7167, lng: 8.7833 },
      { name: "Franceville", timezone: "Africa/Libreville", lat: -1.6500, lng: 13.5833 }
    ]
  },
  {
    label: "Gambia",
    value: "Africa/Banjul",
    lat: 13.4432,
    lng: -15.3101,
    flag: "🇬🇲",
    cities: [
      { name: "Banjul", timezone: "Africa/Banjul", lat: 13.4531, lng: -16.5775 },
      { name: "Serekunda", timezone: "Africa/Banjul", lat: 13.4500, lng: -16.6667 },
      { name: "Brikama", timezone: "Africa/Banjul", lat: 13.1833, lng: -16.6333 }
    ]
  },
  {
    label: "Georgia",
    value: "Asia/Tbilisi",
    lat: 42.3154,
    lng: 43.3569,
    flag: "🇬🇪",
    cities: [
      { name: "Tbilisi", timezone: "Asia/Tbilisi", lat: 41.7151, lng: 44.8271 },
      { name: "Kutaisi", timezone: "Asia/Tbilisi", lat: 42.2833, lng: 42.7000 },
      { name: "Batumi", timezone: "Asia/Tbilisi", lat: 41.6333, lng: 41.6333 }
    ]
  },
  {
    label: "Germany",
    value: "Europe/Berlin",
    lat: 51.1657,
    lng: 10.4515,
    flag: "🇩🇪",
    cities: [
      { name: "Berlin", timezone: "Europe/Berlin", lat: 52.5200, lng: 13.4050 },
      { name: "Hamburg", timezone: "Europe/Berlin", lat: 53.5511, lng: 9.9937 },
      { name: "Munich", timezone: "Europe/Berlin", lat: 48.1351, lng: 11.5820 }
    ]
  },
  {
    label: "Ghana",
    value: "Africa/Accra",
    lat: 7.9465,
    lng: -1.0232,
    flag: "🇬🇭",
    cities: [
      { name: "Accra", timezone: "Africa/Accra", lat: 5.5560, lng: -0.2000 },
      { name: "Kumasi", timezone: "Africa/Accra", lat: 6.6833, lng: -1.6167 },
      { name: "Tamale", timezone: "Africa/Accra", lat: 9.4000, lng: -0.8500 }
    ]
  },
  {
    label: "Greece",
    value: "Europe/Athens",
    lat: 39.0742,
    lng: 21.8243,
    flag: "🇬🇷",
    cities: [
      { name: "Athens", timezone: "Europe/Athens", lat: 37.9838, lng: 23.7275 },
      { name: "Thessaloniki", timezone: "Europe/Athens", lat: 40.6401, lng: 22.9444 },
      { name: "Patras", timezone: "Europe/Athens", lat: 38.2466, lng: 21.7350 }
    ]
  },
  {
    label: "Grenada",
    value: "America/Grenada",
    lat: 12.2628,
    lng: -61.6042,
    flag: "🇬🇩",
    cities: [
      { name: "St. George's", timezone: "America/Grenada", lat: 12.0500, lng: -61.7500 },
      { name: "Gouyave", timezone: "America/Grenada", lat: 12.1000, lng: -61.6667 },
      { name: "Victoria", timezone: "America/Grenada", lat: 12.0333, lng: -61.7667 }
    ]
  },
  {
    label: "Guatemala",
    value: "America/Guatemala",
    lat: 15.7835,
    lng: -90.2308,
    flag: "🇬🇹",
    cities: [
      { name: "Guatemala City", timezone: "America/Guatemala", lat: 14.6349, lng: -90.5069 },
      { name: "Mixco", timezone: "America/Guatemala", lat: 14.6167, lng: -90.6333 },
      { name: "Quetzaltenango", timezone: "America/Guatemala", lat: 14.8333, lng: -91.5167 }
    ]
  },
  {
    label: "Guinea",
    value: "Africa/Conakry",
    lat: 9.9456,
    lng: -9.6966,
    flag: "🇬🇳",
    cities: [
      { name: "Conakry", timezone: "Africa/Conakry", lat: 9.5167, lng: -13.7000 },
      { name: "Kindia", timezone: "Africa/Conakry", lat: 9.3333, lng: -13.1667 },
      { name: "Kankan", timezone: "Africa/Conakry", lat: 10.3333, lng: -9.3333 }
    ]
  },
  {
    label: "Guinea-Bissau",
    value: "Africa/Bissau",
    lat: 11.8037,
    lng: -15.1804,
    flag: "🇬🇼",
    cities: [
      { name: "Bissau", timezone: "Africa/Bissau", lat: 11.8500, lng: -15.5833 },
      { name: "Bafatá", timezone: "Africa/Bissau", lat: 12.2167, lng: -14.4500 },
      { name: "Gabú", timezone: "Africa/Bissau", lat: 12.3333, lng: -13.8333 }
    ]
  },
  {
    label: "Guyana",
    value: "America/Guyana",
    lat: 4.8604,
    lng: -58.9302,
    flag: "🇬🇾",
    cities: [
      { name: "Georgetown", timezone: "America/Guyana", lat: 6.8000, lng: -58.1500 },
      { name: "Linden", timezone: "America/Guyana", lat: 6.4167, lng: -58.1667 },
      { name: "New Amsterdam", timezone: "America/Guyana", lat: 6.2833, lng: -57.4667 }
    ]
  },
  {
    label: "Haiti",
    value: "America/Port-au-Prince",
    lat: 18.9712,
    lng: -72.2852,
    flag: "🇭🇹",
    cities: [
      { name: "Port-au-Prince", timezone: "America/Port-au-Prince", lat: 18.5392, lng: -72.3350 },
      { name: "Cap-Haïtien", timezone: "America/Port-au-Prince", lat: 19.7242, lng: -72.2090 },
      { name: "Les Cayes", timezone: "America/Port-au-Prince", lat: 18.2167, lng: -73.7833 }
    ]
  },
  {
    label: "Honduras",
    value: "America/Tegucigalpa",
    lat: 15.1994,
    lng: -86.2419,
    flag: "🇭🇳",
    cities: [
      { name: "Tegucigalpa", timezone: "America/Tegucigalpa", lat: 14.0833, lng: -87.1833 },
      { name: "San Pedro Sula", timezone: "America/Tegucigalpa", lat: 15.5000, lng: -88.0167 },
      { name: "La Ceiba", timezone: "America/Tegucigalpa", lat: 15.7833, lng: -86.7833 }
    ]
  },
  {
    label: "Hungary",
    value: "Europe/Budapest",
    lat: 47.1625,
    lng: 19.5033,
    flag: "🇭🇺",
    cities: [
      { name: "Budapest", timezone: "Europe/Budapest", lat: 47.4979, lng: 19.0402 },
      { name: "Debrecen", timezone: "Europe/Budapest", lat: 47.5316, lng: 21.6273 },
      { name: "Szeged", timezone: "Europe/Budapest", lat: 46.2530, lng: 20.1411 }
    ]
  },
  {
    label: "Iceland",
    value: "Atlantic/Reykjavik",
    lat: 64.9631,
    lng: -19.0208,
    flag: "🇮🇸",
    cities: [
      { name: "Reykjavik", timezone: "Atlantic/Reykjavik", lat: 64.1466, lng: -21.9426 },
      { name: "Kópavogur", timezone: "Atlantic/Reykjavik", lat: 64.1000, lng: -21.9167 },
      { name: "Hafnarfjörður", timezone: "Atlantic/Reykjavik", lat: 64.0833, lng: -21.8833 }
    ]
  },
  {
    label: "India",
    value: "Asia/Kolkata",
    lat: 20.5937,
    lng: 78.9629,
    flag: "🇮🇳",
    cities: [
      { name: "Mumbai", timezone: "Asia/Kolkata", lat: 19.0760, lng: 72.8777 },
      { name: "Delhi", timezone: "Asia/Kolkata", lat: 28.7041, lng: 77.1025 },
      { name: "Bangalore", timezone: "Asia/Kolkata", lat: 12.9716, lng: 77.5946 }
    ]
  },
  {
    label: "Indonesia",
    value: "Asia/Jakarta",
    lat: -0.7893,
    lng: 113.9213,
    flag: "🇮🇩",
    cities: [
      { name: "Jakarta", timezone: "Asia/Jakarta", lat: -6.2088, lng: 106.8456 },
      { name: "Surabaya", timezone: "Asia/Jakarta", lat: -7.2575, lng: 112.7521 },
      { name: "Bandung", timezone: "Asia/Jakarta", lat: -6.9167, lng: 107.6000 }
    ]
  },
  {
    label: "Iran",
    value: "Asia/Tehran",
    lat: 32.4279,
    lng: 53.6880,
    flag: "🇮🇷",
    cities: [
      { name: "Tehran", timezone: "Asia/Tehran", lat: 35.6892, lng: 51.3890 },
      { name: "Mashhad", timezone: "Asia/Tehran", lat: 36.2667, lng: 59.6167 },
      { name: "Isfahan", timezone: "Asia/Tehran", lat: 32.6667, lng: 51.6667 }
    ]
  },
  {
    label: "Iraq",
    value: "Asia/Baghdad",
    lat: 33.2232,
    lng: 43.6793,
    flag: "🇮🇶",
    cities: [
      { name: "Baghdad", timezone: "Asia/Baghdad", lat: 33.3152, lng: 44.3661 },
      { name: "Basra", timezone: "Asia/Baghdad", lat: 30.5167, lng: 47.7833 },
      { name: "Mosul", timezone: "Asia/Baghdad", lat: 36.3333, lng: 43.1333 }
    ]
  },
  {
    label: "Ireland",
    value: "Europe/Dublin",
    lat: 53.4129,
    lng: -8.2439,
    flag: "🇮🇪",
    cities: [
      { name: "Dublin", timezone: "Europe/Dublin", lat: 53.3498, lng: -6.2603 },
      { name: "Cork", timezone: "Europe/Dublin", lat: 51.8969, lng: -8.4863 },
      { name: "Galway", timezone: "Europe/Dublin", lat: 53.2707, lng: -9.0568 }
    ]
  },
  {
    label: "Israel",
    value: "Asia/Jerusalem",
    lat: 31.0461,
    lng: 34.8516,
    flag: "🇮🇱",
    cities: [
      { name: "Jerusalem", timezone: "Asia/Jerusalem", lat: 31.7683, lng: 35.2137 },
      { name: "Tel Aviv", timezone: "Asia/Jerusalem", lat: 32.0853, lng: 34.7818 },
      { name: "Haifa", timezone: "Asia/Jerusalem", lat: 32.7940, lng: 34.9896 }
    ]
  },
  {
    label: "Italy",
    value: "Europe/Rome",
    lat: 41.8719,
    lng: 12.5674,
    flag: "🇮🇹",
    cities: [
      { name: "Rome", timezone: "Europe/Rome", lat: 41.9028, lng: 12.4964 },
      { name: "Milan", timezone: "Europe/Rome", lat: 45.4642, lng: 9.1900 },
      { name: "Naples", timezone: "Europe/Rome", lat: 40.8518, lng: 14.2681 }
    ]
  },
  {
    label: "Jamaica",
    value: "America/Jamaica",
    lat: 18.1096,
    lng: -77.2975,
    flag: "🇯🇲",
    cities: [
      { name: "Kingston", timezone: "America/Jamaica", lat: 18.0000, lng: -76.8000 },
      { name: "Montego Bay", timezone: "America/Jamaica", lat: 18.4667, lng: -77.9000 },
      { name: "Spanish Town", timezone: "America/Jamaica", lat: 18.0000, lng: -76.9500 }
    ]
  },
  {
    label: "Japan",
    value: "Asia/Tokyo",
    lat: 36.2048,
    lng: 138.2529,
    flag: "🇯🇵",
    cities: [
      { name: "Tokyo", timezone: "Asia/Tokyo", lat: 35.6762, lng: 139.6503 },
      { name: "Osaka", timezone: "Asia/Tokyo", lat: 34.6937, lng: 135.5023 },
      { name: "Kyoto", timezone: "Asia/Tokyo", lat: 35.0116, lng: 135.7681 }
    ]
  },
  {
    label: "Jordan",
    value: "Asia/Amman",
    lat: 30.5852,
    lng: 36.2384,
    flag: "🇯🇴",
    cities: [
      { name: "Amman", timezone: "Asia/Amman", lat: 31.9539, lng: 35.9106 },
      { name: "Zarqa", timezone: "Asia/Amman", lat: 32.0500, lng: 36.0833 },
      { name: "Irbid", timezone: "Asia/Amman", lat: 32.5500, lng: 35.8500 }
    ]
  },
  {
    label: "Kazakhstan",
    value: "Asia/Almaty",
    lat: 48.0196,
    lng: 66.9237,
    flag: "🇰🇿",
    cities: [
      { name: "Almaty", timezone: "Asia/Almaty", lat: 43.2389, lng: 76.8667 },
      { name: "Nur-Sultan", timezone: "Asia/Almaty", lat: 51.1667, lng: 71.4167 },
      { name: "Shymkent", timezone: "Asia/Almaty", lat: 42.8000, lng: 69.1500 }
    ]
  },
  {
    label: "Kenya",
    value: "Africa/Nairobi",
    lat: 1.2921,
    lng: 36.8219,
    flag: "🇰🇪",
    cities: [
      { name: "Nairobi", timezone: "Africa/Nairobi", lat: -1.2864, lng: 36.8172 },
      { name: "Mombasa", timezone: "Africa/Nairobi", lat: -4.0500, lng: 39.6667 },
      { name: "Kisumu", timezone: "Africa/Nairobi", lat: -0.1000, lng: 34.7500 }
    ]
  },
  {
    label: "Kiribati",
    value: "Pacific/Tarawa",
    lat: -3.3705,
    lng: -168.7340,
    flag: "🇰🇮",
    cities: [
      { name: "South Tarawa", timezone: "Pacific/Tarawa", lat: 1.3333, lng: 173.0000 },
      { name: "Bairiki", timezone: "Pacific/Tarawa", lat: 1.3500, lng: 173.0000 },
      { name: "Betio", timezone: "Pacific/Tarawa", lat: 1.3333, lng: 172.9667 }
    ]
  },
  {
    label: "Kosovo",
    value: "Europe/Belgrade",
    lat: 42.6026,
    lng: 20.9030,
    flag: "🇽🇰",
    cities: [
      { name: "Pristina", timezone: "Europe/Belgrade", lat: 42.6629, lng: 21.1655 },
      { name: "Prizren", timezone: "Europe/Belgrade", lat: 42.2167, lng: 20.7333 },
      { name: "Peja", timezone: "Europe/Belgrade", lat: 42.6500, lng: 20.2833 }
    ]
  },
  {
    label: "Kuwait",
    value: "Asia/Kuwait",
    lat: 29.3759,
    lng: 47.9774,
    flag: "🇰🇼",
    cities: [
      { name: "Kuwait City", timezone: "Asia/Kuwait", lat: 29.3755, lng: 48.0000 },
      { name: "Ahmadi", timezone: "Asia/Kuwait", lat: 29.1000, lng: 48.0000 },
      { name: "Hawalli", timezone: "Asia/Kuwait", lat: 29.3000, lng: 48.0000 }
    ]
  },
  {
    label: "Kyrgyzstan",
    value: "Asia/Bishkek",
    lat: 41.2044,
    lng: 74.7661,
    flag: "🇰🇬",
    cities: [
      { name: "Bishkek", timezone: "Asia/Bishkek", lat: 42.8746, lng: 74.5698 },
      { name: "Osh", timezone: "Asia/Bishkek", lat: 40.5200, lng: 72.8000 },
      { name: "Jalal-Abad", timezone: "Asia/Bishkek", lat: 40.9000, lng: 73.6000 }
    ]
  },
  {
    label: "Laos",
    value: "Asia/Vientiane",
    lat: 19.8563,
    lng: 102.4955,
    flag: "🇱🇦",
    cities: [
      { name: "Vientiane", timezone: "Asia/Vientiane", lat: 17.9667, lng: 102.6000 },
      { name: "Savannakhet", timezone: "Asia/Vientiane", lat: 16.5500, lng: 104.7833 },
      { name: "Pakse", timezone: "Asia/Vientiane", lat: 15.1167, lng: 105.7833 }
    ]
  },
  {
    label: "Latvia",
    value: "Europe/Riga",
    lat: 56.8796,
    lng: 24.6032,
    flag: "🇱🇻",
    cities: [
      { name: "Riga", timezone: "Europe/Riga", lat: 56.9496, lng: 24.1052 },
      { name: "Daugavpils", timezone: "Europe/Riga", lat: 55.8700, lng: 26.5500 },
      { name: "Liepāja", timezone: "Europe/Riga", lat: 56.5000, lng: 21.0000 }
    ]
  },
  {
    label: "Lebanon",
    value: "Asia/Beirut",
    lat: 33.8547,
    lng: 35.8623,
    flag: "🇱🇧",
    cities: [
      { name: "Beirut", timezone: "Asia/Beirut", lat: 33.8938, lng: 35.5018 },
      { name: "Tripoli", timezone: "Asia/Beirut", lat: 34.4333, lng: 35.8500 },
      { name: "Sidon", timezone: "Asia/Beirut", lat: 33.5667, lng: 35.3667 }
    ]
  },
  {
    label: "Lesotho",
    value: "Africa/Maseru",
    lat: -29.6099,
    lng: 28.2336,
    flag: "🇱🇸",
    cities: [
      { name: "Maseru", timezone: "Africa/Maseru", lat: -29.3167, lng: 27.4833 },
      { name: "Teyateyaneng", timezone: "Africa/Maseru", lat: -29.3000, lng: 27.7500 },
      { name: "Mohale's Hoek", timezone: "Africa/Maseru", lat: -30.1833, lng: 27.4667 }
    ]
  },
  {
    label: "Liberia",
    value: "Africa/Monrovia",
    lat: 6.4281,
    lng: -9.4295,
    flag: "🇱🇷",
    cities: [
      { name: "Monrovia", timezone: "Africa/Monrovia", lat: 6.3000, lng: -10.8000 },
      { name: "Gbarnga", timezone: "Africa/Monrovia", lat: 7.4833, lng: -10.5167 },
      { name: "Kakata", timezone: "Africa/Monrovia", lat: 6.9833, lng: -10.3500 }
    ]
  },
  {
    label: "Libya",
    value: "Africa/Tripoli",
    lat: 26.3351,
    lng: 17.2283,
    flag: "🇱🇾",
    cities: [
      { name: "Tripoli", timezone: "Africa/Tripoli", lat: 32.8872, lng: 13.1913 },
      { name: "Benghazi", timezone: "Africa/Tripoli", lat: 32.1167, lng: 20.0667 },
      { name: "Misrata", timezone: "Africa/Tripoli", lat: 32.3778, lng: 15.0928 }
    ]
  },
  {
    label: "Liechtenstein",
    value: "Europe/Vaduz",
    lat: 47.1667,
    lng: 9.5554,
    flag: "🇱🇮",
    cities: [
      { name: "Vaduz", timezone: "Europe/Vaduz", lat: 47.1333, lng: 9.5167 },
      { name: "Schaan", timezone: "Europe/Vaduz", lat: 47.2500, lng: 9.5167 },
      { name: "Triesen", timezone: "Europe/Vaduz", lat: 47.1833, lng: 9.5333 }
    ]
  },
  {
    label: "Lithuania",
    value: "Europe/Vilnius",
    lat: 55.1694,
    lng: 23.8813,
    flag: "🇱🇹",
    cities: [
      { name: "Vilnius", timezone: "Europe/Vilnius", lat: 54.6896, lng: 25.2799 },
      { name: "Kaunas", timezone: "Europe/Vilnius", lat: 54.8966, lng: 23.9081 },
      { name: "Klaipėda", timezone: "Europe/Vilnius", lat: 55.7083, lng: 21.1167 }
    ]
  },
  {
    label: "Luxembourg",
    value: "Europe/Luxembourg",
    lat: 49.8153,
    lng: 6.1296,
    flag: "🇱🇺",
    cities: [
      { name: "Luxembourg City", timezone: "Europe/Luxembourg", lat: 49.6116, lng: 6.1319 },
      { name: "Esch-sur-Alzette", timezone: "Europe/Luxembourg", lat: 49.5000, lng: 5.9667 },
      { name: "Differdange", timezone: "Europe/Luxembourg", lat: 49.5167, lng: 5.8667 }
    ]
  },
  {
    label: "Madagascar",
    value: "Indian/Antananarivo",
    lat: -18.7669,
    lng: 46.8691,
    flag: "🇲🇬",
    cities: [
      { name: "Antananarivo", timezone: "Indian/Antananarivo", lat: -18.9167, lng: 47.5167 },
      { name: "Toamasina", timezone: "Indian/Antananarivo", lat: -18.1333, lng: 49.6000 },
      { name: "Antsirabe", timezone: "Indian/Antananarivo", lat: -19.8500, lng: 47.0500 }
    ]
  },
  {
    label: "Malawi",
    value: "Africa/Blantyre",
    lat: -13.2543,
    lng: 34.3015,
    flag: "🇲🇼",
    cities: [
      { name: "Lilongwe", timezone: "Africa/Blantyre", lat: -13.9667, lng: 33.7833 },
      { name: "Blantyre", timezone: "Africa/Blantyre", lat: -15.7833, lng: 35.0000 },
      { name: "Mzuzu", timezone: "Africa/Blantyre", lat: -11.5167, lng: 34.0000 }
    ]
  },
  {
    label: "Malaysia",
    value: "Asia/Kuala_Lumpur",
    lat: 4.2105,
    lng: 101.9758,
    flag: "🇲🇾",
    cities: [
      { name: "Kuala Lumpur", timezone: "Asia/Kuala_Lumpur", lat: 3.1390, lng: 101.6869 },
      { name: "George Town", timezone: "Asia/Kuala_Lumpur", lat: 5.4167, lng: 100.3333 },
      { name: "Ipoh", timezone: "Asia/Kuala_Lumpur", lat: 4.5967, lng: 101.0833 }
    ]
  },
  {
    label: "Maldives",
    value: "Indian/Maldives",
    lat: 3.2028,
    lng: 73.2207,
    flag: "🇲🇻",
    cities: [
      { name: "Malé", timezone: "Indian/Maldives", lat: 4.1750, lng: 73.5092 },
      { name: "Addu City", timezone: "Indian/Maldives", lat: -0.6833, lng: 73.1667 },
      { name: "Hithadhoo", timezone: "Indian/Maldives", lat: -0.7000, lng: 73.1833 }
    ]
  },
  {
    label: "Mali",
    value: "Africa/Bamako",
    lat: 17.5707,
    lng: -3.9962,
    flag: "🇲🇱",
    cities: [
      { name: "Bamako", timezone: "Africa/Bamako", lat: 12.6392, lng: -8.0029 },
      { name: "Ségou", timezone: "Africa/Bamako", lat: 13.4167, lng: -6.2167 },
      { name: "Mopti", timezone: "Africa/Bamako", lat: 14.4333, lng: -4.2167 }
    ]
  },
  {
    label: "Malta",
    value: "Europe/Malta",
    lat: 35.9375,
    lng: 14.3754,
    flag: "🇲🇹",
    cities: [
      { name: "Valletta", timezone: "Europe/Malta", lat: 35.8989, lng: 14.5146 },
      { name: "Birkirkara", timezone: "Europe/Malta", lat: 35.8833, lng: 14.4833 },
      { name: "Qormi", timezone: "Europe/Malta", lat: 35.8667, lng: 14.4667 }
    ]
  },
  {
    label: "Marshall Islands",
    value: "Pacific/Majuro",
    lat: 7.1315,
    lng: 171.1845,
    flag: "🇲🇭",
    cities: [
      { name: "Majuro", timezone: "Pacific/Majuro", lat: 7.1000, lng: 171.3833 },
      { name: "Ebeye", timezone: "Pacific/Kwajalein", lat: 9.0333, lng: 167.7333 },
      { name: "Wotje", timezone: "Pacific/Kwajalein", lat: 8.6167, lng: 168.1167 }
    ]
  },
  {
    label: "Mauritania",
    value: "Africa/Nouakchott",
    lat: 21.0079,
    lng: -10.9408,
    flag: "🇲🇷",
    cities: [
      { name: "Nouakchott", timezone: "Africa/Nouakchott", lat: 18.0833, lng: -15.9667 },
      { name: "Nouadhibou", timezone: "Africa/Nouakchott", lat: 20.9333, lng: -17.0333 },
      { name: "Kiffa", timezone: "Africa/Nouakchott", lat: 16.6333, lng: -13.5500 }
    ]
  },
  {
    label: "Mauritius",
    value: "Indian/Mauritius",
    lat: -20.3484,
    lng: 57.5522,
    flag: "🇲🇺",
    cities: [
      { name: "Port Louis", timezone: "Indian/Mauritius", lat: -20.1617, lng: 57.4977 },
      { name: "Beau Bassin-Rose Hill", timezone: "Indian/Mauritius", lat: -20.2833, lng: 57.4833 },
      { name: "Vacoas-Phoenix", timezone: "Indian/Mauritius", lat: -20.2667, lng: 57.4833 }
    ]
  },
  {
    label: "Mexico",
    value: "America/Mexico_City",
    lat: 23.6345,
    lng: -102.5528,
    flag: "🇲🇽",
    cities: [
      { name: "Mexico City", timezone: "America/Mexico_City", lat: 19.4326, lng: -99.1332 },
      { name: "Guadalajara", timezone: "America/Mexico_City", lat: 20.6667, lng: -103.3333 },
      { name: "Monterrey", timezone: "America/Monterrey", lat: 25.6667, lng: -100.3333 }
    ]
  },
  {
    label: "Micronesia",
    value: "Pacific/Chuuk",
    lat: 7.4256,
    lng: 150.5508,
    flag: "🇫🇲",
    cities: [
      { name: "Palikir", timezone: "Pacific/Chuuk", lat: 6.9167, lng: 158.1500 },
      { name: "Kolonia", timezone: "Pacific/Chuuk", lat: 6.9500, lng: 158.2000 },
      { name: "Weno", timezone: "Pacific/Chuuk", lat: 7.4333, lng: 151.8000 }
    ]
  },
  {
    label: "Moldova",
    value: "Europe/Chisinau",
    lat: 47.4116,
    lng: 28.3699,
    flag: "🇲🇩",
    cities: [
      { name: "Chișinău", timezone: "Europe/Chisinau", lat: 47.0000, lng: 28.8333 },
      { name: "Tiraspol", timezone: "Europe/Chisinau", lat: 46.8333, lng: 29.6333 },
      { name: "Bălți", timezone: "Europe/Chisinau", lat: 47.7833, lng: 27.9333 }
    ]
  },
  {
    label: "Monaco",
    value: "Europe/Monaco",
    lat: 43.7500,
    lng: 7.6167,
    flag: "🇲🇨",
    cities: [
      { name: "Monaco", timezone: "Europe/Monaco", lat: 43.7333, lng: 7.4167 },
      { name: "Monte Carlo", timezone: "Europe/Monaco", lat: 43.7500, lng: 7.4167 },
      { name: "Fontvieille", timezone: "Europe/Monaco", lat: 43.7333, lng: 7.4333 }
    ]
  },
  {
    label: "Mongolia",
    value: "Asia/Ulaanbaatar",
    lat: 46.8625,
    lng: 103.8467,
    flag: "🇲🇳",
    cities: [
      { name: "Ulaanbaatar", timezone: "Asia/Ulaanbaatar", lat: 47.9167, lng: 106.8833 },
      { name: "Erdenet", timezone: "Asia/Ulaanbaatar", lat: 49.0000, lng: 104.0000 },
      { name: "Darkhan", timezone: "Asia/Ulaanbaatar", lat: 49.6000, lng: 105.6000 }
    ]
  },
  {
    label: "Montenegro",
    value: "Europe/Podgorica",
    lat: 42.7087,
    lng: 19.3744,
    flag: "🇲🇪",
    cities: [
      { name: "Podgorica", timezone: "Europe/Podgorica", lat: 42.4667, lng: 19.2667 },
      { name: "Nikšić", timezone: "Europe/Podgorica", lat: 42.7833, lng: 18.9500 },
      { name: "Pljevlja", timezone: "Europe/Podgorica", lat: 43.1833, lng: 19.3333 }
    ]
  },
  {
    label: "Morocco",
    value: "Africa/Casablanca",
    lat: 31.7917,
    lng: -7.0926,
    flag: "🇲🇦",
    cities: [
      { name: "Casablanca", timezone: "Africa/Casablanca", lat: 33.5809, lng: -7.6009 },
      { name: "Rabat", timezone: "Africa/Casablanca", lat: 34.0209, lng: -6.8416 },
      { name: "Marrakesh", timezone: "Africa/Casablanca", lat: 31.6342, lng: -7.9999 }
    ]
  },
  {
    label: "Mozambique",
    value: "Africa/Maputo",
    lat: -18.6657,
    lng: 35.5296,
    flag: "🇲🇿",
    cities: [
      { name: "Maputo", timezone: "Africa/Maputo", lat: -25.9667, lng: 32.5833 },
      { name: "Beira", timezone: "Africa/Maputo", lat: -19.8333, lng: 34.8333 },
      { name: "Nampula", timezone: "Africa/Maputo", lat: -15.1167, lng: 39.2833 }
    ]
  },
  {
    label: "Myanmar",
    value: "Asia/Yangon",
    lat: 21.9162,
    lng: 95.9560,
    flag: "🇲🇲",
    cities: [
      { name: "Yangon", timezone: "Asia/Yangon", lat: 16.8000, lng: 96.1667 },
      { name: "Mandalay", timezone: "Asia/Yangon", lat: 21.9833, lng: 96.0833 },
      { name: "Naypyidaw", timezone: "Asia/Yangon", lat: 19.7633, lng: 96.1750 }
    ]
  },
  {
    label: "Namibia",
    value: "Africa/Windhoek",
    lat: -22.9576,
    lng: 18.4904,
    flag: "🇳🇦",
    cities: [
      { name: "Windhoek", timezone: "Africa/Windhoek", lat: -22.5760, lng: 17.0833 },
      { name: "Walvis Bay", timezone: "Africa/Windhoek", lat: -22.9581, lng: 14.5028 },
      { name: "Rundu", timezone: "Africa/Windhoek", lat: -17.9167, lng: 19.7833 }
    ]
  },
  {
    label: "Nauru",
    value: "Pacific/Nauru",
    lat: -0.5228,
    lng: 166.9315,
    flag: "🇳🇷",
    cities: [
      { name: "Yaren", timezone: "Pacific/Nauru", lat: -0.5233, lng: 166.9333 },
      { name: "Aiwo", timezone: "Pacific/Nauru", lat: -0.5167, lng: 166.9167 },
      { name: "Anetan", timezone: "Pacific/Nauru", lat: -0.5333, lng: 166.9500 }
    ]
  },
  {
    label: "Nepal",
    value: "Asia/Kathmandu",
    lat: 28.3949,
    lng: 84.1240,
    flag: "🇳🇵",
    cities: [
      { name: "Kathmandu", timezone: "Asia/Kathmandu", lat: 27.7172, lng: 85.3240 },
      { name: "Pokhara", timezone: "Asia/Kathmandu", lat: 28.2000, lng: 83.9833 },
      { name: "Biratnagar", timezone: "Asia/Kathmandu", lat: 26.4500, lng: 87.2833 }
    ]
  },
  {
    label: "Netherlands",
    value: "Europe/Amsterdam",
    lat: 52.1326,
    lng: 5.2913,
    flag: "🇳🇱",
    cities: [
      { name: "Amsterdam", timezone: "Europe/Amsterdam", lat: 52.3667, lng: 4.8833 },
      { name: "Rotterdam", timezone: "Europe/Amsterdam", lat: 51.9244, lng: 4.4778 },
      { name: "The Hague", timezone: "Europe/Amsterdam", lat: 52.0833, lng: 4.3000 }
    ]
  },
  {
    label: "New Zealand",
    value: "Pacific/Auckland",
    lat: -40.9006,
    lng: 174.8860,
    flag: "🇳🇿",
    cities: [
      { name: "Auckland", timezone: "Pacific/Auckland", lat: -36.8485, lng: 174.7633 },
      { name: "Wellington", timezone: "Pacific/Auckland", lat: -41.2865, lng: 174.7762 },
      { name: "Christchurch", timezone: "Pacific/Auckland", lat: -43.5321, lng: 172.6362 }
    ]
  },
  {
    label: "Nicaragua",
    value: "America/Managua",
    lat: 12.8654,
    lng: -85.2072,
    flag: "🇳🇮",
    cities: [
      { name: "Managua", timezone: "America/Managua", lat: 12.1500, lng: -86.2500 },
      { name: "León", timezone: "America/Managua", lat: 12.4333, lng: -86.8833 },
      { name: "Granada", timezone: "America/Managua", lat: 11.9333, lng: -85.9500 }
    ]
  },
  {
    label: "Niger",
    value: "Africa/Niamey",
    lat: 17.6078,
    lng: 8.0817,
    flag: "🇳🇪",
    cities: [
      { name: "Niamey", timezone: "Africa/Niamey", lat: 13.5167, lng: 2.1167 },
      { name: "Zinder", timezone: "Africa/Niamey", lat: 13.8000, lng: 8.9833 },
      { name: "Agadez", timezone: "Africa/Niamey", lat: 16.9667, lng: 7.9833 }
    ]
  },
  {
    label: "Nigeria",
    value: "Africa/Lagos",
    lat: 9.0820,
    lng: 8.6753,
    flag: "🇳🇬",
    cities: [
      { name: "Lagos", timezone: "Africa/Lagos", lat: 6.5244, lng: 3.3792 },
      { name: "Abuja", timezone: "Africa/Lagos", lat: 9.0579, lng: 7.4951 },
      { name: "Kano", timezone: "Africa/Lagos", lat: 12.0000, lng: 8.5167 }
    ]
  },
  {
    label: "North Korea",
    value: "Asia/Pyongyang",
    lat: 40.3399,
    lng: 127.5101,
    flag: "🇰🇵",
    cities: [
      { name: "Pyongyang", timezone: "Asia/Pyongyang", lat: 39.0194, lng: 125.7500 },
      { name: "Hamhung", timezone: "Asia/Pyongyang", lat: 39.5333, lng: 127.6333 },
      { name: "Nampo", timezone: "Asia/Pyongyang", lat: 38.7167, lng: 125.4167 }
    ]
  },
  {
    label: "North Macedonia",
    value: "Europe/Skopje",
    lat: 41.6086,
    lng: 21.7453,
    flag: "🇲🇰",
    cities: [
      { name: "Skopje", timezone: "Europe/Skopje", lat: 41.9974, lng: 21.4314 },
      { name: "Bitola", timezone: "Europe/Skopje", lat: 41.0333, lng: 21.3333 },
      { name: "Kumanovo", timezone: "Europe/Skopje", lat: 42.1333, lng: 21.7167 }
    ]
  },
  {
    label: "Norway",
    value: "Europe/Oslo",
    lat: 60.4720,
    lng: 8.4689,
    flag: "🇳🇴",
    cities: [
      { name: "Oslo", timezone: "Europe/Oslo", lat: 59.9139, lng: 10.7522 },
      { name: "Bergen", timezone: "Europe/Oslo", lat: 60.3913, lng: 5.3221 },
      { name: "Trondheim", timezone: "Europe/Oslo", lat: 63.4305, lng: 10.3951 }
    ]
  },
  {
    label: "Oman",
    value: "Asia/Muscat",
    lat: 21.5126,
    lng: 55.9233,
    flag: "🇴🇲",
    cities: [
      { name: "Muscat", timezone: "Asia/Muscat", lat: 23.5856, lng: 58.4055 },
      { name: "Salalah", timezone: "Asia/Muscat", lat: 17.0000, lng: 54.0833 },
      { name: "Sohar", timezone: "Asia/Muscat", lat: 24.3833, lng: 56.8167 }
    ]
  },
  {
    label: "Pakistan",
    value: "Asia/Karachi",
    lat: 30.3753,
    lng: 69.3451,
    flag: "🇵🇰",
    cities: [
      { name: "Karachi", timezone: "Asia/Karachi", lat: 24.8607, lng: 67.0011 },
      { name: "Lahore", timezone: "Asia/Karachi", lat: 31.5204, lng: 74.3587 },
      { name: "Islamabad", timezone: "Asia/Karachi", lat: 33.7294, lng: 73.0931 }
    ]
  },
  {
    label: "Palau",
    value: "Pacific/Palau",
    lat: 7.5150,
    lng: 134.5825,
    flag: "🇵🇼",
    cities: [
      { name: "Ngerulmud", timezone: "Pacific/Palau", lat: 7.5000, lng: 134.6214 },
      { name: "Koror", timezone: "Pacific/Palau", lat: 7.3333, lng: 134.4833 },
      { name: "Melekeok", timezone: "Pacific/Palau", lat: 7.5000, lng: 134.6167 }
    ]
  },
  {
    label: "Palestine",
    value: "Asia/Gaza",
    lat: 31.9522,
    lng: 35.2332,
    flag: "🇵🇸",
    cities: [
      { name: "Gaza", timezone: "Asia/Gaza", lat: 31.5000, lng: 34.4667 },
      { name: "Ramallah", timezone: "Asia/Gaza", lat: 31.9000, lng: 35.2000 },
      { name: "Hebron", timezone: "Asia/Gaza", lat: 31.5333, lng: 35.0917 }
    ]
  },
  {
    label: "Panama",
    value: "America/Panama",
    lat: 8.5380,
    lng: -80.7821,
    flag: "🇵🇦",
    cities: [
      { name: "Panama City", timezone: "America/Panama", lat: 8.9875, lng: -79.5308 },
      { name: "David", timezone: "America/Panama", lat: 8.4167, lng: -82.4167 },
      { name: "Colon", timezone: "America/Panama", lat: 9.3500, lng: -79.8833 }
    ]
  },
  {
    label: "Papua New Guinea",
    value: "Pacific/Port_Moresby",
    lat: -6.3150,
    lng: 143.9555,
    flag: "🇵🇬",
    cities: [
      { name: "Port Moresby", timezone: "Pacific/Port_Moresby", lat: -9.4438, lng: 147.1803 },
      { name: "Lae", timezone: "Pacific/Port_Moresby", lat: -6.6667, lng: 146.9833 },
      { name: "Mount Hagen", timezone: "Pacific/Port_Moresby", lat: -5.8333, lng: 144.2833 }
    ]
  },
  {
    label: "Paraguay",
    value: "America/Asuncion",
    lat: -23.3158,
    lng: -58.0186,
    flag: "🇵🇾",
    cities: [
      { name: "Asunción", timezone: "America/Asuncion", lat: -25.2637, lng: -57.6652 },
      { name: "Ciudad del Este", timezone: "America/Asuncion", lat: -25.5000, lng: -54.6167 },
      { name: "Luque", timezone: "America/Asuncion", lat: -25.3000, lng: -57.4833 }
    ]
  },
  {
    label: "Peru",
    value: "America/Lima",
    lat: -9.1900,
    lng: -75.0152,
    flag: "🇵🇪",
    cities: [
      { name: "Lima", timezone: "America/Lima", lat: -12.0464, lng: -77.0428 },
      { name: "Arequipa", timezone: "America/Lima", lat: -16.4000, lng: -71.5333 },
      { name: "Trujillo", timezone: "America/Lima", lat: -8.1000, lng: -79.0167 }
    ]
  },
  {
    label: "Philippines",
    value: "Asia/Manila",
    lat: 12.8797,
    lng: 121.7740,
    flag: "🇵🇭",
    cities: [
      { name: "Manila", timezone: "Asia/Manila", lat: 14.5995, lng: 120.9842 },
      { name: "Quezon City", timezone: "Asia/Manila", lat: 14.6500, lng: 121.0500 },
      { name: "Davao", timezone: "Asia/Manila", lat: 7.1667, lng: 125.6000 }
    ]
  },
  {
    label: "Poland",
    value: "Europe/Warsaw",
    lat: 51.9194,
    lng: 19.1451,
    flag: "🇵🇱",
    cities: [
      { name: "Warsaw", timezone: "Europe/Warsaw", lat: 52.2297, lng: 21.0122 },
      { name: "Kraków", timezone: "Europe/Warsaw", lat: 50.0647, lng: 19.9450 },
      { name: "Łódź", timezone: "Europe/Warsaw", lat: 51.7592, lng: 19.4560 }
    ]
  },
  {
    label: "Portugal",
    value: "Europe/Lisbon",
    lat: 39.3999,
    lng: -8.2245,
    flag: "🇵🇹",
    cities: [
      { name: "Lisbon", timezone: "Europe/Lisbon", lat: 38.7223, lng: -9.1393 },
      { name: "Porto", timezone: "Europe/Lisbon", lat: 41.1579, lng: -8.6291 },
      { name: "Faro", timezone: "Europe/Lisbon", lat: 37.0167, lng: -7.9333 }
    ]
  },
  {
    label: "Qatar",
    value: "Asia/Qatar",
    lat: 25.3548,
    lng: 51.1839,
    flag: "🇶🇦",
    cities: [
      { name: "Doha", timezone: "Asia/Qatar", lat: 25.2767, lng: 51.5232 },
      { name: "Al Rayyan", timezone: "Asia/Qatar", lat: 25.3000, lng: 51.4000 },
      { name: "Umm Salal", timezone: "Asia/Qatar", lat: 25.5000, lng: 51.3333 }
    ]
  },
  {
    label: "Romania",
    value: "Europe/Bucharest",
    lat: 45.9432,
    lng: 24.9668,
    flag: "🇷🇴",
    cities: [
      { name: "Bucharest", timezone: "Europe/Bucharest", lat: 44.4268, lng: 26.1025 },
      { name: "Cluj-Napoca", timezone: "Europe/Bucharest", lat: 46.7712, lng: 23.6236 },
      { name: "Timișoara", timezone: "Europe/Bucharest", lat: 45.7489, lng: 21.2310 }
    ]
  },
  {
    label: "Russia",
    value: "Europe/Moscow",
    lat: 61.5240,
    lng: 105.3188,
    flag: "🇷🇺",
    cities: [
      { name: "Moscow", timezone: "Europe/Moscow", lat: 55.7558, lng: 37.6173 },
      { name: "Saint Petersburg", timezone: "Europe/Moscow", lat: 59.9343, lng: 30.3351 },
      { name: "Novosibirsk", timezone: "Asia/Novosibirsk", lat: 55.0415, lng: 82.9346 }
    ]
  },
  {
    label: "Rwanda",
    value: "Africa/Kigali",
    lat: -1.9403,
    lng: 29.8739,
    flag: "🇷🇼",
    cities: [
      { name: "Kigali", timezone: "Africa/Kigali", lat: -1.9403, lng: 30.0588 },
      { name: "Butare", timezone: "Africa/Kigali", lat: -2.6000, lng: 29.7333 },
      { name: "Gitarama", timezone: "Africa/Kigali", lat: -2.0000, lng: 29.8000 }
    ]
  },
  {
    label: "Saint Kitts and Nevis",
    value: "America/St_Kitts",
    lat: 17.3578,
    lng: -62.7830,
    flag: "🇰🇳",
    cities: [
      { name: "Basseterre", timezone: "America/St_Kitts", lat: 17.3000, lng: -62.7167 },
      { name: "Cayon", timezone: "America/St_Kitts", lat: 17.3500, lng: -62.7833 },
      { name: "Sandy Point", timezone: "America/St_Kitts", lat: 17.2167, lng: -62.6833 }
    ]
  },
  {
    label: "Saint Lucia",
    value: "America/St_Lucia",
    lat: 13.9094,
    lng: -60.9789,
    flag: "🇱🇨",
    cities: [
      { name: "Castries", timezone: "America/St_Lucia", lat: 14.0100, lng: -60.9900 },
      { name: "Soufrière", timezone: "America/St_Lucia", lat: 13.8167, lng: -61.0833 },
      { name: "Vieux Fort", timezone: "America/St_Lucia", lat: 13.7167, lng: -60.9500 }
    ]
  },
  {
    label: "Saint Vincent and the Grenadines",
    value: "America/St_Vincent",
    lat: 12.9843,
    lng: -61.2872,
    flag: "🇻🇨",
    cities: [
      { name: "Kingstown", timezone: "America/St_Vincent", lat: 13.1667, lng: -61.2167 },
      { name: "Georgetown", timezone: "America/St_Vincent", lat: 13.2167, lng: -61.1667 },
      { name: "Barrouallie", timezone: "America/St_Vincent", lat: 13.1833, lng: -61.2500 }
    ]
  },
  {
    label: "Samoa",
    value: "Pacific/Apia",
    lat: -13.7590,
    lng: -172.1046,
    flag: "🇼🇸",
    cities: [
      { name: "Apia", timezone: "Pacific/Apia", lat: -13.8333, lng: -171.7833 },
      { name: "Asau", timezone: "Pacific/Apia", lat: -13.7333, lng: -172.8833 },
      { name: "Salelologa", timezone: "Pacific/Apia", lat: -13.5333, lng: -172.3333 }
    ]
  },
  {
    label: "San Marino",
    value: "Europe/San_Marino",
    lat: 43.9424,
    lng: 12.4578,
    flag: "🇸🇲",
    cities: [
      { name: "San Marino", timezone: "Europe/San_Marino", lat: 43.9367, lng: 12.4466 },
      { name: "Borgo Maggiore", timezone: "Europe/San_Marino", lat: 43.9444, lng: 12.4636 },
      { name: "Serravalle", timezone: "Europe/San_Marino", lat: 43.9500, lng: 12.4833 }
    ]
  },
  {
    label: "Sao Tome and Principe",
    value: "Africa/Sao_Tome",
    lat: 0.1881,
    lng: 6.6131,
    flag: "🇸🇹",
    cities: [
      { name: "São Tomé", timezone: "Africa/Sao_Tome", lat: 0.3333, lng: 6.7333 },
      { name: "Trindade", timezone: "Africa/Sao_Tome", lat: 0.3167, lng: 6.6833 },
      { name: "Neves", timezone: "Africa/Sao_Tome", lat: 0.3500, lng: 6.6333 }
    ]
  },
  {
    label: "Saudi Arabia",
    value: "Asia/Riyadh",
    lat: 23.8859,
    lng: 45.0792,
    flag: "🇸🇦",
    cities: [
      { name: "Riyadh", timezone: "Asia/Riyadh", lat: 24.7136, lng: 46.6753 },
      { name: "Jeddah", timezone: "Asia/Riyadh", lat: 21.5433, lng: 39.1728 },
      { name: "Mecca", timezone: "Asia/Riyadh", lat: 21.3891, lng: 39.8579 }
    ]
  },
  {
    label: "Senegal",
    value: "Africa/Dakar",
    lat: 14.4974,
    lng: -14.4524,
    flag: "🇸🇳",
    cities: [
      { name: "Dakar", timezone: "Africa/Dakar", lat: 14.6937, lng: -17.4444 },
      { name: "Thiès", timezone: "Africa/Dakar", lat: 14.7833, lng: -16.9333 },
      { name: "Saint-Louis", timezone: "Africa/Dakar", lat: 16.0000, lng: -16.2500 }
    ]
  },
  {
    label: "Serbia",
    value: "Europe/Belgrade",
    lat: 44.0165,
    lng: 21.0059,
    flag: "🇷🇸",
    cities: [
      { name: "Belgrade", timezone: "Europe/Belgrade", lat: 44.8017, lng: 20.4617 },
      { name: "Novi Sad", timezone: "Europe/Belgrade", lat: 45.2671, lng: 19.8338 },
      { name: "Niš", timezone: "Europe/Belgrade", lat: 43.3209, lng: 21.8954 }
    ]
  },
  {
    label: "Seychelles",
    value: "Indian/Mahe",
    lat: -4.6796,
    lng: 55.4920,
    flag: "🇸🇨",
    cities: [
      { name: "Victoria", timezone: "Indian/Mahe", lat: -4.6167, lng: 55.4500 },
      { name: "Anse Boileau", timezone: "Indian/Mahe", lat: -4.7000, lng: 55.4500 },
      { name: "Takamaka", timezone: "Indian/Mahe", lat: -4.7333, lng: 55.4667 }
    ]
  },
  {
    label: "Sierra Leone",
    value: "Africa/Freetown",
    lat: 8.7422,
    lng: -11.6275,
    flag: "🇸🇱",
    cities: [
      { name: "Freetown", timezone: "Africa/Freetown", lat: 8.4833, lng: -13.2333 },
      { name: "Bo", timezone: "Africa/Freetown", lat: 7.9333, lng: -11.7167 },
      { name: "Kenema", timezone: "Africa/Freetown", lat: 7.8667, lng: -11.0667 }
    ]
  },
  {
    label: "Singapore",
    value: "Asia/Singapore",
    lat: 1.3521,
    lng: 103.8198,
    flag: "🇸🇬",
    cities: [
      { name: "Singapore", timezone: "Asia/Singapore", lat: 1.3521, lng: 103.8198 }
    ]
  },
  {
    label: "Slovakia",
    value: "Europe/Bratislava",
    lat: 48.6690,
    lng: 19.6990,
    flag: "🇸🇰",
    cities: [
      { name: "Bratislava", timezone: "Europe/Bratislava", lat: 48.1486, lng: 17.1077 },
      { name: "Košice", timezone: "Europe/Bratislava", lat: 48.7167, lng: 21.2500 },
      { name: "Prešov", timezone: "Europe/Bratislava", lat: 49.0000, lng: 21.2333 }
    ]
  },
  {
    label: "Slovenia",
    value: "Europe/Ljubljana",
    lat: 46.1512,
    lng: 14.9955,
    flag: "🇸🇮",
    cities: [
      { name: "Ljubljana", timezone: "Europe/Ljubljana", lat: 46.0569, lng: 14.5058 },
      { name: "Maribor", timezone: "Europe/Ljubljana", lat: 46.5547, lng: 15.6467 },
      { name: "Celje", timezone: "Europe/Ljubljana", lat: 46.2333, lng: 15.2667 }
    ]
  },
  {
    label: "Solomon Islands",
    value: "Pacific/Guadalcanal",
    lat: -9.6457,
    lng: 160.1562,
    flag: "🇸🇧",
    cities: [
      { name: "Honiara", timezone: "Pacific/Guadalcanal", lat: -9.4333, lng: 159.9500 },
      { name: "Gizo", timezone: "Pacific/Guadalcanal", lat: -8.1500, lng: 156.8333 },
      { name: "Auki", timezone: "Pacific/Guadalcanal", lat: -8.7167, lng: 160.7167 }
    ]
  },
  {
    label: "Somalia",
    value: "Africa/Mogadishu",
    lat: 5.1521,
    lng: 46.1996,
    flag: "🇸🇴",
    cities: [
      { name: "Mogadishu", timezone: "Africa/Mogadishu", lat: 2.0371, lng: 45.3438 },
      { name: "Hargeisa", timezone: "Africa/Mogadishu", lat: 9.5667, lng: 44.0667 },
      { name: "Kismayo", timezone: "Africa/Mogadishu", lat: 0.3667, lng: 42.5167 }
    ]
  },
  {
    label: "South Africa",
    value: "Africa/Johannesburg",
    lat: -30.5595,
    lng: 22.9375,
    flag: "🇿🇦",
    cities: [
      { name: "Johannesburg", timezone: "Africa/Johannesburg", lat: -26.2041, lng: 28.0473 },
      { name: "Cape Town", timezone: "Africa/Johannesburg", lat: -33.9249, lng: 18.4241 },
      { name: "Durban", timezone: "Africa/Johannesburg", lat: -29.8587, lng: 31.0218 }
    ]
  },
  {
    label: "South Korea",
    value: "Asia/Seoul",
    lat: 35.9078,
    lng: 127.7669,
    flag: "🇰🇷",
    cities: [
      { name: "Seoul", timezone: "Asia/Seoul", lat: 37.5665, lng: 126.9780 },
      { name: "Busan", timezone: "Asia/Seoul", lat: 35.1028, lng: 129.0403 },
      { name: "Incheon", timezone: "Asia/Seoul", lat: 37.4563, lng: 126.7052 }
    ]
  },
  {
    label: "South Sudan",
    value: "Africa/Juba",
    lat: 6.8769,
    lng: 31.3070,
    flag: "🇸🇸",
    cities: [
      { name: "Juba", timezone: "Africa/Juba", lat: 4.8500, lng: 31.6000 },
      { name: "Malakal", timezone: "Africa/Juba", lat: 9.5333, lng: 31.6167 },
      { name: "Bor", timezone: "Africa/Juba", lat: 6.2000, lng: 32.5167 }
    ]
  },
  {
    label: "Spain",
    value: "Europe/Madrid",
    lat: 40.4637,
    lng: -3.7492,
    flag: "🇪🇸",
    cities: [
      { name: "Madrid", timezone: "Europe/Madrid", lat: 40.4165, lng: -3.7026 },
      { name: "Barcelona", timezone: "Europe/Madrid", lat: 41.3851, lng: 2.1734 },
      { name: "Valencia", timezone: "Europe/Madrid", lat: 39.4699, lng: -0.3763 }
    ]
  },
  {
    label: "Sri Lanka",
    value: "Asia/Colombo",
    lat: 7.8731,
    lng: 80.7718,
    flag: "🇱🇰",
    cities: [
      { name: "Colombo", timezone: "Asia/Colombo", lat: 6.9271, lng: 79.8612 },
      { name: "Kandy", timezone: "Asia/Colombo", lat: 7.2906, lng: 80.6337 },
      { name: "Galle", timezone: "Asia/Colombo", lat: 6.0333, lng: 80.2167 }
    ]
  },
  {
    label: "Sudan",
    value: "Africa/Khartoum",
    lat: 12.8628,
    lng: 30.2176,
    flag: "🇸🇩",
    cities: [
      { name: "Khartoum", timezone: "Africa/Khartoum", lat: 15.5000, lng: 32.5333 },
      { name: "Omdurman", timezone: "Africa/Khartoum", lat: 15.6000, lng: 32.4667 },
      { name: "Port Sudan", timezone: "Africa/Khartoum", lat: 19.6167, lng: 37.2167 }
    ]
  },
  {
    label: "Suriname",
    value: "America/Paramaribo",
    lat: 3.9193,
    lng: -56.0278,
    flag: "🇸🇷",
    cities: [
      { name: "Paramaribo", timezone: "America/Paramaribo", lat: 5.8500, lng: -55.2000 },
      { name: "Lelydorp", timezone: "America/Paramaribo", lat: 5.7167, lng: -55.1667 },
      { name: "Nieuw Nickerie", timezone: "America/Paramaribo", lat: 5.9667, lng: -56.9500 }
    ]
  },
  {
    label: "Sweden",
    value: "Europe/Stockholm",
    lat: 60.1282,
    lng: 18.6435,
    flag: "🇸🇪",
    cities: [
      { name: "Stockholm", timezone: "Europe/Stockholm", lat: 59.3293, lng: 18.0686 },
      { name: "Gothenburg", timezone: "Europe/Stockholm", lat: 57.7089, lng: 11.9746 },
      { name: "Malmö", timezone: "Europe/Stockholm", lat: 55.6049, lng: 13.0038 }
    ]
  },
  {
    label: "Switzerland",
    value: "Europe/Zurich",
    lat: 46.8182,
    lng: 8.2275,
    flag: "🇨🇭",
    cities: [
      { name: "Zurich", timezone: "Europe/Zurich", lat: 47.3769, lng: 8.5417 },
      { name: "Geneva", timezone: "Europe/Zurich", lat: 46.2044, lng: 6.1432 },
      { name: "Basel", timezone: "Europe/Zurich", lat: 47.5596, lng: 7.5886 }
    ]
  },
  {
    label: "Syria",
    value: "Asia/Damascus",
    lat: 34.8021,
    lng: 38.9968,
    flag: "🇸🇾",
    cities: [
      { name: "Damascus", timezone: "Asia/Damascus", lat: 33.5138, lng: 36.2765 },
      { name: "Aleppo", timezone: "Asia/Damascus", lat: 36.2000, lng: 37.1667 },
      { name: "Homs", timezone: "Asia/Damascus", lat: 34.7333, lng: 36.7167 }
    ]
  },
  {
    label: "Taiwan",
    value: "Asia/Taipei",
    lat: 23.6978,
    lng: 120.9605,
    flag: "🇹🇼",
    cities: [
      { name: "Taipei", timezone: "Asia/Taipei", lat: 25.0330, lng: 121.5654 },
      { name: "Kaohsiung", timezone: "Asia/Taipei", lat: 22.6201, lng: 120.3050 },
      { name: "Taichung", timezone: "Asia/Taipei", lat: 24.1477, lng: 120.6833 }
    ]
  },
  {
    label: "Tajikistan",
    value: "Asia/Dushanbe",
    lat: 38.8610,
    lng: 71.2761,
    flag: "🇹🇯",
    cities: [
      { name: "Dushanbe", timezone: "Asia/Dushanbe", lat: 38.5500, lng: 68.7667 },
      { name: "Khujand", timezone: "Asia/Dushanbe", lat: 40.2833, lng: 69.6000 },
      { name: "Kulob", timezone: "Asia/Dushanbe", lat: 37.7500, lng: 70.8500 }
    ]
  },
  {
    label: "Tanzania",
    value: "Africa/Dar_es_Salaam",
    lat: -6.3690,
    lng: 34.8888,
    flag: "🇹🇿",
    cities: [
      { name: "Dar es Salaam", timezone: "Africa/Dar_es_Salaam", lat: -6.8167, lng: 39.2833 },
      { name: "Dodoma", timezone: "Africa/Dar_es_Salaam", lat: -6.1667, lng: 35.7500 },
      { name: "Mwanza", timezone: "Africa/Dar_es_Salaam", lat: -2.5167, lng: 32.9000 }
    ]
  },
  {
    label: "Thailand",
    value: "Asia/Bangkok",
    lat: 15.8700,
    lng: 100.9925,
    flag: "🇹🇭",
    cities: [
      { name: "Bangkok", timezone: "Asia/Bangkok", lat: 13.7563, lng: 100.5018 },
      { name: "Chiang Mai", timezone: "Asia/Bangkok", lat: 18.7904, lng: 98.9847 },
      { name: "Pattaya", timezone: "Asia/Bangkok", lat: 12.9333, lng: 100.8833 }
    ]
  },
  {
    label: "Timor-Leste",
    value: "Asia/Dili",
    lat: -8.8742,
    lng: 125.7275,
    flag: "🇹🇱",
    cities: [
      { name: "Dili", timezone: "Asia/Dili", lat: -8.5586, lng: 125.5747 },
      { name: "Baucau", timezone: "Asia/Dili", lat: -8.4833, lng: 126.4667 },
      { name: "Maliana", timezone: "Asia/Dili", lat: -8.7833, lng: 125.1667 }
    ]
  },
  {
    label: "Togo",
    value: "Africa/Lome",
    lat: 8.6195,
    lng: 0.8248,
    flag: "🇹🇬",
    cities: [
      { name: "Lomé", timezone: "Africa/Lome", lat: 6.1333, lng: 1.2167 },
      { name: "Sokodé", timezone: "Africa/Lome", lat: 8.9833, lng: 1.1667 },
      { name: "Kara", timezone: "Africa/Lome", lat: 9.5667, lng: 1.1833 }
    ]
  },
  {
    label: "Tonga",
    value: "Pacific/Tongatapu",
    lat: -21.1789,
    lng: -175.1982,
    flag: "🇹🇴",
    cities: [
      { name: "Nuku'alofa", timezone: "Pacific/Tongatapu", lat: -21.1333, lng: -175.2000 },
      { name: "Neiafu", timezone: "Pacific/Tongatapu", lat: -18.6500, lng: -173.9833 },
      { name: "Pangai", timezone: "Pacific/Tongatapu", lat: -19.7833, lng: -174.1333 }
    ]
  },
  {
    label: "Trinidad and Tobago",
    value: "America/Port_of_Spain",
    lat: 10.6918,
    lng: -61.2225,
    flag: "🇹🇹",
    cities: [
      { name: "Port of Spain", timezone: "America/Port_of_Spain", lat: 10.6500, lng: -61.5167 },
      { name: "San Fernando", timezone: "America/Port_of_Spain", lat: 10.2833, lng: -61.4333 },
      { name: "Chaguanas", timezone: "America/Port_of_Spain", lat: 10.4500, lng: -61.4000 }
    ]
  },
  {
    label: "Tunisia",
    value: "Africa/Tunis",
    lat: 33.8869,
    lng: 9.5375,
    flag: "🇹🇳",
    cities: [
      { name: "Tunis", timezone: "Africa/Tunis", lat: 36.8065, lng: 10.1815 },
      { name: "Sfax", timezone: "Africa/Tunis", lat: 34.7400, lng: 10.7600 },
      { name: "Sousse", timezone: "Africa/Tunis", lat: 35.8250, lng: 10.6375 }
    ]
  },
  {
    label: "Turkey",
    value: "Europe/Istanbul",
    lat: 38.9637,
    lng: 35.2433,
    flag: "🇹🇷",
    cities: [
      { name: "Istanbul", timezone: "Europe/Istanbul", lat: 41.0082, lng: 28.9784 },
      { name: "Ankara", timezone: "Europe/Istanbul", lat: 39.9334, lng: 32.8597 },
      { name: "İzmir", timezone: "Europe/Istanbul", lat: 38.4189, lng: 27.1287 }
    ]
  },
  {
    label: "Turkmenistan",
    value: "Asia/Ashgabat",
    lat: 38.9697,
    lng: 59.5563,
    flag: "🇹🇲",
    cities: [
      { name: "Ashgabat", timezone: "Asia/Ashgabat", lat: 37.9500, lng: 58.3833 },
      { name: "Türkmenabat", timezone: "Asia/Ashgabat", lat: 39.5000, lng: 63.9000 },
      { name: "Daşoguz", timezone: "Asia/Ashgabat", lat: 41.8500, lng: 59.9833 }
    ]
  },
  {
    label: "Tuvalu",
    value: "Pacific/Funafuti",
    lat: -7.1095,
    lng: 177.6493,
    flag: "🇹🇻",
    cities: [
      { name: "Funafuti", timezone: "Pacific/Funafuti", lat: -8.5167, lng: 179.2000 },
      { name: "Vaitupu", timezone: "Pacific/Funafuti", lat: -7.4833, lng: 178.8333 },
      { name: "Nanumea", timezone: "Pacific/Funafuti", lat: -7.0500, lng: 177.2500 }
    ]
  },
  {
    label: "Uganda",
    value: "Africa/Kampala",
    lat: 1.3733,
    lng: 32.2903,
    flag: "🇺🇬",
    cities: [
      { name: "Kampala", timezone: "Africa/Kampala", lat: 0.3476, lng: 32.5825 },
      { name: "Entebbe", timezone: "Africa/Kampala", lat: 0.0500, lng: 32.4667 },
      { name: "Jinja", timezone: "Africa/Kampala", lat: 0.4500, lng: 33.2000 }
    ]
  },
  {
    label: "Ukraine",
    value: "Europe/Kiev",
    lat: 48.3794,
    lng: 31.1656,
    flag: "🇺🇦",
    cities: [
      { name: "Kyiv", timezone: "Europe/Kiev", lat: 50.4501, lng: 30.5234 },
      { name: "Lviv", timezone: "Europe/Kiev", lat: 49.8420, lng: 24.0316 },
      { name: "Odesa", timezone: "Europe/Kiev", lat: 46.4825, lng: 30.7233 }
    ]
  },
  {
    label: "United Arab Emirates",
    value: "Asia/Dubai",
    lat: 23.4241,
    lng: 53.8478,
    flag: "🇦🇪",
    cities: [
      { name: "Dubai", timezone: "Asia/Dubai", lat: 25.2048, lng: 55.2708 },
      { name: "Abu Dhabi", timezone: "Asia/Dubai", lat: 24.4539, lng: 54.3773 },
      { name: "Sharjah", timezone: "Asia/Dubai", lat: 25.3400, lng: 55.4000 }
    ]
  },
  {
    label: "United Kingdom",
    value: "Europe/London",
    lat: 51.5074,
    lng: -0.1278,
    flag: "🇬🇧",
    cities: [
      { name: "London", timezone: "Europe/London", lat: 51.5074, lng: -0.1278 },
      { name: "Manchester", timezone: "Europe/London", lat: 53.4808, lng: -2.2426 },
      { name: "Birmingham", timezone: "Europe/London", lat: 52.4862, lng: -1.8904 }
    ]
  },
  {
    label: "United States",
    value: "America/New_York",
    lat: 37.0902,
    lng: -95.7129,
    flag: "🇺🇸",
    cities: [
      { name: "New York", timezone: "America/New_York", lat: 40.7128, lng: -74.0060 },
      { name: "Los Angeles", timezone: "America/Los_Angeles", lat: 34.0522, lng: -118.2437 },
      { name: "Chicago", timezone: "America/Chicago", lat: 41.8781, lng: -87.6298 }
    ]
  },
    {
    label: "Uruguay",
    value: "America/Montevideo",
    lat: -32.5228,
    lng: -55.7658,
    flag: "🇺🇾",
    cities: [
      { name: "Montevideo", timezone: "America/Montevideo", lat: -34.9011, lng: -56.1645 },
      { name: "Salto", timezone: "America/Montevideo", lat: -31.3833, lng: -57.9667 },
      { name: "Ciudad del Este", timezone: "America/Asuncion", lat: -25.5000, lng: -54.6167 }
    ]
  },
  {
    label: "Uzbekistan",
    value: "Asia/Tashkent",
    lat: 41.3775,
    lng: 64.5853,
    flag: "🇺🇿",
    cities: [
      { name: "Tashkent", timezone: "Asia/Tashkent", lat: 41.2995, lng: 69.2401 },
      { name: "Samarkand", timezone: "Asia/Tashkent", lat: 39.6546, lng: 66.9744 },
      { name: "Namangan", timezone: "Asia/Tashkent", lat: 40.9986, lng: 71.6714 }
    ]
  },
  {
    label: "Vanuatu",
    value: "Pacific/Efate",
    lat: -15.3767,
    lng: 166.9592,
    flag: "🇻🇺",
    cities: [
      { name: "Port Vila", timezone: "Pacific/Efate", lat: -17.7333, lng: 168.3333 },
      { name: "Luganville", timezone: "Pacific/Efate", lat: -15.2667, lng: 167.1833 },
      { name: "Isangel", timezone: "Pacific/Efate", lat: -19.1500, lng: 169.5333 }
    ]
  },
  {
    label: "Vatican City",
    value: "Europe/Vatican",
    lat: 41.9029,
    lng: 12.4534,
    flag: "🇻🇦",
    cities: [
      { name: "Vatican City", timezone: "Europe/Vatican", lat: 41.9029, lng: 12.4534 }
    ]
  },
  {
    label: "Venezuela",
    value: "America/Caracas",
    lat: 6.4238,
    lng: -66.5897,
    flag: "🇻🇪",
    cities: [
      { name: "Caracas", timezone: "America/Caracas", lat: 10.4806, lng: -66.9036 },
      { name: "Maracaibo", timezone: "America/Caracas", lat: 10.6500, lng: -71.6500 },
      { name: "Valencia", timezone: "America/Caracas", lat: 10.1667, lng: -67.9833 }
    ]
  },
  {
    label: "Vietnam",
    value: "Asia/Ho_Chi_Minh",
    lat: 14.0583,
    lng: 108.2772,
    flag: "🇻🇳",
    cities: [
      { name: "Hanoi", timezone: "Asia/Ho_Chi_Minh", lat: 21.0285, lng: 105.8542 },
      { name: "Ho Chi Minh City", timezone: "Asia/Ho_Chi_Minh", lat: 10.8231, lng: 106.6297 },
      { name: "Da Nang", timezone: "Asia/Ho_Chi_Minh", lat: 16.0544, lng: 108.2022 }
    ]
  },
  {
    label: "Yemen",
    value: "Asia/Aden",
    lat: 15.5527,
    lng: 48.5164,
    flag: "🇾🇪",
    cities: [
      { name: "Sana'a", timezone: "Asia/Aden", lat: 15.3694, lng: 44.2052 },
      { name: "Aden", timezone: "Asia/Aden", lat: 12.7833, lng: 45.0333 },
      { name: "Taiz", timezone: "Asia/Aden", lat: 13.5000, lng: 44.0333 }
    ]
  },
  {
    label: "Zambia",
    value: "Africa/Lusaka",
    lat: -13.1339,
    lng: 27.8493,
    flag: "🇿🇲",
    cities: [
      { name: "Lusaka", timezone: "Africa/Lusaka", lat: -15.4067, lng: 28.2870 },
      { name: "Kitwe", timezone: "Africa/Lusaka", lat: -12.8167, lng: 28.2000 },
      { name: "Ndola", timezone: "Africa/Lusaka", lat: -12.9667, lng: 28.6333 }
    ]
  },
  {
    label: "Zimbabwe",
    value: "Africa/Harare",
    lat: -19.0154,
    lng: 29.1549,
    flag: "🇿🇼",
    cities: [
      { name: "Harare", timezone: "Africa/Harare", lat: -17.8277, lng: 31.0534 },
      { name: "Bulawayo", timezone: "Africa/Harare", lat: -20.1667, lng: 28.5833 },
      { name: "Mutare", timezone: "Africa/Harare", lat: -18.9667, lng: 32.6667 }
    ]
  }
];

export default countries;