"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const index_1 = require("../index");
const handleOnClick = (id, callback) => {
    callback(id);
};
const ListNews = (prop) => {
    const { defaultImage, data, onClick } = prop;
    return (react_1.default.createElement(index_1.List, null, (data || []).map((news) => (react_1.default.createElement(index_1.CardNews, { date: news.date, imageURL: news.imageURL || defaultImage, category: news.category, title: news.title, onClick: () => handleOnClick(news.id, onClick) })))));
};
exports.default = ListNews;
//# sourceMappingURL=ListNews.js.map