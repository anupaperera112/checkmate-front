import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import WorkIcon from "@mui/icons-material/Work";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import CustomIcon from "../asests/images/ach3 1.png";
import DemoPageContent from "./DemoPageContent";

const demoTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
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
    <ThemeProvider theme={demoTheme}>
      <CssBaseline />
      <AppProvider
        branding={{
          logo: (
            <Box
              component="img"
              src={CustomIcon}
              alt="DO -IT logo"
              sx={{ width: 40, height: 40, mr: 1 }}
            />
          ),
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
            icon: <WorkIcon />,
          },
          { kind: "divider" },
          {
            segment: "Critical",
            title: "Critical",
            icon: <PriorityHighIcon />,
          },
        ]}
        router={router}
        theme={demoTheme}
      >
        <DashboardLayout
          title="My Tasks"
          icon={
            <Box
              component="img"
              src={CustomIcon}
              sx={{ width: 32, height: 32 }}
            />
          }
        >
          <DemoPageContent pathname={pathname} />
        </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
  );
}

export default TaskListpage;
