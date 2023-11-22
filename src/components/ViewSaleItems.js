import * as Yup from "yup";
import { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogActions, Stack, Button, Box, Typography, Divider } from "@mui/material";

export default function ViewSaleItems({ items }) {
  const [isOpen, setOpen] = useState(false);

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>View</Button>

      <Dialog open={isOpen} maxWidth="sm" fullWidth onClose={handleCancel}>
        <DialogTitle>Sale Items</DialogTitle>

        <Stack pt={1} px={3} spacing={2}>
          {items?.filter((e) => e.isfood).length > 0 && (
            <Stack spacing={1.5}>
              <div>
                <Typography>Food</Typography>
                <Divider />
              </div>
              {items
                ?.filter((e) => e.isfood)
                .map((e) => (
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>
                      {e.name} x {e.quantity}
                    </Typography>

                    <Typography>{parseInt(e.price) * parseInt(e.quantity)}/-</Typography>
                  </Box>
                ))}
            </Stack>
          )}

          {items?.filter((e) => !e.isfood).length > 0 && (
            <Stack spacing={1.5}>
              <div>
                <Typography>Liquor</Typography>
                <Divider />
              </div>
              {items
                ?.filter((e) => !e.isfood)
                .map((e) => (
                  <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography>
                      {e.name} - {e.ml}ML x {e.quantity}
                    </Typography>

                    <Typography>{e.price}/-</Typography>
                  </Box>
                ))}
            </Stack>
          )}
        </Stack>

        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleCancel}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
