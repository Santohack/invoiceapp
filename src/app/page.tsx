import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto gap-6 flex flex-col justify-center h-screen  items-center">
      <h1 className="text-4xl font-bold"> InvocieApp</h1>

      <Button asChild>
        <Link href="/dashboard">Sign In</Link>
      </Button>
    </main>
  );
}
