import Image from "next/image";
import styles from "./page.module.css";
import HomeHero1 from "@/Components/HomeHero1";
import HomeHero2 from "@/Components/HomeHero2";
import HomeHero3 from "@/Components/HomeHero3";
import HomeHero4 from "@/Components/HomeHero4";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Home() {
  return (
    <div >
        <HomeHero1/>
        <HomeHero2/>
        <HomeHero4/>
        <HomeHero3/>
        

      
    </div>
  );
}
