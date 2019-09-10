import React from 'react';
import { Content, Text, Skeleton } from '../index';

interface Props {
    title: string
    imageURL: string
    content?: string
}

const News: React.FC<Props> = (props) => {
    const { title, imageURL, content } = props;

    if (!title) {
        return (
            <Content>
                <Skeleton style={{ width: '100%', heigth: '35%' }} />
                <h2>
                    <Skeleton animated style={{ paddingLeft: '30%', paddingRigth: '30%', width: '100%', heigth: '42px' }} />
                </h2>
                <p>
                    <Skeleton animated style={{ width: '80%', heigth: '18px' }} />
                </p>
                <p>
                    <Skeleton animated style={{ width: '100%', heigth: '18px' }} />
                </p>
                <p>
                    <Skeleton animated style={{ width: '50%', heigth: '18px' }} />
                </p>
                <p>
                    <Skeleton animated style={{ width: '80%', heigth: '18px' }} />
                </p>
                <p>
                    <Skeleton animated style={{ width: '100%', heigth: '18px' }} />
                </p>
                <p>
                    <Skeleton animated style={{ width: '50%', heigth: '18px' }} />
                </p>
                <p>
                    <Skeleton animated style={{ width: '80%', heigth: '18px' }} />
                </p>
                <p>
                    <Skeleton animated style={{ width: '100%', heigth: '18px' }} />
                </p>
                <p>
                    <Skeleton animated style={{ width: '50%', heigth: '18px' }} />
                </p>
            </Content>
        );
    } 

    return (
        <Content>
            <img style={{ width: '100%' }} src={imageURL} />
            <Text style={{ textAligth: 'center' }}><h2>{title}</h2></Text>
            <Text><p>{content}</p></Text>
        </Content>
    );
}

export default News;