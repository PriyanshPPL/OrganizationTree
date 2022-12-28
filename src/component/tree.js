import React from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";

import "./tree.css";

function Tree() {
  return (
    <>
      <TreeView>
        <TreeItem nodeId="1" label="Organization Tree">
          <div className="Org">
            <div className="department pdng mrgn">
              <TreeItem nodeId="2" label="Software Development">
                <div className="hr">
                  <span className="number">5</span>
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
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem nodeId="22" label="SD-Development Team">
                      <div className="hrr">
                        <span className="number">3</span>
                      </div>
                      <div className="Designation">
                        <div className="desigs pdng mrgn">
                          <TreeItem label="Manager" />
                        </div>
                        <div className="desigs pdng mrgn">
                          <TreeItem label="Associate" />
                        </div>
                        <div className="desigs pdng mrgn">
                          <TreeItem label="Analyst" />
                        </div>
                      </div>
                    </TreeItem>
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem nodeId="24" label="SD-UI Team"></TreeItem>
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem nodeId="26" label="SD-Testing Team"></TreeItem>
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="department  pdng mrgn">
              <TreeItem nodeId="4" label="Sales">
                <div className="hr">
                  <span className="number">5</span>
                </div>
                <div className="Designation">
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Sr.Specialist" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Jr.Specialist" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Sr.Manager" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Sr.Analyst" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Analyst" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="department  pdng mrgn">
              <TreeItem nodeId="5" label="Manufacturing">
                <div className="hr">
                  <span className="number">5</span>
                </div>
                <div className="Designation">
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Engineer" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Lead" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Sr.Engineer" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Jr.Engineer" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Office Assistant" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem nodeId="24" label="Quality Assurance QA">
                      <div className="hrr">
                        <span className="number">3</span>
                      </div>
                      <div className="Designation">
                        <div className="desigs pdng mrgn">
                          <TreeItem label="Jr.Engineer" />
                        </div>
                        <div className="desigs pdng mrgn">
                          <TreeItem label="Executive" />
                        </div>
                        <div className="desigs pdng mrgn">
                          <TreeItem label="DET" />
                        </div>
                      </div>
                    </TreeItem>
                  </div>
                </div>
              </TreeItem>
            </div>

            <div className="department  pdng mrgn">
              <TreeItem nodeId="7" label="Marketing">
                <div className="hr">
                  <span className="number">5</span>
                </div>
                <div className="Designation">
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Sr.Specialist" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Specialist" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Manager" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Analyst" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Head" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="department  pdng mrgn">
              <TreeItem nodeId="9" label="HR">
                <div className="hr">
                  <span className="number">5</span>
                </div>
                <div className="Designation">
                  <div className="desigs pdng mrgn">
                    <TreeItem label="HR. Admin" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="HR. Talent Acquisition" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem nodeId="24" label="HR.Core">
                      <div className="hrr">
                        <span className="number">3</span>
                      </div>
                      <div className="Designation">
                        <div className="desigs pdng mrgn">
                          <TreeItem label="Analyst" />
                        </div>
                        <div className="desigs pdng mrgn">
                          <TreeItem label="Assistant Manager" />
                        </div>
                      </div>
                    </TreeItem>
                  </div>

                  <div className="desigs pdng mrgn">
                    <TreeItem label="HR.Learning & Development" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Assistant Manager" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="department  pdng mrgn">
              <TreeItem nodeId="6" label="Product">
                <div className="hr">
                  <span className="number">2</span>
                </div>
                <div className="Designation">
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Advisor" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Sr.Manager" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="department  pdng mrgn">
              <TreeItem nodeId="11" label="Research & Development">
                <div className="hr">
                  <span className="number">4</span>
                </div>
                <div className="Designation">
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Head" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Product Manager" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Manager" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Manager" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="department  pdng mrgn">
              <TreeItem nodeId="13" label="CEO">
                <div className="hr">
                  <span className="number">2</span>
                </div>
                <div className="Designation">
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Founder" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Director" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="department  pdng mrgn">
              <TreeItem nodeId="15" label="Accounts">
                <div className="hr">
                  <span className="number">5</span>
                </div>
                <div className="Designation">
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Specialist" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Specialist" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Head" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Sr.Associate" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Analyst" />
                  </div>
                </div>
              </TreeItem>
            </div>
            <div className="department  pdng mrgn">
              <TreeItem nodeId="10" label="Technical Support">
                <div className="hr">
                  <span className="number">3</span>
                </div>
                <div className="Designation">
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Software Support Engineer" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Analyst" />
                  </div>
                  <div className="desigs pdng mrgn">
                    <TreeItem label="Sr.Specialist" />
                  </div>
                </div>
              </TreeItem>
            </div>
          </div>
        </TreeItem>
      </TreeView>
    </>
  );
}

export default Tree;
