<script>
  import { App, View, Panel, Page, Block } from "framework7-svelte";
  import routes from "./routes.js";

  const f7params = {
    name: "My App",
    id: "/mxkraus/com.demoapp.test",
    routes: routes,
  };
</script>

<App {...f7params}>
  <Panel left reveal >
    <View url="/leftpanel" />
  </Panel>
  <View main url="/" id="mainView" />
</App>
