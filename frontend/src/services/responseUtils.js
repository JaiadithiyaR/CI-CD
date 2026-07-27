export function unwrapResponse(response) {
  if (response?.data && typeof response.data === 'object' && 'success' in response.data) {
    return response.data.data;
  }

  return response?.data;
}