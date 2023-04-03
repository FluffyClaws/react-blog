import { useState } from 'react'
import ArticlesList from 'components/Articles/ArticlesList'
import { Grid } from '@mui/material'
import './Home.scss'
import EastIcon from '@mui/icons-material/East'
import WestIcon from '@mui/icons-material/West'
import { Container } from '@mui/material'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'
import MostRead from 'components/MostRead/MostRead'
import Social from 'components/Social/Social'
import RecentMost from 'components/RecentMost/RecentMost'
import Slider from 'components/Slider/Slider'
import Subscribe from 'components/Subscribe/Subscribe'
import articlesArray from 'utils/articlesArray'

const Home = () => {
    const [startId, setStartId] = useState(1)

    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/images/1.webp" alt="slide-1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/2.webp" alt="slide-2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/3.webp" alt="slide-3" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/4.webp" alt="slide-4" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/5.webp" alt="slide-5" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/6.webp" alt="slide-6" />
                </SwiperSlide>
            </Swiper>
            <Container maxWidth="xl" sx={{ padding: '50px 0' }}>
                <div className="popular-up">
                    <div className="popular-up-heading">Popular Stories</div>
                    <div className="popular-arrows">
                        <WestIcon
                            className="left-up"
                            onClick={() =>
                                setStartId(startId > 1 ? startId - 1 : 1)
                            }
                        />
                        <EastIcon
                            className="right-up"
                            onClick={() =>
                                setStartId(
                                    startId < articlesArray.length - 3
                                        ? startId + 1
                                        : articlesArray.length - 3
                                )
                            }
                        />
                    </div>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <ArticlesList
                            startId={startId}
                            articlesPerPage={4}
                            query=""
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <MostRead id1={3} id2={5} id3={6} id4={7} />
                        <Social />
                    </Grid>
                </Grid>
                <RecentMost />

                <Slider />
            </Container>
            <Subscribe />
        </>
    )
}
export default Home
