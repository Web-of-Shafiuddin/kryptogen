import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// PUT update blog post
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();

    const post = await db.blogPost.update({
      where: { id: params.id },
      data: {
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        category: body.category,
        author: body.author,
        image: body.image,
        readTime: body.readTime,
        published: body.published,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  }
}

// DELETE blog post
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await db.blogPost.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  }
}
