import { NextResponse } from 'next/server';

// 임시 데이터베이스 대신 메모리에 저장
let reviews: any[] = [];

export async function GET() {
  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newReview = {
    id: Date.now().toString(),
    ...body,
    createdAt: new Date().toISOString(),
  };
  reviews.push(newReview);
  return NextResponse.json(newReview, { status: 201 });
} 