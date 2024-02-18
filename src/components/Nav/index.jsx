import React from 'react'
import { data } from '../../data'
import { Link } from 'react-router-dom'


export const Nav = () => {
    return (
        <div style={styles}>
            {data.map((link, id) => {
                return <Link key={id} to={link.route}>
                    {link.name}
                </Link>
            })
            }
        </div>
    )
}

const styles = {
    display: "flex",
    flexDirection: "column",
    gap:"5px",
    fontSize:"18px"
}

