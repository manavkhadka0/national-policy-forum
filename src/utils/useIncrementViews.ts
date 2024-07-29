'use client';

import axios from 'axios';
import { useState, useEffect } from 'react';

type ModelName = 'blog' | 'publication' | 'event' | 'opportunity';

export function useIncrementViews(modelName: ModelName, slug: string): number | null {
  const [viewCount, setViewCount] = useState<number | null>(null);

  useEffect(() => {
    const incrementViews = async () => {
      try {
        const response = await axios.post('/api/increment-views', { modelName, slug });
        if (response.status === 200) {
          setViewCount(response.data.views_count);
        } else {
          throw new Error('Failed to increment views');
        }
      } catch (error) {
        console.error('Error incrementing views:', error);
      }
    };

    incrementViews();
  }, [modelName, slug]);

  return viewCount;
}
