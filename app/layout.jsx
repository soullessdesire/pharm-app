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
        <main className=" grow flex border-l flex-col">
          <Header />
          {children}
        </main>
        <div id="modal"></div>
      </body>
    </html>
  );
};

export default RootLayout;
