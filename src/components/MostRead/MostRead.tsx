import React from 'react'
import './MostRead.scss'

import MostReadItem from './MostReadItem'
import articlesArray from 'utils/articlesArray'

type MostReadProps = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
}

type Props = {
    id1: number
    id2: number
    id3: number
    id4: number
}

const MostRead = ({ id1, id2, id3, id4 }: Props) => {
    return (
        <div className="most-read">
            <div className="most-read-heading">Most Read</div>

            {articlesArray
                .filter(
                    (filtered) =>
                        filtered.id === id1 ||
                        filtered.id === id2 ||
                        filtered.id === id3 ||
                        filtered.id === id4
                )
                .map(
                    ({
                        id,
                        title,
                        category,
                        date,
                        comments,
                        image,
                    }: MostReadProps) => (
                        <MostReadItem
                            id={id}
                            title={title}
                            category={category}
                            date={date}
                            comments={comments}
                            image={image}
                            key={id}
                        />
                    )
                )}
        </div>
    )
}

export default MostRead
