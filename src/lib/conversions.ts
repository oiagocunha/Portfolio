export function recordConversion(event: string, properties: Record<string, string> = {}) {
  // No form contents, email addresses, phone numbers or full outbound URLs.
  window.dispatchEvent(new CustomEvent("portfolio:conversion", { detail: { event, ...properties } }));
  const analytics = window as Window & { dataLayer?: Record<string, unknown>[] };
  analytics.dataLayer = analytics.dataLayer || [];
  analytics.dataLayer.push({ event, ...properties });
}

