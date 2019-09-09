"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Text_1 = __importDefault(require("./text/Text"));
exports.Text = Text_1.default;
const react_1 = require("@ionic/react");
exports.App = react_1.IonApp;
exports.Card = react_1.IonCard;
exports.CardHeader = react_1.IonCardHeader;
exports.CardSubtitle = react_1.IonCardSubtitle;
exports.CardTitle = react_1.IonCardTitle;
exports.Content = react_1.IonContent;
exports.Input = react_1.IonInput;
exports.Item = react_1.IonItem;
exports.Label = react_1.IonLabel;
exports.List = react_1.IonList;
const CardNews_1 = __importDefault(require("./cardnews/CardNews"));
exports.CardNews = CardNews_1.default;
const ListNews_1 = __importDefault(require("./listnews/ListNews"));
exports.ListNews = ListNews_1.default;
//# sourceMappingURL=index.js.map