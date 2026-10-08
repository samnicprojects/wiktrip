import {
  Hotel,
  TourPackage,
  EventItem,
  AdventureActivity,
  TrekCamp,
  StoreProduct,
  LearningCourse,
  VehicleRental,
  GalleryItem,
  BlogPost,
  Testimonial,
  JobOpening
} from '../types';

export const HOTELS_DATA: Hotel[] = [];

export const TOUR_PACKAGES_DATA: TourPackage[] = [
  {
    id: 'tour-1',
    title: 'Spiti Valley High-Altitude Overland Circuit',
    destination: 'Spiti Valley (Shimla - Kaza - Manali)',
    duration: '9 Days / 8 Nights',
    durationDays: 9,
    category: 'Adventure',
    price: 24999,
    originalPrice: 29999,
    rating: 4.9,
    reviewCount: 284,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Cross high Himalayan passes: Kunzum La (4,551m) & Rohtang Pass',
      'Visit the millennium-old Key Monastery and meditate with lamas',
      'Send a postcard from Hikkim – the world’s highest post office (4,400m)',
      'Camp beneath the Milky Way at turquoise Chandratal Lake',
      'Drive the legendary Hindustan-Tibet road along the Sutlej canyon'
    ],
    itinerary: [
      { day: 1, title: 'Shimla to Kalpa via Kinnaur Valley', description: 'Depart Shimla early morning winding through Apple country and Sutlej gorge. Sunset at Kinner Kailash.', meals: 'Dinner' },
      { day: 2, title: 'Kalpa to Nako & Tabo Monastery', description: 'Cross into Spiti Valley. Explore 1,025-year-old UNESCO Tabo murals.', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Tabo to Dhankar Fort & Kaza', description: 'Visit cliff-hanging Dhankar Monastery, then head to capital town Kaza.', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'High Altitude Villages: Hikkim, Komic, Langza', description: 'Fossil hunting in Langza, world highest motorable village Komic, post letter at Hikkim.', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Key Monastery & Chicham Bridge', description: 'Photograph Key Monastery and walk across Chicham Bridge – highest suspension bridge in Asia.', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Kaza to Chandratal via Kunzum Pass', description: 'Drive over 4,551m Kunzum La. Hike to Chandratal and camp under crystal stars.', meals: 'Breakfast & Camp Dinner' },
      { day: 7, title: 'Chandratal to Manali via Atal Tunnel', description: 'Navigate rugged Batal riverbed, cross Rohtang Pass / Atal Tunnel to Manali.', meals: 'Breakfast & Farewell Dinner' },
      { day: 8, title: 'Manali Leisure & Old Manali Cafes', description: 'Hot springs at Vashisht, stroll through cedar forest, shop souvenirs.', meals: 'Breakfast' },
      { day: 9, title: 'Departure from Manali', description: 'Transfer to bus/airport. Tour concludes with lifetime memories.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Specially equipped 4x4 Overland Vehicle with experienced mountain pilot',
      'Handpicked boutique stays and heated luxury dome camps',
      'Breakfast and wholesome dinner daily with organic local ingredients',
      'Oxygen cylinder, pulse oximeter, and certified high-altitude safety marshal',
      'Inner Line Permits, green taxes, and toll fees'
    ],
    exclusions: [
      'Airfare/train fare to Shimla or from Manali',
      'Personal travel insurance (recommended)',
      'Lunch and personal snacks'
    ],
    groupSize: '8 - 12 Explorers',
    difficulty: 'Moderate',
    featured: true
  },
  {
    id: 'tour-2',
    title: 'Kashmir Alpine Lakes & Floating Chinar Heritage',
    destination: 'Srinagar - Gulmarg - Pahalgam - Doodhpathri',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    category: 'Couple',
    price: 18499,
    originalPrice: 22000,
    rating: 4.8,
    reviewCount: 390,
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      '2 Nights in hand-carved cedarwood luxury houseboat on tranquil Nigeen Lake',
      'Gondola Cable Car ride to Phase 2 Kongdoori (4,000m) in Gulmarg',
      'Trek through Betaab Valley and Aru Valley in Pahalgam',
      'Private Shikara ride through Dal Lake floating vegetable gardens'
    ],
    itinerary: [
      { day: 1, title: 'Arrival Srinagar & Sunset Shikara', description: 'Traditional Kashmiri Kahwa welcome. Evening silent Shikara ride on Nigeen Lake.', meals: 'Dinner' },
      { day: 2, title: 'Srinagar to Gulmarg Alpine Meadows', description: 'Drive through saffron fields. Ride the world second-highest gondola to Phase 2.', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Gulmarg to Pahalgam Valley of Shepherds', description: 'Scenic drive along the Lidder River. Explore Chandanwari and Betaab Valley.', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Aru Valley & Baisaran Pine Woods', description: 'Pony trek or hike to mini-Switzerland, picnic by the glacial mountain stream.', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Doodhpathri Meadows & Mughal Gardens', description: 'Undiscovered meadow of milk (Doodhpathri) followed by Nishat & Shalimar gardens.', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Departure Srinagar', description: 'Transfer to Srinagar Airport with handcrafted walnut wood souvenir.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Premium Heritage Houseboat & 4-star pine-view mountain resort stays',
      'All transfers in private sanitized SUV',
      'Gondola Phase 1 & 2 tickets pre-arranged',
      'Daily authentic Wazwan-inspired breakfasts and dinners'
    ],
    exclusions: ['Pony rides in Pahalgam', 'Flights to Srinagar'],
    groupSize: 'Private / Couple',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: 'tour-3',
    title: 'Meghalaya Living Bridges & Sacred Forest Expedition',
    destination: 'Shillong - Cherrapunji - Dawki - Mawlynnong',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    category: 'Group',
    price: 16999,
    originalPrice: 20500,
    rating: 4.9,
    reviewCount: 215,
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Descend 3,500 stone steps to the Double Decker Living Root Bridge in Nongriat',
      'Swim in turquoise natural rock pools at Rainbow Falls',
      'Crystal-clear transparent boat ride on Umngot River in Dawki',
      'Cave exploration at Krem Mawmluh (subterranean limestone labyrinths)'
    ],
    itinerary: [
      { day: 1, title: 'Guwahati to Shillong Scotland of the East', description: 'Scenic drive past Umiam Lake with local Khasi food stops.', meals: 'Dinner' },
      { day: 2, title: 'Shillong to Sohra (Cherrapunji) Waterfalls', description: 'Witness Nohkalikai and Wei Sawdong 3-tier waterfall cascading into turquoise basins.', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'The Double Decker Living Root Bridge Hike', description: 'Trek into deep subtropical jungle to witness centuries-old bio-engineering marvels.', meals: 'Breakfast & Packed Lunch' },
      { day: 4, title: 'Dawki Crystal River & Mawlynnong Cleanest Village', description: 'Boat on transparent river and explore Asia cleanest village.', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Return via Krang Shuri to Guwahati', description: 'Swim at Krang Shuri falls and transfer to Guwahati airport.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Comfortable private transport with seasoned Northeast local driver',
      'Stays at eco-friendly cliffside cottages in Cherrapunji',
      'Certified Khasi wilderness guide for root bridge trek',
      'Boating fees and cave access gear (helmets + headlamps)'
    ],
    exclusions: ['Personal tipping', 'Flights to Guwahati'],
    groupSize: '6 - 10 Explorers',
    difficulty: 'Moderate',
    featured: true
  },
  {
    id: 'tour-4',
    title: 'Ladakh High Passes & Pangong Tso Expedition',
    destination: 'Leh - Khardung La - Nubra - Pangong Tso',
    duration: '7 Days / 6 Nights',
    durationDays: 7,
    category: 'Adventure',
    price: 21999,
    originalPrice: 26000,
    rating: 4.9,
    reviewCount: 310,
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Drive across Khardung La (5,359m) and Chang La (5,360m)',
      'Witness changing colors of the 134km long high-altitude Pangong Lake',
      'Experience magnetic hill and confluence of Indus and Zanskar rivers',
      'ATV rides on Hunder sand dunes in Nubra Valley'
    ],
    itinerary: [
      { day: 1, title: 'Acclimatization in Leh', description: 'Rest day for mandatory high altitude adaptation, evening Leh Palace.', meals: 'Dinner' },
      { day: 2, title: 'Sham Valley, Hall of Fame & Sangam', description: 'Visit Sangam confluence, Gurudwara Pathar Sahib, and Magnetic Hill.', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Leh to Nubra Valley via Khardung La', description: 'Ascend legendary Khardung La pass. Evening camel safari in Hunder dunes.', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Turtuk Border Village & Silk Route', description: 'Explore Baltic cultural village just miles from Line of Control.', meals: 'Breakfast & Dinner' },
      { day: 5, title: 'Nubra to Pangong Tso via Shyok River', description: 'Off-road along the roaring Shyok river to the turquoise Pangong Lake.', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Pangong to Leh via Chang La Pass', description: 'Sunrise photography at the lake. Cross high Chang La pass returning to Leh.', meals: 'Breakfast & Dinner' },
      { day: 7, title: 'Departure Leh', description: 'Early morning transfer to Leh Kushok Bakula Airport.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Twin sharing deluxe hotel & lakeside insulated camp accommodation',
      'Airport pick and drop with dedicated 4x4 Tempo / SUV',
      'All inner line permits, environmental fees, wildlife charges',
      'Medical oxygen kit throughout the circuit'
    ],
    exclusions: ['Airfare to/from Leh', 'Personal shopping'],
    groupSize: '10 - 14 Explorers',
    difficulty: 'Moderate',
    featured: false
  },
  {
    id: 'tour-5',
    title: 'Kerala Rainforest, Tea Mist & Backwater Haven',
    destination: 'Munnar - Thekkady - Alleppey - Fort Kochi',
    duration: '6 Days / 5 Nights',
    durationDays: 6,
    category: 'Family',
    price: 15499,
    originalPrice: 19000,
    rating: 4.8,
    reviewCount: 340,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      'Stroll through emerald rolling tea carpet plantations in Munnar',
      'Periyar Tiger Reserve bamboo rafting and spice trail',
      'Full-day private traditional Kettuvallam houseboat cruise in Alleppey backwaters',
      'Sunset Kathakali and Kalaripayattu martial art performance in Fort Kochi'
    ],
    itinerary: [
      { day: 1, title: 'Cochin to Munnar Hill Station', description: 'Drive past Cheeyappara waterfalls to high misty tea estates.', meals: 'Dinner' },
      { day: 2, title: 'Munnar Tea Trails & Eravikulam', description: 'Spot endangered Nilgiri Tahr at Eravikulam National Park and visit tea museum.', meals: 'Breakfast & Dinner' },
      { day: 3, title: 'Munnar to Thekkady Spice Sanctuary', description: 'Spice plantation sensory walk with cinnamon, cardamom, and clove.', meals: 'Breakfast & Dinner' },
      { day: 4, title: 'Thekkady to Alleppey Houseboat', description: 'Board private thatched houseboat gliding along palm-fringed lagoons.', meals: 'All Meals on Houseboat' },
      { day: 5, title: 'Alleppey to Fort Kochi Heritage', description: 'Explore Portuguese colonial quarter, Jewish Synagogue, and Chinese fishing nets.', meals: 'Breakfast & Dinner' },
      { day: 6, title: 'Departure Cochin Airport', description: 'Transfer with authentic Kerala banana chips and spice packs.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Air-conditioned private vehicle with English/Hindi speaking chauffeur',
      'Luxury plantation resort and private air-conditioned houseboat',
      'All meals on houseboat (fresh Karimeen fish fry & traditional sadhya)'
    ],
    exclusions: ['Airfare', 'Monument entry fees'],
    groupSize: 'Family (4-8 Pax)',
    difficulty: 'Easy',
    featured: false
  },
  {
    id: 'tour-6',
    title: 'Rishikesh Thrill & Ganga Cliff Jump Weekend',
    destination: 'Rishikesh, Uttarakhand',
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    category: 'Weekend',
    price: 6999,
    originalPrice: 8500,
    rating: 4.9,
    reviewCount: 480,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
    ],
    highlights: [
      '26km Grade III+ & IV White Water Rafting through rapids like Golf Course & Roller Coaster',
      '30ft River Cliff Jump & Body Surfing in sacred waters',
      'Riverside Glamping with live bonfire acoustic music and barbecue',
      'Bungy jumping or giant swing option at India highest platform'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Riverside Camp Check-in', description: 'Check into Swiss luxury tents. Beach volleyball, sunset walk, evening barbecue bonfire.', meals: 'Snacks & Dinner' },
      { day: 2, title: 'The Ultimate 26km White Water Challenge', description: 'Marine Drive to NIM Beach white water run, cliff jumping, body surfing.', meals: 'Breakfast, Lunch & Dinner' },
      { day: 3, title: 'Waterfall Hike & Departure', description: 'Short trek to Patna or Neer Garh waterfall, local cafe lunch, departure.', meals: 'Breakfast' }
    ],
    inclusions: [
      'Riverside Swiss Glamping with attached western washrooms and power backup',
      'Complete 26km rafting gear (CE-certified life jackets, helmets, carbon paddles)',
      'Certified river guides and rescue kayak escort on the water',
      'Bonfire, live acoustics, and 6 buffet meals'
    ],
    exclusions: ['Transport to Rishikesh', 'Bungy jump optional pass'],
    groupSize: 'Youth & Solo Travelers',
    difficulty: 'Moderate',
    featured: true
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'event-orange',
    title: 'Orange Festival of Adventure and Music (OFAM)',
    date: 'Dec 12 - 15, 2026',
    time: '11:00 AM onwards',
    location: 'Dambuk, Lower Dibang Valley, Arunachal Pradesh',
    category: 'Adventure Events',
    price: 3500,
    image: '/images/events/ofam-dambuk-festival.jpg',
    gallery: [
      '/images/events/ofam-dambuk-festival.jpg'
    ],
    description: 'India premier music and outdoor 4x4 motorsports festival set in the lush orange orchards of Dambuk. Combines high-octane river crossing rallying with international and independent music stages under starlit eastern Himalayan skies.',
    lineup: ['Acclaimed International Indie Bands', 'Northeast Folk Fusion Collective', 'National Off-Road 4x4 Champions'],
    schedule: [
      { time: '11:00 AM', activity: 'JK Tyre 4x4 Fury Off-Road River Crossing Competition' },
      { time: '03:30 PM', activity: 'Zipline, White Water Rafting & Orange Grove Walks' },
      { time: '06:00 PM', activity: 'Mainstage Indie & Rock Music Performances' },
      { time: '10:30 PM', activity: 'Campfire Acoustic Sessions & Tribal Barbecue' }
    ],
    campingOptions: [
      {
        type: 'Dome Tent',
        description: 'Compact 2-person waterproof dome tent with foam sleeping mats and fleece sleeping bags for small groups.',
        capacity: '2 Adults',
        amenities: ['2 Sleeping Bags', 'Foam Mats', 'Shared Washroom Access']
      },
      {
        type: 'Premium Tent',
        description: 'Spacious weatherproof safari glamping tent equipped with raised cots, warm bedding and electric charging points.',
        capacity: '3-4 Adults',
        amenities: ['Raised Cot Beds', 'Quilted Bedding', 'Power Strip', 'Dedicated Changing Room']
      }
    ],
    facilities: ['Food Court', 'Clean Toilets', 'Changing Rooms', 'Secured Parking', 'Campfire', 'Barbecue', 'Local Food & Drinks', 'Music Night', 'Photoshoot Zones'],
    availablePasses: 65,
    venueDetails: 'Dambuk Valley, Arunachal Pradesh. Guided convoy transfers available from Dibrugarh Airport.'
  },
  {
    id: 'event-hornbill',
    title: 'The Hornbill Music Festival 2026',
    date: 'Dec 01 - 10, 2026',
    time: '09:00 AM onwards',
    location: 'Wiktrip Campsite, 1.2 km from Festival Ground, Kisama Heritage Village, Kohima, Nagaland',
    category: 'Festivals',
    price: 2600,
    image: '/images/events/hornbill-festival-banner.jpg',
    gallery: [
      '/images/events/hornbill-festival-banner.jpg',
      '/premium_tent.webp',
      '/dom_tent.webp',
      '/dom_tent1.webp'
    ],
    description: 'The Festival of Festivals! Same Vibes. Bigger Stage. Better Stays. Experience your comfort zone amidst nature at Wiktrip Campsite, just 1.2 km from the festival ground in Kisama Heritage Village.',
    lineup: ['17 Naga Tribal Troupes', 'Hornbill International Rock Contest Finalists', 'Folk Choral Ensembles', 'Acoustic Campfire Sessions'],
    schedule: [
      { time: '09:00 AM', activity: 'Traditional Morung Ceremonies & Indigenous Games' },
      { time: '01:00 PM', activity: 'Naga Culinary Feast at Wiktrip Food Court' },
      { time: '05:30 PM', activity: 'Hornbill International Rock Concert' },
      { time: '09:30 PM', activity: 'Wiktrip Acoustic Night & Campfire Gathering' }
    ],
    campingOptions: [
      {
        type: 'Premium Tent',
        capacity: '4 Person Occupancy',
        description: 'Spacious weatherproof cabin tent with extra headroom & comfort. Special early bird offer till 31 Oct 2026. ₹4,600 /tent/day or ₹1,400 /person/day with welcome breakfast.',
        amenities: [
          'Tent Lamp',
          'Pillows',
          'Comfortable Sleeping Mats',
          'Warm Sleeping Bags / Blankets',
          'Welcome Breakfast',
          'Extra Headroom & Comfort'
        ]
      },
      {
        type: 'Dome Tent',
        capacity: '2 Person Occupancy',
        description: 'Cozy waterproof dome tent pitched on scenic hilltop clearing. Special early bird offer till 31 Oct 2026. ₹2,600 /tent/day or ₹1,300 /person/day with welcome breakfast.',
        amenities: [
          'Tent Lamp',
          'Pillows',
          'Comfortable Sleeping Mats',
          'Warm Sleeping Bags / Blankets',
          'Welcome Breakfast',
          'Waterproof Alpine Dome'
        ]
      },
      {
        type: 'Pitch Your Own Tent',
        capacity: 'BYO Camper',
        description: 'Pitch your own tent slot at Wiktrip Campsite with full access to washrooms, charging & food court. ₹999 /person/day.',
        amenities: [
          'Campground Pitch Ground Access',
          'Clean Toilets & Washrooms',
          'Bathroom Access',
          'Multiple Charging Points',
          'Food Court Access',
          'Campfire Access'
        ]
      }
    ],
    facilities: [
      'Food Court (Our Own Food Court - Good Food • Great People • Unforgettable Moments)',
      'Cabs available on demand (Shared or Private Cabs from Dimapur at affordable rates)',
      'Multiple Charging Point',
      'Campfire',
      'Toilets',
      'Bathroom',
      'Ample Parking Area for 4 wheeler & 2 wheeler',
      'First Aid',
      'Safe & Secured Campus',
      'Stunning Lake & Mountain Views'
    ],
    availablePasses: 120,
    venueDetails: 'Wiktrip Campsite: 1.2 km from Festival Ground, Kisama Heritage Village, Kohima, Nagaland.'
  },
  {
    id: 'event-ziro',
    title: 'Ziro Festival of Music: Valley Acoustic Gathering',
    date: 'Sep 25 - 28, 2026',
    time: '12:00 PM to 10:00 PM',
    location: 'Ziro Valley (Apatani Plateau), Arunachal Pradesh',
    category: 'Music & Festivals',
    price: 4500,
    image: '/images/events/ziro-festival-music.jpg',
    gallery: [
      '/images/events/ziro-festival-music.jpg'
    ],
    description: 'India most celebrated eco-friendly outdoor music festival set inside the UNESCO-shortlisted emerald rice paddies and pine-clad hills of the Apatani tribe. Built entirely from bamboo.',
    lineup: ['Dany Danyi Stage (Acoustic)', 'Signature International Artists', 'Contemporary Indian Indie Lineup'],
    schedule: [
      { time: '12:00 PM', activity: 'Acoustic Day Sets on Bamboo Stage' },
      { time: '04:00 PM', activity: 'Apatani Village Walks & Rice Beer Tastings' },
      { time: '07:00 PM', activity: 'Electric Stage Sunset Performances' }
    ],
    campingOptions: [
      {
        type: 'Dome Tent',
        description: 'Pitched within the official Wiktrip pine grove campsite with 24/7 security.',
        capacity: '2 Persons',
        amenities: ['Foam Mattress', 'Sleeping Bag', 'Campfire Nights']
      },
      {
        type: 'Premium Tent',
        description: 'Luxury weatherproof bell tent with wooden cot beds and bedside lighting.',
        capacity: '2-4 Persons',
        amenities: ['Bedding', 'Power Sockets', 'Mirror', 'Exclusive Lounge Access']
      }
    ],
    facilities: ['Food Court', 'Eco Toilets', 'Changing Rooms', 'Campfire', 'Local Beverages', 'Music Night', 'Photoshoot'],
    availablePasses: 40,
    venueDetails: 'Biiri Village Pine Grove, Ziro Valley, Arunachal Pradesh.'
  },
  {
    id: 'event-pineapple',
    title: 'Arunachal Pineapple Festival & Community Conclave',
    date: 'Aug 18 - 20, 2026',
    time: '10:00 AM onwards',
    location: 'Bordumsa & Namsai, Arunachal Pradesh',
    category: 'Community Events',
    price: 1500,
    image: '/images/events/arunachal-pineapple-festival.jpg',
    gallery: [
      '/images/events/arunachal-pineapple-festival.jpg'
    ],
    description: 'A vibrant agricultural and cultural celebration celebrating the organic Queen and Kew pineapple harvest. Includes orchard farm tours, tribal culinary stalls, indigenous boat races, and evening folk concerts.',
    lineup: ['Singpho & Tai Khamti Cultural Troupes', 'Eastern Himalayan Acoustic Folk Artists'],
    schedule: [
      { time: '10:00 AM', activity: 'Pineapple Orchard Farm Walks & Tasting' },
      { time: '02:00 PM', activity: 'Traditional Boat Racing on Noa-Dihing River' },
      { time: '06:00 PM', activity: 'Folk Music Concert & Campfire Dinner' }
    ],
    campingOptions: [
      {
        type: 'Dome Tent',
        description: 'Clean double-layer camping tent set up on the riverbank green.',
        capacity: '2 Persons',
        amenities: ['Sleeping Mats', 'Sleeping Bags', 'Sanitized Toilets']
      }
    ],
    facilities: ['Food Court', 'Toilets', 'Changing Rooms', 'Parking', 'Campfire', 'Local Food & Drinks'],
    availablePasses: 50,
    venueDetails: 'Namsai Heritage Grounds, Arunachal Pradesh.'
  },
  {
    id: 'event-partung',
    title: 'Partung Carnival: Himalayan Winter Gathering',
    date: 'Jan 14 - 16, 2027',
    time: '10:00 AM to 08:00 PM',
    location: 'West Kameng & Tawang Foothills, Arunachal Pradesh',
    category: 'Festivals',
    price: 2200,
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Winter mountain carnival highlighting traditional Monpa and Sherdukpen archery, Yak heritage exhibits, mountain biking rallies, and bonfires in crisp alpine air.',
    lineup: ['Monpa Archery Champions', 'Tawang Mountain Choir', 'Acoustic Guitar Collective'],
    schedule: [
      { time: '10:00 AM', activity: 'Traditional Himalayan Archery Competition' },
      { time: '01:30 PM', activity: 'Yak Wool Craft & Monpa Food Festival' },
      { time: '05:00 PM', activity: 'Pine Bonfire & Acoustic Evening' }
    ],
    campingOptions: [
      {
        type: 'Dome Tent',
        description: 'Winter-rated dome tent with thermal ground insulation.',
        capacity: '2 Persons',
        amenities: ['Thermal Sleeping Bags (-10°C)', 'Insulated Mats']
      },
      {
        type: 'Premium Tent',
        description: 'Heated alpine camp tent with cot beds and warm quilts.',
        capacity: '3-4 Persons',
        amenities: ['Room Heater', 'Cot Beds', 'Woolen Blankets', 'Hot Water Service']
      }
    ],
    facilities: ['Food Court', 'Toilets', 'Changing Rooms', 'Parking', 'Campfire', 'Music Night', 'Photoshoot'],
    availablePasses: 35,
    venueDetails: 'Dirang Valley Grounds, Arunachal Pradesh.'
  },
  {
    id: 'event-skyfest-past',
    title: 'Wiktrip Himalayan Skyfest & Stargazing Conclave (Concluded)',
    date: 'Concluded Sep 2025',
    time: 'Past Event',
    location: 'Solang Meadow Observatory, Manali',
    category: 'Previous Events',
    isPast: true,
    price: 0,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Over 280 stargazers, astrophotographers, and mountain enthusiasts gathered for 3 days of deep-sky telescope observation and acoustic pine concerts. View photos and highlights.',
    lineup: ['340 Attendees', '4 High-Power Optical Telescopes', 'Zero Waste Certification'],
    schedule: [
      { time: '07:30 PM', activity: 'Milky Way Observation' },
      { time: '09:30 PM', activity: 'Acoustic Folk Performance' }
    ],
    availablePasses: 0,
    venueDetails: 'Solang Valley Plateau. Next edition dates will be announced soon.'
  }
];

export const ADVENTURE_ACTIVITIES_DATA: AdventureActivity[] = [
  {
    id: 'adv-zipline',
    name: 'Zipline: High-Altitude Valley Flying Fox',
    location: 'Shivpuri Gorge, Rishikesh & Solang Valley',
    duration: '45 - 60 Minutes',
    difficulty: 'Moderate',
    price: 1800,
    ageRequirement: '10+ Years (Weight: 35kg - 115kg)',
    image: '/images/adventure/aerial.jpg',
    gallery: [
      '/images/adventure/aerial.jpg',
      '/images/adventure/flying.jpg'
    ],
    description: 'Fly high across deep river gorges on dual parallel zip cables with magnetic eddy-current braking systems. Engineered with military-grade dual redundant wire ropes.',
    safetyInfo: [
      'European EN 15567 Adventure Safety Certified',
      'Dual full-body harnesses with automatic redundant lanyard locking',
      'Trained brake operators with two-way radio verification before launch'
    ],
    requirements: ['Sturdy closed-toe sports shoes', 'Comfortable outdoor clothing'],
    equipmentProvided: ['CE Certified Helmet', 'Full Body Harness', 'Tandem Speed Pulley']
  },
  {
    id: 'adv-tyre-wall',
    name: 'Tyre Climbing Wall: Vertical Grip Obstacle',
    location: 'Wiktrip Permanent Adventure Basecamp',
    duration: '30 Minutes',
    difficulty: 'Moderate',
    price: 600,
    ageRequirement: '8+ Years',
    image: '/images/adventure/climbing.jpg',
    gallery: [
      '/images/adventure/climbing.jpg',
      '/images/adventure/sports.jpg'
    ],
    description: 'A rugged vertical agility wall built with heavy-duty interlocking tires requiring strength, balance and strategic footing to scale to the summit platform.',
    safetyInfo: [
      'Top-rope belay system with automatic fall arrest mechanism',
      'Padded crash mat ground perimeter',
      'Certified climbing instructor supervision on each attempt'
    ],
    requirements: ['Sneakers or athletic shoes', 'Tie long hair back'],
    equipmentProvided: ['Adjustable Climbing Harness', 'Protective Helmet', 'Gripped Gloves']
  },
  {
    id: 'adv-rope-courses',
    name: 'Rope Courses: High-Aerial Obstacle Forest Challenge',
    location: 'Naggar & Kullu Valley Setup',
    duration: '1.5 Hours',
    difficulty: 'Moderate',
    price: 1200,
    ageRequirement: '7+ Years (Height min: 120cm)',
    image: '/images/adventure/nature.jpg',
    gallery: [
      '/images/adventure/nature.jpg',
      '/images/adventure/climbing.jpg'
    ],
    description: 'Multi-tier obstacle challenges including Burma bridges, swinging logs, horizontal spider nets, commando crawls, and tightropes woven between natural forest structures.',
    safetyInfo: [
      'Continuous lifeline system: locked in seamlessly from start to finish',
      'Daily cable tension inspection and anchor torque verification',
      'Course marshals stationed along elevated platforms'
    ],
    requirements: ['Closed footwear required', 'Flexible athletic trousers'],
    equipmentProvided: ['Continuous Carabiner Safety Harness', 'Adventure Safety Helmet', 'Grip Gloves']
  },
  {
    id: 'adv-rocket-ejector',
    name: 'Rocket Ejector: High-G Reverse Bungy Slingshot',
    location: 'Mohan Chatti, Rishikesh',
    duration: '15 Minutes',
    difficulty: 'Extreme',
    price: 2500,
    ageRequirement: '12+ Years (Weight: 40kg to 105kg)',
    image: '/images/adventure/extreme.jpg',
    gallery: [
      '/images/adventure/extreme.jpg',
      '/images/adventure/aerial.jpg'
    ],
    description: 'Propel straight up into the alpine sky to a height of 50 meters in less than 3 seconds at 3G acceleration, followed by weightless freefall swings over the canyon.',
    safetyInfo: [
      'Engineered and tested under AS/NZS 5848 extreme ride standards',
      'Dual safety winches with computerized tension control',
      'Strict medical screening protocol prior to harness fitting'
    ],
    requirements: ['No heart conditions, neck or back injuries', 'Consent waiver form'],
    equipmentProvided: ['Specialized High-G Ejector Harness', 'Finisher Certificate']
  },
  {
    id: 'adv-rappelling-wall',
    name: 'Artificial Rappelling Wall: Controlled Vertical Descent',
    location: 'Wiktrip Adventure Park Base',
    duration: '45 Minutes',
    difficulty: 'Moderate',
    price: 900,
    ageRequirement: '10+ Years',
    image: '/images/adventure/flying.jpg',
    gallery: [
      '/images/adventure/flying.jpg',
      '/images/adventure/climbing.jpg'
    ],
    description: 'Master authentic mountaineering rappel techniques on an engineered 60-foot vertical descent wall with brake-hand friction control and overhang drops.',
    safetyInfo: [
      'Certified HMI mountaineering instructors holding backup belay lines',
      'UIAA-certified static 11mm kernmantle descent ropes',
      'Figure-8 and auto-locking Petzl Grigri friction devices'
    ],
    requirements: ['Comfortable clothing and sneakers', 'Friction-resistant pants'],
    equipmentProvided: ['Petzl Falcon Harness', 'Climbing Helmet', 'Heat-Resistant Rappelling Gloves']
  },
  {
    id: 'adv-wall-climbing',
    name: 'Artificial Wall Climbing: Multi-Route Granite Simulation',
    location: 'Wiktrip Adventure Park Base',
    duration: '45 Minutes',
    difficulty: 'Moderate',
    price: 800,
    ageRequirement: '7+ Years',
    image: '/images/adventure/sports.jpg',
    gallery: [
      '/images/adventure/sports.jpg',
      '/images/adventure/climbing.jpg'
    ],
    description: 'Engineered competition-standard climbing wall featuring multiple color-coded route grades from beginner 5A slopers to technical 6C overhang crimp problems.',
    safetyInfo: [
      'Auto-belay pneumatic friction units certified for 15kN load',
      'Continuous floor-level high-density impact crash padding',
      'Technical coaching by state and national level sport climbers'
    ],
    requirements: ['Flexible sports apparel', 'Trim fingernails prior to climbing'],
    equipmentProvided: ['La Sportiva Climbing Shoes', 'Chalk Bag', 'Climbing Safety Harness']
  }
];

export const TREK_CAMPS_DATA: TrekCamp[] = [
  {
    id: 'trek-1',
    title: 'Hampta Pass & Chandratal Crossover Trek',
    type: 'Trek',
    location: 'Manali to Spiti Valley',
    state: 'Himachal Pradesh',
    duration: '5 Days / 4 Nights',
    difficulty: 'Moderate',
    altitude: '14,065 ft (4,287 m)',
    bestSeason: 'Mid-June to Mid-October',
    price: 10499,
    rating: 4.9,
    reviewCount: 540,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'The Hampta Pass is the quintessential Himalayan crossover trek. In just 5 days, watch the lush pine forests and emerald meadows of Kullu transform dramatically into the barren, stark moonscapes of Lahaul & Spiti Valley.',
    quickFacts: [
      { label: 'Highest Altitude', value: '14,065 ft' },
      { label: 'Total Distance', value: '35 km' },
      { label: 'Base Camp', value: 'Jobra (Manali)' },
      { label: 'Starting Point', value: 'Prini / Manali' },
      { label: 'Average Temperature', value: 'Day: 12°C to 18°C | Night: -2°C to 4°C' }
    ],
    itinerary: [
      { day: 1, title: 'Drive Manali to Jobra & Trek to Chika', altitude: '9,800 ft', distance: '3 km', description: 'Scenic drive up 42 hairpin bends to Jobra dam. Gentle trek along Rani Nallah river through pine and birch forest to Chika campsite.' },
      { day: 2, title: 'Chika to Balu Ka Ghera', altitude: '11,900 ft', distance: '8 km', description: 'Cross a chilly glacial river stream. Walk over moraine fields and blooming alpine wildflowers to the sandy flats of Balu Ka Ghera.' },
      { day: 3, title: 'Balu Ka Ghera to Siagoru via Hampta Pass Summit', altitude: '14,065 ft', distance: '9 km', description: 'Steep summit push across snow patches to the top of Hampta Pass. Stunning views of Mt. Indrasan. Steep descent to Siagoru campsite.' },
      { day: 4, title: 'Siagoru to Chatru & Drive to Chandratal Lake', altitude: '12,900 ft', distance: '5 km + 45 km drive', description: 'Easy downhill walk to Chatru roadhead in Spiti. Drive to the moon lake Chandratal, pitch camp, and admire reflections.' },
      { day: 5, title: 'Chatru to Manali via Atal Tunnel', altitude: '6,700 ft', distance: 'Drive 85 km', description: 'Return drive through the historic Chandra valley and Atal Tunnel back to Manali by 04:00 PM.' }
    ],
    equipment: [
      'High-ankle waterproof trekking shoes with deep lug grip',
      'Warm down jacket (-10°C rated) and 2 thermal inner layers',
      '40-50L backpack with rain cover',
      'Trekking pole with anti-shock lock',
      'UV sunglasses and SPF 50 sunscreen'
    ],
    inclusions: [
      'Certified Wilderness First Responder (WFR) Trek Leader from Wiktrip',
      'High-grade 4-season alpine geodesic tents (twin sharing) with insulated mats',
      '-10°C rated washed sleeping bags with fresh cotton fleece liners',
      'Hot nutritious vegetarian meals from morning bed tea to soup and dessert',
      'Forest department permits, camping fees, and green environmental taxes',
      'Comprehensive medical kit including oxygen cylinder, Gamow bag, oximeter'
    ],
    exclusions: ['Backpack offloading fee (optional: ₹1,500 for entire trek)', 'Transport to Manali'],
    safetyProtocol: [
      'Twice daily health check-ups (SpO2, pulse rate, AMS symptom score)',
      '1 Trek Leader for every 8 trekkers with satellite emergency SOS communication',
      'Strict Leave No Trace eco-policy: all waste carried back to base'
    ]
  },
  {
    id: 'trek-2',
    title: 'Kedarkantha Winter Snow Summit Expedition',
    type: 'Trek',
    location: 'Sankri, Govind Pashu Vihar National Park',
    state: 'Uttarakhand',
    duration: '5 Days / 4 Nights',
    difficulty: 'Easy',
    altitude: '12,500 ft (3,810 m)',
    bestSeason: 'December to April (Peak Snow)',
    price: 8999,
    rating: 4.9,
    reviewCount: 680,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'India’s most celebrated winter snow trek. Climb through ancient oak and pine forests blanketed in fresh powder, past the frozen Juda Ka Talab lake, up to the iconic 360-degree pyramid summit of Kedarkantha.',
    quickFacts: [
      { label: 'Highest Altitude', value: '12,500 ft' },
      { label: 'Total Distance', value: '20 km' },
      { label: 'Base Camp', value: 'Sankri' },
      { label: 'Snow Season', value: 'Dec to April' }
    ],
    itinerary: [
      { day: 1, title: 'Dehradun to Sankri Basecamp Drive', altitude: '6,400 ft', distance: 'Drive 200 km', description: 'Scenic drive along the Yamuna and Tons rivers through Mussoorie and Purola.' },
      { day: 2, title: 'Sankri to Juda Ka Talab', altitude: '9,100 ft', distance: '4 km', description: 'Trek through pine woods to camp beside the mystical frozen lake Juda Ka Talab.' },
      { day: 3, title: 'Juda Ka Talab to Kedarkantha Basecamp', altitude: '11,250 ft', distance: '3.5 km', description: 'Climb onto open snow meadows with panoramic views of Bandarpoonch and Swargarohini.' },
      { day: 4, title: 'Summit Push (12,500 ft) & Descent to Hargaon', altitude: '12,500 ft', distance: '6 km', description: 'Early 3:30 AM alpine start. Watch sunrise over 13 Himalayan peaks. Descend to Hargaon.' },
      { day: 5, title: 'Hargaon to Sankri & Drive to Dehradun', altitude: '6,400 ft', distance: 'Descent 4 km + drive', description: 'Easy trail down to Sankri and transfer back to Dehradun railway station.' }
    ],
    equipment: ['Microspikes and gaiters (provided free by Wiktrip)', 'Waterproof snow boots', 'Fleece beanie and gloves'],
    inclusions: [
      'Microspikes and snow gaiters provided for summit day',
      'All meals, tents, sleeping bags, and certified mountain guides',
      'Forest entrance permits'
    ],
    exclusions: ['Transport Dehradun to Sankri return (available as add-on for ₹1,200)'],
    safetyProtocol: ['Certified mountain rescue guides with automated external defibrillator']
  },
  {
    id: 'trek-3',
    title: 'Triund Alpine Ridge & Snowline Overlook',
    type: 'Trek',
    location: 'McLeod Ganj, Dharamshala',
    state: 'Himachal Pradesh',
    duration: '2 Days / 1 Night',
    difficulty: 'Easy',
    altitude: '9,350 ft (2,850 m)',
    bestSeason: 'Year Round (Except July-August)',
    price: 3499,
    rating: 4.8,
    reviewCount: 820,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'The crown jewel of Dharamshala. An exhilarating ridge walk overlooking the dramatic vertical wall of the Dhauladhar range on one side, and the sprawling Kangra valley lights on the other.',
    quickFacts: [
      { label: 'Highest Altitude', value: '9,350 ft' },
      { label: 'Total Distance', value: '9 km' },
      { label: 'Base Camp', value: 'Dharamkot / McLeod Ganj' }
    ],
    itinerary: [
      { day: 1, title: 'McLeod Ganj to Triund Ridge Camp', altitude: '9,350 ft', distance: '9 km', description: 'Trek past Magic View Cafe and mixed rhododendron woods. Sunset over Kangra valley.' },
      { day: 2, title: 'Triund to Snowline & Descent', altitude: '6,800 ft', distance: '9 km', description: 'Morning hike to Snowline cafe for close-up glacier views. Afternoon descent to base.' }
    ],
    equipment: ['Daypack 20L', 'Comfortable hiking shoes', 'Light windcheater'],
    inclusions: ['Ridge camping in alpine tents', 'Hot dinner, evening tea, and breakfast', 'Local mountain guide'],
    exclusions: ['Personal snacks'],
    safetyProtocol: ['Eco-waste management with zero trash policy']
  },
  {
    id: 'trek-4',
    title: 'Kasol Riverside Glamping & Stargazer Camp',
    type: 'Camping',
    location: 'Kasol & Challal, Parvati Valley',
    state: 'Himachal Pradesh',
    duration: '3 Days / 2 Nights',
    difficulty: 'Easy',
    altitude: '5,180 ft',
    bestSeason: 'March to November',
    price: 4999,
    rating: 4.9,
    reviewCount: 420,
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Luxury glamping tucked inside a secluded pine forest orchard right on the bank of the Parvati river. Features Swiss tents with attached bathrooms, fairy lights, acoustic bonfires, and barbecue nights.',
    quickFacts: [
      { label: 'Property Type', value: 'Riverside Glamping' },
      { label: 'Highlights', value: 'Bonfire, Live Acoustic, River walk' }
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Chillout by the River', altitude: '5,180 ft', distance: '0 km', description: 'Settle in luxury tent, explore Kasol cafes, evening bonfire barbecue.' },
      { day: 2, title: 'Day Hike to Grahan or Chalal Forest', altitude: '6,200 ft', distance: '5 km', description: 'Scenic pine forest hike, visit local Himachali wooden homes, riverside lunch.' },
      { day: 3, title: 'Manikaran Hot Springs & Departure', altitude: '5,180 ft', distance: '3 km', description: 'Dip in natural sulfur hot springs at Manikaran Sahib, trip concludes.' }
    ],
    equipment: ['Warm jacket for chilly mountain evenings', 'Casual footwear'],
    inclusions: ['Swiss Glamping Tent with western attached bathroom', 'Daily breakfast & barbecue dinner', 'Bonfire and guided village walk'],
    exclusions: ['Travel to Kasol'],
    safetyProtocol: ['24/7 on-site caretaker and fenced river safety boundary']
  },
  {
    id: 'trek-tholung',
    title: 'Tholung Trek: Sacred Sikkim Lepcha Wilderness Trail',
    type: 'Trek',
    location: 'Dzongu Tribal Reserve, North Sikkim',
    state: 'Sikkim',
    duration: '6 Days / 5 Nights',
    difficulty: 'Moderate',
    altitude: '8,000 ft (2,438 m)',
    bestSeason: 'March to May & October to December',
    price: 14500,
    rating: 4.9,
    reviewCount: 185,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Journey into the protected Lepcha heartland of North Sikkim along the sacred Ringpi Chu river. Explore pristine cardamom valleys, hanging cane bridges, and the ancient 18th-century Tholung Gompa sanctuary.',
    quickFacts: [
      { label: 'Highest Altitude', value: '8,000 ft' },
      { label: 'Region', value: 'Dzongu, North Sikkim' },
      { label: 'Permit Requirement', value: 'Protected Area Permit (PAP) mandatory' }
    ],
    itinerary: [
      { day: 1, title: 'Gangtok to Passingdang, Dzongu', altitude: '4,500 ft', distance: 'Drive 70 km', description: 'Scenic drive through Mangan into sacred Lepcha reserve. Homestay check-in.' },
      { day: 2, title: 'Passingdang to Lingzya & Trek to Bey', altitude: '5,500 ft', distance: '6 km', description: 'Cross hanging cane footbridges and hike past roaring waterfalls.' },
      { day: 3, title: 'Bey to Tholung Monastery', altitude: '8,000 ft', distance: '8 km', description: 'Walk through dense mossy alpine rhododendron and bamboo forest to the sacred Gompa.' },
      { day: 4, title: 'Exploration of Tholung & Holy Caves', altitude: '8,000 ft', distance: '4 km', description: 'Discover sacred Tibetan relic chambers, meditation caves, and alpine meadows.' },
      { day: 5, title: 'Descent from Tholung to Lingzya', altitude: '5,500 ft', distance: '12 km', description: 'Downhill trek following the crystal mountain river.' },
      { day: 6, title: 'Return Drive to Gangtok', altitude: '5,500 ft', distance: 'Drive', description: 'Farewell traditional Lepcha breakfast and road transfer back to Gangtok.' }
    ],
    equipment: ['Waterproof hiking boots', 'Light rain poncho', 'Trekking poles', 'Daypack 30L'],
    inclusions: ['Local Lepcha wilderness guide', 'Special Dzongu Protected Area Permits', 'Alpine camping and authentic homestay lodging', 'Wholesome organic meals'],
    exclusions: ['Transport to Gangtok', 'Personal porter services'],
    safetyProtocol: ['Eco-sensitive reserve protocol: zero plastic and certified local guides']
  },
  {
    id: 'trek-singalila',
    title: 'Singalila Ridge Trek: Kanchenjunga & Everest Vista',
    type: 'Trek',
    location: 'Sandakphu to Phalut, Singalila National Park',
    state: 'West Bengal / Sikkim Border',
    duration: '6 Days / 5 Nights',
    difficulty: 'Moderate',
    altitude: '11,929 ft (3,636 m)',
    bestSeason: 'October to December & March to May',
    price: 13900,
    rating: 4.9,
    reviewCount: 310,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'The famous "Sleeping Buddha" ridge walk providing views of 4 of the world 5 highest peaks simultaneously: Mt. Everest, Kanchenjunga, Lhotse, and Makalu.',
    quickFacts: [
      { label: 'Highest Point', value: '11,929 ft (Sandakphu)' },
      { label: 'Total Distance', value: '45 km' },
      { label: 'Highlight', value: 'Panoramic Sleeping Buddha sunrise' }
    ],
    itinerary: [
      { day: 1, title: 'Drive Darjeeling to Manebhanjan & Trek to Tumling', altitude: '9,600 ft', distance: '11 km', description: 'Initial ascent along Indo-Nepal border trail through misty pine woods.' },
      { day: 2, title: 'Tumling to Kalipokhri', altitude: '10,170 ft', distance: '13 km', description: 'Trek through Singalila National Park, pass black holy pond Kalipokhri.' },
      { day: 3, title: 'Kalipokhri to Sandakphu Summit', altitude: '11,929 ft', distance: '6 km', description: 'Steep zig-zag trail to Sandakphu for unbroken 360-degree Himalayan sunset.' },
      { day: 4, title: 'Sandakphu to Sabargram / Phalut', altitude: '11,800 ft', distance: '14 km', description: 'Walk the undulating high ridge with Everest directly on the horizon.' },
      { day: 5, title: 'Phalut to Gorkhey Village', altitude: '7,700 ft', distance: '15 km', description: 'Descent through pristine bamboo and chestnut forests to fairytale hamlet Gorkhey.' },
      { day: 6, title: 'Gorkhey to Sepi & Drive to Darjeeling', altitude: '6,200 ft', distance: 'Descent + Drive', description: 'Short morning walk to roadhead Sepi and jeep transfer.' }
    ],
    equipment: ['High-ankle trekking shoes', 'Down jacket (-5°C rated)', 'Trekking poles', 'Fleece gloves'],
    inclusions: ['National Park entrance fees & guide charges', 'Tea house and alpine camp stays', 'Wholesome buffet meals'],
    exclusions: ['Transport to Manebhanjan'],
    safetyProtocol: ['Certified Singalila mountain guides and SpO2 monitoring']
  },
  {
    id: 'trek-green-lake',
    title: 'Green Lake Trek: Remote High Alpine Glacier Expedition',
    type: 'Expedition',
    location: 'Zemu Glacier, North Sikkim',
    state: 'Sikkim',
    duration: '12 Days / 11 Nights',
    difficulty: 'Challenging',
    altitude: '16,500 ft (5,029 m)',
    bestSeason: 'Mid-April to May & October to November',
    price: 36000,
    rating: 5.0,
    reviewCount: 75,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'One of the Himalayas most exclusive and remote glacial trails. Ascend along the massive Zemu Glacier to the base of the colossal eastern wall of Mount Kanchenjunga (8,586m).',
    quickFacts: [
      { label: 'Max Altitude', value: '16,500 ft' },
      { label: 'Terrain', value: 'Glacial Moraine & High Alpine Scree' },
      { label: 'Experience Level', value: 'Advanced Trekkers Only' }
    ],
    itinerary: [
      { day: 1, title: 'Gangtok to Lachen', altitude: '8,900 ft', distance: 'Drive 125 km', description: 'Scenic drive to high mountain town Lachen.' },
      { day: 2, title: 'Lachen to Zema & Trek to Talem', altitude: '10,600 ft', distance: '12 km', description: 'Cross Zema bridge and follow Zemu Chu into virgin rhododendron forests.' },
      { day: 3, title: 'Talem to Jakthang', altitude: '11,400 ft', distance: '11 km', description: 'Climb above tree line along boulder-strewn glacial river valley.' },
      { day: 4, title: 'Jakthang to Yabuk', altitude: '13,050 ft', distance: '9 km', description: 'Technical walk over glacial moraine and alpine scree slopes.' },
      { day: 5, title: 'Rest & Acclimatization at Yabuk', altitude: '13,050 ft', distance: 'Acclimatization', description: 'Short hike up moraine ridge for view of Siniolchu peak.' },
      { day: 6, title: 'Yabuk to Rest Camp', altitude: '14,750 ft', distance: '8 km', description: 'Climb along the lateral moraine of massive Zemu Glacier.' },
      { day: 7, title: 'Rest Camp to Green Lake Basecamp', altitude: '16,500 ft', distance: '7 km', description: 'Reach high mountain basin of Green Lake directly beneath the Kanchenjunga east face.' },
      { day: 8, title: 'Exploration of Green Lake & Kanchenjunga Base', altitude: '16,500 ft', distance: 'Glacial exploration', description: 'Spectacular amphitheater of Siniolchu, Simvo, and Kanchenjunga peaks.' },
      { day: 9, title: 'Descent from Green Lake to Yabuk', altitude: '13,050 ft', distance: '15 km', description: 'Retrace steps down the glacial valley.' },
      { day: 10, title: 'Yabuk to Jakthang', altitude: '11,400 ft', distance: '9 km', description: 'Downhill trek through alpine meadows.' },
      { day: 11, title: 'Jakthang to Zema & Drive to Lachen', altitude: '8,900 ft', distance: '18 km + drive', description: 'Complete trail to roadhead and drive to Lachen lodge.' },
      { day: 12, title: 'Lachen to Gangtok', altitude: '5,500 ft', distance: 'Drive 125 km', description: 'Return transfer to Gangtok.' }
    ],
    equipment: ['Heavy alpine down suit/jacket (-20°C rated)', 'Double climbing boots or rigid trekking shoes', 'Crampons/microspikes', 'Expedition duffle 90L'],
    inclusions: ['Wilderness First Responder expedition leader & high-altitude kitchen crew', '4-Season geodesic tents and sub-zero down sleeping bags', 'Special security & inner line expedition permits', 'Satellite emergency communication'],
    exclusions: ['Personal evacuation insurance (mandatory)'],
    safetyProtocol: ['Oxygen cylinders, hyperbaric Gamow bag, pulse oximeter monitoring']
  },
  {
    id: 'trek-markha',
    title: 'Markha Valley Trek: High-Altitude Ladakh Crossover',
    type: 'Trek',
    location: 'Hemis National Park, Ladakh',
    state: 'Ladakh',
    duration: '8 Days / 7 Nights',
    difficulty: 'Challenging',
    altitude: '17,060 ft (5,200 m)',
    bestSeason: 'June to September',
    price: 18500,
    rating: 4.9,
    reviewCount: 260,
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'The quintessential Ladakh trek across Hemis National Park. River crossings, Tibetan Buddhist monasteries, wild bharal (blue sheep) sightings, and crossing the mighty 17,060 ft Kongmaru La pass.',
    quickFacts: [
      { label: 'Highest Pass', value: 'Kongmaru La (17,060 ft)' },
      { label: 'Wildlife', value: 'Snow Leopard habitat, Blue Sheep, Ibex' },
      { label: 'Region', value: 'Hemis National Park, Ladakh' }
    ],
    itinerary: [
      { day: 1, title: 'Drive Leh to Chilling & Trek to Skiu', altitude: '11,150 ft', distance: 'Drive 60 km + 7 km trek', description: 'Cross Zanskar river on bridge and hike to Skiu monastery.' },
      { day: 2, title: 'Skiu to Sara', altitude: '11,800 ft', distance: '12 km', description: 'Follow Markha river through striking ochre canyons and willows.' },
      { day: 3, title: 'Sara to Markha Village', altitude: '12,460 ft', distance: '10 km', description: 'Pass ruined forts and ancient chortens to the largest village in the valley.' },
      { day: 4, title: 'Markha to Hankar / Thochuntse', altitude: '13,600 ft', distance: '11 km', description: 'Wade across waist-deep river stream; visit cliffside Hankar fort.' },
      { day: 5, title: 'Thochuntse to Nimaling Plateau', altitude: '15,500 ft', distance: '7 km', description: 'Climb onto high green pastures under the sheer peak of Kang Yatse (6,400m).' },
      { day: 6, title: 'Nimaling over Kongmaru La (17,060 ft) to Chokdo', altitude: '17,060 ft', distance: '12 km', description: 'Summit Push over Kongmaru La for panoramic view of Karakoram. Steep gorge descent.' },
      { day: 7, title: 'Chokdo to Shang Sumdo & Drive to Leh', altitude: '11,500 ft', distance: '5 km + 45 km drive', description: 'Short walk to roadhead and drive to Leh via Hemis monastery.' },
      { day: 8, title: 'Departure Leh', altitude: '11,500 ft', distance: 'Airport Transfer', description: 'Tour concludes with transfer to Leh airport.' }
    ],
    equipment: ['Trekking shoes with solid ankle support', 'River crossing sandals/crocs', 'Windproof jacket and thermal layers', 'Sun protection hat and sunglasses'],
    inclusions: ['Homestays & high alpine camp tents', 'Hot meals prepared by accompanying camp cook', 'Wildlife national park permit and camping fees', 'Certified Ladakhi trek leader'],
    exclusions: ['Flights to Leh', 'Personal tips'],
    safetyProtocol: ['Mandatory 2 days acclimatization in Leh before trek departure']
  },
  {
    id: 'trek-friendship',
    title: 'Friendship Peak Expedition: 5,289m Alpine Summit Push',
    type: 'Expedition',
    location: 'Pir Panjal Range, Solang / Beas Kund Basin, Himachal',
    state: 'Himachal Pradesh',
    duration: '8 Days / 7 Nights',
    difficulty: 'Expert',
    altitude: '17,352 ft (5,289 m)',
    bestSeason: 'May - June & September - October',
    price: 28500,
    rating: 4.9,
    reviewCount: 92,
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'An open trekking peak in the Pir Panjal range suitable for mountaineers looking to experience their first 5,000m non-technical summit. Requires crampons, ice axes, and glacier ropework.',
    quickFacts: [
      { label: 'Summit Altitude', value: '5,289 m (17,352 ft)' },
      { label: 'Mountaineering Grade', value: 'Alpine PD (Peu Difficile)' },
      { label: 'Base Camp', value: 'Bakarthach / Lady Leg' }
    ],
    itinerary: [
      { day: 1, title: 'Drive Manali to Dhundi & Trek to Bakarthach', altitude: '10,800 ft', distance: '5 km', description: 'Gentle ascent past birch trees to open meadows of Bakarthach.' },
      { day: 2, title: 'Bakarthach to Beas Kund & Glacier Training', altitude: '12,100 ft', distance: '4 km', description: 'Acclimatization hike and snow boot/crampon fitting clinic.' },
      { day: 3, title: 'Bakarthach to Advanced Camp (Lady Leg)', altitude: '13,600 ft', distance: '5 km', description: 'Steep moraine ascent to high ridge camp.' },
      { day: 4, title: 'Advanced Camp to Summit Camp', altitude: '15,200 ft', distance: '4 km', description: 'Load ferry and setup high summit camp on the snow col.' },
      { day: 5, title: 'Summit Push (17,352 ft) & Return to Camp', altitude: '17,352 ft', distance: 'Summit Day', description: 'Midnight 01:00 AM alpine push. Roped glacier climb to summit ridge. Descend to Lady Leg.' },
      { day: 6, title: 'Reserve Day for Summit Attempt', altitude: '15,200 ft', distance: 'Buffer Day', description: 'Contingency for adverse mountain weather.' },
      { day: 7, title: 'Lady Leg to Dhundi & Drive to Manali', altitude: '6,700 ft', distance: 'Descent + Drive', description: 'Descend to roadhead and drive to Old Manali hotel for celebration dinner.' },
      { day: 8, title: 'Departure Manali', altitude: '6,700 ft', distance: 'Departure', description: 'Trip concludes.' }
    ],
    equipment: ['Mountaineering double boots', '10/12-point crampons', 'Technical ice axe', 'Seat harness & climbing helmet'],
    inclusions: ['HMI/NIM certified expedition leaders', 'High-altitude mountaineering climbing gear', 'All meals, high-altitude tents, IMF permits'],
    exclusions: ['Personal climbing apparel', 'Mountaineering insurance'],
    safetyProtocol: ['Fixed rope protection on summit ridge and pulse oximeter monitoring']
  },
  {
    id: 'trek-nun',
    title: 'Mount Nun Peak Expedition: 7,135m Technical Himalayan Ascent',
    type: 'Expedition',
    location: 'Suru Valley, Zanskar Range, Ladakh',
    state: 'Ladakh',
    duration: '22 Days / 21 Nights',
    difficulty: 'Expert',
    altitude: '23,409 ft (7,135 m)',
    bestSeason: 'July to August',
    price: 185000,
    rating: 5.0,
    reviewCount: 38,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'The highest peak in the Suru Valley and one of India most coveted 7,000m mountaineering challenges. Features an immense 800m technical ice wall, crevassed glacier traverse, and knife-edge summit ridge.',
    quickFacts: [
      { label: 'Summit Elevation', value: '7,135 m (23,409 ft)' },
      { label: 'Mountaineering Grade', value: 'TD- (Très Difficile)' },
      { label: 'Authority Permits', value: 'Indian Mountaineering Foundation (IMF)' }
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Leh & Acclimatization', altitude: '11,500 ft', distance: 'Rest', description: 'Rest, gear check, and orientation.' },
      { day: 2, title: 'Drive Leh to Kargil', altitude: '8,780 ft', distance: 'Drive 215 km', description: 'Pass Lamayuru moonland and Fotu La pass.' },
      { day: 3, title: 'Drive Kargil to Tangol Basecamp Roadhead', altitude: '12,100 ft', distance: 'Drive 75 km', description: 'Enter scenic Suru Valley under the massive twin peaks of Nun and Kun.' },
      { day: 4, title: 'Trek Tangol to Nun Base Camp', altitude: '15,100 ft', distance: '8 km', description: 'Establish base camp on green meadow above moraine.' },
      { day: 5, title: 'Puja Ceremony & Acclimatization at Base Camp', altitude: '15,100 ft', distance: 'Rest', description: 'Traditional mountain blessing ceremony.' },
      { day: 6, title: 'Load Ferry to Camp 1 & Return', altitude: '18,040 ft', distance: 'Ferry', description: 'Climb boulder moraine and lower glacier.' },
      { day: 7, title: 'Occupy Camp 1', altitude: '18,040 ft', distance: 'Ascent', description: 'Settle in Camp 1 on the upper ice plateau.' },
      { day: 8, title: 'Load Ferry to Camp 2 & Fix 800m Ice Wall', altitude: '20,010 ft', distance: 'Technical Fixing', description: 'Climb 60-degree hard ice wall using jumar and ascenders.' },
      { day: 9, title: 'Occupy Camp 2', altitude: '20,010 ft', distance: 'Ascent', description: 'Camp perched above the immense ice wall.' },
      { day: 10, title: 'Load Ferry to Summit Camp (Camp 3)', altitude: '21,320 ft', distance: 'Col climb', description: 'Traverse windy snowy col.' },
      { day: 11, title: 'Occupy Summit Camp', altitude: '21,320 ft', distance: 'Summit prep', description: 'Early rest for alpine push.' },
      { day: 12, title: 'Summit Push: 7,135m Summit & Return to Camp 2', altitude: '23,409 ft', distance: 'Summit Day', description: '01:00 AM push along sharp summit knife ridge. Stand on top of Nun 7,135m.' },
      { day: 13, title: 'Reserve Weather Contingency Days', altitude: '21,320 ft', distance: 'Buffer', description: '3 buffer days for weather windows.' },
      { day: 14, title: 'Descent to Base Camp & Cleanup', altitude: '15,100 ft', distance: 'Descent', description: 'Pack all equipment and Leave No Trace cleanup.' },
      { day: 15, title: 'Tangol to Leh & Farewell Dinner', altitude: '11,500 ft', distance: 'Drive', description: 'Celebration in Leh.' }
    ],
    equipment: ['High-altitude 8,000m rated double mountaineering boots', 'Technical ice tools (pair)', 'Crampons', 'Down suit -35°C rated', 'Jumar ascenders & figure-8'],
    inclusions: ['IMF peak royalty fees and liaison officer charges', 'Certified Everest summiteer expedition leaders and Sherpa rope fixers', 'All high-altitude food, specialized camps, and fixed dynamic ropes', 'Satellite emergency tracking and high-altitude medical oxygen'],
    exclusions: ['Personal climbing equipment', 'Mandatory search and rescue evacuation insurance'],
    safetyProtocol: ['Full oxygen bottles, medical expedition doctor consultation, satellite phone']
  }
];

export const STORE_PRODUCTS_DATA: StoreProduct[] = [
  {
    id: 'prod-sleeping-pillow',
    name: 'Sleeping Pillow',
    category: 'Sleeping Equipment',
    price: 799,
    originalPrice: 1199,
    rating: 4.8,
    reviewCount: 154,
    image: '/images/store/camping_pillow.jpg',
    gallery: [
      '/images/store/camping_pillow.jpg'
    ],
    description: 'Compact air-filled camping pillow designed for outdoor comfort and easy travel. Packs down to palm size with an ergonomic neck contour.',
    specs: {
      'Weight': '85 grams',
      'Material': 'Soft-touch TPU Elastic Polyester',
      'Valve': 'Multi-function Quick Inflate/Deflate',
      'Pack Size': '10 x 6 cm'
    },
    inStock: true,
    featured: true,
    isBestSeller: true
  },
  {
    id: 'prod-tent-lamp',
    name: 'Tent Lamp',
    category: 'Camping Lighting',
    price: 1299,
    originalPrice: 1799,
    rating: 4.9,
    reviewCount: 218,
    image: '/images/store/tent_lamp.jpg',
    gallery: [
      '/images/store/tent_lamp.jpg'
    ],
    description: 'Multi-function camping light designed to work as a flashlight, lantern or table lamp. USB-C rechargeable with warm ambient glow.',
    specs: {
      'Lighting Modes': 'Flashlight (350lm) / Lantern (500lm) / Table Lamp',
      'Battery': '3000mAh USB-C Rechargeable',
      'Runtime': 'Up to 24 Hours on Low',
      'Hook': 'Retractable Hanging Carabiner'
    },
    inStock: true,
    featured: true,
    isBestSeller: true
  },
  {
    id: 'prod-wiktrip-premium-tent',
    name: 'Wiktrip Premium 5-Person Tent',
    category: 'Tents',
    price: 11999,
    originalPrice: 14999,
    rating: 4.9,
    reviewCount: 112,
    image: '/images/store/premium_tent.webp',
    gallery: [
      '/images/store/premium_tent.webp',
      '/premium_tent.jpg'
    ],
    description: 'A spacious two-layer tent designed for outdoor camping with weather protection, ventilation and practical interior features. Ideal for families and small expedition groups.',
    specs: {
      'Capacity': '5 Adults',
      'Structure': 'Two-Layer Breathable Geodesic Design',
      'Waterproofing': '4000mm PU Coated Ripstop Rainfly',
      'Ventilation': 'Cross-Draft Mesh Windows & Dual Doors'
    },
    inStock: true,
    featured: true,
    isBestSeller: true
  },
  {
    id: 'prod-sleeping-mat',
    name: 'Sleeping Mat',
    category: 'Sleeping Equipment',
    price: 1499,
    originalPrice: 1999,
    rating: 4.8,
    reviewCount: 167,
    image: '/images/store/sleeping_mat.jpg',
    gallery: [
      '/images/store/sleeping_mat.jpg'
    ],
    description: 'Lightweight camping mat designed to provide cushioning and insulation during outdoor trips. Blocks ground chill on rocky and alpine terrain.',
    specs: {
      'R-Value': '3.2 (3-Season Cold Ground Insulation)',
      'Thickness': '5.5 cm inflated',
      'Weight': '460 grams',
      'Material': '40D Ripstop Nylon with TPU Seal'
    },
    inStock: true,
    featured: true,
    isBestSeller: false
  },
  {
    id: 'prod-sleeping-bag',
    name: 'Sleeping Bag',
    category: 'Sleeping Equipment',
    price: 3499,
    originalPrice: 4499,
    rating: 4.9,
    reviewCount: 230,
    image: '/images/store/sleeping_bag.jpg',
    gallery: [
      '/images/store/sleeping_bag.jpg',
      '/images/store/sleeping_bags.jpg'
    ],
    description: 'Warm, lightweight and practical sleeping equipment for camping and outdoor travel. Rated for cold mountain nights with water-resistant shell.',
    specs: {
      'Comfort Rating': '0°C to -5°C',
      'Insulation': 'Hollowfiber Micro-Cluster Fill',
      'Shell': '210T Water-Resistant Diamond Ripstop',
      'Pack Weight': '1.3 kg'
    },
    inStock: true,
    featured: true,
    isBestSeller: true
  },
  {
    id: 'prod-wiktrip-dome-tent',
    name: 'Wiktrip Dome Tent',
    category: 'Tents',
    price: 4999,
    originalPrice: 6499,
    rating: 4.8,
    reviewCount: 189,
    image: '/images/store/dom_tent.webp',
    gallery: [
      '/images/store/dom_tent.webp',
      '/images/store/dom_tent1.webp',
      '/dom.jpg'
    ],
    description: 'A compact waterproof and wind-resistant dome tent designed for small groups and outdoor adventures. Fast 5-minute setup with durable fiberglass poles.',
    specs: {
      'Capacity': '2-3 Persons',
      'Poles': 'Shock-Corded 8.5mm Reinforced Fiberglass',
      'Waterproofing': '3000mm Hydrostatic Head Fly',
      'Total Weight': '2.6 kg'
    },
    inStock: true,
    featured: true,
    isBestSeller: true
  },
  {
    id: 'prod-backpack',
    name: 'Wiktrip Odyssey 55L Alpine Expedition Backpack',
    category: 'Outdoor Gear',
    price: 4999,
    originalPrice: 6500,
    rating: 4.9,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Engineered for high-altitude multi-day expeditions. Features a pre-curved aluminum internal stay frame, ergonomic LumbarLoad hip belt, high-tenacity Cordura 500D ripstop shell, and integrated rain cover.',
    specs: {
      'Volume': '55 + 10 Liters Extended',
      'Weight': '1.65 kg',
      'Fabric': 'Cordura 500D Water-Repellent Ripstop',
      'Back System': 'Adjustable Ergo-Airflow Harness'
    },
    inStock: true,
    featured: false,
    isBestSeller: false
  },
  {
    id: 'prod-boots',
    name: 'Vibram PeakTrek Waterproof High-Ankle Hiking Boots',
    category: 'Outdoor Gear',
    price: 5499,
    originalPrice: 6999,
    rating: 4.8,
    reviewCount: 165,
    image: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Full nubuck leather upper backed with breathable waterproof eVent membrane. Vibram Megagrip lugged rubber outsole guarantees slip-resistant purchase on wet river boulders and loose snow.',
    specs: {
      'Outsole': 'Vibram Megagrip Alpine Compound',
      'Membrane': 'eVent 100% Waterproof & Breathable',
      'Toe Guard': 'Molded Rubber Bumper Cap'
    },
    inStock: true,
    featured: false,
    isBestSeller: false
  },
  {
    id: 'prod-flask',
    name: 'Wiktrip Insulated Summit Vacuum Flask (750ml)',
    category: 'Travel Accessories',
    price: 1199,
    originalPrice: 1599,
    rating: 4.9,
    reviewCount: 94,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Double-wall vacuum insulated stainless steel flask. Keeps beverages piping hot for 24 hours or ice cold for 36 hours in extreme sub-zero mountain weather.',
    specs: {
      'Capacity': '750 ml',
      'Insulation': 'Double-Wall Vacuum 18/8 Pro-Grade Steel',
      'Lid': 'Leak-Proof BPA-Free Insulated Cap',
      'Weight': '360 grams'
    },
    inStock: true,
    featured: false,
    isBestSeller: true
  },
  {
    id: 'prod-mug',
    name: 'Wiktrip Mountain Enamel Campfire Mug',
    category: 'Wiktrip Merchandise',
    price: 499,
    originalPrice: 799,
    rating: 4.9,
    reviewCount: 182,
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'Classic durable steel enamel mug with rolled rim and signature Wiktrip mountain expedition crest. Campfire-safe and built for morning coffee in the wild.',
    specs: {
      'Capacity': '350 ml',
      'Material': 'Cold-Rolled Steel with Hard Enamel Coating',
      'Heat Resistance': 'Campfire & Stove Safe',
      'Weight': '145 grams'
    },
    inStock: true,
    featured: true,
    isBestSeller: true
  }
];

export const LEARNING_COURSES_DATA: LearningCourse[] = [
  {
    id: 'learn-1',
    title: 'High-Altitude Acclimatization & Mountain Sickness Mastery',
    category: 'High Altitude Health',
    level: 'Beginner',
    duration: '2.5 Hours (6 Video Modules)',
    modulesCount: 6,
    instructor: {
      name: 'Dr. Tenzing Norbu',
      role: 'High-Altitude Medicine Specialist & Everest Expedition Physician',
      bio: 'Over 18 years treating AMS, HAPE, and HACE in the Everest and Ladakh Himalayas.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: 'Understand the physiological adaptations of the human body above 8,000 feet. Learn how to recognize acute mountain sickness early, calibrate Diamox dosages, operate pulse oximeters, and handle emergency descents.',
    whatYouWillLearn: [
      'Physics of atmospheric pressure and oxygen partial pressure drop',
      'Differences between benign AMS, Life-threatening HAPE, and HACE',
      'Hydration and nutrition protocols for climbing beyond 12,000 feet',
      'Hyperbaric Gamow bag demonstration and portable oxygen tactics'
    ],
    modules: [
      { title: 'The Physiology of Thin Air', duration: '25 mins', topics: ['Alveolar diffusion', 'Cheyne-Stokes breathing'] },
      { title: 'Early AMS Detection & The Lake Louise Score', duration: '30 mins', topics: ['Self-scoring assessment', 'When to halt ascent'] },
      { title: 'HAPE & HACE Protocols', duration: '35 mins', topics: ['Pink frothy sputum signs', 'Ataxia tandem gait test'] },
      { title: 'Pharmacological Tools & Natural Adaptation', duration: '30 mins', topics: ['Acetazolamide timing', 'Dexamethasone emergency use'] }
    ],
    price: 0
  },
  {
    id: 'learn-2',
    title: 'Wilderness First Aid & Trail Trauma Management',
    category: 'Wilderness Safety',
    level: 'Intermediate',
    duration: '4 Hours (8 Interactive Chapters)',
    modulesCount: 8,
    instructor: {
      name: 'Capt. Vikram Rathore (Retd.)',
      role: 'Chief Wilderness Safety Officer, Wiktrip Expeditions',
      bio: 'Ex-Special Forces combat search & rescue instructor and certified WFR master trainer.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80',
    description: 'Hands-on practical training for medical emergencies when hospital care is more than 6 hours away: bone fracture splinting with trekking poles, hypothermia wraps, snake bite management, and litter building.',
    whatYouWillLearn: [
      'Patient Assessment System (PAS) in backcountry conditions',
      'Improvised field splints using foam sleeping pads and trekking poles',
      'Treating deep lacerations and trail burns without sterile ER facilities',
      'Backcountry evacuation signaling and helicopter LZ preparation'
    ],
    modules: [
      { title: 'Initial Assessment & Scene Safety', duration: '30 mins', topics: ['Stop, Think, Act', 'C-spine management'] },
      { title: 'Musculoskeletal Injuries & Splinting', duration: '45 mins', topics: ['Ankle sprains', 'Fractured tibia immobilization'] },
      { title: 'Hypothermia & Cold Injury Resuscitation', duration: '35 mins', topics: ['Burrito wrap method', 'Frostbite rewarming'] }
    ],
    price: 999
  },
  {
    id: 'learn-3',
    title: 'Himalayan Backpack Packing & Leave No Trace Ethics',
    category: 'Trekking Guides',
    level: 'Beginner',
    duration: '1.5 Hours',
    modulesCount: 4,
    instructor: {
      name: 'Meera Deshmukh',
      role: 'Senior Alpine Trek Leader & Environmental Biologist',
      bio: 'Has led 80+ high pass crossovers across Himachal, Uttarakhand, and Sikkim.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
    description: 'Learn the ABCs of weight distribution inside a 50L backpack to prevent spinal fatigue. Master the 7 Leave No Trace principles to keep the Himalayas pristine for the next generation.',
    whatYouWillLearn: [
      'The 4-Zone pack layout: Light items at bottom, heavy load against spine',
      'Layering strategy: Base, Mid-insulation, and Hard-shell weather barrier',
      'Waste management: Human waste cat-holes and microplastic prevention',
      'Choosing low-impact camp spots away from pristine water sources'
    ],
    modules: [
      { title: 'Mastering the 50L Pack Geography', duration: '25 mins', topics: ['Center of gravity', 'Quick access essentials'] },
      { title: 'The 3-Layer Outdoor Clothing Philosophy', duration: '20 mins', topics: ['Merino vs Synthetic', 'Rain shell breathing'] },
      { title: 'The 7 Principles of Leave No Trace', duration: '30 mins', topics: ['Camp on durable surfaces', 'Dispose of waste properly'] }
    ],
    price: 0
  },
  {
    id: 'learn-4',
    title: 'Outdoor Landscape & Astrophotography in the Wild',
    category: 'Photography',
    level: 'Intermediate',
    duration: '3 Hours',
    modulesCount: 5,
    instructor: {
      name: 'Kunal Sen',
      role: 'National Geographic Featured Mountain Photographer',
      bio: 'Celebrated for night sky time-lapses in Spiti and Nubra Valley.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    description: 'Learn how to capture the Milky Way core, mountain sunrise rim light, freezing rapids with neutral density filters, and editing RAW files in Lightroom Mobile while on the road.',
    whatYouWillLearn: [
      'The 500 Rule for sharp pinpoint star photographs without star trails',
      'Bracketing high dynamic range mountain landscapes at sunrise',
      'Protecting camera gear and batteries in sub-zero alpine conditions'
    ],
    modules: [
      { title: 'Milky Way Core Hunting & Camera Settings', duration: '40 mins', topics: ['ISO tradeoffs', 'Wide open aperture'] },
      { title: 'Composition in High Mountain Terrains', duration: '35 mins', topics: ['Leading lines', 'Foreground tent lighting'] }
    ],
    price: 1499
  }
];

export const VEHICLE_RENTALS_DATA: VehicleRental[] = [
  {
    id: 'cab-1',
    name: 'Toyota Innova Crysta (Luxury 7-Seater)',
    type: 'SUV',
    seats: 7,
    luggage: 4,
    hasAC: true,
    fuelType: 'Diesel',
    pricePerDay: 4200,
    pricePerKm: 18,
    rentalType: 'Chauffeur Driven',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    features: ['Captain Seats', 'Dual Rear AC', 'Hill Assist Control', 'Complimentary Bottled Himalayan Water'],
    included: ['Verified Mountain Chauffeur', 'Commercial Passenger Insurance', 'Clean Vehicle Guarantee']
  },
  {
    id: 'cab-2',
    name: 'Mahindra Thar 4x4 (Hard Top Edition)',
    type: '4x4 Off-Roader',
    seats: 4,
    luggage: 2,
    hasAC: true,
    fuelType: 'Diesel',
    pricePerDay: 4800,
    pricePerKm: 22,
    rentalType: 'Self Drive',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    features: ['Mechanical Locking Differential', 'High & Low 4WD Range', 'Apple CarPlay / Android Auto', 'All-Terrain Tires'],
    included: ['Comprehensive Damage Waiver', '24/7 Roadside Assistance', 'Unlimited Mountain KM option']
  },
  {
    id: 'cab-3',
    name: 'Force Urbania Luxury Cruiser (12-Seater)',
    type: 'Minivan / Traveller',
    seats: 12,
    luggage: 8,
    hasAC: true,
    fuelType: 'Diesel',
    pricePerDay: 8500,
    pricePerKm: 32,
    rentalType: 'Chauffeur Driven',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    features: ['Individual Reclining Business Class Seats', 'USB Fast Chargers for Every Row', 'Panoramic Tinted Windows', 'Massive Boot Luggage Space'],
    included: ['Experienced High-Pass Highway Driver', 'Toll & State Tax Assistance', 'Emergency First Aid Kit']
  },
  {
    id: 'cab-4',
    name: 'Royal Enfield Himalayan 450 (Adventure Bike)',
    type: 'Adventure Bike',
    seats: 2,
    luggage: 2,
    hasAC: false,
    fuelType: 'Petrol',
    pricePerDay: 1999,
    rentalType: 'Self Drive',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
    features: ['Liquid-Cooled Sherpa 450cc Engine', 'Tripper Navigation Display', 'Pannier Racks & Bash Plate', 'Long Travel Suspension'],
    included: ['2 Dual DOT Helmets', 'Pannier Luggage Mounts', 'Spare Tube & Tool Kit']
  },
  {
    id: 'cab-5',
    name: 'Maruti Suzuki Dzire (Comfort Sedan)',
    type: 'Sedan',
    seats: 4,
    luggage: 3,
    hasAC: true,
    fuelType: 'Petrol',
    pricePerDay: 2800,
    pricePerKm: 14,
    rentalType: 'Chauffeur Driven',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    features: ['Spacious Rear Legroom', 'Automatic Climate Control', 'Smooth City & Highway Ride'],
    included: ['Punctual Airport Pick-up & Drop', 'Fuel & Driver Allowance', 'Toll receipt tracking']
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sunrise Glow Over Rohtang Pass Crest',
    category: 'Destinations',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    photographer: 'Vikram Sen'
  },
  {
    id: 'gal-2',
    title: 'Infinity Pool Facing Pine Forests',
    category: 'Hotels',
    location: 'Old Manali Sanctuary',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    photographer: 'Anita Roy'
  },
  {
    id: 'gal-3',
    title: 'High Altitude Camp Under the Milky Way',
    category: 'Camping',
    location: 'Chandratal Lake, Spiti',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
    photographer: 'Dr. Aryavrat'
  },
  {
    id: 'gal-4',
    title: 'Crossing Glacial Moraines on Hampta Pass',
    category: 'Trekking',
    location: '14,065 ft, Himachal',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    photographer: 'Rohan Mehta'
  },
  {
    id: 'gal-5',
    title: 'Tackling Grade IV Rapids on the Ganges',
    category: 'Adventure',
    location: 'Shivpuri, Rishikesh',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    photographer: 'Deepak Rawat'
  },
  {
    id: 'gal-6',
    title: 'Stargazer Conclave Acoustic Night Around Bonfire',
    category: 'Events',
    location: 'Solang Valley',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    photographer: 'Siddharth Jain'
  },
  {
    id: 'gal-7',
    title: 'Monastery Prayer Flags in the High Wind',
    category: 'Culture',
    location: 'Key Gompa, Spiti',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80',
    photographer: 'Tenzing L.'
  },
  {
    id: 'gal-8',
    title: 'Double Decker Living Root Bridge',
    category: 'Destinations',
    location: 'Nongriat, Meghalaya',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80',
    photographer: 'Balaram K.'
  }
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Modern Himalayan Acclimatization Blueprint: Science Over Superstition',
    slug: 'himalayan-acclimatization-blueprint',
    category: 'Safety',
    author: {
      name: 'Dr. Tenzing Norbu',
      role: 'Expedition Medical Advisor',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Sep 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Ascending too fast ruins more dream trips than bad weather ever could. Here is the physiological blueprint for thriving above 10,000 feet without panic.',
    content: [
      'Every year, thousands of eager explorers venture into the majestic amphitheater of the Himalayas—Ladakh, Spiti, Kedarkantha, and Hampta Pass. Yet almost a third find themselves stricken by blinding throbbing headaches, nausea, and sleeplessness before reaching their destination.',
      'The cause is not cold or fitness: it is simple physics. At 14,000 feet, atmospheric pressure drops to roughly 60% of sea level. Each breath delivers significantly fewer oxygen molecules across your alveolar membrane.',
      'The golden rule is "Climb High, Sleep Low". Never increase your sleeping altitude by more than 500 meters (1,500 feet) in a single day once you cross 9,000 feet. Hydrate with electrolytes, avoid alcohol completely for the first 72 hours, and listen to the subtle signals your body whispers before it screams.',
      'Always travel with a verified operator like Wiktrip that carries redundant medical O2 cylinders and certified Wilderness First Responders.'
    ],
    tags: ['Acclimatization', 'Mountain Safety', 'Spiti', 'Ladakh'],
    featured: true
  },
  {
    id: 'blog-2',
    title: '7 Hidden Glamping & Forest Campsites You Can Still Experience in Peace',
    slug: 'hidden-glamping-campsites-himachal',
    category: 'Travel Guides',
    author: {
      name: 'Rohan Vashisht',
      role: 'Senior Destination Scout',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Sep 15, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Tired of crowded commercial campgrounds? Discover secluded apple orchards, pine bluffs, and riverside glamping sanctuaries curated by Wiktrip.',
    content: [
      'Travel in India has exploded, and with it, cookie-cutter campsite clusters that resemble noisy parking lots with loudspeakers. But true camping is about hearing the pine needles drop and watching constellations rotate in silence.',
      'Our team spent six months scouting private organic estates in Tirthan Valley, Barot, Challal, and Sangla. We partnered with generational family orchard owners to construct zero-impact luxury eco-camps.',
      'Expect hot running showers heated by solar collectors, artisanal sourdough bread baked over wood embers, and riverbanks where the only other tracks in the sand belong to mountain foxes.'
    ],
    tags: ['Camping', 'Glamping', 'Himachal', 'Quiet Travel'],
    featured: false
  },
  {
    id: 'blog-3',
    title: 'River Rafting Grades Explained: From Gentle Floats to Grade V Raging Rapids',
    slug: 'river-rafting-grades-explained',
    category: 'Adventure',
    author: {
      name: 'Sunil Negi',
      role: 'Master River Guide & Kayak Instructor',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    date: 'Aug 30, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    excerpt: 'Not all rapids are born equal. Learn how the international white water scale works and what gear ensures maximum safety when you tackle the roaring Ganges.',
    content: [
      'The International Scale of River Difficulty classifies rapids from Class I (flat, gentle current) up to Class VI (unrunnable commercial suicide).',
      'Class III rapids like "Three Blind Mice" feature irregular waves and require deliberate paddle coordination. Class IV beasts like "The Wall" demand instantaneous commands and precision technical maneuvering through violent hydraulic holes.',
      'At Wiktrip, every Class IV expedition is accompanied by a safety kayaker who runs ahead to set up throw-bag lines and guide the raft down the clearest tongue of the rapid.'
    ],
    tags: ['Rafting', 'Rishikesh', 'White Water', 'Safety'],
    featured: false
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Aarav Malhotra',
    location: 'Bengaluru, India',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    tripName: 'Hampta Pass & Chandratal Crossover',
    tripType: 'Trek & Camp',
    review: 'Wiktrip completely redefined outdoor adventure for our tech group. The food at 12,000 feet was mindblowing—hot gulab jamuns on summit night! Most importantly, when one of our friends developed mild altitude headaches, the trek leader handled the medical oximeter protocol with flawless professionalism.',
    date: 'August 2026',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Priyanka & Devansh Kapoor',
    location: 'Mumbai, India',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    tripName: 'Kashmir Alpine Houseboat & Gulmarg',
    tripType: 'Couple Tour',
    review: 'Our honeymoon was planned like clockwork. The cedar houseboat on Nigeen Lake was peaceful and completely isolated from commercial Dal lake noise. The driver Parvez bhai treated us like royal family. Wiktrip will be our go-to for all future trips!',
    date: 'September 2026',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Kabir Sengupta',
    location: 'Kolkata, India',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    tripName: 'Spiti Valley Overland Circuit',
    tripType: '4x4 Adventure Tour',
    review: 'The 4x4 overland vehicle was rugged, spotless, and piloted by a local Spitian driver who knew every bend in the Hindustan-Tibet road. Stargazing at Chandratal camp was spiritual. 10/10 execution by the Wiktrip team.',
    date: 'July 2026',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Tanvi Deshmukh',
    location: 'Pune, India',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    tripName: 'Wiktrip Store Gear & Solo Kedarkantha Trek',
    tripType: 'Solo Backpacking',
    review: 'I rented a 4-season tent and bought the 55L backpack from the Wiktrip Store. The gear quality matched high-end international brands at half the cost. Truly an outdoor company built by real adventurers who know the terrain.',
    date: 'January 2026',
    verified: true
  }
];

export const JOB_OPENINGS_DATA: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Senior Mountain Trek Leader & Expeditions Head',
    department: 'Outdoor Leadership',
    location: 'Manali / Dehradun (Seasonal Field Base)',
    employmentType: 'Full-time',
    experience: '3+ Years Field Experience',
    description: 'Lead high-altitude alpine expeditions across Himachal, Uttarakhand, and Ladakh. Oversee field safety, porter welfare, campsite management, and guest wilderness education.',
    responsibilities: [
      'Lead groups of 12-18 trekkers across passes up to 16,000 feet',
      'Conduct daily morning and evening health & AMS scorecards',
      'Enforce zero-waste Leave No Trace environmental compliance',
      'Manage local muleteers, kitchen staff, and emergency evacuation protocols'
    ],
    requirements: [
      'Basic Mountaineering Course (BMC) and Advanced Mountaineering Course (AMC) with A-grade from NIM, HMI, or ABVIMAS',
      'Valid Wilderness First Responder (WFR) or WAFA certification',
      'Fluency in Hindi and English with high emotional intelligence'
    ]
  },
  {
    id: 'job-2',
    title: 'Regional Hotel & Experience Partnerships Manager',
    department: 'Operations',
    location: 'Bengaluru / Hybrid',
    employmentType: 'Full-time',
    experience: '2-4 Years in Hospitality or OTA Contracting',
    description: 'Grow the Wiktrip verified hospitality and adventure ecosystem. Identify, audit, contract, and curate boutique resorts, eco-lodges, and experiential outdoor camps.',
    responsibilities: [
      'Onboard 40+ high-quality boutique mountain resorts and eco-stays each quarter',
      'Audit properties against Wiktrip safety, cleanliness, and eco-standards',
      'Negotiate preferred commercial contracts and rate parity',
      'Coordinate with regional adventure operators for bundle packaging'
    ],
    requirements: [
      'Proven track record in hospitality contracting, OTA business development, or boutique travel curation',
      'Passion for travel and adventure'
    ]
  },
  {
    id: 'job-3',
    title: 'Senior Full Stack Platform Engineer',
    department: 'Engineering',
    location: 'Remote (India)',
    employmentType: 'Full-time',
    experience: '3+ Years (React, Node.js/TypeScript, Cloud)',
    description: 'Build the next generation booking engine, real-time inventory management, offline trekker mobile apps, and supplier portals for the Wiktrip ecosystem.',
    responsibilities: [
      'Architect resilient booking APIs handling high traffic peaks during festive drops',
      'Build seamless offline-first mobile web experiences for low-bandwidth alpine regions',
      'Collaborate with design and product teams on world-class UX'
    ],
    requirements: [
      'Strong proficiency in TypeScript, React, Next.js, and modern CSS frameworks',
      'Experience with relational and document databases, caching, and CI/CD'
    ]
  },
  {
    id: 'job-4',
    title: 'Adventure Filmmaker & Visual Storyteller',
    department: 'Marketing & Growth',
    location: 'Field Based (Travel Required)',
    employmentType: 'Full-time',
    experience: '2+ Years Outdoor Cinematography',
    description: 'Document raw expedition moments, mountain landscapes, customer emotions, and adventure adrenaline for Wiktrip films, documentaries, and social channels.',
    responsibilities: [
      'Shoot 4K cinematic footage on treks, rafting rivers, and remote trails',
      'Pilot FPV and cinematic drones in high-altitude gust conditions',
      'Edit captivating social reels, YouTube documentaries, and brand films'
    ],
    requirements: [
      'High physical fitness to hike with camera gear at altitude',
      'Mastery of Sony Alpha / RED ecosystems and DJI Mavic / FPV drones'
    ]
  }
];

export const TRUST_FEATURES = [
  {
    title: 'Verified Safety Standards',
    description: 'Every trek, stay, and adventure activity is audited by certified mountaineers and safety inspectors.'
  },
  {
    title: 'Zero Hidden Fees',
    description: 'Transparent pricing with all forest permits, safety gear, and taxes explicitly outlined upfront.'
  },
  {
    title: 'Certified Mountain Guides',
    description: 'HMI & NIM certified leaders with active Wilderness First Responder (WFR) life-saving credentials.'
  },
  {
    title: 'Leave No Trace Travel',
    description: '100% committed to sustainable tourism: all expedition waste is segregated and packed out.'
  },
  {
    title: '24/7 Adventure Support',
    description: 'Dedicated trip support team monitoring ground weather, road closures, and emergency logistics.'
  },
  {
    title: 'Flexible Rescheduling',
    description: 'Weather guarantee: free date transfer if extreme weather interrupts your mountain expedition.'
  }
];

export const STATS_DATA = [
  { value: '52,000+', label: 'Happy Explorers' },
  { value: '140+', label: 'Verified Stays & Chalets' },
  { value: '85+', label: 'Himalayan Trek Routes' },
  { value: '4.9/5', label: 'Average Traveler Rating' },
  { value: '100%', label: 'Safety Record Maintained' }
];
