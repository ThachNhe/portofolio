import { Check, SquareArrowOutUpRight, Code } from "lucide-react"; 
import { TechStackItem } from "./tech-stack-item";
import { ToolTip } from ".";

export const ProjectCard = ({ project }) => {
   const { title, category, year, status, features, icon: Icon } = project;
   return (
      <div className="flex flex-col p-6 bg-white shadow-md rounded-md hover:shadow-xl hover:-translate-y-1 duration-300 transition-all">
         <div className="flex items-center gap-3 mb-4">
            <Icon size={60} className="bg-gray-800 text-white p-2 rounded-md"/>
            <div className="flex flex-col gap-2">
               <h3 className="font-semibold">{title}</h3>
               <p className="font-medium text-gray-600 text-sm">{category} | {year} | {status}</p>
            </div>
         </div>

         <div className="flex flex-col gap-2 mb-4">
            <h4 className="font-semibold">Features: </h4>
            <ul>
               {features.map((feature,index) => {
                  return <li className="text-sm flex items-center gap-2 text-gray-700" key={index}>
                  <Check size={15}/>
                  {feature}</li>
               })}
            </ul>
         </div>

         <div className="flex flex-col gap-2 mb-4">
            <h4 className="font-semibold">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
               {project.techStack.map((item, index) => (
                  <TechStackItem key={index} title={item} />
               ))}
            </div>
         </div>
         <div className="flex gap-2">
            <a className="relative group flex gap-2 w-[70%] bg-gray-800 text-white font-semibold justify-center items-center px-4 py-2 rounded-md hover:-translate-y-1 hover:shadow-lg duration-300 transition-all"
            href="#"
            >
               <span>Demo</span>
               <SquareArrowOutUpRight size={18}/>
               <ToolTip title="View demo" />
            </a>
            <a className="relative group flex gap-2 items-center justify-center w-[30%] border border-gray-300 rounded-md font-semibold hover:-translate-y-1 hover:shadow-lg duration-300 transition-all"
            href="#">
               <span>Code</span>
               <Code size={18} />
               <ToolTip title="View code" />
            </a>
         </div>
      </div>
   )
}