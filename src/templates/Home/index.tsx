import { Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export const Home = () => {
  const { root } = useStyles();
  return (
    <div>
      <Typography variant="h1" className={root}>
        Oi mundo
      </Typography>
    </div>
  );
};
