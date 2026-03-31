export interface Product {
  id: string;
  name: string;
  category: "Steam Generation" | "Finishing" | "Cutting";
  description: string;
  image: string;
  specs: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: "electric-boiler-01",
    name: "LDC-P1 Electric Steam Boiler",
    category: "Steam Generation",
    description:
      "High-efficiency automatic electric steam generator for garment pressing.",
    image: "/images/boiler.jpg", // Placeholder for now
    specs: [
      { label: "Power", value: "18kW" },
      { label: "Pressure", value: "0.4 Mpa" },
      { label: "Steam Output", value: "25kg/h" },
    ],
  },
  {
    id: "vacuum-table-02",
    name: "Pro-Suction Vacuum Table",
    category: "Finishing",
    description:
      "Industrial strength suction for wrinkle-free finishing on all fabrics.",
    image: "/images/vacuum-table.jpg",
    specs: [
      { label: "Motor", value: "0.55kW" },
      { label: "Surface", value: "1200 x 800mm" },
    ],
  },
];
