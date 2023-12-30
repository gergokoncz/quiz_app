import prisma from "@/app/lib/prisma";
import { Quiz } from "@/app/components/Quiz/QuizListItem";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const quiz_id = params.id;
  console.log("entered quiz/[id]/route.ts");
  console.log(params);

  if (quiz_id) {
    const quiz_data = await prisma.quiz.findUnique({
      where: {
        id: Number(quiz_id),
      },
    });

    const questions = await prisma.question.findMany({
      where: {
        quiz_id: Number(quiz_id),
      },
    });

    const res = {
      quiz: quiz_data,
      questions: questions,
    };

    if (res) {
      return Response.json(res satisfies QuizResponse);
    }
    return Response.json({ error: "Quiz not found" } satisfies QuizResponse);
  }
  return Response.json({ error: "No id provided" } satisfies QuizResponse);
}

export type QuizResponse = {
  quiz?: Quiz;
  questions?: any;
  error?: string;
};
