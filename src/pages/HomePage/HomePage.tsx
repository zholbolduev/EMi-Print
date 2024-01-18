import Header from "@/widgets/landing/Header/Header";
import "./HomePage.scss";
import Services from "@/widgets/landing/Services/Services";
import WhyChooseUs from "@/widgets/landing/WhyChooseUs/WhyChooseUs";
import TryByYourself from "@/widgets/landing/TryByYourself/TryByYourself";

const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <WhyChooseUs />
      <Services />
      <TryByYourself />
    </div>
  );
};

export default HomePage;
