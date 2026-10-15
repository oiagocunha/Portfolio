/** Remove tudo que não for dígito; mantém DDI 55 se já presente. */
export function normalizePhone(phone: string | null | undefined): string | null {
  if (!phone) return null;
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 8) return null;
  return digits;
}

export function extractDomain(website: string | null | undefined): string | null {
  if (!website) return null;
  try {
    const withProtocol = /^https?:\/\//i.test(website)
      ? website
      : `https://${website}`;
    const host = new URL(withProtocol).hostname.toLowerCase();
    return host.replace(/^www\./, "") || null;
  } catch {
    return null;
  }
}

export function displayOrNotFound(value: string | null | undefined): string {
  if (value === null || value === undefined || value.trim() === "") {
    return "não encontrado";
  }
  return value;
}

export function normalizeName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function normalizeAddress(address: string | null): string {
  if (!address) return "";
  return normalizeName(address);
}
