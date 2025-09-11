// lib/api/useApiMutation.ts
import { UseMutationOptions, useMutation } from '@tanstack/react-query';

// import { getAdminTokenClient, getUserTokenClient } from './auth';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type ApiMutationOptions<T, V> = {
    url: string;
    method?: HttpMethod;
    headers?: Record<string, string>;
    mutationOptions?: UseMutationOptions<T, Error, V>;
    tokenType?: 'admin' | 'user';
    config?: RequestInit;
};

// ✅ Proper Error Class - No `any` types
class ApiError extends Error {
    public readonly status: number;
    public readonly data: unknown;
    public readonly method: string;
    public readonly url: string;

    constructor(message: string, status: number, method: string, url: string, data?: unknown) {
        super(message);
        this.name = 'ApiError';
        this.status = status;
        this.method = method;
        this.url = url;
        this.data = data;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ApiError);
        }
    }

    isClientError(): boolean {
        return this.status >= 400 && this.status < 500;
    }

    isServerError(): boolean {
        return this.status >= 500;
    }
}

// ✅ Type guard for error response
function isErrorResponse(data: unknown): data is {
    message?: string;
    error?: string;
} {
    return typeof data === 'object' && data !== null;
}

// ✅ Helper function - Get token by type
function getTokenByType(tokenType: 'admin' | 'user'): string | null {
    return tokenType === 'admin' ? 'dfdgdf' : 'dfddf';
}

// ✅ Helper function - Build headers safely
function buildRequestHeaders(
    headers: Record<string, string>,
    config: RequestInit | undefined,
    token: string | null
): HeadersInit {
    const baseHeaders: Record<string, string> = {
        'Content-Type': 'application/json'
    };

    const mergedHeaders = {
        ...baseHeaders,
        ...headers,
        ...((config?.headers as Record<string, string>) || {})
    };

    if (token) {
        mergedHeaders.Authorization = `Bearer ${token}`;
    }

    return mergedHeaders;
}

// ✅ Helper function - Handle error response
async function handleErrorResponse(res: Response, method: string, url: string): Promise<never> {
    let errorMessage = `Error ${method} data to ${url}`;
    let errorData: unknown = null;

    try {
        errorData = await res.json();
        if (isErrorResponse(errorData)) {
            errorMessage = errorData.message || errorData.error || errorMessage;
        }
    } catch {
        console.warn('⚠️ Response is not a valid JSON body.');
    }

    throw new ApiError(errorMessage, res.status, method, url, errorData);
}

// ✅ Helper function - Parse JSON response safely
async function parseJsonResponse<T>(res: Response): Promise<T | null> {
    const contentType = res.headers.get('Content-Type') ?? '';
    const contentLength = res.headers.get('Content-Length');

    // Handle empty responses
    if (res.status === 204 || contentLength === '0' || contentType.indexOf('application/json') === -1) {
        return null;
    }

    try {
        const data: unknown = await res.json();
        return data as T;
    } catch {
        console.warn('⚠️ Response has no JSON body, returning null.');
        return null;
    }
}

// ✅ Main function - Handles ALL methods (GET, POST, PUT, PATCH, DELETE)
export function useApiMutation<T = unknown, V = unknown>({
    url,
    method = 'POST',
    headers = {},
    config,
    mutationOptions,
    tokenType = 'admin'
}: ApiMutationOptions<T, V>) {
    return useMutation<T, Error, V>({
        mutationFn: async (data: V): Promise<T> => {
            const token = getTokenByType(tokenType);
            const requestHeaders = buildRequestHeaders(headers, config, token);

            // ✅ Build request options
            const requestOptions: RequestInit = {
                method,
                ...config,
                headers: requestHeaders
            };

            // ✅ Only add body for non-GET methods and when data exists
            if (method !== 'GET' && data !== undefined) {
                requestOptions.body = JSON.stringify(data);
            }

            // ✅ Make the request
            const res = await fetch(url, requestOptions);

            // ✅ Handle error responses
            if (!res.ok) {
                await handleErrorResponse(res, method, url);
            }

            // ✅ Parse and return response
            const responseData = await parseJsonResponse<T>(res);
            return responseData as T; // Null responses are handled above
        },
        ...mutationOptions
    });
}
