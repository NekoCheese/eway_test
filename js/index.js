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

    f_submit_ErrMsg: "",

    submit_btn: "submit",

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
        console.log(f_name);
        this.f_name_error = true;
        this.f_name_ErrMsg = "required";
        f_name.classList.add("error_input");
      } else {
        this.f_name_error = false;
        this.f_name_ErrMsg = "";
        f_name.classList.remove("error_input");
      }
    },

    f_phone: function () {
      // 台灣手機格式
      const phoneExp = /^09\d{8}$/;
      if (!phoneExp.test(this.f_phone)) {
        this.f_phone_error = true;
        this.f_phone_ErrMsg = "required";
        f_phone.classList.add("error_input");
      } else {
        this.f_phone_error = false;
        this.f_phone_ErrMsg = "";
        f_phone.classList.remove("error_input");
      }
    },

    f_amount: function () {
      // 金額驗證
      const amountExp = /^[0-9]+$/;
      if (!amountExp.test(this.f_amount)) {
        this.f_amount_error = true;
        this.f_amount_ErrMsg = "required";
        f_amount.classList.add("error_input");
      } else {
        this.f_amount_error = false;
        this.f_amount_ErrMsg = "";
        f_amount.classList.remove("error_input");
      }
    },

    f_store: function () {
      if (this.f_store == "") {
        this.f_store_ErrMsg = "required";
      } else {
        this.f_store_error = false;
        this.f_store_ErrMsg = "";
      }
    },

    // f_payment: function () {
    //   if (this.f_payment == "digital payment") {
    //     this.f_payment_ErrMsg = "required";
    //   } else {
    //     this.f_payment_error = false;
    //   }
    // },
  },

  methods: {
    // 送出前驗證
    signUp: function () {
      if (
        this.f_store_error != true &&
        this.f_name_error != true &&
        this.f_phone_error != true &&
        this.f_amount_error != true
      ) {
        this.submit_btn = "success";
      } else {
        this.submit_btn = "failure";
        this.f_submit_ErrMsg = "This person dose not exist";
      }
    },

    // 過濾商店選擇
    resetIfInvalid: function () {
      if (this.f_store == "") return;
      let options = document.querySelector("#store").children;
      for (let i = 0; i < options.length; i++) {
        // console.log(options[i].value);
        if (this.f_store == options[i].value) return;
      }
      this.f_store = "";
    },
  },
});
