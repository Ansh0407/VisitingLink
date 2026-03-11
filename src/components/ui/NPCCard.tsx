"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  RotateCcw,
  Instagram,
  Facebook,
  Linkedin,
  Github,
  Globe,
  Eye,
  MousePointerClick,
  TrendingUp,
} from "lucide-react";

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <Instagram size={16} strokeWidth={1.5} />,
    label: "Instagram",
    url: "https://instagram.com/zaravex",
  },
  {
    icon: <Facebook size={16} strokeWidth={1.5} />,
    label: "Facebook",
    url: "https://facebook.com/zaravex",
  },
  {
    icon: <Linkedin size={16} strokeWidth={1.5} />,
    label: "LinkedIn",
    url: "https://linkedin.com/in/zaravex",
  },
  {
    icon: <Github size={16} strokeWidth={1.5} />,
    label: "GitHub",
    url: "https://github.com/zaravex",
  },
  {
    icon: <Globe size={16} strokeWidth={1.5} />,
    label: "Behance",
    url: "https://behance.net/zaravex",
  },
];

const metrics = [
  {
    label: "Profile Views",
    value: "2.4K",
    icon: <Eye size={14} />,
  },
  {
    label: "Social Clicks",
    value: "847",
    icon: <MousePointerClick size={14} />,
  },
  {
    label: "Engagement",
    value: "92%",
    icon: <TrendingUp size={14} />,
  },
];

const NPCCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped((prev) => !prev);
  const handleReset = () => setIsFlipped(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      {/* CARD */}
      <div className="relative w-[320px] h-[500px]" style={{ perspective: "1000px" }}>
        <div
          onClick={handleFlip}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          className={`relative w-full h-full transition-transform duration-700 rounded-xl ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 rounded-xl bg-gradient-to-br from-purple-700 to-indigo-900 text-white"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="https://c.animaapp.com/mmkffyg4e3o4WH/img/ai_1.png"
              className="w-32 h-32 rounded-full object-cover border-4 border-white/30"
              alt="npc portrait"
            />

            <div className="text-center">
              <h3 className="text-2xl font-bold">Zara Vex</h3>
              <p className="text-sm opacity-80 uppercase">Arcane Wanderer</p>
            </div>

            <p className="text-xs opacity-60">Click to reveal details</p>
          </div>

          {/* BACK */}
          <div
            className="absolute inset-0 flex flex-col p-6 gap-5 rounded-xl bg-gray-900 text-white"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* HEADER */}
            <div className="flex items-center gap-3">
              <img
                src="https://c.animaapp.com/mmkffyg4e3o4WH/img/ai_2.png"
                className="w-14 h-14 rounded-full object-cover"
                alt="npc portrait"
              />

              <div>
                <h3 className="font-bold text-lg">Zara Vex</h3>
                <span className="text-xs bg-teal-500 px-2 py-1 rounded">
                  Arcane Wanderer
                </span>
              </div>
            </div>

            {/* BIO */}
            <div>
              <p className="text-xs uppercase text-gray-400 mb-1">Bio</p>
              <p className="text-sm text-gray-200">
                A rogue mage from the shattered realm of Vel'Kara. Zara wanders
                the rift lines seeking lost arcane artifacts.
              </p>
            </div>

            {/* SOCIAL */}
            <div>
              <p className="text-xs uppercase text-gray-400 mb-2">
                Social Links
              </p>

              <ul className="flex flex-col gap-2">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.url}
                      target="_blank"
                      className="flex items-center gap-2 hover:text-teal-400 transition"
                    >
                      {social.icon}
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* METRICS */}
            <div className="mt-auto">
              <p className="text-xs uppercase text-gray-400 mb-2">
                Dashboard Metrics
              </p>

              <div className="flex gap-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex flex-col items-center flex-1 bg-white/10 rounded-lg p-3"
                  >
                    <div className="flex items-center gap-1 mb-1">
                      {metric.icon}
                      <span className="font-bold">{metric.value}</span>
                    </div>
                    <span className="text-[10px] text-center text-gray-300">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RESET BUTTON */}
      <Button
        onClick={handleReset}
        disabled={!isFlipped}
        className="flex items-center gap-2"
      >
        <RotateCcw size={16} />
        Reset Card
      </Button>
    </div>
  );
};

export default NPCCard;