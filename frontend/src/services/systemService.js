import api from './api';
import { unwrapResponse } from './responseUtils';

export async function getVersion() {
  const response = await api.get('/version');
  return unwrapResponse(response) || {};
}

export async function getHealth() {
  const response = await api.get('/health');
  return unwrapResponse(response) || {};
}