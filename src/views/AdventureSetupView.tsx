import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { SafeImage } from '../components/SafeImage';
import {
  Zap,
  Flame,
  Mountain,
  Car,
  Target,
  Users,
  Tent,
  Plane,
  Gamepad2,
  Trophy,
  ArrowRight,
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Search,
  SlidersHorizontal,
  X,
  Clock,
  Maximize2,
  Send,
  Building,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Layers,
  Check,
  Compass,
  Award,
  Activity,
  ArrowUpRight
} from 'lucide-react';

interface SetupSpec {
  id: string;
  name: string;
  category: string;
  categoryKey: string;
  tagline: string;
  description: string;
  tags: ('Indoor' | 'Outdoor' | 'Kids' | 'Extreme' | 'Family')[];
  indicativeBudget: string;
  spaceRequired: string;
  installationTime: string;
  image: string;
  highlightSpecs?: { [key: string]: string };
}

// 5 Main Featured Setups
const FEATURED_SETUPS: SetupSpec[] = [
  {
    id: 'setup-zipline',
    name: 'ZIPLINE',
    category: 'Aerial Adventures',
    categoryKey: 'aerial',
    tagline: 'Fly. Feel the Rush.',
    description:
      'Create an exciting aerial attraction with zipline configurations for different age groups and locations. Engineered with military-grade redundant cables and eddy-current magnetic braking.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹6–26 Lakh',
    spaceRequired: '240–1,500 sq m',
    installationTime: '6–12 Weeks',
    image: '/images/adventure/aerial.jpg',
    highlightSpecs: {
      'Setup Range': '50–300 m span',
      'Space Required': '240–1,500 sq m',
      'Indicative Budget': '₹6–26 Lakh',
      'Installation': '6–12 Weeks'
    }
  },
  {
    id: 'setup-bungee',
    name: 'BUNGEE JUMP',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    tagline: 'Take Adventure to New Heights',
    description:
      'A high-adrenaline attraction designed for adventure destinations and mountain locations. Built to international EN/ASTM standards with multiple safety redundancies.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹100–180 Lakh',
    spaceRequired: '600–1,200 sq m',
    installationTime: '24–36 Weeks',
    image: '/images/adventure/extreme.jpg',
    highlightSpecs: {
      'Jump Height': '40–70 m (up to 200 m mountain)',
      'Space Required': '600–1,200 sq m',
      'Indicative Budget': '₹100–180 Lakh',
      'Installation': '24–36 Weeks'
    }
  },
  {
    id: 'setup-ropes',
    name: 'HIGH ROPES COURSE',
    category: 'Climbing & Ropes',
    categoryKey: 'climbing',
    tagline: 'Challenge. Climb. Conquer.',
    description:
      'A multi-element adventure course designed for active visitors, groups, team bonding and institutional adventure hubs. Configurable from 8 to 40 challenging obstacles.',
    tags: ['Outdoor', 'Family', 'Kids'],
    indicativeBudget: '₹14–70 Lakh',
    spaceRequired: '300–1,200 sq m',
    installationTime: '6–22 Weeks',
    image: '/images/adventure/climbing.jpg',
    highlightSpecs: {
      'Obstacle Elements': '8–40 Elements',
      'Space Required': '300–1,200 sq m',
      'Indicative Budget': '₹14–70 Lakh',
      'Installation': '6–22 Weeks'
    }
  },
  {
    id: 'setup-gokart',
    name: 'GO-KART ARENA',
    category: 'Motorsport & Racing',
    categoryKey: 'motorsport',
    tagline: 'Speed Meets Competition',
    description:
      'Build an indoor or outdoor karting experience with dedicated tracks, high-traction asphalt, telemetry timing systems and impact-absorbing barrier safety infrastructure.',
    tags: ['Outdoor', 'Indoor', 'Family'],
    indicativeBudget: '₹40–190 Lakh',
    spaceRequired: '1,800–12,000 sq m',
    installationTime: '16–36 Weeks',
    image: '/images/adventure/motorsport.jpg',
    highlightSpecs: {
      'Track Length': '200–1,000 m circuit',
      'Space Required': '1,800–12,000 sq m',
      'Indicative Budget': '₹40–190 Lakh',
      'Installation': '16–36 Weeks'
    }
  },
  {
    id: 'setup-camping',
    name: 'ADVENTURE CAMPING',
    category: 'Nature & Outdoor',
    categoryKey: 'nature',
    tagline: 'Stay Close to Nature',
    description:
      'Create comfortable outdoor accommodation using a range of tent concepts including Alpine tents, Swiss Cottage setups and Geodesic Glamping Domes.',
    tags: ['Outdoor', 'Family'],
    indicativeBudget: '₹1 Lakh onwards',
    spaceRequired: '300–1,200 sq m',
    installationTime: '1–12 Weeks',
    image: '/images/adventure/nature.jpg',
    highlightSpecs: {
      'Tent Concepts': 'Alpine • Swiss Cottage • Geodesic Dome',
      'Space Required': '300–1,200 sq m',
      'Indicative Budget': '₹1 Lakh onwards',
      'Installation': '1–12 Weeks'
    }
  }
];

