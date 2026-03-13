'use client'

import React, { useState, useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import {
  User,
  Briefcase,
  EnvelopeSimple,
  UploadSimple,
} from "@phosphor-icons/react"

import NPCCard from "@/components/ui/NPCCard"

gsap.registerPlugin(ScrollTrigger)

interface CardData {
  fullName: string
  company: string
  email: string
  profileImage: string | null
}

const defaultCard: CardData = {
  fullName: "",
  company: "",
  email: "",
  profileImage: null,
}

export default function BuilderSection() {

  const [formData, setFormData] = useState<CardData>(defaultCard)

  const sectionRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {

    if (!sectionRef.current) return

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    )

  }, [])

  const handleChange = (field: keyof CardData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = (ev) => {

      const result = ev.target?.result as string

      setFormData(prev => ({
        ...prev,
        profileImage: result
      }))
    }

    reader.readAsDataURL(file)
  }

  return (

    <section
      ref={sectionRef}
      className="relative py-24 px-6 bg-[#05060B] overflow-hidden"
    >

      {/* FLOATING GLOW ORBS */}

      <div className="pointer-events-none absolute inset-0 z-0">

        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
        <div className="orb orb4" />

      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto">

        {/* HEADER */}

        <div className="mb-20 max-w-3xl">

          <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full
          border border-teal-500/30 bg-teal-500/10 text-teal-400 text-sm">

            ✦ LIVE PREVIEW

          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white">

            <span className="text-gray-200">See it in</span>{" "}

            <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              action
            </span>

          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* FORM */}

          <div className="flex flex-col gap-6">

            <FormField
              icon={<User size={20} className="text-gray-400"/>}
              label="Name"
              placeholder="Jane Doe"
              value={formData.fullName}
              onChange={(v)=>handleChange("fullName",v)}
            />

            <FormField
              icon={<Briefcase size={20} className="text-gray-400"/>}
              label="Company"
              placeholder="Acme Corp"
              value={formData.company}
              onChange={(v)=>handleChange("company",v)}
            />

            <FormField
              icon={<EnvelopeSimple size={20} className="text-gray-400"/>}
              label="Email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(v)=>handleChange("email",v)}
            />

            <button
              onClick={()=>fileInputRef.current?.click()}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-700 text-gray-200 hover:bg-[#111]"
            >

              <UploadSimple size={18}/>

              Upload Image

            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />

          </div>

          {/* CARD PREVIEW */}

          <div className="relative flex justify-center lg:sticky top-24 h-fit">

            {/* glow behind card */}

            <div className="absolute w-[280px] h-[280px] bg-indigo-500/30 blur-[120px] rounded-full"/>

            <NPCCard
              name={formData.fullName}
              bio={formData.company}
              email={formData.email}
              image={formData.profileImage}
            />

          </div>

        </div>

      </div>

    </section>
  )
}

interface FormFieldProps{
  icon:React.ReactNode
  label:string
  placeholder:string
  value:string
  onChange:(v:string)=>void
}

function FormField({
  icon,
  label,
  placeholder,
  value,
  onChange
}:FormFieldProps){

  return(

    <div className="flex flex-col gap-1.5">

      <label className="text-sm text-gray-300">
        {label}
      </label>

      <div className="flex items-center gap-3 bg-[#0f1118] border border-gray-800 rounded-lg px-4 py-3">

        {icon}

        <input
          placeholder={placeholder}
          value={value}
          onChange={(e)=>onChange(e.target.value)}
          className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
        />

      </div>

    </div>

  )
}