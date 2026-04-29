interface PainBarProps {
  rank: number;
  name: string;
  description: string;
  score: number;
  respondents: number;
  reach?: string;
  tier: "must-cover" | "secondary";
  /** Max score for normalization */
  max?: number;
}

const PainBar = ({
  rank,
  name,
  description,
  score,
  respondents,
  reach,
  tier,
  max = 56,
}: PainBarProps) => {
  const pct = Math.max(8, Math.min(100, (score / max) * 100));
  const isMust = tier === "must-cover";

  return (
    <div className="surface-card group relative overflow-hidden rounded-2xl p-5 sm:p-6 transition-colors hover:border-border/80">
      <div className="flex items-baseline justify-between gap-4">
        <div className="flex items-baseline gap-3 min-w-0">
          <span className="font-mono-tech text-xs text-muted-foreground">
            {String(rank).padStart(2, "0")}
          </span>
          <span
            className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
              isMust ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {isMust ? "must-cover" : "secondary"}
          </span>
        </div>
        <span className="font-display text-2xl font-semibold tabular-nums">
          {score.toFixed(1)}
        </span>
      </div>

      <h3 className="mt-3 font-display text-lg font-semibold sm:text-xl">{name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>

      <div className="mt-5">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary/60">
          <div
            className={`h-full rounded-full transition-all ${
              isMust ? "bg-gradient-amber" : "bg-muted-foreground/40"
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
          <span>{respondents} респондентов</span>
          {reach && <span className="tabular-nums">reach {reach}</span>}
        </div>
      </div>
    </div>
  );
};

export default PainBar;
