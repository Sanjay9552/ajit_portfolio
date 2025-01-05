import React from 'react'
import images from '../utils/images'

const list = [
    {
        name: 'Bird',
        img: images.one,
        desc: 'bird is good'
    },
    {
        name: 'Bird 02',
        img: images.two,
        desc: 'bird is good'
    },
    {
        name: 'Bird 03',
        img: images.three,
        desc: 'bird is good'
    },
    {
        name: 'Bird 04',
        img: images.four,
        desc: 'bird is good'
    },
    {
        name: 'Bird 05',
        img: images.five,
        desc: 'bird is good'
    },
    {
        name: 'Bird 06',
        img: images.six,
        desc: 'bird is good'
    },
    {
        name: 'Bird 07',
        img: images.seven,
        desc: 'bird is good'
    },
    {
        name: 'Bird 08',
        img: images.eight,
        desc: 'bird is good'
    }
]

const HomeScreen = () => {
    return (
        <div style={{backgroundColor: '#fff'}}>
            <div style={{padding: 40 , display: 'flex', alignItems:'center', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap'}}>

          {
              list.map((item)=> {
                  return (
                      <div>
                        <img style={{width: 600}} src={item.img} />
                        <div>Bird Name - {item.name}</div>
                        <div> Desc - {item.desc} </div>
                    </div>
                )
            })
        }
        </div>
        </div>
    )
}

export default HomeScreen