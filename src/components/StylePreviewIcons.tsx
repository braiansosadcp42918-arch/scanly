// Small SVG previews for QR dot/corner styles

interface StyleIconProps {
  selected?: boolean;
  color?: string;
}

const SIZE = 36;
const BG = 'transparent';

export function DotsSquareIcon({ selected, color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <rect x="4" y="4" width="7" height="7" fill={color} />
      <rect x="14" y="4" width="7" height="7" fill={color} />
      <rect x="24" y="4" width="7" height="7" fill={color} />
      <rect x="4" y="14" width="7" height="7" fill={color} />
      <rect x="14" y="14" width="7" height="7" fill={color} />
      <rect x="24" y="14" width="7" height="7" fill={color} />
      <rect x="4" y="24" width="7" height="7" fill={color} />
      <rect x="14" y="24" width="7" height="7" fill={color} />
      <rect x="24" y="24" width="7" height="7" fill={color} />
    </svg>
  );
}

export function DotsRoundedIcon({ selected, color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <rect x="4" y="4" width="7" height="7" rx="2" fill={color} />
      <rect x="14" y="4" width="7" height="7" rx="2" fill={color} />
      <rect x="24" y="4" width="7" height="7" rx="2" fill={color} />
      <rect x="4" y="14" width="7" height="7" rx="2" fill={color} />
      <rect x="14" y="14" width="7" height="7" rx="2" fill={color} />
      <rect x="24" y="14" width="7" height="7" rx="2" fill={color} />
      <rect x="4" y="24" width="7" height="7" rx="2" fill={color} />
      <rect x="14" y="24" width="7" height="7" rx="2" fill={color} />
      <rect x="24" y="24" width="7" height="7" rx="2" fill={color} />
    </svg>
  );
}

export function DotsDotsIcon({ selected, color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <circle cx="7.5" cy="7.5" r="3.5" fill={color} />
      <circle cx="18" cy="7.5" r="3.5" fill={color} />
      <circle cx="28.5" cy="7.5" r="3.5" fill={color} />
      <circle cx="7.5" cy="18" r="3.5" fill={color} />
      <circle cx="18" cy="18" r="3.5" fill={color} />
      <circle cx="28.5" cy="18" r="3.5" fill={color} />
      <circle cx="7.5" cy="28.5" r="3.5" fill={color} />
      <circle cx="18" cy="28.5" r="3.5" fill={color} />
      <circle cx="28.5" cy="28.5" r="3.5" fill={color} />
    </svg>
  );
}

export function DotsClassyIcon({ selected, color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <path d="M4 4h7v7H4z" fill={color} />
      <path d="M14 4h7v3.5a3.5 3.5 0 01-3.5 3.5H14V4z" fill={color} />
      <path d="M24 4h7v7h-7z" fill={color} />
      <path d="M4 14h3.5a3.5 3.5 0 013.5 3.5V21H4v-7z" fill={color} />
      <path d="M14 14h7v7h-7z" fill={color} />
      <path d="M24 14h7v7h-7z" fill={color} />
      <path d="M4 24h7v7H4z" fill={color} />
      <path d="M14 24h7v7h-7z" fill={color} />
      <path d="M24 24h7v7h-7z" fill={color} />
    </svg>
  );
}

export function DotsClassyRoundedIcon({ selected, color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <rect x="4" y="4" width="7" height="7" rx="1" fill={color} />
      <rect x="14" y="4" width="7" height="7" rx="3.5" fill={color} />
      <rect x="24" y="4" width="7" height="7" rx="1" fill={color} />
      <rect x="4" y="14" width="7" height="7" rx="3.5" fill={color} />
      <rect x="14" y="14" width="7" height="7" rx="1" fill={color} />
      <rect x="24" y="14" width="7" height="7" rx="3.5" fill={color} />
      <rect x="4" y="24" width="7" height="7" rx="1" fill={color} />
      <rect x="14" y="24" width="7" height="7" rx="3.5" fill={color} />
      <rect x="24" y="24" width="7" height="7" rx="1" fill={color} />
    </svg>
  );
}

