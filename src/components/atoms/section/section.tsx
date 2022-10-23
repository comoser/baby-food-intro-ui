import { component$, Slot } from '@builder.io/qwik';

export default component$(() => (
  <section class="my-4">
    <Slot />
  </section>
));
