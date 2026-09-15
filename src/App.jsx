import { useRef, useState } from "react";
import "./index.css";

function SectionTitle({ children }) {
  return (
    <div className="section-heading">
      <h2>{children}</h2>
      <div className="section-rule" />
    </div>
  );
}

function App() {
  const paperRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const tiltPaper = (clientX, clientY) => {
    const paper = paperRef.current;
    if (!paper) return;

    const rect = paper.getBoundingClientRect();

    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;

    const rotateY = Math.max(-4, Math.min(4, (x - 0.5) * 8));
    const rotateX = Math.max(-4, Math.min(4, (0.5 - y) * 8));

    paper.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "touch") {
      setDragging(true);
      event.currentTarget.setPointerCapture?.(event.pointerId);
    }
  };

  const handlePointerMove = (event) => {
    if (event.pointerType === "mouse" || dragging) {
      tiltPaper(event.clientX, event.clientY);
    }
  };

  const resetTilt = () => {
    setDragging(false);

    if (!paperRef.current) return;

    paperRef.current.style.transform =
      "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <main className="site">
      <a
        className="download-button"
        href="/Alysar_Tabet_Resume.pdf"
        download="Alysar_Tabet_Resume.pdf"
      >
        <span aria-hidden="true">↓</span>
        <span>PDF</span>
      </a>

      <div className="resume-stage">
        <div className="resume-scene">
          <article
            ref={paperRef}
            className="resume-paper"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={resetTilt}
            onPointerCancel={resetTilt}
            onPointerLeave={resetTilt}
          >
            <div className="resume-content">

              <header className="resume-header">
                <h1>Alysar Tabet</h1>

                <p className="resume-role">
                  SOFTWARE ENGINEER
                </p>

                <p className="contact-line">
                  <a href="mailto:alysartabet@gmail.com">
                    alysartabet@gmail.com
                  </a>

                  <span>•</span>

                  <a href="tel:+15168842162">
                    (516) 884-2162
                  </a>

                  <span>•</span>

                  <a
                    href="https://alysars.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    alysars.com
                  </a>

                  <span>•</span>

                  <a
                    href="https://linkedin.com/in/alysar-tabet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/alysar-tabet
                  </a>

                  <span>•</span>

                  <a
                    href="https://github.com/alysartabet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/alysartabet
                  </a>
                </p>
              </header>

              <section>
                <SectionTitle>EDUCATION</SectionTitle>

                <div className="entry-row">
                  <p>
                    <strong>
                      New York Institute of Technology (NYIT)
                    </strong>
                    , New York, NY
                  </p>

                  <p className="date">
                    <strong>May 2026</strong>
                  </p>
                </div>

                <p>
                  Master of Science in Computer Science | GPA 4.0/4.0
                </p>

                <div className="entry-row">
                  <p>
                    Bachelor of Science in Computer Science | GPA 3.98/4.0
                  </p>

                  <p className="date">
                    <strong>December 2025</strong>
                  </p>
                </div>

                <div className="education-gap" />

                <div className="entry-row">
                  <p>
                    <strong>
                      American Academy of Dramatic Arts
                    </strong>
                    , New York, NY
                  </p>

                  <p className="date">
                    <strong>May 2021</strong>
                  </p>
                </div>

                <p>
                  Associate of Occupational Studies in Performing Arts
                </p>
              </section>

              <section>
                <SectionTitle>TECHNICAL SKILLS</SectionTitle>

                <div className="skill-line">
                  <strong>Languages</strong>
                  <span>|</span>
                  <p>
                    Java, Python, JavaScript, C, C++, HTML/CSS, SQL
                  </p>
                </div>

                <div className="skill-line">
                  <strong>Concepts</strong>
                  <span>|</span>
                  <p>
                    Object-Oriented Programming (OOP), Data Structures,
                    Algorithms
                  </p>
                </div>

                <div className="skill-line">
                  <strong>Technologies</strong>
                  <span>|</span>
                  <p>
                    React, React Native, Vite, Supabase, PostgreSQL,
                    MongoDB, Git/GitHub, Cloudflare
                  </p>
                </div>

                <div className="skill-line">
                  <strong>Tools</strong>
                  <span>|</span>
                  <p>
                    Unreal Engine, VS Code, Figma, Arduino IDE,
                    Adobe Suite, Rhino3D, AutoCAD
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle>EXPERIENCE</SectionTitle>

                <div className="experience-entry">
                  <div className="entry-row">
                    <p>
                      <strong>Triumph Auto Company</strong>,
                      Dallas, Texas
                    </p>

                    <p className="date">
                      <strong>June – August 2026</strong>
                    </p>
                  </div>

                  <p className="job-title">
                    Software Engineer Intern
                  </p>

                  <ul>
                    <li>
                      Built a responsive React/Vite company website,
                      translating business requirements into production
                      features.
                    </li>

                    <li>
                      Researched vehicle diagnostics and embedded systems
                      to evaluate software applications for automotive
                      systems.
                    </li>
                  </ul>
                </div>

                <div className="experience-entry">
                  <div className="entry-row">
                    <p>
                      <strong>Research Assistant, NYIT</strong>,
                      New York, NY
                    </p>

                    <p className="date">
                      <strong>March – May 2026</strong>
                    </p>
                  </div>

                  <ul>
                    <li>
                      Prototyped a VR training environment in Unreal Engine
                      using 360° footage captured with a GoPro Fusion.
                    </li>

                    <li>
                      Investigated VR training and energy-auditing workflows,
                      authoring a technical paper on the proposed system.
                    </li>
                  </ul>
                </div>

                <div className="experience-entry">
                  <div className="entry-row">
                    <p>
                      <strong>Teaching Assistant, NYIT</strong>,
                      New York, NY
                    </p>

                    <p className="date">
                      <strong>February – May 2026</strong>
                    </p>
                  </div>

                  <ul>
                    <li>
                      Supported two undergraduate courses: CSCI 235:
                      Elements of Discrete Structures and CSCI 260:
                      Data Structures.
                    </li>

                    <li>
                      Evaluated and proctored quizzes and examinations
                      to provide assessment support for two CS faculty members.
                    </li>
                  </ul>
                </div>

                <div className="experience-entry">
                  <div className="entry-row">
                    <p>
                      <strong>VOYA Summer Maker Academy, NYIT</strong>
                    </p>

                    <p className="date">
                      <strong>July – August 2025</strong>
                    </p>
                  </div>

                  <p className="job-title">
                    Student Coach
                  </p>

                  <ul>
                    <li>
                      Guided students in coding, soldering, 3D printing
                      and laser cutting as they constructed functional
                      water-transport robots.
                    </li>
                  </ul>
                </div>

                <div className="experience-entry">
                  <div className="entry-row">
                    <p>
                      <strong>Blinkers Ltd</strong>,
                      Abuja, Nigeria
                    </p>

                    <p className="date">
                      <strong>June – October 2023</strong>
                    </p>
                  </div>

                  <p className="job-title">
                    Software Engineer
                  </p>

                  <ul>
                    <li>
                      Automated recurring bookkeeping processes,
                      reducing manual administrative work by 5+ hours monthly.
                    </li>

                    <li>
                      Led a market and feasibility study for a proposed
                      business venture, synthesizing research into a
                      comprehensive report.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <SectionTitle>PROJECTS</SectionTitle>

                <div className="project-entry">
                  <p>
                    <a className="project-link" href="https://github.com/alysartabet/iota-digital-card">
                      <strong>Digital Business Card Platform</strong>
                    </a>
                    {" "} | React, Vite, JavaScript, Cloudflare,
                    Adobe Photoshop
                  </p>

                  <ul>
                    <li>
                      Engineered reusable digital cards with QR access,
                      contact saving, and wallet integration.
                    </li>
                  </ul>
                </div>

                <div className="project-entry">
                  <p>
                    <a className="project-link" href="https://github.com/na-stewart/Moodify-Extension">
                      <strong>
                        Moodify – Music Streaming Platform Extension
                      </strong>
                    </a>
                    {" "} | Python, JavaScript, HTML/CSS, Figma
                  </p>

                  <ul>
                    <li>
                      Implemented advanced search and personalized
                      recommendations to improve music discovery beyond
                      regular browsing.
                    </li>
                  </ul>
                </div>

                <div className="project-entry">
                  <p>
                    <a className="project-link" href="https://github.com/alysartabet/rootedinwater">
                      <strong>
                        Rooted in Water – Sustainable Agricultural Platform
                      </strong>
                    </a>
                    {" "} | React, PostgreSQL, Python, Figma
                  </p>

                  <ul>
                    <li>
                      Designed a platform for sharing sustainable agriculture
                      data, research, and experiences.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <SectionTitle>
                  PUBLICATION AND LEADERSHIP
                </SectionTitle>

                <p>
                  <strong>Published Research | </strong>
                  “Framing the Future: How AI’s Media Representation is
                  Redefining the Entertainment Industry”, Butler Journal
                  of Undergraduate Research, May 2025
                </p>

                <p className="bottom-line">
                  <strong>Leadership | </strong>
                  Society of Women Engineers NYIT, President (2023-25),
                  Undergraduate Research and Entrepreneurship Program,
                  Team Lead (2023-25), BUDS International Student
                  Mentorship Program NYIT, Mentor Manager (2023-24)
                </p>

                <p className="bottom-line">
                  <strong>Honors | </strong>
                  Undergraduate CS Dean’s Award (2026), Student Leadership
                  Award (2025), NYIT Hackathon Winner (2024) & Host/Coach
                  (2025), Dean’s Recognition Scholarship (2024),
                  Presidential Honors List (2023-26), Transfer Achievement
                  Award (2023)
                </p>
              </section>

            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default App;