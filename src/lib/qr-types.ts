export type QRContentType = 
  | 'url' 
  | 'text' 
  | 'wifi' 
  | 'email' 
  | 'phone' 
  | 'location' 
  | 'sms' 
  | 'vcard' 
  | 'social';

export interface QRContentConfig {
  type: QRContentType;
  label: string;
  icon: string;
  placeholder: string;
  fields?: { key: string; label: string; placeholder: string; type?: string; required?: boolean }[];
}

export const QR_CONTENT_TYPES: QRContentConfig[] = [
  { type: 'url', label: 'URL', icon: 'Link', placeholder: 'https://ejemplo.com' },
  { type: 'text', label: 'Texto', icon: 'Type', placeholder: 'Escribe tu texto aquí...' },
  { type: 'wifi', label: 'WiFi', icon: 'Wifi', placeholder: '', fields: [
    { key: 'ssid', label: 'Red (SSID)', placeholder: 'Mi WiFi', required: true },
    { key: 'password', label: 'Contraseña', placeholder: '••••••••', type: 'password' },
    { key: 'encryption', label: 'Encriptación', placeholder: 'WPA' },
  ]},
  { type: 'email', label: 'Email', icon: 'Mail', placeholder: '', fields: [
    { key: 'to', label: 'Para', placeholder: 'correo@ejemplo.com', required: true },
    { key: 'subject', label: 'Asunto', placeholder: 'Asunto del correo' },
    { key: 'body', label: 'Mensaje', placeholder: 'Contenido del correo' },
  ]},
  { type: 'phone', label: 'Teléfono', icon: 'Phone', placeholder: '+1234567890' },
  { type: 'location', label: 'Ubicación', icon: 'MapPin', placeholder: '', fields: [
    { key: 'lat', label: 'Latitud', placeholder: '40.7128', required: true },
    { key: 'lng', label: 'Longitud', placeholder: '-74.0060', required: true },
  ]},
  { type: 'sms', label: 'SMS', icon: 'MessageSquare', placeholder: '', fields: [
    { key: 'phone', label: 'Teléfono', placeholder: '+1234567890', required: true },
    { key: 'message', label: 'Mensaje', placeholder: 'Hola!' },
  ]},
  { type: 'vcard', label: 'Contacto', icon: 'Contact', placeholder: '', fields: [
    { key: 'name', label: 'Nombre', placeholder: 'Juan Pérez', required: true },
    { key: 'phone', label: 'Teléfono', placeholder: '+1234567890' },
    { key: 'email', label: 'Email', placeholder: 'juan@ejemplo.com' },
    { key: 'org', label: 'Empresa', placeholder: 'Mi Empresa' },
  ]},
  { type: 'social', label: 'Social', icon: 'Share2', placeholder: 'https://instagram.com/usuario' },
];

export function buildQRData(type: QRContentType, value: string, fields?: Record<string, string>): string {
  switch (type) {
    case 'url':
    case 'social':
      return value;
    case 'text':
      return value;
    case 'phone':
      return `tel:${value}`;
    case 'wifi':
      return `WIFI:T:${fields?.encryption || 'WPA'};S:${fields?.ssid || ''};P:${fields?.password || ''};;`;
    case 'email':
      return `mailto:${fields?.to || ''}?subject=${encodeURIComponent(fields?.subject || '')}&body=${encodeURIComponent(fields?.body || '')}`;
    case 'location':
      return `geo:${fields?.lat || '0'},${fields?.lng || '0'}`;
    case 'sms':
      return `sms:${fields?.phone || ''}?body=${encodeURIComponent(fields?.message || '')}`;
    case 'vcard':
      return `BEGIN:VCARD\nVERSION:3.0\nFN:${fields?.name || ''}\nTEL:${fields?.phone || ''}\nEMAIL:${fields?.email || ''}\nORG:${fields?.org || ''}\nEND:VCARD`;
    default:
      return value;
  }
}

export type QRFrameType = 'none' | 'simple' | 'rounded' | 'badge' | 'modern';

export interface QRFrameConfig {
  type: QRFrameType;
  labelKey: string;
}

export const QR_FRAME_TYPES: QRFrameConfig[] = [
  { type: 'none', labelKey: 'frame.none' },
  { type: 'simple', labelKey: 'frame.simple' },
  { type: 'rounded', labelKey: 'frame.rounded' },
  { type: 'badge', labelKey: 'frame.badge' },
  { type: 'modern', labelKey: 'frame.modern' },
];

export interface QRStyle {
  dotsColor: string;
  backgroundColor: string;
  transparentBg: boolean;
  dotsType: 'rounded' | 'dots' | 'classy' | 'classy-rounded' | 'square' | 'extra-rounded';
  cornersSquareType: 'dot' | 'square' | 'extra-rounded';
  cornersDotType: 'dot' | 'square';
  margin: number;
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H';
  logoFile?: File | null;
  logoSize: number;
  frame: QRFrameType;
  frameText: string;
  frameColor: string;
}

