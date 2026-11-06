import type { StaticImageData } from "next/image";

import heroClassroom from "@/public/images/hero-classroom.webp";
import primaryClassroom from "@/public/images/primary-classroom.webp";
import literacyReading from "@/public/images/literacy-reading.webp";
import secondaryClassroom from "@/public/images/secondary-classroom.webp";
import secondarySmiles from "@/public/images/secondary-smiles.webp";
import scienceLab from "@/public/images/science-lab.webp";
import ictLab from "@/public/images/ict-lab.webp";
import sportsDay from "@/public/images/sports-day.webp";
import footballField from "@/public/images/football-field.webp";
import leadership from "@/public/images/leadership.webp";
import teacherStudents from "@/public/images/teacher-students.webp";
import collaboration from "@/public/images/collaboration.webp";
import writingFocus from "@/public/images/writing-focus.webp";
import assemblyGrounds from "@/public/images/assembly-grounds.webp";
import pupilsSmiling from "@/public/images/pupils-smiling.webp";

/**
 * Locally stored, WebP-optimised photography. Importing statically gives us
 * intrinsic dimensions (zero layout shift) and automatic blur placeholders.
 */
export const images = {
  hero: heroClassroom,
  primaryClassroom,
  literacyReading,
  secondaryClassroom,
  secondarySmiles,
  scienceLab,
  ictLab,
  sportsDay,
  footballField,
  leadership,
  teacherStudents,
  collaboration,
  writingFocus,
  assemblyGrounds,
  pupilsSmiling,
} satisfies Record<string, StaticImageData>;

export type ImageKey = keyof typeof images;
