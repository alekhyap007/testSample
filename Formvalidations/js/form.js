
  $(document).ready(function () {

    $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
      },
    );

    $('#myform').validate({ // initialize the plugin
      rules: {
        first_name: {
          required: true,
          regex: /^[A-Za-z]+$/,
        },
        last_name: {
          required: true,
          regex: /^[A-Za-z]+$/,
        },
        phoneNo: {
          required: true,
          regex: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
          number: true
        },
        zipcode: {
          required: true,
          number: true,
          regex: /^[0-9]{5}(?:-[0-9]{4})?$/
        },
        email_ID: {
          required: true,
          email: true,
          regex: /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,64}$/
        },
        message : {
            required: true,
        },

        submit: {
          required: true
        }
      },
      messages: {
        email_ID:
        {
          required: "",
          regex: ""
        },

        first_name:
        {
          required: "",
          regex: ""

        },
        last_name:
        {
          required: "",
          regex: ""
        },
        phoneNo:
        {
          required: "",
          regex: ""
        },
        message : {
            required : " "
        }

      },
      submitHandler: function (form) {
        //form.submit();
        $("#hide").hide();
        $("#second").show();
      },

      highlight: function (element) {
        $(element).css('background-color', '#FFF0F0');
        // $(element).css('boder-color', '#FFF0F0');

      },

      // Called when the element is valid:
      unhighlight: function (element) {
        $(element).css('background-color', '');
      }

    });

  });