import React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle
} from '../index';

interface Props {
    onClick: Function
    imageURL: string
    title: string
    category?: string
    date: string
}

const handleOnClick = (event: MouseEvent, callback: Function) => {
    event.stopPropagation();
    callback();
}

const getSubtitle = (date: string, category?: string): string => {
    if (category) {
        return `${date} - ${category}`;
    }
    return date;
}

const CardNews: React.FC<Props> = (prop) => {
    const { onClick, imageURL, title, category, date } = prop;

    return (
        <Card onClick={(event: MouseEvent) => handleOnClick(event, onClick)}>
            <img src={imageURL} />
            <CardHeader>
                <CardSubtitle>{getSubtitle(date, category)}</CardSubtitle>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
        </Card>
    );
}

export default CardNews;