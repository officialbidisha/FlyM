export const destinations = [
  { name: "Delhi" },
  { name: "Mumbai" },
  { name: "Bengaluru" },
  { name: "Hyderabad" },
  { name: "Chennai" },
  { name: "Kolkata" },
  { name: "Pune" },
  { name: "Goa" },
  { name: "Jaipur" },
  { name: "Ahmedabad" },
];

const airlines = ["Indigo", "Spicejet", "Go First", "Air Asia", "Vistara"];
const types = ["Non Stop", "1 Stop"];

export const generateFlights = (to, from, date) => {
  return airlines.map((airline, i) => ({
    id: `${airline}-${i}`,
    airline,
    from,
    to,
    date,
    arrival: `${10 + i}:${i % 2 === 0 ? "00" : "30"} ${i < 4 ? "AM" : "PM"}`,
    duration: `${2 + (i % 3)}h ${(i * 15) % 60}m`,
    type: types[i % types.length],
    price: 3000 + i * 750,
  }));
};
