// Vehicle data
document.getElementById("load-more").addEventListener("click", () => {
  currentPage++;
  renderVehicles();
});
const vehicles = [
  {
    id: 17,
    name: "2024 Toyota Coaster LX",
    price: "$36,900",
    image:
      "https://www.toyota.com.au/-/media/images/vehicles/coaster/coaster-bus/coaster-lx-white.png",
    features: ["2.8L Turbo Diesel", "22 Seats", "Automatic Sliding Door"],
    description:
      "High-end Coaster designed for comfort and long-distance travel.",
    specs: {
      chassis: "Toyota Coaster",
      engine: "2.8L 4-Cylinder Turbo Diesel",
      transmission: "6-Speed Automatic",
      seating: "22 Adults",
      suspension: "Air Suspension Rear",
      airConditioning: "High-Capacity Roof-Mounted A/C",
    },
  },
  {
    id: 6,
    name: "2024 Toyota Coaster LX",
    price: "$32,500",
    image:
      "https://i.pinimg.com/1200x/0c/c3/2c/0cc32c4e3916e8ac4c5d439f623a5461.jpg",
    images: [
      "https://i.pinimg.com/1200x/0c/c3/2c/0cc32c4e3916e8ac4c5d439f623a5461.jpg",
      "https://i.pinimg.com/736x/42/36/53/4236530b8774c8ae3211ce9fab2c1449.jpg",
    ],
    features: ["2.8L Turbo Diesel", "18 Seats", "Air Suspension"],
    description:
      "Reliable mid-size bus perfect for city and intercity routes, featuring comfortable seating and smooth ride quality.",
    specs: {
      chassis: "Toyota Coaster",
      engine: "2.8L 4-Cylinder Turbo Diesel",
      transmission: "6-Speed Automatic",
      seating: "18 Adults",
      suspension: "Front: Coil / Rear: Air",
      airConditioning: "Roof-Mounted Package",
    },
  },
  {
    id: 7,
    name: "2024 Toyota Hiace Commuter GL",
    price: "$25,200",
    image:
      "https://i.pinimg.com/1200x/85/7c/e0/857ce098c12068221e3e09dc5e14e3ff.jpg",
    features: ["3.0L Turbo Diesel", "15 Seats", "High Roof"],
    description:
      "Spacious and versatile commuter van, optimized for passenger comfort with generous headroom and durable interiors.",
    specs: {
      chassis: "Toyota Hiace Commuter",
      engine: "1GD-FTV 3.0L Turbo Diesel",
      transmission: "6-Speed Manual",
      seating: "15 Adults",
      roof: "High-Roof Configuration",
      safety: "ABS, EBD, Dual Airbags",
    },
  },
  {
    id: 8,
    name: "2023 Nissan Civilian DX",
    price: "$38,900",
    image:
      "https://image-cdn.beforward.jp/large/202201/2735324/BK238019_f79116.JPG",
    features: ["140 hp Diesel", "21 Seats", "Electric Sliding Door"],
    description:
      "Compact city bus built on Nissan’s proven chassis, featuring easy boarding and efficient fuel economy.",
    specs: {
      chassis: "Nissan Civilian",
      engine: "YD25 2.5L Turbo Diesel",
      transmission: "5-Speed Automatic",
      seating: "21 Adults",
      doors: "Electric Sliding",
      airConditioning: "Roof-Mounted Condenser",
    },
  },
  {
    id: 9,
    name: "2024 Mercedes-Benz Sprinter Passenger 516 CDI",
    price: "$32,300",
    image:
      "https://img.linemedia.com/img/s/passenger-van-Mercedes-Benz-Sprinter-516-CDI-School-bus-23-seats-automatic---1729857344117559128_common--24102514503057305700.jpg",
    features: ["519 hp Turbo Diesel", "19 Seats", "Adaptive ESP"],
    description:
      "Premium passenger van with advanced safety systems and flexible seating, ideal for executive transport.",
    specs: {
      chassis: "Sprinter 516 CDI",
      engine: "2.1L 4-Cylinder Turbo Diesel",
      transmission: "7G-Tronic Automatic",
      seating: "19 Adults",
      safety: "Adaptive ESP, Crosswind Assist",
      interior: "Leather-Finish Seats",
    },
  },
  {
    id: 10,
    name: "2024 Toyota Coaster Super Custom",
    price: "$28,750",
    image:
      "https://gsat.jp/wp-content/uploads/2024/08/2024-Toyota-coaster-Long-GX-25-seater-Cold-weather-specification34-798x466.jpg",
    features: ["2.8L Diesel", "23 Seats", "Luxury Interior"],
    description:
      "High-spec Coaster with premium upholstery, LED lighting, and USB charging ports at every seat.",
    specs: {
      chassis: "Coaster Super Custom",
      engine: "2.8L 4-Cylinder Turbo Diesel",
      transmission: "6-Speed Automatic",
      seating: "23 Adults",
      interior: "Leatherette, LED Lighting",
      tech: "Individual USB Ports",
    },
  },
  {
    id: 11,
    name: "2024 Mitsubishi Rosa Deluxe",
    price: "$25,800",
    image:
      "https://steerwellauto.com/wp-content/uploads/2024/09/1-4-1024x720.jpg",
    features: ["2.9L Diesel", "25 Seats", "Rear Luggage Compartment"],
    description:
      "Spacious 25-seat bus with generous luggage space and robust build for long-distance travel.",
    specs: {
      chassis: "Mitsubishi Rosa",
      engine: "4D34-2AT5 2.9L Turbo Diesel",
      transmission: "5-Speed Manual",
      seating: "25 Adults",
      luggage: "Rear Compartment 1.2m³",
      suspension: "Leaf Spring",
    },
  },
  {
    id: 12,
    name: "2023 Iveco Daily Minibus",
    price: "$39,900",
    image:
      "https://bluesky-cogcms.cdn.imgeng.in/media/2kpnlgot/daily-minibus.jpg",
    features: ["170 hp Diesel", "16 Seats", "Low-Floor Access"],
    description:
      "Versatile minibus with low-floor design for easy boarding, ideal for shuttle and airport services.",
    specs: {
      chassis: "Iveco Daily",
      engine: "3.0L 4-Cylinder Turbo Diesel",
      transmission: "6-Speed Manual",
      seating: "16 Adults",
      access: "Low-Floor",
      doors: "Wide Sliding Door",
    },
  },
  {
    id: 13,
    name: "2024 Toyota Hiace Grand Cabin",
    price: "$18,300",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLCDl92NKnmYhv6NjL1IEsdzfXetvKZu0hkA&s",
    features: ["2.8L Turbo Diesel", "13 Seats", "Executive Layout"],
    description:
      "Executive-style Hiace with captain chairs, woodgrain trim, and tinted privacy glass.",
    specs: {
      chassis: "Hiace Grand Cabin",
      engine: "1GD-FTV 2.8L Turbo Diesel",
      transmission: "6-Speed Automatic",
      seating: "13 Adults",
      interior: "Captain Chairs, Woodgrain",
      safety: "Rear Parking Sensors",
    },
  },
  {
    id: 14,
    name: "2024 Toyota Coaster Eco Express",
    price: "$20,200",
    image: "https://casauto.com/wp-content/uploads/2024/09/IMG_3597.jpg",
    features: ["2.8L Diesel", "20 Seats", "Fuel-Efficient Tuning"],
    description:
      "Eco-tuned Coaster with enhanced fuel management systems and lightweight body panels.",
    specs: {
      chassis: "Coaster Eco Express",
      engine: "2.8L 4-Cylinder Turbo Diesel",
      transmission: "6-Speed Manual",
      seating: "20 Adults",
      eco: "Low-Resistance Tires",
      weightReduction: "Aluminum Panels",
    },
  },
  {
    id: 15,
    name: "2024 Toyota Hiace Super Commuter",
    price: "$26,800",
    image:
      "https://gsat.jp/wp-content/uploads/2023/04/2023-Toyota-hiace-commuter-Super-long-GL-New-9.jpg",
    features: ["3.0L Diesel", "15 Seats", "Premium Suspension"],
    description:
      "Super-commuter with upgraded shocks, noise insulation, and USB charging at every row.",
    specs: {
      chassis: "Hiace Super Commuter",
      engine: "1GD-FTV 3.0L Turbo Diesel",
      transmission: "6-Speed Automatic",
      seating: "15 Adults",
      suspension: "Premium Gas Shocks",
      comfort: "Acoustic Insulation",
    },
  },
  {
    id: 1,
    name: "2025 Winnebago Revel 44N AWD",
    price: "$69,995",
    image:
      "https://cdn-media.tilabs.io/v1/media/67fd46a89521656751518ca5.jpg?width=1024&height=768&quality=70&upsize=true", // Replace with an actual image of the RV if available
    features: ["4.1 kWh Lithium", "215W Solar", "2.0L Turbo Diesel"],
    description:
      "Built on a Mercedes AWD Sprinter chassis with premium lithium power, solar, wet bath, and flexible living space. Only 4K miles – dealer demo.",
    specs: {
      engine: "2.0L Turbo Diesel",
      transmission: "9-Speed Automatic",
      battery: "4.1 kWh Lithium",
      solar: "215 Watts",
      inverter: "2,000 Watts",
      seating: "Up to 4 Adults",
    },
  },

  {
    id: 2,
    name: "2024 Winnebago ROAM",
    price: "$50,995",
    image:
      "https://i.pinimg.com/1200x/a2/3a/0a/a23a0abfb2f3c9650207ff3f97b4a200.jpg",
    features: ["Accessible RV", "Flex Bed System", "3.6kWh Lithium Battery"],
    description:
      "The Winnebago ROAM combines accessibility, comfort, and freedom in a compact Class B RV built on the Ram ProMaster chassis. Ideal for city exploring or cross-country travel.",
    specs: {
      chassis: "RAM ProMaster 3500",
      engine: "3.6L V6 Gas",
      battery: "3.6 kWh Lithium",
      seating: "Up to 4 Adults",
      bed: "Flex Bed System",
      accessibility: "Wheelchair Lift + Accessible Wet Bath",
    },
  },
  {
    id: 4,
    name: "2025 OGV Luxury Coach V-CRUISE 10OBA",
    price: "$150,400",
    image:
      "https://cdn-media.tilabs.io/v1/media/6723dbde288d7c4b3c37d393.jpg?width=1024&height=768&quality=70&upsize=true",
    features: [
      "Luxury Interior",
      "Full-Sized Bathroom",
      "Automated Smart Controls",
    ],
    description:
      "The 2025 OGV V-CRUISE 10OBA offers a true luxury living experience on wheels, blending elegance, comfort, and technology in a premium motorcoach built for elite travel.",
    specs: {
      chassis: "Freightliner XC-Series",
      engine: "Cummins ISL 8.9L Turbo Diesel",
      transmission: "Allison 3000 MH 6-Speed Automatic",
      battery: "10 kWh Lithium System",
      solar: "600 Watts",
      seating: "Up to 6 Adults",
      bathroom: "Full-Size Residential with Rain Shower",
      features: "Hydraulic Slides, Theater Seating, Smart Home Integration",
    },
  },

  {
    id: 4,
    name: "2018 Airstream Interstate Grand Tour EXT 3500",
    price: "$159,000",
    image:
      "https://cdn-media.tilabs.io/v1/media/67d05f8ed94b74730177f5ff.jpg?width=1024&height=768&quality=70&upsize=true",
    features: [
      "Mercedes-Benz Diesel",
      "Extended Interior Space",
      "Premium Galley",
    ],
    description:
      "The 2018 Airstream Interstate Grand Tour EXT 3500 is the perfect balance of performance and luxury. Built on the Mercedes-Benz Sprinter chassis, it's ideal for long-range travel with high-end comfort and craftsmanship.",
    specs: {
      chassis: "Mercedes-Benz Sprinter 3500 EXT",
      engine: "3.0L V6 Turbo Diesel",
      transmission: "5-Speed Automatic",
      battery: "2.5 kWh AGM Battery System",
      solar: "300 Watts",
      seating: "Up to 2 Adults",
      bed: "Power Sofa Converts to Bed",
      kitchen: "Corian Countertops, Microwave, 2-Burner Stove",
      bathroom: "Wet Bath with Toilet, Sink & Shower",
    },
  },
  {
    id: 5,
    name: "2021 Airstream Interstate 24GL",
    price: "$89,000",
    image:
      "https://cdn-media.tilabs.io/v1/media/6871370eec29860fcc4f99ff.jpg?width=1024&height=768&quality=70&upsize=true",
    features: [
      "Up to 9 Passengers",
      "Mercedes-Benz Sprinter",
      "Luxurious Touring Coach",
    ],
    description:
      "The 2021 Airstream Interstate 24GL is a luxury Class B motorhome built on a Mercedes-Benz Sprinter chassis, offering top-tier comfort, safety features, and entertainment systems — perfect for both travel and tailgating.",
    specs: {
      chassis: "Mercedes-Benz Sprinter 3500 EXT",
      engine: "3.0L V6 Turbo Diesel",
      transmission: "7-Speed Automatic",
      battery: "Advanced Lithium System",
      solar: "300 Watts",
      seating: "Up to 9 Adults",
      bed: "Convertible Rear Sofa Bed",
      kitchen: "Microwave, 2-Burner Gas Stove, Sink",
      bathroom: "Wet Bath with Shower, Sink, Toilet",
    },
  },
  {
    id: 7,
    name: "2026 Thor Motor Coach TIBURON 24XL",
    price: "$169,950",
    image:
      "https://cdn-media.tilabs.io/v1/media/687137320435447ce06d2de3.jpg?width=1024&height=768&quality=70&upsize=true",
    features: [
      "All-Wheel Drive",
      "Mercedes-Benz Turbo Diesel",
      "Slide-Out Full Wall",
    ],
    description:
      "The 2026 Thor Tiburon 24XL combines elegant design with Mercedes-Benz performance. This compact luxury Class C RV includes a full wall slide-out, diesel efficiency, and premium living space with modern tech.",
    specs: {
      chassis: "Mercedes-Benz Sprinter AWD",
      engine: "3.0L V6 Turbo Diesel",
      transmission: "7-Speed Automatic",
      slideout: "Full Wall Slide",
      battery: "Lithium House Battery",
      solar: "100 Watts",
      seating: "4 Adults",
      bed: "Queen Murphy Bed",
      kitchen: "Two-Burner Gas Cooktop, Convection Microwave, Fridge",
      bathroom: "Rear Wet Bath with Shower and Vanity",
    },
  },
  {
    id: 7,
    name: "2026 Winnebago REVEL SPORT 44C - ATH EDITION",
    price: "$174,500",
    image:
      "https://cdn-media.tilabs.io/v1/media/6883c74d5022c8703f29c4be.jpg?width=1024&height=768&quality=70&upsize=true",
    features: [
      "All-Terrain AWD",
      "Lithionics Lithium System",
      "Power Lift Bed",
    ],
    description:
      "The 2026 Winnebago Revel Sport 44C ATH Edition is designed for rugged adventure and comfort. Built on a Mercedes AWD Sprinter chassis, it includes a powerful lithium system, solar, and all-weather insulation.",
    specs: {
      chassis: "Mercedes-Benz AWD Sprinter",
      engine: "2.0L High-Output Turbo Diesel",
      transmission: "9-Speed Automatic",
      battery: "4.1 kWh Lithionics Lithium",
      solar: "215 Watts",
      inverter: "2,000W Inverter/Charger",
      bed: "Power Lift Bed with Gear Garage",
      bathroom: "Wet Bath with Cassette Toilet",
      kitchen: "Induction Cooktop, Fridge, Pantry",
      seating: "4 Adults",
    },
  },
  {
    id: 8,
    name: "2021 Thor Motor Coach GEMINI 23TW",
    price: "$94,990",
    image:
      "https://cdn-media.tilabs.io/v1/media/685e2a2b0aa5a500167ea636.jpg?width=1024&height=768&quality=70&upsize=true",
    features: ["All-Wheel Drive", "Murphy Bed", "Diesel Powered"],
    description:
      "Compact and versatile, the 2021 Gemini 23TW from Thor Motor Coach offers AWD capability, modern interior design, and smart use of space. Perfect for couples or solo travelers.",
    specs: {
      chassis: "Ford Transit AWD",
      engine: "3.2L Power Stroke I5 Turbo Diesel",
      transmission: "6-Speed Automatic",
      length: "23 ft 6 in",
      bed: "Murphy Bed with Flip-Up Mattress",
      bathroom: "Rear Full Bath",
      kitchen: "Refrigerator, Microwave, Induction Cooktop",
      seating: "2-3 Adults",
      solar: "100W Solar Charging System",
      gvwr: "10,360 lbs",
    },
  },
  {
    id: 9,
    name: "2021 Storyteller Overland Stealth Mode",
    price: "$109,990",
    image:
      "https://cdn-media.tilabs.io/v1/media/672e3f5607785245da0d35d4.jpg?width=1024&height=768&quality=70&upsize=true",
    features: ["Lithium Power System", "AWD Sprinter", "Adventure Ready"],
    description:
      "The 2021 Stealth Mode by Storyteller Overland is a rugged, off-grid adventure van built on a Mercedes-Benz AWD Sprinter chassis, equipped with a Volta lithium power system and flexible interior living space.",
    specs: {
      chassis: "Mercedes-Benz Sprinter 144 AWD",
      engine: "3.0L V6 Turbo Diesel",
      transmission: "7-Speed Automatic",
      length: "19 ft 6 in",
      powerSystem: "Volta 12kWh Lithium Energy Storage System",
      solar: "90W Roof-Mounted Solar Panel",
      bed: "Convertible GrooveLounge + Dreamweaver Bed",
      bathroom: "Halo Shower™ System",
      kitchen: "Induction Cooktop, Sink, Fridge/Freezer",
      seating: "4 Adults",
      gvwr: "9,050 lbs",
    },
  },
  {
    id: 10,
    name: "Toyota Hilux Adventure 4.0L",
    price: "$32,500",
    image:
      "https://www.dubicars.com/images/28e34b/w_1300x760/al-kuwait-used-cars-exhibition-llc/feaada3c-6cd0-4dc5-95ff-909b1783f1e4.jpeg",
    features: ["4.0L V6 Engine", "4WD Off-Road", "High Ground Clearance"],
    description:
      "The Toyota Hilux Adventure 4.0L is a rugged off-road pickup truck with a powerful V6 engine, advanced 4WD system, and enhanced ground clearance for extreme terrain.",
    specs: {
      engine: "4.0L V6 Petrol",
      power: "235 hp",
      transmission: "6-Speed Automatic",
      drivetrain: "4WD",
      torque: "376 Nm",
      towingCapacity: "3,500 kg",
      groundClearance: "286 mm",
      fuelCapacity: "80 L",
      seating: "5 Adults",
      bedLength: "5 ft",
      safety: "Toyota Safety Sense, 7 Airbags",
    },
  },
  {
    id: 11,
    name: "Toyota Hilux 4x4",
    price: "$28,500",
    image:
      "https://www.dubicars.com/images/571546/w_1300x760/autocars/25234a80-08ef-4563-99a7-8e82fe97c904.jpeg",
    features: ["4WD Capability", "Turbo Diesel Engine", "Off-Road Suspension"],
    description:
      "Toyota Hilux 4x4 is a legendary workhorse known for its toughness, off-road strength, and reliable turbo diesel engine—perfect for adventure or utility.",
    specs: {
      engine: "2.8L Turbo Diesel",
      power: "201 hp",
      transmission: "6-Speed Automatic",
      drivetrain: "4WD",
      torque: "500 Nm",
      towingCapacity: "3,500 kg",
      groundClearance: "279 mm",
      fuelCapacity: "80 L",
      seating: "5 Adults",
      bedLength: "5 ft",
      safety: "Lane Assist, Cruise Control, 7 Airbags",
    },
  },
  {
    id: 12,
    name: "Toyota Hilux 2024 GR SPORT V6 4.0L",
    price: "$36,700",
    image:
      "https://www.dubicars.com/images/dd1c72/w_1300x760/unique-cars-fze/a44306ff-2635-4a63-8d88-0c60c6296bae.jpeg",
    features: ["GR Sport Styling", "4.0L V6 Engine", "Off-Road Suspension"],
    description:
      "The 2024 Toyota Hilux GR SPORT V6 4.0L combines motorsport-inspired design with exceptional power, advanced 4WD capability, and rugged off-road enhancements.",
    specs: {
      engine: "4.0L V6 Petrol",
      power: "235 hp",
      transmission: "6-Speed Automatic",
      drivetrain: "4WD",
      torque: "375 Nm",
      towingCapacity: "3,500 kg",
      groundClearance: "310 mm",
      fuelCapacity: "80 L",
      seating: "5 Adults",
      bedLength: "5 ft",
      safety: "Pre-Collision System, Lane Departure Alert, 7 Airbags",
    },
  },
  {
    id: 13,
    name: "Toyota Hilux",
    price: "$22,500",
    image:
      "https://www.dubicars.com/images/6b01e1/w_1300x760/target-motors-3/3da82559-1da8-47de-8f43-82cfa1febba2.jpg",
    features: ["Reliable 4x4 Utility", "2.8L Turbo Diesel", "Durable Bed"],
    description:
      "The Toyota Hilux is a legendary pickup truck known for its reliability, toughness, and off-road capability, built to handle both work and adventure.",
    specs: {
      engine: "2.8L 4-Cylinder Turbo Diesel",
      power: "201 hp",
      transmission: "6-Speed Automatic",
      drivetrain: "4WD",
      torque: "500 Nm",
      towingCapacity: "3,500 kg",
      groundClearance: "310 mm",
      fuelCapacity: "80 L",
      seating: "5 Adults",
      bedLength: "5 ft",
      safety: "Toyota Safety Sense, 7 Airbags",
    },
  },
  {
    id: 14,
    name: "Toyota Hilux GR Sport 4.0L",
    price: "$29,990",
    image:
      "https://www.dubicars.com/images/330475/w_1300x760/aaa-motors-fze/faad2b50-85c0-4991-b790-e3a7f41ff190.jpeg",
    features: ["4.0L V6 Engine", "GR Sport Design", "Off-Road Suspension"],
    description:
      "The Toyota Hilux GR Sport 4.0L combines bold design with legendary toughness, powered by a V6 engine and enhanced with Gazoo Racing performance and styling.",
    specs: {
      engine: "4.0L V6 Petrol",
      power: "235 hp",
      transmission: "6-Speed Automatic",
      drivetrain: "4WD",
      torque: "375 Nm",
      towingCapacity: "3,500 kg",
      groundClearance: "310 mm",
      fuelCapacity: "80 L",
      seating: "5 Adults",
      bedLength: "5 ft",
      safety: "Toyota Safety Sense, 7 Airbags",
    },
  },
  {
    id: 15,
    name: "Toyota Hilux DC 2.7L SR5 MT 4x4 2024 - LHD",
    price: "$19,500",
    image:
      "https://www.dubicars.com/images/7da1eb/w_1300x760/target-motors-3/7e8a7ec9-1a5c-449b-bd55-d4eaa75ba02b.jpg",
    features: ["2.7L Petrol Engine", "Manual Transmission", "4x4 Capability"],
    description:
      "A rugged and reliable double-cabin pickup with a 2.7L petrol engine, 4x4 drivetrain, and manual transmission. Ideal for both work and adventure in tough terrain.",
    specs: {
      engine: "2.7L 4-Cylinder Petrol",
      power: "164 hp",
      transmission: "5-Speed Manual",
      drivetrain: "4WD",
      torque: "245 Nm",
      towingCapacity: "2,500 kg",
      groundClearance: "286 mm",
      fuelCapacity: "80 L",
      seating: "5 Adults",
      bedLength: "5 ft",
      safety: "ABS, Brake Assist, Dual Airbags",
    },
  },
  {
    id: 16,
    name: "Nissan Patrol SE Platinum 2024 - LHD",
    price: "$45,000",
    image:
      "https://i.pinimg.com/736x/87/8b/97/878b97db8775f526decec69ddfdc0d94.jpg",
    features: ["5.6L V8 Engine", "Automatic Transmission", "Luxury Interior"],
    description:
      "A full-size luxury SUV built for performance and comfort, equipped with a 5.6L V8 engine and high-end features for on and off-road confidence.",
    specs: {
      engine: "5.6L V8",
      power: "400 hp",
      transmission: "7-Speed Automatic",
      drivetrain: "4WD",
      torque: "560 Nm",
      towingCapacity: "3,500 kg",
      groundClearance: "273 mm",
      fuelCapacity: "140 L",
      seating: "7 Adults",
      bedLength: "N/A",
      safety: "Cruise Control, Lane Assist, 6 Airbags",
    },
  },
  {
    id: 17,
    name: "Mitsubishi L200 Sportero 2024 - LHD",
    price: "$23,000",
    image:
      "https://i.pinimg.com/736x/b7/75/54/b77554fb1bedb868d90c50a26f4583ea.jpg",
    features: [
      "2.4L Diesel Engine",
      "Automatic Transmission",
      "4x4 Capability",
    ],
    description:
      "A durable and efficient pickup designed for tough environments. Ideal for commercial use and rough roads.",
    specs: {
      engine: "2.4L Turbo Diesel",
      power: "178 hp",
      transmission: "6-Speed Automatic",
      drivetrain: "4WD",
      torque: "430 Nm",
      towingCapacity: "3,100 kg",
      groundClearance: "220 mm",
      fuelCapacity: "75 L",
      seating: "5 Adults",
      bedLength: "5.2 ft",
      safety: "Traction Control, Rear Camera, Dual Airbags",
    },
  },
  {
    id: 18,
    name: "Ford Ranger XLT 2.0L Bi-Turbo 2024 - LHD",
    price: "$27,800",
    image:
      "https://i.pinimg.com/736x/5d/5c/87/5d5c87681931b5181d7ef9a3c83bf5e9.jpg",
    features: ["2.0L Bi-Turbo Diesel", "10-Speed Auto", "Off-Road Capable"],
    description:
      "Ford's top-tier pickup packed with tech and power, perfect for utility, family use, or rugged terrain.",
    specs: {
      engine: "2.0L Bi-Turbo Diesel",
      power: "210 hp",
      transmission: "10-Speed Automatic",
      drivetrain: "4WD",
      torque: "500 Nm",
      towingCapacity: "3,500 kg",
      groundClearance: "237 mm",
      fuelCapacity: "80 L",
      seating: "5 Adults",
      bedLength: "5.1 ft",
      safety: "Blind Spot Monitor, Lane Keep Assist, ABS",
    },
  },
  {
    id: 19,
    name: "Land Cruiser 300 GX-R V6 2024 - LHD",
    price: "$42,000",
    image:
      "https://i.pinimg.com/736x/63/3a/f0/633af0806a1379734f6f5ef65904ba55.jpg",
    features: [
      "3.5L Twin Turbo V6",
      "10-Speed Automatic",
      "Legendary Off-Road Performance",
    ],
    description:
      "Toyota’s most capable SUV, blending powerful performance with luxury and high-tech off-road tools.",
    specs: {
      engine: "3.5L Twin Turbo V6",
      power: "409 hp",
      transmission: "10-Speed Automatic",
      drivetrain: "4WD",
      torque: "650 Nm",
      towingCapacity: "3,500 kg",
      groundClearance: "235 mm",
      fuelCapacity: "110 L",
      seating: "7 Adults",
      bedLength: "N/A",
      safety: "Adaptive Cruise, Crawl Control, 10 Airbags",
    },
  },
  {
    id: 20,
    name: "Isuzu D-MAX 3.0L 4x4 2024 - LHD",
    price: "$22,500",
    image:
      "https://i.pinimg.com/736x/13/17/53/13175313961eb887f864415652ffdaef.jpg",
    features: ["3.0L Diesel Engine", "4x4 Manual", "Heavy-Duty Build"],
    description:
      "A robust and fuel-efficient pickup, built for reliability in demanding conditions and commercial use.",
    specs: {
      engine: "3.0L Turbo Diesel",
      power: "190 hp",
      transmission: "6-Speed Manual",
      drivetrain: "4WD",
      torque: "450 Nm",
      towingCapacity: "3,000 kg",
      groundClearance: "235 mm",
      fuelCapacity: "76 L",
      seating: "5 Adults",
      bedLength: "5.3 ft",
      safety: "Hill Descent, Rear Sensors, Dual Airbags",
    },
  },
  {
    id: 21,
    name: "Hyundai Santa Fe 2.5L 2024 - LHD",
    price: "$31,900",
    image:
      "https://i.pinimg.com/1200x/b7/65/99/b7659904fc1afcf9f95d3a72ced4ced9.jpg",
    features: ["2.5L Petrol Engine", "7-Seater SUV", "Comfort & Tech Focused"],
    description:
      "Family-friendly midsize SUV with a spacious interior, advanced safety features, and modern infotainment.",
    specs: {
      engine: "2.5L Inline-4",
      power: "191 hp",
      transmission: "8-Speed Automatic",
      drivetrain: "AWD",
      torque: "245 Nm",
      towingCapacity: "1,500 kg",
      groundClearance: "185 mm",
      fuelCapacity: "67 L",
      seating: "7 Adults",
      bedLength: "N/A",
      safety: "Blind Spot View, Rear Cross Alert, 6 Airbags",
    },
  },
];

