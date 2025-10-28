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

interface Publication {
  title: string;
  authors?: string;
  venue?: string;
  year?: string;
  url?: string;
  description?: string;
}

// --- DATA ---

const personalInfo: PersonalInfo = {
  name: "Thiago Henrique Menêses Bezerra",
  address: "",
  city: "São Paulo",
  state: "São Paulo",
  zip: "",
  email: "bezerrathm@gmail.com",
  phone: "",
  github: "",
  linkedin: "linkedin.com/in/thiag0bezerra",
  website: "",
};

const educationData: Education[] = [
  {
    institution: "Universidade Federal da Paraíba",
    location: "Paraíba, Brazil",
    degree: "Bachelor's Degree",
    concentration: "Computer Science",
    graduationDate: "2019",
    type: "university",
  },
];

const experiencesData: Experience[] = [
  {
    organization: "Smart FlowAi",
    position: "AI Software Engineer",
    location: "Remote",
    period: "June 2025 – Present",
    accomplishments: [
      "To address clinics' need for integrated management, developed a comprehensive CRM system to handle financial operations, patient records, and virtual assistant coordination, streamlining clinic workflows through a unified platform",
      "Solved the challenge of slow initial patient contact by building a WhatsApp virtual agent management system that automates first-contact interactions, reducing human attendant workload and improving appointment scheduling success rates",
    ],
  },
  {
    organization: "B3",
    position: "Research And Development Intern",
    location: "Paraíba, Brazil",
    period: "June 2024 – June 2025",
    accomplishments: [
      "Addressed the challenge of manual testing bottlenecks by developing AI-driven software testing applications leveraging large language models to automate test-case generation, reducing manual testing effort and accelerating release cycles",
      "Joined the financial market analysis team to tackle fraud detection challenges by implementing advanced data analysis techniques, enhancing detection accuracy and mitigating financial risks",
    ],
  },
  {
    organization:
      "PROCAD/CAPES – UFPB & UFF in partnership with the Federal Police",
    position: "Machine Learning Engineer",
    location: "Brazil",
    period: "February 2024 – June 2025",
    accomplishments: [
      "To streamline forensic document analysis and reduce manual processing time, collaborated with academic and law-enforcement partners to develop Aavia®, a multi-stage tool for automating the separation and classification of forensic documents",
      "Built an end-to-end document-processing pipeline including page segmentation, textual pre-processing (tokenization, lemmatization, stop-word removal), and category classification to enable efficient analysis of large document sets",
      "Created feature-extraction workflows converting forensic texts into numeric representations, enabling rapid training and deployment of supervised learning models",
      "Evaluated multiple supervised machine-learning algorithms for page-level classification, selecting the optimal approach based on robust performance metrics to maximize classification accuracy",
      "Delivered a production-ready forensic analysis workflow that automatically generates tailored summaries for each document type, significantly improving processing efficiency",
    ],
  },
  {
    organization: "Freelance",
    position: "Software Engineer",
    location: "Remote",
    period: "February 2014 – April 2025",
    accomplishments: [
      "Redesigned user interfaces for Pi-based embedded systems to improve usability, reducing response time and increasing user satisfaction in usability tests",
      "To optimize compiler performance, developed an LLVM Pass for loop detection and optimization in Clang, accelerating code execution in critical benchmarks",
      "Solved video streaming challenges in low-resource environments by architecting a distributed solution, minimizing latency and ensuring smooth playback despite unreliable networks",
      "Modernized legacy codebases to address technical debt and security vulnerabilities, implementing CI/CD pipelines to reduce deployment friction and accelerate release cycles",
      "Automated performance metric collection by creating specialized web crawlers for data extraction in low-level programming languages, streamlining analysis across multiple projects",
      "Built resilient microservices with RESTful APIs designed to maintain robust service-to-service communication under high load conditions",
      "Enhanced user experience by developing dynamic front-end applications, improving page-load performance and delivering responsive experiences across desktop and mobile platforms",
    ],
  },
  {
    organization: "Cinergy Tech",
    position: "Co-Founder & Software Engineer",
    location: "Brazil",
    period: "October 2017 – March 2020",
    description:
      "Co-founded an energy technology startup to address the need for real-time electricity monitoring solutions. Led end-to-end development of an advanced embedded software system for real-time electricity-consumption monitoring, coordinating cross-functional teams and integrating cutting-edge technologies to help clients optimize energy usage, drive cost savings, and support sustainable practices.",
  },
  {
    organization: "LASER-UFPB",
    position: "Research And Development Scientist",
    location: "Paraíba, Brazil",
    period: "May 2013 – December 2017",
    accomplishments: [
      "Ensured timely project delivery by collaborating with academic researchers to plan and execute projects on schedule, coordinating resources and workflows",
      "To improve tracking accuracy in dynamic environments, designed and implemented a real-time localization system using an Unscented Kalman Filter",
      "Accelerated research iteration by developing a new platform for real-time simulation experiments, streamlining setup and data collection for rapid prototyping",
      "Enabled reliable remote operations by engineering a low-latency remote control and localization solution for robotic systems, ensuring consistent performance across varied network conditions",
    ],
  },
];

const leadershipData: Activity[] = [];

