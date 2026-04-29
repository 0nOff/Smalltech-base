import { ReactNode } from "react";

interface StatCardProps {
  value: ReactNode;
  label: ReactNode;
  hint?: ReactNode;
  accent?: boolean;
}

const StatCard = ({ value, label, hint, accent = false }: StatCardProps) => {
  return (
    <div className="surface-card relative overflow-hidden rounded-2xl p-6 sm:p-7">
      {accent && (
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-amber/15 blur-3xl" />
      )}
      <div className="relative">
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
        <p
          className={`mt-4 font-display text-4xl font-semibold leading-none sm:text-5xl ${
            accent ? "text-gradient-amber" : "text-foreground"
          }`}
        >
          {value}
        </p>
        {hint && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{hint}</p>
        )}
      </div>
    </div>
  );
};

export default StatCard;
