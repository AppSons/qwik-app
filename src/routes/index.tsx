import { $, component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemos/pokemon-image';


export default component$(() => {

  const pokemonId = useSignal(1); // primitivos,boolean, strings
  const showBackImage = useSignal(false);
  const isPokemonVisible = useSignal(false);
  



  const changePokemonId = $((value: number) => {
    if((pokemonId.value + value) <= 0) return;

    pokemonId.value += value;
  });
  



  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>
      
      <PokemonImage 
        id={ pokemonId.value} 
        backImage={showBackImage.value} 
        isVisible={isPokemonVisible.value}
      />

      <div class="mt-2">
        <button onClick$={ () => changePokemonId(-1) } class="btn btn-primary mr-2">Anterior</button>

        <button onClick$={ () => changePokemonId(+1) } class="btn btn-primary mr-2">Siguiente</button>

        <button onClick$={ () => showBackImage.value = !showBackImage.value } class="btn btn-primary mr-2">Girar</button>

        <button onClick$={ () => isPokemonVisible.value = !isPokemonVisible.value } class="btn btn-primary mr-2">Revelar</button>
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
