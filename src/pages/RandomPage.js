import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const RandomPage = () => {
  const navigate = useNavigate();

  const onFrameInstanceClick = useCallback(() => {
    navigate("/real-page");
  }, [navigate]);

  return (
    <div className="relative bg-white w-full h-[352px] overflow-hidden">
      <div
        className="absolute top-[32px] left-[19px] bg-crimson w-[164px] h-[93px] overflow-hidden cursor-pointer"
        onClick={onFrameInstanceClick}
      />
    </div>
  );
};

export default RandomPage;
