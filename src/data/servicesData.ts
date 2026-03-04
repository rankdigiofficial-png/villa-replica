import { ServicePageData } from "@/components/ServicePageLayout";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";
import project4 from "@/assets/project4.jpg";
import aboutVilla from "@/assets/about-villa.png";
import ctaImage from "@/assets/cta-image.jpg";
import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";
import blog3 from "@/assets/blog3.jpg";

export const servicesData: Record<string, ServicePageData> = {
  "residential-painting": {
    title: "Residential Painting",
    subtitle: "Home Painting Service",
    description:
      "Experience the excellence of our residential painting service. We beautify your home with precision, quality paints, and meticulous attention to detail.",
    features: [
      "Complete interior and exterior home painting",
      "Premium quality, eco-friendly paints",
      "Color consultation with expert designers",
      "Surface preparation including sanding and priming",
      "Clean and tidy workmanship guaranteed",
      "Flexible scheduling around your lifestyle",
    ],
    details: [
      "Initial consultation and color selection to match your style",
      "Thorough surface preparation including cleaning, sanding, and priming",
      "Protection of furniture, flooring, and fixtures before painting",
      "Professional application using brushes, rollers, and sprayers",
      "Multiple coats applied for a flawless, long-lasting finish",
      "Final inspection and touch-ups to ensure perfection",
    ],
    image: project1,
  },
  "commercial-painting": {
    title: "Commercial Painting",
    subtitle: "Business Painting Service",
    description:
      "Professional painting solutions for offices, retail spaces, warehouses, and commercial buildings. Minimal disruption to your business operations.",
    features: [
      "Office buildings, retail stores, and warehouses",
      "After-hours and weekend scheduling available",
      "Industrial-grade, durable paint finishes",
      "Brand-aligned color schemes",
      "Safety-compliant procedures and equipment",
      "Rapid turnaround with minimal business disruption",
    ],
    details: [
      "Site assessment and detailed project scope planning",
      "Custom color scheme design aligned with your brand identity",
      "Flexible scheduling to minimize impact on business operations",
      "Professional surface preparation for commercial environments",
      "High-durability coatings for high-traffic areas",
      "Post-project cleanup and quality assurance inspection",
    ],
    image: project4,
  },
  "interior-painting": {
    title: "Interior Painting",
    subtitle: "Indoor Painting Service",
    description:
      "Transform the inside of your villa or home with our expert interior painting services. We create beautiful, inviting spaces with premium finishes.",
    features: [
      "Living rooms, bedrooms, kitchens, and bathrooms",
      "Accent walls and feature wall designs",
      "Ceiling painting and crown molding finishing",
      "Low-VOC and odor-free paint options",
      "Precise cutting-in and edge work",
      "Furniture protection and post-paint cleanup",
    ],
    details: [
      "Room-by-room assessment and color consultation",
      "Moving and covering all furniture and fixtures",
      "Wall repair, patching, and surface smoothing",
      "Primer application for uniform color coverage",
      "Expert paint application with clean, sharp lines",
      "Final walkthrough and client satisfaction check",
    ],
    image: project3,
  },
  "exterior-painting": {
    title: "Exterior Painting",
    subtitle: "Outdoor Painting Service",
    description:
      "Protect and beautify your villa's exterior with our weather-resistant painting solutions, specially formulated for Dubai's harsh climate.",
    features: [
      "UV-resistant and weather-proof coatings",
      "Facade, wall, and boundary wall painting",
      "Power washing and surface preparation",
      "Crack filling and waterproofing",
      "Heat-reflective paint options for energy savings",
      "Long-lasting finishes backed by warranty",
    ],
    details: [
      "Exterior inspection and surface condition assessment",
      "Power washing to remove dirt, dust, and old flaking paint",
      "Crack repair, caulking, and waterproofing treatment",
      "Primer application suited to exterior surfaces",
      "Application of premium weather-resistant exterior paint",
      "Final inspection to ensure complete, even coverage",
    ],
    image: project2,
  },
  wallpapering: {
    title: "Wallpapering Service",
    subtitle: "Wallpaper Installation",
    description:
      "Expert wallpaper installation and removal services. Enhance your space with stylish patterns and textures from top wallpaper brands.",
    features: [
      "Professional wallpaper installation and removal",
      "Wide selection of patterns, textures, and materials",
      "Seamless pattern matching and alignment",
      "Wall preparation for smooth wallpaper adhesion",
      "Vinyl, fabric, and peel-and-stick options",
      "Feature wall and full-room installations",
    ],
    details: [
      "Wall inspection and preparation for wallpaper application",
      "Selection guidance from our curated wallpaper catalog",
      "Precise measurement and cutting for minimal waste",
      "Professional adhesive application and wallpaper hanging",
      "Seamless pattern matching across panels",
      "Trimming, smoothing, and final inspection for perfection",
    ],
    image: aboutVilla,
  },
  "restoration-painting": {
    title: "Restoration Painting",
    subtitle: "Heritage & Restoration Service",
    description:
      "Breathe new life into aging or heritage properties with our expert restoration painting services. We revitalize spaces while preserving character.",
    features: [
      "Heritage and period property specialists",
      "Careful surface restoration and repair",
      "Color matching to original historical palettes",
      "Damp and mold treatment before painting",
      "Wood restoration and repainting",
      "Respectful preservation of architectural details",
    ],
    details: [
      "Detailed assessment of the property's current condition",
      "Historical color research and palette matching",
      "Surface restoration including plaster repair and wood treatment",
      "Mold and damp treatment for long-lasting results",
      "Careful application preserving architectural details",
      "Final restoration review and documentation",
    ],
    image: ctaImage,
  },
  "cabinet-painting": {
    title: "Cabinet Painting",
    subtitle: "Kitchen & Cabinet Refinishing",
    description:
      "Give your kitchen and bathroom cabinets a fresh, modern look without the cost of full replacement. Professional cabinet painting and refinishing.",
    features: [
      "Kitchen and bathroom cabinet refinishing",
      "Spray finish for a smooth, factory-like result",
      "Wide range of colors and finishes available",
      "Durable coatings resistant to moisture and heat",
      "Hardware removal and reinstallation included",
      "Fraction of the cost of new cabinets",
    ],
    details: [
      "Cabinet inspection and scope of work planning",
      "Removal of doors, drawers, and hardware",
      "Thorough cleaning, sanding, and degreasing",
      "Primer application for optimal paint adhesion",
      "Professional spray application for a smooth finish",
      "Reassembly, hardware installation, and final inspection",
    ],
    image: blog1,
  },
  "drywall-texturing": {
    title: "Drywall Texturing",
    subtitle: "Wall Texturing Service",
    description:
      "Add depth and character to your walls with our professional drywall texturing services. From smooth finishes to decorative patterns.",
    features: [
      "Knockdown, orange peel, and skip trowel textures",
      "Smooth and level 5 finishes",
      "Popcorn ceiling removal and refinishing",
      "Drywall repair and patching",
      "Custom decorative texturing options",
      "Dust-controlled application process",
    ],
    details: [
      "Surface assessment and texture style consultation",
      "Drywall repair, joint taping, and mudding as needed",
      "Application of chosen texture pattern",
      "Drying time and quality inspection",
      "Priming and painting over the new texture",
      "Cleanup and final walkthrough with client",
    ],
    image: blog2,
  },
  "door-painting": {
    title: "Door Painting",
    subtitle: "Door Refinishing Service",
    description:
      "Refresh and protect your doors with our professional door painting service. Interior and exterior doors painted to perfection.",
    features: [
      "Interior and exterior door painting",
      "Wood, metal, and fiberglass door expertise",
      "Door frame and trim painting included",
      "Spray or brush application based on door type",
      "Staining and varnishing options available",
      "Quick turnaround with minimal disruption",
    ],
    details: [
      "Door assessment and finish recommendation",
      "Removal of hardware and careful masking",
      "Sanding, cleaning, and priming the door surface",
      "Professional paint or stain application",
      "Drying and second coat application as needed",
      "Hardware reinstallation and quality inspection",
    ],
    image: project1,
  },
  "floor-painting": {
    title: "Floor Painting",
    subtitle: "Floor Coating Service",
    description:
      "Durable and attractive floor painting solutions for garages, warehouses, showrooms, and residential spaces. Anti-slip and easy-to-clean finishes.",
    features: [
      "Garage, warehouse, and showroom floor coatings",
      "Anti-slip and chemical-resistant finishes",
      "Decorative concrete floor painting",
      "Quick-drying formulas for minimal downtime",
      "Line marking and safety zone painting",
      "Residential basement and patio floor painting",
    ],
    details: [
      "Floor inspection and surface condition evaluation",
      "Thorough cleaning, degreasing, and crack repair",
      "Diamond grinding or etching for paint adhesion",
      "Primer coat application",
      "Application of durable floor paint or epoxy coating",
      "Curing period and final quality inspection",
    ],
    image: project4,
  },
  "texture-painting": {
    title: "Texture Painting",
    subtitle: "Decorative Texture Service",
    description:
      "Create stunning visual effects with our decorative texture painting. From Venetian plaster to metallic finishes, we bring artistry to your walls.",
    features: [
      "Venetian plaster and faux finishes",
      "Metallic and shimmer effect paints",
      "Stucco and stone texture finishes",
      "Custom artistic wall treatments",
      "Feature walls and accent designs",
      "Premium imported texture materials",
    ],
    details: [
      "Design consultation and texture sample review",
      "Wall preparation and base coat application",
      "Skilled application of chosen texture technique",
      "Layering and blending for depth and dimension",
      "Protective sealant application for durability",
      "Final styling review and client approval",
    ],
    image: blog2,
  },
  "epoxy-flooring": {
    title: "Epoxy Flooring",
    subtitle: "Epoxy Floor Coating",
    description:
      "High-performance epoxy flooring solutions for residential and commercial spaces. Seamless, durable, and visually stunning floor coatings.",
    features: [
      "Seamless, high-gloss epoxy floor finishes",
      "Chemical and stain-resistant coatings",
      "Decorative flake and metallic epoxy options",
      "Ideal for garages, kitchens, and showrooms",
      "Anti-bacterial and easy-to-clean surfaces",
      "Long-lasting with minimal maintenance required",
    ],
    details: [
      "Floor assessment and epoxy system recommendation",
      "Surface preparation including grinding and cleaning",
      "Crack repair and moisture barrier application",
      "Base coat epoxy application",
      "Decorative flake or metallic layer (if chosen)",
      "Clear top coat for protection and shine",
    ],
    image: project3,
  },
};
