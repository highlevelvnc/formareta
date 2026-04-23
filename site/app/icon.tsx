import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="44"
          height="48"
          viewBox="0 0 52 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 24 L26 4 L48 24" stroke="#FAFAF7" strokeWidth="2.2" />
          <path d="M4 24 V52" stroke="#FAFAF7" strokeWidth="2.2" />
          <path d="M48 24 V52" stroke="#FAFAF7" strokeWidth="2.2" />
          <path d="M4 52 H48" stroke="#FAFAF7" strokeWidth="2.2" />
          <path d="M14 52 V28" stroke="#FAFAF7" strokeWidth="2.2" />
          <path d="M14 28 H23" stroke="#FAFAF7" strokeWidth="2.2" />
          <path d="M14 37 H21" stroke="#FAFAF7" strokeWidth="2.2" />
          <path
            d="M28 52 V28 H35 Q39 28 39 34 Q39 40 35 40 H28"
            stroke="#FAFAF7"
            strokeWidth="2.2"
          />
          <path d="M34 40 L40 52" stroke="#FAFAF7" strokeWidth="2.2" />
        </svg>
      </div>
    ),
    size,
  );
}
