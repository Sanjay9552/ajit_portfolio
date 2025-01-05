import React, { useState } from "react";
import images from "../utils/images";
import "./styles.css";
import Masonry from "react-masonry-css";
import Modal from "../component/modal/Modal";
import Title from "../component/loadingName/Titile";

const list = [
  {
    name: "Bird 14",
    img: images.fourteen,
    desc: "Bird is good",
  },
  {
    name: "Bird",
    img: images.one,
    desc: "Bird is good",
  },
  {
    name: "Bird 13",
    img: images.thirteen,
    desc: "Bird is good",
  },
  {
    name: "Bird 02",
    img: images.two,
    desc: "Bird is good",
  },

  {
    name: "Bird 03",
    img: images.three,
    desc: "Bird is good",
  },
  {
    name: "Bird 07",
    img: images.seven,
    desc: "Bird is good",
  },
  {
    name: "Bird 04",
    img: images.four,
    desc: "Bird is good",
  },
  {
    name: "Bird 10",
    img: images.ten,
    desc: "Bird is good",
  },
  {
    name: "Bird 12",
    img: images.twelve,
    desc: "Bird is good",
  },
  {
    name: "Bird 05",
    img: images.five,
    desc: "Bird is good",
  },
  {
    name: "Bird 06",
    img: images.six,
    desc: "Bird is good",
  },

  {
    name: "Bird 08",
    img: images.eight,
    desc: "Bird is good",
  },
  {
    name: "Bird 09",
    img: images.nine,
    desc: "Bird is good",
  },
  //   {
  //     name: "Bird 11",
  //     img: images.eleven,
  //     desc: "Bird is good",
  //   },
];

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const HomeScreen = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isTitleAnimationEnd, setIsTitleAnimationEnd] = useState(false);
  const breakpointColumnsObj = {
    default: 3, // 3 columns for large screens
    1100: 2, // 2 columns for medium screens
    700: 1, // 1 column for small screens
  };

  console.log("selected Image ", selectedImage);

  return (
    <div style={{ backgroundColor: "#fff", padding: "0" }}>
      <div
        style={{
          height: windowDimensions.height,
          alignItems: isTitleAnimationEnd ? "start" : " center",
          justifyContent: isTitleAnimationEnd ? "center" : "center",
          display: "flex",
          flexDirection: "column",
          backgroundImage: isTitleAnimationEnd && `url(${images.home})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <div></div>
        <div style={{ fontSize: 30, fontWeight: "bold" }}>Ajit Bhanadre</div>
        <div style={{ fontSize: 30, fontWeight: "bold" }}>
          Wildlife Photography
        </div> */}
        <div style={{ padding: 40 }}>
          <Title
            onload={() => {
              setIsTitleAnimationEnd(true);
            }}
          />
        </div>
      </div>
      {isTitleAnimationEnd && (
        <>
          <div style={{ padding: 10 }}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="masonry-grid"
              columnClassName="masonry-column"
            >
              {list.map((item, index) => {
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
                      alt={item?.name}
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
              backgroundImage:
                "linear-gradient(to right, #f2e8cb ,#b8b8b8,    #f2e8cb)",
            }}
          >
            Copyright © 2025 Rushiksh Bhandare
          </div>
        </>
      )}
      <Modal isOpen={showModal} setIsOpen={setShowModal} item={selectedImage} />
    </div>
  );
};

export default HomeScreen;
