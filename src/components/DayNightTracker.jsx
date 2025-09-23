import React, { useState, useEffect } from 'react';
import './DayNightTracker.css';

// 🌍 Updated country data with IANA timezone IDs for accurate time display
const countryData = {
  "Afghanistan": {
    capital: "Kabul",
    timezoneId: "Asia/Kabul",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "5:30 PM" }
    }
  },
  "Albania": {
    capital: "Tirana",
    timezoneId: "Europe/Tirane",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "4:30 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      summer: { sunrise: "5:00 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:00 PM" }
    }
  },
  "Algeria": {
    capital: "Algiers",
    timezoneId: "Africa/Algiers",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:15 PM" }
    }
  },
  "Andorra": {
    capital: "Andorra la Vella",
    timezoneId: "Europe/Andorra",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "7:00 AM", sunset: "8:00 PM" },
      summer: { sunrise: "6:15 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "7:30 AM", sunset: "7:00 PM" }
    }
  },
  "Angola": {
    capital: "Luanda",
    timezoneId: "Africa/Luanda",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:00 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "5:45 PM" }
    }
  },
  "Antigua and Barbuda": {
    capital: "Saint John's",
    timezoneId: "America/Antigua",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Argentina": {
    capital: "Buenos Aires",
    timezoneId: "America/Argentina/Buenos_Aires",
    seasons: {
      winter: { sunrise: "8:00 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:30 PM" }
    }
  },
  "Armenia": {
    capital: "Yerevan",
    timezoneId: "Asia/Yerevan",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:45 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:30 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:45 PM" }
    }
  },
  "Australia": {
    capital: "Canberra",
    timezoneId: "Australia/Sydney",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "5:45 PM" }
    }
  },
  "Austria": {
    capital: "Vienna",
    timezoneId: "Europe/Vienna",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "8:00 PM" },
      summer: { sunrise: "5:00 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
    }
  },
  "Azerbaijan": {
    capital: "Baku",
    timezoneId: "Asia/Baku",
    seasons: {
      winter: { sunrise: "8:00 AM", sunset: "5:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:45 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Bahamas": {
    capital: "Nassau",
    timezoneId: "America/Nassau",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:30 PM" },
      summer: { sunrise: "6:15 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
    }
  },
  "Bahrain": {
    capital: "Manama",
    timezoneId: "Asia/Bahrain",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "4:45 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:30 AM", sunset: "5:30 PM" }
    }
  },
  "Bangladesh": {
    capital: "Dhaka",
    timezoneId: "Asia/Dhaka",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:00 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "5:45 PM" }
    }
  },
  "Barbados": {
    capital: "Bridgetown",
    timezoneId: "America/Barbados",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Belarus": {
    capital: "Minsk",
    timezoneId: "Europe/Minsk",
    seasons: {
      winter: { sunrise: "9:00 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:30 AM", sunset: "8:30 PM" },
      summer: { sunrise: "4:30 AM", sunset: "9:45 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "7:15 PM" }
    }
  },
  "Belgium": {
    capital: "Brussels",
    timezoneId: "Europe/Brussels",
    seasons: {
      winter: { sunrise: "8:30 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:45 AM", sunset: "8:45 PM" },
      summer: { sunrise: "5:30 AM", sunset: "10:00 PM" },
      autumn: { sunrise: "7:30 AM", sunset: "7:15 PM" }
    }
  },
  "Belize": {
    capital: "Belmopan",
    timezoneId: "America/Belize",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Benin": {
    capital: "Porto-Novo",
    timezoneId: "Africa/Porto-Novo",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:00 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
    }
  },
  "Bhutan": {
    capital: "Thimphu",
    timezoneId: "Asia/Thimphu",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "5:45 PM" }
    }
  },
  "Bolivia": {
    capital: "Sucre",
    timezoneId: "America/La_Paz",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Bosnia and Herzegovina": {
    capital: "Sarajevo",
    timezoneId: "Europe/Sarajevo",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "4:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:45 PM" },
      summer: { sunrise: "5:00 AM", sunset: "8:30 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Botswana": {
    capital: "Gaborone",
    timezoneId: "Africa/Gaborone",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Brazil": {
    capital: "Brasília",
    timezoneId: "America/Sao_Paulo",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Brunei": {
    capital: "Bandar Seri Begawan",
    timezoneId: "Asia/Brunei",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Bulgaria": {
    capital: "Sofia",
    timezoneId: "Europe/Sofia",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:00 PM" },
      summer: { sunrise: "5:30 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:45 PM" }
    }
  },
  "Burkina Faso": {
    capital: "Ouagadougou",
    timezoneId: "Africa/Ouagadougou",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Burundi": {
    capital: "Gitega",
    timezoneId: "Africa/Bujumbura",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Cabo Verde": {
    capital: "Praia",
    timezoneId: "Atlantic/Cape_Verde",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:45 PM" },
      summer: { sunrise: "5:45 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:30 PM" }
    }
  },
  "Cambodia": {
    capital: "Phnom Penh",
    timezoneId: "Asia/Phnom_Penh",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Cameroon": {
    capital: "Yaoundé",
    timezoneId: "Africa/Douala",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:15 PM" }
    }
  },
  "Canada": {
    capital: "Ottawa",
    timezoneId: "America/Toronto",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "8:00 PM" },
      summer: { sunrise: "5:30 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:45 PM" }
    }
  },
  "Central African Republic": {
    capital: "Bangui",
    timezoneId: "Africa/Bangui",
    seasons: {
      winter: { sunrise: "5:45 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:00 PM" },
      summer: { sunrise: "5:00 AM", sunset: "6:15 PM" },
      autumn: { sunrise: "5:30 AM", sunset: "5:45 PM" }
    }
  },
  "Chad": {
    capital: "N'Djamena",
    timezoneId: "Africa/Ndjamena",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Chile": {
    capital: "Santiago",
    timezoneId: "America/Santiago",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:45 AM", sunset: "8:00 PM" },
      summer: { sunrise: "6:30 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "7:00 PM" }
    }
  },
  "China": {
    capital: "Beijing",
    timezoneId: "Asia/Shanghai",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "5:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:00 PM" },
      summer: { sunrise: "4:45 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Colombia": {
    capital: "Bogotá",
    timezoneId: "America/Bogota",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Comoros": {
    capital: "Moroni",
    timezoneId: "Indian/Comoro",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Congo (Congo-Brazzaville)": {
    capital: "Brazzaville",
    timezoneId: "Africa/Brazzaville",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Costa Rica": {
    capital: "San José",
    timezoneId: "America/Costa_Rica",
    seasons: {
      winter: { sunrise: "5:45 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:00 PM" },
      summer: { sunrise: "5:00 AM", sunset: "6:15 PM" },
      autumn: { sunrise: "5:30 AM", sunset: "5:45 PM" }
    }
  },
  "Croatia": {
    capital: "Zagreb",
    timezoneId: "Europe/Zagreb",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "4:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "8:00 PM" },
      summer: { sunrise: "5:00 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
    }
  },
  "Cuba": {
    capital: "Havana",
    timezoneId: "America/Havana",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:45 PM" },
      summer: { sunrise: "6:15 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "7:00 PM" }
    }
  },
  "Cyprus": {
    capital: "Nicosia",
    timezoneId: "Asia/Nicosia",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "4:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Czechia (Czech Republic)": {
    capital: "Prague",
    timezoneId: "Europe/Prague",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "8:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Denmark": {
    capital: "Copenhagen",
    timezoneId: "Europe/Copenhagen",
    seasons: {
      winter: { sunrise: "8:30 AM", sunset: "3:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "9:00 PM" },
      summer: { sunrise: "4:30 AM", sunset: "10:00 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:45 PM" }
    }
  },
  "Djibouti": {
    capital: "Djibouti",
    timezoneId: "Africa/Djibouti",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Dominica": {
    capital: "Roseau",
    timezoneId: "America/Dominica",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Dominican Republic": {
    capital: "Santo Domingo",
    timezoneId: "America/Santo_Domingo",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:00 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Ecuador": {
    capital: "Quito",
    timezoneId: "America/Guayaquil",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Egypt": {
    capital: "Cairo",
    timezoneId: "Africa/Cairo",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "El Salvador": {
    capital: "San Salvador",
    timezoneId: "America/El_Salvador",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Equatorial Guinea": {
    capital: "Malabo",
    timezoneId: "Africa/Malabo",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:15 PM" }
    }
  },
  "Eritrea": {
    capital: "Asmara",
    timezoneId: "Africa/Asmara",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:00 PM" }
    }
  },
  "Estonia": {
    capital: "Tallinn",
    timezoneId: "Europe/Tallinn",
    seasons: {
      winter: { sunrise: "9:00 AM", sunset: "3:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "9:15 PM" },
      summer: { sunrise: "4:00 AM", sunset: "10:45 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:45 PM" }
    }
  },
  "Eswatini (fmr. Swaziland)": {
    capital: "Mbabane",
    timezoneId: "Africa/Mbabane",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "5:45 PM" }
    }
  },
  "Ethiopia": {
    capital: "Addis Ababa",
    timezoneId: "Africa/Addis_Ababa",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Fiji": {
    capital: "Suva",
    timezoneId: "Pacific/Fiji",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Finland": {
    capital: "Helsinki",
    timezoneId: "Europe/Helsinki",
    seasons: {
      winter: { sunrise: "9:15 AM", sunset: "3:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "9:30 PM" },
      summer: { sunrise: "3:45 AM", sunset: "10:45 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:30 PM" }
    }
  },
  "France": {
    capital: "Paris",
    timezoneId: "Europe/Paris",
    seasons: {
      winter: { sunrise: "8:30 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:45 AM", sunset: "9:00 PM" },
      summer: { sunrise: "5:45 AM", sunset: "10:00 PM" },
      autumn: { sunrise: "7:45 AM", sunset: "7:15 PM" }
    }
  },
  "Gabon": {
    capital: "Libreville",
    timezoneId: "Africa/Libreville",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:15 PM" }
    }
  },
  "Gambia": {
    capital: "Banjul",
    timezoneId: "Africa/Banjul",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:30 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "7:00 PM" }
    }
  },
  "Georgia": {
    capital: "Tbilisi",
    timezoneId: "Asia/Tbilisi",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "6:45 AM", sunset: "8:00 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:45 PM" }
    }
  },
  "Germany": {
    capital: "Berlin",
    timezoneId: "Europe/Berlin",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "4:15 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:30 PM" },
      summer: { sunrise: "4:45 AM", sunset: "9:45 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:45 PM" }
    }
  },
  "Ghana": {
    capital: "Accra",
    timezoneId: "Africa/Accra",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Greece": {
    capital: "Athens",
    timezoneId: "Europe/Athens",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:15 PM" },
      summer: { sunrise: "5:45 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:45 PM" }
    }
  },
  "Grenada": {
    capital: "St. George's",
    timezoneId: "America/Grenada",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Guatemala": {
    capital: "Guatemala City",
    timezoneId: "America/Guatemala",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Guinea": {
    capital: "Conakry",
    timezoneId: "Africa/Conakry",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "7:00 PM" }
    }
  },
  "Guinea-Bissau": {
    capital: "Bissau",
    timezoneId: "Africa/Bissau",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:30 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "7:00 PM" }
    }
  },
  "Guyana": {
    capital: "Georgetown",
    timezoneId: "America/Guyana",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Haiti": {
    capital: "Port-au-Prince",
    timezoneId: "America/Port-au-Prince",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Holy See": {
    capital: "Vatican City",
    timezoneId: "Europe/Vatican",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "7:00 PM" }
    }
  },
  "Honduras": {
    capital: "Tegucigalpa",
    timezoneId: "America/Tegucigalpa",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Hungary": {
    capital: "Budapest",
    timezoneId: "Europe/Budapest",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "4:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "8:00 PM" },
      summer: { sunrise: "4:45 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Iceland": {
    capital: "Reykjavik",
    timezoneId: "Atlantic/Reykjavik",
    seasons: {
      winter: { sunrise: "11:00 AM", sunset: "3:30 PM" },
      spring: { sunrise: "6:00 AM", sunset: "10:00 PM" },
      summer: { sunrise: "3:00 AM", sunset: "11:30 PM" },
      autumn: { sunrise: "8:00 AM", sunset: "7:00 PM" }
    }
  },
  "India": {
    capital: "New Delhi",
    timezoneId: "Asia/Kolkata",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "5:30 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:45 PM" },
      summer: { sunrise: "5:30 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:00 PM" }
    }
  },
  "Indonesia": {
    capital: "Jakarta",
    timezoneId: "Asia/Jakarta",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Iran": {
    capital: "Tehran",
    timezoneId: "Asia/Tehran",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "7:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "5:45 PM" }
    }
  },
  "Iraq": {
    capital: "Baghdad",
    timezoneId: "Asia/Baghdad",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "5:00 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      summer: { sunrise: "4:45 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "5:45 PM" }
    }
  },
  "Ireland": {
    capital: "Dublin",
    timezoneId: "Europe/Dublin",
    seasons: {
      winter: { sunrise: "8:30 AM", sunset: "4:15 PM" },
      spring: { sunrise: "6:30 AM", sunset: "8:45 PM" },
      summer: { sunrise: "5:00 AM", sunset: "10:00 PM" },
      autumn: { sunrise: "7:30 AM", sunset: "7:00 PM" }
    }
  },
  "Israel": {
    capital: "Jerusalem",
    timezoneId: "Asia/Jerusalem",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "4:45 PM" },
      spring: { sunrise: "5:30 AM", sunset: "7:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Italy": {
    capital: "Rome",
    timezoneId: "Europe/Rome",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:45 PM" }
    }
  },
  "Jamaica": {
    capital: "Kingston",
    timezoneId: "America/Jamaica",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Japan": {
    capital: "Tokyo",
    timezoneId: "Asia/Tokyo",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "4:30 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      summer: { sunrise: "4:30 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "5:15 PM" }
    }
  },
  "Jordan": {
    capital: "Amman",
    timezoneId: "Asia/Amman",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "4:30 PM" },
      spring: { sunrise: "5:30 AM", sunset: "7:00 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:00 PM" }
    }
  },
  "Kazakhstan": {
    capital: "Nur-Sultan",
    timezoneId: "Asia/Almaty",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "8:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Kenya": {
    capital: "Nairobi",
    timezoneId: "Africa/Nairobi",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Kiribati": {
    capital: "South Tarawa",
    timezoneId: "Pacific/Tarawa",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Korea, North": {
    capital: "Pyongyang",
    timezoneId: "Asia/Pyongyang",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Korea, South": {
    capital: "Seoul",
    timezoneId: "Asia/Seoul",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Kosovo": {
    capital: "Pristina",
    timezoneId: "Europe/Belgrade",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "4:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "7:45 PM" },
      summer: { sunrise: "4:45 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Kuwait": {
    capital: "Kuwait City",
    timezoneId: "Asia/Kuwait",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "4:45 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      summer: { sunrise: "4:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "5:45 PM" }
    }
  },
  "Kyrgyzstan": {
    capital: "Bishkek",
    timezoneId: "Asia/Bishkek",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:00 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
    }
  },
  "Laos": {
    capital: "Vientiane",
    timezoneId: "Asia/Vientiane",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Latvia": {
    capital: "Riga",
    timezoneId: "Europe/Riga",
    seasons: {
      winter: { sunrise: "8:45 AM", sunset: "3:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "9:15 PM" },
      summer: { sunrise: "4:15 AM", sunset: "10:30 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:45 PM" }
    }
  },
  "Lebanon": {
    capital: "Beirut",
    timezoneId: "Asia/Beirut",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "4:45 PM" },
      spring: { sunrise: "5:30 AM", sunset: "7:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Lesotho": {
    capital: "Maseru",
    timezoneId: "Africa/Maseru",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Liberia": {
    capital: "Monrovia",
    timezoneId: "Africa/Monrovia",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:30 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Libya": {
    capital: "Tripoli",
    timezoneId: "Africa/Tripoli",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:15 PM" }
    }
  },
  "Liechtenstein": {
    capital: "Vaduz",
    timezoneId: "Europe/Vaduz",
    seasons: {
      winter: { sunrise: "8:00 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:45 PM" }
    }
  },
  "Lithuania": {
    capital: "Vilnius",
    timezoneId: "Europe/Vilnius",
    seasons: {
      winter: { sunrise: "8:30 AM", sunset: "4:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "9:00 PM" },
      summer: { sunrise: "4:30 AM", sunset: "10:15 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:30 PM" }
    }
  },
  "Luxembourg": {
    capital: "Luxembourg",
    timezoneId: "Europe/Luxembourg",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "8:45 PM" },
      summer: { sunrise: "5:30 AM", sunset: "9:45 PM" },
      autumn: { sunrise: "7:30 AM", sunset: "7:00 PM" }
    }
  },
  "Madagascar": {
    capital: "Antananarivo",
    timezoneId: "Indian/Antananarivo",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:00 PM" },
      summer: { sunrise: "5:00 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:30 AM", sunset: "5:45 PM" }
    }
  },
  "Malawi": {
    capital: "Lilongwe",
    timezoneId: "Africa/Blantyre",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:00 PM" },
      summer: { sunrise: "5:00 AM", sunset: "6:15 PM" },
      autumn: { sunrise: "5:30 AM", sunset: "5:45 PM" }
    }
  },
  "Malaysia": {
    capital: "Kuala Lumpur",
    timezoneId: "Asia/Kuala_Lumpur",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "7:00 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:30 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "7:00 PM" }
    }
  },
  "Maldives": {
    capital: "Malé",
    timezoneId: "Indian/Maldives",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Mali": {
    capital: "Bamako",
    timezoneId: "Africa/Bamako",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Malta": {
    capital: "Valletta",
    timezoneId: "Europe/Malta",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:45 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Marshall Islands": {
    capital: "Majuro",
    timezoneId: "Pacific/Majuro",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:00 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:45 PM" }
    }
  },
  "Mauritania": {
    capital: "Nouakchott",
    timezoneId: "Africa/Nouakchott",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:00 PM" },
      summer: { sunrise: "6:30 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "7:00 PM" }
    }
  },
  "Mauritius": {
    capital: "Port Louis",
    timezoneId: "Indian/Mauritius",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Mexico": {
    capital: "Mexico City",
    timezoneId: "America/Mexico_City",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
    }
  },
  "Micronesia": {
    capital: "Palikir",
    timezoneId: "Pacific/Pohnpei",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:30 PM" }
    }
  },
  "Moldova": {
    capital: "Chisinau",
    timezoneId: "Europe/Chisinau",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "8:15 PM" },
      summer: { sunrise: "5:00 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Monaco": {
    capital: "Monaco",
    timezoneId: "Europe/Monaco",
    seasons: {
      winter: { sunrise: "8:00 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:30 AM", sunset: "8:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "7:30 AM", sunset: "7:00 PM" }
    }
  },
  "Mongolia": {
    capital: "Ulaanbaatar",
    timezoneId: "Asia/Ulaanbaatar",
    seasons: {
      winter: { sunrise: "8:30 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "8:30 PM" },
      summer: { sunrise: "4:45 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Montenegro": {
    capital: "Podgorica",
    timezoneId: "Europe/Podgorica",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "4:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "7:45 PM" },
      summer: { sunrise: "4:45 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Morocco": {
    capital: "Rabat",
    timezoneId: "Africa/Casablanca",
    seasons: {
      winter: { sunrise: "8:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:45 PM" },
      summer: { sunrise: "6:15 AM", sunset: "8:30 PM" },
      autumn: { sunrise: "7:30 AM", sunset: "7:00 PM" }
    }
  },
  "Mozambique": {
    capital: "Maputo",
    timezoneId: "Africa/Maputo",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:00 PM" },
      summer: { sunrise: "4:45 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:30 AM", sunset: "5:45 PM" }
    }
  },
  "Myanmar (Burma)": {
    capital: "Naypyidaw",
    timezoneId: "Asia/Yangon",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Namibia": {
    capital: "Windhoek",
    timezoneId: "Africa/Windhoek",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "6:00 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:00 PM" },
      summer: { sunrise: "5:45 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Nauru": {
    capital: "Yaren",
    timezoneId: "Pacific/Nauru",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:00 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:45 PM" }
    }
  },
  "Nepal": {
    capital: "Kathmandu",
    timezoneId: "Asia/Kathmandu",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      summer: { sunrise: "5:00 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Netherlands": {
    capital: "Amsterdam",
    timezoneId: "Europe/Amsterdam",
    seasons: {
      winter: { sunrise: "8:45 AM", sunset: "4:30 PM" },
      spring: { sunrise: "6:45 AM", sunset: "9:00 PM" },
      summer: { sunrise: "5:15 AM", sunset: "10:15 PM" },
      autumn: { sunrise: "7:45 AM", sunset: "7:00 PM" }
    }
  },
  "New Zealand": {
    capital: "Wellington",
    timezoneId: "Pacific/Auckland",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:45 PM" },
      summer: { sunrise: "5:45 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:30 PM" }
    }
  },
  "Nicaragua": {
    capital: "Managua",
    timezoneId: "America/Managua",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Niger": {
    capital: "Niamey",
    timezoneId: "Africa/Niamey",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:00 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:45 PM" }
    }
  },
  "Nigeria": {
    capital: "Abuja",
    timezoneId: "Africa/Lagos",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "North Macedonia": {
    capital: "Skopje",
    timezoneId: "Europe/Skopje",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "4:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "7:45 PM" },
      summer: { sunrise: "4:45 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Norway": {
    capital: "Oslo",
    timezoneId: "Europe/Oslo",
    seasons: {
      winter: { sunrise: "9:15 AM", sunset: "3:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "9:30 PM" },
      summer: { sunrise: "3:45 AM", sunset: "10:45 PM" },
      autumn: { sunrise: "7:30 AM", sunset: "6:45 PM" }
    }
  },
  "Oman": {
    capital: "Muscat",
    timezoneId: "Asia/Muscat",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Pakistan": {
    capital: "Islamabad",
    timezoneId: "Asia/Karachi",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Palau": {
    capital: "Ngerulmud",
    timezoneId: "Pacific/Palau",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Panama": {
    capital: "Panama City",
    timezoneId: "America/Panama",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Papua New Guinea": {
    capital: "Port Moresby",
    timezoneId: "Pacific/Port_Moresby",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Paraguay": {
    capital: "Asunción",
    timezoneId: "America/Asuncion",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Peru": {
    capital: "Lima",
    timezoneId: "America/Lima",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Philippines": {
    capital: "Manila",
    timezoneId: "Asia/Manila",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Poland": {
    capital: "Warsaw",
    timezoneId: "Europe/Warsaw",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "3:45 PM" },
      spring: { sunrise: "5:30 AM", sunset: "8:15 PM" },
      summer: { sunrise: "4:15 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:00 PM" }
    }
  },
  "Portugal": {
    capital: "Lisbon",
    timezoneId: "Europe/Lisbon",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:30 AM", sunset: "8:30 PM" },
      summer: { sunrise: "6:00 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "7:00 PM" }
    }
  },
  "Qatar": {
    capital: "Doha",
    timezoneId: "Asia/Qatar",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "5:15 AM", sunset: "6:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:30 AM", sunset: "5:45 PM" }
    }
  },
  "Romania": {
    capital: "Bucharest",
    timezoneId: "Europe/Bucharest",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:30 PM" },
      spring: { sunrise: "6:00 AM", sunset: "8:00 PM" },
      summer: { sunrise: "5:30 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Russia": {
    capital: "Moscow",
    timezoneId: "Europe/Moscow",
    seasons: {
      winter: { sunrise: "8:45 AM", sunset: "4:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "8:30 PM" },
      summer: { sunrise: "4:00 AM", sunset: "9:45 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:15 PM" }
    }
  },
  "Rwanda": {
    capital: "Kigali",
    timezoneId: "Africa/Kigali",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Saint Kitts and Nevis": {
    capital: "Basseterre",
    timezoneId: "America/St_Kitts",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Saint Lucia": {
    capital: "Castries",
    timezoneId: "America/St_Lucia",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Saint Vincent and the Grenadines": {
    capital: "Kingstown",
    timezoneId: "America/St_Vincent",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Samoa": {
    capital: "Apia",
    timezoneId: "Pacific/Apia",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:45 PM" },
      summer: { sunrise: "5:45 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:30 PM" }
    }
  },
  "San Marino": {
    capital: "San Marino",
    timezoneId: "Europe/San_Marino",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "8:45 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "7:00 PM" }
    }
  },
  "Sao Tome and Principe": {
    capital: "São Tomé",
    timezoneId: "Africa/Sao_Tome",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:15 PM" }
    }
  },
  "Saudi Arabia": {
    capital: "Riyadh",
    timezoneId: "Asia/Riyadh",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:00 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "5:45 PM" }
    }
  },
  "Senegal": {
    capital: "Dakar",
    timezoneId: "Africa/Dakar",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:30 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "7:00 PM" }
    }
  },
  "Serbia": {
    capital: "Belgrade",
    timezoneId: "Europe/Belgrade",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "4:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:45 PM" },
      summer: { sunrise: "4:45 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Seychelles": {
    capital: "Victoria",
    timezoneId: "Indian/Mahe",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Sierra Leone": {
    capital: "Freetown",
    timezoneId: "Africa/Freetown",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "7:00 PM" }
    }
  },
  "Singapore": {
    capital: "Singapore",
    timezoneId: "Asia/Singapore",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "7:00 PM" },
      spring: { sunrise: "6:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "6:30 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "7:00 PM" }
    }
  },
  "Slovakia": {
    capital: "Bratislava",
    timezoneId: "Europe/Bratislava",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "8:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Slovenia": {
    capital: "Ljubljana",
    timezoneId: "Europe/Ljubljana",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:30 PM" },
      spring: { sunrise: "6:00 AM", sunset: "8:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:30 PM" }
    }
  },
  "Solomon Islands": {
    capital: "Honiara",
    timezoneId: "Pacific/Guadalcanal",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Somalia": {
    capital: "Mogadishu",
    timezoneId: "Africa/Mogadishu",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "South Africa": {
    capital: "Pretoria",
    timezoneId: "Africa/Johannesburg",
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:00 PM" }
    }
  },
  "South Sudan": {
    capital: "Juba",
    timezoneId: "Africa/Juba",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Spain": {
    capital: "Madrid",
    timezoneId: "Europe/Madrid",
    seasons: {
      winter: { sunrise: "8:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:45 AM", sunset: "8:45 PM" },
      summer: { sunrise: "6:15 AM", sunset: "9:30 PM" },
      autumn: { sunrise: "7:45 AM", sunset: "7:15 PM" }
    }
  },
  "Sri Lanka": {
    capital: "Colombo",
    timezoneId: "Asia/Colombo",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Sudan": {
    capital: "Khartoum",
    timezoneId: "Africa/Khartoum",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Suriname": {
    capital: "Paramaribo",
    timezoneId: "America/Paramaribo",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Sweden": {
    capital: "Stockholm",
    timezoneId: "Europe/Stockholm",
    seasons: {
      winter: { sunrise: "8:45 AM", sunset: "3:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "9:15 PM" },
      summer: { sunrise: "3:30 AM", sunset: "10:30 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:30 PM" }
    }
  },
  "Switzerland": {
    capital: "Bern",
    timezoneId: "Europe/Zurich",
    seasons: {
      winter: { sunrise: "8:00 AM", sunset: "4:45 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "7:15 AM", sunset: "6:45 PM" }
    }
  },
  "Syria": {
    capital: "Damascus",
    timezoneId: "Asia/Damascus",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "4:45 PM" },
      spring: { sunrise: "5:30 AM", sunset: "7:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Tajikistan": {
    capital: "Dushanbe",
    timezoneId: "Asia/Dushanbe",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Tanzania": {
    capital: "Dodoma",
    timezoneId: "Africa/Dar_es_Salaam",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:30 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:30 PM" }
    }
  },
  "Thailand": {
    capital: "Bangkok",
    timezoneId: "Asia/Bangkok",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Timor-Leste": {
    capital: "Dili",
    timezoneId: "Asia/Dili",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:30 PM" },
      summer: { sunrise: "6:00 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Togo": {
    capital: "Lomé",
    timezoneId: "Africa/Lome",
    seasons: {
      winter: { sunrise: "6:00 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "5:45 AM", sunset: "6:00 PM" }
    }
  },
  "Tonga": {
    capital: "Nuku'alofa",
    timezoneId: "Pacific/Tongatapu",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      summer: { sunrise: "5:45 AM", sunset: "7:30 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:30 PM" }
    }
  },
  "Trinidad and Tobago": {
    capital: "Port of Spain",
    timezoneId: "America/Port_of_Spain",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "6:00 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Tunisia": {
    capital: "Tunis",
    timezoneId: "Africa/Tunis",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Turkey": {
    capital: "Ankara",
    timezoneId: "Europe/Istanbul",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "4:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:00 PM" }
    }
  },
  "Turkmenistan": {
    capital: "Ashgabat",
    timezoneId: "Asia/Ashgabat",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:30 PM" },
      summer: { sunrise: "5:15 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Tuvalu": {
    capital: "Funafuti",
    timezoneId: "Pacific/Funafuti",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "6:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:30 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:15 PM" }
    }
  },
  "Uganda": {
    capital: "Kampala",
    timezoneId: "Africa/Kampala",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:45 PM" },
      spring: { sunrise: "6:30 AM", sunset: "7:00 PM" },
      summer: { sunrise: "6:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:45 PM" }
    }
  },
  "Ukraine": {
    capital: "Kyiv",
    timezoneId: "Europe/Kyiv",
    seasons: {
      winter: { sunrise: "7:45 AM", sunset: "4:00 PM" },
      spring: { sunrise: "5:45 AM", sunset: "8:00 PM" },
      summer: { sunrise: "4:45 AM", sunset: "9:00 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:15 PM" }
    }
  },
  "United Arab Emirates": {
    capital: "Abu Dhabi",
    timezoneId: "Asia/Dubai",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:45 PM" },
      summer: { sunrise: "5:15 AM", sunset: "7:15 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:00 PM" }
    }
  },
  "United Kingdom": {
    capital: "London",
    timezoneId: "Europe/London",
    seasons: {
      winter: { sunrise: "8:00 AM", sunset: "4:00 PM" },
      spring: { sunrise: "6:15 AM", sunset: "8:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "9:15 PM" },
      autumn: { sunrise: "7:00 AM", sunset: "6:30 PM" }
    }
  },
  "United States": {
    capital: "Washington, D.C.",
    timezoneId: "America/New_York",
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:45 PM" },
      summer: { sunrise: "5:45 AM", sunset: "8:30 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:15 PM" }
    }
  },
  "Uruguay": {
    capital: "Montevideo",
    timezoneId: "America/Montevideo",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      summer: { sunrise: "5:30 AM", sunset: "7:45 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:15 PM" }
    }
  },
  "Uzbekistan": {
    capital: "Tashkent",
    timezoneId: "Asia/Tashkent",
    seasons: {
      winter: { sunrise: "7:30 AM", sunset: "5:15 PM" },
      spring: { sunrise: "5:45 AM", sunset: "7:15 PM" },
      summer: { sunrise: "4:45 AM", sunset: "8:00 PM" },
      autumn: { sunrise: "6:15 AM", sunset: "6:15 PM" }
    }
  },
  "Vanuatu": {
    capital: "Port Vila",
    timezoneId: "Pacific/Efate",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Venezuela": {
    capital: "Caracas",
    timezoneId: "America/Caracas",
    seasons: {
      winter: { sunrise: "6:45 AM", sunset: "6:15 PM" },
      spring: { sunrise: "6:15 AM", sunset: "6:45 PM" },
      summer: { sunrise: "6:00 AM", sunset: "7:00 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "6:15 PM" }
    }
  },
  "Vietnam": {
    capital: "Hanoi",
    timezoneId: "Asia/Ho_Chi_Minh",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:30 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Yemen": {
    capital: "Sana'a",
    timezoneId: "Asia/Aden",
    seasons: {
      winter: { sunrise: "6:15 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:30 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Zambia": {
    capital: "Lusaka",
    timezoneId: "Africa/Lusaka",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:30 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Zimbabwe": {
    capital: "Harare",
    timezoneId: "Africa/Harare",
    seasons: {
      winter: { sunrise: "6:30 AM", sunset: "5:45 PM" },
      spring: { sunrise: "5:45 AM", sunset: "6:15 PM" },
      summer: { sunrise: "5:15 AM", sunset: "6:45 PM" },
      autumn: { sunrise: "6:00 AM", sunset: "6:00 PM" }
    }
  },
  "Australia": {
    capital: "Canberra",
    timezoneId: "Australia/Canberra",
    otherCities: [
      { name: "Perth", timezoneId: "Australia/Perth" }, // UTC+08:00, 2 hours behind Canberra (UTC+10:00)
      { name: "Darwin", timezoneId: "Australia/Darwin" } // UTC+09:30, 0.5 hours behind Canberra
    ],
    seasons: {
      winter: { sunrise: "7:00 AM", sunset: "5:15 PM" },
      spring: { sunrise: "6:00 AM", sunset: "6:00 PM" },
      summer: { sunrise: "5:45 AM", sunset: "8:15 PM" },
      autumn: { sunrise: "6:30 AM", sunset: "5:45 PM" }
    }
  },
  "United States": {
    capital: "Washington, D.C.",
    timezoneId: "America/New_York",
    otherCities: [
      { name: "Los Angeles", timezoneId: "America/Los_Angeles" }, // UTC-08:00, 3 hours behind Washington, D.C. (UTC-05:00)
      { name: "Honolulu", timezoneId: "Pacific/Honolulu" } // UTC-10:00, 5 hours behind Washington, D.C.
    ],
    seasons: {
      winter: { sunrise: "7:15 AM", sunset: "5:00 PM" },
      spring: { sunrise: "6:15 AM", sunset: "7:45 PM" },
      summer: { sunrise: "5:45 AM", sunset: "8:30 PM" },
      autumn: { sunrise: "6:45 AM", sunset: "6:15 PM" }
    }
  }
};






const countriesList = Object.keys(countryData);

const DayNightTracker = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [theme, setTheme] = useState('day');
  const [currentSeason, setCurrentSeason] = useState('summer');
  const [showSearchResults, setShowSearchResults] = useState(false);

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Determine season based on current month
  useEffect(() => {
    const month = currentTime.getMonth();
    if (month >= 2 && month <= 4) setCurrentSeason('spring');
    else if (month >= 5 && month <= 7) setCurrentSeason('summer');
    else if (month >= 8 && month <= 10) setCurrentSeason('autumn');
    else setCurrentSeason('winter');
  }, [currentTime]);

  // Show search results when typing
  useEffect(() => {
    setShowSearchResults(searchTerm.length > 0);
  }, [searchTerm]);

  const filteredCountries = countriesList
    .filter(country => country.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort();

  const addCountry = (country) => {
    if (!selectedCountries.includes(country)) {
      setSelectedCountries([...selectedCountries, country]);
      setSearchTerm(''); // Clear search term
      setShowSearchResults(false); // Hide search results
    }
  };

  const removeCountry = (countryToRemove) => {
    setSelectedCountries(selectedCountries.filter(country => country !== countryToRemove));
  };

  const calculateDayNightProgress = (country) => {
    const seasonData = countryData[country].seasons[currentSeason];
    const parseTime = (timeStr) => {
      let [time, period] = timeStr.split(' ');
      let [hours, minutes] = time.split(':').map(Number);
      if (period === 'PM' && hours !== 12) hours += 12;
      if (period === 'AM' && hours === 12) hours = 0;
      return hours + minutes / 60;
    };

    const sunriseHour = parseTime(seasonData.sunrise);
    const sunsetHour = parseTime(seasonData.sunset);
    const now = currentTime.getUTCHours() + currentTime.getUTCMinutes() / 60;

    const tz = countryData[country].timezoneId;
    const localNow = new Date().toLocaleString('en-US', { timeZone: tz });
    const localHours = new Date(localNow).getHours();
    const localMinutes = new Date(localNow).getMinutes();
    const localTimeDecimal = localHours + localMinutes / 60;

    if (localTimeDecimal >= sunriseHour && localTimeDecimal < sunsetHour) {
      const dayDuration = sunsetHour - sunriseHour;
      const progress = ((localTimeDecimal - sunriseHour) / dayDuration) * 100;
      return {
        isDay: true,
        progress: Math.min(100, Math.max(0, progress)),
        remaining: `${((sunsetHour - localTimeDecimal) * 10 | 0) / 10} hours of daylight`
      };
    } else {
      const nextSunrise = localTimeDecimal < sunriseHour ? sunriseHour : sunriseHour + 24;
      const progress = ((localTimeDecimal - (localTimeDecimal < sunsetHour ? sunsetHour - 24 : sunsetHour)) / 
                       (nextSunrise - (localTimeDecimal < sunsetHour ? sunsetHour - 24 : sunsetHour))) * 100;

      return {
        isDay: false,
        progress: Math.min(100, Math.max(0, progress)),
        remaining: `${((nextSunrise - localTimeDecimal) * 10 | 0) / 10} hours until sunrise`
      };
    }
  };

  const formatLocalTime = (country) => {
    const tz = countryData[country].timezoneId;
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: tz,
      timeZoneName: 'short'
    }).format(currentTime);
  };

  return (
    <div className={`app-container ${theme}`}>
      <header className="app-header">
        <h1>🌞🌜 Global Day & Night Tracker</h1>
        <p>Track daylight hours and nighttime across the world in real-time</p>
        <div className="controls">
          <div className="theme-toggle">
            <button 
              className={theme === 'day' ? 'active' : ''}
              onClick={() => setTheme('day')}
            >
              Day Mode
            </button>
            <button 
              className={theme === 'night' ? 'active' : ''}
              onClick={() => setTheme('night')}
            >
              Night Mode
            </button>
          </div>
          
        </div>
      </header>

      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSearchResults(e.target.value.length > 0);
            }}
            onFocus={() => setShowSearchResults(searchTerm.length > 0)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>
        
        {showSearchResults && filteredCountries.length > 0 && (
          <div className="search-results">
            {filteredCountries.map(country => (
              <div 
                key={country} 
                className="search-result-item"
                onClick={() => addCountry(country)}
              >
                {country} <span className="capital">{countryData[country].capital}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="dashboard">
        <div className="selected-countries">
          {selectedCountries.map(country => {
            const data = countryData[country];
            const dayNight = calculateDayNightProgress(country);
            const seasonTimes = data.seasons[currentSeason];
            
            return (
              <div 
                key={country} 
                className={`country-card ${dayNight.isDay ? 'day' : 'night'}`}
              >
                <div className="card-header">
                  <h2>{country}</h2>
                  <button 
                    onClick={() => removeCountry(country)}
                    className="close-btn"
                    aria-label={`Remove ${country}`}
                  >
                    ×
                  </button>
                </div>
                
                <div className="card-body">
                  <div className="time-info">
                    <div className="local-time">
                      <span className="label">Local Time:</span>
                      <span className="time">{formatLocalTime(country)}</span>
                    </div>
                    <div className="timezone">
                      <span className="label">Timezone:</span>
                      <span className="value">{data.timezoneId.replace('_', ' ')}</span>
                    </div>
                  </div>
                  
                  <div className="day-night-tracker">
                    <div className="tracker-header">
                      <span className="status">
                        {dayNight.isDay ? '☀️ Daytime' : '🌙 Nighttime'}
                      </span>
                      <span className="remaining">{dayNight.remaining}</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill"
                        style={{ width: `${dayNight.progress}%`, backgroundColor: dayNight.isDay ? '#FFD700' : '#1E90FF' }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="season-times">
                    <h3>{currentSeason.charAt(0).toUpperCase() + currentSeason.slice(1)} Times</h3>
                    <div className="time-pair">
                      <span className="sunrise">🌅 Sunrise: {seasonTimes.sunrise}</span>
                      <span className="sunset">🌇 Sunset: {seasonTimes.sunset}</span>
                    </div>
                  </div>
                </div>
                
                <div className="card-footer">
                  <div className="all-seasons">
                    <h4>All Seasons:</h4>
                    <div className="season-grid">
                      {Object.entries(data.seasons).map(([season, times]) => (
                        <div key={season} className="season-item">
                          <span className="season-name">{season.charAt(0).toUpperCase() + season.slice(1)}</span>
                          <span className="season-times">
                            {times.sunrise} - {times.sunset}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {selectedCountries.length === 0 && (
            <div className="empty-state">
              <p>Search for countries above to start tracking their day/night cycles</p>
              <p>Try searching for "Albania", "Algeria", or "Zimbabwe"</p>
            </div>
          )}
        </div>
      </div>
      
      <footer className="app-footer">
        <p>Compare up to 12 countries at once</p>
        <p>Current season: {currentSeason.charAt(0).toUpperCase() + currentSeason.slice(1)} (based on your local time)</p>
      </footer>
    </div>
  );
};

export default DayNightTracker;