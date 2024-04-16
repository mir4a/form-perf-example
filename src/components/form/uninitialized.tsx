import Link from "next/link";

export function Uninitialized() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-red-700">
        Form is not initialized, proceed to the initial step
      </h1>
      <Link href="/form">Go to Form Home Page</Link>
    </div>
  );
}
