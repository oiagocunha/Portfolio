export class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly cause?: unknown,
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function withRetry<T>(
  fn: () => Promise<T>,
  options: {
    retries: number;
    delayMs: number;
    label: string;
    shouldRetry?: (error: unknown) => boolean;
  },
): Promise<T> {
  const { retries, delayMs, label, shouldRetry } = options;
  let lastError: unknown;

  for (let attempt = 1; attempt <= retries + 1; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      const retryable = shouldRetry ? shouldRetry(error) : true;
      if (!retryable || attempt > retries) break;
      const wait = delayMs * attempt;
      await sleep(wait);
    }
  }

  throw new AppError(
    `${label} falhou após ${retries + 1} tentativas`,
    "RETRY_EXHAUSTED",
    lastError,
  );
}

export async function fetchWithTimeout(
  url: string,
  init: RequestInit & { timeoutMs: number },
): Promise<Response> {
  const { timeoutMs, ...rest } = init;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, { ...rest, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}
