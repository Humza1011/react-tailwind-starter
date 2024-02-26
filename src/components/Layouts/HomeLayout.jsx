/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";

const HomeLayout = ({ title, description, children }) => {
  return (
    <>
      {/* IF TITLE OR DESCRIPTION ARE GIVEN, ADD METADATA TO PAGE */}
      {(title || description) && (
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
      )}
      <Header />
      <main className="relative min-h-[65vh]">{children}</main>
      <Footer />
    </>
  );
};

export default HomeLayout;
