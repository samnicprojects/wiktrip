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

import { SetupSpec } from '../types';
export type { SetupSpec };

// 6 Signature Flagship Architectural Setups
export const FEATURED_SETUPS: SetupSpec[] = [
  {
    id: 'setup-1-zipline',
    name: 'ZIPLINE',
    category: 'Aerial Adventures',
    categoryKey: 'aerial',
    popular: true,
    tagline: 'Glide Across Open Landscapes',
    description:
      'Glide across open landscapes on an exciting zipline experience, designed for different site layouts and rider requirements.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹6–26 Lakh',
    spaceRequired: '240–1,500 m²',
    installationTime: '6–12 Weeks',
    image: '/images/adventure/aerial.jpg',
    keyComponents: 'Support structure, wire and braking systems',
    highlightSpecs: {
      'Size / Span': '50–300 m on flat ground',
      'Footprint Area': '240–1,500 m²',
      'Indicative Budget': '₹6–26 Lakh',
      'Installation': '6–12 Weeks',
      'Key Components': 'Support structure, wire and braking systems'
    }
  },
  {
    id: 'setup-10-bungee-jumping',
    name: 'BUNGEE JUMPING',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    popular: true,
    tagline: 'Major High-Impact Destination Attraction',
    description:
      'Build a major adventure attraction for destinations seeking a high-impact, specialist-operated experience.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹100–180 Lakh',
    spaceRequired: '600–1,200 m²',
    installationTime: '24–36 Weeks',
    image: '/images/adventure/extreme.jpg',
    keyComponents: 'Support structure, lift system and cords',
    highlightSpecs: {
      'Drop Height': '40–70 m flat ground; up to 200 m in mountains',
      'Footprint Area': '600–1,200 m²',
      'Indicative Budget': '₹100–180 Lakh',
      'Installation': '24–36 Weeks',
      'Key Components': 'Support structure, lift system and cords'
    }
  },
  {
    id: 'setup-16-high-ropes-course',
    name: 'HIGH ROPES COURSE',
    category: 'Climbing & Ropes',
    categoryKey: 'climbing',
    popular: true,
    tagline: 'Elevated Obstacle, Movement & Balance Challenge',
    description:
      'Develop an elevated obstacle experience combining balance, movement and rope-based challenges.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹14–70 Lakh',
    spaceRequired: '300–1,200 m²',
    installationTime: '6–22 Weeks',
    image: '/images/adventure/climbing.jpg',
    keyComponents: 'Structure, elements and belay system',
    highlightSpecs: {
      'Challenge Elements': '8–40 Elements',
      'Footprint Area': '300–1,200 m²',
      'Indicative Budget': '₹14–70 Lakh',
      'Installation': '6–22 Weeks',
      'Key Components': 'Structure, elements and belay system'
    }
  },
  {
    id: 'setup-20-go-kart-arena',
    name: 'GO KART ARENA',
    category: 'Motorsport & Racing',
    categoryKey: 'motorsport',
    popular: true,
    tagline: 'Dedicated Racing Circuit & Safety Barrier System',
    description:
      'Build a dedicated karting destination with a planned circuit, vehicles and safety barriers.',
    tags: ['Outdoor', 'Indoor', 'Family'],
    indicativeBudget: '₹40–190 Lakh',
    spaceRequired: 'Indoor 1,800–5,000 m² · Outdoor 2,000–12,000 m²',
    installationTime: '16–36 Weeks',
    image: '/images/adventure/motorsport.jpg',
    keyComponents: 'Track, karts and safety barrier',
    highlightSpecs: {
      'Track Length': 'Indoor: 200–400 m · Outdoor: 200–1,000 m',
      'Footprint Area': 'Indoor: 1,800–5,000 m² · Outdoor: 2,000–12,000 m²',
      'Indicative Budget': '₹40–190 Lakh',
      'Installation': '16–36 Weeks',
      'Key Components': 'Track, karts and safety barrier'
    }
  },
  {
    id: 'setup-11-glass-bridge-sky-walk',
    name: 'GLASS BRIDGE / SKY WALK',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    popular: true,
    tagline: 'Dramatic Elevated Transparent Viewing Deck',
    description:
      'Create a dramatic elevated viewing experience with a glass walking surface and engineered support system.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹15–220 Lakh',
    spaceRequired: '80–800 m²',
    installationTime: '6–40 Weeks',
    image: '/images/adventure/extreme.jpg',
    siteNote: 'Possible integration with an existing bungee tower or mountain site.',
    keyComponents: 'Support structure, laminated glass panels and safety railings',
    highlightSpecs: {
      'Bridge Surface Size': '30–200 m²',
      'Footprint Area': '80–800 m²',
      'Indicative Budget': '₹15–220 Lakh',
      'Installation': '6–40 Weeks',
      'Site Note': 'Possible integration with existing bungee tower or mountain site'
    }
  },
  {
    id: 'setup-2-roller-coaster-zipline',
    name: 'ROLLER COASTER ZIPLINE',
    category: 'Aerial Adventures',
    categoryKey: 'aerial',
    tagline: 'Curved Rail Continuous Thrill Ride',
    description:
      'Combine the thrill of a zipline with a curved rail-based ride for a distinctive adventure attraction.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹16–120 Lakh',
    spaceRequired: '300–1,200 m²',
    installationTime: '12–24 Weeks',
    image: '/images/adventure/aerial.jpg',
    keyComponents: 'Support structure, rail system and pulley',
    highlightSpecs: {
      'Track Length': '100–500 m on flat ground',
      'Footprint Area': '300–1,200 m²',
      'Indicative Budget': '₹16–120 Lakh',
      'Installation': '12–24 Weeks',
      'Key Components': 'Support structure, rail system and pulley'
    }
  }
];

