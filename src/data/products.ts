import { StaticImageData } from "next/image";

// STATIC IMPORTS
import gasBoilerImg from "../assets/gas-fired-boiler.png";
import vacuumTableImg from "../assets/vacuum-table.png";
import boilerImg from "../assets/boiler.jpg";
import stainremovingimg from "../assets/stain-removing-machine.jpg";
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
import buckVacuumTableImg from "../assets/Buck-vacuum-table.png";

export type ProductCategory =
  | "Steam Generation"
  | "Finishing"
  | "Specialized"
  | "Laundry";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
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
      "Heavy-duty steam generator featuring a reinforced MS body and a high-pressure pump system. Engineered for eco-friendly performance with dual-fuel compatibility for both Diesel and Natural Gas.",
    image: gasBoilerImg,
    specs: [
      { label: "Construction", value: "MS Body" },
      { label: "Pump Type", value: "High Pressure" },
      { label: "Fuel Type", value: "Diesel / Natural Gas" },
      { label: "Efficiency", value: "Eco-Friendly Design" },
    ],
  },
  {
    id: "bottle-iron",
    name: "Gravity Feed Bottle Iron",
    category: "Finishing",
    description:
      "Independent gravity-feed steam iron featuring a high-capacity water bottle for continuous, portable factory use.",
    image: bottleIronImg,
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
      "High-performance industrial finishing station featuring a powerful 1HP suction motor and a 1kW integrated heating coil for rapid moisture removal. Designed with an adjustable height frame for ergonomic operator use.",
    image: vacuumTableImg,
    specs: [
      { label: "Suction Motor", value: "1HP High-Output" },
      { label: "Heating Coil", value: "1kW Thermal Power" },
      { label: "Ergonomics", value: "Adjustable Height" },
      { label: "Build", value: "Industrial Grade" },
    ],
  },
  {
    id: "electric-boiler",
    name: "Electric Steam Boiler",
    category: "Steam Generation",
    description:
      "Fully automatic electric boiler engineered with a high-grade SS 304 basin for maximum corrosion resistance and a durable MS structure. Features a professional high-quality powder coating and industry-standard electric and electronic components for precision control.",
    image: boilerImg,
    specs: [
      { label: "Capacity Range", value: "3kW to 9kW" },
      { label: "Basin Material", value: "SS 304 Grade" },
      { label: "Frame / Structure", value: "MS with Powder Coating" },
      { label: "Electronics", value: "Standard Industrial Components" },
    ],
  },
  {
    id: "stainremovingmachine",
    name: "Stain Removing Machine",
    category: "Finishing",
    description:
      "A fully automatic stain removal station constructed from high-grade SS and MS materials for maximum durability. Features imported high-quality air and chemical guns for precision spot cleaning, powered by a robust 1HP suction motor.",
    image: stainremovingimg,
    specs: [
      { label: "Operation", value: "Fully Automatic" },
      { label: "Material", value: "SS and MS Construction" },
      { label: "Suction Motor", value: "1HP High-Power" },
      { label: "Gun Kit", value: "Imported Air & Chemical Guns" },
    ],
  },
  {
    id: "curing-machine",
    name: "Industrial Curing Machine",
    category: "Specialized",
    description:
      "Heavy-duty heating chamber used to set chemicals and permanent press finishes into garments.",
    image: curingImg,
    specs: [
      { label: "Control", value: "Digital Temperature" },
      { label: "Heating", value: "High-Efficiency" },
      { label: "Airflow", value: "Uniform Circulation" },
      { label: "Operation", value: "Conveyor System" },
    ],
  },
  {
    id: "diesel-fired-boiler",
    name: "Diesel Fired Boiler",
    category: "Steam Generation",
    description:
      "Reliable diesel-powered steam generator designed for industrial use where gas lines are not available.",
    image: dieselBoilerImg,
    specs: [
      { label: "Fuel System", value: "Diesel/Light Oil" },
      { label: "Operation", value: "Fully Automatic" },
      { label: "Safety", value: "Over-Pressure Cutoff" },
      { label: "Build", value: "Heavy-Duty Carbon Steel" },
    ],
  },
  {
    id: "fusing-machine",
    name: "Conveyor Fusing Machine",
    category: "Specialized",
    description:
      "A high-precision continuous fusing system designed for interlinings. This unit is fully customizable in size and configuration to match your specific factory floor layout and production volume.",
    image: fusingImg,
    specs: [
      { label: "Sizing", value: "Fully Customizable" },
      { label: "Configuration", value: "Bespoke Build" },
      { label: "Control", value: "Precision Temp & Pressure" },
      { label: "Operation", value: "Continuous Conveyor" },
    ],
  },
  {
    id: "inbuilt-boiler-vacuum",
    name: "Inbuilt Boiler Vacuum Table",
    category: "Finishing",
    description:
      "A professional-grade, fully automatic all-in-one workstation. Built with a high-quality MS frame and a corrosion-resistant SS 304 basin, this unit features premium SS 304/316 grade heaters and top-tier industrial electronic components for reliable, continuous performance.",
    image: inbuiltImg,
    specs: [
      { label: "Boiler Capacity", value: "3kW to 6kW" },
      { label: "Basin Material", value: "SS 304 Grade" },
      { label: "Heater Material", value: "SS 304 / 316 Grade" },
      { label: "Operation", value: "Fully Automatic" },
      { label: "Build Material", value: "High-Quality MS" },
    ],
  },
  {
    id: "industrial-washing-machine",
    name: "Heavy-Duty Washing Machine",
    category: "Laundry",
    description:
      "High-capacity industrial washer designed for bulk garment processing and heavy-duty fabric treatments.",
    image: washingImg,
    specs: [
      { label: "Drum", value: "304 Stainless Steel" },
      { label: "Motor", value: "High-Torque Drive" },
      { label: "Control", value: "Microprocessor-Based" },
      { label: "Load", value: "Large Diameter Door" },
    ],
  },
  {
    id: "jeans-reversing-machine",
    name: "Jeans Reversing Machine",
    category: "Specialized",
    description:
      "High-speed pneumatic system for turning denim garments inside-out to assist in final finishing and quality checks.",
    image: reversingImg,
    specs: [
      { label: "Operation", value: "Pneumatic Air-Flow" },
      { label: "Control", value: "Foot Pedal Toggle" },
      { label: "Feature", value: "Quick-Turn Nozzle" },
      { label: "Cycle", value: "High-Frequency" },
    ],
  },
  {
    id: "pressing-table",
    name: "Industrial Pressing Table",
    category: "Finishing",
    description:
      "Heavy-duty flat-bed pressing station designed for high-efficiency ironing of linens and large garment panels.",
    image: pressingImg,
    specs: [
      { label: "Work Surface", value: "Heat-Resistant Padded" },
      { label: "Heating", value: "Uniform Under-Plate" },
      { label: "Control", value: "Adjustable Thermostat" },
      { label: "Frame", value: "Reinforced Industrial Steel" },
    ],
  },
  {
    id: "steam-iron",
    name: "Industrial Steam Iron",
    category: "Finishing",
    description:
      "A premium, high-performance industrial steam iron imported directly from Italy. Engineered for continuous 24/7 factory operations, this heavy-duty unit features superior steam distribution and the reliability of authentic Italian manufacturing.",
    image: steamIronImg,
    specs: [
      { label: "Model Number", value: "2128" },
      { label: "Origin", value: "Made in Italy" },
      { label: "Type", value: "Imported Professional Grade" },
      { label: "Durability", value: "24/7 Factory Operations" },
    ],
  },
  {
    id: "thread-sucking-machine",
    name: "Thread Sucking Machine",
    category: "Specialized",
    description:
      "A high-power industrial suction system designed for the efficient removal of loose threads and lint post-production. This fully automatic unit is engineered for heavy-duty finishing, ensuring garments are pristine and export-ready.",
    image: threadSuckingImg,
    specs: [
      { label: "Suction Motor", value: "5HP High-Performance" },
      { label: "Power Phase", value: "3-Phase Industrial" },
      { label: "Operation", value: "Fully Automatic" },
      { label: "Function", value: "Loose Thread & Lint Removal" },
    ],
  },
  {
    id: "trouser-topper-machine",
    name: "Trouser Topper Machine",
    category: "Finishing",
    description:
      "Specialized steaming and shaping station for the perfect finish on trouser waistbands and hip areas.",
    image: topperImg,
    specs: [
      { label: "Control", value: "Pneumatic Auto-Timer" },
      { label: "Tension", value: "Adjustable Waist-Stretch" },
      { label: "Steam", value: "High-Pressure Injection" },
      { label: "System", value: "Central Steam Connect" },
    ],
  },
  {
    id: "buck-vacuum-table",
    name: "Buck Vacuum Table",
    category: "Finishing",
    description:
      "Industrial ironing station with powerful under-table suction and a specialized buck for precise sleeve and shoulder shaping.",
    image: buckVacuumTableImg,
    specs: [
      { label: "Suction", value: "High-Volume Vacuum" },
      { label: "Surface", value: "Heat-Resistant Padding" },
      { label: "Operation", value: "Foot Pedal Control" },
      { label: "Utility", value: "Built-in Swivel Buck" },
    ],
  },
];
