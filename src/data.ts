import { ServiceItem, ProductItem, ReviewItem, GalleryItem } from './types';

export const BUSINESS_INFO = {
  name: "Shivkrupa Stationery & Xerox Centre",
  tagline: "Your One Stop Solution for Xerox, Printing & Stationery Needs.",
  owner: "Shivkrupa Team",
  phone: "+91 86054 31919",
  phoneDisplay: "+91 86054 31919",
  whatsappUrl: "https://wa.me/918605431919?text=Hello%2C%20I%20have%20an%20inquiry%20regarding%20your%20stationery%20or%20Xerox%20services.",
  mapsUrl: "https://www.google.com/maps/place/Shivkrupa+Stationery+and+xerox+centre/@18.4921044,73.9319001,15z",
  directionUrl: "https://www.google.com/maps/dir/?api=1&destination=Shivkrupa+Stationery+and+xerox+centre&destination_place_id=ChIJEdgQJ-TBwjYRpgoceCc_YWs",
  email: "info.shivkrupastationery@gmail.com",
  rating: 5.0,
  reviewsCount: 18,
  address: "311/11, Lane Number 8, Opp. Siddhivinayak Aangan, Autadwadi Handewadi, Kanifnath Colony, Sasane Nagar, Hadapsar, Pune, Maharashtra 411028",
  workingHours: [
    { days: "Monday - Saturday", hours: "09:00 AM - 09:00 PM" },
    { days: "Sunday", hours: "09:30 AM - 02:00 PM" }
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "bw-xerox",
    title: "Black & White Xerox",
    description: "High-speed and crystal clear photocopying for documents, study material, and books.",
    category: "printing",
    iconName: "Copy",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "col-xerox",
    title: "Colour Xerox",
    description: "Vibrant, high-resolution color photocopying that accurately matches the original graphics.",
    category: "printing",
    iconName: "Palette",
    image: "https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "printout",
    title: "Printout (B&W / Colour)",
    description: "Get high-quality digital printouts directly from your USB drive, Email, or WhatsApp.",
    category: "printing",
    iconName: "Printer",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "scan",
    title: "Scan Documents",
    description: "Fast scanning to convert physical papers into PDF, JPG, or PNG directly to your email or phone.",
    category: "printing",
    iconName: "Scan",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "lamination",
    title: "Lamination",
    description: "Preserve your valuable certificates, ID cards, and documents with heavy-duty protective lamination.",
    category: "printing",
    iconName: "Shield",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "binding",
    title: "Spiral Binding",
    description: "Professional spiral and comb binding for student projects, office reports, and manuals.",
    category: "printing",
    iconName: "BookOpen",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "proj-print",
    title: "Project Printing",
    description: "Full-scale project reports printing and binding designed for school, college, and university students.",
    category: "printing",
    iconName: "FileText",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "passport-photo",
    title: "Passport Photo Print",
    description: "Instant, high-gloss passport size photo prints with correct sizing and bright, crisp lighting.",
    category: "printing",
    iconName: "UserSquare",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "stationery-items",
    title: "Stationery Items",
    description: "Complete selection of day-to-day stationery items, geometry boxes, and scientific instruments.",
    category: "stationery",
    iconName: "PenTool",
    image: "https://images.unsplash.com/photo-1598301257982-0cf014dabbcd?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "school-supplies",
    title: "School Supplies",
    description: "Textbooks, drawing books, craft materials, water bottles, and school bags for all age groups.",
    category: "stationery",
    iconName: "GraduationCap",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "office-supplies",
    title: "Office Supplies",
    description: "Essential office supplies including registers, files, folders, staplers, calculators, and legal sheets.",
    category: "stationery",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "online-form",
    title: "Online Form Filling",
    description: "Quick and secure assistance for filling out online government, educational, and job application forms.",
    category: "other",
    iconName: "Laptop",
    image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "photocopy",
    title: "Photocopy Service",
    description: "Bulk copy pricing with extremely fast turnaround times for bulk orders.",
    category: "printing",
    iconName: "Layers",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "id-card-print",
    title: "ID Card Printing",
    description: "Durable and clean prints for official identity cards, passes, and smart cards.",
    category: "printing",
    iconName: "Contact",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "resume-printing",
    title: "Resume Printing",
    description: "Premium bond paper prints for your resumes and CVs to make an elegant first impression.",
    category: "printing",
    iconName: "FileUser",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=500&q=80"
  }
];

