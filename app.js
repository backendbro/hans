// Vehicle data
document.getElementById("load-more").addEventListener("click", () => {
  currentPage++;
  renderVehicles();
});

const numberedVehicles = [
  {
    id: 7,
    name: "2024 Toyota Hiace Commuter GL",
    price: "$25,200",
    image:
      "https://www.dubicars.com/images/59a4eb/w_1300x760/carzilla-motors/29fcc3e6-cd96-4b7c-bcea-08988795a5f0.jpg",
    images: [
      "https://www.dubicars.com/images/6e040b/w_1300x760/carzilla-motors/f73818e9-0966-46c8-8b8a-2327e06e2584.jpg",
      "https://www.dubicars.com/images/f36b91/w_1300x760/carzilla-motors/918afaa5-27ad-43ac-b1a6-23a402b58ef6.jpg",
      "https://www.dubicars.com/images/6d3707/w_1300x760/carzilla-motors/1683741b-010e-4c59-a597-bfae58f9a867.jpg",
      "https://www.dubicars.com/images/9bdd59/w_1300x760/carzilla-motors/f697c055-a721-4e8f-974d-f38ce19b42c4.jpg",
      "https://www.dubicars.com/images/c65a9f/w_1300x760/carzilla-motors/f4e4d65f-8984-4823-b865-50cea34895a8.jpg",
    ],
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
    images: [
      "https://www.dubicars.com/images/f8a826/r_960x540/generations/generation_64a6461cdd334_nissan-civilian-interior-cockpit.jpg?6",
      "https://www.dubicars.com/images/083108/r_960x540/generations/generation_64a6461d053a8_nissan-civilian-interior-seats.jpg?6",
      "https://www.dubicars.com/images/9ff62f/r_960x540/generations/generation_64a6461c8e48d_nissan-civilian-exterior-front.jpg?6",
    ],
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
      "https://dbz-images.dubizzle.com/images/2025/08/07/b701a31bcfbb4f45b16e25e826046167-.jpeg?impolicy=dpv",
    images: [
      "https://dbz-images.dubizzle.com/images/2025/08/07/894dd4723c9042acb579f99c27625dbb-.jpeg?impolicy=dpv",
      "https://dbz-images.dubizzle.com/images/2025/08/07/91a82219d16d440e8f61026691357a31-.jpeg?impolicy=dpv",
      "https://dbz-images.dubizzle.com/images/2025/08/07/1a1ae5c6debf4c4d86aa91c8fe0cfe06-.jpeg?impolicy=dpv",
      "https://dbz-images.dubizzle.com/images/2025/08/07/bb5c0a908cf1414f9f03bbe52232b92c-.jpeg?impolicy=dpv",
    ],
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
    id: 11,
    name: "2024 Mitsubishi Rosa Deluxe",
    price: "$25,800",
    image:
      "https://steerwellauto.com/wp-content/uploads/2024/09/1-4-1024x720.jpg",
    images: [
      "https://www.dubicars.com/images/997d76/w_1300x760/target-motors-2/b7ef6bce-c057-4ba9-afe4-04e9df5ca3ee.jpg",
      "https://www.dubicars.com/images/1fe234/w_1300x760/target-motors-2/5cd89dca-45f9-446c-80d9-362480cc15ff.jpg",
      "https://www.dubicars.com/images/5ac2d6/w_1300x760/target-motors-2/721f8d77-045e-4e93-99bc-15f6b7c79f9b.jpg",
    ],
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
    images: [
      "https://www.dealermanager.co.uk/images/202407/large/DM13344-cjuhczgb.jpg",
      "https://www.dealermanager.co.uk/images/202407/large/DM13344-ykarejiz.jpg",
      "https://www.dealermanager.co.uk/images/202407/large/DM13344-mdhfhkxb.jpg",
      "https://www.dealermanager.co.uk/images/202407/large/DM13344-egchlnph.jpg",
    ],
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
      "https://picture1.goo-net.com/7000610017/30250307/J/70006100173025030700100.jpg",
    images: [
      "https://picture1.goo-net.com/061/0610017/J/0610017A30250307W00117.jpg",
      "https://picture1.goo-net.com/061/0610017/J/0610017A30250307W00122.jpg",
      "https://picture1.goo-net.com/061/0610017/J/0610017A30250307W00123.jpg",
      "https://picture1.goo-net.com/061/0610017/J/0610017A30250307W00133.jpg",
      "https://picture1.goo-net.com/061/0610017/J/0610017A30250307W00146.jpg",
      "https://picture1.goo-net.com/061/0610017/J/0610017A30250307W00148.jpg",
      "https://picture1.goo-net.com/061/0610017/J/0610017A30250307W00154.jpg",
    ],
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
    images: [
      "https://gsat.jp/wp-content/uploads/2024/08/2024-Toyota-coaster-Long-GX-25-seater-Cold-weather-specification9-798x466.png",
      "https://gsat.jp/wp-content/uploads/2024/08/2024-Toyota-coaster-Long-GX-25-seater-Cold-weather-specification28-798x466.png",
      "https://gsat.jp/wp-content/uploads/2024/08/2024-Toyota-coaster-Long-GX-25-seater-Cold-weather-specification14-798x466.png",
      "https://gsat.jp/wp-content/uploads/2024/08/2024-Toyota-coaster-Long-GX-25-seater-Cold-weather-specification12-798x466.png",
      "https://gsat.jp/wp-content/uploads/2024/08/2024-Toyota-coaster-Long-GX-25-seater-Cold-weather-specification11-798x466.png",
      "https://gsat.jp/wp-content/uploads/2024/08/2024-Toyota-coaster-Long-GX-25-seater-Cold-weather-specification10-798x466.png",
    ],
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
    images: [
      "https://picture1.goo-net.com/090/0900002/J/0900002A30250220W00203.jpg",
      "https://picture1.goo-net.com/090/0900002/J/0900002A30250220W00204.jpg",
      "https://picture1.goo-net.com/090/0900002/J/0900002A30250220W00206.jpg",
      "https://picture1.goo-net.com/090/0900002/J/0900002A30250220W00214.jpg",
      "https://picture1.goo-net.com/090/0900002/J/0900002A30250220W00218.jpg",
      "https://picture1.goo-net.com/090/0900002/J/0900002A30250220W00229.jpg",
      "https://picture1.goo-net.com/090/0900002/J/0900002A30250220W00230.jpg",
    ],
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
      "https://cdn-media.tilabs.io/v1/media/685b7e6ba3b71b289e56e72b.jpg?width=1024&height=768&quality=70&upsize=true",
    images: [
      "https://cdn-media.tilabs.io/v1/media/685b7e6c49f2620a17101175.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/685b7e6e71e60925d3097403.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/685b7e6f2e46654f786a0043.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/685b7e70d9d9d54f1b2d13d4.jpg?width=1024&height=768&quality=70&upsize=true",
    ],
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
    images: [
      "https://cdn-media.tilabs.io/v1/media/6723dbdd90fe695a6516eff5.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/6723dbdf0003a047ba5293b8.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/6723dbe1adb62a75081d5ba4.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/6723dbe993da40375848de93.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/6723dbf0e836b773c44452f9.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/6723dbf4d0d6801b6711bb64.jpg?width=1024&height=768&quality=70&upsize=true",
    ],
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
    images: [
      "https://cdn-media.tilabs.io/v1/media/67d05fa24fd56931594e2fe3.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/67d05fa3d63e0c353e76c7de.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/67d05fa3aa765a23e049fee2.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/67d05fab8c76ea50465f9178.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/67d05fadd2d6624f275dbdf5.jpg?width=1024&height=768&quality=70&upsize=true",
    ],
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
    images: [
      "https://cdn-media.tilabs.io/v1/media/6887a09200889241674536da.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/6871370f5d071b405f69d2d5.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/6871370f23dfd67c1f50dc59.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/6871370f820301132f7ef983.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/6871370f03c9734ebc08a336.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/6871370fc69ae1495a26d1cc.jpg?width=1024&height=768&quality=70&upsize=true",
    ],
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
    images: [
      "https://cdn-media.tilabs.io/v1/media/68845cc2086e281a696e9866.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/68845cc5086e281a696e9872.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/68845cc5086e281a696e9873.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/68845cc5086e281a696e9875.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/68845cc6086e281a696e9879.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/68845cc8086e281a696e9880.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/68845cca086e281a696e9887.jpg?width=1024&height=768&quality=70&upsize=true",
    ],
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
    images: [
      "https://cdn-media.tilabs.io/v1/media/67fd46a92e70a507161705a1.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/67fd46ac153163490b6c1912.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/67fd46acc9778d0ac3755b66.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/67fd46b1fc9b517c7f5d9046.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/67fd46aaa9e66032313a5346.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/67fd46ab4a3fef4b211f4bb5.jpg?width=1024&height=768&quality=70&upsize=true",
    ],
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
    images: [
      "https://cdn-media.tilabs.io/v1/media/685e2a32270f4868f630063b.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/685e2a3741e7576e3d700d51.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/685e2a3897ab2a068563a8b8.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/685e2a39052c9c7362383425.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/685e2a3a7b775f283c5443ce.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/685e2a3b7e654c372804f8f5.jpg?width=1024&height=768&quality=70&upsize=true",
    ],
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
    images: [
      "https://cdn-media.tilabs.io/v1/media/672e3f6d4a00f316aa0f8f83.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/672e3fed63e348523b768e14.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/672e4008a41e8679473af705.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/672e40417b6798477e732836.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/672e405d1b6d3117e552c7b4.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/672e4079f517633708688dbb.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/672e40c9e32d782b0052d573.jpg?width=1024&height=768&quality=70&upsize=true",
      "https://cdn-media.tilabs.io/v1/media/672e40e32dbde016c659e8a6.jpg?width=1024&height=768&quality=70&upsize=true",
    ],
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
    images: [
      "https://www.dubicars.com/images/8c08bc/w_1300x760/al-kuwait-used-cars-exhibition-llc/9233dac6-e58c-4564-a7c3-083673d41b3f.jpeg",
      "https://www.dubicars.com/images/66f364/w_1300x760/al-kuwait-used-cars-exhibition-llc/6848ab43-645c-42ab-a5f1-27f8992f76e4.jpeg",
      "https://www.dubicars.com/images/bd5c41/w_1300x760/al-kuwait-used-cars-exhibition-llc/ce23d3d9-3270-48e0-90e0-122d81ce7698.jpeg",
      "https://www.dubicars.com/images/dbe8d2/w_1300x760/al-kuwait-used-cars-exhibition-llc/501a07d2-ac48-4a97-9231-c536dd4e4bb8.jpeg",
    ],
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
    images: [
      "https://www.dubicars.com/images/9aa023/w_1300x760/autocars/7c4b9a7f-7511-4377-9f53-944a1adbff5a.jpeg",
      "https://www.dubicars.com/images/943052/w_1300x760/autocars/25cd0462-446f-4fb1-a611-3faa010c7cb4.jpeg",
      "https://www.dubicars.com/images/26f119/w_1300x760/autocars/1e20f6d2-267e-48ba-9979-b5a02612743d.jpeg",
      "https://www.dubicars.com/images/42b0f4/w_1300x760/autocars/ffd1da81-c587-453e-b220-03a4f02be6f7.jpeg",
    ],
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
    images: [
      "https://www.dubicars.com/images/3d821a/w_1300x760/unique-cars-fze/b97b3290-be74-47ca-b3ba-02ad3b6939be.jpeg",
      "https://www.dubicars.com/images/935d8e/w_1300x760/unique-cars-fze/fbd55bef-593c-434d-bed5-da9be5a0f4b4.jpeg",
      "https://www.dubicars.com/images/c8a66e/w_1300x760/unique-cars-fze/7c55b569-2585-4845-9b49-a228771b192e.jpeg",
      "https://www.dubicars.com/images/316008/w_1300x760/unique-cars-fze/f69fe787-fd86-415d-9a53-b3e0bd58e45f.jpeg",
      "https://www.dubicars.com/images/46f94b/w_1300x760/unique-cars-fze/ea5a6f83-f082-4c8f-82fa-f794a2916387.jpeg",
      "https://www.dubicars.com/images/7affa3/w_1300x760/unique-cars-fze/11dd79d8-7aeb-4ba1-8ec6-f4c5a1477b93.jpeg",
    ],
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
      "https://www.dubicars.com/images/6b01e1/w_1300x760/target-motors-3/3da82559-1da8-47de-8f43-82cfa1febba2.jpg",
    images: [
      "https://www.dubicars.com/images/3ad778/w_1300x760/target-motors-3/fb437e38-fc6f-45dc-90d1-9c579bc43080.jpg",
      "https://www.dubicars.com/images/4fad48/w_1300x760/target-motors-3/48489f3c-fb1b-4119-baf5-33963e4e9dbf.jpg",
      "https://www.dubicars.com/images/9ded70/w_1300x760/target-motors-3/5c4b0ddd-0980-4ef5-8817-112f2ef8c789.jpg",
      "https://www.dubicars.com/images/6bbad6/w_1300x760/target-motors-3/664721f9-48f9-491f-8950-4789b5b344fd.jpg",
      "https://www.dubicars.com/images/f31eb3/w_1300x760/target-motors-3/a1fb8782-2481-4ff0-9395-bfa65bc86327.jpg",
    ],
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

const vehicles = numberedVehicles.map((vehicle, index) => ({
  ...vehicle,
  id: index + 1,
}));

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

// Assumes there is a single modal-overlay and single .modal in the DOM
const modalOverlay = document.querySelector(".modal-overlay");
const modal = modalOverlay.querySelector(".modal");
const closeModalBtn = modal.querySelector(".close-modal");

// store references to listeners so we can clean up
let activeListeners = [];

function openModal(id, type) {
  let item;
  if (type === "vehicle") {
    item = vehicles.find((v) => v.id == id);
  } else {
    item = solarPanels.find((s) => s.id == id);
  }
  if (!item) return;

  // Fill basic fields
  modal.querySelector(".modal-title").textContent = item.name || "";
  modal.querySelector(".modal-price").textContent = item.price || "";
  modal.querySelector(".modal-description").textContent =
    item.description || "";

  // Carousel track
  const track = modal.querySelector(".carousel-track");
  const hasImages = item.images && item.images.length > 0;
  track.innerHTML = hasImages
    ? item.images.map((url) => `<img src="${url}" alt="Image">`).join("")
    : `<img src="${item.image}" alt="Default Image">`;

  // Specs grid (clear + re-render)
  const specsGrid = modal.querySelector(".specs-grid");
  specsGrid.innerHTML = "";
  for (const [key, value] of Object.entries(item.specs || {})) {
    const spec = document.createElement("div");
    spec.className = "spec";
    spec.innerHTML = `
      <div class="spec-title">${key.toUpperCase()}</div>
      <div class="spec-value">${value}</div>
    `;
    specsGrid.appendChild(spec);
  }

  // --- Carousel logic ---
  let currentIndex = 0;
  const totalImages = hasImages ? item.images.length : 1;

  // ensure track starts at 0
  const updateCarousel = (animate = true) => {
    if (!animate) track.style.transition = "none";
    else track.style.transition = "transform 0.35s ease";
    // Use calc so touch move can temporarily set transform in px if needed
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

  // Buttons - ensure they exist (they are in your HTML)
  const prevBtn = modal.querySelector(".carousel-btn.prev");
  const nextBtn = modal.querySelector(".carousel-btn.next");

  // click handlers (replace previous handlers to avoid duplicates)
  const onPrev = () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  };
  const onNext = () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  };

  // Attach and remember listeners for cleanup
  prevBtn.onclick = onPrev;
  nextBtn.onclick = onNext;
  activeListeners.push(() => {
    prevBtn.onclick = null;
    nextBtn.onclick = null;
  });

  updateCarousel(false);

  // --- Touch / swipe support for mobile ---
  let touchStartX = 0;
  let touchDeltaX = 0;
  const threshold = 50; // px to consider a swipe

  const onTouchStart = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
    track.style.transition = "none"; // disable transition while dragging
  };

  const onTouchMove = (e) => {
    if (!e.touches || e.touches.length === 0) return;
    touchDeltaX = e.touches[0].clientX - touchStartX;
    // allow a little resistance by converting px to calc expression
    track.style.transform = `translateX(calc(-${
      currentIndex * 100
    }% + ${touchDeltaX}px))`;
  };

  const onTouchEnd = () => {
    // Determine if swipe exceeded threshold
    if (Math.abs(touchDeltaX) > threshold) {
      if (touchDeltaX < 0) {
        // swipe left -> next
        currentIndex = (currentIndex + 1) % totalImages;
      } else {
        // swipe right -> prev
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
      }
    }
    // reset transform with animation
    updateCarousel(true);
    touchStartX = 0;
    touchDeltaX = 0;
  };

  track.addEventListener("touchstart", onTouchStart, { passive: true });
  track.addEventListener("touchmove", onTouchMove, { passive: true });
  track.addEventListener("touchend", onTouchEnd);
  activeListeners.push(() => {
    track.removeEventListener("touchstart", onTouchStart);
    track.removeEventListener("touchmove", onTouchMove);
    track.removeEventListener("touchend", onTouchEnd);
  });

  // Optional: keyboard support (left/right arrows) for accessibility
  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") onPrev();
    if (e.key === "ArrowRight") onNext();
    if (e.key === "Escape") closeModal(); // close on Esc
  };
  document.addEventListener("keydown", onKeyDown);
  activeListeners.push(() =>
    document.removeEventListener("keydown", onKeyDown)
  );

  // Show modal
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";

  // store a cleanup function on the modal element so close handlers can call it
  modal._cleanup = () => {
    // call and clear stored cleanup functions
    while (activeListeners.length) {
      const fn = activeListeners.pop();
      try {
        fn();
      } catch (err) {
        /* ignore */
      }
    }
    // reset track transform
    track.style.transform = "";
    track.style.transition = "";
    // remove any leftover onclicks as extra safety
    if (prevBtn) prevBtn.onclick = null;
    if (nextBtn) nextBtn.onclick = null;
    // clear _cleanup itself
    delete modal._cleanup;
  };
}

// Re-usable close function to ensure cleanup
function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
  // if any cleanup registered, call it
  if (modal._cleanup) modal._cleanup();
}

// hook up close button
closeModalBtn.addEventListener("click", closeModal);

// Close modal when clicking outside (on overlay)
modalOverlay.addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
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
