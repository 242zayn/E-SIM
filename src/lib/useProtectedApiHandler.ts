// lib/api/useProtectedApiHandler.ts
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type ProtectedFetchOptions<T> = {
  url: string;
  config?: RequestInit;
  headers?: Record<string, string>;
  queryOptions?: Omit<UseQueryOptions<T>, "queryKey" | "queryFn">;
  enabled?: boolean;
  tokenType?: "admin" | "user";
};

// ✅ Proper Error Class
class ApiError extends Error {
  public readonly status: number;
  public readonly data: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }
  }
}

// ✅ Type guard for error response
function isErrorResponse(data: unknown): data is {
  message?: string;
  status?: number | false;
} {
  return typeof data === "object" && data !== null;
}

// ✅ Helper function - Get token safely
function getTokenByType(tokenType: "admin" | "user"): string | null {
  return tokenType === "admin" ? "" : "";
}

// ✅ Helper function - JSON parsing
async function parseJsonResponse<T>(res: Response, url: string): Promise<T> {
  try {
    const data: unknown = await res.json();
    return data as T;
  } catch {
    throw new ApiError(`Invalid JSON response from ${url}`, res.status);
  }
}

// ✅ Helper function - Response validation
function validateResponse<T>(res: Response, data: T, url: string): void {
  let hasErrorStatus = false;
  let errorMessage = `HTTP ${res.status}: Error fetching data from ${url}`;
  let errorStatus = res.status;

  if (isErrorResponse(data)) {
    hasErrorStatus = data.status === false;
    if (typeof data.message === "string") {
      errorMessage = data.message;
    }
    if (typeof data.status === "number") {
      errorStatus = data.status;
    }
  }

  if (!res.ok || hasErrorStatus) {
    throw new ApiError(errorMessage, errorStatus, data);
  }
}

// ✅ Helper function - Handle server errors
function handleServerError(res: Response, tokenType: "admin" | "user"): void {
  if (res.status === 500) {
    console.error(`Server error (500) for ${tokenType} request`);
  }
}

// ✅ FIXED: Type-safe headers builder
function buildRequestHeaders(
  headers: Record<string, string>,
  config: RequestInit | undefined,
  token: string | null
): HeadersInit {
  // ✅ Use HeadersInit instead of Record<string, string>

  // ✅ Create a new headers object to avoid mutation
  const baseHeaders: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // ✅ Merge headers safely
  const mergedHeaders = {
    ...baseHeaders,
    ...headers, // User provided headers
    ...((config?.headers as Record<string, string>) || {}), // Config headers
  };

  // ✅ Add token if available
  if (token) {
    mergedHeaders.Authorization = `Bearer ${token}`;
  }

  return mergedHeaders; // ✅ Return as HeadersInit
}

// ✅ Main function - Fixed requestHeaders issue
export function useProtectedApiHandler<T = unknown>({
  url,
  config,
  headers = {},
  queryOptions,
  enabled = true,
  tokenType = "admin",
}: ProtectedFetchOptions<T>) {
  const token = getTokenByType(tokenType);

  const fetchData = async (): Promise<T> => {
    // ✅ Build headers safely
    const requestHeaders = buildRequestHeaders(headers, config, token);

    const res = await fetch(url, {
      ...config,
      headers: requestHeaders, // ✅ Now properly typed
    });

    handleServerError(res, tokenType);
    const data = await parseJsonResponse<T>(res, url);
    validateResponse(res, data, url);

    return data;
  };

  return useQuery<T>({
    queryKey: ["protected", tokenType, url, token],
    queryFn: fetchData,
    enabled: enabled && Boolean(token),
    staleTime: 2 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
    retry: 1,
    ...queryOptions,
  });
}
