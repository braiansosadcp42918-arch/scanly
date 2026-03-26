export function encryptData(text: string, password: string): string {
  const encoded = new TextEncoder().encode(text);
  const key = new TextEncoder().encode(password);
  const result = new Uint8Array(encoded.length);
  for (let i = 0; i < encoded.length; i++) {
    result[i] = encoded[i] ^ key[i % key.length];
  }
  return btoa(String.fromCharCode(...result))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

export function decryptData(encrypted: string, password: string): string | null {
  try {
    let b64 = encrypted.replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    const data = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
    const key = new TextEncoder().encode(password);
    const result = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
      result[i] = data[i] ^ key[i % key.length];
    }
    return new TextDecoder().decode(result);
  } catch {
    return null;
  }
}
