import { ServiceItem, ProjectItem, TestimonialItem, ProcessStep, TeamMember } from '../types';

import heroDrywallImg from '../assets/images/hero_construction_drywall_1793376274819.jpg';
import gcAdvantageImg from '../assets/images/gc_advantage_construction_1793378411286.jpg';
import foremanImg from '../assets/images/why_choose_jobsite_foreman_1793376276668.jpg';
import modernEstateImg from '../assets/images/project_custom_modern_estate_1793376274848.jpg';
import multiunitSubdivisionImg from '../assets/images/project_multiunit_subdivision_1793376276050.jpg';

export const HERO_IMAGE = heroDrywallImg;
export const WHY_CHOOSE_IMAGE = gcAdvantageImg;
export const FOUNDER_IMAGE = foremanImg;

export const TRUST_STATS = [
  {
    value: 1000,
    prefix: '',
    suffix: '+',
    label: 'Completed Projects',
    subtext: 'Across Ontario since 2017'
  },
  {
    value: 3,
    prefix: '',
    suffix: 'x',
    label: 'Niagara Platinum Awards',
    subtext: 'CommunityVotes 2023, 2024, 2025'
  },
  {
    value: 100,
    prefix: '',
    suffix: '%',
    label: 'On-Schedule Milestones',
    subtext: 'Foreman-tracked delivery rate'
  },
  {
    value: 5,
    prefix: '$',
    suffix: 'M',
    label: 'Commercial Liability',
    subtext: 'WSIB compliant & fully insured'
  }
];

