import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeCard = ({ card }) => {

  const { tag, headline, img, bg_color, color, text_bg, id } = card;
  return (
    <Link to={`/info/${id}`}>
      <div
        style={{ backgroundColor: `${bg_color}` }}
        className="w-80 mx-auto rounded-xl"
      >
        <img className="rounded-xl w-full h-[200px] mx-auto" src={img} alt="" />

        <h1
          style={{
            color: `${color}`,
            padding: "4px 8px",
            backgroundColor: `${text_bg}`,
            display: "inline-block",
            margin: "8px",
            borderRadius: "8px",
          }}
        >
          {tag}
        </h1>

        <h1
          style={{ color: `${color}`, padding: "4px 8px" }}
          className="text-xl font-semibold"
        >
          {headline}
        </h1>
      </div>{" "}
    </Link>
  );
};

HomeCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default HomeCard;
