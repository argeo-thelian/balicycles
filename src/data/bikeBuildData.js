export const bikeBuildData = {
  ruta: {
    title: "Road Performance",
    subtitle: "Velocidad Pura",
    // Datos de la tabla de geometría
    geometryHeaders: ["Size", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
    geometryData: [
      ["46", "440", "503", "100", "410", "570", "75.0°", "70.0°", "74", "371", "43", "969.5", "500", "364"],
      ["49", "470", "526", "105", "410", "577", "75.0°", "72.0°", "74", "371", "43", "976", "511", "385"],
      ["52", "490", "530", "109", "410", "581", "75.0°", "72.5°", "74", "371", "43", "979", "517", "391"],
      ["54", "510", "540", "127", "410", "588", "75.0°", "73.0°", "74", "371", "43", "987", "534", "397"],
      ["56", "530", "562", "147", "410", "600", "74.5°", "73.5°", "74", "371", "43", "999", "555", "408"],
      ["58", "550", "576", "174", "410", "615", "74.5°", "73.5°", "74", "371", "43", "1014", "581", "415"],
    ],
    // Vector de construcción
    builds: [
      {
        id: "route_build_01_es",
        model: "AERO STRATOS ONE",
        tagline: "Dominio Aerodinámico",
        price: "$3,500 USD",
        image: "./assets/images/media/route-build-2.jpeg",
        geometryImage: "./assets/images/metrics/route-inst-high.png",
        Frame: { description: "Cuadro T1000 con hardware integrado", material: "Carbon fiber T1000", dimension: "Size 52", type: "Road / Integrated", weight: "909gr", extra_features: "Hidden screw fit, thru axles" },
        Fork: { description: "Horquilla T1000", material: "Carbon fiber T1000", dimension: "Standard Road", type: "Rigid", weight: "369gr", extra_features: "Matches frame design" },
        Cockpit: [
          { description: "Integrated Aero Handlebar", material: "Carbon fiber", dimension: "N/A", type: "Aero", weight: "340gr" },
          { description: "Saddle Post", material: "Carbon fiber", dimension: "N/A", type: "Standard", weight: "214gr" },
          { description: "Ergonomic Saddle SD8000", material: "Carbon fiber / 3D Printed Polymer", dimension: "N/A", type: "3D Printed", weight: "160gr" },
          { description: "Headset & Spacers", material: "Carbon spacer", dimension: "N/A", type: "Hidden / Integrated", weight: "Included" },
          { description: "Handlebar Tape", material: "EVA Polyurethane", dimension: "3mm thickness", type: "Grip", weight: "N/A" }
        ],
        Drivetrain: [
          { description: "Groupset (Shifters & Brakes) Wheeltop EDS TS", material: "Composite / Metal mixture", dimension: "12 speed", type: "Wireless / Hydraulic Disc", weight: "N/A" },
          { description: "Crankset Rotor Aldu+", material: "Aluminum 7075", dimension: "170mm arm, 50-34T", type: "Double Chainring", weight: "720gr" },
          { description: "Bottom Bracket Kactus", material: "Ceramic bearings", dimension: "T47 threaded / 24mm axle", type: "Threaded", weight: "N/A" },
          { description: "Rear Derailleur Pulley", material: "Ceramic", dimension: "N/A", type: "Oversized/Standard upgrade", weight: "N/A" },
          { description: "Cassette ZRACE XDR", material: "Metal alloy (Tornasol/Plata/Oro)", dimension: "11-33T", type: "Ultralight XDR", weight: "N/A" },
          { description: "Chain YBN SLA", material: "Tornasol coating", dimension: "126 links", type: "3x Durability", weight: "220gr" }
        ],
        Wheelset: [
          { description: "Rims & Hubs Assembly", material: "Carbon fiber T1000 / Titanium Hubs", dimension: "45mm depth", type: "Ondulated Aero / Ceramic Hubs", weight: "N/A" },
          { description: "Tires INNOVA PRO GLIDE", material: "Rubber compound", dimension: "700x28c", type: "Clincher", weight: "N/A" },
          { description: "Tubes INNOVA PRO", material: "Green material (Likely TPU/Latex)", dimension: "700x18-28 sv60", type: "Inner tube", weight: "N/A" },
          { description: "Brake Discs Kactus", material: "Steel / Alloy carrier", dimension: "160mm", type: "Centerlock Ultralight", weight: "N/A" }
        ],
        Meta: { total_weight: "6.9 kgs", calculation_note: "Ultralight build" }
      }
    ]
  },
  gravel: {
    title: "Gravel & Adventure",
    subtitle: "Terreno Mixto",
    geometryHeaders: ["Size", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"],
    geometryData: [
      ["490", "490", "541", "90", "435", "602", "74.1°", "71.2°", "78", "400", "50", "1025", "527", "391"],
      ["520", "520", "555", "105", "435", "609", "73.7°", "71.6°", "78", "400", "50", "1032", "542", "396"],
      ["540", "540", "570", "125", "435", "617", "73.2°", "71.8°", "78", "400", "50", "1040", "562", "400"],
      ["560", "560", "584", "145", "435", "623", "72.8°", "72.2°", "78", "400", "50", "1046", "582", "404"],
      ["580", "580", "597", "165", "435", "632", "72.5°", "72.3°", "78", "400", "50", "1055", "602", "407"],
    ],
    builds: [
      {
        id: "gravel_build_01_es",
        model: "TERRA NOMAD X",
        tagline: "Sin Límites",
        price: "$3,200 USD",
        image: "./assets/images/media/gravel-build-2.jpeg",
        geometryImage: "./assets/images/metrics/gravel-inst-high.png",
        Frame: { description: "Cuadro T1000 Gravel/Adventure", material: "Carbon fiber T1000", dimension: "Size 54", type: "Gravel / Internal Storage", weight: "923gr", extra_features: "Tools bag inside frame" },
        Fork: { description: "Horquilla T1000", material: "Carbon fiber T1000", dimension: "Standard Gravel", type: "Rigid", weight: "447gr", extra_features: "Matches frame design" },
        Cockpit: [
          { description: "Aero Handlebar", material: "Carbon fiber", dimension: "Wide for ultraraces", type: "Aero / Ultra-endurance", weight: "365gr" },
          { description: "Saddle Post", material: "Carbon fiber", dimension: "N/A", type: "Standard", weight: "205gr" },
          { description: "Ergonomic Saddle SD8000", material: "Carbon fiber / 3D Printed Polymer", dimension: "N/A", type: "3D Printed", weight: "160gr" },
          { description: "Headset & Spacers", material: "Carbon spacer", dimension: "N/A", type: "Hidden / Integrated", weight: "Included" },
          { description: "Handlebar Tape", material: "EVA Polyurethane", dimension: "3mm thickness", type: "Grip", weight: "N/A" }
        ],
        Drivetrain: [
          { description: "Groupset Wheeltop GEX", material: "Composite / Metal", dimension: "12 speed", type: "Wireless / Hydraulic Disc", weight: "N/A" },
          { description: "Crankset Zrace Unchained One", material: "Carbon fiber / Aluminum", dimension: "42T Chainring", type: "1x System", weight: "385gr" },
          { description: "Bottom Bracket Kactus", material: "Ceramic bearings", dimension: "T47 / DUB 30mm", type: "Threaded", weight: "N/A" },
          { description: "Cassette ZRACE Alpha", material: "Metal alloy (Tornasol)", dimension: "11-51T", type: "Wide Range / Ultralight", weight: "N/A" },
          { description: "Chain YBN SLA", material: "Tornasol coating", dimension: "126 links", type: "3x Durability", weight: "220gr" }
        ],
        Wheelset: [
          { description: "Rims & Hubs Assembly", material: "Carbon T1000 / Steel Rays", dimension: "45mm depth", type: "Ondulated / Ceramic Hubs", weight: "N/A" },
          { description: "Tires INNOVA PRO STAMPEDE", material: "Rubber compound", dimension: "700x40c", type: "Gravel / Off-road", weight: "N/A" },
          { description: "Tubes INNOVA PRO BLUE", material: "Blue material (TPU)", dimension: "700x30-45", type: "Inner tube", weight: "N/A" },
          { description: "Brake Discs Kactus", material: "Steel / Alloy", dimension: "160mm", type: "Centerlock Ultralight", weight: "N/A" }
        ],
        Meta: { total_weight: "7.8 kgs", calculation_note: "Gravel lightweight build" }
      }
    ]
  },
  electrica: {
    title: "E-Power Series",
    subtitle: "Asistencia Inteligente",
    geometryHeaders: ["Size", "C-T", "A", "O", "TT", "HT", "ST", "BB", "RC", "WB", "FC", "F", "REACH", "STACK"],
    geometryData: [
      ["15.5\"", "400", "133", "51", "620.1", "68°", "72.4°", "15.8", "500", "1222.5", "722.9", "540", "423", "621.6"],
      ["17.5\"", "451", "143", "51", "646.3", "68°", "72.4°", "15.8", "500", "1250", "749.8", "540", "446", "630.9"],
      ["19\"", "482", "153", "51", "672", "68°", "72.4°", "15.8", "500", "1276", "776", "540", "469", "640.1"],
    ],
    builds: [
      {
        id: "e-mtb_build_01_es",
        model: "VOLT ENDURANCE",
        tagline: "Poder Silencioso",
        price: "$5,100 USD",
        image: "./assets/images/media/ebike-build-2.jpeg",
        geometryImage: "./assets/images/metrics/ebike-inst-high.png",
        Frame: { description: "Cuadro E-MTB Full Suspension T800 + Shock DNM", material: "Carbon fiber T800", dimension: "Size 17.5\" / Shock 190x50mm", type: "Full Suspension", weight: "3300gr", extra_features: "DNM AOY-38 Shock included" },
        Fork: { description: "Suspensión Tanke", material: "Alloy / Magnesium", dimension: "180mm travel / 38mm", type: "Air / Enduro", weight: "N/A", extra_features: "Colors: Orange, Black, Grey" },
        "E-System": [
          { description: "Motor Bafang M560", material: "Metal / Composite", dimension: "500W / 142Nm", type: "Mid-drive Motor", weight: "2950gr", capacity: "840Wh", with_extender: "1,430Wh", rage: "100 - 200 km"  },
          { description: "Batería SYR-006 Samsung", material: "Lithium-Ion 18650", dimension: "48V 17.5AH", type: "Removable", weight: "4100gr" },
          { description: "Cargador", material: "Plastic housing", dimension: "51.8V 3A", type: "AC/DC Charger", weight: "N/A" }
        ],
        Cockpit: [
          { description: "Manubrio MTB HB005", material: "Carbon fiber", dimension: "N/A", type: "Riser / Flat", weight: "250gr" },
          { description: "Poste de asiento (Dropper) RIRO", material: "Alloy", dimension: "N/A", type: "Manual Dropper", weight: "597gr" },
          { description: "Sillín Ergonómico SD2000", material: "Carbon fiber / 3D Printed", dimension: "N/A", type: "3D Printed", weight: "160gr" },
          { description: "Puños (Grips)", material: "Rubber", dimension: "Standard", type: "Ergonomic", weight: "N/A" }
        ],
        Drivetrain: [
          { description: "Cambios Wheeltop EDS OS 2.0", material: "Composite / Aluminum", dimension: "12 speed", type: "Wireless", weight: "N/A" },
          { description: "Frenos Wheeltop MA3000", material: "Aluminum", dimension: "Double piston", type: "Hydraulic Disc", weight: "N/A" },
          { description: "Cassette ZRACE Alpha", material: "Metal alloy (Tornasol)", dimension: "11-45T", type: "Ultralight", weight: "N/A" },
          { description: "Cadena YBN SLA", material: "Tornasol coating", dimension: "126 links", type: "3x Durability", weight: "220gr" }
        ],
        Wheelset: [
          { description: "Rines & Hubs Assembly", material: "Carbon Rims / Sapim Rays", dimension: "35mm Asymmetric / 29\"", type: "MTB Asymmetric", weight: "N/A" },
          { description: "Llantas (Tires) Maxxis Rekon Race", material: "Rubber compound", dimension: "29x2.35", type: "XC / Trail", weight: "N/A" },
          { description: "Discos de freno Kactus", material: "Steel / Alloy", dimension: "180mm", type: "Centerlock Ultralight", weight: "N/A" }
        ],
        Meta: { total_weight: "19.8 kgs", calculation_note: "Lightweight E-MTB build" }
      }
    ]
  }
};