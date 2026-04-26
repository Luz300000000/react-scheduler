import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import useStore from "../../hooks/useStore";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ReactNode } from "react";

interface AuxProps {
  children: ReactNode;
}

const DateProvider = ({ children }: AuxProps) => {
  const { locale } = useStore();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={locale}>
      {children}
    </LocalizationProvider>
  );
};

export default DateProvider;
