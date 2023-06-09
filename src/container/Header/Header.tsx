import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'

import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

import './Header.scss'
import Container from '@mui/material/Container'
import Menu from 'components/Menu/Menu'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { updateSearchText } from 'redux/searchReducer'
import ClickAwayListener from '@mui/base/ClickAwayListener'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    '@media all': {
        minHeight: 60,
    },
}))

type Props = {}
const Header = (props: Props) => {
    const dispatch = useAppDispatch()
    const query = useAppSelector((state) => state.searching.searchText)

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen((prev) => !prev)
    }

    const handleClickAway = () => {
        setOpen(false)
    }

    return (
        <>
            <AppBar
                position="static"
                style={{
                    backgroundColor: 'white',
                    color: 'brown',
                    padding: '30px 0 ',
                    boxShadow: 'none',
                }}
            >
                <Container maxWidth="lg">
                    <StyledToolbar
                        style={{
                            margin: '0 0 20px 0',
                        }}
                    >
                        <a href="https://www.facebook.com/">
                            <Box
                                component="div"
                                sx={{
                                    marginTop: '10px',
                                    border: 'solid 1px #015BFA',
                                    color: '#015BFA',
                                    height: '30px',
                                    width: '30px',
                                    alignSelf: 'center',
                                    borderRadius: '50%',
                                    '&:hover': {
                                        backgroundColor: '#bd9b84',
                                        border: 'solid 1px #bd9b84',
                                        opacity: [0.9, 0.8, 0.7],
                                        color: 'white',
                                    },
                                }}
                            >
                                <FaFacebookF
                                    style={{
                                        height: '28px',
                                        width: '28px',
                                        padding: '7px',
                                    }}
                                />
                            </Box>
                        </a>
                        <a href="https://www.instagram.com/">
                            <Box
                                component="div"
                                sx={{
                                    margin: '10px 20px ',
                                    border: 'solid 1px #FF006B',
                                    color: '#FF006B',
                                    height: '30px',
                                    width: '30px',
                                    alignSelf: 'center',
                                    borderRadius: '50%',
                                    '&:hover': {
                                        backgroundColor: '#bd9b84',
                                        border: 'solid 1px #bd9b84',
                                        opacity: [0.9, 0.8, 0.7],
                                        color: 'white',
                                    },
                                }}
                            >
                                <FaInstagram
                                    style={{
                                        height: '28px',
                                        width: '28px',
                                        padding: '7px',
                                    }}
                                />
                            </Box>
                        </a>
                        <a href="https://www.twitter.com/">
                            <Box
                                component="div"
                                sx={{
                                    marginTop: '10px',
                                    border: 'solid 1px #55ACEE',
                                    color: '#55ACEE',
                                    height: '30px',
                                    width: '30px',

                                    alignSelf: 'center',
                                    borderRadius: '50%',
                                    '&:hover': {
                                        backgroundColor: '#bd9b84',
                                        border: 'solid 1px #bd9b84',
                                        opacity: [0.9, 0.8, 0.7],
                                        color: 'white',
                                    },
                                }}
                            >
                                <FaTwitter
                                    style={{
                                        height: '28px',
                                        width: '28px',
                                        padding: '7px',
                                    }}
                                />
                            </Box>
                        </a>

                        <Typography
                            variant="h3"
                            align="center"
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                                alignSelf: 'center',
                                fontFamily: 'Syne',
                                fontSize: '42px',
                                color: 'black',
                            }}
                        >
                            Alino
                        </Typography>
                        <div>
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <div className="search-box">
                                    {open ? (
                                        <input
                                            className="search-input"
                                            value={query}
                                            onChange={(e) =>
                                                dispatch(
                                                    updateSearchText(
                                                        e.target.value
                                                    )
                                                )
                                            }
                                            placeholder="Search in the titles..."
                                        />
                                    ) : null}
                                    <Link to={open ? '/' : '/search'}>
                                        <IconButton
                                            size="large"
                                            aria-label="search"
                                            color="inherit"
                                            sx={{ alignSelf: 'center' }}
                                            style={{
                                                height: '50px',
                                                width: '50px',
                                                color: 'white',
                                                backgroundColor: '#bd9b84',
                                                borderRadius: '50%',
                                                padding: '6px',
                                            }}
                                            onClick={handleClick}
                                        >
                                            {open ? (
                                                <ClearIcon />
                                            ) : (
                                                <SearchIcon />
                                            )}
                                        </IconButton>
                                    </Link>
                                </div>
                            </ClickAwayListener>
                        </div>
                    </StyledToolbar>
                    <Menu />
                </Container>
            </AppBar>
        </>
    )
}

export default Header