// The 10 Adventure Categories with curated specifications & attractions
const ADVENTURE_CATEGORIES = [
  {
    key: 'aerial',
    icon: Zap,
    name: 'Aerial Adventures',
    subtitle: 'Experience the thrill of height, speed and open skies.',
    cta: 'Explore Aerial Adventures',
    image: '/images/adventure/aerial.jpg',
    highlights: '50m–300m Spans · Dual Cables · Magnetic Brakes',
    attractions: [
      'Zipline',
      'Superman Zipline',
      'Couple Zipline',
      'Motorised Zipline',
      'Kids Zipline',
      'Sky Cycle',
      'Zip Surfing',
      'Roller Coaster Zipline'
    ]
  },
  {
    key: 'extreme',
    icon: Flame,
    name: 'Extreme Thrills',
    subtitle: 'For visitors who want an adrenaline-filled experience.',
    cta: 'Explore Extreme Thrills',
    image: '/images/adventure/extreme.jpg',
    highlights: '40m–200m Drops · 100% Redundant Rigging · High ROI',
    attractions: [
      'Bungee Jump',
      'Quick Jump',
      'Reverse Bungee',
      'Human Bungee Slingshot',
      'Bungee Ejector',
      'Giant Swing',
      'Glass Bridge / Sky Walk'
    ]
  },
  {
    key: 'climbing',
    icon: Mountain,
    name: 'Climbing & Ropes',
    subtitle: 'Create challenging experiences for individuals, groups and team activities.',
    cta: 'Explore Ropes & Climbing',
    image: '/images/adventure/climbing.jpg',
    highlights: '8–40 Obstacles · Continuous Lifeline · TRUBLUE Belay',
    attractions: [
      'Climbing Wall',
      'Kids Climbing Wall',
      'Bouldering Wall',
      'Rappelling',
      'Slithering',
      'Canopy Walk',
      'Burma Bridge',
      'Compact Ropes Course',
      'High Ropes Course',
      'Low Ropes Course',
      'Tree Top Ropes Course'
    ]
  },
  {
    key: 'motorsport',
    icon: Car,
    name: 'Motorsport & Racing',
    subtitle: 'Bring speed and competition to your adventure destination.',
    cta: 'Explore Motorsport',
    image: '/images/adventure/motorsport.jpg',
    highlights: '200m–1,000m Tracks · Electric & Petrol Karts · Telemetry',
    attractions: [
      'Go Karting',
      'ATV Track',
      'Motocross Track',
      'Bike Pump Track',
      'Luge Kart Ride'
    ]
  },
  {
    key: 'games',
    icon: Target,
    name: 'Games & Combat',
    subtitle: 'Perfect for groups, families, corporate outings and entertainment parks.',
    cta: 'Explore Games',
    image: '/images/adventure/games.jpg',
    highlights: 'Multi-Level Labyrinths · Sup-Air Bunkers · Turnkey Arena',
    attractions: [
      'Paintball Arena',
      'Laser Tag Arena',
      'Obstacle Courses',
      'Battle Obstacle Course',
      'Kids Obstacle Park',
      'Kids Obstacle Circuit',
      'Indoor Obstacle Games'
    ]
  },
  {
    key: 'family',
    icon: Users,
    name: 'Family & Kids',
    subtitle: 'Create fun-filled spaces for children and families.',
    cta: 'Explore Family Experiences',
    image: '/images/adventure/family.jpg',
    highlights: 'Padded Safety · Foam Pits · All-Age Entertainment',
    attractions: [
      'Kids Zipline',
      'Kids Fun Wall',
      'Soft Play Area',
      'Trampoline Park',
      'Inflatables',
      'Mini Golf',
      '360 Cycle',
      'Human Gyro',
      'Life Size Snake & Ladder',
      'Life Size Angry Bird'
    ]
  },
  {
    key: 'nature',
    icon: Tent,
    name: 'Nature & Outdoor Experiences',
    subtitle: 'Combine adventure with nature and destination stays.',
    cta: 'Explore Outdoor Experiences',
    image: '/images/adventure/nature.jpg',
    highlights: 'Geodesic Domes · Swiss Cottages · All-Weather Decking',
    attractions: [
      'Camping',
      'Tree House / Cabanas',
      'Star Gazing',
      'Canopy Walk',
      'Adventure Trails',
      'Camping Archery',
      'Zorbing Track'
    ]
  },
  {
    key: 'flying',
    icon: Plane,
    name: 'Sky & Flying Experiences',
    subtitle: 'Take your visitors beyond the ordinary.',
    cta: 'Explore Flying Experiences',
    image: '/images/adventure/flying.jpg',
    highlights: '160ft Hoisted Dining · Tethered Balloons · Scenic Views',
    attractions: [
      'Hot Air Balloon',
      'Paramotoring',
      'Micro Lite Flying',
      'Indoor Sky Diving',
      'Fly Dining',
      'Dinner in the Sky',
      'Zip Dining'
    ]
  },
  {
    key: 'indoor',
    icon: Gamepad2,
    name: 'Indoor Entertainment',
    subtitle: "Adventure doesn't have to stop when the weather changes.",
    cta: 'Explore Indoor Entertainment',
    image: '/images/adventure/indoor.jpg',
    highlights: 'Vertical Wind Tunnels · 6DOF VR Arenas · Weatherproof FEC',
    attractions: [
      'VR Gaming',
      'Arcade Gaming',
      'VR Cricket',
      'Indoor Sky Diving',
      'Indoor Go Karting',
      'Indoor Laser Tag',
      'Indoor Paintball',
      'Bowling Alley',
      'Synthetic Ice Rink'
    ]
  },
  {
    key: 'sports',
    icon: Trophy,
    name: 'Sports & Recreation',
    subtitle: 'Build dedicated spaces for active recreation and sports.',
    cta: 'Explore Sports',
    image: '/images/adventure/sports.jpg',
    highlights: 'FIFA Monofilament Turf · Box Cricket Nets · Floodlit Arenas',
    attractions: [
      'Football Turf',
      'Box Cricket',
      'VR Cricket',
      'Mini Golf',
      'Rifle Shooting',
      'Camping Archery',
      'Bike Pump Track'
    ]
  }
];

