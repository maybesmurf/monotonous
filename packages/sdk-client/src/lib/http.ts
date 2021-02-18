export const http = {
  get,
  post,
  put,
  delete: _delete,
};

function get<T>(endpoint: string, opts?: RequestInit): Promise<T> {
  return fetch('/api' + endpoint, {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  }).then(handleResponse);
}

function post<T>(
  endpoint: string,
  body: object,
  opts?: RequestInit
): Promise<T> {
  return fetch('/api' + endpoint, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...opts,
  }).then(handleResponse);
}

function put<T>(
  endpoint: string,
  body: object,
  opts?: RequestInit
): Promise<T> {
  return fetch('/api' + endpoint, {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    ...opts,
  }).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete<T>(endpoint: string, opts?: RequestInit): Promise<T> {
  return fetch('/api' + endpoint, {
    method: 'DELETE',
    credentials: 'include',
    ...opts,
  }).then(handleResponse);
}

// helper functions
function handleResponse(response: Response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
