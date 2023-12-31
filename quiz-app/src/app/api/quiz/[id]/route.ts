import prisma from "@/app/lib/prisma";
import type { DBQuestion, DBQuiz } from "@/app/lib/types/dbTypes";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const quiz_id = params.id;

  if (quiz_id) {
    const quizData = (await prisma.quiz.findUnique({
      where: {
        id: Number(quiz_id),
      },
    })) satisfies DBQuiz | null;

    const questions = (await prisma.question.findMany({
      where: {
        quiz_id: Number(quiz_id),
      },
    })) satisfies DBQuestion[];

    const res = {
      quiz: quizData,
      questions: questions,
    };

    if (res) {
      return Response.json(res as QuizResponse);
    }
    return Response.json({ error: "Quiz not found" } as QuizResponse);
  }
  return Response.json({ error: "No id provided" } as QuizResponse);
}

export type QuizResponse = {
  quiz?: DBQuiz;
  questions?: DBQuestion[];
  error?: string;
};
