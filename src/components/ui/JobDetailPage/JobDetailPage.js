import React from "react";
import { Container, Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

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

const skills = [
  "Python",
  "Java",
  "UI-UX",
  "Web Development",
  "Machine Learning",
];

const assesment = [
  {
    qNo: 1,
    questionText: "Why should you be hired for this role ?",
    userAnswer: "Because I'm the best.",
  },
  {
    qNo: 2,
    questionText: "Why should you be hired for this role ?",
    userAnswer: "Because I'm the best.",
  },
];

const resume = {
  Education: [
    {
      CourseName: "Bachelor Of Technology",
      InstituteName: "Birla Institute Of Technology",
      Duration: "May 2018 - July 2022",
      Grade: "10 CGPA",
    },
    {
      CourseName: "Bachelor Of Technology",
      InstituteName: "Birla Institute Of Technology",
      Duration: "May 2018 - July 2022",
      Grade: "10 CGPA",
    },
  ],
  Internships: [
    {
      OrganizationName: "Code Planet Technologies",
      Position: "Software Engineering Intern",
      Duration: "May 2018 - July 2022",
    },
    {
      OrganizationName: "Code Planet Technologies",
      Position: "Software Engineering Intern",
      Duration: "May 2018 - July 2022",
    },
  ],
  "Work Experience": [
    {
      OrganizationName: "Code Planet Technologies",
      Position: "Software Engineering Intern",
      Duration: "May 2018 - July 2022",
    },
    {
      OrganizationName: "Code Planet Technologies",
      Position: "Software Engineering Intern",
      Duration: "May 2018 - July 2022",
    },
  ],
  Projects: [
    {
      ProjectTitle: "Restaurants",
      Duration: "Jan 2019 - Mar 2019",
      ProjectDescription:
        "This Application is made by using spring framework. And it is Dynamic Web Application.",
    },
    {
      ProjectTitle: "Restaurants",
      Duration: "Jan 2019 - Mar 2019",
      ProjectDescription:
        "This Application is made by using spring framework. And it is Dynamic Web Application.csbhcvjhcvdcdhbsjdvk sccdcdcdcdcdevevesvbjsvdvkdvndfjkvd",
    },
  ],
  Contact: [{ Phone: "+91 9782078240" }],
};

const JobDetailPage = () => {
  const classes = useStyles();

  return (
    <Container style={{ padding: "2em" }} maxWidth="lg">
      <h1 className={classes.jobTitle}>
        Applications for Video Making/Editing Internship
      </h1>

      <Paper elevation={3} className={classes.paperContainer}>
        <Grid container>
          <Grid item xs={8} sm={8}>
            <h2 style={{ margin: "0px", textAlign: "inherit" }}>
              Mayank Kumar
            </h2>
          </Grid>
          <Grid item xs={4} sm={4} style={{ textAlign: "right" }}>
            Posted 2 days Ago
          </Grid>
          <Grid item xs={12} sm={12}>
            Jaipur, Rajasthan
          </Grid>
        </Grid>
        <Grid style={{ marginTop: "1.5em" }} container spacing={0}>
          <Grid item xs={12} sm={2}>
            <h3 style={{ margin: "0" }}>Skills</h3>
          </Grid>
          <Grid item xs={12} sm={8}>
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
      </Paper>

      <Paper elevation={3} className={classes.paperContainer}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <h2 style={{ margin: "0", textAlign: "inherit" }}>Assesment</h2>
          </Grid>
        </Grid>
        <Grid style={{ marginTop: "1.5em" }} container spacing={0}>
          {assesment.map((qna) => (
            <Grid key={qna} item xs={12} sm={12}>
              <h4
                style={{ margin: "0", fontSize: "19px" }}
              >{`Q${qna.qNo} ${qna.questionText}`}</h4>
              <p>{qna.userAnswer}</p>
              <br />
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper elevation={3} className={classes.paperContainer}>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <h2 style={{ margin: "0", textAlign: "inherit" }}>Resume</h2>
          </Grid>
        </Grid>
        <Grid style={{ marginTop: "1.5em" }} container spacing={0}>
          {Object.entries(resume).map((resumeEntry, idx) => (
            <React.Fragment>
              <Grid container spacing={0}>
                <Grid item xs={2} sm={3}>
                  <b>{resumeEntry[0]}</b>
                </Grid>
                <Grid item xs={10} sm={9}>
                  <Grid container spacing={0}>
                    {resumeEntry[1].map((entry) => (
                      <React.Fragment>
                        <Grid
                          container
                          spacing={0}
                          style={{ paddingBottom: "6px" }}
                        >
                          {Object.entries(entry).map((singleEntry, idx) => (
                            <Grid item xs={12} sm={12}>
                              {idx == "0" ? (
                                <b>{singleEntry[1]}</b>
                              ) : (
                                <>{singleEntry[1]}</>
                              )}
                            </Grid>
                          ))}
                        </Grid>
                      </React.Fragment>
                    ))}
                  </Grid>
                  <br />
                </Grid>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Paper>

      <Grid className={classes.btnContainer} container spacing={1}>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={1}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disableElevation
          >
            Hire
          </Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button fullWidth variant="contained" color="danger" disableElevation>
            Reject
          </Button>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button fullWidth variant="outlined" color="primary" disableElevation>
            Short List
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default JobDetailPage;
