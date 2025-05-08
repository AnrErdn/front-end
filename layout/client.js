import Sidebar from "../components/sidebar";
import Header from "../components/header";

export default function RootLayout({children}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 transition-all duration-500">
        {children}
        </main>
    </div>
    </div>
  );
}

