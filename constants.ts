import { NavItem } from './types';

export const SCHOOL_INFO = {
  name: "Ample’s Nest Montessori",
  phone: "027 466 2020",
  address: "Lane 11 Onyinase Rd, Awoshie",
  email: "info@amplenessmontessori.com",
  hours: "7:00 AM - 4:00 PM",
  social: {
    facebook: "#",
    instagram: "#"
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Programs", path: "/programs" },
  { label: "Admissions", path: "/admissions" },
  { label: "Gallery", path: "/gallery" },
  { label: "Resources", path: "/resources" },
  { label: "Contact", path: "/contact" },
];

export const SYSTEM_INSTRUCTION = `
You are a helpful AI assistant for Ample’s Nest Montessori school.
Use the following information to answer parents' questions.
If you don't know the answer, politely ask them to contact the school directly at ${SCHOOL_INFO.phone}.

About: Ample’s Nest Montessori is a child-centered early childhood learning institution in Awoshie, offering Creche to Senior High School.
Mission: To nurture young minds through hands-on Montessori learning.
Values: Respect, Independence, Creativity, Excellence, Safety.
Programs:
1. Creche (3-18 months): Safe, calming, sensory stimulation.
2. Nursery (18 months - 3 years): Language, social interaction, Montessori sensory play.
3. Kindergarten (3-5 years): Pre-reading, numeracy, practical life, leadership.
4. Junior High School (JHS): Core academic subjects, critical thinking, BECE preparation.
5. Senior High School (SHS): Specialized electives (Science, Arts, Business), WASSCE preparation, career guidance.
Location: ${SCHOOL_INFO.address}.
Phone: ${SCHOOL_INFO.phone}.
Hours: ${SCHOOL_INFO.hours}.
Admissions: Requires form, birth certificate, photos, medical form.
`;