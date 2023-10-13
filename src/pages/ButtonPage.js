import {
  AiFillBell,
  AiOutlineCloudDownload,
  AiFillDatabase,
} from "react-icons/ai";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    // console.log("Clicked!");
  };

  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleClick}
        >
          <AiFillBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline onMouseEnter={handleClick}>
          <AiOutlineCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning onMouseLeave={handleClick}>
          <AiFillDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
