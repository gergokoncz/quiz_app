import prisma from "@/app/lib/prisma";

export async function GET() {
  const res = await prisma.quiz.findMany();
  return Response.json({ quizzes: res });
}

export async function POST(request: Request) {
  const data = await request.json();
  const res = await prisma.quiz.create({
    data,
  });
  return Response.json({ quiz: res });
}
