import { Card, CardContent, Typography } from '@mui/material'

import './Reviews.scss'
import arrReviews from 'utils/arrReviews'

import React, { useState } from 'react'

type Props = {}
type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required!')
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <>
            <div className="reviews">
                <Typography
                    className="reviews-heading"
                    variant="h4"
                    component={'h2'}
                    sx={{
                        margin: '30px 0',
                    }}
                >
                    Reviews{' '}
                </Typography>
                {reviews.map(({ name, text }: Review, i) => (
                    <Card
                        className="review-card"
                        variant="outlined"
                        key={i}
                        sx={{
                            margin: '30px 0',
                        }}
                    >
                        <CardContent className="review-card-text">
                            <div>
                                <span>Name: </span> {name}
                            </div>
                            <div>{text}</div>
                        </CardContent>
                    </Card>
                ))}
                <form onSubmit={onSend} className="review-form">
                    <h3>Please leave a review</h3>

                    <input
                        className="review-name"
                        type="text"
                        name=""
                        id=""
                        placeholder="Your name"
                        value={newReview.name}
                        onChange={handleName}
                    />

                    <textarea
                        className="review-text"
                        name=""
                        id=""
                        placeholder="Your text"
                        value={newReview.text}
                        onChange={handleText}
                    ></textarea>
                    <button className="review-btn" type="submit">
                        Send
                    </button>
                </form>
            </div>
        </>
    )
}

export default Reviews