export function DotsExtraRoundedIcon({ selected, color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <rect x="4" y="4" width="7" height="7" rx="3.5" fill={color} />
      <rect x="14" y="4" width="7" height="7" rx="3.5" fill={color} />
      <rect x="24" y="4" width="7" height="7" rx="3.5" fill={color} />
      <rect x="4" y="14" width="7" height="7" rx="3.5" fill={color} />
      <rect x="14" y="14" width="7" height="7" rx="3.5" fill={color} />
      <rect x="24" y="14" width="7" height="7" rx="3.5" fill={color} />
      <rect x="4" y="24" width="7" height="7" rx="3.5" fill={color} />
      <rect x="14" y="24" width="7" height="7" rx="3.5" fill={color} />
      <rect x="24" y="24" width="7" height="7" rx="3.5" fill={color} />
    </svg>
  );
}

// Corner square icons
export function CornerSquareIcon({ selected, color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <rect x="4" y="4" width="28" height="28" rx="0" stroke={color} strokeWidth="4" fill="none" />
      <rect x="12" y="12" width="12" height="12" fill={color} />
    </svg>
  );
}

export function CornerDotIcon({ selected, color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="14" stroke={color} strokeWidth="4" fill="none" />
      <circle cx="18" cy="18" r="6" fill={color} />
    </svg>
  );
}

export function CornerExtraRoundedIcon({ selected, color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <rect x="4" y="4" width="28" height="28" rx="8" stroke={color} strokeWidth="4" fill="none" />
      <rect x="12" y="12" width="12" height="12" rx="3" fill={color} />
    </svg>
  );
}

// Inner corner icons
export function InnerDotIcon({ selected, color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="8" fill={color} />
    </svg>
  );
}

export function InnerSquareIcon({ selected, color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <rect x="10" y="10" width="16" height="16" fill={color} />
    </svg>
  );
}

// Frame preview icons
export function FrameNoneIcon({ color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <rect x="8" y="8" width="20" height="20" rx="2" stroke={color} strokeWidth="1.5" strokeDasharray="3 2" />
    </svg>
  );
}

export function FrameSimpleIcon({ color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <rect x="4" y="4" width="28" height="24" stroke={color} strokeWidth="1.5" />
      <rect x="8" y="8" width="20" height="16" rx="1" fill={color} opacity="0.15" />
      <line x1="10" y1="32" x2="26" y2="32" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export function FrameRoundedIcon({ color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <rect x="4" y="3" width="28" height="24" rx="6" stroke={color} strokeWidth="2" />
      <rect x="10" y="8" width="16" height="14" rx="2" fill={color} opacity="0.15" />
      <rect x="10" y="29" width="16" height="5" rx="2.5" fill={color} />
    </svg>
  );
}

export function FrameBadgeIcon({ color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <rect x="8" y="4" width="20" height="20" rx="2" fill={color} opacity="0.15" />
      <rect x="4" y="27" width="28" height="6" rx="3" fill={color} />
    </svg>
  );
}

export function FrameModernIcon({ color = 'currentColor' }: StyleIconProps) {
  return (
    <svg width={SIZE} height={SIZE} viewBox="0 0 36 36" fill="none">
      <rect x="6" y="4" width="24" height="22" rx="3" stroke={color} strokeWidth="1.5" />
      <line x1="6" y1="26" x2="30" y2="26" stroke={color} strokeWidth="3" />
      <rect x="11" y="29" width="14" height="5" rx="2.5" fill={color} />
    </svg>
  );
}

// Maps for easy lookup
export const DOT_STYLE_ICONS: Record<string, React.FC<StyleIconProps>> = {
  'square': DotsSquareIcon,
  'rounded': DotsRoundedIcon,
  'dots': DotsDotsIcon,
  'classy': DotsClassyIcon,
  'classy-rounded': DotsClassyRoundedIcon,
  'extra-rounded': DotsExtraRoundedIcon,
};

export const CORNER_SQUARE_ICONS: Record<string, React.FC<StyleIconProps>> = {
  'square': CornerSquareIcon,
  'dot': CornerDotIcon,
  'extra-rounded': CornerExtraRoundedIcon,
};

export const CORNER_DOT_ICONS: Record<string, React.FC<StyleIconProps>> = {
  'dot': InnerDotIcon,
  'square': InnerSquareIcon,
};

export const FRAME_ICONS: Record<string, React.FC<StyleIconProps>> = {
  'none': FrameNoneIcon,
  'simple': FrameSimpleIcon,
  'rounded': FrameRoundedIcon,
  'badge': FrameBadgeIcon,
  'modern': FrameModernIcon,
};
