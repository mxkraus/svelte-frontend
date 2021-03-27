<script>
  import { NavLeft, Link, NavTitle, NavRight, Navbar } from "framework7-svelte";

  export let title;
  export let backArrow = false;
</script>

{#if backArrow}
  <Navbar backLink="Back">
    <NavLeft />
    <NavTitle>{title}</NavTitle>
    <NavRight />
  </Navbar>
{:else}
  <Navbar>
    <NavLeft>
      <Link href="" panelOpen="left">Menu</Link>
    </NavLeft>
    <NavTitle>{title}</NavTitle>
    <NavRight />
  </Navbar>
{/if}
