import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {

  const pokemonId = useSignal(1); // primitivos(boolean, strings)



  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>
      
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ pokemonId.value }.png`}
        alt="Pokemon Sprite"
        width= {250}
        height= {250}
      />

      <div class="mt-2">
        <button onClick$={ () => pokemonId.value-- } class="btn btn-primary mr-2">Anterior</button>

        <button onClick$={ () => pokemonId.value++ } class="btn btn-primary">Siguientes</button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Poke-Qwik',
  meta: [
    {
      name: 'description',
      content: 'Mi primer App con Qwik',
    },
  ],
};