export const CREDENTIALS = [
  { label: 'Niagara CommunityVotes Platinum Winner', year: '2023 · 2024 · 2025' },
  { label: 'WSIB Ontario Safety Compliant', year: 'Certified & Good Standing' },
  { label: 'Commercial General Liability', year: '$5,000,000 Coverage' },
  { label: 'Working at Heights & WHMIS Certified', year: '100% Certified Crews' },
  { label: 'Ontario Building Code (OBC)', year: 'Part 3 & Part 9 Compliant' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'drywall-boarding',
    number: '01',
    title: 'Commercial & Multi-Unit Boarding',
    shortDesc: 'Rapid, laser-aligned gypsum panel installation for high-density subdivisions, condominiums, and custom estates.',
    fullDesc: 'High-production drywall installation executed with laser-guided alignment. We coordinate seamlessly with mechanical, electrical, and plumbing rough-ins to maintain tight scheduling for builders.',
    scope: [
      'Type X & Type C Fire-Rated Boarding',
      'Impact-Resistant & Mold-Tough Gypsum',
      'Shaftliner & Stairwell Assemblies',
      'Staggered Seams & Screw Depth Calibration'
    ],
    idealFor: 'Subdivisions, mid-rise condominiums, multi-unit residential developments',
    badge: 'High Production',
    iconName: 'Layers'
  },
  {
    id: 'taping-level5',
    number: '02',
    title: 'Precision Taping & Level 5 Finishing',
    shortDesc: 'Architectural skim-coat surfaces engineered to withstand critical raking light, flush baseboards, and shadowline reveals.',
    fullDesc: 'From standard Level 4 painter-ready finishes to full spray/trowel Level 5 skim coats on soaring two-story great rooms. We eliminate surface imperfections before primers ever hit the board.',
    scope: [
      'Full Architectural Level 5 Skim Coating',
      'Fry Reglet & Architectural Reveal Beads',
      'Curved Wall & Vaulted Ceiling Blending',
      'Dual 500W Halogen Raking Light Inspections'
    ],
    idealFor: 'Custom architectural residences, executive homes, executive boardrooms',
    badge: 'Award-Winning',
    iconName: 'Sparkles'
  },
  {
    id: 'steel-framing',
    number: '03',
    title: 'Light-Gauge Steel Framing & Bulkheads',
    shortDesc: 'Engineered non-load-bearing steel stud framing, custom ceiling bulkheads, demising walls, and soffits.',
    fullDesc: 'True, plumb steel assemblies fabricated on site to strict architectural tolerances. Ideal for commercial tenant fit-outs, basement bulkheads, and complex stepped ceiling designs.',
    scope: [
      'Structural & Non-Structural Steel Studs',
      'Curved Bulkheads & Lighting Pockets',
      'Demising Partitions (STC 50+)',
      'Acoustic Resilient Channel Installation'
    ],
    idealFor: 'Commercial offices, retail spaces, custom basement suites, luxury ceilings',
    badge: 'Structural Precision',
    iconName: 'Maximize2'
  },
  {
    id: 'insulation-acoustic',
    number: '04',
    title: 'Insulation, Vapour Barrier & Acoustic Ceilings',
    shortDesc: 'Complete building envelope thermal barriers, acoustic isolation decoupling, and commercial suspended T-bar systems.',
    fullDesc: 'Comprehensive thermal and sound isolation systems adhering strictly to the Ontario Building Code. We seal every joint, penetration, and junction for maximum energy efficiency and sound attenuation.',
    scope: [
      'R-20 to R-60 Mineral Wool & Fiberglass Batt',
      '6-Mil Poly Vapour Barrier with Acoustical Sealant',
      'Sound Isolation Clips & Resilient Channel',
      'Acoustic Drop Ceilings & Suspended T-Bar Grids'
    ],
    idealFor: 'Multi-family demising walls, home theaters, commercial spaces, healthcare clinics',
    badge: 'Code Certified',
    iconName: 'ShieldCheck'
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'escarpment-estate',
    title: 'Niagara Escarpment Modern Estate',
    location: 'Fonthill / Pelham, Ontario',
    category: 'custom-home',
    categoryLabel: 'Custom Luxury Estate',
    sqft: '8,500 sq ft',
    finishLevel: 'Level 5 Architectural Skim Coat',
    duration: '6 Weeks',
    image: modernEstateImg,
    description: 'An expansive architectural residence featuring 18-foot soaring ceilings, recessed ceiling light coves, and 12-foot floor-to-ceiling glass walls with extreme natural raking light.',
    highlights: [
      '100% Level 5 monolithic finish across all great room surfaces',
      'Custom flush shadowline reveal beads around minimalist door jambs',
      'Soundproofed master wing utilizing double 5/8" Type X on resilient channel',
      'Zero painter call-backs upon pre-paint handover'
    ],
    client: 'Escarpment Luxury Builders',
    completedYear: '2025'
  },
  {
    id: 'executive-subdivision',
    title: 'The Orchard Executive Townhomes',
    location: 'St. Catharines, Ontario',
    category: 'multi-unit',
    categoryLabel: 'Multi-Unit Subdivision',
    sqft: '76,000 sq ft (32 Units)',
    finishLevel: 'Level 4 Production Finish',
    duration: '14 Weeks',
    image: multiunitSubdivisionImg,
    description: 'A 32-unit executive townhome development with tight trade turnovers. Board Boss managed multi-crew sequencing for continuous boarding, taping, and fire-separation inspections.',
    highlights: [
      'Delivered 4 days ahead of scheduled general contractor turnover',
      'Complete ULC fire-rated demising party wall assemblies between units',
      'Dedicated on-site foreman for daily mechanical rough-in coordination',
      'Fully compliant with OBC sound transmission class (STC 55) criteria'
    ],
    client: 'Niagara Landmark Developments',
    completedYear: '2024'
  },
  {
    id: 'welland-medical-plaza',
    title: 'Welland Canal Commercial Health Centre',
    location: 'Welland, Ontario',
    category: 'commercial',
    categoryLabel: 'Commercial & Healthcare',
    sqft: '24,000 sq ft',
    finishLevel: 'Level 4 + Suspended Acoustic Ceiling',
    duration: '8 Weeks',
    image: heroDrywallImg,
    description: 'Commercial medical office fit-out requiring high-performance STC acoustic partitions, lead-lined X-ray barrier board, and suspended Armstrong acoustic grid ceilings.',
    highlights: [
      'Lead-backed radiation shielding gypsum installation in imaging suite',
      'Washable antimicrobial ceiling tile grids throughout clinical rooms',
      'Heavy-gauge steel demising partitions with dual insulation batt layers',
      'Passed all municipal healthcare compliance inspections on first review'
    ],
    client: 'Horizon Commercial Builders',
    completedYear: '2024'
  },
  {
    id: 'port-dalhousie-condos',
    title: 'Port Dalhousie Waterfront Residences',
    location: 'Port Dalhousie, Ontario',
    category: 'multi-unit',
    categoryLabel: 'Multi-Unit Condominiums',
    sqft: '42,000 sq ft (18 Suites)',
    finishLevel: 'Level 4 + Level 5 Penthouses',
    duration: '10 Weeks',
    image: multiunitSubdivisionImg,
    description: 'Boutique luxury lakefront condominiums featuring concrete-to-steel demising walls, dropped HVAC bulkheads with integrated linear diffusers, and Level 5 top-floor penthouses.',
    highlights: [
      'Complex recessed drapery pockets and curved architectural bulkheads',
      'Acoustic decoupling throughout all shared suite corridor walls',
      'Crews operated with specialized dust containment and HEPA filtration',
      'Builder reported 100% on-time milestone delivery'
    ],
    client: 'Lakeshore Development Group',
    completedYear: '2023'
  }
];

