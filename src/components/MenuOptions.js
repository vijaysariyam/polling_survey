import { useRef, useState } from "react";
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from "@mui/material";
import Iconify from "./Iconify";

export default function MenuOptions({ handleView, handleEdit, handleDelete }) {
  const ref = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const onClick = (handleMethod) => {
    setMenuOpen(false);
    handleMethod();
  };

  return (
    <>
      <IconButton ref={ref} onClick={() => setMenuOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>

      <Menu
        open={isMenuOpen}
        anchorEl={ref.current}
        onClose={() => setMenuOpen(false)}
        PaperProps={{
          sx: { width: 150, maxWidth: "100%" },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {handleView && (
          <MenuItem sx={{ color: "text.secondary" }} onClick={() => onClick(handleView)}>
            <ListItemIcon>
              <Iconify icon="material-symbols-light:view-day" width={24} height={24} />
            </ListItemIcon>
            <ListItemText primary="View Details" primaryTypographyProps={{ variant: "body2" }} />
          </MenuItem>
        )}

        {handleEdit && (
          <MenuItem sx={{ color: "text.secondary" }} onClick={() => onClick(handleEdit)}>
            <ListItemIcon>
              <Iconify icon="eva:edit-fill" width={24} height={24} />
            </ListItemIcon>
            <ListItemText primary="Edit" primaryTypographyProps={{ variant: "body2" }} />
          </MenuItem>
        )}

        {handleDelete && (
          <MenuItem sx={{ color: "error.main" }} onClick={() => onClick(handleDelete)}>
            <ListItemIcon>
              <Iconify icon="eva:trash-2-outline" width={24} height={24} sx={{ color: "error.main" }} />
            </ListItemIcon>
            <ListItemText primary="Delete" primaryTypographyProps={{ variant: "body2" }} />
          </MenuItem>
        )}
      </Menu>
    </>
  );
}
