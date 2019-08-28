<script>
  export let title;
</script>

<div>
  <h1>Hello {title}</h1>
  <input type="text" bind:value={title}>
</div>
