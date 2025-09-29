"use client";

import type React from "react";
import { useEffect } from "react";

// --- INTERFACES ---

interface Reference {
  id: string;
  url: string;
  title: string;
  description?: string;
}

interface PersonalInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  phone: string;
  github?: string;
  linkedin?: string;
  website?: string;
}

interface Education {
  institution: string;
  location: string;
  degree?: string;
  concentration?: string;
  gpa?: string;
  graduationDate: string;
  coursework?: string;
  thesis?: string;
  honors?: string[];
  studyAbroad?: {
    program: string;
    location: string;
    period: string;
    coursework?: string;
  };
  type: "university" | "high-school";
}

interface Experience {
  organization: string;
  position: string;
  location: string;
  period: string;
  description?: string;
  accomplishments?: string[];
  link?: string;
  reference?: Reference;
  references?: Reference[];
}

interface Activity {
  organization: string;
  role: string;
  location: string;
  period: string;
  description?: string;
  accomplishments?: string[];
  reference?: Reference;
  references?: Reference[];
}

interface Skills {
  technical?: {
    category: string;
    skills: string[];
    level: string;
  }[];
  languages?: {
    language: string;
    fluency: string;
  }[];
  laboratory?: string[];
  interests?: string[];
}

// --- DATA ---

const personalInfo: PersonalInfo = {
  name: "Ana Clara Rodrigues",
  address: "Rua das Flores, 123, Apt 45",
  city: "São Paulo",
  state: "SP",
  zip: "01234-567",
  email: "ana.rodrigues@usp.br",
  phone: "+55 (11) 98765-4321",
  github: "github.com/anaclara-rodrigues",
  linkedin: "linkedin.com/in/anaclararodrigues",
  website: "anaclararodrigues.dev",
};

const educationData: Education[] = [
  {
    institution: "Universidade de São Paulo (USP)",
    location: "São Paulo, SP",
    degree: "Bachelor of Science",
    concentration: "Computer Science and Engineering",
    gpa: "8.9/10.0",
    graduationDate: "May 2024",
    coursework:
      "Algorithms and Data Structures, Machine Learning, Software Engineering, Database Systems, Computer Networks, Artificial Intelligence",
    thesis:
      "Deep Learning Applications in Medical Image Analysis: A Comparative Study of CNN Architectures",
    honors: [
      "Magna Cum Laude",
      "Dean's List (6 semesters)",
      "Outstanding Academic Achievement Award 2023",
    ],
    studyAbroad: {
      program: "Computer Science Exchange Program",
      location: "Madrid, Spain",
      period: "January 2023 – June 2023",
      coursework:
        "Advanced Algorithms, Distributed Systems, European Tech Innovation",
    },
    type: "university",
  },
  {
    institution: "Colégio São Bento",
    location: "São Paulo, SP",
    graduationDate: "December 2019",
    honors: [
      "Valedictorian",
      "National Mathematics Olympiad - Gold Medal",
      "SAT Score: 1520/1600",
    ],
    type: "high-school",
  },
];

