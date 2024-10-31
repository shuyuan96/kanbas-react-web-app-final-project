import ModulesControls from "./ModulesControls";
import React, {useEffect, useState} from "react";
import SmallControlButtons from "./SmallControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlsButtons from "./ModuleControlButtons";
import { useParams } from "react-router-dom";
import{addModule, editModule, updateModule, deleteModule} from "./reducer";
import {useDispatch, useSelector } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  console.log({cid});
  const [moduleName, setModuleName] = useState("");
  const {modules} = useSelector((state: any) => state.modulesReducer);
  useEffect(() => {
    if (modules && modules.length > 0) {
      console.log('Modules successfully loaded:', modules);
    } else {
      console.log('No modules found or modules not loaded yet.');
    }
  }, [modules]);
  
  const dispath = useDispatch();

  return (
    <div>
      <div id="wd-modules">
        <ModulesControls setModuleName={setModuleName} 
          moduleName={moduleName} 
          addModule={() => {
            dispath(addModule({name: moduleName, course: cid}));
            setModuleName("");
          }}/><br /><br /><br /><br />
        <ul id="wd-modules" className="list-group rounded-0 " >
          {modules
            .filter((module:any) => module.course === cid)
            .map((module:any) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing && module.name}
                { module.editing && (
                  <input className="form-control w-50 d-incline-block"
                          onChange={(e) => 
                            dispath(updateModule({...module, name: e.target.value})
                          )}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              dispath(updateModule({ ...module, editing: false }));
                            }
                          }}
                          value={module.name}></input>
                )
                }
                <ModuleControlsButtons 
                  moduleId={module._id}
                  deleteModule={(moduleId) =>{
                    dispath(deleteModule(moduleId));
                  }}
                  editModule={(moduleId) =>{
                    dispath(editModule(moduleId));
                  }}
                  />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0" style={{ borderLeft: '4px solid green' }}>
                  {module.lessons.map((lesson: any) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <SmallControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}