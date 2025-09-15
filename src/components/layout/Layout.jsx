import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main  className="w-full mx-auto">{children}</main>
    </>
  );
};

export default Layout;