// Adventure Categories mapping to the 26 Setups
const ADVENTURE_CATEGORIES = [
  {
    key: 'aerial',
    icon: Zap,
    name: 'Aerial Adventures',
    subtitle: 'Glide through open landscapes on gravity & rail systems.',
    cta: 'Explore Aerial Setups',
    image: '/images/adventure/aerial.jpg',
    highlights: '50m–500m Spans · Dual Cables · Roller Coaster Rails',
    attractions: [
      'Zipline',
      'Roller Coaster Zipline'
    ]
  },
  {
    key: 'extreme',
    icon: Flame,
    name: 'Extreme Thrills',
    subtitle: 'High-energy launch, swing, bungee and elevated glass decks.',
    cta: 'Explore Extreme Setups',
    image: '/images/adventure/extreme.jpg',
    highlights: '30ft–200m Heights · Redundant Rigging · High ROI',
    attractions: [
      'Quick Jump',
      'Giant Swing',
      'Reverse Bungee',
      'Human Bungee Slingshot',
      'Bungee Ejector',
      'Bungee Jumping',
      'Glass Bridge / Sky Walk'
    ]
  },
  {
    key: 'climbing',
    icon: Mountain,
    name: 'Climbing & Ropes',
    subtitle: 'Challenging obstacles, vertical walls and canopy walkways.',
    cta: 'Explore Ropes & Climbing',
    image: '/images/adventure/climbing.jpg',
    highlights: '8–40 Obstacles · Modular Panels · Continuous Belay',
    attractions: [
      'Climbing Wall',
      'Rappelling / Slithering',
      'Canopy Walk',
      'Compact Ropes Course',
      'High Ropes Course'
    ]
  },
  {
    key: 'motorsport',
    icon: Car,
    name: 'Motorsport & Racing',
    subtitle: 'Speed, off-road dirt trails, pump circuits and kart arenas.',
    cta: 'Explore Motorsport Setups',
    image: '/images/adventure/motorsport.jpg',
    highlights: '200m–1,000m Circuits · Safety Barriers · Off-Road Trails',
    attractions: [
      'ATV Track',
      'Bike Pump Track',
      'Go Kart Arena',
      'Luge Kart Ride'
    ]
  },
  {
    key: 'family',
    icon: Users,
    name: 'Family & Kids',
    subtitle: 'Safe, flexible and active entertainment zones for all age groups.',
    cta: 'Explore Family Setups',
    image: '/images/adventure/family.jpg',
    highlights: 'Padded Soft Play · Inflatables · Human Gyro',
    attractions: [
      'Soft Play Area',
      'Inflatables',
      'Human Gyro'
    ]
  },
  {
    key: 'games',
    icon: Target,
    name: 'Games & Mazes',
    subtitle: 'Modular walk-through labyrinth navigation for families and groups.',
    cta: 'Explore Maze Setups',
    image: '/images/adventure/games.jpg',
    highlights: '1,200–18,000 sq ft · Modular Labyrinths · Group Fun',
    attractions: [
      'Human Maze'
    ]
  },
  {
    key: 'indoor',
    icon: Gamepad2,
    name: 'Indoor Entertainment',
    subtitle: 'Weatherproof VR simulators and vertical wind tunnel flight.',
    cta: 'Explore Indoor Setups',
    image: '/images/adventure/indoor.jpg',
    highlights: 'VR Cricket · Vertical Wind Tunnels · All-Weather FEC',
    attractions: [
      'VR Cricket',
      'Indoor Sky Diving'
    ]
  },
  {
    key: 'flying',
    icon: Plane,
    name: 'Sky & Flying Experiences',
    subtitle: 'Powered aviation experiences for destination airfields.',
    cta: 'Explore Flying Setups',
    image: '/images/adventure/flying.jpg',
    highlights: 'Specialised Staff · Powered Wings · Panoramic Flight',
    attractions: [
      'Paramotoring',
      'Micro Lite Flying'
    ]
  }
];

