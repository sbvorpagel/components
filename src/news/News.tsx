import React from 'react';
import { Content, Text } from '../index';

interface Props {
    title: string
    imageURL: string
    content?: string
}

const News: React.FC<Props> = (props) => {
    const { title, imageURL, content } = props;

    return (
        <Content>
            <img src={imageURL} />
            <Text><h2>{title}</h2></Text>
            <Text><p>{title}</p></Text>
        </Content>
    );
}

export default News;