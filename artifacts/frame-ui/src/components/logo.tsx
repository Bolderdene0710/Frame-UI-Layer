interface LogoProps {
  size?: number;
  className?: string;
  variant?: "icon" | "full";
}

export function FrameUILogo({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="FrameUI logo"
    >
      {/* Outer rounded square */}
      <rect width="28" height="28" rx="7" className="fill-foreground" />

      {/* F letter - top bar */}
      <rect x="7" y="7" width="10" height="2.5" rx="1" className="fill-background" />
      {/* F letter - vertical bar */}
      <rect x="7" y="7" width="2.5" height="14" rx="1" className="fill-background" />
      {/* F letter - middle bar */}
      <rect x="7" y="12.75" width="7.5" height="2.5" rx="1" className="fill-background" />

      {/* UI mark - two dots (representing U and I) */}
      <rect x="17.5" y="13" width="3.5" height="2.5" rx="1" className="fill-background opacity-70" />
      <rect x="17.5" y="17" width="3.5" height="4" rx="1" className="fill-background opacity-70" />
    </svg>
  );
}

export function FrameUIWordmark({ height = 22, className = "" }: { height?: number; className?: string }) {
  const scale = height / 22;
  const w = Math.round(110 * scale);
  return (
    <svg
      width={w}
      height={height}
      viewBox="0 0 110 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="FrameUI"
    >
      {/* F */}
      <path d="M2 2h10v3H5v4h6v3H5v8H2V2Z" className="fill-foreground" />
      {/* r */}
      <path d="M14 8h3v2.2c.6-1.5 1.8-2.4 3.5-2.4V11c-2 0-3.5.8-3.5 3.2V20h-3V8Z" className="fill-foreground" />
      {/* a */}
      <path d="M22 13.5c0-4 2.2-6 5.5-6 3.2 0 5.5 2 5.5 6V20h-3v-1.4c-.7 1-1.8 1.6-3.2 1.6-2.4 0-4.8-1.5-4.8-4.5Zm8 .5c0-1.8-1-3-2.5-3-1.6 0-2.5 1.2-2.5 3s1 3 2.5 3c1.5 0 2.5-1.2 2.5-3Z" className="fill-foreground" />
      {/* m */}
      <path d="M36 8h3v1.6c.7-1 1.8-1.8 3.2-1.8 1.5 0 2.7.7 3.3 1.9.8-1.2 2-1.9 3.5-1.9 2.5 0 4 1.8 4 4.8V20h-3v-7c0-1.5-.6-2.4-1.8-2.4-1.2 0-2 .9-2 2.6V20h-3v-7c0-1.5-.6-2.4-1.8-2.4-1.2 0-2 .9-2 2.6V20h-3V8Z" className="fill-foreground" />
      {/* e */}
      <path d="M56 14c0-3.8 2.4-6.2 5.8-6.2 3.3 0 5.5 2.2 5.5 6v.9H59c.3 1.7 1.4 2.7 3 2.7 1.2 0 2.2-.5 2.8-1.4l2.2 1.5C66 19.2 64.2 20.2 62 20.2c-3.8 0-6-2.5-6-6.2Zm8.5-1.2c-.2-1.5-1.1-2.5-2.7-2.5-1.5 0-2.5 1-2.8 2.5h5.5Z" className="fill-foreground" />

      {/* separator dot */}
      <circle cx="71" cy="14" r="1.5" className="fill-foreground opacity-30" />

      {/* U */}
      <path d="M75 2h3v12c0 1.8 1 2.8 2.5 2.8s2.5-1 2.5-2.8V2h3v12.2c0 3.3-2.2 5.6-5.5 5.6C77.2 19.8 75 17.5 75 14.2V2Z" className="fill-foreground" />
      {/* I */}
      <path d="M89 2h3v18h-3V2Z" className="fill-foreground" />
    </svg>
  );
}
