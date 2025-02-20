

import React from "react";
import { SvgXml } from "react-native-svg";

export const searchIcon = `
 <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8595 29.1526L25.6976 24.9908C27.1227 23.3989 27.9975 21.3042 28 19C28 14.0294 23.9706 10 19 10C14.0294 10 10 14.0294 10 19C10 23.9706 14.0294 28 19 28C21.3041 27.9975 23.3989 27.1228 24.9907 25.6978L29.1525 29.8596C29.3463 30.0468 29.6534 30.0468 29.8472 29.8596C30.0458 29.6678 30.0513 29.3513 29.8595 29.1526ZM19 27C14.5817 27 11 23.4183 11 19C11 14.5817 14.5817 11 19 11C23.4162 11.0051 26.9949 14.5838 27 19C27 23.4183 23.4183 27 19 27Z" fill="#021626"/>
</svg>
`;

const SearchIcon = () => <SvgXml xml={searchIcon} width="40" height="40" />;

export default SearchIcon;
