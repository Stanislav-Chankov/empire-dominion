export type ApiEnvelope<T> = {
  success: boolean;
  message?: string;
  data?: T;
  errorCode?: string;
  correlationId?: string;
  /**
   * If the backend supports long-running operations, it can respond with `phase: 'received'`
   * first, and later the client can dispatch a separate `completed` update.
   */
  phase?: 'received' | 'completed';
};

export type ApiTransport = 'http' | 'local';

export type ApiPhase = 'requested' | 'received' | 'completed' | 'failed';

export type ApiRequest<TBody = unknown> = {
  /**
   * Use this id to correlate "received" -> "completed" transitions.
   * If omitted, the caller should generate one (see `createApiRequestId()`).
   */
  id?: string;

  transport?: ApiTransport;

  /**
   * HTTP fields (used when transport === 'http')
   */
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path?: string;
  query?: Record<string, string | number | boolean | null | undefined>;
  body?: TBody;

  /**
   * Local/async fields (used when transport === 'local')
   */
  receivedMessage?: string;
  completedMessage?: string;
  simulateCompletionAfterMs?: number;
};

export type ApiOperation<TData = unknown> = {
  id: string;
  request: ApiRequest;
  phase: ApiPhase;
  receivedAtMs: number;
  envelope?: ApiEnvelope<TData>;
  error?: unknown;
};


