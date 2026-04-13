import React from "react";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "orange";
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", variant = "light", showTagline = false }) => {
  const colors = {
    light: { text: "#FFFFFF", beam: "#FC7D34" },
    dark: { text: "#42474E", beam: "#FC7D34" },
    orange: { text: "#FC7D34", beam: "#42474E" },
  };

  const current = colors[variant];

  return (
    <div className={`flex flex-col items-start ${className}`}>
      <svg
        viewBox={showTagline ? "0 0 400 130" : "0 0 400 100"}
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* S */}
        <text
          x="0"
          y="80"
          fill={current.text}
          style={{ font: "bold 80px 'Zen Dots', cursive", letterSpacing: "-0.05em" }}
        >
          S
        </text>
        {/* I */}
        <text
          x="65"
          y="80"
          fill={current.text}
          style={{ font: "bold 80px 'Zen Dots', cursive", letterSpacing: "-0.05em" }}
        >
          I
        </text>
        {/* L */}
        <text
          x="110"
          y="80"
          fill={current.text}
          style={{ font: "bold 80px 'Zen Dots', cursive", letterSpacing: "-0.05em" }}
        >
          L
        </text>
        {/* E */}
        <text
          x="175"
          y="80"
          fill={current.text}
          style={{ font: "bold 80px 'Zen Dots', cursive", letterSpacing: "-0.05em" }}
        >
          E
        </text>
        {/* X with Beam */}
        <g transform="translate(245, 0)">
          <text
            x="0"
            y="80"
            fill={current.text}
            style={{ font: "bold 80px 'Zen Dots', cursive", letterSpacing: "-0.05em" }}
          >
            X
          </text>
          {/* The "Viga" (Beam) - Diagonal cut through the X */}
          <path
            d="M 15 25 L 45 55 L 45 80 L 30 80 L 0 50 Z"
            fill={current.beam}
            style={{ mixBlendMode: variant === "light" ? "overlay" : "normal", opacity: 0.9 }}
          />
        </g>
        {/* Dot */}
        <circle cx="330" cy="75" r="6" fill={current.beam} />

        {showTagline && (
          <text
            x="0"
            y="120"
            fill={current.text}
            style={{ 
              font: "500 18px 'Inter', sans-serif", 
              letterSpacing: "0.6em",
              opacity: 0.6
            }}
          >
            ENGENHARIA & GESTÃO
          </text>
        )}
      </svg>
    </div>
  );
};

export const Symbol: React.FC<{ className?: string; variant?: "light" | "dark" }> = ({ 
  className = "", 
  variant = "light" 
}) => {
  const color = variant === "light" ? "#FFFFFF" : "#42474E";
  const beam = "#FC7D34";

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="central"
          textAnchor="middle"
          fill={color}
          style={{ font: "bold 80px 'Zen Dots', cursive" }}
        >
          X
        </text>
        <path
          d="M 35 35 L 60 60 L 60 80 L 45 80 L 20 55 Z"
          fill={beam}
          style={{ mixBlendMode: variant === "light" ? "overlay" : "normal", opacity: 0.9 }}
        />
      </svg>
    </div>
  );
};
