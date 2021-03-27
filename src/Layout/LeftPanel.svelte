<script>
  import { Page, List, ListItem } from "framework7-svelte";
</script>

<Page id="left-panel" name="leftpanel">
  <List>
    <ListItem
      class="panel-close"
      title="Start"
      href="/start/"
      view="#mainview"
    />
    <ListItem
      class="panel-close"
      title="Über"
      href="/about/"
      view="#mainView"
    />
    <ListItem
      class="panel-close"
      title="Veranstaltungen"
      href="/events/"
      view="#mainView"
    />
    <ListItem
      class="panel-close"
      title="Kalender"
      href="/calendar/"
      view="#mainView"
    />
    <ListItem
      class="panel-close"
      title="Login"
      href="/login/"
      view="#mainView"
    />
  </List>

  <style>
    #left-panel .list {
      margin: 0;
    }
  </style>
</Page>
