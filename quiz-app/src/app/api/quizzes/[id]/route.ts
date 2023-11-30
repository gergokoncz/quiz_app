import prisma from "@/app/lib/prisma";

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
    return Response.json({ quiz: res });
  }
}
