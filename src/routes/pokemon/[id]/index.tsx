import { component$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import { PokemonImage } from '~/components/pokemos/pokemon-image';


/**
 * esta comprobación de routeLoader se realiza del lado del servidor
 */
export const usePokemonId = routeLoader$<number>(( {params, redirect}) => {

  const id = Number(params.id);
  if (isNaN(id)) redirect(302, '/' );
  if (id <= 0)  redirect(302, '/');
  if (id > 1000)  redirect(302, '/'); 
  
  return id;
})

export default component$(() => {

  //const location = useLocation();
  const pokemonId = usePokemonId();
  
  return (
    <>
      <span class="text-5xl">Pokemon: {pokemonId} </span>

      <PokemonImage
        id={pokemonId.value}
      />
    </>
  )
});