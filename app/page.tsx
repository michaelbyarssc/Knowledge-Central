import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-6">GPT Assistant Portal</h1>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        <p className="mt-4">Welcome! Access your bots below:</p>
        <div className="mt-6 space-y-4">
          <Link
            href="/dashboard/bot-a"
            className="border rounded-xl px-4 py-2 shadow hover:bg-gray-100 block"
          >
            Access Bot A
          </Link>
          <Link
            href="/dashboard/bot-b"
            className="border rounded-xl px-4 py-2 shadow hover:bg-gray-100 block"
          >
            Access Bot B
          </Link>
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="bg-black text-white px-6 py-2 rounded-xl">Login to Access</button>
        </SignInButton>
      </SignedOut>
    </main>
  );
}
