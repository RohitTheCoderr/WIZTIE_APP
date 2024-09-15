import { useGetShow } from '@/services/zustandStore';
import React from 'react';
import DataForm from '../UserInfoForm/UserInfoForm';

const projects = [
  { 
    project: 'Website Redesign', 
    member: '2', 
    status: 'In Progress', 
    completion: '60%', 
    imageUrl: 'https://via.placeholder.com/50' 
  },
  { 
    project: 'Mobile App Development', 
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
    
        <div className="w-[47rem] m-auto rounded-3xl mt-8 flex justify-center p-4 bg-[#fffbfe]">
          <div className="">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="py-2 px-4 text-left">Project</th>
                  <th className="py-2 px-4 text-left">Member</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Completion</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index} className="hover:bg-gray-50 border-b border-gray-200">
                    <td className="py-2 px-4 flex items-center">
                      <img src={project.imageUrl} alt={project.project} className="w-12 h-12 mr-4 rounded" />
                      {project.project}
                    </td>
                    <td className="py-2 px-4">{project.member}</td>
                    <td className="py-2 px-4">{project.status}</td>
                    <td className="py-2 px-4">{project.completion}</td>
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
