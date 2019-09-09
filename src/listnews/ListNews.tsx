import React from 'react';
import { CardNews, List } from '../index';

interface News {
    id: string
    title: string
    date: string
    imageURL: string
    category?: string
}

interface Props {
    defaultImage: string
    onClick: Function
    data: Array<News>
}

const handleOnClick = (id: string, callback: Function) => {
    callback(id);
}

const ListNews: React.FC<Props> = (props) => {
    const { defaultImage, data, onClick } = props;

    return (
        <List>
            {(data || []).map((news: News) => (
                <CardNews
                    key={`card-news-${news.id}`}
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