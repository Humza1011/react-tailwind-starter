/* eslint-disable react/prop-types */
import Header from "./Header";
import Footer from "./Footer";

const HomeLayout = ({ title, description, children }) => {
  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      <Header />
      <main className="relative min-h-[65vh]">{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
