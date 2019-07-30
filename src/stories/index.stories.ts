import { storiesOf } from '@storybook/angular';

import { PandaComponent } from '../app/panda.component';

storiesOf('Cats', module).add('Cat Pic', () => ({
  component: PandaComponent,
  props: {},
}));
