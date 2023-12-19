import prisma from "@/app/lib/prisma";
import { Quiz } from "@/app/components/Quiz/QuizListItem";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (id) {
    const res = await prisma.quiz.findUnique({
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

export type QuizResponse = {
  quiz?: Quiz;
  error?: string;
};
