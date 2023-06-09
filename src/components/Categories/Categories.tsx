import React from 'react'
import LinkItem from 'components/LinkItem/LinkItem'
import articlesArray from 'utils/articlesArray'
import './Categories.scss'

type Props = {}

const Categories = (props: Props) => {
    type ArrCategoryType = {
        [key: string]: number
    }
    const arrCategory: ArrCategoryType = {}
    for (let key in articlesArray) {
        if (arrCategory.hasOwnProperty(articlesArray[key].category)) {
            arrCategory[articlesArray[key].category] =
                arrCategory[articlesArray[key].category] + 1
        } else {
            arrCategory[articlesArray[key].category] = 1
        }
    }

    return (
        <div className="categories">
            <div className="categories-heading">
                <div className="categories-title">Categories</div>
                <div className="categories-line"></div>
            </div>

            {Object.keys(arrCategory).map((item) => (
                <div className="categories-box" key={item}>
                    <div className="categories-name">
                        <LinkItem to={`/${item}`}>{item}</LinkItem>
                    </div>
                    <div className="categories-quantity">
                        <span>{arrCategory[item]} </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Categories
