import fs from "fs";
import path from "path";

/**
 * Builds the downloadable term prospectus PDF.
 * Kept dependency-free: writes a minimal, valid PDF 1.4 by hand.
 */
const PAGE_W = 595;
const PAGE_H = 842;
const MARGIN = 56;
const WIDTH = PAGE_W - MARGIN * 2;

const INK = "0.059 0.090 0.165";
const ROYAL = "0.118 0.227 0.541";
const AMBER = "0.961 0.620 0.043";
const GREY = "0.35 0.38 0.44";

function esc(text) {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/[—–]/g, "-")
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/·/g, "-")
    // Strip anything outside Latin-1 so the standard fonts can render it.
    .replace(/[^\x20-\x7E\xA0-\xFF]/g, "");
}

function text(x, y, size, font, value, color = INK) {
  return `BT ${color} rg /${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${esc(value)}) Tj ET`;
}

function rule(x1, y, x2, color = "0.85 0.86 0.88", weight = 0.7) {
  return `${weight} w ${color} RG ${x1} ${y} m ${x2} ${y} l S`;
}

function wrap(value, size, width = WIDTH, factor = 0.5) {
  const max = Math.floor(width / (size * factor));
  const words = value.split(/\s+/);
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function paragraph(x, y, size, value, options = {}) {
  const { font = "F1", color = GREY, leading = 1.55, width = WIDTH } = options;
  const cmds = [];
  const lines = wrap(value, size, width);
  let cursor = y;
  for (const line of lines) {
    cmds.push(text(x, cursor, size, font, line, color));
    cursor -= size * leading;
  }
  return { cmds, y: cursor };
}

/* ---------------- page one ---------------- */
const p1 = [];
p1.push(`0 0 0 rg ${MARGIN} ${PAGE_H - 150} ${WIDTH} 4 re f`);
p1.push(text(MARGIN, PAGE_H - 96, 11, "F2", "GOODNESS ROYAL SCHOOL", AMBER));
p1.push(text(MARGIN, PAGE_H - 132, 27, "F2", "Term Prospectus", INK));
p1.push(text(MARGIN, PAGE_H - 154, 11.5, "F3", "Applied Knowledge is Power", ROYAL));
p1.push(rule(MARGIN, PAGE_H - 176, PAGE_W - MARGIN));

let y = PAGE_H - 210;
p1.push(text(MARGIN, y, 8.5, "F2", "CRECHE  -  NURSERY  -  PRIMARY  -  SECONDARY", GREY));
y -= 18;
p1.push(
  text(
    MARGIN,
    y,
    8.5,
    "F1",
    "No. 9, Oluode Oginsado Street, Off Suberu-Oje Road, Casso Bus Stop, Alagbado, Lagos State",
    GREY,
  ),
);
y -= 40;

p1.push(text(MARGIN, y, 12, "F2", "About the school", INK));
y -= 18;
const about = paragraph(
  MARGIN,
  y,
  9.5,
  "Goodness Royal School is a deliberately small, co-educational school in Alagbado, Lagos. Classes are capped at eighteen pupils so that teachers can hear every child read, mark every piece of work and report progress in plain language to parents. The school runs a full Creche, Nursery, Primary and Secondary programme, with the motto - Applied Knowledge is Power - treated as a daily instruction rather than a slogan.",
);
p1.push(...about.cmds);
y = about.y - 24;

p1.push(text(MARGIN, y, 12, "F2", "Levels offered", INK));
y -= 20;

const levels = [
  ["Creche & Early Years", "From about 18 months. Settling, play, language and routine in a named carer group."],
  ["Nursery", "Phonics, number play, creative work and the social habits that make Primary easier."],
  ["Primary", "Daily guided reading, hands-on numeracy, ICT, French and supervised after-school care."],
  ["Junior Secondary", "A broad JSS curriculum with BECE readiness built in from JSS2."],
  ["Senior Secondary", "Science, commercial and arts streams with WAEC and NECO preparation from SS2."],
];

for (const [title, body] of levels) {
  p1.push(text(MARGIN, y, 9.5, "F2", title, INK));
  const block = paragraph(MARGIN + 130, y, 9, body, { width: WIDTH - 130 });
  p1.push(...block.cmds);
  y = Math.min(block.y, y - 12) - 12;
}

y -= 6;
p1.push(rule(MARGIN, y, PAGE_W - MARGIN));
y -= 26;
p1.push(text(MARGIN, y, 12, "F2", "How to apply", INK));
y -= 18;
const steps = [
  "1. Speak to Amarachi in the school office by WhatsApp or telephone.",
  "2. Visit the campus on a weekday morning while lessons are running.",
  "3. Complete a short readiness check (Early Years / Primary) or placement test (Secondary).",
  "4. Accept the written offer and return the enrolment form with the required documents.",
];
for (const step of steps) {
  p1.push(text(MARGIN, y, 9.5, "F1", step, GREY));
  y -= 17;
}

/* ---------------- page two ---------------- */
const p2 = [];
p2.push(`0 0 0 rg ${MARGIN} ${PAGE_H - 96} ${WIDTH} 3 re f`);
p2.push(text(MARGIN, PAGE_H - 86, 9, "F2", "GOODNESS ROYAL SCHOOL - TERM PROSPECTUS", GREY));
y = PAGE_H - 130;

p2.push(text(MARGIN, y, 12, "F2", "Documents required at enrolment", INK));
y -= 20;
const documents = [
  "Birth certificate or sworn age declaration",
  "Most recent school report card (Primary and Secondary)",
  "Two passport photographs of the child",
  "Transfer certificate, where applicable",
  "Parent or guardian phone number and residential address",
];
for (const doc of documents) {
  p2.push(text(MARGIN, y, 9.5, "F1", `-  ${doc}`, GREY));
  y -= 17;
}

y -= 18;
p2.push(text(MARGIN, y, 12, "F2", "Fees, terms and uniforms", INK));
y -= 18;
const fees = paragraph(
  MARGIN,
  y,
  9.5,
  "The fee schedule, term dates and uniform list are issued in writing with this prospectus. Fees are quoted per class and per term, and are confirmed by the school office before any payment is made. Please request the current figures for the class you are considering.",
);
p2.push(...fees.cmds);
y = fees.y - 26;

p2.push(text(MARGIN, y, 12, "F2", "A typical school day", INK));
y -= 20;
const day = [
  ["7:30am", "Arrival, assembly and devotion"],
  ["8:00am", "Literacy and numeracy blocks"],
  ["10:30am", "Snack and supervised play"],
  ["12:00pm", "Lunch and rest"],
  ["1:00pm", "ICT, French, creative arts and clubs"],
  ["2:30pm", "Prep, homework support and after-school care"],
];
for (const [time, activity] of day) {
  p2.push(text(MARGIN, y, 9.5, "F2", time, ROYAL));
  p2.push(text(MARGIN + 70, y, 9.5, "F1", activity, GREY));
  y -= 17;
}

y -= 22;
p2.push(`0.96 0.62 0.04 rg ${MARGIN} ${y - 96} ${WIDTH} 92 re f`);
p2.push(text(MARGIN + 20, y - 28, 10, "F2", "Speak to the school office", INK));
p2.push(text(MARGIN + 20, y - 46, 9, "F1", "Amarachi - Secretary, Goodness Royal School", INK));
p2.push(text(MARGIN + 20, y - 63, 9, "F1", "Telephone / WhatsApp: +234 800 000 0000", INK));
p2.push(
  text(MARGIN + 20, y - 80, 9, "F1", "Office hours: Monday to Friday, 7:30am - 4:00pm", INK),
);

y -= 130;
p2.push(
  text(
    MARGIN,
    y,
    7.5,
    "F1",
    "Illustrative prospectus. Fees, term dates and staffing are confirmed by the school office.",
    GREY,
  ),
);
p2.push(
  text(MARGIN, y - 12, 7.5, "F1", "Goodness Royal School - Alagbado, Lagos State, Nigeria.", GREY),
);

/* ---------------- assemble ---------------- */
const objects = [
  { id: 1, body: "<< /Type /Catalog /Pages 2 0 R >>" },
  { id: 2, body: "<< /Type /Pages /Kids [3 0 R 5 0 R] /Count 2 >>" },
  {
    id: 3,
    body: `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources << /Font << /F1 7 0 R /F2 8 0 R /F3 9 0 R >> >> /Contents 4 0 R >>`,
  },
  { id: 4, body: "" },
  {
    id: 5,
    body: `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] /Resources << /Font << /F1 7 0 R /F2 8 0 R /F3 9 0 R >> >> /Contents 6 0 R >>`,
  },
  { id: 6, body: "" },
  { id: 7, body: "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>" },
  { id: 8, body: "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>" },
  { id: 9, body: "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique /Encoding /WinAnsiEncoding >>" },
];

const streamFor = (cmds) => {
  const content = cmds.join("\n");
  return `<< /Length ${Buffer.byteLength(content, "latin1")} >>\nstream\n${content}\nendstream`;
};

objects[3].body = streamFor(p1);
objects[5].body = streamFor(p2);

const chunks = [];
let offset = 0;
const push = (value) => {
  const buf = Buffer.from(value, "latin1");
  chunks.push(buf);
  offset += buf.length;
};

push("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n");

const offsets = [];
for (const object of objects) {
  offsets[object.id] = offset;
  push(`${object.id} 0 obj\n${object.body}\nendobj\n`);
}

const xrefStart = offset;
const maxId = objects.length;
push(`xref\n0 ${maxId + 1}\n`);
push("0000000000 65535 f \n");
for (let id = 1; id <= maxId; id += 1) {
  push(`${String(offsets[id]).padStart(10, "0")} 00000 n \n`);
}
push(`trailer\n<< /Size ${maxId + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`);

const out = path.join(process.cwd(), "public", "goodness-royal-prospectus.pdf");
fs.writeFileSync(out, Buffer.concat(chunks));
console.log("wrote", out, fs.statSync(out).size, "bytes");
