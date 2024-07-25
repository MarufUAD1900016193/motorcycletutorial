new Vue({
    el: '#app',
    data: {
      selectedMotor: null // Menyimpan jenis motor yang dipilih
    },
    methods: {
      selectMotor(motor) {
        this.selectedMotor = motor; // Memperbarui jenis motor yang dipilih
      }
    }
  });
