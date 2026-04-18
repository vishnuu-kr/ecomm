export const products = [
  {
    id: 1,
    name: "Merino Wool V-Neck",
    price: 145,
    originalPrice: 195,
    category: "women",
    type: "knitwear",
    color: "Cream",
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "/images/product-sweater.png",
    images: ["/images/product-sweater.png"],
    description: "Crafted from the finest extra-fine merino wool, this v-neck sweater offers an impossibly soft hand-feel with natural temperature regulation. The relaxed silhouette drapes effortlessly, making it the cornerstone of any considered wardrobe.",
    details: ["100% Extra-Fine Merino Wool", "Relaxed fit", "Ribbed cuffs and hem", "Dry clean recommended"],
    isNew: true,
    isBestseller: true,
    rating: 4.8,
    reviews: [
      { id: 101, author: "Sarah M.", rating: 5, date: "2023-11-12", comment: "The quality of the wool is incredible. It feels so luxurious and the fit is perfectly oversized without looking boxy." },
      { id: 102, author: "Emma T.", rating: 4, date: "2023-10-28", comment: "Beautiful cream color. Slightly warmer than expected but the drape is gorgeous." }
    ]
  },
  {
    id: 2,
    name: "Essential Cotton Tee",
    price: 48,
    originalPrice: null,
    category: "men",
    type: "tops",
    color: "White",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/product-tshirt.png",
    images: ["/images/product-tshirt.png"],
    description: "Our signature essential tee, constructed from 200gsm organic cotton jersey. The perfect weight — substantial enough to hold structure, soft enough to improve with every wash. A quiet foundation piece.",
    details: ["100% Organic Cotton", "200gsm jersey", "Regular fit", "Machine washable"],
    isNew: false,
    isBestseller: true,
    rating: 4.9,
    reviews: [
      { id: 201, author: "James D.", rating: 5, date: "2023-09-15", comment: "Finally, a white tee that isn't see-through and holds its shape after multiple washes. Worth every penny." },
      { id: 202, author: "Michael P.", rating: 5, date: "2023-12-02", comment: "Excellent weight and drape. The collar stays crisp." }
    ]
  },
  {
    id: 3,
    name: "Tailored Linen Trousers",
    price: 185,
    originalPrice: 240,
    category: "men",
    type: "trousers",
    color: "Navy",
    sizes: ["28", "30", "32", "34", "36"],
    image: "/images/product-trousers.png",
    images: ["/images/product-trousers.png"],
    description: "Cut from European linen with a natural slub texture that tells a story of provenance. The tailored silhouette offers clean lines that transition seamlessly from structured environments to unhurried weekends.",
    details: ["100% European Linen", "Tailored fit", "Side and back pockets", "Dry clean or gentle wash"],
    isNew: true,
    isBestseller: false,
    rating: 4.5,
    reviews: [
      { id: 301, author: "David L.", rating: 4, date: "2023-11-20", comment: "Great summer trousers. The linen breathes well and the navy is a deeply rich shade. Required mild hemming." }
    ]
  },
  {
    id: 4,
    name: "Structured Wool Blazer",
    price: 320,
    originalPrice: 420,
    category: "women",
    type: "outerwear",
    color: "Camel",
    sizes: ["XS", "S", "M", "L"],
    image: "/images/product-blazer.png",
    images: ["/images/product-blazer.png"],
    description: "Architecturally constructed from Italian virgin wool with a half-canvas build. The natural shoulder line and clean lapels create a silhouette that speaks to quiet authority. Unlined for year-round versatility.",
    details: ["Italian Virgin Wool", "Half-canvas construction", "Two-button closure", "Interior welt pocket"],
    isNew: false,
    isBestseller: true,
    rating: 4.7,
    reviews: [
      { id: 401, author: "Rachel K.", rating: 5, date: "2023-08-10", comment: "The structure on this blazer is amazing. It elevates even a simple jeans and t-shirt outfit instantly." },
      { id: 402, author: "Olivia S.", rating: 4, date: "2023-09-05", comment: "Beautiful camel tone. Runs slightly large in the shoulders." }
    ]
  },
  {
    id: 5,
    name: "Wrap Midi Dress",
    price: 225,
    originalPrice: 280,
    category: "women",
    type: "dresses",
    color: "Dusty Rose",
    sizes: ["XS", "S", "M", "L"],
    image: "/images/product-dress.png",
    images: ["/images/product-dress.png"],
    description: "A considered wrap dress in fluid crepe fabric. The asymmetric hem and adjustable tie waist flatter every figure, while the muted dusty rose tone ensures versatility from day to evening.",
    details: ["Polyester-Viscose blend crepe", "Wrap front with tie waist", "Midi length", "Dry clean only"],
    isNew: true,
    isBestseller: false,
    rating: 4.6,
    reviews: [
      { id: 501, author: "Sophie W.", rating: 5, date: "2023-10-18", comment: "Such a flattering cut! The dusty rose color is elegant and understated." }
    ]
  },
  {
    id: 6,
    name: "Oversize Camel Coat",
    price: 495,
    originalPrice: 650,
    category: "women",
    type: "outerwear",
    color: "Camel",
    sizes: ["XS", "S", "M", "L"],
    image: "/images/product-coat.png",
    images: ["/images/product-coat.png"],
    description: "The definitive coat. Enveloping double-faced wool-cashmere with raw-edge seams that reveal the material's dual nature. The oversized cut moves with effortless authority, designed to endure decades of wear.",
    details: ["Wool-Cashmere blend", "Double-faced construction", "Oversized fit", "Dry clean only"],
    isNew: false,
    isBestseller: true,
    rating: 5.0,
    reviews: [
      { id: 601, author: "Claire B.", rating: 5, date: "2023-11-25", comment: "An absolute investment piece. The wool-cashmere blend is dreamily soft and warm." },
      { id: 602, author: "Nina J.", rating: 5, date: "2023-12-10", comment: "Fits beautifully. The oversized drape looks exactly like the lookbook." }
    ]
  },
  {
    id: 7,
    name: "Oxford Button-Down",
    price: 95,
    originalPrice: null,
    category: "men",
    type: "tops",
    color: "Light Blue",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/product-shirt.png",
    images: ["/images/product-shirt.png"],
    description: "A definitive oxford cloth button-down, woven from long-staple cotton for superior softness and durability. The button-down collar sits cleanly without rigidity. A permanent resident of the considered wardrobe.",
    details: ["100% Long-Staple Cotton Oxford", "Regular fit", "Button-down collar", "Machine washable"],
    isNew: false,
    isBestseller: false,
    rating: 4.8,
    reviews: [
      { id: 701, author: "Tom H.", rating: 5, date: "2023-09-14", comment: "A perfect everyday oxford shirt. The collar roll is excellent." }
    ]
  },
  {
    id: 8,
    name: "Cashmere Travel Scarf",
    price: 165,
    originalPrice: 210,
    category: "accessories",
    type: "accessories",
    color: "Taupe",
    sizes: ["One Size"],
    image: "/images/product-scarf.png",
    images: ["/images/product-scarf.png"],
    description: "Inner Mongolian cashmere spun to an impossibly light gauge, creating a scarf that provides warmth without bulk. The generous dimensions allow for multiple styling approaches. A companion for all seasons of transit.",
    details: ["100% Grade-A Cashmere", "200cm x 70cm", "Twill weave", "Hand wash cold"],
    isNew: true,
    isBestseller: false,
    rating: 4.9,
    reviews: [
      { id: 801, author: "Alice M.", rating: 5, date: "2023-11-05", comment: "So light yet unbelievably warm. Have taken it on three flights already." }
    ]
  },
  {
    id: 9,
    name: "Minimalist Leather Tote",
    price: 350,
    originalPrice: 420,
    category: "accessories",
    type: "bags",
    color: "Black",
    sizes: ["One Size"],
    image: "/images/product-bag.png",
    images: ["/images/product-bag.png"],
    description: "Architectural purity meets daily utility. Crafted from structured full-grain Italian leather that patinas beautifully over time. Features a suede-lined interior with a secure zip pocket.",
    details: ["Full-grain Italian leather", "Suede lining", "Interior zip pocket", "H: 35cm x W: 30cm x D: 15cm"],
    isNew: true,
    isBestseller: true,
    rating: 4.9,
    reviews: [
      { id: 901, author: "Chloe R.", rating: 5, date: "2023-12-05", comment: "The leather quality is pristine. It fits my 14-inch laptop seamlessly while looking incredibly chic." },
      { id: 902, author: "Megan F.", rating: 5, date: "2023-12-15", comment: "Structured perfection. The suede inside feels luxurious." }
    ]
  },
  {
    id: 10,
    name: "Emerald Silk Slip Dress",
    price: 285,
    originalPrice: null,
    category: "women",
    type: "dresses",
    color: "Emerald Green",
    sizes: ["XS", "S", "M", "L"],
    image: "/images/product-silk-dress.png",
    images: ["/images/product-silk-dress.png"],
    description: "A masterclass in bias cutting. This silk charmeuse slip dress pours over the body with liquid grace. The deep emerald hue catches light in dramatic ways, perfect for evening wear.",
    details: ["100% Silk Charmeuse", "Bias cut for natural drape", "Adjustable straps", "Dry clean only"],
    isNew: true,
    isBestseller: false,
    rating: 4.8,
    reviews: [
      { id: 1001, author: "Valeria T.", rating: 5, date: "2023-12-18", comment: "The color is mesmerizing, deep and rich. A showstopper dress." },
      { id: 1002, author: "Elena W.", rating: 4, date: "2023-12-20", comment: "Beautiful drape. Delicate fabric so you have to be careful." }
    ]
  },
  {
    id: 11,
    name: "Cashmere Turtleneck",
    price: 295,
    originalPrice: 380,
    category: "men",
    type: "knitwear",
    color: "Charcoal",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/product-turtleneck.png",
    images: ["/images/product-turtleneck.png"],
    description: "The pinnacle of winter comfort. Spun from double-ply grade-A cashmere, this turtleneck offers insulating warmth and an exceptionally soft handle. Features a folded ribbed neck that holds its shape.",
    details: ["100% Grade-A Cashmere", "Double-ply yarn", "Ribbed collar and cuffs", "Hand wash or dry clean"],
    isNew: false,
    isBestseller: true,
    rating: 5.0,
    reviews: [
      { id: 1101, author: "Robert S.", rating: 5, date: "2023-11-22", comment: "Incredibly plush. The charcoal color pairs with everything." }
    ]
  },
  {
    id: 12,
    name: "Tailored Wide-Leg Trousers",
    price: 195,
    originalPrice: 260,
    category: "women",
    type: "trousers",
    color: "Cream",
    sizes: ["XS", "S", "M", "L"],
    image: "/images/product-wide-trousers.png",
    images: ["/images/product-wide-trousers.png"],
    description: "Impeccably tailored from mid-weight virgin wool, these wide-leg trousers feature a high-rise waist and sharp front pleats that elongate the leg. A fluid drape creates a commanding yet elegant silhouette.",
    details: ["Virgin Wool blend", "High-rise fit", "Front pleats", "Dry clean recommended"],
    isNew: true,
    isBestseller: false,
    rating: 4.7,
    reviews: [
      { id: 1201, author: "Jessica H.", rating: 5, date: "2023-10-30", comment: "The fit is immaculate. They pool perfectly over a heel." },
      { id: 1202, author: "Lauren C.", rating: 4, date: "2023-11-15", comment: "Gorgeous pants. I'm 5'4 and had to get them hemmed slightly." }
    ]
  }
];

export const categories = [
  { id: "women", name: "Womenswear", image: "/images/category-women.png" },
  { id: "men", name: "Menswear", image: "/images/category-men.png" },
  { id: "accessories", name: "Objects", image: "/images/category-objects.png" }
];
