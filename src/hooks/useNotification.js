import { useState } from "react";

export const useNotification = () => {
  const [open, setOpen] = useState(false);
  const [messageNotification, setMessageNotification] = useState('');
  const [severity, setSeverity] = useState('');
  const [disabled, setDisabled] = useState(false);

  const handleNotification = (message, severity) => {
    setOpen(true);
    setMessageNotification(message);
    setSeverity(severity);
    setDisabled(true)
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return {
    open,
    messageNotification,
    severity,
    disabled,
    handleNotification,
    handleClose,
  };
};
