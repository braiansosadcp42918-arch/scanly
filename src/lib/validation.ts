import type { QRContentType } from './qr-types';

export interface ValidationResult {
  valid: boolean;
  errorKey?: string; // i18n key
}

const URL_REGEX = /^https?:\/\/.+\..+/i;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[\d\s\-()]{7,20}$/;

export function validateQRInput(
  type: QRContentType,
  value: string,
  fields?: Record<string, string>
): ValidationResult {
  switch (type) {
    case 'url':
    case 'social':
      if (!value.trim()) return { valid: false, errorKey: 'val.required' };
      if (!URL_REGEX.test(value.trim())) return { valid: false, errorKey: 'val.invalidUrl' };
      return { valid: true };

    case 'text':
      if (!value.trim()) return { valid: false, errorKey: 'val.required' };
      if (value.length > 500) return { valid: false, errorKey: 'val.tooLong' };
      return { valid: true };

    case 'phone':
      if (!value.trim()) return { valid: false, errorKey: 'val.required' };
      if (!PHONE_REGEX.test(value.trim())) return { valid: false, errorKey: 'val.invalidPhone' };
      return { valid: true };

    case 'wifi':
      if (!fields?.ssid?.trim()) return { valid: false, errorKey: 'val.required' };
      return { valid: true };

    case 'email':
      if (!fields?.to?.trim()) return { valid: false, errorKey: 'val.required' };
      if (!EMAIL_REGEX.test(fields.to.trim())) return { valid: false, errorKey: 'val.invalidEmail' };
      return { valid: true };

    case 'location': {
      if (!fields?.lat?.trim() || !fields?.lng?.trim()) return { valid: false, errorKey: 'val.required' };
      const lat = parseFloat(fields.lat);
      const lng = parseFloat(fields.lng);
      if (isNaN(lat) || lat < -90 || lat > 90) return { valid: false, errorKey: 'val.invalidLat' };
      if (isNaN(lng) || lng < -180 || lng > 180) return { valid: false, errorKey: 'val.invalidLng' };
      return { valid: true };
    }

    case 'sms':
      if (!fields?.phone?.trim()) return { valid: false, errorKey: 'val.required' };
      if (!PHONE_REGEX.test(fields.phone.trim())) return { valid: false, errorKey: 'val.invalidPhone' };
      return { valid: true };

    case 'vcard':
      if (!fields?.name?.trim()) return { valid: false, errorKey: 'val.required' };
      if (fields?.email && fields.email.trim() && !EMAIL_REGEX.test(fields.email.trim())) {
        return { valid: false, errorKey: 'val.invalidEmail' };
      }
      return { valid: true };

    default:
      return { valid: true };
  }
}