// Solar panel data
const solarPanels = [
  {
    id: 28,
    name: "7.3kW Solar Kit - Mission Solar 410 Black & Sol-Ark Hybrid Inverter",
    price: "$5,499",
    image:
      "https://cdn11.bigcommerce.com/s-3nrr5bfo5i/images/stencil/500x659/products/5921/22261/solar-panel-kit-mono-120-AllBlack-SolArk__07100.1750108757.jpg?c=2",
    features: [
      "7.3kW Total Power Output",
      "Mission Solar 410W All-Black Panels",
      "Sol-Ark Hybrid Inverter Included",
    ],
    description:
      "A complete residential solar energy solution featuring high-efficiency Mission Solar 410W black panels and a powerful Sol-Ark hybrid inverter, designed for both grid-tied and off-grid performance with energy storage capabilities.",
    specs: {
      panelOutput: "410W per panel",
      totalCapacity: "7.3kW",
      inverter: "Sol-Ark Hybrid Inverter",
      mounting: "Roof/Ground Mount Kit Included",
      warranty: "25-Year Panel Warranty, 10-Year Inverter Warranty",
    },
  },
  {
    id: 24,
    name: "Pytes V5 Battery | EG4 Hybrid Inverter Energy Storage Bundle",
    price: "$2,899",
    image:
      "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/1280x1280/attribute_rule_images/661_source_1750181819.png",
    features: [
      "Includes Pytes V5 Lithium Battery",
      "Paired with EG4 6000XP Hybrid Inverter",
      "Efficient energy storage & off-grid capability",
    ],
    description:
      "The Pytes V5 + EG4 Hybrid Inverter Energy Storage Bundle offers a powerful and scalable solution for solar energy storage. Ideal for residential or light commercial systems, this bundle supports high-efficiency energy capture, conversion, and storage—ready for on-grid or off-grid operation.",
    specs: {
      batteryType: "Pytes V5 Lithium Iron Phosphate (LiFePO₄)",
      batteryCapacity: "5.12 kWh",
      inverterModel: "EG4 6000XP Hybrid Inverter",
      outputPower: "6,000 W",
      warranty: "10-Year Battery / 5-Year Inverter Warranty",
    },
  },
  {
    id: 20,
    name: "EG4 12000XP & Indoor Wallmount Battery Bundle",
    price: "$999",
    image:
      "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/1280x1280/products/9383/10450/KIT-E0013__70347.1746565563.png?c=1",
    features: [
      "Includes EG4 12000XP Inverter",
      "Includes 1x Indoor Wallmount LiFePO4 Battery (5.12kWh)",
      "All-in-One Plug & Play Bundle",
    ],
    description:
      "Complete solar power bundle featuring the EG4 12000XP inverter and wall-mounted 48V 5.12kWh lithium battery. Designed for off-grid and hybrid installations with easy setup.",
    specs: {
      inverter: "EG4 12000XP (48V, 12kW Split Phase)",
      battery: "EG4 Indoor Wallmount 48V 5.12kWh LiFePO4",
      batteryCapacity: "5.12kWh (Expandable)",
      voltage: "48V",
      application: "Off-Grid / Hybrid Systems",
      warranty: "10-Year Limited Warranty (Battery & Inverter)",
    },
  },
  {
    id: 19,
    name: "EG4 3 Slot Server Rack 48V Battery Kit",
    price: "$1,295",
    image:
      "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/original/products/9361/10445/eg4_3_slot_rack_1__09508.1746468616.png?c=1",
    features: [
      "Includes 3x EG4 LL 48V 100Ah Batteries",
      "Prewired Server Rack Enclosure",
      "Plug & Play Setup",
    ],
    description:
      "The EG4 3 Slot Server Rack Battery Kit delivers scalable lithium power in a compact, prewired server rack. Ideal for off-grid or backup systems requiring 15.36kWh storage capacity.",
    specs: {
      type: "48V Lithium Battery Kit",
      capacity: "15.36kWh Total (3x 5.12kWh)",
      battery: "EG4 LL 48V 100Ah LiFePO4",
      rack: "Prewired 3-Slot Server Rack",
      compatibility: "Off-Grid / Hybrid Systems",
      warranty: "10-Year Limited Warranty",
    },
  },
  {
    id: 29,
    name: "Trina Solar 425W Mono Bifacial All-Black Panel",
    price: "$229",
    image:
      "https://cdn11.bigcommerce.com/s-3nrr5bfo5i/images/stencil/500x659/products/5825/22208/mono-144-black-on-black-front-back__66573.1732582645.jpg?c=2",
    features: ["425 W Output", "Bifacial Technology", "All‑Black Design"],
    description:
      "High-performance Trina Solar 425W bifacial panel with an all-black sleek design, optimized for both aesthetics and power production on residential or commercial installations.",
    specs: {
      type: "Monocrystalline Bifacial",
      efficiency: "21.3 %",
      powerOutput: "425 W",
      dimensions: "71.8 × 44.6 × 1.18 in",
      warranty: "25 Years Product & Performance",
    },
  },
  {
    id: 30,
    name: "IronRidge Ground Mount Kit for 40 Solar Panels",
    price: "$2,199",
    image:
      "https://cdn11.bigcommerce.com/s-3nrr5bfo5i/images/stencil/500x659/products/2176/7861/Ironridge_Ground_Mount__35075.1583801307.jpg?c=2",
    features: [
      "Supports up to 40 Panels",
      "Heavy-Duty Steel Construction",
      "Compatible with Most 60/72 Cell Modules",
    ],
    description:
      "The IronRidge Ground Mount Kit provides a durable and scalable solution for securely mounting up to 40 solar panels. Ideal for large residential or commercial solar installations.",
    specs: {
      type: "Ground Mount System",
      capacity: "Up to 40 Panels",
      material: "Galvanized Steel",
      compatibility: "60/72 Cell Modules",
      warranty: "25 Years Structural Warranty",
    },
  },
  {
    id: 21,
    name: "EG4 FlexBOSS18 13kW AC Hybrid Inverter",
    price: "$3,599",
    image:
      "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/640w/products/7837/8913/FlexBOSS18_-_Front__70491.1739398622.jpg?c=1",
    features: [
      "13kW Output (Split Phase)",
      "120/240V AC Hybrid Inverter",
      "Works With or Without Batteries",
    ],
    description:
      "High-powered hybrid inverter delivering 13kW of AC output. The EG4 FlexBOSS18 supports split-phase operation and can run with or without batteries, perfect for grid-tied or off-grid applications.",
    specs: {
      type: "AC Coupled Hybrid Inverter",
      powerOutput: "13kW",
      voltage: "120/240V Split Phase",
      batterySupport: "Optional (Operates With or Without Batteries)",
      dimensions: "29.5 x 18.5 x 8.3 in",
      warranty: "10-Year Limited Warranty",
    },
  },
  {
    id: 22,
    name: "EG4 BossBox Cable Kit",
    price: "$189.99",
    image:
      "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/640w/products/8605/9673/EG4_BOSSBox_Cable_Kit_1__00114.1742587938.jpg?c=1",
    features: [
      "Complete Cable Set for BossBox",
      "Pre-terminated & Color-Coded",
      "Optimized for Safety & Performance",
    ],
    description:
      "The EG4 BossBox Cable Kit includes all necessary pre-terminated, color-coded cables designed for clean and efficient installation with the BossBox inverter system. Simplifies wiring while maintaining high performance and safety standards.",
    specs: {
      compatibility: "EG4 BossBox Inverter Systems",
      cableTypes: "Battery, PV, Ground, Communication",
      connectors: "Pre-terminated Ring & MC4 Connectors",
      colorCoding: "Yes",
      warranty: "3-Year Limited Warranty",
    },
  },

  {
    id: 14,
    name: "EG4 GridBOSS MID v3.1",
    price: "$599",
    image:
      "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/1280x1280/products/10255/11557/EG4_GridBOSS_MID_1__72162.1754343293.png?c=1",
    features: [
      "Grid-Tie Compatible",
      "Supports Solar & Battery Input",
      "Advanced Load Management",
    ],
    description:
      "The EG4 GridBOSS MID v3.1 is a powerful and intelligent grid-tie inverter designed for hybrid energy systems. It supports solar and battery inputs with advanced load control capabilities.",
    specs: {
      type: "Hybrid Grid-Tie Inverter",
      inputSupport: "Solar & Battery",
      outputVoltage: "120/240V Split Phase",
      powerOutput: "Up to 12kW",
      warranty: "10-Year Limited Warranty",
    },
  },
  {
    id: 27,
    name: "3kW EG4 Off-Grid Inverter Battery Charger",
    price: "$699",
    image:
      "https://cdn11.bigcommerce.com/s-3nrr5bfo5i/images/stencil/500x659/products/5480/21011/eg4_3kw_inverter__43184.1690565452.jpg?c=2",
    features: [
      "3,000W Pure Sine Wave Output",
      "Off-Grid Functionality",
      "Integrated Battery Charger",
    ],
    description:
      "Compact and efficient, the 3kW EG4 Off-Grid Inverter Battery Charger is designed for smaller solar setups like cabins, sheds, or backup systems. It offers reliable power conversion and battery charging where grid power isn't available.",
    specs: {
      type: "Off-Grid Inverter",
      powerOutput: "3,000W",
      batteryCompatibility: "48V Lithium & Lead-Acid",
      inputVoltage: "120V AC",
      warranty: "3-Year Inverter Warranty",
    },
  },

  {
    id: 25,
    name: "EG4 BOSSBox Energy Storage Enclosure",
    price: "$499",
    image:
      "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/1280x1280/products/7834/9614/EG4_BossBox_1__18704.1741998022.png?c=1",
    features: [
      "Houses up to 2 EG4 batteries",
      "IP65-rated enclosure",
      "Integrated cable management",
    ],
    description:
      "The EG4 BOSSBox Energy Storage Enclosure is a weather-resistant and robust solution for housing your EG4 batteries. Designed to hold up to two batteries safely, it includes clean cable routing and durable construction—ideal for garages, sheds, or outdoor installations.",
    specs: {
      capacity: "Holds up to 2 EG4 batteries",
      material: "Powder-coated steel",
      protection: "IP65 Weatherproof",
      dimensions: "25 × 24 × 16 in",
      warranty: "5-Year Enclosure Warranty",
    },
  },
  {
    id: 26,
    name: "12kW EG4 Hybrid On/Off-Grid Inverter Battery Charger",
    price: "$2,799",
    image:
      "https://cdn11.bigcommerce.com/s-3nrr5bfo5i/images/stencil/500x659/products/5478/21005/EG4_18KPV_inverter__48011.1690563965.jpg?c=2",
    features: [
      "12,000W output capacity",
      "Supports on-grid and off-grid operation",
      "Integrated battery charging",
    ],
    description:
      "The 12kW EG4 Hybrid Inverter Battery Charger combines grid-tied functionality with off-grid capabilities in a single powerhouse unit. Ideal for residential and commercial solar applications, it delivers reliable energy conversion and storage control with seamless switchover.",
    specs: {
      type: "Hybrid On/Off-Grid Inverter",
      powerOutput: "12,000W",
      batteryCompatibility: "48V Lithium & Lead-Acid",
      inputVoltage: "240V Split Phase",
      warranty: "5-Year Inverter Warranty",
    },
  },
  {
    id: 23,
    name: "EG4 100Ah WallMount Battery Paralleling Cable Kit",
    price: "$49.99",
    image:
      "hhttps://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/640w/products/8875/9952/WallMount_100Ah_Paralleling_Kit_-_All_1__00001.1743089031.jpg?c=1",
    features: [
      "Connects multiple 100Ah WallMount batteries",
      "Heavy-duty gauge cables",
      "Pre-terminated and color-coded",
    ],
    description:
      "The EG4 100Ah WallMount Battery Paralleling Cable Kit allows you to safely and efficiently connect multiple 100Ah WallMount batteries in parallel, enabling increased system capacity. Includes pre-terminated, high-quality cables with color coding for easy installation.",
    specs: {
      compatibility: "EG4 100Ah WallMount Batteries",
      cableLength: "Varies (standardized for WallMount setup)",
      cableGauge: "Heavy-duty (sized for parallel configurations)",
      connectors: "Pre-terminated Ring Terminals",
      warranty: "3-Year Limited Warranty",
    },
  },
  {
    id: 13,
    name: "EG4 FlexBOSS21 Inverter V.1.1 | 48V Split Phase",
    price: "$799",
    image:
      "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/1280x1280/products/10257/11554/FlexGrid_Bundle_2___54730__87710.1754333578.jpg?c=1",
    features: [
      "48V Split Phase Output",
      "Integrated 200A BMS",
      "Supports up to 21kW",
    ],
    description:
      "The EG4 FlexBOSS21 Inverter V.1.1 delivers split phase 120/240V output with integrated 200A BMS, supporting up to 21kW of flexible power for off-grid or backup use.",
    specs: {
      type: "Hybrid Inverter",
      outputVoltage: "120/240V Split Phase",
      powerOutput: "Up to 21kW",
      batterySupport: "48V with 200A BMS",
      warranty: "10-Year Limited Warranty",
    },
  },
  {
    id: 1,
    name: "Premium SolarMax 400W",
    price: "$1,299",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["400W Output", "22% Efficiency", "25-Year Warranty"],
    description:
      "High-efficiency monocrystalline panels for maximum energy production",
    specs: {
      type: "Monocrystalline",
      efficiency: "22%",
      powerOutput: "400W",
      dimensions: "68.5 x 40.9 x 1.4 in",
      warranty: "25 Years",
    },
  },
  {
    id: 2,
    name: "SolarTech Pro 380W",
    price: "$1,150",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["380W Output", "21.5% Efficiency", "Weather Resistant"],
    description:
      "Advanced polycrystalline panels with excellent performance in all conditions",
    specs: {
      type: "Polycrystalline",
      efficiency: "21.5%",
      powerOutput: "380W",
      dimensions: "65.9 x 39.4 x 1.4 in",
      warranty: "20 Years",
    },
  },
  {
    id: 3,
    name: "EcoPower Thin-Film 350W",
    price: "$950",
    image:
      "https://image.made-in-china.com/365f3j00YPSimfrcJhpR/Powerful-Thin-Film-CIGS-Flexible-Solar-Panels-FLEX-03M-350W-.webp",
    features: ["350W Output", "Flexible Design", "Low Light Performance"],
    description:
      "Lightweight thin-film panels perfect for curved surfaces and low-light conditions",
    specs: {
      type: "Thin-Film",
      efficiency: "18%",
      powerOutput: "350W",
      dimensions: "Flexible",
      warranty: "15 Years",
    },
  },
  {
    id: 15,
    name: "EG4 12k BTU Hybrid Solar Mini-Split",
    price: "$1,299",
    image:
      "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/1280x1280/products/10163/11429/Mini_Split__56027.1752860557.png?c=1",
    features: [
      "12,000 BTU Cooling Capacity",
      "Hybrid Solar + AC Power",
      "High SEER Efficiency Rating",
    ],
    description:
      "The EG4 12k BTU Hybrid Solar Mini-Split offers energy-efficient cooling powered by solar or grid electricity. Ideal for off-grid and hybrid energy systems with silent operation and remote control.",
    specs: {
      type: "Hybrid DC Inverter Mini-Split",
      coolingCapacity: "12,000 BTU",
      powerSource: "Solar DC & AC Hybrid",
      efficiency: "SEER Rating 21+",
      warranty: "5-Year Compressor / 1-Year Parts",
    },
  },
  {
    id: 16,
    name: "EG4 EV Charging Kit",
    price: "$499",
    image:
      "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/1280x1280/products/9921/11097/KIT-E0019-1__74217.1749829008.png?c=1",
    features: [
      "Level 2 Fast Charging",
      "Compatible with EG4 Inverters",
      "Wall-Mounted with LCD Display",
    ],
    description:
      "The EG4 EV Charging Kit delivers fast, reliable Level 2 charging for your electric vehicle. Designed for seamless integration with EG4 energy systems, it supports smart monitoring and high-efficiency power usage.",
    specs: {
      type: "Level 2 EV Charger",
      chargingSpeed: "Up to 40A / 9.6kW",
      compatibility: "EG4 Inverters & Standard EVs",
      installation: "Wall-Mounted",
      warranty: "2-Year Manufacturer Warranty",
    },
  },
  {
    id: 18,
    name: "EG4 Off-Grid Shed & Garage Solar Kit (KIT-E0017)",
    price: "$2,299",
    image:
      "https://cdn11.bigcommerce.com/s-bi8c0htqsn/images/stencil/1280x1280/products/9563/10650/eg4_battery_rack___77433.1748524378.png?c=1",
    features: [
      "Complete Off-Grid Power Solution",
      "5.12kWh EG4 LL Battery",
      "3kW EG4 Inverter with AC & Solar Input",
    ],
    description:
      "The EG4 KIT-E0017 is a powerful off-grid solar kit for sheds, garages, or small cabins. It includes a 3kW inverter, high-capacity lithium battery, and solar panels for a reliable standalone energy system.",
    specs: {
      type: "Off-Grid Solar Power Kit",
      inverter: "3kW EG4 Off-Grid Inverter",
      battery: "EG4 LL 5.12kWh Lithium Battery",
      solarPanels: "2x 370W Monocrystalline Panels",
      applications: "Sheds, Garages, Small Cabins",
      warranty: "10-Year Limited Warranty",
    },
  },

  {
    id: 4,
    name: "SolarMax Home System",
    price: "$12,999",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["5kW System", "Battery Storage", "Smart Monitoring"],
    description:
      "Complete home solar solution with battery backup and smart energy management",
    specs: {
      systemSize: "5 kW",
      panels: "12x 420W",
      battery: "10 kWh",
      monitoring: "Smart App",
      warranty: "25 Years",
    },
  },
  {
    id: 5,
    name: "SunPower Maxeon 6 AC 440W",
    price: "$1,399",
    image:
      "https://solaranalytica.com/wp-content/uploads/2022/04/Sunpower-Maxeon-6-Review-2-scaled.jpeg",
    features: ["440W Output", "22.8% Efficiency", "25-Year Warranty"],
    description:
      "One of the highest-efficiency panels on the market, with built-in Enphase microinverter.",
    specs: {
      type: "Monocrystalline",
      efficiency: "22.8%",
      powerOutput: "440W",
      dimensions: "72.2 x 40 x 1.57 in",
      warranty: "25 Years",
    },
  },
  {
    id: 12,
    name: "SunPower Maxeon 6 425 W (All‑Black)",
    price: "$1,799",
    image:
      "https://cdn11.bigcommerce.com/s-3nrr5bfo5i/images/stencil/500x659/products/6164/22879/112_cells_half_mono__72089.1734478380.png?c=2",
    features: ["425 W Output", "22 % Efficiency", "25‑Year Product Warranty"],
    description:
      "High-efficiency all-black Maxeon 6 panel with superior durability and long warranty.",
    specs: {
      type: "Monocrystalline IBC (Maxeon Gen 6)",
      efficiency: "22 %",
      powerOutput: "425 W",
      dimensions: "73.7 × 40.6 × 1.57 in",
      warranty: "25 Years Product & Performance",
    },
  },
  {
    id: 13,
    name: "SunPower Maxeon 6 AC COM 460 W",
    price: "€519",
    image:
      "https://www.todoensolar.com/WebRoot/StoreES/Shops/61987244/65AA/3DBE/FF32/219D/A808/0A0C/6D0E/D8C7/SunPower_Maxeon_6_COM_ml.png",
    features: ["460 W Output", "21.6 % Efficiency", "40‑Year Warranty"],
    description:
      "Integrated microinverter panel delivering high output and ultra-long warranty.",
    specs: {
      type: "Monocrystalline IBC",
      efficiency: "21.6 %",
      powerOutput: "460 W",
      dimensions: "80.6 × 40.9 in",
      warranty: "40 Years (Product, Power & Service)",
    },
  },
  {
    id: 14,
    name: "SunPower Maxeon 6 AC Black 425 W",
    price: "$1,749",
    image:
      "https://api.yourenergyanswers.com/storage/photos/gmiYi74rHqeSv135OGowf9i0FWZXQuBKSgzlrxRb.jpeg",
    features: ["425 W Output", "22 % Efficiency", "Industry-leading Warranty"],
    description:
      "All-black Maxeon panel with built-in microinverter, offering longevity and reliability.",
    specs: {
      type: "Monocrystalline IBC",
      efficiency: "22 %",
      powerOutput: "425 W",
      dimensions: "73.7 × 40.6 × 1.57 in",
      warranty: "25 Years Product & Performance (Product life est. 40 years)",
    },
  },
  {
    id: 15,
    name: "REC Alpha Pure‑R 410 W",
    price: "€450",
    image:
      "https://www.solarmatters.com.au/wp-content/uploads/2016/03/REC-Alpha-Pure-R-410Wp.png",
    features: ["410 W Output", "21.2 % Efficiency", "Lead‑Free Design"],
    description:
      "High-performance HJT panel with gapless layout, full black design, and environmental focus.",
    specs: {
      type: "Heterojunction (HJT)",
      efficiency: "21.2 %",
      powerOutput: "410 W",
      dimensions: "68.1 × 44 ft² (approx 1730 × 1118 × 30 mm)",
      warranty: "20 Years Product, 25 Years Performance (92 % at year 25)",
    },
  },
  {
    id: 16,
    name: "REC Alpha Pure‑R 420 W",
    price: "€460",
    image:
      "https://www.solarelectricsupply.com/media/product-images/SolarPanel/REC/REC-residential-solar-panel-system.jpg",
    features: ["420 W Output", "21.8 % Efficiency", "7000 Pa Load"],
    description:
      "Improved power and durability with HJT tech and high load resistance.",
    specs: {
      type: "HJT Bifacial",
      efficiency: "21.8 %",
      powerOutput: "420 W",
      dimensions: "1730 × 1118 × 30 mm",
      warranty: "20 Years Product, 25 Years Performance (≥92 %)",
    },
  },
  {
    id: 17,
    name: "REC Alpha Pure‑RX 470 W",
    price: "€490",
    image:
      "https://www.recgroup.com/sites/default/files/2024-05/REC_Alpha_Pure_1.png",
    features: ["470 W Output", "22.6 % Efficiency", "High Power Density"],
    description:
      "REC’s most powerful residential HJT panel, compact yet high-efficiency and shade-resilient.",
    specs: {
      type: "HJT",
      efficiency: "22.6 %",
      powerOutput: "470 W",
      dimensions: "N/A",
      warranty: "20 Years Product, 25 Years Performance (≥92 %)",
    },
  },
  {
    id: 18,
    name: "REC Alpha Pure 2 430 W",
    price: "€470",
    image:
      "https://www.solarelectricsupply.com/media/wysiwyg/rec-roof-mounted-solar-systems-2024.png",
    features: ["430 W Output", "High Power Density", "20+25 Year Warranty"],
    description:
      "HJT panel with gapless layout, high yield, and long-term performance guarantee.",
    specs: {
      type: "HJT",
      efficiency: "~22 %",
      powerOutput: "430 W",
      dimensions: "N/A",
      warranty: "20 Years Product, 25 Years Performance (≥92 %)",
    },
  },

  {
    id: 20,
    name: "REC Alpha Pure‑R 430 W",
    price: "€480",
    image:
      "https://www.recgroup.com/sites/default/files/2024-05/REC_Alpha_Pure_R_1.png",
    features: ["430 W Output", "22.3 % Efficiency", "Lead‑Free & Durable"],
    description:
      "Compact 430 W HJT panel with premium performance, eco-conscious build, and reliable yield.",
    specs: {
      type: "HJT",
      efficiency: "22.3 %",
      powerOutput: "430 W",
      dimensions: "N/A",
      warranty: "20 Years Product, 25 Years Performance (≥92 %)",
    },
  },
  {
    id: 21,
    name: "SunPower Maxeon 6 425 W (SPR‑MAX6‑425‑E3‑AC)",
    price: "$1,799",
    image:
      "https://s.alicdn.com/@sc04/kf/H9d349c23f0324fffa84b16cc66af75f5G.jpg?avif=close&webp=close",
    features: ["425 W Output", "22 % Efficiency", "MLPE‑Ready"],
    description:
      "All-black Maxeon AC panel compatible with microinverters and optimized energy systems.",
    specs: {
      type: "Monocrystalline IBC",
      efficiency: "22 %",
      powerOutput: "425 W",
      dimensions: "73.7 × 40.6 × 1.57 in",
      warranty: "25 Years",
    },
  },
  {
    id: 21,
    name: "Tycorun 20 Kw Solar Energy Systems",
    price: "$1,799",
    image:
      "https://i.pinimg.com/1200x/36/18/9f/36189f76f03a2b7bf9cccabfdbc8ab1e.jpg",
    features: ["30kw Output", "22% Efficiency", "MLPE-Ready"],
    description:
      "All-black Tycorun AC panel compatible with microinverters and optimized energy systems.",
    specs: {
      type: "Monocrystalline IBC",
      efficiency: "22%",
      powerOutput: "425W",
      dimensions: "73.7 × 40.6 x 1.57 in",
      warranty: "25 Years",
    },
  },
];

