import { withKnobs, number } from "@storybook/addon-knobs";

export default {
  title: 'AEM Progress Bar',
  decorators: [
    withKnobs
  ],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
};

export const ProgressBar = () => {
  return {
    content: {
      completed: number('completed', 75),
    },
    resourceType: 'core/wcm/components/progressbar/v1/progressbar',  // todo: derive from path
  };
};
