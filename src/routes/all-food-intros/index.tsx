import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';

export default component$(() => <h1>All food introductions</h1>);

export const head: DocumentHead = {
  title: 'All food introductions',
};
