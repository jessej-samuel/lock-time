import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <p>Hello! Want to become more productive?</p>
      <Link href={"/app"}>
        <a className="text-blue-500 hover:underline">Get started!</a>
      </Link>
    </>
  );
}
