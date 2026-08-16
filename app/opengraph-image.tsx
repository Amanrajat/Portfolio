import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08090b",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 56,
              height: 56,
              borderRadius: 12,
              background: "rgba(52,211,153,0.12)",
              border: "1px solid rgba(52,211,153,0.35)",
              color: "#34d399",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ display: "flex", color: "#9aa2ae", fontSize: 24 }}>
            {profile.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#f5f6f7",
            fontSize: 56,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 950,
          }}
        >
          {profile.tagline}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            color: "#9aa2ae",
            fontSize: 28,
            maxWidth: 900,
          }}
        >
          {profile.role} · Python · Django · REST APIs
        </div>
      </div>
    ),
    { ...size }
  );
}
