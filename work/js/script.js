$('.container').on("change", 'select', function() {
	var type = $('#typeDropdown').val().toLowerCase(),
	  	diameter = $('#diameterDropdown').val().toLowerCase();
  
	var table = $("#download-forms-table-tbody");
	var trs = table.find('tr');
	trs.hide();
  
	var filtered = trs.filter(function(index, elem) {
	  var tds = $(elem).find('td');
	  if (type !== "all" && tds.eq(1).text().trim().toLowerCase() !== type) {
		return false;
	  }
	  if (diameter !== "all" && tds.eq(2).text().trim().toLowerCase() !== diameter) {
		return false;
	  }
	  return true;
	})
  
	filtered.show();
  
	if (filtered.length == 0) {
	  alert("横井モールドにないです！");
	}
  
});