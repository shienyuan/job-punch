<template>
  <div>
    <h1>HOME</h1>

    <!-- current time -->
    <p>{{ $dayjs(currentTime).format("HH:mm:ss") }}</p>

    <b-button variant="primary" @click="toggleClock"
      >Clock {{ clockStatus }}</b-button
    >

    <!-- key = ID -->
    <div v-for="(clockH, i) in clockHistories" :key="i">
      <p>{{ i }} {{ clockH }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      interval: null,
      clockStart: 0,
      // enum
      CLOCK_IN: "IN",
      CLOCK_OUT: "OUT",
      clockStatus: "",
      currentTime: this.$dayjs(),
      clockHistories: [],
    };
  },
  created() {
    this.interval = setInterval(() => {
      this.currentTime = this.$dayjs();
    }, 1000);

    this.clockStatus = this.CLOCK_IN;
  },
  destroyed() {
    clearInterval(this.interval);
  },
  methods: {
    toggleClock() {
      if (this.clockStatus === this.CLOCK_IN) {
        // store to ls(local storage)
        this.clockHistories.push(this.$dayjs());
        this.clockStatus = this.CLOCK_OUT;
      } else {
        this.clockStatus = this.CLOCK_IN;
      }
    },
  },
};
</script>
