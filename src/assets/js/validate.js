/**
 * Created by Administrator on 2017/3/3.
 */
let validate = {
  notNull: function (value) {
    return value !== '';
  },
  maxLength: function (value, maxLen) {
    return value.length() < maxLen
  }
};

document.addValidate = function(options) {
  for (let option of options) {
    if (!validate[option]) {
      return option;
    }
  }
};

let nameInput = $('#name');
nameInput.addValidate({
  notNull: true,
  maxLength: 30
});



