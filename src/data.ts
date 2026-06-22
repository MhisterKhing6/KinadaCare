import type {
  Benefit,
  CompanyValue,
  JobRole,
  OfficeLocation,
  ServiceCategory,
  ValueProp,
} from './types';

export const serviceCategories: ServiceCategory[] = [
  {
    num: '01',
    title: 'Private Duty Nursing',
    blurb:
      'One-on-one skilled nursing care for patients of all ages at home, especially for chronic, complex medical conditions.',
    preview: ['Ventilator Care', 'Tracheostomy Care', 'IV / Infusion Therapies'],
    more: 8,
    items: [
      {
        name: 'Ventilator Care',
        desc: 'Skilled management of ventilator-dependent patients at home.',
      },
      {
        name: 'Tracheostomy Care',
        desc: 'Specialized airway and trach management by trained nurses.',
      },
      {
        name: 'Medication Management',
        desc: 'Right medications, right doses, safely administered and tracked.',
      },
      {
        name: 'Pain & Disability Management',
        desc: 'Comfort-focused care for pain and complex disability.',
      },
      {
        name: 'IV / Infusion Therapies',
        desc: 'Professional IV medication and fluid therapy at home.',
      },
      {
        name: 'Injections & Medication Administration',
        desc: 'Safe administration and ongoing management of medications.',
      },
      { name: 'Post-Operative Care', desc: 'Attentive recovery support after surgery.' },
      {
        name: 'Gastrostomy Care / Feeds',
        desc: 'G-tube care and safe enteral feeding support.',
      },
      { name: 'Wound Care', desc: 'Advanced wound treatment for faster, safer healing.' },
      {
        name: 'Patient Education',
        desc: 'Guidance so families can confidently take part in care.',
      },
      {
        name: 'Chronic Disease Management',
        desc: 'Ongoing monitoring and support for long-term conditions.',
      },
    ],
  },
  {
    num: '02',
    title: 'Personal Assistance',
    blurb:
      'Non-medical help with activities of daily living for patients with disabilities or chronic illness.',
    preview: ['Bathing & Grooming', 'Cooking & Meal Prep', 'Shopping Assistance'],
    more: 4,
    items: [
      { name: 'Bathing & Grooming', desc: 'Respectful help with bathing, grooming and hygiene.' },
      { name: 'Dressing & Toileting', desc: 'Dignified assistance with dressing and toileting.' },
      { name: 'Cooking & Meal Prep', desc: 'Meal planning and preparation assistance.' },
      { name: 'Shopping Assistance', desc: 'Grocery shopping and everyday errands.' },
      {
        name: 'Laundry & Light Housekeeping',
        desc: 'Laundry and tidying of bedroom and living areas.',
      },
      { name: 'DME Assistance', desc: 'Setup and guidance for durable medical equipment.' },
      { name: 'Non-Medical Transportation', desc: 'Safe rides to appointments and errands.' },
    ],
  },
  {
    num: '03',
    title: 'Skilled Nursing',
    blurb: 'Clinical home health care and therapy delivered by licensed professionals.',
    preview: ['Wound Care / VAC', 'Physical Therapy', 'Home Infusion Therapy'],
    more: 8,
    items: [
      {
        name: 'Wound Care / VAC',
        desc: 'Advanced wound treatment and VAC therapy for faster healing.',
      },
      {
        name: 'Medication Management / Monitoring',
        desc: 'Right medications, right doses, safely tracked.',
      },
      {
        name: 'Physical Therapy',
        desc: 'Rebuild strength, balance and mobility after illness or surgery.',
      },
      { name: 'Occupational Therapy', desc: 'Regain the daily skills that keep life independent.' },
      { name: 'Speech Therapy', desc: 'Support for speech, swallowing and communication.' },
      { name: 'Home Infusion Therapy', desc: 'Hospital-grade infusions in the comfort of home.' },
      {
        name: 'Diabetic Care / Insulin Pumps',
        desc: 'Blood-sugar management and insulin pump support.',
      },
      {
        name: 'Urinary Catheter Care',
        desc: 'Safe catheter changes, hygiene and infection prevention.',
      },
      {
        name: 'CHF / COPD / Cardiac',
        desc: 'Close monitoring for heart and respiratory conditions.',
      },
      {
        name: 'PT / INR Monitoring',
        desc: 'Regular blood monitoring for clients on blood thinners.',
      },
      { name: 'TPN Management', desc: 'Safe administration and monitoring of IV nutrition.' },
    ],
  },
];

export const valueProps: ValueProp[] = [
  {
    num: '01',
    title: 'Personalized care plans',
    desc: 'Built around your loved one’s specific needs and routine.',
  },
  {
    num: '02',
    title: 'Skilled, kind caregivers',
    desc: 'Credentialed nurses, therapists and aides who lead with compassion.',
  },
  {
    num: '03',
    title: 'There when you need us',
    desc: 'Flexible scheduling and dependable, consistent care.',
  },
  {
    num: '04',
    title: 'Family kept informed',
    desc: 'Clear, honest communication every step of the way.',
  },
];

export const companyValues: CompanyValue[] = [
  {
    num: '01',
    title: 'Compassion',
    desc: 'We treat every client like family, with patience and warmth.',
  },
  {
    num: '02',
    title: 'Excellence',
    desc: 'Skilled, credentialed caregivers delivering professional care.',
  },
  {
    num: '03',
    title: 'Integrity',
    desc: 'Honest, transparent communication you can always trust.',
  },
  {
    num: '04',
    title: 'Professional',
    desc: 'Skilled, credentialed caregivers held to the highest standards.',
  },
];

export const locations: OfficeLocation[] = [
  {
    label: 'Magnolia Office',
    city: 'Magnolia, TX',
    line1: '506 Honea Egypt Rd, Suite 955',
    line2: 'Magnolia, TX 77354',
  },
];

export const jobRoles: JobRole[] = [
  {
    title: 'Registered Nurse (RN)',
    type: 'Full-time / PRN',
    blurb: 'Lead clinical care and skilled nursing visits.',
  },
  {
    title: 'Licensed Vocational Nurse (LVN)',
    type: 'Full-time / PRN',
    blurb: 'Deliver hands-on nursing care under RN supervision.',
  },
  {
    title: 'Certified Nursing Aide / Home Health Aide',
    type: 'Flexible shifts',
    blurb: 'Support clients with daily living and personal care.',
  },
  {
    title: 'Physical / Occupational / Speech Therapist',
    type: 'Contract / PRN',
    blurb: 'Help clients regain mobility, skills and communication.',
  },
  {
    title: 'Personal Care Attendant',
    type: 'Part-time / Full-time',
    blurb: 'Provide companionship and everyday support at home.',
  },
];

export const benefits: Benefit[] = [
  { title: 'Competitive pay', desc: 'Compensation that reflects the value of your work.' },
  { title: 'Flexible scheduling', desc: 'Shifts that fit around your life and commitments.' },
  {
    title: 'Ongoing training',
    desc: 'Grow your skills with continued education and support.',
  },
  {
    title: 'A supportive team',
    desc: 'Work alongside people who genuinely care about clients and each other.',
  },
];
