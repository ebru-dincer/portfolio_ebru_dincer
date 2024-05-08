import Contact from "./components/Contact";
import Header from "./components/Header"
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./sass/main.css";


export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );  
}
