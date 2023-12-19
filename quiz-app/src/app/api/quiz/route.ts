import prisma from "@/app/lib/prisma";
import { Quiz } from "@/app/components/Quiz/QuizListItem";
import { QuizResponse } from "./[id]/route";

const headers = {
  "Content-Type": "application/json",
};

export async function GET() {
  try {
    const res = await prisma.quiz.findMany();
    return Response.json({ quizzes: res } satisfies QuizListResponse);
  } catch (e) {
    return Response.json({ error: e.message } satisfies QuizListResponse);
  }
}

export async function POST(request: Request) {
  const data = await request.json();
  const res = await prisma.quiz.create({
    data,
  });
  return Response.json({ quiz: res });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (id) {
    const res = await prisma.quiz.delete({
      where: {
        id: parseInt(id),
      },
    });

    if (res) {
      return Response.json({ quiz: res } satisfies QuizResponse);
    }
    return Response.json({ error: "Quiz not found" } satisfies QuizResponse);
  }
  return Response.json({ error: "No id provided" } satisfies QuizResponse);
}

export type QuizListResponse = {
  quizzes?: Quiz[];
  error?: string;
};
