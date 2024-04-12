import Image from "next/image";
import Header from "./components/header";
import List from "./components/List";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <>
    <Header></Header>
    <Welcome></Welcome>
    <List></List>
    </>
  
  );
}
