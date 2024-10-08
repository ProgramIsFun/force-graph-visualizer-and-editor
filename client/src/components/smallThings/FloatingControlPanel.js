import React, {useEffect, useRef, useState} from 'react';
// import './FloatingControlPanel.css'; // Importing the stylesheet for styles
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import {InputLabel, TextField, Typography} from "@mui/material";
import {auth} from "../../firebase";
import FileDrop from "../../util/KKKKKKKKK";
import {UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import {cccccccccc, cgg} from "../../util/helperfile";
import {l} from "../../firebase/firebase";

const FloatingControlPanel = (props) => {


    const [tempNumber, setTempNumber] = useState(3);
    const emptyGraph = props.emptyGraph;
    const loadSample = props.loadSample;
    const saveGraph = props.saveGraph;
    const loadGraphFromLastSave = props.loadGraphFromLastSave;
    const notice = props.notice;
    const fileContent2 = props.fileContent2;
    const setFileContent2 = props.setFileContent2;

    const dd = props.dd;
    const setdd = props.setdd;


    const setpage = props.setpage;
    const page = props.page;
    const getRepoData = props.getRepoData;
    const setrepo = props.setrepo;
    const fileContent = props.fileContent;
    const setFileContent = props.setFileContent;
    const fgRef = props.fgRef;
    const returnListRepo = props.returnListRepo;


    const objectToBeInspected = props.objectToBeInspected;
    const setObjectToBeInspected = props.setObjectToBeInspected;

    const fixing = props.fixing;
    const setFixing = props.setFixing;

    const istreemaxlevelrestricted = props.istreemaxlevelrestricted;
    const setistreemaxlevelrestricted = props.setistreemaxlevelrestricted;
    const treemaxlevel = props.treemaxlevel;
    const settreemaxlevel = props.settreemaxlevel;


    const inputRef1 = useRef(null);


    const search = props.search;
    const setSearch = props.setSearch;
    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };
    const filterdd = props.filterdd;


    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    let c = props.c;
    let setc = props.setc;

    const [isVisible, setIsVisible] = useState(true); // State to manage the visibility

    // Function to toggle visibility
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const fixAllNodes = () => {
        setFixing(true);
        // we're trying to put an FX and FY value in all node objects
        dd.nodes.forEach((node) => {
            node.fx = node.x;
            node.fy = node.y;
        });

        // const simulation = fgRef.current.d3Force('charge');
        //
        // if (simulation) {
        //     simulation.stop(); // Step 1: Pause the simulation
        // }
    }

    const unfixAllNodes = () => {

        setFixing(false);
        // we're trying to remove the FX and FY value in all node objects
        dd.nodes.forEach((node) => {
            delete node.fx;
            delete node.fy;
        });

        // const simulation = fgRef.current.d3Force('charge');
        //
        // if (simulation) {
        //     simulation.restart(); // Step 1: Pause the simulation
        // }
    }
    const handleChange11 = (propName, newValue) => {
        setc(prevState => ({
            ...prevState,
            [propName]: newValue
        }));
    };


    return (


        <>
            {isVisible ? (
                <div className="floating-control-panel"

                     style={{
                         overflow: "scroll",
                         height: "80vh",
                     }}>
                    <button onClick={toggleVisibility}>Hide</button>

                    <br/>

                    <button
                        onClick={() => {
                            cgg("signing out");
                            auth.getAuth().signOut();
                        }}
                    >
                        Logout
                    </button>


                    <button
                        onClick={
                            fixAllNodes
                        }
                    > stop
                    </button>

                    <button
                        onClick={
                            unfixAllNodes
                        }
                    > start
                    </button>

                    <br/>

                    <p>Edit is only possible in 2d-build ,after u edit, u could use 3d or 3d-vr to visualize</p>
                    <p>you could loadSample and go to 3d-vr to try the effect first</p>
                    <p>{notice}</p>

                    <br/>
                    <>general control</>
                    <button id="emit-particles-btn" onClick={emptyGraph}>emptyGraph</button>
                    <button id="emit-particles-btn" onClick={loadSample}>loadSample</button>
                    <button id="emit-particles-btn" onClick={saveGraph}>saveGraph</button>
                    <button id="emit-particles-btn" onClick={loadGraphFromLastSave}>loadGraphFromLastSave</button>
                    <FileDrop
                        fileContent={fileContent2}
                        setFileContent={setFileContent2}
                        setdd={setdd}
                        text={"loadGraphFromLocal"}
                    ></FileDrop>


                    <br></br>
                    <br></br>
                    <>view mode control</>
                    <button id="emit-particles-btn" onClick={() => setpage(0)}>3d</button>
                    {/*<button id="emit-particles-btn" onClick={() => setpage(1)}>2d</button>*/}
                    <button id="emit-particles-btn" onClick={() => setpage(2)}>3d-vr</button>
                    {/*<button id="emit-particles-btn" onClick={() => setpage(3)}>2d-text</button>*/}
                    <button id="emit-particles-btn" onClick={() => setpage(4)}>2d-build</button>

                    <br></br>
                    {page == 4 &&
                        < p>

                            {/*ADD NODE: LEFT <br/>*/}
                            {/*RIGHT CLICK ON NODE: DELETE <br/>*/}
                            {/*RIGHT CLICK ON LINK: DELETE LINK <br/>*/}
                            {/*DRAG node A near node B: ADD connection A->B, <br/>*/}
                            {/*{"Click getAllRepos, below will then show the list of repo (that you gave us access) that is not in the graph yet, left click any row to add that repo into the graph"}*/}

                        </p>

                    }


                    {
                        page == 4 && <button id="emit-particles-btn"
                                             onClick={getRepoData}

                        >getAllRepos</button>
                    }

                    {
                        page == 4 && <FileDrop
                            fileContent={fileContent}
                            setFileContent={setFileContent}
                            setrepo={setrepo}
                            text={"load repo list from local"}
                        >
                        </FileDrop>
                    }

                    <button id="emit-particles-btn" onClick={() => {
                        fgRef.current.zoomToFit(400)
                    }}>fit all
                    </button>

                    <button id="emit-particles-btn" onClick={() => {
                        fgRef.current.centerAt(0, 0, 1000);

                    }}>center
                    </button>
                    <button id="emit-particles-btn" onClick={() => {
                        let ggg = objectToBeInspected.x
                        let ggg2 = objectToBeInspected.y
                        if (ggg) {

                            fgRef.current.centerAt(ggg, ggg2, 1000);
                        }

                    }}>zoom at selected node
                    </button>

                    <button id="emit-particles-btn" onClick={() => {

                        const bloomPass = new UnrealBloomPass();
                        bloomPass.strength = 4;
                        bloomPass.radius = 1;
                        bloomPass.threshold = 0;
                        fgRef.current.postProcessingComposer().addPass(bloomPass);

                    }}>zoomToFit
                    </button>


                    <div
                        // we want to take its overflow.  so that we can scroll it
                        style={{
                            border: "3px solid red",
                            overflow: "auto",
                            height: "100px"
                        }}
                    >{returnListRepo()}</div>


                    <div>search</div>
                    <TextField
                        label="Enter something"   // You can change the label text here
                        variant="outlined"        // Style variant, options: "filled", "outlined", "standard"
                        value={search}
                        onChange={handleInputChange}
                    />
                    <div style={
                        {
                            overflow: "scroll",
                            height: "100px"
                        }
                    }>{filterdd.map((item) => {
                        return <li onClick={() => {
                            setObjectToBeInspected(item);

                        }}>{item.name}</li>
                    })}

                    </div>

                    {Object.keys(c).map(
                        (key) => {

                            let max = cccccccccc[key].max
                            let min = cccccccccc[key].min
                            let step = cccccccccc[key].step
                            return (
                                <Stack key={key} spacing={2} direction="row" sx={{mb: 1}} alignItems="center">

                                    <InputLabel>{key.split('_').join(' ')}</InputLabel>
                                    {/*<VolumeDown/>*/}
                                    <Slider
                                        aria-label={key}
                                        value={typeof c[key] === 'number' ? c[key] : 0}
                                        onChange={(event, newValue) => handleChange11(key, newValue)}
                                        min={min}
                                        max={max}
                                        step={step}
                                    />
                                    <Typography>{c[key]}</Typography>
                                </Stack>
                            )
                        })}


                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={istreemaxlevelrestricted}
                                onChange={() => {
                                    setistreemaxlevelrestricted(!istreemaxlevelrestricted);

                                }}
                            />
                            istreemaxlevelrestricted
                        </label>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={tempNumber}
                            onChange={(e) => setTempNumber(e.target.value)}
                            placeholder="Enter a number"
                        />
                        <button onClick={() => {
                            const parsedNumber = parseInt(tempNumber, 10); // Ensure we're working with a number
                            // Use a basic validation to check if the input is a number
                            if (!isNaN(parsedNumber)) {
                                settreemaxlevel(parsedNumber);
                            }
                        }}>Update treemaxlevel
                        </button>
                    </div>
                    <div>
                        <p>istreemaxlevelrestricted: {istreemaxlevelrestricted ? 'True' : 'False'}</p>
                        <p>treemaxlevel: {treemaxlevel}</p>
                    </div>
                </div>
            ) : (
                <div className="floating-control-icon" onClick={toggleVisibility}>
                    {/* Replace with your icon, using a placeholder emoji for example */}
                    ⚙click to show
                </div>
            )}
        </>
    );
};

export default FloatingControlPanel;