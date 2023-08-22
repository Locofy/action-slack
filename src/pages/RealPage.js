import { Button } from "@mui/material";

const RealPage = () => {
  return (
    <div className="relative bg-white w-full h-[352px] overflow-hidden">
      <Button
        className="absolute top-[32px] left-[19px]"
        sx={{ width: 164 }}
        variant="contained"
        color="primary"
      >
        Button
      </Button>
    </div>
  );
};

export default RealPage;
