<script>
    import {pokemon} from "../stores/pokestore";
    import PokemanCard from "../components/pokemanCard.svelte";
    import '../app.css'

    let searchTerm = "";
    let filteredPokemon = [];

    $: {
        if (searchTerm){
            filteredPokemon = $pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()))
        }
        else {
            filteredPokemon = [...$pokemon]
        }
    }

</script>

<svelte:head>
    <title>This is index page</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit Pokemon</h1>

<input class="w-full p-4 rounded-md text-lg border-2 border-gray-200" type="text" placeholder="Search Pokemon" bind:value={searchTerm}>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
    {#each filteredPokemon as data}
    <PokemanCard pokeman={data} />
    {/each}
</div>

