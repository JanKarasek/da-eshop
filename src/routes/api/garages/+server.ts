import { json } from '@sveltejs/kit';
import prisma from '$lib/server/db';

export async function GET() {
  try {
    const garages = await prisma.garage.findMany();
    return json(garages);
  } catch (error) {
    return json({ error: 'Failed to fetch garages' }, { status: 500 });
  }
} 