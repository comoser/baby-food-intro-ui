import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <h1>New Food Introduction</h1>;
});

export const head: DocumentHead = {
  title: 'New food introduction',
};
