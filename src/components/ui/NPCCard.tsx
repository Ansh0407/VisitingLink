"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { RotateCcw, Mail } from "lucide-react";
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
  const handleReset = () => setIsFlipped(false)

  return (

    <div className="flex flex-col items-center gap-8">

      <div
        className="relative w-[320px] h-[520px]"
        style={{ perspective: "1000px" }}
      >

        <div
          onClick={handleFlip}
          className={`relative w-full h-full transition-transform duration-700 rounded-xl ${isFlipped ? "rotate-y-180" : ""
            }`}
          style={{ transformStyle: "preserve-3d" }}
        >

          {/* FRONT */}

          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 rounded-xl bg-gradient-to-br from-purple-700 to-indigo-900 text-white"
            style={{ backfaceVisibility: "hidden" }}
          >

            <img
              src={image || "https://i.pravatar.cc/300"}
              className="w-32 h-32 rounded-full object-cover border-4 border-white/30"
            />

            <div className="text-center space-y-2">

              <h3 className="text-2xl font-bold">
                {name || "Your Name"}
              </h3>

              <p className="text-sm uppercase opacity-80">
                {bio || "Company"}
              </p>

              {email && (

                <div className="flex items-center justify-center gap-2 text-sm">

                  <Mail size={14} />

                  {email}

                </div>

              )}

            </div>

          </div>

          {/* BACK */}

          <div
            className="absolute inset-0 flex items-center justify-center rounded-xl bg-black"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >

            <img
              src={visitingLogo.src}
              alt="Visitinglink Logo"
              className="w-48 object-contain opacity-90"
            />

          </div>

        </div>

      </div>

      <Button
        onClick={handleReset}
        disabled={!isFlipped}
        className="flex items-center gap-2"
      >

        <RotateCcw size={16} />

        Reset Card

      </Button>

    </div>

  )
}

export default NPCCard