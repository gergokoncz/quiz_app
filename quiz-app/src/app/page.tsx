import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import prisma from "./lib/prisma";

async function getData() {
  const res = await prisma.quiz.findMany();
  return res;
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <p>Home page</p>
    </main>
  );
}
