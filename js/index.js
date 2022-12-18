new Vue({
  el: "#app",

  data: {
    f_store: "",
    f_store_error: true,
    f_store_ErrMsg: "",

    f_name: "",
    f_name_error: true,
    f_name_ErrMsg: "",

    f_phone: "",
    f_phone_error: true,
    f_phone_ErrMsg: "",

    f_amount: "",
    f_amount_error: true,
    f_amount_ErrMsg: "",

    f_payment: "digital payment",
    f_payment_error: true,
    f_payment_ErrMsg: "",

    cardArray: [
      { color: "r_green", level: "A", num: "ONE", name: "dehummidifier" },
      { color: "r_green", level: "A", num: "ONE", name: "range hood" },
      { color: "r_green", level: "A", num: "ONE", name: "vacuum cleaner" },
      { color: "r_gray", level: "D", num: "ONE", name: "toaster" },
      { color: "r_gray", level: "D", num: "ONE", name: "scale" },
      { color: "r_gray", level: "D", num: "ONE", name: "straightening iron" },
      { color: "r_gray", level: "D", num: "FIVE", name: "vacuum cleaner" },
      { color: "r_gray", level: "D", num: "TEN", name: "rice cooker" },
    ],
  },

  watch: {
    f_name: function () {
      // 中英混合
      const nameExp = /^[\u4e00-\u9fa5a-zA-Z]+$/;
      if (!nameExp.test(this.f_name)) {
        this.f_name_error = true;
        this.f_name_ErrMsg = "Please enter Chinese or English";
      } else {
        this.f_name_error = false;
        this.f_name_ErrMsg = "";
      }
    },

    f_phone: function () {
      // 台灣手機格式
      const phoneExp = /^09\d{8}$/;
      if (!phoneExp.test(this.f_phone)) {
        this.f_phone_error = true;
        this.f_phone_ErrMsg = "Please enter the correct phone number";
      } else {
        this.f_phone_error = false;
        this.f_phone_ErrMsg = "";
      }
    },

    f_amount: function () {
      // 金額驗證
      const amountExp = /^[0-9]+$/;
      if (!amountExp.test(this.f_amount)) {
        this.f_amount_error = true;
        this.f_amount_ErrMsg = "Wrong amount entered";
      } else {
        this.f_amount_error = false;
        this.f_amount_ErrMsg = "";
      }
    },

    f_store: function () {
      if (this.f_store == "") {
        this.f_store_ErrMsg = "Please select a store from the list";
      } else {
        this.f_store_error = false;
        this.f_store_ErrMsg = "";
      }
    },

    f_payment: function () {
      if (this.f_payment == "digital payment") {
        this.f_payment_ErrMsg = "請選擇付款方式";
      } else {
        this.f_payment_error = false;
      }
    },
  },

  methods: {
    // 送出前驗證
    signUp: function () {
      if (
        this.f_store_error != true &&
        this.f_name_error != true &&
        this.f_phone_error != true &&
        this.f_amount_error != true &&
        this.f_payment_error != true
      ) {
        alert("Data successfully sent");
      } else {
        alert("Failed to send, please confirm that the information is filled in correctly");
      }
    },

    // 過濾商店選擇
    resetIfInvalid: function () {
      if (this.f_store == "") return;
      let options = document.querySelector("#store").children;
      for (let i = 0; i < options.length; i++) {
        console.log(options[i].value);
        if (this.f_store == options[i].value) return;
      }
      this.f_store = "";
    },
  },
});
