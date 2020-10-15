import React from "react";
import { Container, Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  jobTitle: {
    fontFamily: "Noto Sans JP",
  },
  paperContainer: {
    padding: "20px",
    marginTop: "2em",
  },
  text: {
    margin: "0",
  },
  skillChip: {
    padding: "1em",
    marginRight: "1em",
  },
  btnContainer: {
    marginTop: "2em",
  },
}));

const SingleApplicationComponent = (props) => {
  const classes = useStyles();
  const {
    id,
    Name,
    Location,
    Applied_Date,
    Education,
    skills,
    Work_Experience,
    assesment,
  } = props.candidateData;
  return (
    <Paper elevation={3} className={classes.paperContainer}>
      <Grid container spacing={0}>
        <Grid item xs={11} sm={9}>
          <h2 style={{ margin: "0",textAlign:"inherit" }}>{Name}</h2>
        </Grid>
        <Grid item xs={12} sm={2} style={{ textAlign: "right" }}>
          {Applied_Date}
        </Grid>
        <Grid item xs={12} sm={11}>
          {Location}
        </Grid>
        <Grid item xs={12} sm={11}>
          <Grid container spacing={0} >
            {Work_Experience ? (
              <Grid
                container
                spacing={0}
                style={{ marginBottom: "1em", marginTop: "1em" }}
              >
                <Grid item xs={2} sm={2}>
                  <h4 style={{ margin: "0", color: "gray",fontSize:"19px" }}>
                    Work Experience
                  </h4>
                </Grid>
                <Grid item xs={10} sm={10}>
                  <h4 style={{ margin: "0",fontSize:"20px" }}>
                    {Work_Experience[0]["OrganizationName"]}
                  </h4>
                  <p style={{ margin: "0" }}>
                    {Work_Experience[0]["Position"]}
                  </p>
                </Grid>
              </Grid>
            ) : (
              "null"
            )}
            {Education ? (
              <Grid
                container
                spacing={0}
                style={{ marginBottom: "1em", marginTop: "1em" }}
              >
                <Grid item xs={2} sm={2}>
                  <h4 style={{ margin: "0", color: "gray",fontSize:"19px" }}>Education</h4>
                </Grid>
                <Grid item xs={10} sm={10}>
                  <h4 style={{ margin: "0",fontSize:"20px" }}>{Education[0]["CourseName"]}</h4>
                  <p style={{ margin: "0" }}>{Education[0]["InstituteName"]}</p>
                </Grid>
              </Grid>
            ) : (
              "null"
            )}
            {skills ? (
              <Grid container spacing={0} style={{ marginBottom: "1em" }}>
                <Grid item xs={2} sm={2}>
                  <h4 style={{ margin: "0", color: "gray",fontSize:"19px" }}>Skills</h4>
                </Grid>
                <Grid item xs={10} sm={10}>
                  {skills.map((skill) => (
                    <Chip
                      className={classes.skillChip}
                      color="primary"
                      key={skill}
                      label={skill}
                    />
                  ))}
                </Grid>
              </Grid>
            ) : (
              "null"
            )}

            {assesment.map((qna) => (
              <Grid
                key={qna}
                container
                spacing={0}
                style={{ marginBottom: "1em" }}
              >
                <Grid item xs={2} sm={2}>
                  <h4
                    style={{ margin: "0", color: "gray",fontSize:"19px" }}
                  >{`Answer ${qna.aNo}`}</h4>
                </Grid>
                <Grid item xs={10} sm={10}>
                  <p style={{ margin: "0" }}>{qna.userAnswer}</p>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid container style={{ marginTop: "1em" }}>
          <Grid item xs={12} sm={6}>
            <Link
              style={{
                textDecoration: "none",
                fontWeight: "600",
                color: "primary",
              }}
              to={`/dashboard/application_detail/${id}`}
            >
              View Full Application
            </Link>
          </Grid>
          <Grid item xs={12} sm={5} style={{paddingLeft:"98px"}}>
            <Button
              variant="outlined"
              color="primary"
              disableElevation
              style={{ marginLeft: "1em" }}
            >
              Start a Chat
            </Button>
            <Button
              variant="contained"
              color="danger"
              disableElevation
              style={{ marginLeft: "1em" }}
            >
              Reject
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              style={{ marginLeft: "1em" }}
            >
              Shortlist
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SingleApplicationComponent;
