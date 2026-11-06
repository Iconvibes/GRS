/**
 * Single source of truth for Goodness Royal School content.
 *
 * NOTE: `phone` / `whatsapp` are placeholders — swap in the school's official
 * line before this goes live. Everything else on the site reads from here.
 */

export const school = {
  name: "Goodness Royal School",
  shortName: "Goodness Royal",
  initials: "GRS",
  motto: "Applied Knowledge is Power",
  founded: "Alagbado, Lagos",
  /** Static on purpose: rendered pages are prerendered, so the year is not computed at runtime. */
  copyrightYear: 2026,
  secretary: "Amarachi",
  address: {
    line1: "No. 9, Oluode Oginsado Street",
    line2: "Off Suberu-Oje Road, Casso Bus Stop",
    line3: "Alagbado, Lagos State, Nigeria",
    short: "Casso B/Stop, Off Suberu-Oje Rd, Alagbado",
    landmark: "Casso Bus Stop",
  },
  /**
   * Placeholder contact line. Replace both `display` and `digits`
   * (E.164, no plus sign) with the school's real number.
   */
  phone: {
    display: "+234 800 000 0000",
    digits: "2348000000000",
  },
  hours: {
    weekdays: "7:30am – 4:00pm",
    saturday: "9:00am – 1:00pm (office)",
  },
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "No. 9 Oluode Oginsado Street, Off Suberu-Oje Road, Casso Bus Stop, Alagbado, Lagos",
    ),
} as const;

export function whatsappHref(
  message = `Hello ${school.secretary}, I'd like to ask about admission into ${school.name}.`,
) {
  return `https://wa.me/${school.phone.digits}?text=${encodeURIComponent(message)}`;
}

