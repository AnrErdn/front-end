import Sidebar from "../components/sidebar";
import Header from "../components/header";

export default function RootLayout({children}) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 min-h-screen text-black bg-gray-100">
        <Header />
        {children}
      </div>
    </div>
  );
}
