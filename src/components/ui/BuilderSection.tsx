'use client'

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import {
  User,
  Briefcase,
  Phone,
  EnvelopeSimple,
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
  FacebookLogo,
  UploadSimple,
  Eye,
  ChartBar,
} from "@phosphor-icons/react"

gsap.registerPlugin(ScrollTrigger)

interface CardData {
  fullName: string
  jobTitle: string
  company: string
  phone: string
  email: string
  twitter: string
  linkedin: string
  instagram: string
  facebook: string
  profileImage: string | null
}

const defaultCard: CardData = {
  fullName: "",
  jobTitle: "",
  company: "",
  phone: "",
  email: "",
  twitter: "",
  linkedin: "",
  instagram: "",
  facebook: "",
  profileImage: null,
}

export default function BuilderSection() {
  const [formData, setFormData] = useState<CardData>(defaultCard)
  const [previewData, setPreviewData] = useState<CardData>(defaultCard)
  const [cardHovered, setCardHovered] = useState(false)

  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
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
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePreview = () => {
    setPreviewData({ ...formData })

    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6 }
      )
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    if (!file) return

    const reader = new FileReader()

    reader.onload = (ev) => {
      const result = ev.target?.result as string
      setFormData((prev) => ({ ...prev, profileImage: result }))
    }

    reader.readAsDataURL(file)
  }

  const socials = [
    { key: "twitter", icon: TwitterLogo, value: previewData.twitter },
    { key: "linkedin", icon: LinkedinLogo, value: previewData.linkedin },
    { key: "instagram", icon: InstagramLogo, value: previewData.instagram },
    { key: "facebook", icon: FacebookLogo, value: previewData.facebook },
  ].filter((s) => s.value)

  const displayName = previewData.fullName || "Your Name"
  const displayJob = previewData.jobTitle || "Job Title"
  const displayCompany = previewData.company || "Company"

  return (
    <section
      id="builder"
      ref={sectionRef}
      className="py-24 px-6 bg-[#05060B]"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-white mb-4">
            Create Your Digital Card
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto">
            Fill in your details and preview your interactive digital card instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT FORM */}
          <div className="flex flex-col gap-6">

            <FormField
              icon={<User size={20} className="text-gray-400" />}
              label="Full Name"
              placeholder="Jane Doe"
              value={formData.fullName}
              onChange={(v) => handleChange("fullName", v)}
            />

            <FormField
              icon={<Briefcase size={20} className="text-gray-400" />}
              label="Job Title"
              placeholder="Product Designer"
              value={formData.jobTitle}
              onChange={(v) => handleChange("jobTitle", v)}
            />

            <FormField
              icon={<Briefcase size={20} className="text-gray-400" />}
              label="Company"
              placeholder="Acme Corp"
              value={formData.company}
              onChange={(v) => handleChange("company", v)}
            />

            <FormField
              icon={<Phone size={20} className="text-gray-400" />}
              label="Phone"
              placeholder="+1 000 000 000"
              value={formData.phone}
              onChange={(v) => handleChange("phone", v)}
            />

            <FormField
              icon={<EnvelopeSimple size={20} className="text-gray-400" />}
              label="Email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(v) => handleChange("email", v)}
            />

            <FormField
              icon={<TwitterLogo size={20} className="text-gray-400" />}
              label="Twitter"
              placeholder="@username"
              value={formData.twitter}
              onChange={(v) => handleChange("twitter", v)}
            />

            <FormField
              icon={<LinkedinLogo size={20} className="text-gray-400" />}
              label="LinkedIn"
              placeholder="linkedin.com/in/name"
              value={formData.linkedin}
              onChange={(v) => handleChange("linkedin", v)}
            />

            <FormField
              icon={<InstagramLogo size={20} className="text-gray-400" />}
              label="Instagram"
              placeholder="@username"
              value={formData.instagram}
              onChange={(v) => handleChange("instagram", v)}
            />

            {/* Upload + Preview Buttons */}

            <div className="flex gap-4 pt-2">

              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-700 text-gray-200 hover:bg-[#111]"
              >
                <UploadSimple size={18} />
                Upload Image
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />

              <button
                onClick={handlePreview}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Eye size={18} />
                Preview
              </button>

            </div>
          </div>

          {/* CARD PREVIEW */}

          <div className="flex justify-center lg:sticky top-24 h-fit">

            <div
              ref={cardRef}
              onMouseEnter={() => setCardHovered(true)}
              onMouseLeave={() => setCardHovered(false)}
              className="w-full max-w-sm"
            >

              <div className="rounded-xl border border-gray-800 bg-gradient-to-br from-[#0f1118] to-[#0b0c12] overflow-hidden">

                {/* Top banner */}

                <div className="h-28 bg-gradient-to-r from-blue-600/40 to-purple-600/40" />

                <div className="px-6 pb-6 -mt-10">

                  {/* Avatar */}

                  <div className="w-20 h-20 rounded-full border-2 border-blue-500 overflow-hidden bg-black mb-4">

                    {previewData.profileImage ? (
                      <img
                        src={previewData.profileImage}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User size={40} className="text-gray-500" />
                      </div>
                    )}

                  </div>

                  <h3 className="text-xl text-white font-semibold">
                    {displayName}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {displayJob}
                  </p>

                  <p className="text-blue-400 text-sm mb-4">
                    {displayCompany}
                  </p>

                  {previewData.phone && (
                    <p className="text-gray-300 text-sm">
                      {previewData.phone}
                    </p>
                  )}

                  {previewData.email && (
                    <p className="text-gray-300 text-sm">
                      {previewData.email}
                    </p>
                  )}

                </div>

                {/* Hover Socials */}

                <AnimatePresence>
                  {cardHovered && (

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="border-t border-gray-800 p-4 bg-[#07080d]"
                    >

                      <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
                        <ChartBar size={14} />
                        1,247 Profile Views
                      </div>

                      {socials.length > 0 ? (
                        <div className="flex flex-wrap gap-2">

                          {socials.map((s) => (
                            <div
                              key={s.key}
                              className="flex items-center gap-1 text-xs px-3 py-1 bg-[#111] rounded-md border border-gray-700"
                            >
                              <s.icon size={14} />
                              {s.value}
                            </div>
                          ))}

                        </div>
                      ) : (
                        <p className="text-xs text-gray-500">
                          Add socials to see them here
                        </p>
                      )}

                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                Hover over the card to see social links
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

interface FormFieldProps {
  icon: React.ReactNode
  label: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  type?: string
}

function FormField({
  icon,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: FormFieldProps) {

  return (
    <div className="flex flex-col gap-1.5">

      <label className="text-sm text-gray-300">
        {label}
      </label>

      <div className="flex items-center gap-3 bg-[#0f1118] border border-gray-800 rounded-lg px-4 py-3">

        {icon}

        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
        />

      </div>

    </div>
  )
}