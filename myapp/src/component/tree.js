import React, { useEffect } from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
import Axios from "axios";
import { useState } from "react";

import "./tree.css";

const API = "http://localhost:3000/displayDept";

function Tree() {
  const [depart, setDepart] = useState();
  const getDepartment = async (response) => {
    Axios.get(API).then((response) => {
      setDepart(response.data);
      // console.log(depart);
    });
  };
  useEffect(() => {
    getDepartment();
  }, []);

  const [departData, setDepartData] = useState();
  const [departDataDivion, setdepartDataDivion] = useState();
  const handleOnClick = async (_id) => {
    console.log(_id);
    await Axios.get(`http://localhost:3000/displayEmployeeById/${_id}`)
      .then((response) => {
        setDepartData(response.data);
      })
      .catch((error) => {
        console.log("Data Not Found");
      });
    await Axios.get(`http://localhost:3000/displayDivisionById/${_id}`)
      .then((response) => {
        setdepartDataDivion(response.data);
      })
      .catch((error) => {
        console.log("Data Not Found");
      });
    console.log(departData);
    console.log(departDataDivion);
  };

  return (
    // <div>
    //             {depart && depart.map((data) => {
    //               console.log(data);
    //               return(
    //                 <div className="department  pdng mrgn">
    //                   <TreeItem nodeId="10" label={data.deptName}></TreeItem>
    //                 </div>
    <>
      <TreeView>
        <TreeItem nodeId="1" label="Organization Tree">
          
          {/* <div className="Org"> */}
          {/* <div className="department pdng mrgn"> */}
          {/* <TreeItem nodeId="2" label="Software Development">
                <div className="hr">
                  <span className="number">9</span>
                </div>
                <div className="Designation">
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Director" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Manager" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Analyst" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Associate" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Sr.Specialist" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem nodeId="20" label="SD-Mobile Team">
                      <div className="hrr">
                        <span className="number">3</span>
                      </div>
                      <div className="Designation">
                        <div className="desigs pdng mrgn">
                          <TreeItem label="Manager" />
                        </div>
                        <div className="desigs pdng mrgn">
                          <TreeItem label="Lead" />
                        </div>
                        <div className="desigs pdng mrgn">
                          <TreeItem label="Analyst" />
                        </div>
                      </div>
                    </TreeItem>
                  </div> */}

          {/* <button onClick = {getDepartment}> Click Here</button> */}
          <div>
            {depart &&
              depart.map((data) => {
                // console.log(data);
                return (
                  <div className="Org" key={data._id}>
                    <div className="department pdng mrgn">
                      <TreeItem
                        nodeId="10"
                        label={data.deptName}
                        onClick={() => handleOnClick(data._id)}
                      >
                        
                        {departData &&
                          departData[0].deptId === data._id &&
                          departData.map((item) => {
                            return (
                              <div className="Designation">
                                <div className="desigs pdng mrgn">
                                  <TreeItem
                                    nodeId="21"
                                    label={item.designation}
                                  />
                                </div>
                              </div>
                            );
                          })}
                      </TreeItem>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* </div>
            </TreeItem> */}
          {/* </div> */}
          {/* </div> */}
        </TreeItem>
      </TreeView>
    </>
  );
}

export default Tree;
