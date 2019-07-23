import React, { Component, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import { Timeline, Event } from "react-timeline-scribble";
import Paper from "@material-ui/core/Paper";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Navbar from "./Navbar";
import Drawer from "react-motion-drawer";

import "./components.css";
import "./about.css";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="about" id="about">
          <Navbar />

          <Typography variant="h3" className="center">
            <Slide left>ABOUT ME</Slide>
            <Slide left>
              <div className="subhead3" />
            </Slide>

            <div className="quote">
              “Don’t let your happiness depend on something you may lose.”
            </div>
            <div className="author">-C.S. Lewis</div>
          </Typography>

          <div className="flex">
            <div className="paper2">
              <Fade left delay="100">
                <div className="paper">
                  <div className="">
                    <img
                      src={require("../images/me2.jpg")}
                      className="aboutpic"
                    />
                  </div>

                  <div className="blackglass">
                    <h2 className="who">WHO AM I?</h2>
                    <p className="p">
                      I am a 3rd year student studying at the{" "}
                      <a href="https://www.virginia.edu/" className="none4 p">
                        University of Virginia
                        </a>
                      , majoring in Computer Science & Statistics in the
                      School of Engineering. Currently, I am a Software
                      Development Intern using AWS, Docker, React at
                        <a
                        href="https://www.vwcredit.com/Authentication/Login"
                        className="none4 p"
                      >
                        &nbsp;Volkswagen Credit
                        </a>
                      , a financial subsidiary of
                        <a
                        href="http://www.volkswagengroupofamerica.com/"
                        className="none4 p"
                      >
                        &nbsp;Volkswagen Group of America&nbsp;
                        </a>
                      based in Herndon VA. Down the road, I aspire to become a
                      full-stack engineer and enjoy challenging myself to
                      learn and use new modern technologies and tools that
                      software development is revolving around today. My
                      current interests lie in learning more about machine
                      learning and cloud services.
                      </p>
                    <p className="p">
                      Outside of academics, I enjoy hanging out with friends
                      in my fellowship, playing tennis, and sometimes reading
                      interesting books. I have recently started learning
                      guitar as well.
                      </p>
                  </div>
                </div>
              </Fade>
            </div>

            <div className="paper2">
              <Fade left delay="100">
                {/* <Slide bottom delay="200"> */}
                <div className="paper">
                  <div className="centered4">
                    <img
                      src={require("../images/uva3.jpeg")}
                      className="aboutpic"
                    />
                  </div>

                  <div className="blackglass">
                    <h2 className="who">
                      <a href="https://www.virginia.edu/" className="none4 p2">
                        University of Virginia
                        </a>
                    </h2>
                    <div className="p">
                      3rd Year (School of Engineering) - CS & Statistics, '21.
                      </div>
                    <p className="p">
                      <strong>Activities:</strong> Grace Christian Fellowship,
                      Hackcville.
                      </p>

                    <p className="p">
                      <strong>Coursework:</strong> CS4774 Machine Learning,
                      CS4501 Computer Vision, CS4501 Internet Scale
                      Applications, CS4102 Algorithms, CS3330 Computer
                      Arhictecture, CS3240 Advanced Software Development,
                      CS2150 Program and Data Representation, CS2102 Discrete
                      Mathematics, CS2110 Software Development Methods,
                      STAT3080 From Data to Knowledge
                      </p>
                  </div>
                </div>
                {/* </Slide> */}
              </Fade>
            </div>
            <div className="paper2">
              <Fade left delay="100">
                {/* <Slide bottom delay="300"> */}
                <div className="paper">
                  <div className="centered4">
                    <img
                      src={require("../images/tjhsst.png")}
                      className="aboutpic"
                    />
                  </div>

                  <div className="blackglass">
                    <h2 className="who">
                      <a className="none4 p2" href="https://tjhsst.fcps.edu/">
                        Thomas Jefferson HSST
                        </a>
                    </h2>
                    <div className="p">Student 2013-2017.</div>
                    <p className="p">

                      <strong>Activities:</strong> Varsity Tennis 2014-15,
                      2016-17, Senior Research (NeuroLab).
                      </p>

                    <p className="p">
                      <strong>Coursework:</strong> AP Computer Science,
                      Artificial Intelligence 1 & 2, Mobile App Development,
                      Computer Vision
                      </p>
                  </div>
                </div>
                {/* </Slide> */}
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
