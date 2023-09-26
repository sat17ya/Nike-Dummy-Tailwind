import {
  Hero,
  PopularProducts,
  SpecialMaterial,
  Services,
  SupperOffers,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./Sections";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <main className="relative">
        <Navbar />
        <section className="xl:padding-1 wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <PopularProducts />
        </section>
        <section className="padding">
          <SpecialMaterial />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SupperOffers />
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
