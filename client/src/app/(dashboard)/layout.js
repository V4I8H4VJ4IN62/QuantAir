import AppNavbar from "@/components/dashboard/AppNavbar";
import { ClientThemeProvider } from "@/components/providers/ClientThemeProvider";

export default async function DashboardLayout({ children }) {

  return (
    <div className="min-h-screen">
          <main className="w-full">
            <AppNavbar />
            <div className="px-4">{children}</div>
          </main>
    </div>
  );
}