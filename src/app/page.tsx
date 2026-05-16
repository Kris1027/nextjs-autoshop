import Header from "@/components/layout/header";
import Hero from "@/components/sections/hero";
import Strip from "@/components/sections/strip";
import WhatWeBuy from "@/components/sections/what-we-buy";
import HowItWorks from "@/components/sections/how-it-works";
import WhyUs from "@/components/sections/why-us";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

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
