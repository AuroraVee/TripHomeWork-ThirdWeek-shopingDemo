import React from 'react';
import { Card, Image } from 'antd';

export default function Aside () {
    return (
        <>
            <Card style={{ width: 300 }}>
                <Image src='/seities_apparel_logo_small.png' />
            </Card>
            <Card style={{ width: 300 }} bodyStyle={{ color: "gray" }} >
                <h3>Clothings</h3>
                <p>Shirts</p>
                <p>Sweatshirts</p>
                <p>Tank Tops</p>
            </Card>
            <Card style={{ width: 300 }} bodyStyle={{ color: "gray" }}>
                <h3>Misc</h3>
                <p>Hats</p>
                <p>Jewerly</p>
                <p>Seities X Collection</p>
            </Card>
        </>

    );
}
