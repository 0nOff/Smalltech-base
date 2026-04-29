import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) => {
  const isCenter = align === "center";
  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <div className={`mb-5 ${isCenter ? "flex justify-center" : ""}`}>
          <span className="chip-amber">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg text-balance">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
