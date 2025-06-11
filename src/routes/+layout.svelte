<script>
	/**
	 * Components
	 */
	import Footer from '@pages/Footer.svelte';
</script>

<div class="layout">
	<slot></slot>
	<Footer />
</div>

<style lang="scss">
  .layout {
    padding: 25px 50px;

    min-height: 100vh;

    display: flex;
    flex-direction: column;

    align-items: center;

    gap: 50px;

    width: 100%;
    height: max-content;
  }
</style>