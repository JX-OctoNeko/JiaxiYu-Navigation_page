import React, { useEffect, useMemo, useState } from "react";

export default function CVHome() {
  // --- Theme (Dark/Light) ---
  const prefersDark = useMemo(
    () => window?.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false,
    []
  );
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || (prefersDark ? "dark" : "light")
  );
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // --- Data: Edit everything below ---
  const data = {
    name: "Jiaxi Yu",
    tagline: "Prospective PhD Student • Civil & Environmental Engineering",
    avatar: "/images/avatar.png",
    location: "Wuhan, Hubei, China",
    email: "YUJiaxiYU@outlook.com",
    scholar: "https://scholar.google.com/citations?view_op=list_works&hl=zh-CN&user=pHPYRCMAAAAJ",
    github: "https://github.com/JX-OctoNeko",
    linkedin: "https://www.linkedin.com/in/jiaxi-yu-9a1995382/",
    twitter: "https://x.com/yuyumengmeme",
    cvHref: "/cv/Jiaxi_Yu_CV.pdf",
    about: [
      "My academic journey is driven by a mission to to use computational tools to build a more resilient and sustainable planet. My foundational background in Landscape Architecture and Agronomy provided me with a inquisitiveness for Earth's complex systems, inspiring me to turn to technology to address environmental challenges at scale.",
      "At The University of Osaka, my master's research is focused on the cutting edge of Geospatial Artificial Intelligence (GeoAI). I develop and benchmark novel deep learning models—from exploring attention mechanisms and semi-supervised learning to fusing multi-modal data like satellite and social media imagery—to deliver faster, more accurate post-disaster assessments.",
      "I am now seeking a PhD position where I can continue this journey. My goal is to advance the frontiers of GeoAI, building robust and interpretable models which is not only able to predict environmental events but also help us mitigate their impacts. I hope to contribute to a research group dedicated to solving real-world climate and disaster-related problems."
    ],
    interests: [
      "Geospatial Artificial Intelligence (GeoAI)",
      "Disaster Assessment and Resilience",
      "Environmental Monitoring and Modeling",
      "Earth Observation for Global Change"
    ],
    education: [
      {
        school: "The University of Osaka",
        degree: "M.S. in Engineering, Sustainable Energy and Environmental Engineering",
        years: "2022 – 2025",
        details: "Advisor: Prof. Tomohiro Fukuda · Thesis: Benchmarking Attention Mechanisms and Consistency Regularization Semi-supervised Learning for Post-flood Building Damage Assessment · GPA: 3.73/4.0"
      },
      {
        school: "China Agricultural University",
        degree: "B.S. in Agriculture, Landscape Architecture",
        years: "2017 – 2021",
        details: "Advisor: Prof. Xianfeng Li · Thesis: Design of Commercial Renovation Project of Zhong guan cun Pedestrian Street · GPA: 3.46/4.0"
      }
    ],
    publications: [
      {
        title:
          "Benchmarking Attention Mechanisms and Consistency Regularization Semi-supervised Learning for Post-flood Building Damage Assessment.",
        authors: ["Jiaxi Yu", "Tomohiro Fukuda", "Nobuyoshi Yabuki"],
        venue: "International Journal of Disaster Risk Reduction",
        image: "/images/pub1.svg",
        links: [
          { label: "DOI", href: "https://doi.org/10.1016/j.ijdrr.2025.105664" },
          { label: "Code", href: "https://github.com/JX-OctoNeko/Flood_BDA_benchmark.git" }
        ],
        highlights: [
          "Systematically benchmarked attention mechanisms and consistency regularization methods for post-flood Building Damage Assessment (BDA).",
          "Identified the potential superiority of prior attention over self-attention mechanisms for the BDA task through comparative analysis.",
          "Validated the efficacy of image-level consistency regularization for semi-supervised learning, demonstrating its capability to reduce annotation dependency."
        ]
      },
      {
        title: " Combining Social Media Images and Bitemporal Satellite Images for Automated Detection of Damaged Areas after Flooding.",
        authors: ["Jiaxi Yu", "Tomohiro Fukuda", "Nobuyoshi Yabuki"],
        venue: " Proceedings of the 29th International Conference of the Association for Computer-Aided Architectural Design Research in Asia, CAADRIA 2024",
        image: "/images/pub2.svg",
        links: [
          { label: "URL", href: "https://caadria2024.org/wp-content/uploads/2024/04/152-COMBINING-SOCIAL-MEDIA-IMAGES-AND-BITEMPORAL-SATELLITE-IMAGES-FOR-AUTOMATED-DETECTION-OF-DAMAGED-AREAS-AFTER-FLOODING.pdf" },
          { label: "Oral Presentation", href: "https://youtu.be/x32-8GqUORs" }
        ],
        highlights: [
          "Capitalizing on low-cost social media data as supplementary information in scenarios where satellite images are sparse, enhances the model performance.",
          "The model encoder has been refined to effectively utilize features from diverse data types, including disaster information."
        ]
      }
    ],
    experience: [
      {
        org: "Environmental Design and Information Technology Laboratory, The University of Osaka",
        role: "Research Assistant",
        years: "2024.03",
        details: "Applied 3D reconstruction techniques to create digital environments for an MR-based remote inspection application."
      },
      {
        org: "Environmental Design and Information Technology Laboratory, The University of Osaka",
        role: "Tutor",
        years: "2023.10 – 2024.02",
        details: "Guided new international students in academic adaptation and research orientation."
      },

      {
        org: "China Construction Eighth Engineering Bureau Second Construction Co.",
        role: "Landscape Engineer",
        years: "2021 - 2022",
        details: "Participated in large landscape and construction projects such as Jinan resettlement housing and Luoyang Olympic Center."
      }
    ],
    awards: [
      "Outstanding Staff, China Construction Eighth Engineering Bureau (2021)",
      "Third Class Academic Excellence Scholarship, China Agricultural University (2019)",
      "Academic Progress Scholarship, China Agricultural University (2019)"
    ]
  };

  // --- Helpers ---
  const Anchor = ({ id }) => (
    <span id={id} className="absolute -mt-24" aria-hidden="true" />
  );

  const Section = ({ id, title, children }) => (
    <section id={id} className="relative scroll-mt-24">
      <Anchor id={`${id}-top`} />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6 text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">{children}</div>
      </div>
    </section>
  );

  // --- JSON-LD (SEO) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    jobTitle: "Prospective PhD Student",
    affiliation: "",
    url: typeof window !== "undefined" ? window.location.href : "",
    email: `mailto:${data.email}`,
    sameAs: [data.github, data.linkedin, data.scholar, data.twitter].filter(Boolean)
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      {/* JSON-LD for rich snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Top Bar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/75 dark:supports-[backdrop-filter]:bg-zinc-950/75 border-b border-zinc-200/70 dark:border-zinc-800/70">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-500" />
            <span className="font-semibold text-gray-900 dark:text-gray-100">{data.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {[
              ["About", "about"],
              ["Publications", "publications"],
              ["Experience", "experience"],
              ["Education", "education"],
              ["Awards", "awards"],
              ["Contact", "contact"]
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition"
              >
                {label}
              </a>
            ))}
            <a
              href={data.cvHref}
              className="px-3 py-1.5 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:shadow-sm text-gray-600 dark:text-gray-300"
            >
              Download CV
            </a>
            <button
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-gray-600 dark:text-gray-300"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M21.64 13A9 9 0 1111 2.36 7 7 0 0021.64 13z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0 4a1 1 0 011 1v1h-2v-1a1 1 0 011-1zm0-22a1 1 0 011-1V-1h-2V0a1 1 0 011 1zm12 11a1 1 0 011 1h1v-2h-1a1 1 0 01-1 1zM0 12a1 1 0 01-1-1H-2v2h1a1 1 0 011-1zm18.36 7.36a1 1 0 011.41 0l.71.71-1.41 1.41-.71-.71a1 1 0 010-1.41zM3.52 3.52a1 1 0 010-1.41l.71-.71L5.64 2.81l-.71.71a1 1 0 01-1.41 0zM3.52 20.48a1 1 0 011.41 0l.71.71-1.41 1.41-.71-.71a1 1 0 010-1.41zm16.24-16.96a1 1 0 010-1.41l.71-.71 1.41 1.41-.71.71a1 1 0 01-1.41 0z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.name}
              </h1>
              <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">{data.tagline}</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{data.location}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${data.email}`}
                  className="px-4 py-2 rounded-2xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90"
                >
                  Email
                </a>
                <a
                  href={data.cvHref}
                  className="px-4 py-2 rounded-2xl border border-zinc-300 dark:border-zinc-700 hover:shadow-sm text-gray-700 dark:text-gray-300"
                >
                  Download CV (PDF)
                </a>
                {data.scholar && (
                  <a href={data.scholar} className="px-4 py-2 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300">
                    Google Scholar
                  </a>
                )}
                {data.github && (
                  <a href={data.github} className="px-4 py-2 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300">
                    GitHub
                  </a>
                )}
                {data.linkedin && (
                  <a href={data.linkedin} className="px-4 py-2 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-gray-700 dark:text-gray-300">
                    LinkedIn
                  </a>
                )}
              </div>

              {/* Interests */}
              <div className="mt-8">
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">Research Interests</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {data.interests.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-xl text-sm bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Avatar / Accent */}
            <div className="md:col-span-1">
              <div className="relative">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-sky-500/20 to-emerald-500/20 blur-2xl" />
                <div className="relative aspect-square rounded-3xl border border-zinc-200 dark:border-zinc-800">
                   {/* --- MODIFICATION START --- */}
                   {/* 使用 data.avatar 替换了原来的 "/images/avatar.jpg" */}
                  <img
                    src={data.avatar} 
                    alt={`Photo of ${data.name}`}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                   {/* --- MODIFICATION END --- */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About */}
      <Section id="about" title="About Me">
        {data.about.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </Section>

      {/* Publications */}
      <Section id="publications" title="Publications">
        <ul className="space-y-6">
          {data.publications.map((p, idx) => (
            <li
              key={idx}
              className="p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/60"
            >
              {/* 论文标题与作者 */}
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{p.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {p.authors.join(", ")} • {p.venue}
              </p>

              {/* 长版图片：插入在 highlights bullet 之前 */}
              {p.image && (
                <div className="mt-4">
                  <img
                    src={p.image}
                    alt={`${p.title} abstract`}
                    className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 object-cover"
                  />
                </div>
              )}

              {/* bullet 列表 */}
              {p.highlights?.length > 0 && (
                <ul className="mt-4 list-disc pl-5 text-sm space-y-1">
                  {p.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}

              {/* 链接区域 */}
              {p.links?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.links.map((l, i) => (
                    <a
                      key={i}
                      href={l.href}
                      className="text-sm px-2.5 py-1 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:shadow-sm"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <ol className="relative border-s border-zinc-200 dark:border-zinc-800 ml-6">
          {data.experience.map((ex, i) => (
            <li key={i} className="mb-8 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-500 text-white text-xs">
                {i + 1}
              </span>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                {ex.role}
              </h3>
              <div className="text-sm text-zinc-500">
                {ex.org} • {ex.years}
              </div>
              {ex.details && (
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  {ex.details}
                </p>
              )}
            </li>
          ))}
        </ol>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <ol className="relative border-s border-zinc-200 dark:border-zinc-800 ml-6">
          {data.education.map((ed, i) => (
            <li key={i} className="mb-8 ms-6">
              <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-500 text-white text-xs">
                {i + 1}
              </span>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{ed.degree}</h3>
              <div className="text-sm text-zinc-500">{ed.school} • {ed.years}</div>
              {ed.details && (
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{ed.details}</p>
              )}
            </li>
          ))}
        </ol>
      </Section>

      {/* Awards */}
      <Section id="awards" title="Awards & Honors">
        <ul className="flex flex-wrap gap-3 justify-start">
          {data.awards.map((a, i) => (
            <li
              key={i}
              className="inline-block px-4 py-2 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 whitespace-nowrap"
            >
              {a}
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/70 dark:bg-zinc-950/60">
          <p>
            The best way to reach me is by email:
            {" "}
            <a className="underline" href={`mailto:${data.email}`}>{data.email}</a>.
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            I’m currently seeking PhD opportunities in computer vision / remote sensing.
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-sm text-zinc-500 flex flex-wrap items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} {data.name}. All rights reserved.</div>
          <div className="flex items-center gap-4">
            {data.scholar && (
              <a href={data.scholar} className="hover:underline">Scholar</a>
            )}
            {data.github && (
              <a href={data.github} className="hover:underline">GitHub</a>
            )}
            {data.linkedin && (
              <a href={data.linkedin} className="hover:underline">LinkedIn</a>
            )}
            {data.twitter && (
              <a href={data.twitter} className="hover:underline">Twitter</a>
            )}
          </div>
        </div>
      </footer>
    </main>
  );
}
