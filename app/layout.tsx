import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GPT Assistant Portal",
  description: "Subscription-based access to your AI assistants.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={\`\${inter.className} bg-gray-50 text-gray-900\`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
