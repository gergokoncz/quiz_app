import prisma from "@/app/lib/prisma";
import type { DBQuestion } from "@/app/lib/types/dbTypes";

export async function GET() {
  const res = await prisma.question.findMany();
  return Response.json({ questions: res });
}

export async function POST(request: Request) {
  const data = await request.json();
  const res = await prisma.question.create({
    data,
  });
  return Response.json({ question: res });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  // not working
  const data = await request.json();
  const res = await prisma.question.create({
    data,
  });
  return Response.json({ question: res });
}
