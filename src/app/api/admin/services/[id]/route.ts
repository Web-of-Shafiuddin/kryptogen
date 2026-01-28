import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// PUT update service
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const service = await db.service.update({
      where: { id: params.id },
      data: {
        title: body.title,
        description: body.description,
        icon: body.icon,
        features: JSON.stringify(body.features || []),
        badges: JSON.stringify(body.badges || []),
        order: body.order,
        published: body.published,
      },
    });

    return NextResponse.json(service);
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json(
      { error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

// DELETE service
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await db.service.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json(
      { error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}