const experiencesData: Experience[] = [
  {
    organization: "Meta Brasil",
    position: "Software Engineering Intern",
    location: "São Paulo, SP",
    period: "June 2023 – August 2023",
    description:
      "Developed and optimized React-based user interfaces for Meta's advertising platform, serving over 100,000 daily active users across Latin America. Collaborated with cross-functional teams to implement new features and improve system performance.",
    accomplishments: [
      "Reduced page load times by 35% through implementation of advanced caching strategies and code splitting techniques",
      "Built automated testing suite covering 90% of component functionality, reducing production bugs by 45%",
      "Mentored 3 junior interns in React best practices and contributed to team knowledge-sharing sessions",
      "Implemented accessibility features following WCAG 2.1 guidelines, improving platform usability for 15,000+ users with disabilities",
    ],
    link: "https://meta.com",
    reference: {
      id: "meta-internship",
      url: "https://meta.com/careers/students-and-grads/",
      title: "Meta Software Engineering Internship Program",
      description: "Official Meta internship program page",
    },
  },
  {
    organization: "USP Institute for Advanced Studies",
    position: "Research Assistant - AI Laboratory",
    location: "São Paulo, SP",
    period: "March 2022 – December 2022",
    description:
      "Conducted cutting-edge research in computer vision and deep learning applications for medical diagnosis under Dr. Maria Santos. Collaborated with Hospital das Clínicas to develop AI-powered diagnostic tools.",
    accomplishments: [
      "Co-authored 2 peer-reviewed papers published in IEEE conferences on medical image analysis",
      "Developed convolutional neural network achieving 94.2% accuracy in early-stage tumor detection",
      "Managed and preprocessed dataset of 50,000+ medical images using Python and TensorFlow",
      "Presented research findings at 3 international conferences, receiving Best Student Paper Award at CBMS 2022",
    ],
    references: [
      {
        id: "usp-research",
        url: "https://www5.usp.br/",
        title: "University of São Paulo - Advanced Studies Institute",
        description: "Research institution and academic programs",
      },
      {
        id: "ieee-paper-1",
        url: "https://ieeexplore.ieee.org/",
        title:
          "Deep Learning for Medical Image Segmentation: A Comparative Study",
        description:
          "IEEE Conference on Bioinformatics and Biomedicine (CBMS) 2022",
      },
      {
        id: "ieee-paper-2",
        url: "https://ieeexplore.ieee.org/",
        title:
          "CNN Architectures for Early-Stage Tumor Detection in Medical Imaging",
        description:
          "IEEE International Conference on Healthcare Informatics 2022",
      },
    ],
  },
  {
    organization: "TechStart Accelerator",
    position: "Full-Stack Developer",
    location: "São Paulo, SP (Hybrid)",
    period: "January 2021 – February 2022",
    description:
      "Led development of web applications for 8 early-stage startups in the accelerator program. Managed entire development lifecycle from conception to deployment, working directly with founders and stakeholders.",
    accomplishments: [
      "Built 12 responsive web applications using React, Node.js, and PostgreSQL, supporting over 25,000 combined users",
      "Implemented e-commerce solutions that generated R$2.5 million in revenue for client startups",
      "Designed and developed RESTful APIs handling 1 million+ requests per month with 99.9% uptime",
      "Established development best practices and CI/CD pipelines, reducing deployment time by 60%",
    ],
    reference: {
      id: "techstart-accelerator",
      url: "https://techstart.com.br",
      title: "TechStart Accelerator",
      description: "Leading startup accelerator in Brazil",
    },
  },
];

const leadershipData: Activity[] = [
  {
    organization: "Google Developer Student Club - USP",
    role: "President and Technical Lead",
    location: "São Paulo, SP",
    period: "August 2022 – May 2024",
    description:
      "Led the largest tech student organization at USP with 400+ active members. Organized technical workshops, hackathons, and industry networking events to bridge the gap between academia and industry.",
    accomplishments: [
      "Organized 25+ technical workshops reaching 2,000+ students in web development, mobile apps, and cloud computing",
      "Led annual hackathon with 350 participants and R$50,000 in prizes, resulting in 5 startup launches",
      "Established partnerships with Google, Microsoft, and AWS, securing R$100,000 in cloud credits for student projects",
      "Created mentorship program pairing 150 underclassmen with industry professionals",
    ],
    reference: {
      id: "gdsc-program",
      url: "https://developers.google.com/community/gdsc",
      title: "Google Developer Student Clubs Program",
      description: "Official Google program for university students",
    },
  },
  {
    organization: "Women in Technology - USP Chapter",
    role: "Vice President and Outreach Coordinator",
    location: "São Paulo, SP",
    period: "February 2021 – July 2023",
    description:
      "Promoted diversity and inclusion in STEM fields through educational initiatives and mentorship programs. Focused on increasing female representation in computer science and engineering programs.",
    accomplishments: [
      "Increased female enrollment in CS program by 40% through targeted outreach to high schools",
      "Organized monthly industry panels featuring 50+ female tech leaders and entrepreneurs",
      "Launched scholarship fund raising R$80,000 for underrepresented students in technology",
      "Coordinated career fair connecting 200+ students with internship and job opportunities",
    ],
  },
  {
    organization: "IEEE Student Branch - USP",
    role: "Secretary and Event Coordinator",
    location: "São Paulo, SP",
    period: "March 2020 – December 2021",
    accomplishments: [
      "Coordinated 15 technical seminars and conferences with 100+ attendees each",
      "Managed chapter finances and increased membership by 85% during tenure",
      "Organized study groups for IEEE certification exams with 95% pass rate",
    ],
  },
];

