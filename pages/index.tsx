import type { NextPage } from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import Profile from "../components/profile";
import ProjectPreview, {
  ProjectPreviewInterface,
} from "../components/project_preview";

const Home: NextPage = () => {
  const projectMetadataArray=[];
  projectMetadataArray.push(
    {
    title: "Flappy Bird",
    desc: "The legendary mobile game",
    linkUrl: "/flappi_bird",
    image: "/xogi.png",
  }
  )
  projectMetadataArray.push(
    {
    title: "Hangman",
    desc: "The that we have palyed in school",
    linkUrl: "/hangman",
    image: "/hangman.png",
  }
  )
  projectMetadataArray.push(
    {
    title: "Blackjack",
    desc: "The game that takes all your money",
    linkUrl: "/blackjack",
    image: "/blackjack.jpg",
  }
  )
const projectPreviewElements = [];
{/* <ProjectPreview {...projectPreviewData} */}
for (let i=0; i<projectMetadataArray.length;i++){
  const metaData = projectMetadataArray[i]
  const elemet =<ProjectPreview {...metaData} key={i}/>
  projectPreviewElements.push(elemet)

}


  return (
    <div>
      <div>
        <Profile />
      </div>
      <div className="mt-4 mb-3">
        {projectPreviewElements}
      </div>
    </div>
  );
};

export default Home;
