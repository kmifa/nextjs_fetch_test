import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: 'no-store' });
  const data = await response.json();
  return NextResponse.json(data);
}
