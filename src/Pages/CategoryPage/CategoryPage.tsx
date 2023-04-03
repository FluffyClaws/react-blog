import React, { useEffect } from 'react'

import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import 'Pages/Pages.scss'
import ArticlesInOneCategory from 'components/ArticlesInOneCategory/ArticlesInOneCategory'
import Categories from 'components/Categories/Categories'
import SocialProfiles from 'components/SocialProfiles/SocialProfiles'
import ButtonToTop from 'components/ButtonToTop/ButtonToTop'
import ArticlesList from 'components/Articles/ArticlesList'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { updateSearchText } from 'redux/searchReducer'

type Props = {
    category: string
}

const CategoryPage = ({ category }: Props) => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [])

    const query = useAppSelector((state) => state.searching.searchText)
    const dispatch = useAppDispatch()

    return (
        <Container maxWidth="lg">
            {query === '' && <div className="title">Category : {category}</div>}
            {query !== '' && (
                <div className="title">Search Results for : {query}</div>
            )}

            <Grid container spacing={6}>
                <Grid item xs={8}>
                    {query === '' && (
                        <ArticlesInOneCategory category={category} />
                    )}
                    {query !== '' && (
                        <ArticlesList
                            startId={1}
                            articlesPerPage={4}
                            query={query}
                        />
                    )}
                </Grid>
                <Grid item xs={4}>
                    <div>
                        <div className="search-heading">
                            <div className="search-title">Search</div>
                            <div className="search-line"></div>
                        </div>

                        <div className="search-input-box">
                            <input
                                className="search-input"
                                value={query}
                                onChange={(e) =>
                                    dispatch(updateSearchText(e.target.value))
                                }
                                placeholder="Search in the titles..."
                            />
                            {query === '' && (
                                <button className="search-btn">Search</button>
                            )}
                            {query !== '' && (
                                <button
                                    className="search-btn"
                                    onClick={(e) =>
                                        dispatch(updateSearchText(''))
                                    }
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>

                    <Categories />
                    <SocialProfiles />
                </Grid>
            </Grid>
            <ButtonToTop />
        </Container>
    )
}

export default CategoryPage
