import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <>Listado desde Servidor</>
});

export const head: DocumentHead = {
  title: 'List-Server',
  
};