// Full Catalogue Items
const CATALOGUE_ITEMS: SetupSpec[] = [
  // Aerial
  {
    id: 'cat-zipline',
    name: 'Zipline',
    category: 'Aerial Adventures',
    categoryKey: 'aerial',
    tagline: 'High-speed valley and landscape crossing',
    description: 'Single or twin-line ziplining system with steel cable, custom anchor towers, and magnetic braking.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹6–26 Lakh',
    spaceRequired: '240–1,500 sq m',
    installationTime: '6–12 Weeks',
    image: '/images/adventure/aerial.jpg'
  },
  {
    id: 'cat-superman-zipline',
    name: 'Superman Zipline',
    category: 'Aerial Adventures',
    categoryKey: 'aerial',
    tagline: 'Horizontal prone-flying sensation',
    description: 'Fly face-first in a specialized aerodynamic harness mimicking free flight over scenic terrain.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹12–35 Lakh',
    spaceRequired: '500–2,000 sq m',
    installationTime: '8–14 Weeks',
    image: '/images/adventure/aerial.jpg'
  },
  {
    id: 'cat-couple-zipline',
    name: 'Couple Zipline',
    category: 'Aerial Adventures',
    categoryKey: 'aerial',
    tagline: 'Tandem side-by-side aerial run',
    description: 'Dual-track synchronized launch system for couples, friends, and parent-child pairings.',
    tags: ['Outdoor', 'Family'],
    indicativeBudget: '₹10–30 Lakh',
    spaceRequired: '400–1,800 sq m',
    installationTime: '8–12 Weeks',
    image: '/images/adventure/aerial.jpg'
  },
  {
    id: 'cat-motorised-zipline',
    name: 'Motorised Zipline',
    category: 'Aerial Adventures',
    categoryKey: 'aerial',
    tagline: 'Controlled round-trip powered flight',
    description: 'Electric winch return system allowing two-way travel on flat ground without requiring gravity slope.',
    tags: ['Outdoor', 'Family'],
    indicativeBudget: '₹18–45 Lakh',
    spaceRequired: '300–1,200 sq m',
    installationTime: '10–16 Weeks',
    image: '/images/adventure/aerial.jpg'
  },
  {
    id: 'cat-sky-cycle',
    name: 'Sky Cycle',
    category: 'Aerial Adventures',
    categoryKey: 'aerial',
    tagline: 'Pedal across the open sky on twin steel wires',
    description: 'High-wire tandem counterweighted bicycle riding suspended 30–80 feet above the ground.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹14–38 Lakh',
    spaceRequired: '300–1,000 sq m',
    installationTime: '8–14 Weeks',
    image: '/images/adventure/aerial.jpg'
  },
  {
    id: 'cat-zip-surfing',
    name: 'Zip Surfing',
    category: 'Aerial Adventures',
    categoryKey: 'aerial',
    tagline: 'Surf the air currents on a suspended board',
    description: 'Airborne snowboard/surfboard system secured to dual overhead cables for balancing flight.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹12–28 Lakh',
    spaceRequired: '250–900 sq m',
    installationTime: '6–10 Weeks',
    image: '/images/adventure/aerial.jpg'
  },
  {
    id: 'cat-roller-coaster-zipline',
    name: 'Roller Coaster Zipline',
    category: 'Aerial Adventures',
    categoryKey: 'aerial',
    tagline: 'Curved rail continuous roller-flying track',
    description: 'Curved structural pipe track combining the free-hanging drop of a zip wire with coaster dips and curves.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹45–140 Lakh',
    spaceRequired: '1,500–6,000 sq m',
    installationTime: '16–28 Weeks',
    image: '/images/adventure/aerial.jpg'
  },
  // Extreme
  {
    id: 'cat-bungee-jump',
    name: 'Bungee Jump',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    tagline: 'The ultimate free-fall adrenaline test',
    description: 'Cantilever crane, tower, or cliff-edge bungee platform with redundant latex rubber cord rigging.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹100–180 Lakh',
    spaceRequired: '600–1,200 sq m',
    installationTime: '24–36 Weeks',
    image: '/images/adventure/extreme.jpg'
  },
  {
    id: 'cat-quick-jump',
    name: 'Quick Jump',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    tagline: 'Controlled free-fall magnetic braking descent',
    description: 'Step off high platforms with instant initial freefall before smooth magnetic auto-braking touchdown.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹8–22 Lakh',
    spaceRequired: '100–300 sq m',
    installationTime: '4–8 Weeks',
    image: '/images/adventure/extreme.jpg'
  },
  {
    id: 'cat-reverse-bungee',
    name: 'Reverse Bungee',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    tagline: 'Rocket skyward from ground level at 100 km/h',
    description: 'High-tension slingshot tower launching passenger pods hundreds of feet vertically in seconds.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹75–160 Lakh',
    spaceRequired: '800–2,000 sq m',
    installationTime: '18–30 Weeks',
    image: '/images/adventure/extreme.jpg'
  },
  {
    id: 'cat-giant-swing',
    name: 'Giant Swing',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    tagline: 'Massive pendulum free-swing over canyons',
    description: 'Winch-lifted pendulum release swinging 1 to 3 riders through a wide arc over drops.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹35–85 Lakh',
    spaceRequired: '500–1,500 sq m',
    installationTime: '12–20 Weeks',
    image: '/images/adventure/extreme.jpg'
  },
  {
    id: 'cat-glass-bridge',
    name: 'Glass Bridge / Sky Walk',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    tagline: 'Transparent cantilever deck suspended in midair',
    description: 'Triple-laminated tempered glass cantilever viewing bridge perched over cliffs or scenic drops.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹80–350 Lakh',
    spaceRequired: '400–2,500 sq m',
    installationTime: '20–40 Weeks',
    image: '/images/adventure/extreme.jpg'
  },
  // Climbing & Ropes
  {
    id: 'cat-climbing-wall',
    name: 'Climbing Wall',
    category: 'Climbing & Ropes',
    categoryKey: 'climbing',
    tagline: 'Vertical artificial climbing towers with multiple routes',
    description: 'FRP or textured plywood climbing structure with modular climbing holds and TRUBLUE auto-belays.',
    tags: ['Outdoor', 'Indoor', 'Extreme', 'Family'],
    indicativeBudget: '₹8–28 Lakh',
    spaceRequired: '120–400 sq m',
    installationTime: '4–10 Weeks',
    image: '/images/adventure/climbing.jpg'
  },
  {
    id: 'cat-high-ropes',
    name: 'High Ropes Course',
    category: 'Climbing & Ropes',
    categoryKey: 'climbing',
    tagline: 'Multi-level suspended obstacle course',
    description: 'Continuous belay safety lifeline system over burma bridges, log crossings, spider nets and platforms.',
    tags: ['Outdoor', 'Family', 'Extreme'],
    indicativeBudget: '₹14–70 Lakh',
    spaceRequired: '300–1,200 sq m',
    installationTime: '6–22 Weeks',
    image: '/images/adventure/climbing.jpg'
  },
  {
    id: 'cat-canopy-walk',
    name: 'Canopy Walk',
    category: 'Climbing & Ropes',
    categoryKey: 'climbing',
    tagline: 'Scenic forest-top suspension walkway',
    description: 'Gentle elevated suspension bridges interconnecting treetops or eco-resort canopy views.',
    tags: ['Outdoor', 'Family'],
    indicativeBudget: '₹18–50 Lakh',
    spaceRequired: '400–2,000 sq m',
    installationTime: '8–16 Weeks',
    image: '/images/adventure/climbing.jpg'
  },
  // Motorsport
  {
    id: 'cat-go-karting',
    name: 'Go Karting',
    category: 'Motorsport & Racing',
    categoryKey: 'motorsport',
    tagline: 'Competitive track racing for all skill levels',
    description: 'Gasoline or high-torque electric kart racing arena with electronic safety marshaling and timing.',
    tags: ['Outdoor', 'Indoor', 'Family'],
    indicativeBudget: '₹40–190 Lakh',
    spaceRequired: '1,800–12,000 sq m',
    installationTime: '16–36 Weeks',
    image: '/images/adventure/motorsport.jpg'
  },
  {
    id: 'cat-atv-track',
    name: 'ATV Track',
    category: 'Motorsport & Racing',
    categoryKey: 'motorsport',
    tagline: 'Off-road all-terrain mud and dune trails',
    description: 'Custom engineered dirt and gravel circuits with banked turns, whoops, and water splashes.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹25–70 Lakh',
    spaceRequired: '2,500–15,000 sq m',
    installationTime: '8–18 Weeks',
    image: '/images/adventure/motorsport.jpg'
  },
  {
    id: 'cat-bike-pump-track',
    name: 'Bike Pump Track',
    category: 'Motorsport & Racing',
    categoryKey: 'motorsport',
    tagline: 'Asphalt pump circuit for BMX, skateboards and MTB',
    description: 'Continuous loop of rollers and berms allowing riders to maintain speed solely through pumping body motions.',
    tags: ['Outdoor', 'Family', 'Kids'],
    indicativeBudget: '₹15–45 Lakh',
    spaceRequired: '600–2,500 sq m',
    installationTime: '6–12 Weeks',
    image: '/images/adventure/motorsport.jpg'
  },
  // Games & Combat
  {
    id: 'cat-paintball',
    name: 'Paintball Arena',
    category: 'Games & Combat',
    categoryKey: 'games',
    tagline: 'Tactical battleground with bunkers and strategy zones',
    description: 'Regulated mesh-enclosed tactical arena with inflatable sup-air bunkers, CO2 refill stations and referee stands.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹10–35 Lakh',
    spaceRequired: '800–2,500 sq m',
    installationTime: '4–8 Weeks',
    image: '/images/adventure/games.jpg'
  },
  {
    id: 'cat-laser-tag',
    name: 'Laser Tag Arena',
    category: 'Games & Combat',
    categoryKey: 'games',
    tagline: 'Sci-fi glow-in-the-dark infrared battle zone',
    description: 'Blacklight neon indoor labyrinth with multi-level vantage points, fog effects, and digital phaser vests.',
    tags: ['Indoor', 'Family', 'Kids'],
    indicativeBudget: '₹18–55 Lakh',
    spaceRequired: '300–900 sq m',
    installationTime: '6–12 Weeks',
    image: '/images/adventure/games.jpg'
  },
  // Family & Kids
  {
    id: 'cat-trampoline-park',
    name: 'Trampoline Park',
    category: 'Family & Kids',
    categoryKey: 'family',
    tagline: 'Interconnected wall-to-wall bouncing zones',
    description: 'High-rebound commercial jumping fields with foam pits, slam dunk basketball hoops, and dodgeball arenas.',
    tags: ['Indoor', 'Family', 'Kids'],
    indicativeBudget: '₹30–90 Lakh',
    spaceRequired: '400–1,500 sq m',
    installationTime: '8–16 Weeks',
    image: '/images/adventure/family.jpg'
  },
  {
    id: 'cat-mini-golf',
    name: 'Mini Golf',
    category: 'Family & Kids',
    categoryKey: 'family',
    tagline: '9 or 18-hole whimsical landscaped putting challenge',
    description: 'Themed artificial turf putting courses with water hazards, tunnels, kinetic obstacles, and night lighting.',
    tags: ['Outdoor', 'Indoor', 'Family', 'Kids'],
    indicativeBudget: '₹12–40 Lakh',
    spaceRequired: '350–1,200 sq m',
    installationTime: '6–14 Weeks',
    image: '/images/adventure/family.jpg'
  },
  // Nature & Outdoor
  {
    id: 'cat-glamping-campsite',
    name: 'Adventure Camping & Glamping',
    category: 'Nature & Outdoor Experiences',
    categoryKey: 'nature',
    tagline: 'Curated wilderness accommodation with luxury comforts',
    description: 'Weatherproof Alpine, Swiss cottage, and geodesic dome setups with insulated subfloors and luxury ensuite bathrooms.',
    tags: ['Outdoor', 'Family'],
    indicativeBudget: '₹1 Lakh onwards',
    spaceRequired: '300–1,200 sq m',
    installationTime: '1–12 Weeks',
    image: '/images/adventure/nature.jpg'
  },
  {
    id: 'cat-tree-house',
    name: 'Tree House / Cabanas',
    category: 'Nature & Outdoor Experiences',
    categoryKey: 'nature',
    tagline: 'Elevated luxury timber sanctuaries in nature',
    description: 'Engineered non-invasive tree-mounted or stilt cabanas with panoramic forest decks and resort comforts.',
    tags: ['Outdoor', 'Family'],
    indicativeBudget: '₹15–60 Lakh',
    spaceRequired: '150–600 sq m',
    installationTime: '8–16 Weeks',
    image: '/images/adventure/nature.jpg'
  },
  // Sky & Flying
  {
    id: 'cat-hot-air-balloon',
    name: 'Hot Air Balloon (Tethered & Free)',
    category: 'Sky & Flying Experiences',
    categoryKey: 'flying',
    tagline: 'Panoramic aerial destination ascent',
    description: 'Certified tethered aerostat system lifting 4–12 guests 150–300 feet for spectacular destination views.',
    tags: ['Outdoor', 'Family'],
    indicativeBudget: '₹40–120 Lakh',
    spaceRequired: '1,500–5,000 sq m',
    installationTime: '12–24 Weeks',
    image: '/images/adventure/flying.jpg'
  },
  {
    id: 'cat-fly-dining',
    name: 'Fly Dining / Dinner in the Sky',
    category: 'Sky & Flying Experiences',
    categoryKey: 'flying',
    tagline: 'Gourmet dining suspended 160 feet in the clouds',
    description: 'Specialized 22-seat dining table platform hoisted by heavy-duty mobile crane with safety harnesses.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹85–220 Lakh',
    spaceRequired: '600–1,500 sq m',
    installationTime: '12–20 Weeks',
    image: '/images/adventure/flying.jpg'
  },
  // Indoor
  {
    id: 'cat-indoor-skydiving',
    name: 'Indoor Sky Diving (Vertical Wind Tunnel)',
    category: 'Indoor Entertainment',
    categoryKey: 'indoor',
    tagline: 'True body flight without leaping from an aircraft',
    description: 'High-speed recirculating vertical airflow tunnel generating up to 250 km/h wind for human levitation.',
    tags: ['Indoor', 'Extreme', 'Family'],
    indicativeBudget: '₹250–800 Lakh',
    spaceRequired: '400–1,200 sq m',
    installationTime: '28–52 Weeks',
    image: '/images/adventure/indoor.jpg'
  },
  {
    id: 'cat-vr-gaming',
    name: 'VR Gaming & Free-Roam Arena',
    category: 'Indoor Entertainment',
    categoryKey: 'indoor',
    tagline: 'Untethered 6DOF multiplayer virtual worlds',
    description: 'Backpack PC or standalone Wi-Fi 6E spatial tracking arena where players interact in shared virtual reality.',
    tags: ['Indoor', 'Family', 'Kids'],
    indicativeBudget: '₹20–65 Lakh',
    spaceRequired: '150–500 sq m',
    installationTime: '4–10 Weeks',
    image: '/images/adventure/indoor.jpg'
  },
  // Sports
  {
    id: 'cat-football-turf',
    name: 'Football Turf & Box Cricket',
    category: 'Sports & Recreation',
    categoryKey: 'sports',
    tagline: 'High-revenue FIFA-grade synthetic turf grounds',
    description: 'Monofilament 50mm artificial grass with silica sand, rubber granules infill, perimeter netting, and floodlights.',
    tags: ['Outdoor', 'Indoor', 'Family'],
    indicativeBudget: '₹18–48 Lakh',
    spaceRequired: '600–2,000 sq m',
    installationTime: '4–8 Weeks',
    image: '/images/adventure/sports.jpg'
  }
];

