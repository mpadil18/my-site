import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";

export default function Page() {
  return (
    <main>
      <div>
        <Navbar/>
        <Home />
      </div>
    </main>
  );
}
