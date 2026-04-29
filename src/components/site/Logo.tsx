import { cn } from "@/lib/utils";

type Variant = "default" | "compact" | "blob";

interface LogoProps {
  variant?: Variant;
  className?: string;
}

/**
 * Smalltech wordmark: "СМОЛЛ ТЕХ<<" with the signature double-chevron.
 * - default: full wordmark, two lines
 * - compact: single-line short mark for the header
 * - blob: wordmark sitting on the violet blob (used as a brand mark in heroes)
 */
const Chevrons = ({ className }: { className?: string }) => (
  // Two chevrons pointing left, slightly overlapped — matches the brand "<<"
  <svg
    viewBox="0 0 40 28"
    fill="none"
    aria-hidden
    className={cn("inline-block", className)}
  >
    <path d="M18 2 L4 14 L18 26" stroke="currentColor" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" />
    <path d="M36 2 L22 14 L36 26" stroke="currentColor" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" />
  </svg>
);

const Logo = ({ variant = "default", className }: LogoProps) => {
  if (variant === "compact") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 font-display font-extrabold uppercase leading-none tracking-tight",
          className
        )}
      >
        <span className="text-foreground">смолл</span>
        <span className="text-foreground">тех</span>
        <Chevrons className="h-[0.7em] w-auto text-primary -ml-0.5" />
      </span>
    );
  }

  if (variant === "blob") {
    return (
      <div className={cn("relative inline-flex items-center justify-center", className)}>
        <div
          aria-hidden
          className="absolute inset-0 rounded-[55%] blob-violet"
        />
        <div className="relative px-10 py-8 text-center">
          <div className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
            смолл
          </div>
          <div className="mt-1 inline-flex items-baseline gap-2">
            <span className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
              тех
            </span>
            <Chevrons className="h-7 w-auto text-black sm:h-9" />
          </div>
        </div>
      </div>
    );
  }

  // default: stacked wordmark
  return (
    <div className={cn("inline-flex flex-col font-display font-extrabold uppercase leading-[0.95] tracking-tight text-foreground", className)}>
      <span>смолл</span>
      <span className="inline-flex items-baseline gap-2">
        тех
        <Chevrons className="h-[0.7em] w-auto text-primary" />
      </span>
    </div>
  );
};

export default Logo;