const vehiclesContainer = document.getElementById("vehicles-container");
const loadMoreBtn = document.getElementById("load-more");

const ITEMS_PER_PAGE = 9;
let currentPage = 0;

// Render vehicles
function renderVehicles() {
  const container = document.getElementById("vehicles-container");

  // On first page, clear out any existing cards
  if (currentPage === 0) {
    container.innerHTML = "";
  }

  // Determine slice for this “page”
  const start = currentPage * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const slice = vehicles.slice(start, end);

  slice.forEach((vehicle) => {
    const card = document.createElement("div");
    card.className = "vehicle-card";
    card.innerHTML = `
        <div
          class="vehicle-image"
          style="background-image: url('${vehicle.image}')"></div>
        <div class="vehicle-content">
          <h3 class="vehicle-title">${vehicle.name}</h3>
          <div class="vehicle-price">${vehicle.price}</div>
          <div class="vehicle-features">
            ${vehicle.features
              .map((feat) => `<div class="feature">${feat}</div>`)
              .join("")}
          </div>
          <button
            class="btn view-details"
            data-id="${vehicle.id}"
            data-type="vehicle">
            View Details
          </button>
        </div>
      `;
    container.appendChild(card);
  });

  const loadMoreBtn = document.getElementById("load-more");
  if ((currentPage + 1) * ITEMS_PER_PAGE >= vehicles.length) {
    loadMoreBtn.style.display = "none";
  }
}

