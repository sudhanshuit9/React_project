import About from "./assets/components/about";
import Blog from "./assets/components/blog";
import Summary from "./assets/components/summary";
import Contacts from "./assets/components/contacts";
import Footer from "./assets/components/footer";
import Hero from "./assets/components/hero";
import Navbar from "./assets/components/navbar";
import Projects from "./assets/components/projects";



export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Blog />
      <Summary/>
      <Projects />
      <Contacts />
      <Footer />
      
      
    </>
  );
}