export const PRODUCTS: ProductItem[] = [
  // Notebooks
  {
    id: "p1",
    name: "Premium Long Books",
    category: "Notebooks",
    description: "Sturdy bound, high-GSM ruled long books ideal for students and regular handwriting exercises.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQACiimR5RxXDYgbYJS-rkIQJN3ZuPHgoh7B3UBvAnV-HuGTIgsK5RZOUY&s=10",
    isPopular: true
  },
  {
    id: "p2",
    name: "Classic Spiral Notebooks",
    category: "Notebooks",
    description: "Flexible, lay-flat spiral notebooks with premium tear-off microperforated sheets.",
    image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=400&q=80"
  },
  // Pens
  {
    id: "p3",
    name: "Branded Gel & Ball Pens",
    category: "Pens",
    description: "Smooth, smudge-free writing experiences from premium brands (Uni-ball, Trimax, Pentel, Cello).",
    image: "https://m.media-amazon.com/images/I/61Ia86BGZNL.jpg",
    isPopular: true
  },
  // Pencils
  {
    id: "p4",
    name: "Premium Graphite Pencils",
    category: "Pencils",
    description: "Perfect dark graphite grading (HB, 2B, 4B) for writing and structural sketching, complete with erasers.",
    image: "https://m.media-amazon.com/images/I/61EW0+wiyfL._AC_UF1000,1000_QL80_.jpg"
  },
  // Files
  {
    id: "p5",
    name: "Ring Binders & Cobra Files",
    category: "Files",
    description: "Durable polypropylene files to store, categorize, and archive critical official sheets securely.",
    image: "https://m.media-amazon.com/images/I/71wyecv9LmL._AC_UF350,350_QL50_.jpg"
  },
  // Registers
  {
    id: "p6",
    name: "Hardbound Ledger Registers",
    category: "Registers",
    description: "Heavy-duty ledger registers with numbered pages, perfect for commercial accounts and logs.",
    image: "https://trison.in/cdn/shop/products/LEDGERREGISTER.png?v=1655807365"
  },
  // Drawing Books
  {
    id: "p7",
    name: "Heavy Art Drawing Books",
    category: "Drawing Books",
    description: "Thick textured acid-free pages suitable for crayons, watercolors, and fine pencil sketching.",
    image: "https://www.bbassets.com/media/uploads/p/l/40220827_1-sundaram-artist-drawing-book-a4-100-pages-size-295-x-21-cm.jpg"
  },
  // Colours
  {
    id: "p8",
    name: "Professional Colour Packs",
    category: "Colours",
    description: "Vibrant watercolor palettes, premium acrylic tubes, and smooth non-toxic oil pastels.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=400&q=80",
    isPopular: true
  },
  // Craft Materials
  {
    id: "p9",
    name: "Decorative Craft Kits",
    category: "Craft Materials",
    description: "Glitter paper sheets, origami papers, quilling strips, felt, and heavy adhesives for art classes.",
    image: "https://m.media-amazon.com/images/I/51jOvmB7S1L._AC_UF894,1000_QL80_.jpg"
  },
  // Office Stationery
  {
    id: "p10",
    name: "Corporate Office Organizers",
    category: "Office Stationery",
    description: "Staplers, punch machines, heavy adhesives, calculator units, tape dispensers, and highlighters.",
    image: "https://m.media-amazon.com/images/I/518mdNZ2MaL._AC_UF1000,1000_QL80_.jpg"
  },
  // School Accessories
  {
    id: "p11",
    name: "Ergonomic Geometry Boxes",
    category: "School Accessories",
    description: "Precision compass, dividers, scales, protractors, and set squares packed in durable metallic cases.",
    image: "https://m.media-amazon.com/images/I/616eC3i5FLL._AC_UF350,350_QL80_.jpg",
    isPopular: true
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "r1",
    name: "Rushikesh Shevte",
    rating: 5,
    text: "Good service and cooperative support.",
    date: "1 month ago"
  },
  {
    id: "r2",
    name: "Customer",
    rating: 5,
    text: "Excellent service.",
    date: "3 weeks ago"
  },
  {
    id: "r3",
    name: "Pratiksha Ghule",
    rating: 5,
    text: "Very reliable and quick xerox shop. The quality of colour printout is fantastic and costs are very reasonable.",
    date: "2 months ago"
  },
  {
    id: "r4",
    name: "Aniket Deshmukh",
    rating: 5,
    text: "Great experience. Friendly staff helped me bind my college reports and print project files in no time. Highly recommended!",
    date: "1 month ago"
  },
  {
    id: "r5",
    name: "Sandeep Patil",
    rating: 5,
    text: "All stationery materials are easily available. Best spot for school & office stationery supplies in Handewadi Road area.",
    date: "2 months ago"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Fast Service",
    description: "Instant document prints, prompt scanning, and speedy lamination while you wait. Zero time wasted.",
    icon: "Zap"
  },
  {
    title: "Best Quality",
    description: "Top-tier dark black laser prints and vibrant, high-fidelity color copies on professional paper grades.",
    icon: "Award"
  },
  {
    title: "Affordable Pricing",
    description: "Highly competitive per-page pricing for both standard printing and bulk commercial photocopies.",
    icon: "IndianRupee"
  },
  {
    title: "Friendly Support",
    description: "Our helpful team goes above and beyond, guiding you through form filling and sizing requirements.",
    icon: "Smile"
  },
  {
    title: "High Quality Printing",
    description: "Durable bound projects and smudge-resistant text with our high-end professional printing equipment.",
    icon: "Printer"
  },
  {
    title: "Trusted Shop",
    description: "Maintaining a perfect 5.0 Google Rating because of our consistent, honest, and dedicated customer care.",
    icon: "ShieldCheck"
  },
  {
    title: "Convenient Location",
    description: "Right on Lane Number 8, Opp. Siddhivinayak Aangan - very easy to find, with quick roadside parking.",
    icon: "MapPin"
  },
  {
    title: "Modern Equipment",
    description: "Equipped with state-of-the-art heavy-duty Xerox and binding machinery to handle extreme order volumes.",
    icon: "Cpu"
  }
];

