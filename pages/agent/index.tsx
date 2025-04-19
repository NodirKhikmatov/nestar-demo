"use client";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";
import { Stack } from "@mui/material";
import useDeviceDetect from "../../libs/hooks/useDeviceDetect";

const AgentList: NextPage = () => {
  const [title, setTitle] = useState<string>("hello");
  const device = useDeviceDetect();
  if (device == "mobile") {
    return <Stack>AGENT LIST MOBILE </Stack>;
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className="container">Agent</Stack>
      </div>
    );
  }
};

export default withLayoutBasic(AgentList);
