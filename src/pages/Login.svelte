<script>
  import MyNavbar from "../Layout/MyNavbar.svelte";
  import {
    f7,
    Page,
    LoginScreenTitle,
    List,
    ListInput,
    ListButton,
    Block,
    BlockFooter,
    Navbar,
  } from "framework7-svelte";

  export let f7router;

  let username = "";
  let password = "";

  function signIn() {
    f7.dialog.alert(`Username: ${username}<br>Password: ${password}`, () => {
      f7router.back();
    });
  }
</script>

<!-- login.svelte -->
<Page name="login">
  <MyNavbar title="Login" />
  <Block></Block>
  <LoginScreenTitle>Willkommen!</LoginScreenTitle>
  <List form>
    <ListInput
      label="Username"
      type="text"
      placeholder="Your username"
      value={username}
      onInput={(e) => (username = e.target.value)}
    />
    <ListInput
      label="Password"
      type="password"
      placeholder="Your password"
      value={password}
      onInput={(e) => (password = e.target.value)}
    />
  </List>
  <List>
    <ListButton onClick={signIn}>Sign In</ListButton>
  </List>
  <BlockFooter
    >Some text about login information.<br />Lorem ipsum dolor sit amet,
    consectetur adipiscing elit.</BlockFooter
  >
</Page>
