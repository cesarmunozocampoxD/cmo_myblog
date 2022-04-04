
import './App.css';

import myPhoto from './images/myPhoto.jpg';
import lenguageJava from './images/java.png';
import lenguageJavaScript from './images/javaScript.png';
import lenguageCSharp from './images/cSharp.png';
import lenguagePHP from './images/php.png';
import frameworkSpringBoot from './images/spring-boot.png';
import frameworkNode from './images/node.png';
import frameworkReact from './images/react.png';
import frameworkVue from './images/vuejs.png';
import dataBaseSQLServer from './images/sqlServer.png';
import dataBaseMySQL from './images/mySql.png';
import dataBaseMongoDB from './images/mongoDB.png';
import toolsDocker from './images/docker.png';
import toolsGit from './images/git.png';
import toolsGoogleCloud from './images/googleCloud.png';

function App() {
  return (
    <div>
        <div className="container-fluid mt-5">
          <div className='container'>
            <div className='row'>
              <div className="col-3 mx-3 text-center align-top shadow" style={{backgroundColor:"rgb(255,255,255,.8)"}}>
                <img src={myPhoto} alt="" width="300px" className="py-3"/>
              </div>   
              <div className='col align-top shadow' style={{backgroundColor:"rgb(255,255,255,.9)", heigth:"250px"}} >
                <div className="row">
                  <div>
                    <h5 className='bg-primary text-white fst-italic py-2 text-center'>Contact</h5>
                  </div>
                  <div className='row mx-3 py-2 mt-3'>
                    <div className='col'>
                      <h5 className='fst-italic text-primary d-inline-block fw-bolder'>Name:</h5>
                      <p className='mx-3 d-inline-block m-0 p-0 fw-bolder'>Cesar Muñoz Ocampo</p>
                    </div>
                  </div>
                  <div className='row mx-3 py-2'>
                    <div className='col'>
                      <h5 className='fst-italic text-primary d-inline-block fw-bolder'>Address:</h5>
                      <p className='mx-3 d-inline-block m-0 p-0 fw-bolder'>Acolman, Real del valle, Estado De Mexico, cp. 55883</p>
                    </div>
                  </div>
                  <div className='row mx-3 py-2'>
                    <div className='col-4'>
                      <h6 className='fst-italic text-primary d-inline-block fw-bolder'>Phone:</h6>
                      <h6 className='mx-3 d-inline-block fw-bolder'>55 49042696</h6>
                    </div>
                    <div className='col-3'>
                      <h6 className='fst-italic text-primary d-inline-block fw-bolder'>Years:</h6>
                      <h6 className='mx-3 d-inline-block fw-bolder'>26</h6>
                    </div>
                  </div>
                  <div className='row mx-3 py-2'>
                    <div className='col'>
                      <h6 className='fst-italic text-primary d-inline-block fw-bolder'>Mail:</h6>
                      <h6 className='fst-italic d-inline-block fw-bolder'>
                        <a href="#" className="mx-1">cesar_MunozOcampo@hotmail.com</a>
                      </h6>
                      <span>, </span>
                      <h6 className='fst-italic d-inline-block fw-bolder'>
                        <a href="#" className="mx-1">cesar_dantexD@hotmail.com</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className='mt-5 shadow bg-light'>
                  <div className='pb-5 bg-light'>
                    <div>
                      <div>
                        <h2 className='text-white p-1 fst-italic' style={{backgroundColor: "#5E35B1"}}>Skills</h2>
                      </div>
                      <div>
                        <div className='row'>
                          <h5 className='fst-italic text-center py-1' style={{color:"#5E35B1", backgroundColor:"#ECEFF1"}}>Programming languages</h5>
                        </div>
                        <div className='row'>
                          <div className='col'>
                            <div className='text-center mt-3 animation_icons'>
                              <div>
                                <img className='my-0 py-0' alt="Java" width="35%" src={lenguageJava} />
                              </div>
                              <div className="progress mx-4 mt-3">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                  role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                  aria-valuemax="100" style={{width:"75%"}}></div>
                              </div>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='text-center mt-3 animation_icons'>
                              <img className='my-0 py-0' alt="Java" width="62%" src={lenguageJavaScript} />
                              <div className="progress mx-4 mt-3"> 
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                  role="progressbar" aria-valuenow="75" aria-valuemin="0"
                                  aria-valuemax="100" style={{width:"75%"}}></div>
                              </div>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='text-center mt-3 animation_icons'>
                              <img className='my-0 py-0' alt="Java" width="43%" src={lenguageCSharp} />
                              <div className="progress mx-4 mt-1">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                  role="progressbar" aria-valuenow="40" aria-valuemin="0"
                                  aria-valuemax="100" style={{width:"40%"}}></div>
                              </div>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='text-center mt-3 animation_icons'>
                              <img className='my-0 py-0' alt="Java" width="80%" src={lenguagePHP} />
                              <div className="progress mx-4 mt-1">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated  bg-danger"
                                  role="progressbar" aria-valuenow="30" aria-valuemin="0"
                                  aria-valuemax="100" style={{width:"30%"}}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='row mt-4'>
                          <h5 className='fst-italic text-center py-1' style={{color:"#5E35B1", backgroundColor:"#ECEFF1"}}>Frameworks:</h5>
                        </div>
                        <div className='row'>
                          <div className='col'>
                            <div className='text-center animation_icons'> 
                              <img className='my-1 py-0' alt="Java" width="50%" src={frameworkSpringBoot} />
                              <div className="progress mx-4 mt-1">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated  bg-primary"
                                  role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                  aria-valuemax="100" style={{width:"40%"}} ></div>
                              </div>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='text-center animation_icons'>
                              <img className='my-1 py-0' alt="Java" width="35%" src={frameworkReact} />    
                              <div className="progress mx-4 mt-1">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated  bg-primary"
                                  role="progressbar" aria-valuenow="50" aria-valuemin="0"
                                  aria-valuemax="100" style={{width:"60%"}}></div>
                              </div>
                            </div>
                          </div>
                          <div className='col'>
                            <div className='text-center animation_icons'>
                              <img className='my-1 py-0' alt="Java" width="30%" src={frameworkNode} />
                              <div className="progress mx-4 mt-1">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated  bg-primary"
                                  role="progressbar" aria-valuenow="20" aria-valuemin="0"
                                  aria-valuemax="100" style={{width:"40%"}}></div>
                              </div>
                            </div>
                          </div>                         
                          <div className='col'>
                            <div className='text-center animation_icons'>
                              <img className='my-1 py-0' alt="Java" width="58%" src={frameworkVue} />
                              <div className="progress mx-4 mt-1">
                                <div
                                  className="progress-bar progress-bar-striped progress-bar-animated  bg-primary"
                                  role="progressbar" aria-valuenow="20" aria-valuemin="0"
                                  aria-valuemax="100" style={{width:"60%"}} ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='row mt-4'>
                          <h5 className='fst-italic text-center py-1' style={{color:"#5E35B1", backgroundColor:"#ECEFF1"}}>Data Bases:</h5>
                        </div>
                        <div className='row'>
                          <div className='col'>
                            <div className='text-center mt-3 animation_icons'>
                              <img className='my-1 py-0' alt="Java" width="35%" src={dataBaseSQLServer} />
                            </div>
                          </div>
                          <div className='col'>
                            <div className='text-center mt-3 animation_icons'>
                              <img className='my-1 py-0' alt="Java" width="35%" src={dataBaseMySQL} />
                            </div>
                          </div>
                          <div className='col'>
                            <div className='text-center mt-3 animation_icons'>
                              <img className='my-1 py-0' alt="Java" width="50%" src={dataBaseMongoDB} />
                            </div>
                          </div>
                        </div>
                        <div className='row mt-4'> 
                          <h5 className='fst-italic text-center py-1' style={{color:"#5E35B1", backgroundColor:"#ECEFF1"}}>Tools:</h5>
                        </div>
                        <div className='row'>
                          <div className='col'>
                            <div className='text-center mt-3 animation_icons'>
                              <img className='my-1 py-0' alt="Java" width="35%" src={toolsDocker} />
                            </div>
                          </div>
                          <div className='col'>
                            <div className='text-center mt-3 animation_icons'>
                              <img className='my-1 py-0' alt="Java" width="50%" src={toolsGoogleCloud} />
                            </div>
                          </div>
                          <div className='col'>
                            <div className='text-center mt-3 animation_icons'>
                              <img className='my-1 py-0' alt="Java" width="40%" src={toolsGit} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
