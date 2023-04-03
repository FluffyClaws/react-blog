import React from 'react'

import { Link } from 'react-router-dom'
import { Grid } from '@mui/material'
import { Card, CardContent } from '@mui/material'

type Props = {
    id: number
    title: string
    category: string
    date: string
    comments: number
    image: string
    description?: string
}

const RelatedPostsItem = ({
    id,
    title,

    image,
}: Props) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs>
                <Card
                    className="article"
                    variant="outlined"
                    sx={{
                        border: 'none',
                        borderRadius: '0px',
                    }}
                >
                    <CardContent
                        sx={{
                            padding: '0',
                        }}
                    >
                        <div className="category-item">
                            <div className="box">
                                <img src={image} alt="" />
                            </div>

                            <div className="category-title">
                                <Link to={`/articles/${id}`}>{title}</Link>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default RelatedPostsItem
