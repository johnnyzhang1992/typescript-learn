import * as React from "react";
import * as ReactDom from "react-dom";

import { Hello } from "./componets/hello";

ReactDom.render(
	<Hello compiler="Typescript" framework="React" />,
	document.getElementById("root")
);
