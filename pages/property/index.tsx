import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const ProperyList: NextPage = () => {
  console.log("PROPERTY COMPONENT - PAGES ROUTER");
  return <Container>PROPERTY LIST</Container>;
};

export default withLayoutBasic(ProperyList);