export const WHY_CHOOSE_POINTS = [
  {
    id: 'oversight',
    number: '01',
    title: 'Dedicated Jobsite Oversight',
    description: 'Every project is staffed with a dedicated working foreman who coordinates daily with your site superintendent. We inspect framing before hanging, manage trade handoffs, and ensure zero scheduling collisions.',
    metric: 'Daily RFI & schedule logs provided to GC superintendents'
  },
  {
    id: 'craftsmanship',
    number: '02',
    title: 'Rigor at Every Finishing Stage',
    description: 'We do not rush compound drying times or rely on painters to hide taping flaws. Our finishers use dual 500W raking lights to hand-check seams, square corners, and feather edges to an imperceptible taper.',
    metric: '90%+ reduction in pre-paint punch list callbacks'
  },
  {
    id: 'reliability',
    number: '03',
    title: 'Guaranteed Capacity & Execution',
    description: 'With over 1,000 projects delivered since 2017, our crew depth means your job doesn’t sit idle when unexpected scope expands. We staff up rapidly to keep your drywall milestone on track.',
    metric: 'Over 1,000 projects completed on time across Niagara & GTA'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Digital Takeoff & Precision Bid',
    duration: 'Within 24–48 Hours',
    description: 'Send us your architectural drawings (PDF/CAD). We run detailed software takeoffs accounting for drywall type, ceiling heights, reveal details, and insulation values for an all-inclusive, transparent bid.',
    deliverables: ['Detailed square-footage breakdown', 'Itemized material & finish tiers', 'Proposed milestone schedule']
  },
  {
    step: '02',
    title: 'Pre-Hang Jobsite Inspection',
    duration: 'Milestone Day 1',
    description: 'Our project superintendent conducts a complete walk-through with your site super. We verify framing plumbness, backer blocking for cabinetry, MEP penetrations, and jobsite climate readiness.',
    deliverables: ['Pre-hang deficiency checklist', 'Framing alignment confirmation', 'Material delivery & staging plan']
  },
  {
    step: '03',
    title: 'Equipped Boarding & Automated Taping',
    duration: 'Active Phase',
    description: 'Skilled crews hang gypsum with precision screw depth calibration. Professional taping teams follow with high-velocity automated box tools and hand-feathering for consistent, flat seams.',
    deliverables: ['Tight staggered board joints', 'Crisp paper-faced metal or vinyl beads', 'Proper coat-to-coat cure cycles']
  },
  {
    step: '04',
    title: 'Raking Light QA & Final Sign-Off',
    duration: 'Handover Day',
    description: 'We inspect every square foot under 500W halogen raking light alongside your superintendent. The site is broom-swept and vacuumed, completely ready for primer and trim carpenters.',
    deliverables: ['Signed painter-ready sign-off', 'Zero punch-list backlog', 'Clean, debris-free jobsite']
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Steve Frechette',
    role: 'Founder & CEO',
    experience: '18+ Years in Commercial & Residential Trades',
    bio: 'Steve founded Board Boss Drywall in 2017 with a singular mission: to provide Niagara and GTA builders with a drywall subtrade that communicates proactively, respects schedules, and delivers uncompromised finishing.',
    image: FOUNDER_IMAGE,
    credentials: ['Master Finisher', 'OBC Part 3/9 Certified', 'CommunityVotes 3x Platinum Winner']
  },
  {
    name: 'Kelly Frechette',
    role: 'VP Operations & Client Relations',
    experience: '15+ Years in Construction Management',
    bio: 'Kelly oversees client communication, contracts, and office administration. She ensures quotes are returned within 48 hours, RFIs are logged immediately, and contractor billing is transparent and timely.',
    image: '',
    credentials: ['Construction Logistics', 'Safety Compliance Lead', 'WSIB Administrator']
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'In multi-unit subdivision builds, subtrade delays compound fast. Board Boss kept our 32-unit townhome project three days ahead of our drywall schedule. Their taping quality eliminated virtually all typical painter complaints.',
    author: 'Dave Richardson',
    title: 'Senior Project Director',
    company: 'Niagara Landmark Developments',
    projectType: '32-Unit Executive Townhomes',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'When you are building an $3M+ custom home with 18-foot ceilings and floor-to-ceiling glass, natural raking light exposes everything. Steve and his team deliver true Level 5 finishes with zero excuses. They are the only drywall contractor on our bid list.',
    author: 'Marcus Vance',
    title: 'Principal & Master Builder',
    company: 'Escarpment Custom Homes',
    projectType: '8,500 sq ft Modern Estate',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'Dependability is rare in subtrades. Steve communicates daily, his crews show up in full PPE, and they leave the site swept clean. The Welland medical clinic passed acoustic inspection without a single deficiency.',
    author: 'Elena Santos',
    title: 'VP Construction & Site Operations',
    company: 'Horizon Commercial Builders',
    projectType: 'Commercial Healthcare Plaza',
    rating: 5
  }
];

export const SERVICE_AREAS = [
  'St. Catharines',
  'Niagara Falls',
  'Welland',
  'Niagara-on-the-Lake',
  'Pelham & Fonthill',
  'Grimsby',
  'Hamilton & Stoney Creek',
  'Burlington & Oakville',
  'Greater Toronto Area (GTA)'
];