const skillsData: Skills = {
  technical: [
    {
      category: "Data Science & AI",
      skills: [
        "TensorFlow",
        "Machine Learning",
        "Large Language Models",
        "Data Analysis",
      ],
      level: "Advanced",
    },
    {
      category: "Cloud Infrastructure",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Distributed Systems"],
      level: "Advanced",
    },
    {
      category: "Programming Languages & Frameworks",
      skills: [
        "Python",
        "JavaScript/TypeScript",
        "C++",
        "C#",
        "Ruby on Rails",
        "Django",
        "NestJS",
        "Next.js",
        "React",
        "ASP.NET",
      ],
      level: "Advanced",
    },
    {
      category: "Software Engineering",
      skills: [
        "Agile",
        "Microservices",
        "RESTful APIs",
        "Embedded Systems",
        "Real-time Systems",
      ],
      level: "Advanced",
    },
  ],
  languages: [
    {
      language: "Portuguese",
      fluency: "Native",
    },
    {
      language: "English",
      fluency: "Advanced",
    },
  ],
  interests: [
    "Artificial Intelligence research",
    "Real-time systems",
    "Compiler optimization",
    "Security",
  ],
};

const publicationsData: Publication[] = [
  {
    title:
      "Integration of Robot Operating System and Ptolemy for Design of Real-time Multi-Robots Environments",
  },
];

// --- COMPONENTS ---

const Header: React.FC<PersonalInfo> = (props) => {
  const fullAddress = props.address
    ? `${props.address} • ${props.city}, ${props.state}${props.zip ? ` ${props.zip}` : ""}`
    : `${props.city}, ${props.state}`;
  return (
    <header className="text-center pb-3 border-b border-gray-200">
      <h1 className="text-2xl md:text-3xl font-bold mb-1">{props.name}</h1>
      <p className="text-sm text-gray-700 mb-1">
        Senior Software Engineer | Full-Stack Developer | AI Researcher
      </p>
      <div className="text-[12px] space-y-0.5">
        <div>{props.email}</div>
        <div className="flex justify-center items-center space-x-4">
          {fullAddress && <span>{fullAddress}</span>}
          {props.phone && (
            <>
              {fullAddress && <span>•</span>}
              <span>{props.phone}</span>
            </>
          )}
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
  <section className="mt-4 avoid-break">
    <h2 className="section-title">Education</h2>
    {education.map((edu, index) => (
      <div
        key={`${edu.institution}-${edu.graduationDate}`}
        className={index > 0 ? "mt-3" : "mt-1"}
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
  <section className="mt-4 avoid-break">
    <h2 className="section-title">Experience</h2>
    {experiences.map((exp, index) => (
      <div
        key={`${exp.organization}-${exp.position}-${exp.period}`}
        className={index > 0 ? "mt-4 border-t pt-3 border-gray-200" : "mt-1"}
      >
        <div className="flex justify-between items-start mb-1">
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
          <div className="text-[12px] mt-1">
            <p>{exp.description}</p>
          </div>
        )}
        {exp.accomplishments && exp.accomplishments.length > 0 && (
          <div className="text-[12px] mt-1">
            {exp.accomplishments.map((item, itemIndex) => {
              const accomplishmentRefs = exp.references || [];
              const ref = accomplishmentRefs.find(
                (r) =>
                  item.includes("2 peer-reviewed papers") &&
                  r.id.startsWith("ieee-paper"),
              );
              return (
                <div key={item} className={itemIndex > 0 ? "mt-0.5" : ""}>
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
  <section className="mt-4 avoid-break">
    <h2 className="section-title">Leadership & Activities</h2>
    {activities.map((activity, index) => (
      <div
        key={`${activity.organization}-${activity.role}-${activity.period}`}
        className={index > 0 ? "mt-3 border-t pt-3 border-gray-200" : "mt-1"}
      >
        <div className="flex justify-between items-start mb-1">
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
  <section className="mt-4 avoid-break">
    <h2 className="section-title">Skills & Interests</h2>
    <div className="text-[12px] mt-1 space-y-1">
      {skills.technical &&
        skills.technical.length > 0 &&
        skills.technical.map((tech) => (
          <div key={tech.category}>
            <span className="font-semibold">{tech.category}:</span>{" "}
            {tech.skills.join(", ")}
          </div>
        ))}
      {skills.languages && skills.languages.length > 0 && (
        <div>
          <span className="font-semibold">Languages:</span>{" "}
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

const PublicationsSection: React.FC<{ publications: Publication[] }> = ({
  publications,
}) => (
  <section className="mt-4 avoid-break">
    <h2 className="section-title">Publications</h2>
    <div className="text-[12px] mt-1 space-y-1">
      {publications.map((pub, index) => (
        <div key={`${pub.title}-${index}`}>
          {pub.url ? (
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-gray-600"
            >
              {pub.title}
            </a>
          ) : (
            <span>{pub.title}</span>
          )}
          {pub.authors && (
            <div className="text-gray-600 mt-1">{pub.authors}</div>
          )}
          {pub.venue && (
            <div className="italic mt-1">
              {pub.venue}
              {pub.year && `, ${pub.year}`}
            </div>
          )}
          {pub.description && (
            <div className="text-gray-600 mt-1">{pub.description}</div>
          )}
        </div>
      ))}
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
    <section className="mt-4 avoid-break">
      <h2 className="section-title">References</h2>
      <div className="text-[12px] mt-1 space-y-1">
        {references.map((ref, index) => (
          <div key={ref.id} className="flex items-start gap-2">
            <span
              id={`ref-${ref.id}`}
              className="font-bold text-[10px] min-w-5"
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
      {leadershipData.length > 0 && (
        <LeadershipSection
          activities={leadershipData}
          getRefIndex={getRefIndex}
        />
      )}
      <SkillsSection skills={skillsData} />
      {publicationsData.length > 0 && (
        <PublicationsSection publications={publicationsData} />
      )}
      {uniqueReferences.length > 0 && (
        <ReferenceSystem references={uniqueReferences} />
      )}
    </>
  );
}
