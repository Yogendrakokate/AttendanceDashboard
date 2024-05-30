import { AccessTime, BeachAccess, Done, WatchLater, Work } from "@mui/icons-material";

export const StatusIcon = ({ status }) => {
    switch (status) {
      case 'HELP':
        return <AccessTime color="primary" />;
      case 'WORK':
        return <Work color="success" />;
      case 'LEAVE':
        return <BeachAccess color="error" />;
      case 'WCORP':
        return <WatchLater color="warning" />;
      case 'REMOTE':
        return <Done color="action" />;
      default:
        return <AccessTime />;
    }
  };