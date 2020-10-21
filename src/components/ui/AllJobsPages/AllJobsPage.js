import React from "react";
import { Container, Grid, Paper, Button, Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import SingleApplicationComponent from "./Sections/SingleApplicationComponent";
import { getAllApplications } from "./AllJobsHelper";

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

const application_received = {
  data: [
    {
      id: "1",
      Name: "Nitesh garg",
      Location: "India",
      Applied_Date: "1 day ago",
      Education: [
        {
          CourseName: "Bachelor Of Technology",
          InstituteName: "Birla Institute Of Technology",
        },
      ],
      skills: [
        "Python",
        "Java",
        "UI-UX",
        "Web Development",
        "Machine Learning",
      ],
      Work_Experience: [
        {
          OrganizationName: "Code Planet Technologies",
          Position: "Software Engineering Intern",
        },
      ],
      assesment: [
        {
          aNo: 1,
          userAnswer: "Because I'm the best.",
        },
        {
          aNo: 2,
          userAnswer: "Because I'm the best.",
        },
      ],
    },
    {
      id: "2",
      Name: "Nitesh garg",
      Location: "India",
      Applied_Date: "1 day ago",
      Education: [
        {
          CourseName: "Bachelor Of Technology",
          InstituteName: "Birla Institute Of Technology",
        },
      ],
      skills: [
        "Python",
        "Java",
        "UI-UX",
        "Web Development",
        "Machine Learning",
      ],
      Work_Experience: [
        {
          OrganizationName: "Code Planet Technologies",
          Position: "Software Engineering Intern",
        },
      ],
      assesment: [
        {
          aNo: 1,
          userAnswer: "Because I'm the best.",
        },
        {
          aNo: 2,
          userAnswer: "Because I'm the best.",
        },
      ],
    },
    {
      id: "3",
      Name: "Nitesh garg",
      Location: "India",
      Applied_Date: "1 day ago",
      Education: [
        {
          CourseName: "Bachelor Of Technology",
          InstituteName: "Birla Institute Of Technology",
        },
      ],
      skills: [
        "Python",
        "Java",
        "UI-UX",
        "Web Development",
        "Machine Learning",
      ],
      Work_Experience: [
        {
          OrganizationName: "Code Planet Technologies",
          Position: "Software Engineering Intern",
        },
      ],
      assesment: [
        {
          aNo: 1,
          userAnswer: "Because I'm the best.",
        },
        {
          aNo: 2,
          userAnswer: "Because I'm the best.",
        },
      ],
    },
    {
      id: "4",
      Name: "Nitesh garg",
      Location: "India",
      Applied_Date: "1 day ago",
      Education: [
        {
          CourseName: "Bachelor Of Technology",
          InstituteName: "Birla Institute Of Technology",
        },
      ],
      skills: ["Python", "Java", "UI-UX"],
      assesment: [
        {
          aNo: 1,
          userAnswer: "Because I'm the best.",
        },
        {
          aNo: 2,
          userAnswer: "Because I'm the best.",
        },
      ],
    },
  ],
};
const AllJobsPage = () => {
  const classes = useStyles();
  const [currentTab, setCurrentTab] = React.useState(0);

  React.useEffect(() => {
    const type = "internship";
    const id = 14;
    const companyId = 6;
    const fetchData = async () => {
      const getDataStatus = await getAllApplications(type, id, companyId);

      if (getDataStatus && getDataStatus.status) {
        console.log(getDataStatus.data.ApplicationsList);
      } else {
        console.log("Kuch toh Locha Hai");
      }
    };
    fetchData();
  });

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
  return (
    <Container style={{ padding: "2em" }} maxWidth="lg">
      <h1 className={classes.jobTitle}>
        Applications for Video Making/Editing Internship
      </h1>
      <Tabs
        value={currentTab}
        onChange={handleTabChange}
        aria-label="simple tabs example"
      >
        <Tab label="Applications Received" />
        <Tab label="Shortlisted" />
        <Tab label="Hire" />
        <Tab label="Rejected" />
      </Tabs>
      {application_received["data"].map((data) => (
        <SingleApplicationComponent candidateData={data} />
      ))}
    </Container>
  );
};

export default AllJobsPage;
