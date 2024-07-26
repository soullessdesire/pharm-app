import "@styles/css/globals.css";
import Sidebar from "@components/Sidebar/Sidebar";
import Header from "@components/Header";

export const metadata = {
  title: "",
  description: "",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex overflow-hidden">
        <Sidebar />
        <main className="pl-[280px] grow flex flex-col">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
