import * as React from "react";
import { createTheme } from "@mui/material/styles";
import DescriptionIcon from "@mui/icons-material/Description";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import CustomIcon from "../asests/images/ach3 1.png";
import DemoPageContent from "./DemoPageContent";

const demoTheme = createTheme({
  palette: {
    mode: "dark", // or 'dark' based on the color scheme you want
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function TaskListpage() {
  const [pathname, setPathname] = React.useState("/task-list/Personal");

  const navigateWithUserId = (category) => {
    setPathname(`/task-list${category}`);
  };

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),

      navigate: (user_id) => navigateWithUserId(user_id),
    };
  }, [pathname]);

  return (
    // preview-start
    <AppProvider
      branding={{
        logo: <img src={CustomIcon} alt="DO -IT logo" />,
        title: "DO -IT",
      }}
      navigation={[
        {
          segment: "Personal",
          title: "Personal",
          icon: <DescriptionIcon />,
        },
        { kind: "divider" },
        {
          segment: "Office",
          title: "Office",
          icon: <DescriptionIcon />,
        },
        { kind: "divider" },
        {
          segment: "Critical",
          title: "Critical",
          icon: <DescriptionIcon />,
        },
      ]}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout title="My Custom App" icon={<CustomIcon />}>
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

export default TaskListpage;
