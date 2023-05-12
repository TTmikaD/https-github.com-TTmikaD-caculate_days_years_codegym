function caculate_day() {
  let value = document.getElementById('value_input').value;
  let value_mathematics = parseInt(value);
  if (value_mathematics % 4 == 0 && value_mathematics % 100 != 0) {
    document.getElementById('show_result').innerHTML = `đây là năm nhuận`;
    switch (value_mathematics) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        document.getElementById(
          'show_result'
        ).innerHTML = `tháng ${value_mathematics} có 31 ngày`;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        document.getElementById(
          'show_result'
        ).innerHTML = `tháng ${value_mathematics} có 30 ngày`;
        break;
      default:
        document.getElementById(
          'show_result'
        ).innerHTML = `tháng ${value_mathematics} có 29 ngày`;
    }
  } else {
    document.getElementById('show_result').innerHTML = `đây không là năm nhuận`;
    switch (value_mathematics) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        document.getElementById(
          'show_result'
        ).innerHTML = `tháng ${value_mathematics} có 31 ngày`;
        break;
      case 4:
      case 6:
      case 9:
      case 11:
        document.getElementById(
          'show_result'
        ).innerHTML = `tháng ${value_mathematics} có 30 ngày`;
        break;
      default:
        document.getElementById(
          'show_result'
        ).innerHTML = `tháng ${value_mathematics} có 29 ngày`;
    }
  }
}
