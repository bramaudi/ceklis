<script>
  export let pending = [];
  export let complete = [];
</script>

<header>
	<div class="title">
    <slot></slot>
  </div>
	<div class="menu">
		<div>Belum: {pending.length}</div>
		<div style="padding: 0 0.5rem">&#183;</div>
		<div>Selesai: {complete.length}</div>
	</div>
</header>