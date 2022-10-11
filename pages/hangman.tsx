import type { NextPage } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import Profile from "../components/profile";
import ProjectPreview from "../components/project_preview";
import Image from "next/image";
import projectImage from "../public/hangman.png";

const FlappyBird: NextPage = () => {
  return (
    <div className="flex gap-3">
      <Image src={projectImage} alt=" " />
      <div className="mt-2 ">
        Ky projekt eshte ne console application dhe teknologjia qe kam perdorur
        ketu eshte C# <br /><Link href="/">
          <a className="font-bold underline hover:text-indigo-600">Back</a>
        </Link><br/>
        <Link href="https://github.com/Blerton-Rexhepi/HangMan">
          <a className="font-bold underline hover:text-indigo-600">
            Linku per GitHub
          </a>
        </Link>
        
      </div>
    </div>
  );
};

export default FlappyBird;
