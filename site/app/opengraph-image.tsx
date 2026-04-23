import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Forma Reta — Construção, Remodelação e Demolição em Lisboa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          color: "#FAFAF7",
          padding: "72px",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(to right, rgba(250,250,247,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(250,250,247,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Top brand row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            position: "relative",
          }}
        >
          <svg
            width="56"
            height="60"
            viewBox="0 0 52 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 24 L26 4 L48 24" stroke="#FAFAF7" strokeWidth="1.6" />
            <path d="M4 24 V52" stroke="#FAFAF7" strokeWidth="1.6" />
            <path d="M48 24 V52" stroke="#FAFAF7" strokeWidth="1.6" />
            <path d="M4 52 H48" stroke="#FAFAF7" strokeWidth="1.6" />
            <path d="M14 52 V28" stroke="#FAFAF7" strokeWidth="1.6" />
            <path d="M14 28 H23" stroke="#FAFAF7" strokeWidth="1.6" />
            <path d="M14 37 H21" stroke="#FAFAF7" strokeWidth="1.6" />
            <path
              d="M28 52 V28 H35 Q39 28 39 34 Q39 40 35 40 H28"
              stroke="#FAFAF7"
              strokeWidth="1.6"
            />
            <path d="M34 40 L40 52" stroke="#FAFAF7" strokeWidth="1.6" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: 34,
                letterSpacing: "0.02em",
                lineHeight: 1,
              }}
            >
              Forma Reta
            </div>
            <div
              style={{
                marginTop: 8,
                fontFamily: "sans-serif",
                fontSize: 13,
                letterSpacing: "0.4em",
                textTransform: "uppercase",
                color: "rgba(250,250,247,0.55)",
              }}
            >
              Construção · Remodelação
            </div>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontFamily: "sans-serif",
              fontSize: 15,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#B89968",
              marginBottom: 24,
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span
              style={{
                display: "block",
                width: 48,
                height: 1,
                background: "#B89968",
              }}
            />
            Reabilitação · Lisboa
          </div>

          <div
            style={{
              fontSize: 88,
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Construímos com precisão.</span>
            <span style={{ display: "flex" }}>
              Reabilitamos&nbsp;
              <span style={{ fontStyle: "italic", color: "#B89968" }}>
                com rigor.
              </span>
            </span>
          </div>
        </div>

        {/* Bottom rail */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            position: "relative",
            fontFamily: "sans-serif",
            fontSize: 14,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(250,250,247,0.55)",
          }}
        >
          <span>Construção · Remodelação · Demolição</span>
          <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 999,
                background: "#B89968",
              }}
            />
            formareta.pt
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
