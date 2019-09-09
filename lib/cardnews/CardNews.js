"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const index_1 = require("../index");
const handleOnClick = (event, callback) => {
    event.stopPropagation();
    callback();
};
const getSubtitle = (date, category) => {
    if (category) {
        return `${date} - ${category}`;
    }
    return date;
};
const CardNews = (prop) => {
    const { onClick, imageURL, title, category, date } = prop;
    return (react_1.default.createElement(index_1.Card, { onClick: (event) => handleOnClick(event, onClick) },
        react_1.default.createElement("img", { src: imageURL }),
        react_1.default.createElement(index_1.CardHeader, null,
            react_1.default.createElement(index_1.CardSubtitle, null, getSubtitle(date, category)),
            react_1.default.createElement(index_1.CardTitle, null, title))));
};
exports.default = CardNews;
//# sourceMappingURL=CardNews.js.map