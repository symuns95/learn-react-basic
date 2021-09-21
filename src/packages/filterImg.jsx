import React, { useState, useEffect } from 'react'
import { SRLWrapper } from "simple-react-lightbox";
const imgData = [
    { id: 1, imgName: "p1.jpg", tag: "new" },
    { id: 2, imgName: "p2.jpg", tag: "new" },
    { id: 3, imgName: "p3.jpg", tag: "pro" },
    { id: 4, imgName: "p4.jpg", tag: "pro" },
    { id: 5, imgName: "p5.jpg", tag: "free" },
    { id: 6, imgName: "p6.jpg", tag: "free" },
    { id: 7, imgName: "p7.jpg", tag: "free" },
    { id: 8, imgName: "p8.jpg", tag: "new" },
    { id: 9, imgName: "p9.jpg", tag: "new" },
]
const FilterImg = () => {
    const [tag, setTag] = useState("all")
    const [filteredImg, setFilteredImg] = useState([])

    useEffect(() => {
        tag === "all" ? setFilteredImg(imgData) : setFilteredImg(imgData.filter((img) => img.tag === tag))

    }, [tag])
    // Create an object with the options that you want to use. The options are divided in 4 main objects. You don't need to define them all.
    const options = {
        settings: {
            overlayColor: "rgb(25, 136, 124)",
            autoplaySpeed: 1500,
            transitionSpeed: 900,
        },
        buttons: {
            backgroundColor: "#1b5245",
            iconColor: "rgba(126, 172, 139, 0.8)",
        },
        caption: {
            captionColor: "#a6cfa5",
            captionFontFamily: "Raleway, sans-serif",
            captionFontWeight: "300",
            captionTextTransform: "uppercase",
        }
    };

    return (
        <><SRLWrapper options={options}>
            <div className="container-fulid">
                <div className="tags p-2 text-center bg-gray-700">
                    <TagButton name="all" handleSetTag={setTag} tabActive={tag === "all" ? true : false} />
                    <TagButton name="new" handleSetTag={setTag} tabActive={tag === "new" ? true : false} />
                    <TagButton name="free" handleSetTag={setTag} tabActive={tag === "free" ? true : false} />
                    <TagButton name="pro" handleSetTag={setTag} tabActive={tag === "pro" ? true : false} />
                </div>
                <div className="row px-4 py-3">
                    {
                        filteredImg.map((img) => (
                            <div className="col-xl-2 col-lg-4 col-md-4 px-4" key={img.id}>
                                <img src={`/img/${img.imgName}`} alt="" />
                            </div>
                        ))
                    }

                </div>
            </div>
        </SRLWrapper>
        </>
    )
}
const TagButton = ({ name, handleSetTag, tabActive }) => {
    return <button onClick={() => handleSetTag(name)} className={`px-3 py-2 text-gray-100 m-3 uppercase ${tabActive ? "text-gray-400 border-b" : null}`}>{name}</button>

}
export default FilterImg
