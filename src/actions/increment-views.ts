'use server';

import axiosInstance, { endpoints } from 'src/utils/axios';

type ModelName = 'blog' | 'publication' | 'event' | 'opportunity';

export async function incrementViews(modelName: ModelName, slug: string): Promise<number | null> {
  try {
    const response = await axiosInstance.post(endpoints.views.increment(modelName, slug), {});

    if (response.status === 200) {
      return response.data.views_count;
    }
    throw new Error('Failed to increment views');
  } catch (error) {
    console.error('Error incrementing views:', error);
    return null;
  }
}
