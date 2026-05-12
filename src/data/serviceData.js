export const SERVICE_DETAILS = [
  {
    id: "catering",
    title: "Catering",
    tagline: "Grand feasts, intimately crafted",
    img: "https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&q=80",
    intro:
      "From intimate family gatherings to grand wedding receptions — we craft an authentic Gujarati feast your guests will cherish for years. Every plate carries three generations of tradition.",
    featuresHeading: "What You Get from Our Catering Services:",
    features: [
      {
        title: "Authentic Gujarati Menu",
        desc: "Slow-simmered dals, hand-rolled rotis, seasonal vegetables, and traditional sweets prepared with recipes passed down through three generations of our family.",
      },
      {
        title: "Customised Thali Setup",
        desc: "Every event gets a thoughtfully curated thali. We work with you to tailor the menu to your occasion, dietary needs, and guest count — no two events are the same.",
      },
      {
        title: "Fresh Ingredients, Daily",
        desc: "We source local, seasonal produce every morning. No frozen shortcuts, no compromise on quality — what reaches your guests' plates was fresh that morning.",
      },
      {
        title: "Scalable for Any Size",
        desc: "Whether it's 25 or 2,500 guests, our kitchen and service teams scale seamlessly without losing the craft or warmth that defines every Haribhai meal.",
      },
      {
        title: "Seamless Setup & Service",
        desc: "Our crew handles everything — from kitchen setup and serving to post-event breakdown — so you can stay fully present for your celebration.",
      },
    ],
  },
  {
    id: "displays",
    title: "Displays",
    tagline: "Visual feasts as beautiful as they are delicious",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    intro:
      "Elegant live stations and curated food displays that turn every spread into a visual and culinary experience worth remembering. We design spreads that guests gather around and talk about long after.",
    featuresHeading: "What You Get from Our Display Services:",
    features: [
      {
        title: "Live Cooking Stations",
        desc: "Watch our chefs prepare fresh dosas, chaats, or traditional sweets right before your guests' eyes — a spectacle as much as a meal that draws people together.",
      },
      {
        title: "Curated Grazing Tables",
        desc: "Artfully arranged spreads of snacks, sweets, and seasonal bites that guests explore at their own pace, creating natural conversation and connection.",
      },
      {
        title: "Themed Display Styling",
        desc: "We coordinate the display aesthetic with your event theme — flowers, linens, hand-written signage, and serving ware are all part of our service.",
      },
      {
        title: "Dietary Labelling & Accommodation",
        desc: "Every display is clearly labelled with key ingredients and can include Jain, vegan, and gluten-aware options so all guests feel welcome and catered for.",
      },
      {
        title: "Continuous Replenishment",
        desc: "Our team monitors every station throughout the event — displays are kept full, tidy, and inviting from the first guest to the last.",
      },
    ],
  },
  {
    id: "waiters",
    title: "Waiters",
    tagline: "Attentive service, from first course to last",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80",
    intro:
      "Trained, courteous service staff who understand the rhythm of an event and ensure every guest feels looked after from the first course to the last. Great food deserves great service.",
    featuresHeading: "What You Get from Our Waiter Services:",
    features: [
      {
        title: "Trained & Uniformed Staff",
        desc: "All service personnel are trained in formal dining etiquette, dressed neatly, and briefed on your specific event needs — professional without being stiff.",
      },
      {
        title: "Guest-First Approach",
        desc: "Our servers are attentive without being intrusive. They read the room, adapt to the pace of your celebration, and anticipate needs before guests ask.",
      },
      {
        title: "Pre-Event Briefing",
        desc: "Every team is fully briefed on the menu, dietary requirements, and event timeline before a single guest arrives — no surprises, only smooth service.",
      },
      {
        title: "Full Setup & Breakdown",
        desc: "Our staff arrives early to set tables, arrange service ware, and prepare the space. They stay until the last dish is cleared and the venue is left tidy.",
      },
      {
        title: "Flexible Staffing Ratios",
        desc: "From intimate dinners of 20 to large banquets of 2,000, we provide the right number of servers to ensure seamless, attentive coverage throughout.",
      },
    ],
  },
];

export function getServiceById(id) {
  return SERVICE_DETAILS.find((s) => s.id === id) || null;
}