export const GALLERY_CATEGORIES = [
  { value: "all", label: "All Photos" },
  { value: "shop", label: "Shop Front" },
  { value: "xerox_machines", label: "Xerox Machines" },
  { value: "printing", label: "Printing Operations" },
  { value: "stationery", label: "Stationery Sections" },
  { value: "products", label: "New Arrivals" }
];

export const GALLERY_ITEMS: GalleryItem[] = [
 
  {
    id: "g2",
    category: "xerox_machines",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80",
    title: "Heavy-Duty Xerox Station",
    description: "Enterprise grade dual-scan photocopiers with multi-tray configuration for quick bulk prints."
  },
  {
    id: "g3",
    category: "printing",
    image: "https://static.vecteezy.com/system/resources/thumbnails/070/682/574/small/large-format-printer-producing-vibrant-prints-high-quality-inkjet-technology-for-professional-graphics-and-signage-photo.jpeg",
    title: "Digital Color Printing Press",
    description: "High-fidelity commercial color laser printing systems delivering vibrant report graphics."
  },
  {
    id: "g4",
    category: "stationery",
    image: "https://thumbs.dreamstime.com/b/close-up-shelves-assortment-copybooks-sketchbooks-color-paper-design-scrapbooking-pastel-drawing-watercolor-283554970.jpg",
    title: "School Stationery Shelves",
    description: "Well-stocked compartments containing coloring kits, paintbooks, scale kits, and craft folders."
  },
  {
    id: "g5",
    category: "shop",
    image: "https://m.media-amazon.com/images/I/81KAVzpzA4L._AC_UF1000,1000_QL80_.jpg",
    title: "Students Purchasing Supplies",
    description: "College students happily selecting notebooks and drafting kits for their semester coursework."
  },
 
  {
    id: "g7",
    category: "printing",
    image: "https://content.jdmagicbox.com/quickquotes/images_main/mtc2otuxmdy1nq-1769510655-2vvyjqec.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit",
    title: "Heavy Duty Lamination Machine",
    description: "Heat-sealed transparent pouch encapsulation to waterproof certificates and ID passes."
  },
  {
    id: "g8",
    category: "printing",
    image: "https://m.media-amazon.com/images/I/81ZjfxF4-iL._AC_UF350,350_QL80_.jpg",
    title: "Spiral Binding Workstation",
    description: "Neatly hole-punched project reports being bound with sturdy plastic comb binding."
  },
  {
    id: "g9",
    category: "stationery",
    image: "https://m.media-amazon.com/images/I/61POXj0ucHL._AC_UF894,1000_QL80_.jpg",
    title: "Office Stationery Displays",
    description: "Heavy duty staplers, punch tools, permanent markers, tape dispensers, and binder clips."
  }
];
