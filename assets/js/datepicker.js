// Date Picker

jQuery(document).ready(function () {
  jQuery('#datepicker, #datepicker2').datepicker({
      format: 'dd-mm-yyyy',
      startDate: '+1d'
  });
});
