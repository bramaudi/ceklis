<script>
	import liff from '@line/liff';
  import { todos, sync } from './store.js'
	import Header from './comps/Header.svelte';
	import Todos from './comps/Todos.svelte';
	import Empty from './comps/Empty.svelte';
	import { onMount } from 'svelte';

	let showComplete = false;
	let text = '';

	$: pending = $todos.filter(todo => todo.done === false)
	$: complete = $todos.filter(todo => todo.done === true)

	onMount(() => {
		liff
		.init({ liffId: '1655326154-JGZrvYXM' })
		.then(async () => {
			const name = await liff.getProfile()
			console.log('LIFF logged');
		})
		.catch((err) => {
			console.log('Error during init LIFF', err);
		})
	})

	const handleAdd = (e) => {
		if (e.key === 'Enter') {
			todos.update(n => [...n, {
				id: new Date().getTime(),
				done: false,
				text
			}])
			sync($todos)
			text = ''
		}
	}
</script>

<Header {pending} {complete}>📌 Ceklis</Header>

<input
	type="text"
	class="textbox"
	placeholder="Ok, ketik catatan-mu"
	bind:value={text}
	on:keyup={handleAdd}
	>

{#if $todos.length}

	{#if !!pending.length}
		<Todos isDone={false} />
	{:else}
		<Empty face="ᕙ(`▿´)ᕗ" text="Yey, udah beres!" />
	{/if}

	<button class="btn complete" on:click={() => showComplete = !showComplete}>
		{#if showComplete}
			<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>
		{:else}
			<svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
		{/if}
		Selesai ({complete.length})
	</button>

	{#if showComplete}
		<Todos isDone={true} />
	{/if}

{:else}
	<Empty face="ʕ•́ᴥ•̀ʔっ" text="Hm, masih kosong!" />
{/if}