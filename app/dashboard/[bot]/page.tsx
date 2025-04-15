"use client";
import { useParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function BotPage() {
  const { bot } = useParams();
  const { user } = useUser();

  if (!bot || typeof bot !== "string") {
    return <div className="p-8 text-red-600">Invalid bot path. Please check your URL.</div>;
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Assistant: {bot}</h2>
      <p className="mb-2">Hello {user?.firstName}, here is your bot:</p>
      <div className="rounded-xl border p-4 bg-white dark:bg-gray-800 dark:text-white shadow-md min-h-[300px]">
        {/* Placeholder for chat interface */}
        <p>Chat interface for {bot} will be rendered here.</p>
      </div>
    </div>
  );
}
