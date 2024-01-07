import prisma from "@/app/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  if (id) {
    const res = await prisma.question.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return Response.json({ question: res });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const questionData = await request.json();
  const questionId = params.id;

  console.log(questionData);

  if (questionId) {
    const res = await prisma.question.update({
      where: {
        id: parseInt(questionId),
      },
      data: questionData,
    });
    return Response.json({ res });
  }
}
