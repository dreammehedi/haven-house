import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import error_img from "../../assets/error_404.png";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/header/Navbar";
import Button from "../../shareComponents/Button";
function Error() {
  return (
    <>
      <Navbar></Navbar>
      <Helmet>
        <title>Haven House | 404</title>
      </Helmet>
      <section className="flex items-center h-full p-16 bg-green-50 text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-lg text-center">
            <img
              className="object-cover w-auto h-auto mb-4"
              src={error_img}
              alt="404"
            />
            <p className="text-2xl font-semibold md:text-3xl">
              {` Sorry, we couldn't find this page.`}
            </p>
            <p className="mt-4 mb-8 text-gray-600">
              {`But don't worry, you can find plenty of other things on our
              homepage.`}
            </p>
            <Link to="/">
              <Button name={"Back to homepage"}></Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Error;
