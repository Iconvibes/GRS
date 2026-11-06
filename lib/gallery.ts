import type { StaticImageData } from "next/image";
import { galleryCategories } from "@/lib/school";
import { images } from "@/lib/images";

export type GalleryCategory = Exclude<(typeof galleryCategories)[number], "All">;

export type GalleryItem = {
  src: StaticImageData;
  alt: string;
  caption: string;
  category: GalleryCategory;
  tall?: boolean;
};

/**
 * Campus life gallery. Photography is licensed placeholder imagery —
 * replace `src` with real school photographs before launch.
 */
export const galleryItems: GalleryItem[] = [
  {
    src: images.hero,
    alt: "Pupils in blue and white uniforms working at wooden desks in a bright classroom",
    caption: "Morning literacy block",
    category: "Classrooms",
    tall: true,
  },
  {
    src: images.scienceLab,
    alt: "Students standing at laboratory benches working with science apparatus",
    caption: "Practical science, timetabled weekly",
    category: "Science",
  },
  {
    src: images.sportsDay,
    alt: "Children in red sports vests running across the school field",
    caption: "Inter-house sports day",
    category: "Sport",
  },
  {
    src: images.assemblyGrounds,
    alt: "Pupils in uniform lined up on the school grounds during morning assembly",
    caption: "Morning assembly",
    category: "Culture",
    tall: true,
  },
  {
    src: images.ictLab,
    alt: "A full class of pupils working on laptops in the school ICT room",
    caption: "ICT & coding lab",
    category: "Science",
  },
  {
    src: images.pupilsSmiling,
    alt: "Smiling pupils in uniform looking up from their desks",
    caption: "Break time in the juniors",
    category: "Culture",
  },
  {
    src: images.secondaryClassroom,
    alt: "Secondary pupils in white uniforms seated at desks during a lesson",
    caption: "JSS2 during a double period",
    category: "Classrooms",
  },
  {
    src: images.footballField,
    alt: "Children playing football on the school pitch during games period",
    caption: "Games period",
    category: "Sport",
    tall: true,
  },
  {
    src: images.literacyReading,
    alt: "Young pupils holding open textbooks and reading together in class",
    caption: "Guided reading",
    category: "Classrooms",
  },
  {
    src: images.writingFocus,
    alt: "Pupils concentrating on their notebooks during a writing exercise",
    caption: "Focused work",
    category: "Classrooms",
  },
  {
    src: images.teacherStudents,
    alt: "A group of students standing with their teacher in the school compound",
    caption: "House leaders with their teacher",
    category: "Campus",
  },
  {
    src: images.collaboration,
    alt: "Two students discussing their work in class",
    caption: "Peer study groups",
    category: "Classrooms",
  },
  {
    src: images.secondarySmiles,
    alt: "Three secondary students smiling together in their classroom",
    caption: "Senior secondary form",
    category: "Culture",
  },
  {
    src: images.leadership,
    alt: "A teacher smiling with her class in a bright classroom",
    caption: "Teaching staff on duty",
    category: "Campus",
  },
  {
    src: images.primaryClassroom,
    alt: "Two young pupils raising their hands at their desk",
    caption: "Primary hands up",
    category: "Classrooms",
  },
];
