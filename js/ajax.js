
$().ready(function() {

	var vendorToUpdate = {};

	$("#update").click(function() {
		var newName = $("#vname").val();
		var newEmail = $("#vemail").val();
		vendorToUpdate.Name = newName;
		vendorToUpdate.Email = newEmail;
		updateVendor(vendorToUpdate);
	});

	function updateVendor(vendor) {
		$.post(
			"http://prs.gregorydoud.net/Vendors/Change/",
			JSON.stringify(vendor),
			function() {
				console.log("Update Successful!");
			}
		).fail(function(err) {
			console.log(err);
		});
	}

	function getVendor(id) {
		$.getJSON(
			"http://prs.gregorydoud.net/Vendors/Get/" + id,
			function(vendor) {
				console.log(vendor);
				vendorToUpdate = vendor;
				$("#vname").val(vendorToUpdate.Name);
				$("#vemail").val(vendorToUpdate.Email);
			}
		);
	} // end function

	$("button").click(function() {
		var vendorId = $("#inputId").val();
		getVendor(vendorId);
	});
	

	// $.getJSON(
	// 	"http://prs.gregorydoud.net/Vendors/List",
	// 	function(vendors) {
	// 		console.log(vendors);
	// 		processVendors(vendors);
	// 	}
	// );

	// function processVendors(vendors) {
	// 	for(var vendor of vendors) {
	// 		console.log(vendor.Name, vendor.Email, vendor.Phone);
	// 	}
	// }


	// $.getJSON(
	// 	"http://headers.jsontest.com",
	// 	function(headersdata) {
	// 		console.log("Accept-Language is", headersdata["Accept-Language"]);
	// 		console.log("Host is", headersdata["Host"]);
	// 		console.log("Accept-Charset is", headersdata["Accept-Charset"]);
	// 		console.log("Accept is", headersdata["Accept"]);
	// 	}
	// );

	// $.getJSON(
	// 	"http://ip.jsontest.com",
	// 	function(ipdata) {
	// 		console.log("My IP is", ipdata["ip"]);
	// 	}
	// );

	// console.log("This is after the console.log for my ip");

	// $.getJSON(
	// 	"http://date.jsontest.com", 
	// 	function(jsonx) {
	// 		console.log(jsonx);
	// 		debugJSONx(jsonx);
	// 	}
	// );


}); // end ready

// function debugJSONx(jsonx) {
// 	console.log("JSON DATA IS:", jsonx["time"], jsonx["milliseconds_since_epoch"], 
// 		jsonx["date"]);

// }