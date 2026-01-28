import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET all blog posts
export async function GET() {
  try {
    const posts = await db.blogPost.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  }
}

// POST create blog post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Generate slug from title
    const slug = body.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const post = await db.blogPost.create({
      data: {
        title: body.title,
        slug,
        excerpt: body.excerpt,
        content: body.content,
        category: body.category,
        author: body.author,
        image: body.image,
        readTime: body.readTime,
        published: body.published ?? false,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    );
  }
}
