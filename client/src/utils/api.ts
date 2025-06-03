import type { ContactForm, ApiResponse } from '../types/project';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export async function sendContactForm(data: ContactForm): Promise<ApiResponse> {
  try {
    const response = await fetch(`${BACKEND_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return { error: result.error || 'Failed to send message' };
    }

    return result;
  } catch (error) {
    return { error: 'Network error. Please try again later.' };
  }
}
