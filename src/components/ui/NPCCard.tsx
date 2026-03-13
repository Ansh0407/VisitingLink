"use client";

import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import visitingLogo from "@/assets/visitinglink.png";

interface NPCCardProps {
  name?: string;
  bio?: string;
  image?: string | null;
  email?: string;
}

const NPCCard: React.FC<NPCCardProps> = ({
  name,
  bio,
  image,
  email,
}) => {

  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => setIsFlipped(prev => !prev)

  // Auto flip every 3 seconds
  useEffect(() => {

    const interval = setInterval(() => {
      setIsFlipped(prev => !prev)
    }, 3000)

    return () => clearInterval(interval)

  }, [])

  return (

    <div className="flex flex-col items-center w-full">

      {/* Card Container */}

      <div
        className="
        relative
        w-[260px] h-[420px]
        sm:w-[300px] sm:h-[480px]
        md:w-[320px] md:h-[520px]
        animate-[float_6s_ease-in-out_infinite]
        "
        style={{ perspective: "1400px" }}
      >

        {/* Flip Card */}

        <div
          onClick={handleFlip}
          className={`relative w-full h-full rounded-xl transform-gpu
          transition-transform duration-700 ease-[cubic-bezier(.4,.2,.2,1)]
          ${isFlipped ? "rotate-y-180 scale-[1.02]" : "scale-100"}
          shadow-[0_20px_60px_rgba(79,70,229,0.35)]`}
          style={{ transformStyle: "preserve-3d" }}
        >

          {/* FRONT */}

          <div
            className="
            absolute inset-0
            flex flex-col items-center justify-center
            gap-4 sm:gap-6
            p-6 sm:p-8
            rounded-xl
            bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-900
            text-white
            "
            style={{ backfaceVisibility: "hidden" }}
          >

            <img
              src={image || "https://i.pravatar.cc/300"}
              className="
              w-24 h-24
              sm:w-28 sm:h-28
              md:w-32 md:h-32
              rounded-full object-cover border-4 border-white/30
              "
              alt="profile"
            />

            <div className="text-center space-y-1 sm:space-y-2">

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                {name || "Your Name"}
              </h3>

              <p className="text-xs sm:text-sm uppercase opacity-80">
                {bio || "Company"}
              </p>

              {email && (

                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">

                  <Mail size={14} />

                  <span className="truncate max-w-[180px]">
                    {email}
                  </span>

                </div>

              )}

            </div>

          </div>

          {/* BACK */}

          <div
            className="
            absolute inset-0
            flex items-center justify-center
            rounded-xl
            bg-gradient-to-br from-[#0F0F14] to-[#1C1C28]
            "
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >

            <img
              src={visitingLogo.src}
              alt="Visitinglink Logo"
              className="
              w-36
              sm:w-40
              md:w-48
              object-contain opacity-90
              "
            />

          </div>

        </div>

      </div>

    </div>

  )
}

export default NPCCard