"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const index_1 = require("../index");
const News = (props) => {
    const { title, imageURL, content } = props;
    return (react_1.default.createElement(index_1.Content, null,
        react_1.default.createElement("img", { src: imageURL }),
        react_1.default.createElement(index_1.Text, null,
            react_1.default.createElement("h2", null, title)),
        react_1.default.createElement(index_1.Text, null,
            react_1.default.createElement("p", null, title))));
};
exports.default = News;
//# sourceMappingURL=News.js.map