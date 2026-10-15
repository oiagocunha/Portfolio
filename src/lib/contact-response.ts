/** Only an explicit provider acknowledgement may clear a visitor's message. */
export function isContactAccepted(result: unknown): boolean {
  if (!result || typeof result !== "object") return false;
  const success = (result as { success?: unknown }).success;
  return success === true || success === "true";
}
