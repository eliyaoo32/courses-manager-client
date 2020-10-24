import React from "react";
import { AppBar, Tab, Tabs as MaterialTabs } from "@material-ui/core";

interface TabPanelItem {
  key: any;
  value: any;
}

interface TabsProps {
  selectedTab: any;
  handleTabChange: (tabId: any) => any;
  items: TabPanelItem[];
}

function Tabs({ selectedTab, handleTabChange, items }: TabsProps) {
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
        {items.map((item) => (
          <Tab label={item.value} value={item.key} style={{textTransform: 'none'}} />
        ))}
      </MaterialTabs>
    </AppBar>
  );
}

export default Tabs;
