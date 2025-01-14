import images from "../../../utils/images";
import "./index.scss";

const CoverCard = ({ image, title, subTitle, text, link }) => {
  return (
    <div
      className="coverCard"
      style={{
        backgroundImage: `url(${images.background})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <div
        className="coverCard__title"
        style={{
          // backgroundImage: `url(${images.background})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <span
          className="coverCard__title_transparent"
          style={{
            backgroundImage: `url(${images.background})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {/* <span
          className="coverCard__title_transparent"
          style={{
            backgroundImage: `url(${images.background})`,
          }}
          dangerouslySetInnerHTML={{ __html: subTitle }}
        /> */}
      </div>
    </div>
  );
};

export default CoverCard;
