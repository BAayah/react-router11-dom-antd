import { Card, Avatar, Spin } from 'antd';
import React, { useEffect, useState } from 'react';


export const Home = () => {
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/photos?_page=1&_limit=10')
            .then(response => response.json())
            .then(json => {
                setPhotos(json)
                setLoading(false)
            });

    }, []);

    return (
        <div >
            <h1>HOME</h1>
            <div style={styles}>
                {
                    loading && <div style={{ display: 'flex', margin:'50px auto' }}>
                        <Spin />
                    </div>
                }
                {
                    photos.map((el, id) => {
                        return <Card key={id} style={{ width: 300, marginBottom: 40, border: '3px solid' }}>

                            <Avatar size={50} src={el.thumbnailUrl} />
                            <h3>{el.title}</h3>
                        </Card>
                    })
                }
            </div>

        </div>
    )
}

const styles = {
    display: "flex",
    width: "1000px",
    height: "80vh",
    justifyContent: "space-between",
    flexWrap: "wrap",
    overFlowY: "scroll",
    margin: "20px"
}


