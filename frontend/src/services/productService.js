import api from './api';
import { unwrapResponse } from './responseUtils';

export async function getProducts() {
  const response = await api.get('/products');
  return unwrapResponse(response) || [];
}