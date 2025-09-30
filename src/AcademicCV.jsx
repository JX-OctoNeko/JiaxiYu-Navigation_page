import React from "react";

// === PhD Application Homepage (English CV Layout) ===

export default function CVHome() {
  const data = {
    name: "Jiaxi Yu",
    tagline: "Prospective PhD Student • Civil & Environmental Engineering",
    email: "YUJiaxiYU@outlook.com",
    location: "Wuhan, Hubei, China",
    scholar: "https://scholar.google.com/citations?view_op=list_works&hl=zh-CN&user=pHPYRCMAAAAJ",
    github: "https://github.com/JX-OctoNeko",
    linkedin: "https://www.linkedin.com/in/jiaxi-yu-9a1995382/",
    cvHref: "/cv/Jiaxi_Yu_CV.pdf",
    researchInterests: [
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
        details:
          "Advisor: Prof. Tomohiro Fukuda · Thesis: Benchmarking Attention Mechanisms and Consistency Regularization Semi-supervised Learning for Post-flood Building Damage Assessment · GPA: 3.73/4.0"
      },
      {
        school: "China Agricultural University",
        degree: "B.S. in Agriculture, Landscape Architecture",
        years: "2017 – 2021",
        details:
          "Advisor: Prof. Xianfeng Li · Thesis: Design of Commercial Renovation Project of Zhong guan cun Pedestrian Street · GPA: 3.46/4.0"
      }
    ],
    publications: [
      {
        title:
          "Benchmarking Attention Mechanisms and Consistency Regularization Semi-supervised Learning for Post-flood Building Damage Assessment.",
        authors: ["Jiaxi Yu", "Tomohiro Fukuda", "Nobuyoshi Yabuki"],
        venue: "International Journal of Disaster Risk Reduction",
        links: [
          { label: "DOI", href: "https://doi.org/10.1016/j.ijdrr.2025.105664" },
          { label: "Code", href: "https://github.com/JX-OctoNeko/Flood_BDA_benchmark.git" }
        ]
      },
      {
        title:
          "Combining Social Media Images and Bitemporal Satellite Images for Automated Detection of Damaged Areas after Flooding.",
        authors: ["Jiaxi Yu", "Tomohiro Fukuda", "Nobuyoshi Yabuki"],
        venue:
          "Proceedings of the 29th International Conference of the Association for Computer-Aided Architectural Design Research in Asia, CAADRIA 2024",
        links: [
          {
            label: "URL",
            href: "https://caadria2024.org/wp-content/uploads/2024/04/152-COMBINING-SOCIAL-MEDIA-IMAGES-AND-BITEMPORAL-SATELLITE-IMAGES-FOR-AUTOMATED-DETECTION-OF-DAMAGED-AREAS-AFTER-FLOODING.pdf"
          },
          { label: "Oral Presentation", href: "https://youtu.be/x32-8GqUORs" }
        ]
      }
    ],
    experience: [
      {
        role: "Research Assistant",
        org: "Environmental Design and Information Technology Laboratory, The University of Osaka",
        years: "2024.03",
        bullets: [
          "Applied 3D reconstruction techniques to create digital environments for an MR-based remote inspection application."
        ]
      },
      {
        role: "Tutor",
        org: "Environmental Design and Information Technology Laboratory, The University of Osaka",
        years: "2023.10 – 2024.02",
        bullets: [
          "Guided new international students in academic adaptation and research orientation."
        ]
      },
      {
        role: "Landscape Engineer",
        org: "China Construction Eighth Engineering Bureau Second Construction Co.",
        years: "2021 – 2022",
        bullets: [
          "Participated in large landscape and construction projects such as Jinan resettlement housing and Luoyang Olympic Center."
        ]
      }
    ],
    awards: [
      "Outstanding Staff, China Construction Eighth Engineering Bureau (2021)",
      "Third Class Academic Excellence Scholarship, China Agricultural University (2019)",
      "Academic Progress Scholarship, China Agricultural University (2019)"
    ]
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 py-6">
        <div className="mx-auto max-w-4xl px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <h1 className="text-3xl font-bold">{data.name}</h1>
            <p className="mt-1 text-gray-600">{data.tagline}</p>
            <p className="text-sm text-gray-500">{data.location}</p>
          </div>
          <div className="mt-4 sm:mt-0 flex gap-3">
            <a
              href={`mailto:${data.email}`}
              className="px-4 py-2 rounded-md bg-gray-900 text-white text-sm"
            >
              Email
            </a>
            <a
              href={data.cvHref}
              className="px-4 py-2 rounded-md border border-gray-300 text-sm"
            >
              CV (PDF)
            </a>
          </div>
        </div>
      </header>

      {/* Research Interests */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-xl font-semibold mb-4">Research Interests</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {data.researchInterests.map((ri) => (
            <li key={ri}>{ri}</li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-xl font-semibold mb-4">Education</h2>
        <ul className="space-y-4">
          {data.education.map((ed, i) => (
            <li key={i}>
              <p className="font-medium">{ed.degree}, {ed.school}</p>
              <p className="text-sm text-gray-500">{ed.years}</p>
              <p className="text-sm text-gray-600">{ed.details}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Publications */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-xl font-semibold mb-4">Publications</h2>
        <ol className="space-y-6 list-decimal list-inside">
          {data.publications.map((p, i) => (
            <li key={i}>
              <p className="font-medium">{p.title}</p>
              <p className="text-sm text-gray-600">
                {p.authors.join(", ")} • {p.venue}
              </p>
              {p.links?.length > 0 && (
                <div className="mt-1 flex flex-wrap gap-2 text-sm">
                  {p.links.map((l, j) => (
                    <a key={j} href={l.href} className="underline">
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* Experience */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>
        <ul className="space-y-6">
          {data.experience.map((ex, i) => (
            <li key={i}>
              <p className="font-medium">{ex.role}, {ex.org}</p>
              <p className="text-sm text-gray-500">{ex.years}</p>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                {ex.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Awards */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-xl font-semibold mb-4">Awards & Honors</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {data.awards.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-4xl px-6 py-10 text-sm text-gray-500 border-t border-gray-200">
        <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
        <p className="mt-2 flex gap-4">
          <a href={data.scholar} className="underline">Scholar</a>
          <a href={data.github} className="underline">GitHub</a>
          <a href={data.linkedin} className="underline">LinkedIn</a>
        </p>
      </footer>
    </main>
  );
}
