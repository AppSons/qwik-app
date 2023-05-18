import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <>
      <h1>Primer App con Qwik!!!</h1>
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
