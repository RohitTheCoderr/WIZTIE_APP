import { useGetShow } from '@/services/zustandStore';
import React from 'react';
import DataForm from '../UserProjectForm/UserProjectForm';

const projects = [
  { 
    project: 'Website Redesign', 
    member: '2', 
    status: 'In Progress', 
    completion: '60%', 
    imageUrl: 'https://via.placeholder.com/50' 
  },
  { 
    project: 'Mobile App Development rorooroororo rooroor rororo', 
    member: '4', 
    status: 'Completed', 
    completion: '100%', 
    imageUrl: 'https://via.placeholder.com/50' 
  },
  { 
    project: 'SEO Optimization', 
    member: 'self', 
    status: 'Not Started', 
    completion: '0%', 
    imageUrl: 'https://via.placeholder.com/50' 
  },
];

const ProjectTable = () => {
  // const { show } = useGetShow((state) => state);

  return (
    <>
      {/* {show  && <DataForm/> } */}
    
        <div className="w-auto sm:w-[47rem] m-auto rounded-lg sm:rounded-3xl mt-8 flex justify-center p-1 sm:p-4 bg-[#fffbfe] ">
          <div className="">
            <table className=" w-[90%] min-w-full">
              <thead>
                <tr className=" bg-gray-100 border-b border-gray-200">
                  <th className=" px-1 py-2 sm:px-4 text-[13px] sm:text-lg  text-left">Project</th>
                  <th className=" px-1 py-2 sm:px-4 text-[13px] sm:text-lg  text-left">Member</th>
                  <th className=" px-1 py-2 sm:px-4 text-[13px] sm:text-lg  text-left">Status</th>
                  <th className=" px-1 py-2 sm:px-4 text-[13px] sm:text-lg  text-left">Completion</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className="hover:bg-gray-50 border-b border-gray-200">
                    <td className="py-1 px-[2px]  sm:py-2 sm:px-4 text-[11px] sm:text-lg flex items-center">
                      {/* <img src={project.imageUrl} alt={project.project} className="w-12 h-12 mr-4 rounded" /> */}
                      {project.project}
                    </td>
                    <td className="px-[2px] py-2 sm:px-4 text-[11px] text-center sm:text-lg">{project.member}</td>
                    <td className="px-[2px] py-2 sm:px-4 text-[11px] text-center sm:text-lg">{project.status}</td>
                    <td className="px-[2px] py-2 sm:px-4 text-[11px] text-center sm:text-lg">{project.completion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </>
  );
};

export default ProjectTable;
