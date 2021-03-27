<script>
  import MyNavbar from "../Layout/MyNavbar.svelte";
  import { Page, Navbar, List, ListItem } from "framework7-svelte";
  import { onMount } from "svelte";

  // props passed in
  export let evtId;

  let event = [];
  let eventDetails = [];

  onMount(async () => {
    const res = await fetch("https://mxkraus.ddnss.de/event/" + evtId);
    let obj = await res.json();
    event = await obj.event[0];

    // turn object values into arrayy
    eventDetails = Object.values(event);
  });
</script>

<!-- about.svelte -->
<Page name="detail">
  <MyNavbar title={event.evt_title} backArrow="true" />

  <List id="prop-list">
    {#each eventDetails as detail}
      <ListItem title={detail} />
    {/each}
  </List>

  <style>
    #prop-list.list {
      margin: 0;
    }
  </style>
</Page>
