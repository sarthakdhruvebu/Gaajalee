export interface SignatureDish {
  name: string;
  desc: string;
  price: string;
  note: string;
  bestseller?: boolean;
}

export interface Outlet {
  name: string;
  area: string;
  address: string;
  phone: string;
  tel: string;
  hoursLabel: string;
  mapsUrl: string;
  openLunch: string;
  closeLunch: string;
  openDinner: string;
  closeDinner: string;
}

export const SIGNATURES: SignatureDish[] = [
  {
    name: "Crab Masala",
    desc: "Sweet crab meat swimming in the house Malvani masala.",
    price: "₹___",
    note: "The one that made the queues",
    bestseller: true,
  },
  {
    name: "Bombil Fry",
    desc: "Crisp Bombay duck — light, golden, unmistakably Mumbai.",
    price: "₹___",
    note: "A city classic",
    bestseller: true,
  },
  {
    name: "Surmai Fry",
    desc: "Firm kingfish steaks, lightly spiced and fried to the edge.",
    price: "₹___",
    note: "Catch of the day energy",
  },
  {
    name: "Pomfret Tawa Fry",
    desc: "Whole pomfret on the tawa with coastal masala.",
    price: "₹___",
    note: "Share it, fight over it",
  },
  {
    name: "Prawns Gassi",
    desc: "Coconut-rich curry with plump prawns.",
    price: "₹___",
    note: "Sop every drop",
  },
  {
    name: "Kolambi Koliwada",
    desc: "Crispy prawns with that sharp Koliwada kick.",
    price: "₹___",
    note: "Order two plates",
    bestseller: true,
  },
  {
    name: "Malvani Fish Thali",
    desc: "Fry, curry, rice, and a cool glass of sol kadhi.",
    price: "₹___",
    note: "The full coastal plate",
  },
  {
    name: "Sol Kadhi",
    desc: "Kokum and coconut — the meal’s quiet finishing note.",
    price: "₹___",
    note: "Sip, reset, smile",
  },
];

export const OUTLETS: Outlet[] = [
  {
    name: "Vile Parle East",
    area: "The original",
    address:
      "Kadamgiri Complex, Hanuman Road, next to ICICI Bank, Vile Parle East, Mumbai 400057",
    phone: "022 2616 6470",
    tel: "+912226166470",
    hoursLabel: "11:30 AM – 3:30 PM · 7:00 PM – 11:30 PM",
    mapsUrl:
      "https://maps.google.com/?q=Gajalee+Kadamgiri+Complex+Hanuman+Road+Vile+Parle+East",
    openLunch: "11:30",
    closeLunch: "15:30",
    openDinner: "19:00",
    closeDinner: "23:30",
  },
  {
    name: "Andheri East",
    area: "MIDC kitchen",
    address:
      "E/3, Udyog Sadan No. 2, Opp. ESIC Hospital, MIDC, Andheri East, Mumbai 400093",
    phone: "022 2822 7272",
    tel: "+912228227272",
    hoursLabel: "11:30 AM – 3:30 PM · 7:00 PM – 11:30 PM",
    mapsUrl: "https://maps.google.com/?q=Gajalee+Udyog+Sadan+MIDC+Andheri+East",
    openLunch: "11:30",
    closeLunch: "15:30",
    openDinner: "19:00",
    closeDinner: "23:30",
  },
  {
    name: "Seven Bungalows",
    area: "Andheri West",
    address:
      "Shop No. 1–3, Ground Floor, Akshay Villa, J.P. Road, Seven Bungalows, Andheri West, Mumbai 400061",
    phone: "022 2634 1614",
    tel: "+912226341614",
    hoursLabel: "11:30 AM – 3:30 PM · 7:00 PM – 11:30 PM",
    mapsUrl:
      "https://maps.google.com/?q=Gajalee+Akshay+Villa+Seven+Bungalows+Andheri+West",
    openLunch: "11:30",
    closeLunch: "15:30",
    openDinner: "19:00",
    closeDinner: "23:30",
  },
];