export function telHref() {
  return `tel:+${school.phone.digits}`;
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Primary", href: "/primary" },
  { label: "Secondary", href: "/secondary" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
] as const;

export const stats = [
  {
    value: "18",
    unit: "pupils max",
    label: "Small, deliberate classes",
    note: "Every child is known by name and tracked term by term.",
  },
  {
    value: "100%",
    unit: "literacy focus",
    label: "Foundational literacy",
    note: "Phonics-first reading and numeracy from the Early Years up.",
  },
  {
    value: "24/7",
    unit: "monitored",
    label: "Safe, gated campus",
    note: "Controlled entry, verified pick-ups and trained class carers.",
  },
  {
    value: "2",
    unit: "labs",
    label: "ICT & science labs",
    note: "Coding, robotics basics and practical science, timetabled weekly.",
  },
] as const;

export const tracks = [
  {
    key: "primary",
    eyebrow: "Early Years · Nursery · Primary",
    title: "Primary School",
    tagline: "Where curiosity becomes confidence.",
    description:
      "A warm, structured start. Phonics-led reading, hands-on numeracy and the manners that make a child easy to teach — all inside a campus small enough for every teacher to know your child.",
    href: "/primary",
    highlights: [
      "Phonics & guided reading daily",
      "Creche and after-school care",
      "Swimming-free, shaded play areas",
    ],
    ageRange: "Ages 2 – 11",
  },
  {
    key: "secondary",
    eyebrow: "Junior & Senior Secondary",
    title: "Secondary School",
    tagline: "Where discipline becomes direction.",
    description:
      "WAEC and NECO built into the timetable from JSS1. Subject specialists, weekly practicals in the science and ICT labs, and a leadership programme that expects pupils to stand up and speak.",
    href: "/secondary",
    highlights: [
      "WAEC / NECO exam preparation",
      "Science & ICT practicals weekly",
      "Leadership, debate & house system",
    ],
    ageRange: "Ages 11 – 17",
  },
] as const;

export const dayInTheLife = [
  {
    key: "early",
    label: "Early Years",
    time: "7:30am – 1:30pm",
    blocks: [
      {
        time: "7:30am",
        title: "Arrival & free play",
        body: "A named carer greets each child at the gate. Soft-start play settles the room before anything is asked of them.",
      },
      {
        time: "8:15am",
        title: "Circle time & phonics",
        body: "Letter sounds, rhymes and story talk — short, repeated, and loud enough to be fun.",
      },
      {
        time: "10:00am",
        title: "Snack & shaded play",
        body: "Washed hands, monitored snack, then outdoor play under the canopy.",
      },
      {
        time: "11:00am",
        title: "Number play & creative corner",
        body: "Counting with real objects, then paint, clay or building before pick-up.",
      },
    ],
  },
  {
    key: "primary",
    label: "Primary",
    time: "7:30am – 3:30pm",
    blocks: [
      {
        time: "7:30am",
        title: "Assembly & devotion",
        body: "The whole school lines up, sings the anthem, hears the motto — Applied Knowledge is Power.",
      },
      {
        time: "8:00am",
        title: "Literacy block",
        body: "Guided reading groups rotate while the teacher takes a focused phonics set.",
      },
      {
        time: "11:00am",
        title: "Numeracy & mental maths",
        body: "Concrete to abstract: counters first, then the sum, then the explanation.",
      },
      {
        time: "1:30pm",
        title: "ICT, French & club period",
        body: "Lab sessions twice a week; clubs run after lunch on Fridays.",
      },
    ],
  },
  {
    key: "secondary",
    label: "Secondary",
    time: "7:30am – 4:00pm",
    blocks: [
      {
        time: "7:30am",
        title: "Assembly & house line-up",
        body: "Prefects take the register. Discipline is visible before the first lesson.",
      },
      {
        time: "8:00am",
        title: "Double-period sciences",
        body: "Theory then practical in the same block, so the apparatus matches the page.",
      },
      {
        time: "12:30pm",
        title: "WAEC-focused tutorials",
        body: "Past-question drills with subject specialists, tracked per pupil.",
      },
      {
        time: "3:00pm",
        title: "Prep, leadership & sports",
        body: "Supervised prep, then debate, JETS club or inter-house sport.",
      },
    ],
  },
] as const;

export const galleryCategories = [
  "All",
  "Classrooms",
  "Science",
  "Sport",
  "Culture",
  "Campus",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const admissionsSteps = [
  {
    step: "01",
    title: "Speak to Amarachi",
    body: "One WhatsApp message or call to the school office. Tell her the class you are considering and your child's age.",
  },
  {
    step: "02",
    title: "Visit the campus",
    body: "Come through Casso Bus Stop and see the classrooms in session. Visits run weekday mornings and take about 40 minutes.",
  },
  {
    step: "03",
    title: "Assessment & placement",
    body: "A short, age-appropriate readiness check for Early Years and Primary; a placement test for Secondary. No cramming required.",
  },
  {
    step: "04",
    title: "Offer & enrolment",
    body: "You receive a written offer, the term prospectus and the uniform list. Places are confirmed once the enrolment form is returned.",
  },
] as const;

export const faqs = [
  {
    q: "What ages do you admit?",
    a: "From around 18 months in the Creche and Early Years, through Nursery and Primary, up to Senior Secondary and WAEC/NECO preparation.",
  },
  {
    q: "How large are the classes?",
    a: "We cap classes at 18 pupils. Small classes are the reason our teachers can track reading and numeracy progress term by term.",
  },
  {
    q: "Do you offer after-school care?",
    a: "Yes. Supervised after-school care runs on weekdays for working parents, with homework support and a snack.",
  },
  {
    q: "How do we get to the school?",
    a: "No. 9, Oluode Oginsado Street sits just off Suberu-Oje Road, a short walk from Casso Bus Stop in Alagbado. Keke and bus routes along Suberu-Oje Road stop at Casso.",
  },
  {
    q: "When does admission open?",
    a: "Admission runs all year, with the main intake in September and a smaller January intake. Early enquiries get first pick of places.",
  },
] as const;
