import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';

export default component$(() => <h1>My profile</h1>);

export const head: DocumentHead = {
  title: 'My profile',
};
