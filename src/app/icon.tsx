export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/svg+xml";

export default function Icon() {
  return (
    <svg
      width={size.width}
      height={size.height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Site icon"
    >
      <rect width="32" height="32" rx="6" fill="#0F0F10" />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="14"
        fontFamily="system-ui, -apple-system, Segoe UI, sans-serif"
        fontWeight="700"
        fill="#FFFFFF"
      >
        SK
      </text>
    </svg>
  );
}
