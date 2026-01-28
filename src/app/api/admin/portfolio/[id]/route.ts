import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// PUT update project
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const project = await db.project.update({
      where: { id: params.id },
      data: {
        title: body.title,
        description: body.description,
        category: body.category,
        tags: JSON.stringify(body.tags || []),
        image: body.image,
        projectUrl: body.projectUrl,
        githubUrl: body.githubUrl,
        order: body.order,
        published: body.published,
      },
    });

    return NextResponse.json(project);
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      { error: 'Failed to update project' },
      { status: 500 }
    );
  }
}

// DELETE project
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await db.project.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}
