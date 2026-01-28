import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET all projects
export async function GET() {
  try {
    const projects = await db.project.findMany({
      orderBy: { order: 'asc' },
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

// POST create project
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const project = await db.project.create({
      data: {
        title: body.title,
        description: body.description,
        category: body.category,
        tags: JSON.stringify(body.tags || []),
        image: body.image,
        projectUrl: body.projectUrl,
        githubUrl: body.githubUrl,
        order: body.order || 0,
        published: body.published ?? true,
      },
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
