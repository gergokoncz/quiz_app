# Quiz App
A minimalistic quiz app built with **Next.js**, **socketio**, **Prisma**, and **PostgreSQL**.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Local development

### Pre-requisites 

Set the following environment variables.

```bash
POSTGRES_DB=quiz_db
POSTGRES_USER=quiz_user
POSTGRES_PASSWORD=quiz_password
DATABASE_URL="postgresql://$POSTGRES_USER:$POSTGRES_PASSWORD@localhost:5432/$POSTGRES_DB?schema=public"
```

Or create an *.env* file based on *.env.example*.

### Database setup

To set up your local database, run the following command:

```bash
cd quiz-app # from project root
docker-compose up -d
```

A **postgres** instance should be available on [http://localhost:5432](http://localhost:5432).

### Database migrations

When the database you have to set up the initial schema so the app can interact with the database.

To run migrations, run the following command:

```bash
npx prisma generate
npx prisma migrate dev --name <migration-name>
```

### Prisma Studio - Optional ORM UI

To open the local Prisma Studio, run the following command:

```bash
cd quiz-app # from project root
npx prisma studio
```

**Prisma Studio** should be available on [http://localhost:5555](http://localhost:5555).

### Socket.io server

The **socket.io** server is used to handle real-time communication between the quiz host and the players.
To start the **socket.io** server, run the following command:

```bash
cd quiz-app # from project root
npm run node
```

### Next.js app

To start the quiz app, run the following command:

```bash
cd quiz-app # from project root
npm run dev
```

The app should be available on [http://localhost:3000](http://localhost:3000).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Migrations

To run migrations, run the following command:

```bash
npx prisma generate
npx prisma migrate dev --name <migration-name>
```


## Tech Stack - Learn More

### Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