// All 26 Verified Adventure Setup Catalogue Items
const CATALOGUE_ITEMS: SetupSpec[] = [
  // 1. Zipline
  {
    id: 'setup-1-zipline',
    name: 'Zipline',
    category: 'Aerial Adventures',
    categoryKey: 'aerial',
    popular: true,
    tagline: 'Glide Across Open Landscapes',
    description:
      'Glide across open landscapes on an exciting zipline experience, designed for different site layouts and rider requirements.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹6–26 Lakh',
    spaceRequired: '240–1,500 m²',
    installationTime: '6–12 Weeks',
    image: '/images/adventure/aerial.jpg',
    keyComponents: 'Support structure, wire and braking systems',
    highlightSpecs: {
      'Size / Span': '50–300 m on flat ground',
      'Footprint Area': '240–1,500 m²',
      'Indicative Budget': '₹6–26 Lakh',
      'Installation Timeline': '6–12 Weeks',
      'Key Components': 'Support structure, wire and braking systems'
    }
  },
  // 2. Roller Coaster Zipline
  {
    id: 'setup-2-roller-coaster-zipline',
    name: 'Roller Coaster Zipline',
    category: 'Aerial Adventures',
    categoryKey: 'aerial',
    tagline: 'Curved Rail Continuous Thrill Ride',
    description:
      'Combine the thrill of a zipline with a curved rail-based ride for a distinctive adventure attraction.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹16–120 Lakh',
    spaceRequired: '300–1,200 m²',
    installationTime: '12–24 Weeks',
    image: '/images/adventure/aerial.jpg',
    keyComponents: 'Support structure, rail system and pulley',
    highlightSpecs: {
      'Size / Span': '100–500 m on flat ground',
      'Footprint Area': '300–1,200 m²',
      'Indicative Budget': '₹16–120 Lakh',
      'Installation Timeline': '12–24 Weeks',
      'Key Components': 'Support structure, rail system and pulley'
    }
  },
  // 3. Climbing Wall
  {
    id: 'setup-3-climbing-wall',
    name: 'Climbing Wall',
    category: 'Climbing & Ropes',
    categoryKey: 'climbing',
    tagline: 'Challenge Balance, Strength & Climbing Skills',
    description:
      'Challenge balance, strength and climbing skills with a purpose-built climbing wall for adventure venues.',
    tags: ['Outdoor', 'Indoor', 'Extreme', 'Family'],
    indicativeBudget: '₹2.4–40 Lakh',
    spaceRequired: '16–100 m²',
    installationTime: '4–12 Weeks',
    image: '/images/adventure/climbing.jpg',
    keyComponents: 'Support structure and panels',
    highlightSpecs: {
      'Wall Height': '12–60 ft',
      'Footprint Area': '16–100 m²',
      'Indicative Budget': '₹2.4–40 Lakh',
      'Installation Timeline': '4–12 Weeks',
      'Key Components': 'Support structure and panels'
    }
  },
  // 4. Rappelling / Slithering
  {
    id: 'setup-4-rappelling-slithering',
    name: 'Rappelling / Slithering',
    category: 'Climbing & Ropes',
    categoryKey: 'climbing',
    tagline: 'Controlled Vertical Descent & Specialist Rope Systems',
    description:
      'Experience a controlled descent along a vertical surface using appropriate ropes and specialist equipment.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹3.6–14 Lakh',
    spaceRequired: '16–100 m²',
    installationTime: '4–8 Weeks',
    image: '/images/adventure/climbing.jpg',
    keyComponents: 'Support structure and panels',
    highlightSpecs: {
      'Descent Height': '24–60 ft',
      'Footprint Area': '16–100 m²',
      'Indicative Budget': '₹3.6–14 Lakh',
      'Installation Timeline': '4–8 Weeks',
      'Key Components': 'Support structure and panels'
    }
  },
  // 5. Quick Jump
  {
    id: 'setup-5-quick-jump',
    name: 'Quick Jump',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    tagline: 'Free-Fall-Style Height Attraction with Soft Catch',
    description:
      'Add a height-based adventure attraction for visitors seeking an exciting free-fall-style experience.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹5–22 Lakh',
    spaceRequired: '20–40 m²',
    installationTime: '3–6 Weeks',
    image: '/images/adventure/extreme.jpg',
    keyComponents: 'Support structure, device and equipment',
    highlightSpecs: {
      'Drop Height': '30–80 ft',
      'Footprint Area': '20–40 m²',
      'Indicative Budget': '₹5–22 Lakh',
      'Installation Timeline': '3–6 Weeks',
      'Key Components': 'Support structure, device and equipment'
    }
  },
  // 6. Giant Swing
  {
    id: 'setup-6-giant-swing',
    name: 'Giant Swing',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    tagline: 'High-Arc Pendulum Swing Experience',
    description:
      'Give visitors a memorable high-swing experience with a purpose-designed support structure and mechanism.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹8–40 Lakh',
    spaceRequired: '80–400 m²',
    installationTime: '4–16 Weeks',
    image: '/images/adventure/extreme.jpg',
    keyComponents: 'Support structure and mechanism',
    highlightSpecs: {
      'Swing Height': '40–100 ft',
      'Footprint Area': '80–400 m²',
      'Indicative Budget': '₹8–40 Lakh',
      'Installation Timeline': '4–16 Weeks',
      'Key Components': 'Support structure and mechanism'
    }
  },
  // 7. Reverse Bungee
  {
    id: 'setup-7-reverse-bungee',
    name: 'Reverse Bungee',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    tagline: 'High-Energy Ground-to-Sky Launch Attraction',
    description:
      'Create a high-energy launch-style attraction for adventure parks and destination experiences.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹3.5–26 Lakh',
    spaceRequired: '60–300 m²',
    installationTime: '3–12 Weeks',
    image: '/images/adventure/extreme.jpg',
    keyComponents: 'Engineering, support structure and cords',
    highlightSpecs: {
      'Jump Height': '32–100 ft',
      'Footprint Area': '60–300 m²',
      'Indicative Budget': '₹3.5–26 Lakh',
      'Installation Timeline': '3–12 Weeks',
      'Key Components': 'Engineering, support structure and cords'
    }
  },
  // 8. Human Bungee Slingshot
  {
    id: 'setup-8-human-bungee-slingshot',
    name: 'Human Bungee Slingshot',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    tagline: 'High-Velocity Launch Attraction with Cord System',
    description:
      'Deliver a launch-style adventure attraction designed around a specialised structure and cord system.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹8–24 Lakh',
    spaceRequired: '240–500 m²',
    installationTime: '4–12 Weeks',
    image: '/images/adventure/extreme.jpg',
    keyComponents: 'Engineering, support structure and cords',
    highlightSpecs: {
      'Throw Distance': '60–180 ft',
      'Footprint Area': '240–500 m²',
      'Indicative Budget': '₹8–24 Lakh',
      'Installation Timeline': '4–12 Weeks',
      'Key Components': 'Engineering, support structure and cords'
    }
  },
  // 9. Bungee Ejector
  {
    id: 'setup-9-bungee-ejector',
    name: 'Bungee Ejector',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    tagline: 'Compact Launch Ride with Prefabricated Components',
    description:
      'Introduce a compact launch-style ride using prefabricated components.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹3.5–4 Lakh',
    spaceRequired: '140 m²',
    installationTime: '3 Weeks',
    image: '/images/adventure/extreme.jpg',
    keyComponents: 'Prefabricated components',
    highlightSpecs: {
      'Throw Distance': '40–60 ft',
      'Footprint Area': '140 m²',
      'Indicative Budget': '₹3.5–4 Lakh',
      'Installation Timeline': '3 Weeks',
      'Key Components': 'Prefabricated components'
    }
  },
  // 10. Bungee Jumping
  {
    id: 'setup-10-bungee-jumping',
    name: 'Bungee Jumping',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    popular: true,
    tagline: 'Major Flagship Destination Gravity Jump',
    description:
      'Build a major adventure attraction for destinations seeking a high-impact, specialist-operated experience.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹100–180 Lakh',
    spaceRequired: '600–1,200 m²',
    installationTime: '24–36 Weeks',
    image: '/images/adventure/extreme.jpg',
    keyComponents: 'Support structure, lift system and cords',
    highlightSpecs: {
      'Drop Height': '40–70 m on flat ground; up to 200 m in mountains',
      'Footprint Area': '600–1,200 m²',
      'Indicative Budget': '₹100–180 Lakh',
      'Installation Timeline': '24–36 Weeks',
      'Key Components': 'Support structure, lift system and cords'
    }
  },
  // 11. Glass Bridge / Sky Walk
  {
    id: 'setup-11-glass-bridge-sky-walk',
    name: 'Glass Bridge / Sky Walk',
    category: 'Extreme Thrills',
    categoryKey: 'extreme',
    popular: true,
    tagline: 'Dramatic Elevated Transparent Viewing Experience',
    description:
      'Create a dramatic elevated viewing experience with a glass walking surface and engineered support system.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹15–220 Lakh',
    spaceRequired: '80–800 m²',
    installationTime: '6–40 Weeks',
    image: '/images/adventure/extreme.jpg',
    siteNote: 'Possible integration with an existing bungee tower or mountain site.',
    keyComponents: 'Support structure, laminated glass panels and safety railings',
    highlightSpecs: {
      'Bridge Surface Size': '30–200 m²',
      'Footprint Area': '80–800 m²',
      'Indicative Budget': '₹15–220 Lakh',
      'Installation Timeline': '6–40 Weeks',
      'Site Note': 'Possible integration with existing bungee tower or mountain site'
    }
  },
  // 12. Canopy Walk
  {
    id: 'setup-12-canopy-walk',
    name: 'Canopy Walk',
    category: 'Climbing & Ropes',
    categoryKey: 'climbing',
    tagline: 'Elevated Scenic Treetop Walkway Route',
    description:
      'Let visitors explore elevated routes through natural surroundings using a purpose-designed walkway.',
    tags: ['Outdoor', 'Family'],
    indicativeBudget: '₹4–40 Lakh',
    spaceRequired: '40–400 m²',
    installationTime: '3–16 Weeks',
    image: '/images/adventure/climbing.jpg',
    keyComponents: 'Engineering and structure',
    highlightSpecs: {
      'Walkway Length': '10–100 m',
      'Footprint Area': '40–400 m²',
      'Indicative Budget': '₹4–40 Lakh',
      'Installation Timeline': '3–16 Weeks',
      'Key Components': 'Engineering and structure'
    }
  },
  // 13. ATV Track
  {
    id: 'setup-13-atv-track',
    name: 'ATV Track',
    category: 'Motorsport & Racing',
    categoryKey: 'motorsport',
    tagline: 'Off-Road Riding Circuit for Destinations',
    description:
      'Design an off-road riding circuit for adventure destinations and outdoor recreation facilities.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹4–40 Lakh',
    spaceRequired: '2,000–12,000 m²',
    installationTime: '3–16 Weeks',
    image: '/images/adventure/motorsport.jpg',
    keyComponents: 'Track and layout (ATV vehicles are extra, with multiple options available)',
    highlightSpecs: {
      'Track Length': '300–1,000 m',
      'Footprint Area': '2,000–12,000 m²',
      'Indicative Budget': '₹4–40 Lakh',
      'Installation Timeline': '3–16 Weeks',
      'Key Components': 'Track and layout. ATV vehicles are extra, with multiple options available'
    }
  },
  // 14. Bike Pump Track
  {
    id: 'setup-14-bike-pump-track',
    name: 'Bike Pump Track',
    category: 'Motorsport & Racing',
    categoryKey: 'motorsport',
    tagline: 'Contoured Riding Surfaces for Skill & Recreation',
    description:
      'Create a purpose-built cycling track featuring shaped riding surfaces for recreational and skill-based riding.',
    tags: ['Outdoor', 'Family', 'Kids'],
    indicativeBudget: '₹5 Lakh onwards',
    spaceRequired: '400–1,500 m²',
    installationTime: '4–12 Weeks',
    image: '/images/adventure/motorsport.jpg',
    keyComponents: 'Design and surface material',
    highlightSpecs: {
      'Track Length': '300–800 m',
      'Footprint Area': '400–1,500 m²',
      'Indicative Budget': '₹5 Lakh onwards',
      'Installation Timeline': '4–12 Weeks',
      'Key Components': 'Design and surface material'
    }
  },
  // 15. Compact Ropes Course
  {
    id: 'setup-15-compact-ropes-course',
    name: 'Compact Ropes Course',
    category: 'Climbing & Ropes',
    categoryKey: 'climbing',
    tagline: 'Multi-Element Challenge for Adventure & Team Activities',
    description:
      'Build an engaging ropes-based challenge with multiple elements for adventure and team activities.',
    tags: ['Outdoor', 'Family', 'Kids'],
    indicativeBudget: '₹8–40 Lakh',
    spaceRequired: '100–800 m²',
    installationTime: '4–16 Weeks',
    image: '/images/adventure/climbing.jpg',
    keyComponents: 'Structure, elements and belay system',
    highlightSpecs: {
      'Challenge Elements': '8–40 Elements',
      'Footprint Area': '100–800 m²',
      'Indicative Budget': '₹8–40 Lakh',
      'Installation Timeline': '4–16 Weeks',
      'Key Components': 'Structure, elements and belay system'
    }
  },
  // 16. High Ropes Course
  {
    id: 'setup-16-high-ropes-course',
    name: 'High Ropes Course',
    category: 'Climbing & Ropes',
    categoryKey: 'climbing',
    popular: true,
    tagline: 'Elevated Obstacle, Movement & Rope Challenges',
    description:
      'Develop an elevated obstacle experience combining balance, movement and rope-based challenges.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹14–70 Lakh',
    spaceRequired: '300–1,200 m²',
    installationTime: '6–22 Weeks',
    image: '/images/adventure/climbing.jpg',
    keyComponents: 'Structure, elements and belay system',
    highlightSpecs: {
      'Challenge Elements': '8–40 Elements',
      'Footprint Area': '300–1,200 m²',
      'Indicative Budget': '₹14–70 Lakh',
      'Installation Timeline': '6–22 Weeks',
      'Key Components': 'Structure, elements and belay system'
    }
  },
  // 17. Soft Play Area
  {
    id: 'setup-17-soft-play-area',
    name: 'Soft Play Area',
    category: 'Family & Kids',
    categoryKey: 'family',
    tagline: 'Dedicated Padded Indoor Play Environment',
    description:
      'Create a dedicated indoor play environment with prefabricated equipment for family entertainment venues.',
    tags: ['Indoor', 'Family', 'Kids'],
    indicativeBudget: '₹15 Lakh onwards',
    spaceRequired: '1,200–12,000 sq ft',
    installationTime: '10–20 Weeks',
    image: '/images/adventure/family.jpg',
    keyComponents: 'Prefabricated items',
    highlightSpecs: {
      'Facility Size': '1,200–12,000 sq ft',
      'Footprint Area': '1,200–12,000 sq ft',
      'Indicative Budget': '₹15 Lakh onwards',
      'Installation Timeline': '10–20 Weeks',
      'Key Components': 'Prefabricated items'
    }
  },
  // 18. Inflatables
  {
    id: 'setup-18-inflatables',
    name: 'Inflatables',
    category: 'Family & Kids',
    categoryKey: 'family',
    tagline: 'Flexible Inflatable Attractions for Events & Zones',
    description:
      'Add flexible inflatable attractions for recreational venues, events and family activity zones.',
    tags: ['Outdoor', 'Indoor', 'Family', 'Kids'],
    indicativeBudget: '₹2 Lakh onwards',
    spaceRequired: '100–4,000 m²',
    installationTime: '2 Weeks',
    image: '/images/adventure/family.jpg',
    keyComponents: 'Prefabricated items',
    highlightSpecs: {
      'Elements': '5–40 Elements',
      'Footprint Area': '100–4,000 m²',
      'Indicative Budget': '₹2 Lakh onwards',
      'Installation Timeline': '2 Weeks',
      'Key Components': 'Prefabricated items'
    }
  },
  // 19. Human Gyro
  {
    id: 'setup-19-human-gyro',
    name: 'Human Gyro',
    category: 'Family & Kids',
    categoryKey: 'family',
    tagline: 'Compact Footprint Rotating Ride Experience',
    description:
      'Offer a rotating ride experience in a compact footprint, with two-person and four-person versions listed.',
    tags: ['Outdoor', 'Indoor', 'Family'],
    indicativeBudget: '₹3–48 Lakh',
    spaceRequired: '60 m²',
    installationTime: '2 Weeks',
    image: '/images/adventure/family.jpg',
    keyComponents: 'Prefabricated item',
    highlightSpecs: {
      'Rider Capacity': '2 or 4 people versions',
      'Footprint Area': '60 m²',
      'Indicative Budget': '₹3–48 Lakh',
      'Installation Timeline': '2 Weeks',
      'Key Components': 'Prefabricated item'
    }
  },
  // 20. Go Kart Arena
  {
    id: 'setup-20-go-kart-arena',
    name: 'Go Kart Arena',
    category: 'Motorsport & Racing',
    categoryKey: 'motorsport',
    popular: true,
    tagline: 'Planned Circuit, Vehicles & Safety Barriers',
    description:
      'Build a dedicated karting destination with a planned circuit, vehicles and safety barriers.',
    tags: ['Outdoor', 'Indoor', 'Family'],
    indicativeBudget: '₹40–190 Lakh',
    spaceRequired: 'Indoor 1,800–5,000 m² · Outdoor 2,000–12,000 m²',
    installationTime: '16–36 Weeks',
    image: '/images/adventure/motorsport.jpg',
    keyComponents: 'Track, karts and safety barrier',
    highlightSpecs: {
      'Track Length': 'Indoor: 200–400 m · Outdoor: 200–1,000 m',
      'Footprint Area': 'Indoor: 1,800–5,000 m² · Outdoor: 2,000–12,000 m²',
      'Indicative Budget': '₹40–190 Lakh',
      'Installation Timeline': '16–36 Weeks',
      'Key Components': 'Track, karts and safety barrier'
    }
  },
  // 21. Luge Kart Ride
  {
    id: 'setup-21-luge-kart-ride',
    name: 'Luge Kart Ride',
    category: 'Motorsport & Racing',
    categoryKey: 'motorsport',
    tagline: 'Downhill Mountain Gravity Kart Attraction',
    description:
      'Create a downhill kart attraction for suitable elevated sites and mountain destinations.',
    tags: ['Outdoor', 'Extreme', 'Family'],
    indicativeBudget: '₹100 Lakh onwards',
    spaceRequired: '3,000 m² onwards',
    installationTime: '24 Weeks onwards',
    image: '/images/adventure/motorsport.jpg',
    siteNote: 'Elevation is required.',
    keyComponents: 'Track, downhill luge karts and safety barrier',
    highlightSpecs: {
      'Track Length': '400 m onwards',
      'Footprint Area': '3,000 m² onwards',
      'Indicative Budget': '₹100 Lakh onwards',
      'Installation Timeline': '24 Weeks onwards',
      'Site Note': 'Elevation is required'
    }
  },
  // 22. Human Maze
  {
    id: 'setup-22-human-maze',
    name: 'Human Maze',
    category: 'Games & Mazes',
    categoryKey: 'games',
    tagline: 'Walk-Through Labyrinth for Groups & Families',
    description:
      'Create a walk-through maze experience for families, groups and recreational destinations.',
    tags: ['Outdoor', 'Indoor', 'Family', 'Kids'],
    indicativeBudget: '₹8 Lakh onwards',
    spaceRequired: '1,200–18,000 sq ft',
    installationTime: '8–16 Weeks onwards',
    image: '/images/adventure/games.jpg',
    keyComponents: 'Prefabricated item',
    highlightSpecs: {
      'Maze Dimensions': '1,200–18,000 sq ft',
      'Footprint Area': '1,200–18,000 sq ft',
      'Indicative Budget': '₹8 Lakh onwards',
      'Installation Timeline': '8–16 Weeks onwards',
      'Key Components': 'Prefabricated item'
    }
  },
  // 23. VR Cricket
  {
    id: 'setup-23-vr-cricket',
    name: 'VR Cricket',
    category: 'Indoor Entertainment',
    categoryKey: 'indoor',
    tagline: 'Immersive Cricket Entertainment Simulator',
    description:
      'Bring immersive cricket-based entertainment to indoor recreation and gaming spaces.',
    tags: ['Indoor', 'Family', 'Kids'],
    indicativeBudget: '₹12 Lakh onwards',
    spaceRequired: '800 sq ft',
    installationTime: '8–12 Weeks',
    image: '/images/adventure/indoor.jpg',
    keyComponents: 'VR hardware, motion tracking sensors and cricket simulation software',
    highlightSpecs: {
      'Floor Area': '800 sq ft',
      'Indicative Budget': '₹12 Lakh onwards',
      'Installation Timeline': '8–12 Weeks',
      'Environment': 'Indoor recreation and gaming spaces'
    }
  },
  // 24. Indoor Sky Diving
  {
    id: 'setup-24-indoor-sky-diving',
    name: 'Indoor Sky Diving',
    category: 'Indoor Entertainment',
    categoryKey: 'indoor',
    popular: true,
    tagline: 'Vertical Wind-Tunnel Human Flying Attraction',
    description:
      'Offer a specialised indoor flying attraction using a vertical wind-tunnel setup.',
    tags: ['Indoor', 'Extreme', 'Family'],
    indicativeBudget: '₹250 Lakh – ₹800 Lakh',
    spaceRequired: '900 m²',
    installationTime: '36 Weeks onwards',
    image: '/images/adventure/indoor.jpg',
    siteNote: 'Prefabricated item. Chinese product: ₹250 Lakh onwards · USA product: ₹800 Lakh onwards. Confirm installation timeline with supplier.',
    keyComponents: 'Prefabricated vertical wind-tunnel setup',
    highlightSpecs: {
      'Footprint Area': '900 m²',
      'Budget Details': '₹250 Lakh onwards (Chinese) · ₹800 Lakh onwards (USA)',
      'Installation Timeline': '36 Weeks onwards (confirm with supplier)',
      'Key Components': 'Prefabricated item'
    }
  },
  // 25. Paramotoring
  {
    id: 'setup-25-paramotoring',
    name: 'Paramotoring',
    category: 'Sky & Flying Experiences',
    categoryKey: 'flying',
    tagline: 'Specialised Powered-Paragliding Destination Experience',
    description:
      'Add a specialised powered-paragliding experience for suitable destinations and operators.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹20 Lakh onwards',
    spaceRequired: '1,200 m² onwards',
    installationTime: '3–4 Weeks',
    image: '/images/adventure/flying.jpg',
    siteNote: 'Specialised staff required.',
    keyComponents: 'Paramotor rig, paragliding wing, safety radio and harness',
    highlightSpecs: {
      'Required Area': '1,200 m² onwards',
      'Indicative Budget': '₹20 Lakh onwards',
      'Installation Timeline': '3–4 Weeks',
      'Staffing Note': 'Specialised staff required'
    }
  },
  // 26. Micro Lite Flying
  {
    id: 'setup-26-micro-lite-flying',
    name: 'Micro Lite Flying',
    category: 'Sky & Flying Experiences',
    categoryKey: 'flying',
    tagline: 'Specialised Aviation Flight Recreation for Venues',
    description:
      'Introduce a specialised aviation experience for destinations with suitable operating facilities.',
    tags: ['Outdoor', 'Extreme'],
    indicativeBudget: '₹40 Lakh onwards',
    spaceRequired: '1,200 m² onwards',
    installationTime: '3–4 Weeks',
    image: '/images/adventure/flying.jpg',
    siteNote: 'Specialised staff required.',
    keyComponents: 'Microlight aircraft, airstrip / runway layout and flight safety gear',
    highlightSpecs: {
      'Required Area': '1,200 m² onwards',
      'Indicative Budget': '₹40 Lakh onwards',
      'Installation Timeline': '3–4 Weeks',
      'Staffing Note': 'Specialised staff required'
    }
  }
];

