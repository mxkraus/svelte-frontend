<script>
  import MyNavbar from "../Layout/MyNavbar.svelte";
  import { Page, Navbar, List, ListItem, BlockTitle } from "framework7-svelte";
  import { onMount } from "svelte";

  let events = [];
  onMount(async () => {
    const res = await fetch("https://mxkraus.ddnss.de/events");
    let obj = await res.json();
    events = obj.events;
  });
</script>

<!-- events.svelte -->
<Page name="events">
  <MyNavbar title="Veranstaltungen" />

  <List id="evt-list">
    {#each events as event}
      <ListItem title="{event.evt_title}" href="/detail/{event.evt_id}/" view="#mainView"  />
    {/each}
  </List>

  <style>
    #evt-list.list {
      margin: 0;
    }
  </style>
</Page>
