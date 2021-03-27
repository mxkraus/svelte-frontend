<script>
  import { Page, Navbar, f7 } from "framework7-svelte";
  import MyNavbar from "../Layout/MyNavbar.svelte";

  function onPageInit(event) {
    const pageData = event.detail[0];
    const app = event.detail[0].app;

    var calendar = app.calendar.create({
      containerEl: "#cal_container",
      value: [new Date()], //Today
      weekHeader: true,
      header: false,
      rangePicker: false,
      yearSelector: true,
      monthPicker: false,
      toolbar: true,
      disabled: [new Date(2021, 2, 10), new Date(2021, 2, 11)],
      events: [
        {
          from: new Date(2021, 2, 10),
          to: new Date(2021, 2, 15),
          color: "#ff0000",
        },
      ],
    });
  }
</script>

<!-- about.svelte -->
<Page name="calendar" on:pageInit={onPageInit}>
  <MyNavbar title="Kalender" />

  <div id="cal_container" />

  <style>
    #cal_container {
      height: 100%;
    }
    #cal_container .calendar {
      height: 50vh;
    }
    #cal_container .toolbar-top {
      top: 0 !important;
    }
  </style>
</Page>
