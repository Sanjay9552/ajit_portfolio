import React, { useState } from 'react';
import images from '../utils/images';
import "./styles.css";
import Masonry from 'react-masonry-css';
// 1W35vdhHfnA2_t9bi8BZjK2tXTVr8OKYE
const list = [
    {
        name: 'Bird',
        img: images.one,
        desc: 'Bird is good',
    },
    {
        name: 'Bird 13',
        img: images.thirteen,
        desc: 'Bird is good',
    },
    {
        name: 'Bird 02',
        img: images.two,
        desc: 'Bird is good',
    },
    {
        name: 'Bird 12',
        img: images.twelve,
        desc: 'Bird is good',
    },
    {
        name: 'Bird 03',
        img: images.three,
        desc: 'Bird is good',
    },
    {
        name: 'Bird 04',
        img: images.four,
        desc: 'Bird is good',
    },
    {
        name: 'Bird 05',
        img: images.five,
        desc: 'Bird is good',
    },
    {
        name: 'Bird 06',
        img: images.six,
        desc: 'Bird is good',
    },
    {
        name: 'Bird 14',
        img: images.fourteen,
        desc: 'Bird is good',
    },
    {
        name: 'Bird 07',
        img: images.seven,
        desc: 'Bird is good',
    },
    {
        name: 'Bird 08',
        img: images.eight,
        desc: 'Bird is good',
    },
    {
        name: 'Bird 09',
        img: images.nine,
        desc: 'Bird is good',
    },
    {
        name: 'Bird 11',
        img: images.eleven,
        desc: 'Bird is good',
    },

    {
        name: 'Bird 10',
        img: images.ten,
        desc: 'Bird is good',
    },
   
];

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

const HomeScreen = () => {

     const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const breakpointColumnsObj = {
        default: 4, // 3 columns for large screens
        1100: 2,    // 2 columns for medium screens
        700: 1,     // 1 column for small screens
    };

    return (
        <div style={{ backgroundColor: '#fff', padding: '40px' }}>
            <div style={{height: windowDimensions.height, alignItems: 'center', justifyContent: 'center',}}>
                <div></div>
                <div style={{fontSize: 100, fontWeight: 'bold'}}>
                    Ajit Bhanadre
                </div>
                <div style={{fontSize: 100, fontWeight: 'bold'}}>
                Wildlife Photography
                </div>
            </div>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-column"
            >
                {list.map((item, index) => (
                    <div key={index} className="masonry-item">
                        <img src={item.img} alt={item.name} style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                    </div>
                ))}
            </Masonry>
        </div>
    );
};


export default HomeScreen;
