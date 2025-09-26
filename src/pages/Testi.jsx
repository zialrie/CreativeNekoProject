import React, { useState, useEffect } from "react";
import { events } from "/src/data/event";
import { projects } from "/src/data/portfolio";

const Testimonials = () => {
  // Event Testimonials
  const eventTestimonials = events
    .filter((e) => e.detail?.testimonial)
    .map((e) => ({
      quote: e.detail.testimonial.quote,
      name: e.detail.testimonial.name,
      img: e.img,
      source: e.title,
      type: "Event",
    }));

  // Portfolio Testimonials
  const projectTestimonials = projects
    .filter((p) => p.detail?.testimoni)
    .map((p) => ({
      quote: p.detail.testimoni.quote,
      name: p.detail.testimoni.nama,
      role: p.detail.testimoni.jabatan,
      img: p.img,
      source: p.title,
      type: "Portfolio",
    }));

  // Gabungkan & selang-seling (event - portfolio)
  const maxLen = Math.max(eventTestimonials.length, projectTestimonials.length);
  const mixed = [];
  for (let i = 0; i < maxLen; i++) {
    if (i < eventTestimonials.length) mixed.push(eventTestimonials[i]);
    if (i < projectTestimonials.length) mixed.push(projectTestimonials[i]);
  }

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    if (mixed.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % mixed.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [mixed.length]);

  if (mixed.length === 0) return null;

  return (
    <>

    <section className="w-full py-12 bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-10">
          Kata mereka
        </h2>

        <div className="relative h-72 overflow-hidden">
          {mixed.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col items-center justify-center bg-gray-800 rounded-xl p-6 border shadow-lg transition-all duration-700 ${
                i === index
                  ? "opacity-100 translate-y-0 z-10"
                  : "opacity-0 translate-y-6 z-0"
              } ${
                t.type === "Event"
                  ? "border-yellow-400/50"
                  : "border-green-400/50"
              }`}
            >
              <img
                src={t.img}
                alt={t.source}
                className={`w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 ${
                  t.type === "Event" ? "border-yellow-400" : "border-green-400"
                }`}
              />
              <p className="text-gray-300 text-sm italic mb-2">"{t.quote}"</p>
              <h4
                className={`font-semibold text-sm ${
                  t.type === "Event" ? "text-yellow-400" : "text-green-400"
                }`}
              >
                {t.name}
              </h4>
              {t.role && (
                <span className="text-gray-400 text-xs">{t.role}</span>
              )}
              <span className="text-gray-400 text-xs">
                dari {t.source} (
                <span
                  className={
                    t.type === "Event" ? "text-yellow-400" : "text-green-400"
                  }
                >
                  {t.type}
                </span>
                )
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonials;
