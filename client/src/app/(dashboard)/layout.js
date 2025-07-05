import AppNavbar from "@/components/dashboard/AppNavbar";
import { ClientThemeProvider } from "@/components/providers/ClientThemeProvider";
import { cookies } from "next/headers";

export default async function DashboardLayout({ children }) {
  const cookieStore = await cookies();

  return (
    <div className="min-h-screen">
      <ClientThemeProvider>
          <main className="w-full">
            <AppNavbar />
            <div className="px-4">{children}</div>
          </main>
      </ClientThemeProvider>
    </div>
  );
}