export const AdventureSetupView: React.FC = () => {
  const { showToast } = useApp();

  // Category filter state for Section 2
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');

  // Catalogue Filters
  const [selectedTag, setSelectedTag] = useState<'All' | 'Indoor' | 'Outdoor' | 'Kids' | 'Extreme' | 'Family'>('All');
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAttraction, setSelectedAttraction] = useState<SetupSpec | null>(null);

  // Quote Form State
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [propertyType, setPropertyType] = useState('Resort / Tourism Destination');
  const [availableArea, setAvailableArea] = useState('1 to 3 Acres');
  const [budgetRange, setBudgetRange] = useState('₹25 Lakh – ₹75 Lakh');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['Aerial Adventures', 'Climbing & Ropes']);
  const [formNotes, setFormNotes] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formPhone.trim()) {
      showToast('Please provide your name and phone number');
      return;
    }
    setFormSubmitted(true);
    showToast('Project enquiry received! Our adventure setup director will contact you within 24 hours.');
  };

  // Filtered Categories for Section 2
  const filteredCategories = useMemo(() => {
    if (activeCategoryTab === 'all') return ADVENTURE_CATEGORIES;
    return ADVENTURE_CATEGORIES.filter((c) => c.key === activeCategoryTab);
  }, [activeCategoryTab]);

  // Filtered Catalogue
  const filteredCatalogue = useMemo(() => {
    return CATALOGUE_ITEMS.filter((item) => {
      const matchesTag = selectedTag === 'All' || item.tags.includes(selectedTag);
      const matchesCat = selectedCategoryKey === 'all' || item.categoryKey === selectedCategoryKey;
      const matchesQuery =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTag && matchesCat && matchesQuery;
    });
  }, [selectedTag, selectedCategoryKey, searchQuery]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Wiktrip, I want to discuss building an Adventure Destination on my land/resort. Location: ${formLocation || 'India'}.`
    );
    window.open(`https://wa.me/919999999999?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F9F6] text-[#0B0D0C]">
      {/* =========================================================================
          1. HERO SECTION (High-Impact Destination Engineering)
          ========================================================================= */}
      <section className="relative bg-[#0B0D0C] text-white pt-24 pb-28 overflow-hidden">
        {/* Ambient atmospheric lighting */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#556B2F]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#F97316]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-wider text-[#F97316] mb-6 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Turnkey Destination Engineering & Setup</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                Build Your Own <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] via-amber-400 to-[#738F3D]">
                  Adventure Destination
                </span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 mt-6 leading-relaxed font-light max-w-2xl">
                Turn your land, resort, campsite or tourism destination into an unforgettable adventure experience.
                From ziplining and bungee attractions to ropes courses, motorsports, family entertainment and
                immersive indoor experiences, Wiktrip offers adventure setup solutions designed around your space,
                audience and vision.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection('project-quote')}
                  className="px-7 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-black rounded-2xl transition-all shadow-xl hover:shadow-orange-500/25 flex items-center gap-2.5 cursor-pointer group"
                >
                  <span>Plan Your Adventure Park</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollToSection('explore-experiences')}
                  className="px-6 py-4 bg-white/10 hover:bg-white/15 text-white text-sm font-bold rounded-2xl border border-white/20 transition-colors flex items-center gap-2 cursor-pointer backdrop-blur-sm"
                >
                  <span>Explore Attractions</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 mt-10 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#F97316] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display text-lg font-black text-white block leading-tight">100+</span>
                    <span className="text-[11px] text-neutral-400 block">Attractions</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display text-lg font-black text-white block leading-tight">EN / ASTM</span>
                    <span className="text-[11px] text-neutral-400 block">Certified Safety</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display text-lg font-black text-white block leading-tight">Turnkey</span>
                    <span className="text-[11px] text-neutral-400 block">End-to-End</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display text-lg font-black text-white block leading-tight">Pan-India</span>
                    <span className="text-[11px] text-neutral-400 block">Site Delivery</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Showcase Visual Grid */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {/* Main Masterplan Image Card */}
              <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group bg-neutral-900">
                <div className="h-64 sm:h-72 w-full overflow-hidden">
                  <SafeImage
                    src="/images/adventure/masterplan.jpg"
                    alt="Adventure Destination Masterplan"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                {/* Ambient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/30 to-transparent" />

                {/* Floating Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0D0C]/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Destination Masterplan</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-extrabold backdrop-blur-md shadow-md">
                    Turnkey Park
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-black tracking-tight text-white">
                      Integrated Adventure Park
                    </h3>
                    <span className="text-[11px] font-bold text-amber-300">
                      Resorts & Tourism
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-300 mt-0.5 line-clamp-1">
                    Ziplines · Go-Kart Arenas · High Ropes · Geodesic Glamping Domes
                  </p>
                </div>
              </div>

              {/* Two Complementary Adventure Action Visuals */}
              <div className="grid grid-cols-2 gap-4">
                {/* Visual 1: Aerial Zipline */}
                <div
                  onClick={() => scrollToSection('explore-experiences')}
                  className="relative rounded-2xl overflow-hidden border border-white/15 h-36 group shadow-xl bg-neutral-900 cursor-pointer"
                >
                  <SafeImage
                    src="/images/adventure/aerial.jpg"
                    alt="High Altitude Zipline"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/40 to-transparent" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#0B0D0C]/80 text-[10px] font-bold text-[#F97316] border border-white/10">
                      <Zap className="w-3 h-3" />
                      <span>Aerial Flight</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-xs font-black block leading-tight">50m–300m Zipline</span>
                    <span className="text-[10px] text-neutral-300 block">Magnetic Eddy Brakes</span>
                  </div>
                </div>

                {/* Visual 2: Motorsport Karting */}
                <div
                  onClick={() => scrollToSection('explore-experiences')}
                  className="relative rounded-2xl overflow-hidden border border-white/15 h-36 group shadow-xl bg-neutral-900 cursor-pointer"
                >
                  <SafeImage
                    src="/images/adventure/motorsport.jpg"
                    alt="Go Kart Racing"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/40 to-transparent" />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#0B0D0C]/80 text-[10px] font-bold text-amber-400 border border-white/10">
                      <Car className="w-3 h-3" />
                      <span>Motorsport</span>
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-xs font-black block leading-tight">Racing Circuits</span>
                    <span className="text-[10px] text-neutral-300 block">200m–1,000m Tracks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. ADVENTURE CATEGORIES (REDESIGNED PREMIUM EXPERIENCE CARDS)
          ========================================================================= */}
      <section id="explore-experiences" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBECE7] text-xs uppercase font-extrabold tracking-widest text-[#556B2F] mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Complete Setup Spectrum</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-2">
            Explore Adventure Experiences
          </h2>
          <p className="text-sm text-neutral-600 mt-3 leading-relaxed">
            Every attraction is engineered to international standards, configured to your destination topography, and built to create repeat visitor footfall.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto no-scrollbar pb-2">
          <button
            onClick={() => setActiveCategoryTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeCategoryTab === 'all'
                ? 'bg-[#0B0D0C] text-white shadow-md'
                : 'bg-white text-neutral-600 hover:text-black border border-neutral-200'
            }`}
          >
            All Categories ({ADVENTURE_CATEGORIES.length})
          </button>
          {ADVENTURE_CATEGORIES.map((c) => {
            const Icon = c.icon;
            return (
              <button
                key={c.key}
                onClick={() => setActiveCategoryTab(c.key)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeCategoryTab === c.key
                    ? 'bg-[#556B2F] text-white shadow-md'
                    : 'bg-white text-neutral-600 hover:text-black border border-neutral-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{c.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* 10 Redesigned Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={cat.key}
                className="group relative bg-white rounded-3xl border border-neutral-200/90 shadow-sm hover:shadow-2xl hover:border-neutral-300 transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden"
              >
                {/* Visual Header */}
                <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-neutral-900 shrink-0">
                  <SafeImage
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  {/* Cinematic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C] via-[#0B0D0C]/40 to-transparent" />

                  {/* Top Bar Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0D0C]/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-md">
                      <IconComponent className="w-4 h-4 text-[#F97316]" />
                      <span>{cat.name}</span>
                    </div>

                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-extrabold tracking-wide shadow-sm">
                      {cat.attractions.length} Attractions
                    </span>
                  </div>

                  {/* Bottom Text Over Image */}
                  <div className="absolute bottom-4 left-5 right-5 text-white">
                    <h3 className="font-display text-2xl font-black text-white tracking-tight leading-tight group-hover:text-amber-300 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-neutral-200/90 font-normal line-clamp-1 mt-1">
                      {cat.highlights}
                    </p>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <p className="text-xs text-neutral-600 leading-relaxed min-h-[38px]">
                      {cat.subtitle}
                    </p>

                    {/* Interactive Setup Chips */}
                    <div className="mt-4 pt-4 border-t border-neutral-100">
                      <div className="flex items-center justify-between mb-2.5">
                        <span className="text-[11px] font-black uppercase text-neutral-400 tracking-wider">
                          Key Attractions
                        </span>
                        <span className="text-[11px] font-bold text-[#556B2F]">
                          Turnkey Rigging
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {cat.attractions.slice(0, 6).map((att, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F4F5F0] hover:bg-[#0B0D0C] hover:text-white text-neutral-800 text-[11px] font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
                            onClick={() => {
                              setSelectedCategoryKey(cat.key);
                              setSearchQuery(att);
                              scrollToSection('setup-catalogue');
                            }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#556B2F] shrink-0" />
                            <span>{att}</span>
                          </span>
                        ))}
                        {cat.attractions.length > 6 && (
                          <span
                            onClick={() => {
                              setSelectedCategoryKey(cat.key);
                              scrollToSection('setup-catalogue');
                            }}
                            className="inline-flex items-center px-2.5 py-1 bg-[#FFF7ED] text-[#F97316] text-[11px] font-bold rounded-lg cursor-pointer hover:bg-[#FFEDD5] transition-colors"
                          >
                            +{cat.attractions.length - 6} more setups
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="mt-6 pt-4 border-t border-neutral-100">
                    <button
                      onClick={() => {
                        setSelectedCategoryKey(cat.key);
                        scrollToSection('setup-catalogue');
                      }}
                      className="w-full py-3 px-4 bg-[#0B0D0C] group-hover:bg-[#F97316] text-white text-xs font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-sm group-hover:shadow-orange-500/25 cursor-pointer"
                    >
                      <span>{cat.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          3. FEATURED ADVENTURE SETUPS (FLAGSHIP ARCHITECTURAL SHOWCASE)
          ========================================================================= */}
      <section className="py-24 bg-white border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3F4F0] text-xs uppercase font-extrabold tracking-widest text-[#556B2F]">
                <Award className="w-3.5 h-3.5" />
                <span>Flagship Implementations</span>
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-2">
                Featured Adventure Setups
              </h2>
              <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
                High-demand signature attractions engineered for fast payback, visitor engagement, and maximum certified safety.
              </p>
            </div>
            <div className="text-xs text-neutral-500 bg-[#F8F9F6] px-4 py-2.5 rounded-xl border border-neutral-200">
              * Indicative budgets and space requirements based on standard site configurations
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FEATURED_SETUPS.map((setup) => (
              <div
                key={setup.id}
                className="bg-[#F8F9F6] rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row group"
              >
                {/* Visual */}
                <div className="relative md:w-5/12 h-64 md:h-auto overflow-hidden bg-neutral-900 shrink-0">
                  <SafeImage
                    src={setup.image}
                    alt={setup.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent md:bg-gradient-to-r md:from-black/60 md:to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#0B0D0C]/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-md border border-white/10">
                      {setup.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white md:hidden">
                    <h3 className="font-display text-xl font-black">{setup.name}</h3>
                    <p className="text-xs text-neutral-200">{setup.tagline}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="hidden md:block">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F97316]">
                        {setup.tagline}
                      </span>
                      <h3 className="font-display text-2xl font-black text-[#0B0D0C] mt-0.5">
                        {setup.name}
                      </h3>
                    </div>

                    <p className="text-xs text-neutral-600 mt-3 leading-relaxed">
                      {setup.description}
                    </p>

                    {/* Spec Matrix Grid */}
                    <div className="mt-5 grid grid-cols-2 gap-2.5 bg-white p-4 rounded-2xl border border-neutral-200/90 shadow-sm">
                      {setup.highlightSpecs &&
                        Object.entries(setup.highlightSpecs).map(([label, val]) => (
                          <div key={label} className="text-left">
                            <span className="text-[10px] text-neutral-400 uppercase font-bold block">
                              {label}
                            </span>
                            <span className="text-xs font-bold text-[#0B0D0C] block mt-0.5">
                              {val}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-neutral-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-bold">
                        Indicative Budget
                      </span>
                      <span className="font-display text-xl font-black text-[#556B2F]">
                        {setup.indicativeBudget}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedAttraction(setup)}
                      className="px-5 py-2.5 bg-[#0B0D0C] hover:bg-[#F97316] text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>View Setup</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. HOW WE BUILD (From Concept to Adventure Park)
          ========================================================================= */}
      <section className="py-24 bg-[#0B0D0C] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-xs uppercase font-extrabold tracking-widest text-[#F97316]">
              End-to-End Methodology
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black mt-3">
              From Concept to Adventure Park
            </h2>
            <p className="text-sm text-neutral-400 mt-3 max-w-xl mx-auto leading-relaxed">
              We help you build more than attractions. We architect complete destination ecosystems with lasting footfall and high return on capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Understand',
                desc: 'We understand your location, available land topography, target visitors, and revenue goals.'
              },
              {
                step: '02',
                title: 'Plan',
                desc: 'Choose the optimal combination of adventure attractions tailored for your destination audience.'
              },
              {
                step: '03',
                title: 'Design',
                desc: 'Develop architectural layout, terrain flow, guest journey, and engineering blueprints.'
              },
              {
                step: '04',
                title: 'Setup',
                desc: 'Precision fabrication, on-site rigging, safety testing, and certified technical installation.'
              },
              {
                step: '05',
                title: 'Launch',
                desc: 'Crew safety training, operational SOPs, mock drills, and opening your park to visitors.'
              }
            ].map((st, idx) => (
              <div
                key={st.step}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 relative hover:border-[#F97316]/50 transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-3xl font-black text-[#F97316] mb-4">
                    {st.step}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                {idx < 4 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-white/30 z-10">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => scrollToSection('project-quote')}
              className="px-8 py-4 bg-[#556B2F] hover:bg-[#688439] text-white text-xs font-black uppercase tracking-wider rounded-2xl transition-all shadow-lg cursor-pointer"
            >
              Start Consultation For Your Land
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. ADVENTURE SETUP CATALOGUE (Comprehensive Specification Explorer)
          ========================================================================= */}
      <section id="setup-catalogue" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBECE7] text-xs uppercase font-extrabold tracking-widest text-[#556B2F]">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Attractions Catalogue</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-2">
              Adventure Setup Catalogue
            </h2>
            <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
              Browse our attractions directory. Filter by category, indoor/outdoor feasibility, target audience or adrenaline level.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search attractions..."
              className="w-full bg-white border border-neutral-200 pl-10 pr-4 py-3 text-xs rounded-2xl focus:outline-none focus:border-[#556B2F] shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filters Toolbar */}
        <div className="bg-white p-5 rounded-3xl border border-neutral-200/90 shadow-sm mb-10 space-y-4">
          {/* Tag Pills: Category / Indoor / Outdoor / Kids / Extreme / Family */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold uppercase text-neutral-400 mr-2 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3" />
              <span>Environment / Audience:</span>
            </span>
            {(['All', 'Indoor', 'Outdoor', 'Kids', 'Extreme', 'Family'] as const).map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-[#0B0D0C] text-white shadow-sm'
                    : 'bg-[#F3F4F0] text-neutral-600 hover:text-black hover:bg-[#EBECE7]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Category Dropdown/Scroll */}
          <div className="flex items-center gap-2 pt-3 border-t border-neutral-100 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-bold uppercase text-neutral-400 shrink-0 mr-1">
              Category:
            </span>
            <button
              onClick={() => setSelectedCategoryKey('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategoryKey === 'all'
                  ? 'bg-[#556B2F] text-white'
                  : 'text-neutral-600 hover:text-black bg-[#F3F4F0]'
              }`}
            >
              All Categories
            </button>
            {ADVENTURE_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategoryKey(cat.key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap cursor-pointer transition-colors ${
                  selectedCategoryKey === cat.key
                    ? 'bg-[#556B2F] text-white'
                    : 'text-neutral-600 hover:text-black bg-[#F3F4F0]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Catalogue Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCatalogue.length === 0 ? (
            <div className="col-span-3 py-16 text-center bg-white rounded-3xl border border-neutral-200">
              <p className="text-base font-bold text-neutral-700">No attractions match your filter criteria.</p>
              <button
                onClick={() => {
                  setSelectedTag('All');
                  setSelectedCategoryKey('all');
                  setSearchQuery('');
                }}
                className="mt-3 text-xs font-bold text-[#F97316] underline cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            filteredCatalogue.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                <div className="relative h-52 w-full overflow-hidden bg-neutral-100">
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1">
                    <span className="bg-[#0B0D0C]/85 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute top-3.5 right-3.5 flex gap-1">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className={`text-[9px] font-extrabold px-2 py-0.5 rounded backdrop-blur-md ${
                          t === 'Extreme'
                            ? 'bg-rose-600 text-white'
                            : t === 'Kids'
                            ? 'bg-amber-400 text-black'
                            : 'bg-white/90 text-neutral-800'
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="font-display text-lg font-black tracking-tight">{item.name}</h3>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-neutral-100 grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-neutral-400 block uppercase text-[9px] font-bold">Space Needed</span>
                        <span className="font-bold text-neutral-800">{item.spaceRequired}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block uppercase text-[9px] font-bold">Timeline</span>
                        <span className="font-bold text-neutral-800">{item.installationTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-neutral-400 uppercase font-bold block">
                        Indicative Budget
                      </span>
                      <span className="font-display text-base font-black text-[#556B2F]">
                        {item.indicativeBudget}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedAttraction(item)}
                      className="px-4 py-2 bg-[#FFF7ED] hover:bg-[#F97316] text-[#F97316] hover:text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      View Specs →
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* =========================================================================
          6. GET A PROJECT QUOTE / PROJECT CONSULTATION FORM
          ========================================================================= */}
      <section id="project-quote" className="py-24 bg-[#F3F4F0] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left text column */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs uppercase font-extrabold tracking-widest text-[#556B2F] border border-neutral-200">
                <Check className="w-3.5 h-3.5" />
                <span>Executive Consultation Desk</span>
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-2">
                Build Your Adventure Park
              </h2>
              <p className="text-base font-bold text-neutral-800 mt-2">
                Have the Space? We'll Help You Create the Experience.
              </p>

              <p className="text-xs text-neutral-600 mt-4 leading-relaxed">
                Whether you're developing a resort, campsite, adventure park, tourism destination, school facility, family entertainment centre or recreational space, explore adventure setups that can fit your vision.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-[#556B2F] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B0D0C]">Site Feasibility & Topography Study</h4>
                    <p className="text-[11px] text-neutral-500 mt-0.5">Detailed terrain evaluation for optimal civil anchors and tension forces.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-[#556B2F] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B0D0C]">Indicative Project Budgeting</h4>
                    <p className="text-[11px] text-neutral-500 mt-0.5">Transparent equipment, rigging, safety harness and installation schedules.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-xl bg-[#556B2F] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B0D0C]">Staff Training & Safety Certification</h4>
                    <p className="text-[11px] text-neutral-500 mt-0.5">Instructor drills, daily safety checklists and routine third-party audit protocols.</p>
                  </div>
                </div>
              </div>

              {/* Direct channels */}
              <div className="mt-10 pt-8 border-t border-neutral-300/80">
                <span className="text-[11px] uppercase font-bold text-neutral-500 block mb-3">
                  Speak Directly With Our Engineering Desk
                </span>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={openWhatsApp}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-2xl transition-colors cursor-pointer shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Us</span>
                  </button>
                  <a
                    href="tel:+919999999999"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-neutral-100 text-[#0B0D0C] text-xs font-bold rounded-2xl border border-neutral-300 transition-colors cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#F97316]" />
                    <span>+91 99999 99999</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-neutral-200/90 shadow-xl">
                {formSubmitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-[#0B0D0C]">
                      Enquiry Successfully Received!
                    </h3>
                    <p className="text-xs text-neutral-600 mt-2 max-w-md mx-auto">
                      Thank you, {formName}. Our Lead Adventure Park Engineer has received your project details and will connect with you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 px-6 py-3 bg-[#0B0D0C] text-white text-xs font-bold rounded-xl cursor-pointer"
                    >
                      Submit Another Query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="border-b border-neutral-100 pb-3">
                      <h3 className="font-display text-2xl font-black text-[#0B0D0C]">
                        Tell us about your project
                      </h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        Fill in your destination parameters for a preliminary feasibility report & indicative quote.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="Your name"
                          className="w-full bg-[#F8F9F6] border border-neutral-200 rounded-xl px-3.5 py-3 text-xs focus:outline-none focus:border-[#556B2F]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full bg-[#F8F9F6] border border-neutral-200 rounded-xl px-3.5 py-3 text-xs focus:outline-none focus:border-[#556B2F]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full bg-[#F8F9F6] border border-neutral-200 rounded-xl px-3.5 py-3 text-xs focus:outline-none focus:border-[#556B2F]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                          Site Location / City / State
                        </label>
                        <input
                          type="text"
                          value={formLocation}
                          onChange={(e) => setFormLocation(e.target.value)}
                          placeholder="e.g. Manali, Lonavala, Munnar"
                          className="w-full bg-[#F8F9F6] border border-neutral-200 rounded-xl px-3.5 py-3 text-xs focus:outline-none focus:border-[#556B2F]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                          Property Type
                        </label>
                        <select
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full bg-[#F8F9F6] border border-neutral-200 rounded-xl px-3 py-3 text-xs focus:outline-none cursor-pointer"
                        >
                          <option>Resort / Tourism Destination</option>
                          <option>Campsite / Nature Retreat</option>
                          <option>Commercial Adventure Park</option>
                          <option>Private Farmhouse / Land</option>
                          <option>School / University Campus</option>
                          <option>Indoor / Mall FEC Center</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                          Available Land / Space
                        </label>
                        <select
                          value={availableArea}
                          onChange={(e) => setAvailableArea(e.target.value)}
                          className="w-full bg-[#F8F9F6] border border-neutral-200 rounded-xl px-3 py-3 text-xs focus:outline-none cursor-pointer"
                        >
                          <option>Under 10,000 sq ft</option>
                          <option>10,000 – 40,000 sq ft</option>
                          <option>1 to 3 Acres</option>
                          <option>3 to 10 Acres</option>
                          <option>10+ Acres / Forest Estate</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                          Indicative Budget
                        </label>
                        <select
                          value={budgetRange}
                          onChange={(e) => setBudgetRange(e.target.value)}
                          className="w-full bg-[#F8F9F6] border border-neutral-200 rounded-xl px-3 py-3 text-xs focus:outline-none cursor-pointer"
                        >
                          <option>₹10 Lakh – ₹25 Lakh</option>
                          <option>₹25 Lakh – ₹75 Lakh</option>
                          <option>₹75 Lakh – ₹2 Crore</option>
                          <option>₹2 Crore – ₹5 Crore</option>
                          <option>₹5 Crore+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-2">
                        Preferred Adventure Attractions
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {[
                          'Aerial Adventures',
                          'Extreme Thrills',
                          'Climbing & Ropes',
                          'Motorsport & Racing',
                          'Games & Combat',
                          'Family & Kids',
                          'Nature & Campsites',
                          'Indoor Entertainment'
                        ].map((interest) => (
                          <button
                            type="button"
                            key={interest}
                            onClick={() => toggleInterest(interest)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                              selectedInterests.includes(interest)
                                ? 'bg-[#556B2F] text-white shadow-sm'
                                : 'bg-[#F3F4F0] text-neutral-600 hover:text-black'
                            }`}
                          >
                            {interest}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">
                        Project Description & Notes
                      </label>
                      <textarea
                        rows={3}
                        value={formNotes}
                        onChange={(e) => setFormNotes(e.target.value)}
                        placeholder="Tell us about the site terrain, existing facilities, target opening date, etc."
                        className="w-full bg-[#F8F9F6] border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs focus:outline-none focus:border-[#556B2F]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-black uppercase tracking-wider rounded-2xl transition-all shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Start Your Adventure Project →</span>
                      </button>
                    </div>

                    <p className="text-[10px] text-neutral-400 text-center">
                      Confidentiality guaranteed. All estimates are presented as Indicative Budgets subject to detailed on-site topography.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ATTRACTION DETAIL MODAL
          ========================================================================= */}
      {selectedAttraction && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-neutral-200 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Image */}
            <div className="relative h-64 w-full overflow-hidden bg-neutral-900 shrink-0">
              <SafeImage
                src={selectedAttraction.image}
                alt={selectedAttraction.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <button
                onClick={() => setSelectedAttraction(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs uppercase font-extrabold tracking-wider text-[#F97316]">
                  {selectedAttraction.category}
                </span>
                <h3 className="font-display text-2xl font-black">{selectedAttraction.name}</h3>
                <p className="text-xs text-neutral-200 mt-0.5">{selectedAttraction.tagline}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider mb-1.5">
                  Overview & Engineering Description
                </h4>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {selectedAttraction.description}
                </p>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="bg-[#F8F9F6] p-5 rounded-2xl border border-neutral-200 space-y-3">
                <h4 className="text-xs font-bold text-[#0B0D0C] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#556B2F]" />
                  <span>Setup Specifications & Engineering Parameters</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs pt-1">
                  <div>
                    <span className="text-[10px] text-neutral-400 block uppercase font-bold">Space Required</span>
                    <span className="font-bold text-neutral-900">{selectedAttraction.spaceRequired}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 block uppercase font-bold">Installation</span>
                    <span className="font-bold text-neutral-900">{selectedAttraction.installationTime}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-400 block uppercase font-bold">Indicative Budget</span>
                    <span className="font-black text-[#556B2F]">{selectedAttraction.indicativeBudget}</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-neutral-600 bg-amber-50 border border-amber-200 p-4 rounded-2xl leading-relaxed">
                <strong className="text-amber-900">Note:</strong> The investment figures are presented as “Indicative Budget”. Final quotations depend on topographical soil bearing, span clearances, anchor requirements and custom destination capacity.
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-4 bg-neutral-50 border-t border-neutral-100 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedAttraction(null)}
                className="px-4 py-2 text-xs font-semibold text-neutral-600 hover:text-black cursor-pointer"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setSelectedAttraction(null);
                  scrollToSection('project-quote');
                  setFormNotes((prev) => `${prev} Interested in: ${selectedAttraction.name}.`);
                }}
                className="px-6 py-2.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-xs font-bold rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                Request Custom Quote for this Attraction →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
