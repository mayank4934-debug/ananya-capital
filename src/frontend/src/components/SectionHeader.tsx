interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-10 ${center ? "text-center" : ""}`}
      data-ocid="section.header"
    >
      {badge && (
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            light
              ? "bg-primary/20 text-primary-foreground"
              : "bg-primary/10 text-primary"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold font-display mb-3 ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg max-w-2xl ${center ? "mx-auto" : ""} ${
            light ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
