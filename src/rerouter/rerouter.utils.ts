export async function miniHash(input: string, length = 8): Promise<string> {
  const bytes = new TextEncoder().encode(input);

  const digest = await crypto.subtle.digest("SHA-256", bytes);

  const hex = Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hex.slice(0, length);
}
