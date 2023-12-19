import prisma from "@/app/lib/prisma";

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
