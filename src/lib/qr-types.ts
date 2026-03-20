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
};

export interface QRPreset {
  name: string;
  category: string;
  style: Partial<QRStyle>;
}

export const QR_PRESETS: QRPreset[] = [
  { name: 'Clásico', category: 'General', style: { dotsColor: '#000000', backgroundColor: '#ffffff', dotsType: 'square', cornersSquareType: 'square', cornersDotType: 'square' } },
  { name: 'Moderno', category: 'General', style: { dotsColor: '#1a1a2e', backgroundColor: '#ffffff', dotsType: 'rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' } },
  { name: 'Océano', category: 'Negocios', style: { dotsColor: '#0077b6', backgroundColor: '#f0f9ff', dotsType: 'classy-rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' } },
  { name: 'Elegante', category: 'Negocios', style: { dotsColor: '#2d2d2d', backgroundColor: '#faf9f6', dotsType: 'extra-rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' } },
  { name: 'Rojo Vivo', category: 'Restaurantes', style: { dotsColor: '#dc2626', backgroundColor: '#fff5f5', dotsType: 'dots', cornersSquareType: 'dot', cornersDotType: 'dot' } },
  { name: 'Verde Eco', category: 'Eventos', style: { dotsColor: '#16a34a', backgroundColor: '#f0fdf4', dotsType: 'classy', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' } },
  { name: 'Púrpura Pro', category: 'Social', style: { dotsColor: '#7c3aed', backgroundColor: '#faf5ff', dotsType: 'rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'dot' } },
  { name: 'Dorado', category: 'Productos', style: { dotsColor: '#b45309', backgroundColor: '#fffbeb', dotsType: 'classy-rounded', cornersSquareType: 'extra-rounded', cornersDotType: 'square' } },
];

export interface QRHistoryItem {
  id: string;
  type: QRContentType;
  data: string;
  style: QRStyle;
  createdAt: number;
  preview?: string;
}