const ITEMS_PER_PAGE_SOLAR = 9;
let currentSolarPage = 0;

// Render solar panels
function renderSolarPanels() {
  const container = document.getElementById("solar-container");

  // on first page clear out
  if (currentSolarPage === 0) {
    container.innerHTML = "";
  }

  // slice next batch
  const start = currentSolarPage * ITEMS_PER_PAGE_SOLAR;
  const end = start + ITEMS_PER_PAGE_SOLAR;
  const slice = solarPanels.slice(start, end);

  slice.forEach((panel) => {
    const card = document.createElement("div");
    card.className = "solar-card";
    card.innerHTML = `
        <div
          class="solar-image"
          style="background-image: url('${panel.image}')"></div>
        <div class="solar-content">
          <h3 class="solar-title">${panel.name}</h3>
          <div class="solar-price">${panel.price}</div>
          <div class="solar-features">
            ${panel.features
              .map((feat) => `<div class="feature">${feat}</div>`)
              .join("")}
          </div>
          <button
            class="btn view-details"
            data-id="${panel.id}"
            data-type="solar">
            View Details
          </button>
        </div>
      `;
    container.appendChild(card);
  });

  // hide button if all shown
  const btn = document.getElementById("load-more-solar");
  if ((currentSolarPage + 1) * ITEMS_PER_PAGE_SOLAR >= solarPanels.length) {
    btn.style.display = "none";
  }
}

