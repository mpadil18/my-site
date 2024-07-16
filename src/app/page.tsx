import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./navbar/navbar";
import Home from "./home/home";

export default function Page() {
  return (
    <main>
      <div>
        <Home />
      </div>
    </main>
  );
}