export const AdventureSetupView: React.FC = () => {
  const { showToast } = useApp();

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
    window.open(`https://wa.me/919711720218?text=${text}`, '_blank');
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
                  onClick={() => scrollToSection('setup-catalogue')}
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
                    <span className="font-display text-lg font-black text-white block leading-tight">26+</span>
                    <span className="text-[11px] text-neutral-400 block">Turnkey Setups</span>
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
                  onClick={() => scrollToSection('setup-catalogue')}
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
                  onClick={() => scrollToSection('setup-catalogue')}
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
          2. FEATURED ADVENTURE SETUPS (FLAGSHIP ARCHITECTURAL SHOWCASE)
          ========================================================================= */}
      <section id="featured-setups" className="py-24 bg-white border-y border-neutral-200/80">
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
          3. HOW WE BUILD (From Concept to Adventure Park)
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
          4. ADVENTURE SETUP CATALOGUE (Comprehensive Specification Explorer)
          ========================================================================= */}
      <section id="setup-catalogue" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBECE7] text-xs uppercase font-extrabold tracking-widest text-[#556B2F]">
              <Layers className="w-3.5 h-3.5" />
              <span>26 Turnkey Adventure Setups</span>
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B0D0C] mt-2">
              Adventure Setup Catalogue
            </h2>
            <p className="text-sm text-neutral-600 mt-2 max-w-2xl">
              Browse all 26 purpose-built adventure attractions from ziplines and bungee to karting and flight simulators. Filter by environment, category, or budget.
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
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 items-center">
                    <span className="bg-[#0B0D0C]/85 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {item.category}
                    </span>
                    {item.popular && (
                      <span className="bg-amber-400 text-black text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                        Popular
                      </span>
                    )}
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
                        <span className="font-bold text-neutral-800 line-clamp-1">{item.spaceRequired}</span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block uppercase text-[9px] font-bold">Timeline</span>
                        <span className="font-bold text-neutral-800 line-clamp-1">{item.installationTime}</span>
                      </div>
                    </div>

                    {item.keyComponents && (
                      <div className="mt-2.5 pt-2 border-t border-neutral-100 text-[11px]">
                        <span className="text-neutral-400 block uppercase text-[9px] font-bold">Key Components</span>
                        <span className="text-neutral-700 font-medium line-clamp-1">{item.keyComponents}</span>
                      </div>
                    )}
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
          5. GET A PROJECT QUOTE / PROJECT CONSULTATION FORM
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
                    className="inline-flex items-center gap-2.5 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-2xl transition-all cursor-pointer shadow-md group"
                  >
                    <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/70 shrink-0">
                      <SafeImage
                        src="/images/avatar/guide-avatar-climb.jpg"
                        alt="Adventure Setup Engineer"
                        className="w-full h-full object-cover object-top"
                      />
                      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-white animate-ping" />
                    </div>
                    <span>WhatsApp Us</span>
                  </button>
                  <a
                    href="tel:+919711720218"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-neutral-100 text-[#0B0D0C] text-xs font-bold rounded-2xl border border-neutral-300 transition-colors cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#F97316]" />
                    <span>+91 9711720218</span>
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
                          placeholder="+91 9711720218"
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
                          'Games & Mazes',
                          'Family & Kids',
                          'Indoor Entertainment',
                          'Sky & Flying Experiences'
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

                {selectedAttraction.highlightSpecs && (
                  <div className="pt-3 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {Object.entries(selectedAttraction.highlightSpecs).map(([label, val]) => (
                      <div key={label} className="bg-white p-3 rounded-xl border border-neutral-200/80">
                        <span className="text-[10px] text-neutral-400 block uppercase font-bold">{label}</span>
                        <span className="font-bold text-neutral-800 text-xs mt-0.5 block">{val}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {selectedAttraction.siteNote && (
                <div className="text-[11px] text-blue-900 bg-blue-50 border border-blue-200 p-4 rounded-2xl leading-relaxed">
                  <strong className="text-blue-950">Site Requirement Note:</strong> {selectedAttraction.siteNote}
                </div>
              )}

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
