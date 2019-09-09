import React from 'react';
interface News {
    id: string;
    title: string;
    date: string;
    imageURL: string;
    category?: string;
}
interface Props {
    defaultImage: string;
    onClick: Function;
    data: Array<News>;
}
declare const ListNews: React.FC<Props>;
export default ListNews;
//# sourceMappingURL=ListNews.d.ts.map