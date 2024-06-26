import React, { useState } from 'react'
import EastIcon from '@mui/icons-material/East'
import WestIcon from '@mui/icons-material/West'
import './Slider.scss'

type Props = {}

const img = [
    <img key="1" height="300px" src="react-blog/images/1s.webp" alt="" />,
    <img key="2" height="300px" src="react-blog/images/2s.webp" alt="" />,
    <img key="3" height="300px" src="react-blog/images/3s.webp" alt="" />,
    <img key="4" height="300px" src="react-blog/images/4s.webp" alt="" />,
    <img key="5" height="300px" src="react-blog/images/5s.webp" alt="" />,
    <img key="6" height="300px" src="react-blog/images/6s.webp" alt="" />,
    <img key="7" height="300px" src="react-blog/images/7s.webp" alt="" />,
]

const Slider = (props: Props) => {
    const [id1, setId1] = useState(0)
    const [id2, setId2] = useState(1)
    const [id3, setId3] = useState(2)
    const [id4, setId4] = useState(3)
    const [id5, setId5] = useState(4)
    const [id6, setId6] = useState(5)

    const onRightClick = () => {
        setId1((prevState: number) => (prevState === 0 ? 6 : prevState - 1))
        setId2((prevState: number) => (prevState === 0 ? 6 : prevState - 1))
        setId3((prevState: number) => (prevState === 0 ? 6 : prevState - 1))
        setId4((prevState: number) => (prevState === 0 ? 6 : prevState - 1))
        setId5((prevState: number) => (prevState === 0 ? 6 : prevState - 1))
        setId6((prevState: number) => (prevState === 0 ? 6 : prevState - 1))
    }
    const onLeftClick = () => {
        setId1((prevState: number) => (prevState === 6 ? 0 : prevState + 1))
        setId2((prevState: number) => (prevState === 6 ? 0 : prevState + 1))
        setId3((prevState: number) => (prevState === 6 ? 0 : prevState + 1))
        setId4((prevState: number) => (prevState === 6 ? 0 : prevState + 1))
        setId5((prevState: number) => (prevState === 6 ? 0 : prevState + 1))
        setId6((prevState: number) => (prevState === 6 ? 0 : prevState + 1))
    }

    return (
        <>
            <div className="popular">
                <div className="popular-heading">Our Gallery</div>
                <div>
                    <WestIcon className="left" onClick={() => onLeftClick()} />
                    <EastIcon
                        className="right"
                        onClick={() => onRightClick()}
                    />
                </div>
            </div>

            <div className="slider">
                <div className="slider-img id1" key={id1}>
                    {img[id1]}
                </div>
                <div className="slider-img id2" key={id2}>
                    {img[id2]}
                </div>
                <div className="slider-img id3" key={id3}>
                    {img[id3]}
                </div>
                <div className="slider-img id4" key={id4}>
                    {img[id4]}
                </div>
                <div className="slider-img id5" key={id5}>
                    {img[id5]}
                </div>
                <div className="slider-img id6" key={id6}>
                    {img[id6]}
                </div>
            </div>
        </>
    )
}

export default Slider
