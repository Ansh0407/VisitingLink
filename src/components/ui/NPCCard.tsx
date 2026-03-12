"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  RotateCcw,
  Instagram,
  Facebook,
  Linkedin,
  Eye,
  MousePointerClick,
  TrendingUp,
  Phone,
  Mail,
} from "lucide-react";

import { TwitterLogo } from "@phosphor-icons/react";

interface Socials {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
}

interface NPCCardProps {
  name?: string;
  title?: string;
  bio?: string;
  image?: string | null;
  phone?: string;
  email?: string;
  socials?: Socials;
}

interface SocialLink {
  icon: React.ReactNode;
  label: string;
  url: string;
}

const NPCCard: React.FC<NPCCardProps> = ({
  name,
  title,
  bio,
  image,
  phone,
  email,
  socials = {},
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped((prev) => !prev);
  const handleReset = () => setIsFlipped(false);

  const socialLinks: SocialLink[] = [
    socials.instagram && {
      icon: <Instagram size={16} strokeWidth={1.5} />,
      label: "Instagram",
      url: socials.instagram,
    },
    socials.facebook && {
      icon: <Facebook size={16} strokeWidth={1.5} />,
      label: "Facebook",
      url: socials.facebook,
    },
    socials.linkedin && {
      icon: <Linkedin size={16} strokeWidth={1.5} />,
      label: "LinkedIn",
      url: socials.linkedin,
    },
    socials.twitter && {
      icon: <TwitterLogo size={16} weight="regular" />,
      label: "Twitter",
      url: socials.twitter,
    },
  ].filter(Boolean) as SocialLink[];

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

  return (
    <div className="flex flex-col items-center gap-8">

      {/* CARD */}
      <div className="relative w-[320px] h-[520px]" style={{ perspective: "1000px" }}>
        <div
          onClick={handleFlip}
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
              src={image || "https://c.animaapp.com/mmkffyg4e3o4WH/img/ai_1.png"}
              className="w-32 h-32 rounded-full object-cover border-4 border-white/30"
              alt="profile"
            />

            <div className="text-center">
              <h3 className="text-2xl font-bold">{name || "Your Name"}</h3>
              <p className="text-sm opacity-80 uppercase">{title || "Job Title"}</p>
            </div>

            <p className="text-xs opacity-60">Click to reveal details</p>
          </div>

          {/* BACK */}
          <div
            className="absolute inset-0 flex flex-col p-6 gap-4 rounded-xl bg-gray-900 text-white overflow-y-auto"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >

            {/* HEADER */}
            <div className="flex items-center gap-3">
              <img
                src={image || "https://c.animaapp.com/mmkffyg4e3o4WH/img/ai_2.png"}
                className="w-14 h-14 rounded-full object-cover"
                alt="profile"
              />
              <div>
                <h3 className="font-bold text-lg">{name || "Your Name"}</h3>
                <span className="text-xs bg-teal-500 px-2 py-1 rounded">
                  {title || "Title"}
                </span>
              </div>
            </div>

            {/* COMPANY */}
            {bio && (
              <div>
                <p className="text-xs uppercase text-gray-400 mb-1">Company</p>
                <p className="text-sm text-gray-200">{bio}</p>
              </div>
            )}

            {/* CONTACT INFO */}
            {(phone || email) && (
              <div>
                <p className="text-xs uppercase text-gray-400 mb-2">Contact</p>
                <ul className="flex flex-col gap-2">
                  {phone && (
                    <li className="flex items-center gap-2 text-sm text-gray-200">
                      <Phone size={14} className="text-teal-400 shrink-0" />
                      <span>{phone}</span>
                    </li>
                  )}
                  {email && (
                    <li className="flex items-center gap-2 text-sm text-gray-200">
                      <Mail size={14} className="text-teal-400 shrink-0" />
                      <a
                        href={`mailto:${email}`}
                        className="hover:text-teal-400 transition truncate"
                      >
                        {email}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            )}

            {/* SOCIAL LINKS */}
            <div>
              <p className="text-xs uppercase text-gray-400 mb-2">Social Links</p>
              <ul className="flex flex-col gap-2">
                {socialLinks.length ? (
                  socialLinks.map((social) => (
                    <li key={social.label}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm hover:text-teal-400 transition"
                      >
                        {social.icon}
                        {social.label}
                      </a>
                    </li>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">Add socials in the builder</p>
                )}
              </ul>
            </div>

            {/* METRICS */}
            <div className="mt-auto">
              <p className="text-xs uppercase text-gray-400 mb-2">Dashboard Metrics</p>
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