export const DEFAULT_QR_STYLE: QRStyle = {
  dotsColor: '#1a1a2e',
  backgroundColor: '#ffffff',
  transparentBg: false,
  dotsType: 'rounded',
  cornersSquareType: 'extra-rounded',
  cornersDotType: 'dot',
  margin: 16,
  errorCorrectionLevel: 'M',
  logoFile: null,
  logoSize: 0.3,
  frame: 'none',
  frameText: 'Scan me',
  frameColor: '#1a1a2e',
};

export interface QRPreset {
  name: string;
  nameKey: string;
  category: string;
  style: Partial<QRStyle>;
}

export const QR_PRESETS: QRPreset[] = [
  // Original presets
  { name: 'Clásico', nameKey: 'preset.classic', category: 'General', style: { dotsColor: '#000000', backgroundColor: '#ffffff', dotsType: 'square', cornersSquareType: 'square', cornersDotType: 'square' } },
  { name: 'Moderno', nameKey: 'preset.modern', category: 'General', style: { dotsColor: '#1a1a2e', backgroundColor: '#ffffff', dotsType: 'rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' } },
  { name: 'Océano', nameKey: 'preset.ocean', category: 'Negocios', style: { dotsColor: '#0077b6', backgroundColor: '#f0f9ff', dotsType: 'classy-rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' } },
  { name: 'Elegante', nameKey: 'preset.elegant', category: 'Negocios', style: { dotsColor: '#2d2d2d', backgroundColor: '#faf9f6', dotsType: 'extra-rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' } },
  { name: 'Rojo Vivo', nameKey: 'preset.red', category: 'Restaurantes', style: { dotsColor: '#dc2626', backgroundColor: '#fff5f5', dotsType: 'dots', cornersSquareType: 'dot', cornersDotType: 'dot' } },
  { name: 'Verde Eco', nameKey: 'preset.green', category: 'Eventos', style: { dotsColor: '#16a34a', backgroundColor: '#f0fdf4', dotsType: 'classy', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' } },
  { name: 'Púrpura Pro', nameKey: 'preset.purple', category: 'Social', style: { dotsColor: '#7c3aed', backgroundColor: '#faf5ff', dotsType: 'rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' } },
  { name: 'Dorado', nameKey: 'preset.gold', category: 'Productos', style: { dotsColor: '#b45309', backgroundColor: '#fffbeb', dotsType: 'classy-rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'square' } },
  // New presets
  { name: 'Minimalista', nameKey: 'preset.minimalist', category: 'General', style: { dotsColor: '#111111', backgroundColor: '#ffffff', dotsType: 'square', cornersSquareType: 'square', cornersDotType: 'square', margin: 24 } },
  { name: 'Profesional', nameKey: 'preset.professional', category: 'Negocios', style: { dotsColor: '#1e3a5f', backgroundColor: '#f8fafc', dotsType: 'classy-rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' } },
  { name: 'Creativo', nameKey: 'preset.creative', category: 'Social', style: { dotsColor: '#e11d48', backgroundColor: '#fef9c3', dotsType: 'dots', cornersSquareType: 'dot', cornersDotType: 'dot' } },
  { name: 'Oscuro', nameKey: 'preset.dark', category: 'General', style: { dotsColor: '#e2e8f0', backgroundColor: '#0f172a', dotsType: 'rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' } },
];

// Template presets that map to QR styles (used by TemplatesSection)
export const TEMPLATE_PRESETS: Record<string, Partial<QRStyle>> = {
  business: { dotsColor: '#0077b6', backgroundColor: '#f0f9ff', dotsType: 'classy-rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' },
  social: { dotsColor: '#e1306c', backgroundColor: '#fdf2f8', dotsType: 'rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' },
  restaurant: { dotsColor: '#dc2626', backgroundColor: '#fff5f5', dotsType: 'dots', cornersSquareType: 'dot', cornersDotType: 'dot' },
  events: { dotsColor: '#16a34a', backgroundColor: '#f0fdf4', dotsType: 'classy', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' },
  personal: { dotsColor: '#7c3aed', backgroundColor: '#faf5ff', dotsType: 'extra-rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' },
  products: { dotsColor: '#b45309', backgroundColor: '#fffbeb', dotsType: 'classy-rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'square' },
};

export interface QRHistoryItem {
  id: string;
  type: QRContentType;
  data: string;
  style: QRStyle;
  createdAt: number;
  preview?: string;
}

// Persistence helpers
const PREFS_KEY = 'scanly-prefs';

export function savePreferences(prefs: { contentType: QRContentType; style: Omit<QRStyle, 'logoFile'> }) {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {}
}

export function loadPreferences(): { contentType: QRContentType; style: Partial<QRStyle> } | null {
  try {
    const stored = localStorage.getItem(PREFS_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return null;
}
