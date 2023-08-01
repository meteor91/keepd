import type {Preview} from "@storybook/react";
import {DefaultDecorator} from "./DefaultDecorator";

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: "^on[A-Z].*"},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        DefaultDecorator
    ],
};

export default preview;