const skillsData: Skills = {
  technical: [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript/TypeScript", "Java", "C++"],
      level: "Advanced",
    },
    {
      category: "Web Technologies",
      skills: ["React", "Node.js", "HTML5/CSS3", "REST APIs"],
      level: "Advanced",
    },
    {
      category: "Data & AI",
      skills: ["TensorFlow", "PyTorch", "Pandas", "SQL", "MongoDB"],
      level: "Proficient",
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Git", "CI/CD", "Linux"],
      level: "Proficient",
    },
  ],
  languages: [
    { language: "Portuguese", fluency: "Native" },
    { language: "English", fluency: "Advanced (C2)" },
    { language: "Spanish", fluency: "Intermediate (B2)" },
    { language: "German", fluency: "Basic (A2)" },
  ],
  laboratory: [
    "PCR and gel electrophoresis",
    "Cell culture techniques",
    "Microscopy and imaging",
    "Spectrophotometry",
    "Data analysis software (R, SPSS)",
  ],
  interests: [
    "Machine Learning research",
    "Open source contributing",
    "Rock climbing and hiking",
    "Classical guitar",
    "Travel photography",
    "Sustainable technology",
  ],
};

// --- COMPONENTS ---

const Header: React.FC<PersonalInfo> = (props) => {
  const fullAddress = `${props.address} • ${props.city}, ${props.state} ${props.zip}`;
  return (
    <header className="text-center pb-4 border-b border-gray-200">
      <h1 className="text-2xl md:text-3xl font-bold mb-2">{props.name}</h1>
      <div className="text-[12px] space-y-1">
        <div>
          {fullAddress} • {props.email}
        </div>
        <div className="flex justify-center items-center space-x-4">
          <span>{props.phone}</span>
          {props.github && (
            <>
              <span>•</span>
              <span>{props.github}</span>
            </>
          )}
          {props.linkedin && (
            <>
              <span>•</span>
              <span>{props.linkedin}</span>
            </>
          )}
          {props.website && (
            <>
              <span>•</span>
              <span>{props.website}</span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

const EducationSection: React.FC<{ education: Education[] }> = ({
  education,
}) => (
  <section className="mt-6 avoid-break">
    <h2 className="section-title">Education</h2>
    {education.map((edu, index) => (
      <div
        key={`${edu.institution}-${edu.graduationDate}`}
        className={index > 0 ? "mt-4" : "mt-2"}
      >
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="font-bold">{edu.institution}</div>
            {(edu.degree || edu.concentration || edu.gpa) && (
              <div className="text-[12px] mt-1">
                {edu.degree && <span>{edu.degree}</span>}
                {edu.concentration && (
                  <span>
                    {edu.degree ? ", " : ""}
                    {edu.concentration}
                  </span>
                )}
                {edu.gpa && <span>. GPA {edu.gpa}</span>}
              </div>
            )}
            {(edu.coursework || edu.thesis) && (
              <div className="text-[12px] mt-1">
                {edu.coursework && (
                  <div>Relevant Coursework: {edu.coursework}</div>
                )}
                {edu.thesis && <div>Thesis: {edu.thesis}</div>}
              </div>
            )}
            {edu.honors && edu.honors.length > 0 && (
              <div className="text-[12px] mt-1">{edu.honors.join(", ")}</div>
            )}
          </div>
          <div className="text-right ml-4">
            <div className="text-[12px]">{edu.location}</div>
            <div className="text-[11px]">{edu.graduationDate}</div>
          </div>
        </div>
        {edu.studyAbroad && (
          <div className="mt-3 pl-4 border-l-2 border-gray-200">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="font-semibold">{edu.studyAbroad.program}</div>
                {edu.studyAbroad.coursework && (
                  <div className="text-[12px] mt-1">
                    Study Abroad coursework in {edu.studyAbroad.coursework}
                  </div>
                )}
              </div>
              <div className="text-right ml-4">
                <div className="text-[12px]">{edu.studyAbroad.location}</div>
                <div className="text-[11px]">{edu.studyAbroad.period}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    ))}
  </section>
);

const Citation: React.FC<{ refId: string; refIndex: number }> = ({
  refId,
  refIndex,
}) => (
  <a
    href={`#ref-${refId}`}
    className="citation-link text-ink hover:text-gray-600 text-[10px] font-bold no-underline ml-0.5"
    style={{ verticalAlign: "super", fontSize: "0.625rem", lineHeight: 1 }}
    title="Ver referência"
  >
    [{refIndex}]
  </a>
);

const ExperienceSection: React.FC<{
  experiences: Experience[];
  getRefIndex: (refId: string) => number;
}> = ({ experiences, getRefIndex }) => (
  <section className="mt-6 avoid-break">
    <h2 className="section-title">Experience</h2>
    {experiences.map((exp, index) => (
      <div
        key={`${exp.organization}-${exp.position}-${exp.period}`}
        className={index > 0 ? "mt-5 border-t pt-4 border-gray-200" : "mt-2"}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <div className="font-bold">
              {exp.link ? (
                <a
                  className="underline"
                  href={exp.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {exp.organization}
                </a>
              ) : (
                exp.organization
              )}
              {exp.reference && (
                <Citation
                  refId={exp.reference.id}
                  refIndex={getRefIndex(exp.reference.id)}
                />
              )}
            </div>
            <div className="font-semibold text-[12px] mt-1">{exp.position}</div>
          </div>
          <div className="text-right ml-4">
            <div className="text-[12px]">{exp.location}</div>
            <div className="text-[11px]">{exp.period}</div>
          </div>
        </div>
        {exp.description && (
          <div className="text-[12px] mt-2">
            <p>{exp.description}</p>
          </div>
        )}
        {exp.accomplishments && exp.accomplishments.length > 0 && (
          <div className="text-[12px] mt-2">
            {exp.accomplishments.map((item, itemIndex) => {
              const accomplishmentRefs = exp.references || [];
              const ref = accomplishmentRefs.find(
                (r) =>
                  item.includes("2 peer-reviewed papers") &&
                  r.id.startsWith("ieee-paper"),
              );
              return (
                <div key={item} className={itemIndex > 0 ? "mt-1" : ""}>
                  • {item}
                  {ref && (
                    <Citation refId={ref.id} refIndex={getRefIndex(ref.id)} />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    ))}
  </section>
);

const LeadershipSection: React.FC<{
  activities: Activity[];
  getRefIndex: (refId: string) => number;
}> = ({ activities, getRefIndex }) => (
  <section className="mt-6 avoid-break">
    <h2 className="section-title">Leadership & Activities</h2>
    {activities.map((activity, index) => (
      <div
        key={`${activity.organization}-${activity.role}-${activity.period}`}
        className={index > 0 ? "mt-4 border-t pt-4 border-gray-200" : "mt-2"}
      >
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <div className="font-bold">
              {activity.organization}
              {activity.reference && (
                <Citation
                  refId={activity.reference.id}
                  refIndex={getRefIndex(activity.reference.id)}
                />
              )}
            </div>
            <div className="font-semibold text-[12px] mt-1">
              {activity.role}
            </div>
          </div>
          <div className="text-right ml-4">
            <div className="text-[12px]">{activity.location}</div>
            <div className="text-[11px]">{activity.period}</div>
          </div>
        </div>
        {activity.description && (
          <div className="text-[12px] mt-2">
            <p>{activity.description}</p>
          </div>
        )}
        {activity.accomplishments && activity.accomplishments.length > 0 && (
          <div className="text-[12px] mt-2">
            {activity.accomplishments.map((item, itemIndex) => (
              <div key={item} className={itemIndex > 0 ? "mt-1" : ""}>
                • {item}
              </div>
            ))}
          </div>
        )}
      </div>
    ))}
  </section>
);

const SkillsSection: React.FC<{ skills: Skills }> = ({ skills }) => (
  <section className="mt-6 avoid-break">
    <h2 className="section-title">Skills & Interests</h2>
    <div className="text-[12px] mt-2 space-y-2">
      {skills.technical && skills.technical.length > 0 && (
        <div>
          <span className="font-semibold">Technical:</span>
          {skills.technical.map((tech, index) => (
            <span key={tech.category}>
              {index > 0 && "; "} {tech.category}: {tech.skills.join(", ")} (
              {tech.level})
            </span>
          ))}
        </div>
      )}
      {skills.languages && skills.languages.length > 0 && (
        <div>
          <span className="font-semibold">Language:</span>
          {skills.languages.map((lang, index) => (
            <span key={lang.language}>
              {index > 0 && ", "}
              {lang.language} ({lang.fluency})
            </span>
          ))}
        </div>
      )}
      {skills.laboratory && skills.laboratory.length > 0 && (
        <div>
          <span className="font-semibold">Laboratory:</span>{" "}
          {skills.laboratory.join(", ")}
        </div>
      )}
      {skills.interests && skills.interests.length > 0 && (
        <div>
          <span className="font-semibold">Interests:</span>{" "}
          {skills.interests.join(", ")}
        </div>
      )}
    </div>
  </section>
);

const ReferenceSystem: React.FC<{ references: Reference[] }> = ({
  references,
}) => {
  useEffect(() => {
    const refLinks = document.querySelectorAll('a[href^="#ref-"]');
    const handleClick = (e: Event) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLAnchorElement;
      const targetId = link.getAttribute("href")?.substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
          targetElement.style.backgroundColor = "#fef3cd";
          setTimeout(() => {
            targetElement.style.backgroundColor = "transparent";
          }, 2000);
        }
      }
    };

    refLinks.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      refLinks.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <section className="mt-6 avoid-break">
      <h2 className="section-title">References</h2>
      <div className="text-[12px] mt-2 space-y-2">
        {references.map((ref, index) => (
          <div key={ref.id} className="flex items-start gap-2">
            <span
              id={`ref-${ref.id}`}
              className="font-bold text-[10px] min-w-[20px]"
            >
              [{index + 1}]
            </span>
            <div className="flex-1">
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink hover:text-gray-600 no-underline"
              >
                {ref.title}
              </a>
              {ref.description && (
                <span className="ml-2 text-gray-600">- {ref.description}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- MAIN PAGE ---

export default function ResumePage() {
  const allReferences: Reference[] = [];
  experiencesData.forEach((exp) => {
    if (exp.reference) allReferences.push(exp.reference);
    if (exp.references) allReferences.push(...exp.references);
  });
  leadershipData.forEach((activity) => {
    if (activity.reference) allReferences.push(activity.reference);
    if (activity.references) allReferences.push(...activity.references);
  });

  const uniqueReferences = allReferences.filter(
    (ref, index, self) => index === self.findIndex((r) => r.id === ref.id),
  );

  const getRefIndex = (refId: string) => {
    return uniqueReferences.findIndex((ref) => ref.id === refId) + 1;
  };

  return (
    <>
      <Header {...personalInfo} />
      <EducationSection education={educationData} />
      <ExperienceSection
        experiences={experiencesData}
        getRefIndex={getRefIndex}
      />
      <LeadershipSection
        activities={leadershipData}
        getRefIndex={getRefIndex}
      />
      <SkillsSection skills={skillsData} />
      {uniqueReferences.length > 0 && (
        <ReferenceSystem references={uniqueReferences} />
      )}
    </>
  );
}
