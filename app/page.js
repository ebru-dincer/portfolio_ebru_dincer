// import Image from "next/image";
// import styles from "./page.module.css";
import Header from "./components/Header"
import Hero from "./components/Hero";
import "./sass/main.css"


export default function Home() {
  return (
    <main>
      <Header/>
      <Hero />
    </main>
  );  
}
