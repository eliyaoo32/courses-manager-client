import React from "react";
import { AppBar, Tab, Tabs as MaterialTabs } from "@material-ui/core";

interface TabsProps {
  selectedTab: number;
  handleTabChange: (tabId: number) => any;
}

function Tabs({ selectedTab, handleTabChange }: TabsProps) {
  const onChangeTab = (event: React.ChangeEvent<{}>, newTab: number) =>
    handleTabChange(newTab);

  return (
    <AppBar position="relative" color="transparent" elevation={0}>
      <MaterialTabs
        value={selectedTab}
        onChange={onChangeTab}
        centered
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Item 1" />
        <Tab label="Item 2" />
      </MaterialTabs>
    </AppBar>
  );
}

export default Tabs;
