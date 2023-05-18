import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <>
      <span class="text-5xl">Primer App con Qwik!!!</span>
    </>
  );
});

export const head: DocumentHead = {
  title: 'App to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
