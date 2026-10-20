// =========================================================================
// PORTFOLIO DATA CONFIGURATION
// =========================================================================
// You can easily customize any of your information here:
// Name, College, Resume details, Skills, Case Studies, and Achievements!
// =========================================================================

export interface Project {
  id: string;
  title: string;
  category: "Strategy" | "Marketing" | "Finance" | "Analytics" | "Operations";
  role: string;
  timeline: string;
  summary: string;
  challenge: string;
  frameworks: string[];
  keyOutcomes: string[];
  impactMetric: string;
  impactLabel: string;
  deliverables: string[];
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; proficiency: number; tag?: string }[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: "Competition" | "Academic" | "Certification" | "Leadership";
  description: string;
  badgeText: string;
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "MBA Leadership" | "Pre-MBA Experience" | "Academic Project";
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  specialization?: string;
  gpaOrScore?: string;
  highlights: string[];
}

export const portfolioData = {
  personal: {
    name: "Harini",
    fullName: "Harini S",
    tagline: "MBA Candidate (Class of 2026-27)",
    subheading: "Aspiring Business Strategist & Management Consultant",
    bio: "First-year MBA student passionate about unraveling complex business problems through structured problem-solving, data-backed market intelligence, and cross-functional leadership. Eager to create sustainable business impact across Corporate Strategy, Product Growth, and Consulting.",
    email: "hariniharinisri021@gmail.com",
    githubUsername: "hariniharinisri021",
    githubUrl: "https://github.com/hariniharinisri021",
    linkedinUrl: "https://www.linkedin.com/in/hariniharinisri021", // Easily replaceable with actual link
    location: "India (Open to Global / Hybrid Opportunities)",
    availabilityBadge: "Open to Summer 2026 Consulting & Strategy Internships",
    profileImage: "/profile.jpg",
  },

  quickStats: [
    { value: "1st Year", label: "MBA Candidate", sub: "Top Tier Business School" },
    { value: "Top 5%", label: "National Case Finalist", sub: "Strategy & Market Entry" },
    { value: "4+", label: "Strategic Projects", sub: "Consulting & Valuation" },
    { value: "100%", label: "Analytical Rigor", sub: "MECE & Data-Driven" },
  ],

  executivePillars: [
    {
      title: "Strategic Consulting & Growth",
      desc: "Structured hypothesis testing, MECE issue trees, market sizing, competitive benchmarking, and go-to-market strategies.",
      icon: "Compass",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Financial Modeling & Valuation",
      desc: "DCF analysis, unit economics evaluation, cost-benefit trade-offs, scenario forecasting, and investment pitch deck synthesis.",
      icon: "TrendingUp",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "Market Intelligence & Brand Strategy",
      desc: "Customer persona segmentation, STP framework, consumer journey mapping, CAC/LTV optimization, and campaign ROI tracking.",
      icon: "Target",
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Executive Leadership & Team Alignment",
      desc: "Leading cross-functional MBA cohorts, client stakeholder presentations, agile consensus building, and change management.",
      icon: "Users",
      color: "from-amber-500 to-orange-600",
    },
  ],

  education: [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "Premier Business School",
      period: "2025 - Present (First Year)",
      specialization: "Specializing in Corporate Strategy & Business Analytics",
      gpaOrScore: "First Year Scholar",
      highlights: [
        "Core Coursework: Managerial Economics, Corporate Finance, Marketing Management, Operations Strategy, Business Analytics.",
        "Active member of the Management Consulting Club and Placement Advisory Committee.",
        "Selected among top teams representing college in Inter-B-School Strategy Olympiads.",
      ],
    },
    {
      degree: "Bachelor's Degree (Undergraduate)",
      institution: "Distinguished University",
      period: "2021 - 2024",
      specialization: "Graduated with Distinction",
      gpaOrScore: "Top Tier Academic Record",
      highlights: [
        "Developed solid foundation in analytical thinking, quantitative problem solving, and project management.",
        "Led university student symposium with 500+ participants and managed corporate sponsorships.",
      ],
    },
  ] as Education[],

  skills: [
    {
      title: "Strategic Frameworks & Consulting",
      icon: "Layers",
      description: "Proven problem-solving models for breaking down ambiguity into actionable execution.",
      skills: [
        { name: "MECE Problem Structuring", proficiency: 92, tag: "Core" },
        { name: "Market Sizing & TAM Analysis", proficiency: 90, tag: "Core" },
        { name: "Porter's 5 Forces & PESTEL", proficiency: 95 },
        { name: "Go-To-Market (GTM) Strategy", proficiency: 88, tag: "Core" },
        { name: "Competitive Benchmarking", proficiency: 91 },
      ],
    },
    {
      title: "Business Analytics & Quantitative",
      icon: "BarChart3",
      description: "Data-driven insights extraction and predictive financial modeling.",
      skills: [
        { name: "Financial Modeling & DCF", proficiency: 85, tag: "Finance" },
        { name: "Advanced Excel & Financial Functions", proficiency: 94, tag: "Tool" },
        { name: "PowerBI / Tableau Dashboarding", proficiency: 87, tag: "Tool" },
        { name: "Unit Economics (CAC, LTV, Churn)", proficiency: 89 },
        { name: "SQL & Data Querying Basics", proficiency: 80 },
      ],
    },
    {
      title: "Marketing & Growth Strategy",
      icon: "Megaphone",
      description: "Customer-centric growth engines and brand positioning architectures.",
      skills: [
        { name: "STP (Segmentation, Targeting, Positioning)", proficiency: 94 },
        { name: "Consumer Behavior & Personas", proficiency: 90 },
        { name: "Digital Funnel & Conversion Strategy", proficiency: 86 },
        { name: "Product Roadmap & Pricing Strategy", proficiency: 88 },
      ],
    },
    {
      title: "Leadership & Executive Delivery",
      icon: "Award",
      description: "High-impact storytelling and stakeholder influence.",
      skills: [
        { name: "C-Suite Presentation Decks (PowerPoint)", proficiency: 96, tag: "Signature" },
        { name: "Cross-functional Team Leadership", proficiency: 92 },
        { name: "Conflict Resolution & Negotiation", proficiency: 88 },
        { name: "Agile Project Coordination", proficiency: 86 },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "ev-market-entry",
      title: "Electric Mobility Market Entry Strategy for Southeast Asia",
      category: "Strategy",
      role: "Lead Strategy Analyst (B-School Case Challenge)",
      timeline: "Fall 2025",
      summary: "Evaluated market feasibility, regulatory incentives, and charging ecosystem hurdles for an automotive OEM entering Tier-2 emerging markets.",
      challenge: "High battery import tariffs and sparse public charging infrastructure threatened unit profitability for mid-market EV sedans.",
      frameworks: ["Ansoff Matrix", "Value Chain Analysis", "Sensitivity Modeling", "Scenario Planning"],
      keyOutcomes: [
        "Identified 3 high-growth pilot cities with government subsidies reducing battery duty by 14%.",
        "Formulated a Battery-as-a-Service (BaaS) subscription model lowering upfront customer capex by 28%.",
        "Projected break-even within 3.2 years at 12,000 annualized fleet units.",
      ],
      impactMetric: "+28% Adoption",
      impactLabel: "Projected 3-Year Market Penetration",
      deliverables: ["25-slide Executive Pitch Deck", "Financial Sensitivity Model (Excel)", "Regulatory Risk Matrix"],
      featured: true,
    },
    {
      id: "fmcg-omnichannel",
      title: "D2C Omni-Channel Turnaround for FMCG Personal Care Brand",
      category: "Marketing",
      role: "Marketing Strategist (Consulting Simulation)",
      timeline: "Winter 2025",
      summary: "Diagnosed rising Customer Acquisition Costs (CAC) across paid social channels and built a localized quick-commerce & retail partnership roadmap.",
      challenge: "CAC doubled over 6 months with 64% cart abandonment and low repeat retention on direct web store.",
      frameworks: ["Customer Lifetime Value (LTV) Decomposition", "Cohort Retention", "Retail Distribution Mapping"],
      keyOutcomes: [
        "Reallocated 35% ad spend from cold prospecting to high-intent Quick-Commerce partner stores (Blinkit / Zepto).",
        "Redesigned subscription loyalty tier, driving repeat purchase frequency up by 22% in simulated pilot.",
        "Reduced blended CAC by 19% while improving 90-day retention curve.",
      ],
      impactMetric: "19% Lower CAC",
      impactLabel: "Blended Acquisition Efficiency",
      deliverables: ["Channel Mix Optimization Model", "Customer Journey Wireframe", "Retention Playbook"],
      featured: true,
    },
    {
      id: "fintech-valuation",
      title: "Valuation & Unit Economics Audit of a B2B SaaS Neobank",
      category: "Finance",
      role: "Financial Analyst (Academic Project)",
      timeline: "Fall 2025",
      summary: "Performed detailed valuation and competitive moat audit for a series-B corporate treasury automation platform.",
      challenge: "High churn in SME tier masking strong enterprise net revenue retention; required accurate cost of capital (WACC) estimation.",
      frameworks: ["Discounted Cash Flow (DCF)", "Trading Comps", "Precedent Transactions", "WACC & Beta Unlevering"],
      keyOutcomes: [
        "Constructed 5-year integrated 3-statement financial model with bear, base, and bull macro scenarios.",
        "Demonstrated fair enterprise valuation range of $185M-$210M, highlighting pricing power in enterprise contracts.",
        "Identified gross margin expansion catalyst through internalizing payment gateway rails.",
      ],
      impactMetric: "$195M Base Value",
      impactLabel: "Target Enterprise Valuation",
      deliverables: ["Interactive DCF Model", "Valuation Football Field Chart", "Investment Committee Memo"],
      featured: true,
    },
    {
      id: "supply-chain-ops",
      title: "Warehouse Bottleneck & Inventory Turn Optimization",
      category: "Operations",
      role: "Operations Consultant (Live Case Study)",
      timeline: "Winter 2025",
      summary: "Streamlined order picking paths and safety stock buffer equations for an e-commerce fulfillment hub.",
      challenge: "Peak holiday order backlogs caused order fulfillment cycle time to balloon from 18 to 44 hours.",
      frameworks: ["Six Sigma DMAIC", "ABC Inventory Classification", "Little's Law", "Bottleneck Scheduling"],
      keyOutcomes: [
        "Reconfigured fast-moving SKU placement using ABC zoning, cutting picker travel distance by 31%.",
        "Recalibrated safety stock reorder triggers to prevent stockouts while reducing holding costs by 12%.",
        "Restored order turnaround to <19 hours during simulated peak traffic.",
      ],
      impactMetric: "-31% Travel Time",
      impactLabel: "Fulfillment Cycle Improvement",
      deliverables: ["Process Flowchart & Heatmap", "Reorder Level Calculator", "SOP Guidelines"],
      featured: false,
    },
  ] as Project[],

  achievements: [
    {
      id: "ach-1",
      title: "National Finalist - Inter B-School Strategy Challenge",
      issuer: "Apex Management Association",
      year: "2025",
      category: "Competition",
      description: "Ranked in the top 5 teams out of 800+ national entrants for developing an innovative green hydrogen supply chain model.",
      badgeText: "Top 0.5% Nationally",
    },
    {
      id: "ach-2",
      title: "Corporate Finance & Financial Modeling Certified",
      issuer: "Corporate Finance Institute (CFI) / Coursework",
      year: "2025",
      category: "Certification",
      description: "Mastered financial statements analysis, DCF modeling, scenario planning, and capital budgeting standards.",
      badgeText: "Certified",
    },
    {
      id: "ach-3",
      title: "McKinsey Forward Program Participant",
      issuer: "McKinsey & Company",
      year: "2025",
      category: "Certification",
      description: "Completed intensive leadership, structured problem-solving, digital agility, and executive communication tracks.",
      badgeText: "Leadership Honor",
    },
    {
      id: "ach-4",
      title: "Core Committee Member - Student Consulting Club",
      issuer: "Business School Student Council",
      year: "2025 - Present",
      category: "Leadership",
      description: "Organizing weekly case workshops, industry speaker sessions, and mentoring junior peers in case interview frameworks.",
      badgeText: "Elected Role",
    },
  ] as Achievement[],

  caseStudyVisual: "/case_study.jpg",

  leadershipRoles: [
    {
      role: "Junior Associate - Strategy & Consulting Club",
      period: "2025 - Present",
      description: "Facilitate case cracking circles, coordinate national case competitions, and build structured interview repository for 120+ cohort members.",
    },
    {
      role: "Corporate Relations & Placement Committee Volunteer",
      period: "2025 - Present",
      description: "Liaise with visiting executives and consulting partners for campus symposiums, networking conclaves, and industry immersion visits.",
    },
    {
      role: "Social Impact & ESG Initiative Lead",
      period: "2024 - 2025",
      description: "Spearheaded local community consulting drive helping micro-entrepreneurs optimize digital payment collection and ledger reconciliation.",
    },
  ],
};
