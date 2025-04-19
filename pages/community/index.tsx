"use client";
import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";
import { Stack } from "@mui/material";
import useDeviceDetect from "../../libs/hooks/useDeviceDetect";

const Community: NextPage = () => {
  const device = useDeviceDetect();
  if (device == "mobile") {
    return <Stack>Community MOBILE </Stack>;
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className="container">Community</Stack>
      </div>
    );
  }
};

export default withLayoutBasic(Community);
