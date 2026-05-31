import { ImageResponse } from "next/og"

export const alt = "Periyakaruppan Nagappan — Software Engineer Portfolio"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #050505 0%, #0a0a1a 50%, #050505 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Border glow line at top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #6366f1, #a855f7, #6366f1)",
            display: "flex",
          }}
        />

        {/* Logo / Avatar circle */}
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "32px",
            boxShadow: "0 0 60px rgba(99,102,241,0.3)",
          }}
        >
          <span style={{ fontSize: "48px", fontWeight: 700, color: "white" }}>P</span>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 800,
            background: "linear-gradient(135deg, #e0e0ff, #ffffff)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "12px",
            display: "flex",
          }}
        >
          Periyakaruppan Nagappan
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.7)",
            marginBottom: "32px",
            display: "flex",
          }}
        >
          Member Technical Staff @ Zoho | Full Stack Developer
        </div>

        {/* Tagline with gradient */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: 600,
            background: "linear-gradient(90deg, #6366f1, #a855f7)",
            backgroundClip: "text",
            color: "transparent",
            marginBottom: "40px",
            display: "flex",
          }}
        >
          Building Secure, Scalable & Intelligent Systems
        </div>

        {/* Tech badges */}
        <div style={{ display: "flex", gap: "12px" }}>
          {["Java", "React", "Node.js", "PostgreSQL", "AI/ML"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.6)",
                fontSize: "14px",
                fontWeight: 500,
                display: "flex",
              }}
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            right: "32px",
            fontSize: "14px",
            color: "rgba(255,255,255,0.3)",
            display: "flex",
          }}
        >
          periyakaruppan.is-a.dev
        </div>
      </div>
    ),
    { ...size }
  )
}
