import { json } from '@sveltejs/kit';
import prisma from '$lib/server/db';
import type { RequestEvent } from '@sveltejs/kit';

export async function GET({ params }: RequestEvent) {
  try {
    const garage = await prisma.garage.findUnique({
      where: { id: params.id }
    });

    if (!garage) {
      return json({ error: 'Garage not found' }, { status: 404 });
    }

    return json(garage);
  } catch (error) {
    return json({ error: 'Failed to fetch garage' }, { status: 500 });
  }
} 