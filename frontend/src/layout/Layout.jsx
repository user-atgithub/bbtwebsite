import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
import ChatInterface from "../components/ChatInterface/ChatInterface"; // Adjust path if necessary

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
      <ChatInterface /> {/* Add the ChatInterface component here */}
    </>
  );
};

export default Layout;
