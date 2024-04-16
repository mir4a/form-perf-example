import Link from "next/link";

const Page = () => {
  return (
    <div className="px-10">
      <h1>Welcome to the Forms Perf Example</h1>
      <Link href="/form/step_1">Go to Step 1</Link>
    </div>
  );
};

export default Page;