document.getElementById("load-more-solar").addEventListener("click", () => {
  currentSolarPage++;
  renderSolarPanels();
});
// Open modal
function openModal(id, type) {
  let item;
  if (type === "vehicle") {
    item = vehicles.find((v) => v.id == id);
  } else {
    item = solarPanels.find((s) => s.id == id);
  }

  if (!item) return;

  const modal = document.querySelector(".modal");
  document.querySelector(".modal-title").textContent = item.name;
  document.querySelector(".modal-price").textContent = item.price;
  document.querySelector(".modal-description").textContent = item.description;

  // ✅ Replace modal-image with carousel-track
  const track = modal.querySelector(".carousel-track");
  const hasImages = item.images && item.images.length > 0;
  track.innerHTML = hasImages
    ? item.images.map((url) => `<img src="${url}" alt="Image">`).join("")
    : `<img src="${item.image}" alt="Default Image">`;

  // ✅ Specs
  const specsGrid = modal.querySelector(".specs-grid");
  specsGrid.innerHTML = "";
  for (const [key, value] of Object.entries(item.specs)) {
    const spec = document.createElement("div");
    spec.className = "spec";
    spec.innerHTML = `
      <div class="spec-title">${key.toUpperCase()}</div>
      <div class="spec-value">${value}</div>
    `;
    specsGrid.appendChild(spec);
  }

  // ✅ Carousel logic
  let currentIndex = 0;
  const totalImages = hasImages ? item.images.length : 1;

  const updateCarousel = () => {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  modal.querySelector(".carousel-btn.prev").onclick = () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  };

  modal.querySelector(".carousel-btn.next").onclick = () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  };

  updateCarousel();

  // ✅ Show modal
  document.querySelector(".modal-overlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close modal
document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".modal-overlay").classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close modal when clicking outside
document
  .querySelector(".modal-overlay")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  renderVehicles();
  renderSolarPanels();

  // Add event listeners to view details buttons
  document.querySelectorAll(".view-details").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      const type = this.getAttribute("data-type");
      openModal(id, type);
    });
  });

  // Hamburger menu functionality
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking a link
  document.querySelectorAll("#nav-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Countdown timer
  const countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() + 7);

  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").innerHTML = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerHTML = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerHTML = seconds
      .toString()
      .padStart(2, "0");

    if (distance < 0) {
      clearInterval(countdown);
      document.querySelector(".timer").innerHTML = "Offer Expired";
    }
  }, 1000);

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.style.padding = "15px 0";
      header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.padding = "20px 0";
      header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.05)";
    }
  });
});

document
  .getElementById("contactForm") // make sure your <form> has id="contactForm"
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = e.target;
    const button = form.querySelector('button[type="submit"]');
    const messageDiv = document.getElementById("formMessage");

    // Gather form data into a plain object
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Show loading state
    button.disabled = true;
    button.textContent = "Sending...";
    messageDiv.style.display = "none";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        messageDiv.textContent = "Message sent successfully!";
        messageDiv.className = "message success";
        form.reset();
      } else {
        // Formspree returns JSON { error: "..." }
        const err = await response.json();
        throw new Error(err.error || "Failed to send message");
      }
    } catch (err) {
      messageDiv.textContent = `Error: ${err.message}`;
      messageDiv.className = "message error";
    } finally {
      messageDiv.style.display = "block";
      button.disabled = false;
      button.textContent = "Send Message";

      // Hide message after 5 seconds
      setTimeout(() => {
        messageDiv.style.display = "none";
      }, 5000);
    }
  });
