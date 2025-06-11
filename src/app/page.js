import Image from "next/image";
import styles from "./page.module.css";
import HomeHero1 from "@/Components/HomeHero1";
import HomeHero2 from "@/Components/HomeHero2";
import HomeHero3 from "@/Components/HomeHero3";



export default function Home() {
  return (
    <div >
        <HomeHero1/>
        <HomeHero2/>
        <HomeHero3/>
      
    </div>
  );
}
