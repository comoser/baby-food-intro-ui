import { component$, Slot } from '@builder.io/qwik';

export default component$(() => (
  <h1 className="mb-6 text-5xl font-extralight text-gray-600">
    <Slot />
  </h1>
));
