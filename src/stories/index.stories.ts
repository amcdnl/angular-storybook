import { storiesOf } from '@storybook/angular';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';

import { CatComponent } from '../app/cat.component';
import markdownNotes from './README.md';

const stories = storiesOf('Cats', module);
stories.addDecorator(withKnobs);

stories.add(
  'Random Cats',
  () => ({
    component: CatComponent,
    props: {
      label: text('text', 'MOAR')
    }
  }),
  {
    notes: { markdown: markdownNotes }
  }
);
