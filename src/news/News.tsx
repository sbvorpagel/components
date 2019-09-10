import React from 'react';
import { Content, Text, Skeleton } from '../index';

interface Props {
    title: string
    imageURL: string
    content?: string
}

const News: React.FC<Props> = (props) => {
    const { title, imageURL, content } = props;

    // if (!title) {
        return (
            <Content>
                <Skeleton style={{ width: '100%', heigth: '40%' }} />
                <h2>
                    <Skeleton animated style={{ width: '60%' }} />
                </h2>
                <p>
                    <Skeleton animated style={{ width: '80%' }} />
                </p>
                <p>
                    <Skeleton animated style={{ width: '100%' }} />
                </p>
                <p>
                    <Skeleton animated style={{ width: '50%' }} />
                </p>
            </Content>
        )
    // } 

    return (
        <Content>
            <img src={imageURL} />
            <Text><h2>{title}</h2></Text>
            <Text><p>{title}</p></Text>
        </Content>
    );
}

export default News;