"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const index_1 = require("../index");
const News = (props) => {
    const { title, imageURL, content } = props;
    if (!title) {
        return (react_1.default.createElement(index_1.Content, null,
            react_1.default.createElement(index_1.Skeleton, { style: { width: '100%', heigth: '35%' } }),
            react_1.default.createElement("h2", null,
                react_1.default.createElement(index_1.Skeleton, { animated: true, style: { paddingLeft: '30%', paddingRigth: '30%', width: '100%', heigth: '42px' } })),
            react_1.default.createElement("p", null,
                react_1.default.createElement(index_1.Skeleton, { animated: true, style: { width: '80%', heigth: '18px' } })),
            react_1.default.createElement("p", null,
                react_1.default.createElement(index_1.Skeleton, { animated: true, style: { width: '100%', heigth: '18px' } })),
            react_1.default.createElement("p", null,
                react_1.default.createElement(index_1.Skeleton, { animated: true, style: { width: '50%', heigth: '18px' } })),
            react_1.default.createElement("p", null,
                react_1.default.createElement(index_1.Skeleton, { animated: true, style: { width: '80%', heigth: '18px' } })),
            react_1.default.createElement("p", null,
                react_1.default.createElement(index_1.Skeleton, { animated: true, style: { width: '100%', heigth: '18px' } })),
            react_1.default.createElement("p", null,
                react_1.default.createElement(index_1.Skeleton, { animated: true, style: { width: '50%', heigth: '18px' } })),
            react_1.default.createElement("p", null,
                react_1.default.createElement(index_1.Skeleton, { animated: true, style: { width: '80%', heigth: '18px' } })),
            react_1.default.createElement("p", null,
                react_1.default.createElement(index_1.Skeleton, { animated: true, style: { width: '100%', heigth: '18px' } })),
            react_1.default.createElement("p", null,
                react_1.default.createElement(index_1.Skeleton, { animated: true, style: { width: '50%', heigth: '18px' } }))));
    }
    return (react_1.default.createElement(index_1.Content, null,
        react_1.default.createElement("img", { style: { width: '100%' }, src: imageURL }),
        react_1.default.createElement(index_1.Text, { style: { textAligth: 'center' } },
            react_1.default.createElement("h2", null, title)),
        react_1.default.createElement(index_1.Text, null,
            react_1.default.createElement("p", null, content))));
};
exports.default = News;
//# sourceMappingURL=News.js.map