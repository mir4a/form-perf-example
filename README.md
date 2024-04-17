## About

### Iterations

#### Iteration 1: Get the list of steps with form fields schema, store it on client, update on each step and send client's data on the final step

The idea is to get all the form fields initial data on the parent route and store it so that it can be accessed by each step route. Each step is responsible to store user's input data and validate it. Then the final step will itereate over all steps stores and send the whole data to the server.

The first iteration is based on assumption that the form could be divided into separate steps and each step has it's own route. Initialization and gathering (mocked fetcing) form fields is done at the parent route. During this process, the form fields data is placed into separate stores: one for steps basic info (steps list of ids and list of completed steps) and steps data with form fields divided into per step store. Once the states are initialized, then the next link is rendered which follows to the first step. Each step route handles the validation schema initialization from the step store and renders the form fields.

#### Iteration 2: Get the list of steps ids. Fetch form fields schema for each step on demand and store it on client. Update on each step and send client's data on the final step

TBD

#### Iteration 3: Same as Iteration 2, but send to the server step data on each step (funneling)

TBD



## Tech Stack
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material-UI](https://material-ui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Nope-validator](https://github.com/ftonato/nope-validator)
- [Zustand](https://github.com/pmndrs/zustand/)

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
