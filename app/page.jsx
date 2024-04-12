import Image from "next/image";

import List from "./components/List";
import Welcome from "./components/Welcome";
import Header from "./components/Header";


export default function Home() {
  return (
    <>
    <Header></Header>
    <Welcome></Welcome>
    <List></List>
    </>
  
  );
}
