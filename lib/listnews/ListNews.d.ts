import React from 'react';
interface News {
    id: string;
    title: string;
    date: string;
    imageURL: string;
    category?: string;
}
interface Prop {
    defaultImage: string;
    onClick: Function;
    data: Array<News>;
}
declare const ListNews: React.FC<Prop>;
export default ListNews;
//# sourceMappingURL=ListNews.d.ts.map