const app = Vue.createApp({
  data() {
    return {
      userInput: "",
    };
  },
  methods: {
    showAlert() {
      return alert("This is an alert");
    },
    saveInput(event) {
      this.userInput = event.target.value;
    },
  },
});

app.mount("#assignment");
