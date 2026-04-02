import { StaticImageData } from "next/image";

// 1. STATIC IMPORTS
import gasBoilerImg from "../assets/gas-fired-boiler.png";
import vacuumTableImg from "../assets/vacuum-table.png";
import boilerImg from "../assets/boiler.jpg";
import buckVacuumImg from "../assets/buck-vacuum-table.jpg";
import curingImg from "../assets/curing-machine.jpg";
import dieselBoilerImg from "../assets/diesel-fired-boiler.jpg";
import fusingImg from "../assets/fusing-machine.jpg";
import inbuiltImg from "../assets/inbuilt-boiler-vacuum-table.jpg";
import washingImg from "../assets/industrial-heavy-duty-washing-machine.jpg";
import reversingImg from "../assets/jeans-reversing-machine.jpg";
import pressingImg from "../assets/pressing-table.jpg";
import steamIronImg from "../assets/steam-iron.jpg";
import threadSuckingImg from "../assets/thread-sucking-machine.jpg";
import topperImg from "../assets/trouser-topper-machine.jpg";
import bottleIronImg from "../assets/bottle-iron.jpg";

export interface Product {
  id: string;
  name: string;
  category: "Steam Generation" | "Finishing" | "Specialized" | "Laundry";
  description: string;
  image: StaticImageData;
  specs: { label: string; value: string }[];
  altNames?: string[]; // Added for SEO targeting
}

export const products: Product[] = [
  {
    id: "gas-fired-boiler",
    name: "Gas Fired Boiler",
    category: "Steam Generation",
    description:
      "High-capacity gas-powered steam generation for large scale plants.",
    image: gasBoilerImg,
    altNames: [
      "Industrial Steam Generator",
      "Natural Gas Boiler",
      "Factory Boiler",
    ],
    specs: [
      { label: "Fuel", value: "Natural Gas" },
      { label: "Output", value: "High" },
    ],
  },
  {
    id: "bottle-iron",
    name: "Gravity Feed Bottle Iron",
    category: "Finishing",
    description:
      "Independent gravity-feed steam iron featuring a high-capacity water bottle for continuous, portable factory use.",
    image: bottleIronImg,
    altNames: [
      "Gravity Iron",
      "Dhobi Iron",
      "Bottle Iron",
      "Portable Steam Iron",
    ],
    specs: [
      { label: "Voltage", value: "220V" },
      { label: "Tank", value: "4.0L" },
      { label: "Power", value: "1000W" },
    ],
  },
  {
    id: "vacuum-table",
    name: "Standard Vacuum Table",
    category: "Finishing",
    description:
      "Essential suction table for precise garment shaping and drying.",
    image: vacuumTableImg,
    altNames: ["Suction Table", "Ironing Table", "Vacuum Board"],
    specs: [
      { label: "Motor", value: "0.55kW" },
      { label: "Type", value: "Standard" },
    ],
  },
  {
    id: "electric-boiler",
    name: "Electric Steam Boiler",
    category: "Steam Generation",
    description:
      "Automatic electric boiler perfect for targeted steam point-of-use.",
    image: boilerImg,
    altNames: [
      "Automatic Boiler",
      "Electric Steam Generator",
      "Point of Use Boiler",
    ],
    specs: [
      { label: "Power", value: "18kW" },
      { label: "Pressure", value: "0.4 Mpa" },
    ],
  },
  {
    id: "diesel-fired-boiler",
    name: "Diesel Fired Boiler",
    category: "Steam Generation",
    description:
      "Rugged diesel-powered boiler for areas without gas line access.",
    image: dieselBoilerImg,
    altNames: [
      "Oil Fired Boiler",
      "Diesel Steam Generator",
      "Heavy Duty Boiler",
    ],
    specs: [
      { label: "Fuel", value: "Diesel" },
      { label: "Ignition", value: "Auto" },
    ],
  },
  {
    id: "steam-iron",
    name: "Industrial Steam Iron",
    category: "Finishing",
    description: "Ergonomic steam iron for all-day professional factory use.",
    image: steamIronImg,
    altNames: ["All-steam Iron", "Factory Iron", "Professional Pressing Iron"],
    specs: [
      { label: "Weight", value: "2.1kg" },
      { label: "Soleplate", value: "Hard Anodized" },
    ],
  },
  {
    id: "inbuilt-boiler-vacuum",
    name: "Inbuilt Boiler Vacuum Table",
    category: "Finishing",
    description: "All-in-one workstation with integrated steam and suction.",
    image: inbuiltImg,
    altNames: [
      "Integrated Ironing Station",
      "Boiler Table Combo",
      "Compact Workstation",
    ],
    specs: [
      { label: "Boiler", value: "3.5L" },
      { label: "Design", value: "Compact" },
    ],
  },
  // ... apply similar altNames to the remaining products as needed
];
