import Image from "next/image";
import Link from "next/link";

 export interface ProjectPreviewInterface {
  title: string;
  desc: string;
  linkUrl: string;
  image:string
 
}
const ProjectPreview = (props: ProjectPreviewInterface) => {
  // const title: string = "Flappy Bird";
  // const desc: string = "The legendary mobile game";
  // const linUrl: string = "/flappi_bird";

  return (
    <div className="flex gap-4 mb-3  bg-gray-200 ">
      <div className="relative w-24 h-24 ">
        <Image src={props.image} layout="fill" alt=" " />
      </div>
      <div className="my-auto">
        <Link href={props.linkUrl}>
          <a className="font-bold underline hover:text-indigo-600">
            {props.title}
          </a>
        </Link>
        <div>{props.desc}</div>
       
      </div>
    </div>
  );
};
export default ProjectPreview;
