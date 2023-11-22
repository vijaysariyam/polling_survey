import {
  Box,
  Stack,
  Link,
  Card,
  Button,
  Divider,
  Typography,
  CardHeader,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { bgColors1, fToNow } from "../constants";
import Iconify from "./Iconify";

export default function CardTileWidget({
  title,
  subheader,
  route,
  list,
  ...other
}) {
  const navigate = useNavigate();

  return (
    <Card
      {...other}
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
    >
      <CardHeader title={title} subheader={subheader} />

      <Stack spacing={3} sx={{ p: 3, pr: 0, flexGrow: 1 }}>
        {list?.map((news, index) => (
          <CardItem key={news.id} index={index} news={news} />
        ))}
      </Stack>

      <Divider />

      <Box sx={{ p: 2, textAlign: "right" }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon={"eva:arrow-ios-forward-fill"} />}
          onClick={() => navigate(route)}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}

function CardItem({ index, news }) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Avatar sx={{ bgcolor: bgColors1[index % bgColors1.length] }}>
        <Iconify icon={image} sx={{ width: 24, height: 24 }} />
      </Avatar>

      <Box sx={{ flexGrow: 1 }}>
        <Typography
          variant="body2"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: 12 }}
          noWrap
        >
          {description}
        </Typography>
      </Box>

      <Typography
        variant="caption"
        textAlign="end"
        sx={{ pr: 3, color: "text.secondary", fontSize: 10 }}
      >
        {fToNow(postedAt)}
      </Typography>
    </Stack>
  );
}
