import { NextResponse } from 'next/server';

import axiosInstance, { endpoints } from 'src/utils/axios';

export async function POST(request: Request) {
  const { modelName, slug } = await request.json();

  try {
    const response = await axiosInstance.post(
      endpoints.views.increment(modelName, slug),
      {},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error incrementing views:', error);
    return NextResponse.json({ error: 'Failed to increment views' }, { status: 500 });
  }
}
