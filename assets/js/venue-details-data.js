/**
 * AURA EVENTS - LUXURY VENUES REPOSITORY & EVENT DATA
 * Dedicated dataset for Venue Details, Past Events Gallery, and Host Reviews
 */

const DETAILED_VENUES = [
  {
    id: "v-royal-palm",
    name: "The Royal Palm Grand Ballroom",
    tagline: "Islamabad's Most Prestigious Grand Wedding & Banquet Hall",
    location: "Club Road, Islamabad",
    address: "Plot 12, Club Road, Near Rawal Lake, Islamabad, 44000",
    capacity: 650,
    theaterCapacity: 900,
    price: 350000,
    type: "indoor",
    typeBadge: "Indoor Royal Ballroom",
    rating: 4.9,
    reviewsCount: 48,
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    description: "The Royal Palm Grand Ballroom represents the pinnacle of luxury event architecture in the twin cities. Featuring imported Swarovski crystal chandeliers suspended from towering 26-foot ceilings, bespoke hand-tufted Persian carpeting, and professional acoustic dampening, it is designed for grand society weddings, diplomatic galas, and premier banquets. The hall features an integrated 40ft LED backdrop stage, private bridal prep sanctuary, and private VIP foyer for dignitary arrivals.",
    specifications: {
      area: "14,500 sq. ft.",
      ceilingHeight: "26 ft. Clear Height",
      banquetCapacity: "650 Seated Guests",
      theaterCapacity: "900 Floating Delegates",
      parkingSlots: "350+ Valet Parking Capacity",
      stageDimensions: "42ft Width x 22ft Depth",
      generatorBackup: "Dual 500 kVA Automatic Diesel Generators",
      climateControl: "Multi-Zone Central HVAC with Air Filtration"
    },
    facilities: [
      "Dedicated Valet Parking with Chauffeur Lounge",
      "Private Bridal Sanctuary Suite with Vanity & En-Suite Bath",
      "P3 Ultra-HD Stage LED Wall Ready (40ft x 15ft)",
      "Dual 500 kVA Automatic Generator Backup (Zero Downtime)",
      "Central Dual-Chiller Climate Control System",
      "VIP Foyer with Diplomatic Protocol Protocol Access",
      "Concert-Grade Line-Array Sound & Acoustic Engineering",
      "In-House Commercial Food Staging & Warming Kitchen"
    ],
    gallery: [
      {
        id: "rp-event-1",
        title: "Royal Barat: Hamza & Ayesha",
        category: "wedding",
        categoryLabel: "Royal Barat",
        date: "November 2025",
        guests: 620,
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        description: "An imperial Crimson & Gold themed Barat reception featuring 8,000 imported Dutch roses, crystal candelabras on 60 banquet tables, and an elevated glass bridal catwalk.",
        decorHighlight: "Imported Dutch Red Roses & 24k Gold Candelabras"
      },
      {
        id: "rp-event-2",
        title: "Pakistan Tech Leadership Summit 2025",
        category: "corporate",
        categoryLabel: "Corporate Summit",
        date: "January 2026",
        guests: 500,
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
        description: "National executive summit attended by tech founders and government officials. Utilized the integrated P3 LED wall, live translation booths, and round-table networking lunch.",
        decorHighlight: "Synchronized Dual 4K LED Screen Setup"
      },
      {
        id: "rp-event-3",
        title: "Celestial White Walima: Daniyal & Maria",
        category: "wedding",
        categoryLabel: "Walima Reception",
        date: "December 2025",
        guests: 580,
        image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=800&q=80",
        description: "A dreamlike winter pastel aesthetic featuring hanging wisteria floral clouds, warm amber pin-spot lighting, and live acoustic violin ensemble during dinner service.",
        decorHighlight: "Hanging Wisteria Floral Clouds & Amber Pinspots"
      },
      {
        id: "rp-event-4",
        title: "Diplomatic Silver Jubilee Gala Dinner",
        category: "corporate",
        categoryLabel: "Diplomatic Gala",
        date: "October 2025",
        guests: 450,
        image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
        description: "Black-tie diplomatic banquet hosted for international delegates. Featured formal 5-course seated dining, high-security protocol reception, and royal fanfare greeting.",
        decorHighlight: "Five-Course Formal Silver Service Setting"
      }
    ],
    comments: [
      {
        id: "rp-comm-1",
        userName: "Brigadier (R) Tariq Mahmood",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        eventHeld: "Daughter's Barat Reception (620 Guests)",
        eventDate: "November 2025",
        verified: true,
        text: "We hosted our eldest daughter’s wedding here last month with 620 guests. The Royal Palm team was absolutely world-class. Valet parking on Club Road handled hundreds of vehicles without a single hitch or delay. The private bridal suite gave my daughter complete calm and luxury before the entrance. Truly magnificent ballroom!",
        helpfulCount: 34
      },
      {
        id: "rp-comm-2",
        userName: "Dr. Ayesha Rehman",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        eventHeld: "Pakistan Tech Summit & Gala Dinner (500 Delegates)",
        eventDate: "January 2026",
        verified: true,
        text: "The acoustics in this hall are remarkably engineered. We were concerned about echo with 500 attendees, but every keynote speech sounded razor sharp through their line-array system. The central air conditioning maintained a crisp, pleasant climate all evening. Highly impressed.",
        helpfulCount: 22
      },
      {
        id: "rp-comm-3",
        userName: "Zubair Farooq Qureshi",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        eventHeld: "Family Walima Reception (580 Guests)",
        eventDate: "December 2025",
        verified: true,
        text: "The sheer grandeur of the crystal chandeliers saved us a fortune on decorative ceiling rigging. The hall speaks for itself. Our photographer said this is by far the easiest venue in Islamabad to shoot cinematic wedding footage. The staff was courteous and attentive to all our elderly relatives.",
        helpfulCount: 19
      }
    ]
  },
  {
    id: "v-serena-sheesh",
    name: "Serena Sheesh Mahal Hall",
    tagline: "Regal Mughal Mirror-Work Hall with 5-Star Diplomatic Hospitality",
    location: "Khayaban-e-Suhrawardy, Islamabad",
    address: "Serena Hotel, Sector G-5/1, Khayaban-e-Suhrawardy, Islamabad",
    capacity: 500,
    theaterCapacity: 750,
    price: 450000,
    type: "indoor",
    typeBadge: "Heritage 5-Star Hall",
    rating: 5.0,
    reviewsCount: 56,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    description: "Serena Sheesh Mahal Hall is an architectural tour de force inspired by Mughal imperial palaces. The walls and arched columns are inlaid with thousands of hand-cut convex glass mirrors that sparkle under ambient chandelier light. Nestled within Islamabad's high-security diplomatic enclave, it offers uncompromising safety protocols, dedicated VVIP reception lounges, and five-star culinary curation from master executive chefs.",
    specifications: {
      area: "12,200 sq. ft.",
      ceilingHeight: "22 ft. Arched Vault",
      banquetCapacity: "500 Seated Guests",
      theaterCapacity: "750 Standing Guests",
      parkingSlots: "500+ Secured Hotel Valet Slots",
      stageDimensions: "38ft Width x 20ft Depth",
      generatorBackup: "Full 100% Hotel Grid Dual Backup",
      climateControl: "5-Star Chilled Water Air Handling System"
    },
    facilities: [
      "Five-Star Uniformed White-Glove Hospitality Staff",
      "Secured Diplomatic Enclave with Pre-Cleared Protocol Access",
      "Private VVIP Green Rooms & Powder Rooms",
      "In-House Master Culinary Kitchens & Pastry Cheferie",
      "Valet Security Clearance & Automated Scanning",
      "Custom Mughal Stage Backdrop & Chandeliers",
      "High-Definition Integrated Audio & Mood Lighting System",
      "Dedicated On-Site Event Concierge & Butler Service"
    ],
    gallery: [
      {
        id: "ss-event-1",
        title: "Regal Mughal Barat: Daniyal & Aiman",
        category: "wedding",
        categoryLabel: "Royal Barat",
        date: "October 2025",
        guests: 480,
        image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
        description: "Classic Mughal imperial decor highlighting the mirror arches with marigold and deep brass diya lanterns, complimented by live Shehnai melodies.",
        decorHighlight: "Thousands of Diya Lanterns & Brass Candelabras"
      },
      {
        id: "ss-event-2",
        title: "International Diplomatic Charity Gala",
        category: "corporate",
        categoryLabel: "Diplomatic Gala",
        date: "December 2025",
        guests: 380,
        image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
        description: "A black-tie bilateral summit attended by 30+ ambassadors. Formal seated banquet featuring international fusion menu and bespoke orchestral performance.",
        decorHighlight: "Black-Tie Royal Silver Table Dressing"
      },
      {
        id: "ss-event-3",
        title: "Rose & Pearl Walima: Zayd & Mahnoor",
        category: "wedding",
        categoryLabel: "Walima Banquet",
        date: "February 2026",
        guests: 460,
        image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
        description: "Pastel blush floral runners across 45 round banquet tables with mirror chargers reflecting candlelight, creating a warm golden glow.",
        decorHighlight: "Mirror Charger Plates & Candlelit Table Runners"
      },
      {
        id: "ss-event-4",
        title: "Haute Couture Bridal Runway Gala",
        category: "corporate",
        categoryLabel: "Fashion Gala",
        date: "November 2025",
        guests: 320,
        image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80",
        description: "Exclusive fashion preview featuring a 60ft mirrored runway, dynamic theatrical spotlights, and an elite guest list of designers and tastemakers.",
        decorHighlight: "60ft Mirrored Runway & Studio Spotlights"
      }
    ],
    comments: [
      {
        id: "ss-comm-1",
        userName: "Ambassador Khalid Qureshi",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        eventHeld: "Bilateral Diplomatic Dinner (380 Guests)",
        eventDate: "December 2025",
        verified: true,
        text: "For diplomatic protocol and foreign dignitary security, Serena Sheesh Mahal is beyond comparison. The private reception lounge allowed ambassadors to converse comfortably before the banquet. Five-star food presentation and impeccable service from the hotel staff.",
        helpfulCount: 41
      },
      {
        id: "ss-comm-2",
        userName: "Dr. Mehrunnisa Khan",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        eventHeld: "Son's Grand Walima (460 Guests)",
        eventDate: "February 2026",
        verified: true,
        text: "The mirror mosaic (Sheesh Mahal) creates an ethereal radiance that no camera can fully capture! The banquet management accommodated our customized Kashmiri and Continental menu flawlessly. Our guests haven't stopped complimenting the evening.",
        helpfulCount: 28
      },
      {
        id: "ss-comm-3",
        userName: "Naveed Hashmi",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        eventHeld: "Luxury Barat Ceremony (480 Guests)",
        eventDate: "October 2025",
        verified: true,
        text: "Serena's hospitality standard is the benchmark for Pakistani events. Everything moved like clockwork—from the bridal procession fanfare to the simultaneous hot dinner serving for 480 guests. Absolutely worth every single penny.",
        helpfulCount: 20
      }
    ]
  },
  {
    id: "v-margalla-pavilion",
    name: "Margalla Hillview Garden Pavilion",
    tagline: "Panoramic Open-Air Mountain Enclave for Enchanting Fairy-Light Nights",
    location: "Pir Sohawa Scenic Enclave",
    address: "Kilometer 14, Pir Sohawa Road, Margalla Ridge, Islamabad",
    capacity: 400,
    theaterCapacity: 600,
    price: 240000,
    type: "outdoor",
    typeBadge: "Outdoor Scenic Lawns",
    rating: 4.8,
    reviewsCount: 39,
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80",
    description: "Perched high on the crest of the Margalla Hills, the Hillview Garden Pavilion offers an unmatched natural amphitheater overlooking the twinkling lights of Islamabad below. Featuring manicured multi-tiered lawns, an integrated 10,000-bulb warm fairy light canopy, outdoor bonfire lounges, and stone gazebo pavilions, it is the premier choice for vibrant Mehndi celebrations, romantic sunset Nikkahs, and cozy winter barbecue soirees.",
    specifications: {
      area: "25,000 sq. ft. Manicured Terraced Grounds",
      ceilingHeight: "Open Sky & Fairy Light Canopy",
      banquetCapacity: "400 Seated Guests",
      theaterCapacity: "600 Festival Guests",
      parkingSlots: "200 Dedicated Mountain Ridge Valet Slots",
      stageDimensions: "36ft Wooden Pergola Stage",
      generatorBackup: "Heavy-Duty Dual 350 kVA Mountain Generators",
      climateControl: "Commercial Outdoor Radiant Heaters & Fire Pits"
    },
    facilities: [
      "Panoramic 180° Views of Islamabad City Skyline & Hills",
      "Permanent 10,000 Warm Fairy Light Canopy Installed",
      "Open-Air Live BBQ & Artisan Karahi Counters",
      "Tiered Lawns for Flexible Seating & Dhol Circles",
      "Commercial Radiant Heaters & Bonfire Hearth Pits",
      "Bridal Wooden Chalet Prep Cottage on Ridge",
      "Professional Mountain-Spec Acoustic Sound Truss",
      "Ample Secured Terraced Ridge Parking with Shuttles"
    ],
    gallery: [
      {
        id: "mp-event-1",
        title: "Fairy Tale Mehndi of Lights: Saad & Hira",
        category: "mehndi",
        categoryLabel: "Mehndi Night",
        date: "November 2025",
        guests: 350,
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
        description: "A vibrant festival of colors featuring 10,000 twinkling fairy lights overhead, marigold-wrapped jhoolas (swings), low Moroccan diwan floor seating, and high-energy dhol dances.",
        decorHighlight: "Marigold Swings & 10,000 Fairy Lights"
      },
      {
        id: "mp-event-2",
        title: "Sufi Mystique Winter Qawwali Night",
        category: "cultural",
        categoryLabel: "Sufi Musical Soirée",
        date: "December 2025",
        guests: 300,
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
        description: "An intimate winter musical evening featuring live Qawwali performance, outdoor bonfire hearths, warm shawls, and steaming Kashmiri pink chai live stations.",
        decorHighlight: "Bonfire Hearths & Traditional Kashmiri Chai Stalls"
      },
      {
        id: "mp-event-3",
        title: "Bohemian Sunset Nikkah: Shahmeer & Alizeh",
        category: "wedding",
        categoryLabel: "Sunset Nikkah",
        date: "January 2026",
        guests: 260,
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
        description: "Golden hour ceremony overlooking the Margalla ridge. Adorned with natural pampas grass arches, white rose petals, and acoustic sarangi background melodies.",
        decorHighlight: "Natural Pampas Grass Arches & White Petal Aisle"
      },
      {
        id: "mp-event-4",
        title: "Corporate Winter Hilltop Barbecue",
        category: "corporate",
        categoryLabel: "Corporate Dinner",
        date: "October 2025",
        guests: 220,
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
        description: "Annual executive retreat featuring live grilled lamb mutton ribs, Sajji stations, bonfire lounge circles, and stunning night views of the capital.",
        decorHighlight: "Live Open-Pit Sajji & Barbecue Station"
      }
    ],
    comments: [
      {
        id: "mp-comm-1",
        userName: "Zainab Usman",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        eventHeld: "Sister's Fairy-Light Mehndi (350 Guests)",
        eventDate: "November 2025",
        verified: true,
        text: "The canopy of fairy lights with the twinkling Islamabad city view below felt straight out of a dream! The Margalla team arranged heavy-duty patio heaters and fire pits that kept all 350 guests cozy throughout the November chill. Our guests still talk about the live dhol dances under the night sky.",
        helpfulCount: 38
      },
      {
        id: "mp-comm-2",
        userName: "Shahid Afridi Khan",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        eventHeld: "Winter Qawwali & Dinner (300 Guests)",
        eventDate: "December 2025",
        verified: true,
        text: "If you want an authentic outdoor winter experience in the hills, this is the #1 venue. The acoustic sound setup on the stone pergola carried the vocals crisply across the terrace without any distortion. Ample parking on the ridge with valet attendants directing cars smoothly.",
        helpfulCount: 26
      },
      {
        id: "mp-comm-3",
        userName: "Fatima Sohail",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        rating: 4.8,
        eventHeld: "Sunset Nikkah & Family Dinner (260 Guests)",
        eventDate: "January 2026",
        verified: true,
        text: "The sunset photos during our Nikkah were simply breathtaking! The bridal prep chalet at the edge of the lawn made it so stress-free for makeup touch-ups. The hot Jalebi and live chai counters were a massive hit.",
        helpfulCount: 17
      }
    ]
  },
  {
    id: "v-pearl-continental",
    name: "PC Crystal Hall & Marquee",
    tagline: "Expansive Mega-Capacity Ballroom for Royal Weddings & National Conventions",
    location: "Mall Road, Rawalpindi",
    address: "Pearl Continental Hotel, The Mall, Rawalpindi Cantonment, 46000",
    capacity: 800,
    theaterCapacity: 1200,
    price: 380000,
    type: "indoor",
    typeBadge: "Grand Mega Ballroom",
    rating: 4.9,
    reviewsCount: 62,
    image: "https://images.unsplash.com/photo-1545232979-fbf68fe9b1a2?auto=format&fit=crop&w=1200&q=80",
    description: "Built for massive gatherings, royal grand weddings, and major national conventions, PC Crystal Hall & Marquee is the largest luxury banquet space in Rawalpindi. With a completely pillar-free columnless interior spanning 18,000 square feet and soaring 28-foot ceilings, every single attendee enjoys unobstructed sightlines to the stage. Features dual high-capacity foyers, multiple VIP executive boardrooms, and concert-grade audiovisual infrastructure.",
    specifications: {
      area: "18,000 sq. ft. Column-Free Hall",
      ceilingHeight: "28 ft. Industrial Truss Height",
      banquetCapacity: "800 Seated Guests",
      theaterCapacity: "1,200 Convention Attendees",
      parkingSlots: "450+ Secure Cantonment Parking Spaces",
      stageDimensions: "50ft Width x 25ft Depth",
      generatorBackup: "Triple Grid-Tied 600 kVA Generators",
      climateControl: "Industrial Central Air Chilling System"
    },
    facilities: [
      "Monumental 800+ Guest Seating Capacity (Column-Free)",
      "Dual Grand Entrances & Expansive Guest Welcoming Foyers",
      "Attached Executive VIP Green Rooms & Media Lounges",
      "Full Concert-Grade Line-Array AV Console & Lighting Rigs",
      "High-Speed Heavy Passenger & Service Elevators",
      "Cantt Secured Location with 24/7 Monitored Surveillance",
      "Dedicated Dessert & Buffet Pavilions with Chef Stations",
      "Comprehensive Valet Logistics Fleet & Shuttle Runners"
    ],
    gallery: [
      {
        id: "pc-event-1",
        title: "Monumental Barat: Waleed & Maham",
        category: "wedding",
        categoryLabel: "Royal Barat",
        date: "December 2025",
        guests: 750,
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
        description: "A monumental 750-guest wedding featuring a 50ft floral stage backdrop, four royal dining aisles, crystal chandeliers, and red-carpet entryway fanfare.",
        decorHighlight: "50ft Fresh Floral Stage & 4 Grand Dining Aisles"
      },
      {
        id: "pc-event-2",
        title: "National Healthcare Innovation Congress",
        category: "corporate",
        categoryLabel: "National Congress",
        date: "November 2025",
        guests: 800,
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
        description: "Three-day medical convention featuring synchronized multi-projector screens, exhibition booth areas in the foyer, and 800-person banquet dinner.",
        decorHighlight: "Synchronized Triple HD Projector Truss"
      },
      {
        id: "pc-event-3",
        title: "Grand Walima Extravaganza: Bilal & Zara",
        category: "wedding",
        categoryLabel: "Walima Banquet",
        date: "January 2026",
        guests: 700,
        image: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?auto=format&fit=crop&w=800&q=80",
        description: "Lavish evening featuring 70 banquet tables, ivory and champagne silk linens, customized dessert fountain pavilion, and live string quartet.",
        decorHighlight: "Ivory Silk Linens & Artisan Dessert Pavilion"
      },
      {
        id: "pc-event-4",
        title: "Annual Corporate Excellence Gala",
        category: "corporate",
        categoryLabel: "Corporate Gala",
        date: "October 2025",
        guests: 600,
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
        description: "Prestigious corporate awards ceremony with moving-head lighting, theatrical fog, executive round table dinner, and awards presentation podium.",
        decorHighlight: "Moving-Head Theatrical Intelligent Lighting"
      }
    ],
    comments: [
      {
        id: "pc-comm-1",
        userName: "Senator Tariq Aziz",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        eventHeld: "Son's Barat Ceremony (750 Guests)",
        eventDate: "December 2025",
        verified: true,
        text: "When you have 700+ guests coming from across Punjab and Islamabad, crowd control and parking are your primary stresses. PC Crystal Hall handled our massive gathering with extraordinary composure. The dual foyer setup absorbed arrivals smoothly without any crowding.",
        helpfulCount: 45
      },
      {
        id: "pc-comm-2",
        userName: "Mrs. Rabia Faisal",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        eventHeld: "Walima Reception (700 Guests)",
        eventDate: "January 2026",
        verified: true,
        text: "The fact that this hall is completely pillar-free is a game changer! Every single relative had a clear, direct view of the bride and groom on stage. The food was piping hot across all buffet lines simultaneously.",
        helpfulCount: 31
      },
      {
        id: "pc-comm-3",
        userName: "Kamran Malik",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
        rating: 4.9,
        eventHeld: "Corporate Summit & Gala (600 Attendees)",
        eventDate: "October 2025",
        verified: true,
        text: "World-class venue coordination. Their on-site AV technicians managed our complex keynote slides, live streaming, and sound feeds without a microsecond of lag. Exceptional professionalism from PC staff.",
        helpfulCount: 24
      }
    ]
  },
  {
    id: "v-islamabad-club",
    name: "The Club Poolside Gazebo",
    tagline: "Exclusive Turquoise Water Ambiance for Boutique Mehndi Nights & Soirees",
    location: "Murree Road, Islamabad",
    address: "Islamabad Club Enclave, Murree Road, Islamabad, 44000",
    capacity: 220,
    theaterCapacity: 300,
    price: 190000,
    type: "outdoor",
    typeBadge: "Boutique Poolside Enclave",
    rating: 4.9,
    reviewsCount: 31,
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80",
    description: "An intimate, sophisticated open-air oasis secluded within the prestigious grounds of the Islamabad Club. Surrounded by illuminated turquoise waters, tropical palm silhouettes, chic cabana pavilions, and floating candle lanterns, the Poolside Gazebo is designed for boutique Mehndi nights, bridal showers, milestone anniversaries, and high-end family banquets where elegance and intimacy reign supreme.",
    specifications: {
      area: "8,500 sq. ft. Pool Deck & Garden Patio",
      ceilingHeight: "Open Sky with Chic Canopies",
      banquetCapacity: "220 Seated Guests",
      theaterCapacity: "300 Lounge Guests",
      parkingSlots: "150 Private Club Valet Spaces",
      stageDimensions: "28ft Elevated Poolside Stage",
      generatorBackup: "Full Automatic Club Backup",
      climateControl: "Outdoor Patio Mist Cooling & Gas Heaters"
    },
    facilities: [
      "Underwater Turquoise Pool Lighting & Floating Floral Lanterns",
      "Chic Cocktail & Mocktail Bar Station by the Water",
      "Intimate Boutique Vibe for High-Profile Private Gatherings",
      "Islamabad Club Private Security Protocol & Discretion",
      "White Pergola Lounges with Plush Velvet Cushions",
      "Dedicated Private Restrooms & Powder Suite",
      "High-Fidelity Ambient Sound Engineering System",
      "Live Fresh Live Cooking & Mocktail Bar Staging"
    ],
    gallery: [
      {
        id: "ic-event-1",
        title: "Boutique Poolside Mehndi: Anum & Bilal",
        category: "mehndi",
        categoryLabel: "Mehndi Night",
        date: "October 2025",
        guests: 180,
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
        description: "Illuminated water reflection aesthetic with floating marigold bowls, yellow fairy light pergolas, and a vibrant acoustic dhol circle by the pool.",
        decorHighlight: "Floating Marigold Bowls & Fairy-Lit Cabanas"
      },
      {
        id: "ic-event-2",
        title: "Golden Jubilee 50th Birthday Soirée",
        category: "private",
        categoryLabel: "Milestone Celebration",
        date: "November 2025",
        guests: 150,
        image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80",
        description: "Chic candlelit black and gold evening dinner with live saxophone jazz, signature mocktail welcome drinks, and fine dining continental buffet.",
        decorHighlight: "Candlelit Poolside Tables & Live Jazz Saxophone"
      },
      {
        id: "ic-event-3",
        title: "Pastel Chic Bridal Shower & High Tea",
        category: "private",
        categoryLabel: "Bridal Shower",
        date: "December 2025",
        guests: 120,
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
        description: "French garden tea setup featuring pastel flower arches, customized macaron towers, champagne flute mocktails, and cozy cabana lounge seating.",
        decorHighlight: "Pastel Flower Arches & Custom Macaron Tower"
      },
      {
        id: "ic-event-4",
        title: "Intimate Candlelit Winter Nikkah",
        category: "wedding",
        categoryLabel: "Intimate Nikkah",
        date: "January 2026",
        guests: 160,
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
        description: "Elegantly understated family Nikkah ceremony with floating candles, white floral chuppah canopy, and heated poolside gazebo seating.",
        decorHighlight: "Floating Candle Centerpieces & Floral Canopy"
      }
    ],
    comments: [
      {
        id: "ic-comm-1",
        userName: "Dr. Sarah Jamil",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        eventHeld: "Bridal Shower & High Tea (120 Guests)",
        eventDate: "December 2025",
        verified: true,
        text: "The reflection of the floating candles in the pool was absolute magic! Our guests were taking pictures by the water all afternoon. The club staff maintained immaculate cleanliness and privacy. It was so chic and intimate.",
        helpfulCount: 29
      },
      {
        id: "ic-comm-2",
        userName: "Bilal Haider",
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
        rating: 5,
        eventHeld: "Boutique Mehndi Party (180 Guests)",
        eventDate: "October 2025",
        verified: true,
        text: "We wanted a high-energy Mehndi celebration without the chaotic scale of a 500-person hall. The Poolside Gazebo was ideal. The sound by the water was lively, the mocktail bar was top tier, and our guests had ample room to dance.",
        helpfulCount: 22
      },
      {
        id: "ic-comm-3",
        userName: "Mona Siddiqui",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        rating: 4.8,
        eventHeld: "Family Golden Jubilee Dinner (150 Guests)",
        eventDate: "November 2025",
        verified: true,
        text: "Secluded, elegant, and peaceful. The outdoor gas heaters kept the poolside terrace warm in November. The catering coordination was top-notch with fresh BBQ served right off the grill.",
        helpfulCount: 16
      }
    ]
  }
];

// Helper Functions
function getDetailedVenueById(id) {
  return DETAILED_VENUES.find(v => v.id === id) || DETAILED_VENUES[0];
}

function getStoredVenueReviews(venueId) {
  const localKey = "aura_reviews_" + venueId;
  const stored = localStorage.getItem(localKey);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Error parsing stored reviews", e);
    }
  }
  const venue = getDetailedVenueById(venueId);
  const defaultReviews = venue.comments || [];
  localStorage.setItem(localKey, JSON.stringify(defaultReviews));
  return defaultReviews;
}

function saveNewVenueReview(venueId, reviewData) {
  const reviews = getStoredVenueReviews(venueId);
  reviews.unshift(reviewData);
  localStorage.setItem("aura_reviews_" + venueId, JSON.stringify(reviews));
  return reviews;
}
