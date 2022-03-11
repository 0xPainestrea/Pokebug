<script context="module">
		export async function load({ page }) {
			const id = page.params.id;
			const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
			const urlResponse = await fetch(url);
			const pokemon = await urlResponse.json();
			return { props: { pokemon } };
		}
</script>

<script>
  export let pokeman
</script>

<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>