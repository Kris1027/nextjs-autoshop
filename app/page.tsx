import Header from "@/components/header";
import Hero from "@/components/hero";
import Strip from "@/components/strip";
import WhatWeBuy from "@/components/what-we-buy";
import HowItWorks from "@/components/how-it-works";
import WhyUs from "@/components/why-us";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Strip />
        <WhatWeBuy />
        <HowItWorks />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
