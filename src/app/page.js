import Image from "next/image";
import styles from "./page.module.css";
import Gallery from './Gallery.js';
import { Profile } from './Profile.js';
import Bio from "../../Bio.js";
import TodoList from "../../TodoList.js";
import TodoList2 from "../../TodoList2";


export default function Home() {
  return (
    <div>
      <Bio />
      <TodoList />
      <Profile />
      <Gallery />
      <TodoList />
      <TodoList2 />
    </div>
  );
}
