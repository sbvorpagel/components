import React from 'react';
import { CardNews, Content, List } from '../index';

interface News {
    id: string,
    title: string
    date: string
    imageURL: string
    category?: string
}

interface Prop {
    defaultImage: string
    onClick: Function
    data: Array<News>
}

const handleOnClick = (id: string, callback: Function) => {
    callback(id);
}

const ListNews: React.FC<Prop> = (prop) => {
    const { defaultImage, data, onClick } = prop;

    return (
        <List>
            {(data || []).map((news: News) => (
                <CardNews
                    date={news.date}
                    imageURL={news.imageURL || defaultImage}
                    category={news.category}
                    title={news.title}
                    onClick={() => handleOnClick(news.id, onClick)} />
            ))}
        </List>
    );
}

export default ListNews;