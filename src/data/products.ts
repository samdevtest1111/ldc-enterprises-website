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

export interface Product {
  id: string;
  name: string;
  category: "Steam Generation" | "Finishing" | "Specialized" | "Laundry";
  description: string;
  image: StaticImageData;
  specs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: "gas-fired-boiler",
    name: "Gas Fired Boiler",
    category: "Steam Generation",
    description:
      "High-capacity gas-powered steam generation for large scale plants.",
    image: gasBoilerImg,
    specs: [
      { label: "Fuel", value: "Natural Gas" },
      { label: "Output", value: "High" },
    ],
  },
  {
    id: "vacuum-table",
    name: "Standard Vacuum Table",
    category: "Finishing",
    description:
      "Essential suction table for precise garment shaping and drying.",
    image: vacuumTableImg,
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
    specs: [
      { label: "Power", value: "18kW" },
      { label: "Pressure", value: "0.4 Mpa" },
    ],
  },

  {
    id: "buck-vacuum-table",
    name: "Buck Vacuum Table",
    category: "Finishing",
    description:
      "Contoured buck surface for professional trouser and sleeve finishing.",
    image: buckVacuumImg,
    specs: [
      { label: "Shape", value: "Utility Buck" },
      { label: "Suction", value: "Dual" },
    ],
  },
  {
    id: "curing-machine",
    name: "Industrial Curing Machine",
    category: "Specialized",
    description:
      "High-heat curing chamber for permanent press and chemical setting.",
    image: curingImg,
    specs: [
      { label: "Heat", value: "Electric/Gas" },
      { label: "Speed", value: "Variable" },
    ],
  },
  {
    id: "diesel-fired-boiler",
    name: "Diesel Fired Boiler",
    category: "Steam Generation",
    description:
      "Rugged diesel-powered boiler for areas without gas line access.",
    image: dieselBoilerImg,
    specs: [
      { label: "Fuel", value: "Diesel" },
      { label: "Ignition", value: "Auto" },
    ],
  },
  {
    id: "fusing-machine",
    name: "Conveyor Fusing Machine",
    category: "Specialized",
    description:
      "Continuous fusing for interlinings with precise pressure control.",
    image: fusingImg,
    specs: [
      { label: "Width", value: "600mm" },
      { label: "Pressure", value: "0.5 Mpa" },
    ],
  },
  {
    id: "inbuilt-boiler-vacuum",
    name: "Inbuilt Boiler Vacuum Table",
    category: "Finishing",
    description: "All-in-one workstation with integrated steam and suction.",
    image: inbuiltImg,
    specs: [
      { label: "Boiler", value: "3.5L" },
      { label: "Design", value: "Compact" },
    ],
  },
  {
    id: "industrial-washing-machine",
    name: "Heavy-Duty Washing Machine",
    category: "Laundry",
    description: "Massive load capacity for pre-wash and garment treatment.",
    image: washingImg,
    specs: [
      { label: "Capacity", value: "50kg+" },
      { label: "Drum", value: "Stainless" },
    ],
  },
  {
    id: "jeans-reversing-machine",
    name: "Jeans Reversing Machine",
    category: "Specialized",
    description: "High-speed pneumatic system for turning denim garments.",
    image: reversingImg,
    specs: [
      { label: "Air", value: "6 Bar" },
      { label: "Cycle", value: "2s" },
    ],
  },
  {
    id: "pressing-table",
    name: "Industrial Pressing Table",
    category: "Finishing",
    description: "Wide-surface table designed for bulk flat-work pressing.",
    image: pressingImg,
    specs: [
      { label: "Surface", value: "Rectangular" },
      { label: "Heat", value: "Electric" },
    ],
  },
  {
    id: "steam-iron",
    name: "Industrial Steam Iron",
    category: "Finishing",
    description: "Ergonomic steam iron for all-day professional factory use.",
    image: steamIronImg,
    specs: [
      { label: "Weight", value: "2.1kg" },
      { label: "Soleplate", value: "Hard Anodized" },
    ],
  },
  {
    id: "thread-sucking-machine",
    name: "Thread Sucking Machine",
    category: "Specialized",
    description:
      "Powerful vacuum system for removing loose threads after sewing.",
    image: threadSuckingImg,
    specs: [
      { label: "Motor", value: "High-RPM" },
      { label: "Bin", value: "Large" },
    ],
  },
  {
    id: "trouser-topper-machine",
    name: "Trouser Topper Machine",
    category: "Finishing",
    description:
      "Automated steaming and shaping for the waist area of trousers.",
    image: topperImg,
    specs: [
      { label: "Cycle", value: "Auto" },
      { label: "Steam", value: "Centralized" },
    ],
  },
];
