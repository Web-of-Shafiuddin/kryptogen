import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET all services
export async function GET() {
  try {
    const services = await db.service.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Failed to fetch services' },
      { status: 500 }
    );
  }
}

// POST create service
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const service = await db.service.create({
      data: {
        title: body.title,
        description: body.description,
        icon: body.icon || 'Box',
        features: JSON.stringify(body.features || []),
        badges: JSON.stringify(body.badges || []),
        order: body.order || 0,
        published: body.published ?? true,
      },
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    );
  }
}
