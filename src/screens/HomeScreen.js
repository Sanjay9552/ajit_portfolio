import React, { useEffect, useState } from "react";
// import images from "../utils/images";
import "./styles.css";
import Masonry from "react-masonry-css";
import Modal from "../component/modal/Modal";
import Title from "../component/loadingName/Titile";
import list from "../utils/images";
import CoverCard from "../component/cardCover/CoverCard";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const HomeScreen = () => {
  const [windowDimensions] = useState(getWindowDimensions());
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isTitleAnimationEnd, setIsTitleAnimationEnd] = useState(false);
  const breakpointColumnsObj = {
    default: 5, // 3 columns for large screens
    1100: 2, // 2 columns for medium screens
    700: 1, // 1 column for small screens
  };

  console.log("selected Image ", selectedImage);

  const getDirectLink = (shareLink) => {
    const fileId = shareLink.match(/d\/(.*?)\//)?.[1];
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

  const shareLink =
    "https://drive.google.com/file/d/1glVSGofTDiW_Ne8CyMdfta6kigUFA5tc/view?usp=sharing";
  const directLink = getDirectLink(shareLink);

  const disableContextMenu = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
    document.addEventListener("keydown", (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key === "i" ||
          event.key === "c" ||
          event.key === "u" ||
          event.key === "j")
      ) {
        event.preventDefault();
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "F12") {
        event.preventDefault();
      }
    });
  });

  return (
    <div
      style={{
        paddingTop: 60,
        backgroundColor: "#fff",
        // padding: "0",
      }}
    >
      {/* <div
        style={{
          height: windowDimensions.height,
          alignItems: isTitleAnimationEnd ? "start" : " center",
          justifyContent: isTitleAnimationEnd ? "center" : "center",
          display: "flex",
          flexDirection: "column",
          backgroundImage: isTitleAnimationEnd && `url(${list.background})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div style={{ padding: 40 }}>
          <Title
            onload={() => {
              setIsTitleAnimationEnd(true);
            }}
          />
        </div>
      </div> */}
      <div
        style={{
          height: windowDimensions.height / 8,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          fontSize: "1vw",
          fontStyle: "italic",
          // alignItems: isTitleAnimationEnd ? "start" : " center",
          // justifyContent: isTitleAnimationEnd ? "center" : "center",
          // display: "flex",
          // flexDirection: "column",
          // backgroundImage: isTitleAnimationEnd && `url(${list.background})`,
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "center",
          // backgroundSize: "cover",
        }}
      >
        "The wild tells its story; you just need to listen through the lens."
        {/* <article>
      <section> */}
        {/* <CoverCard
          title="Ajit Bhandare"
          image="../../Assets/img/background.jpg"
          subTitle="Wildlife Photography"
          link="#"
        /> */}
        {/* </section>
              </article> */}
      </div>

      {isTitleAnimationEnd ||
        (true && (
          <>
            <div
              style={{
                paddingTop: 60,
                // paddingTop: windowDimensions.height / 6,
              }}
            >
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-column"
              >
                {list?.list.map((item, index) => {
                  const isSelected = item.img === selectedImage?.img;
                  return (
                    <div
                      onMouseEnter={() => {
                        setSelectedImage(item);
                      }}
                      onClick={() => {
                        setShowModal(true);
                        setSelectedImage(item);
                      }}
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: 5,
                        borderRadius: 10,
                        boxShadow: isSelected
                          ? "rgba(0, 0, 0, 0.50) 0px 3px 8px"
                          : "",
                      }}
                    >
                      <img
                        src={item?.img}
                        srcSet={`${item?.img} 300w,${item?.img}, ${item?.img} 900w`}
                        alt={item?.name}
                        loading="lazy"
                        onContextMenu={disableContextMenu}
                        style={{
                          width: "100% ",
                          height: "100%",
                          borderRadius: "8px",
                        }}
                      />
                    </div>
                  );
                })}
              </Masonry>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                backgroundColor: "gray",
                padding: 10,
                fontFamily: "monospace",
                fontSize: 14,
                backgroundColor: "#fff",
                // backgroundImage:
                //   "linear-gradient(to right, #f2e8cb ,#b8b8b8,    #f2e8cb)",
              }}
            >
              Copyright © 2025 Rushiksh Bhandare
            </div>
          </>
        ))}
      <Modal
        isOpen={showModal}
        setIsOpen={setShowModal}
        item={selectedImage}
        onContextMenu={disableContextMenu}
      />
    </div>
  );
};

export default HomeScreen;
