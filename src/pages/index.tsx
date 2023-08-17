import ContactForm from "@/components/contactForm";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Products from "@/components/products";
import Services from "@/components/services";
import React from "react";

const Home: React.FC = () => {
  return (
    <section>
      <Hero />
      <Products />
      <Cta />
      <Faq />
      {/* <Services /> */}
      <ContactForm />
    </section>
  );
};
export default Home;
