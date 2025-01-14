import React, { useEffect, useState, useRef } from "react";
import "./styles.css";
import Masonry from "react-masonry-css";
import Modal from "../component/modal/Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import list from "../utils/images";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import ButtonWithIcon from "./components/ButtonWithIcon";
import images from "../utils/images";

const HomeScreen = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesToShow, setImagesToShow] = useState([]);
  const [batchIndex, setBatchIndex] = useState(1); // Tracks current batch index
  const observerRef = useRef(null);

  const IMAGES_PER_BATCH = 10;

  const breakpointColumnsObj = {
    default: 4, // Columns for large screens
  };

  // Load the initial batch of images
  useEffect(() => {
    const initialImages = list.list.slice(0, IMAGES_PER_BATCH);
    setImagesToShow(initialImages);
  }, []);

  // Load more images when the observer is triggered
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          loadMoreImages();
        }
      },
      {
        root: null,
        threshold: 1.0,
      }
    );

    observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [imagesToShow]);

  const loadMoreImages = () => {
    const nextBatchStart = batchIndex * IMAGES_PER_BATCH;
    const nextBatchEnd = nextBatchStart + IMAGES_PER_BATCH;

    const newImages = list.list.slice(nextBatchStart, nextBatchEnd);

    if (newImages.length) {
      setImagesToShow((prevImages) => [...prevImages, ...newImages]);
      setBatchIndex((prevIndex) => prevIndex + 1);
    }
  };

  const disableContextMenu = (event) => {
    event.preventDefault();
  };

  const onClickSocialMedia = (id) => {
    console.log("clicking");
    if (id === "instagram") {
      window.open("https://www.instagram.com/wild_x_ajit/");
    }
    if (id === "linkedin") {
      window.open("https://www.linkedin.com/in/ajit-bhandare-1ba77b136/");
    }
  };

  return (
    <div>
      <div
        style={{
          height: windowDimensions.height / 8,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          fontSize: "1vw",
          fontStyle: "italic",
          paddingTop: 60,
          fontSize: "1vw",
        }}
      >
        "The wild tells its story; you just need to listen through the lens."
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          // padding: 10,
          display: "flex",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",

          // paddingRight: windowDimensions.width / 4,
          // paddingLeft: windowDimensions.width / 4,
        }}
      >
        <div
          style={{
            paddingTop: 60,
            maxWidth: "1080px",
          }}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-column"
          >
            {imagesToShow.map((item, index) => {
              const isSelected = item.imgLowRes === selectedImage?.imgLowRes;
              //  console.log("isSelected", isSelected)
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
                    margin: 5,
                    padding: isSelected ? 0 : 5,
                    borderRadius: 10,
                    boxShadow: isSelected
                      ? "rgba(0, 0, 0, 0.24) 0px 3px 8px"
                      : "",
                  }}
                >
                  {/* <PhotoProvider
                    speed={() => 800}
                    easing={(type) =>
                      type === 2
                        ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                        : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                    }
                  >
                    <PhotoView src={item.imgHighRes}>
                      <img src="/1-thumbnail.jpg" alt="" /> */}
                  <LazyLoadImage
                    src={item?.imgLowRes}
                    alt={item.name}
                    effect="blur"
                    style={{ width: "100%", height: "100%" }}
                    onContextMenu={disableContextMenu}
                  />
                  {/* </PhotoView>
                  </PhotoProvider> */}
                </div>
              );
            })}
          </Masonry>

          {/* Loader for Intersection Observer */}
          {list.list.length !== imagesToShow.length && (
            <div
              ref={observerRef}
              style={{
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p>Loading more images...</p>
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
          // marginTop: 20,
          padding: 10,
          // fontFamily: "monospace",
          fontSize: 14,
          backgroundColor: "#303030",
          color: "#fff",
          // flexDirection: "column",

          flex: 1,
        }}
      >
        <div
          style={{
            maxWidth: "1080px",
            display: "flex",
            flex: 1,
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", flex: 1 }}>
            <div>
              <h3 style={{ color: "#c7c7c7" }}>Ajit Bhandare</h3>
              <p style={{ color: "#c7c7c7" }}>Address - </p>
              <p style={{ color: "#c7c7c7" }}>email: ajitbhandare82@gmai.com</p>
              <ButtonWithIcon
                id={"instagram"}
                img={images.instagram}
                onClick={onClickSocialMedia}
              />
              <ButtonWithIcon
                id={"linkedin"}
                img={images.linkedIn}
                onClick={onClickSocialMedia}
              />
            </div>
            {/* <div style={{ display: "flex", flex: 1 }}>eho</div> */}
          </div>
          <div
            style={{
              color: "#c7c7c7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Copyright © 2025 Rushikesh Bhandare</p>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showModal}
        setIsOpen={setShowModal}
        item={selectedImage}
        windowDimensions={windowDimensions}
      />
    </div>
  );
};

export default HomeScreen;
