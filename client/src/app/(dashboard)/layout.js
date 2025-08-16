import AppNavbar from "@/components/dashboard/AppNavbar";
import { ClientThemeProvider } from "@/components/providers/ClientThemeProvider";

export default async function DashboardLayout({ children }) {

  return (
    <div className="min-h-screen">
          <main className="w-full">
            <AppNavbar />
            <div className="w-full">{children}</div>
          </main>
    </div>
  );
}