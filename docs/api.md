# API Reference

Complete REST API documentation for the OpenMIA platform.

---

## Base URL

```
https://api.openmia.ai/v1
```

## Authentication

All requests must include a valid API key in the `Authorization` header:

```http
Authorization: Bearer <your-api-key>
```

---

## Endpoints

### Health Check

```http
GET /health
```

**Response** `200 OK`

```json
{
  "status": "ok",
  "version": "1.0.0",
  "uptime": "3d 14h 22m"
}
```

---

### Chat Completion

```http
POST /chat/completions
```

**Request Body**

```json
{
  "model": "openmia-v1",
  "messages": [
    { "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "Explain quantum computing in one sentence." }
  ],
  "temperature": 0.7,
  "max_tokens": 256
}
```

**Response** `200 OK`

```json
{
  "id": "chat-abc123",
  "object": "chat.completion",
  "created": 1714000000,
  "model": "openmia-v1",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Quantum computing uses qubits to perform many calculations simultaneously."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 28,
    "completion_tokens": 12,
    "total_tokens": 40
  }
}
```

---

### Memory — Add

```http
POST /memory
```

**Request Body**

```json
{
  "content": "User prefers dark mode.",
  "metadata": {
    "source": "preference",
    "priority": "high"
  }
}
```

**Response** `201 Created`

```json
{
  "id": "mem-xyz789",
  "status": "stored",
  "created_at": "2026-04-23T08:00:00Z"
}
```

---

### Memory — Search

```http
GET /memory/search?q=dark+mode&limit=5
```

**Response** `200 OK`

```json
{
  "results": [
    {
      "id": "mem-xyz789",
      "content": "User prefers dark mode.",
      "score": 0.95,
      "created_at": "2026-04-23T08:00:00Z"
    }
  ]
}
```

---

### Memory — Delete

```http
DELETE /memory/{memory_id}
```

**Response** `204 No Content`

---

## Error Codes

| Code | Meaning                  |
| ---- | ------------------------ |
| 400  | Bad Request              |
| 401  | Unauthorized             |
| 403  | Forbidden                |
| 404  | Not Found                |
| 429  | Rate Limit Exceeded      |
| 500  | Internal Server Error    |

---

## Rate Limits

| Plan       | Requests / min | Tokens / day   |
| ---------- | -------------- | -------------- |
| Free       | 10             | 10,000         |
| Developer  | 100            | 500,000        |
| Enterprise | Unlimited      | Unlimited      |

!!! tip "Need higher limits?"
    Contact us at **support@openmia.ai** for enterprise pricing.
