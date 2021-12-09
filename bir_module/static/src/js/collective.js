
function get_current(){
	var now = new Date();

	var day = ("0" + now.getDate()).slice(-2);
    var month = ("0" + (now.getMonth() + 1)).slice(-2);

    var today = now.getFullYear()+"-"+(month);

    return today;
}


function construct_sawt(data){
	var html = "<table class='table table-striped table-hover'><thead><tr>";

	html += "<th scope='col'>Number</th>\
		<th scope='col'>Taxpayer Identification Number</th>\
		<th scope='col'>Corporation</th>\
		<th scope='col'>ATC Code</th>\
		<th scope='col'>Amount of Income Payment</th>\
		<th scope='col'>Tax Rate</th>\
		<th scope='col'>Amount of Tax Withheld</th></tr></thead><tbody>";

	var num = 1;
	for(let x in data){
		let income = Math.abs(data[x][1]);
		let rate = Math.abs(data[x][5]);
		let amount = Math.abs(data[x][0]);

		html += "<tr>";
		html += "<th scope='row'>" + num + "</td>\
			<td>" + data[x][2] + "</td>\
			<td>" + data[x][3] + "</td>\
			<td>" + data[x][4] + "</td>\
			<td>" + income + "</td>\
			<td>" + rate + "%</td>\
			<td>" + amount + "</td>";
		html += "</tr>"

		num += 1;
	}

	html += "</tbody></table>";

	return html;
}

function construct_partners(data){
	var html = "";

	for(let x in data){
		html += "<option value='" + data[x][0] + "'>" + data[x][1] + "</option>";
	}

	return html;
}

function construct_sls_slp(data){
	var html = "<table class='table table-striped table-hover'><thead><tr>";

	html += "<th scope='col'>Taxable Month</th>\
		<th scope='col'>Taxpayer Identification Number</th>\
		<th scope='col'>Registered Name</th>\
		<th scope='col'>Gross Purchase</th>\
		<th scope='col'>Exempt Purchase</th>\
		<th scope='col'>Zero-rated Purchase</th>\
		<th scope='col'>Taxable Purchase</th>\
		<th scope='col'>Purchase of Services</th>\
		<th scope='col'>Purchase of Capital goods</th>\
		<th scope='col'>Purchase of Goods other than Capital Goods</th>\
		<th scope='col'>Input Tax</th>\
		<th scope='col'>Gross Taxation</th>";

	for(let x in data){
		// let gross = 
	}
}

function construct_slp(data){
	var html = "<table class='table table-striped table-hover'><thead><tr>";

	html += "<th scope='col'>Taxable Month</th>\
		<th scope='col'>Taxpayer Identification Number</th>\
		<th scope='col'>Registered Name</th>\
		<th scope='col'>Gross Purchase</th>\
		<th scope='col'>Exempt Purchase</th>\
		<th scope='col'>Zero-rated Purchase</th>\
		<th scope='col'>Taxable Purchase</th>\
		<th scope='col'>Purchase of Services</th>\
		<th scope='col'>Purchase of Capital goods</th>\
		<th scope='col'>Purchase of Goods other than Capital Goods</th>\
		<th scope='col'>Input Tax</th>\
		<th scope='col'>Gross Taxation</th>";

	var x;
	for(let y in data){
		x = JSON.parse(JSON.stringify(data[y]));

		html += "<tr>";
		html += "<th scope='row'></td>\
			<td>" + String(x.vat) + "</td>\
			<td>" + String(x.name) + "</td>\
			<td>" + String(x.gross_sales_po) + "</td>\
			<td>" + String(x.exempt) + "</td>\
			<td>" + String(x.zero_rated) + "</td>\
			<td>" + String(x.taxable) + "</td>\
			<td>" + String(x.po_services) + "</td>\
			<td>" + String(x.po_capital_goods) + "</td>\
			<td>" + String(x.po_other) + "</td>\
			<td>" + String(x.tax) + "</td>\
			<td>" + String(x.gross_tax) + "</td>\
			";
		html += "</tr>"
	}

	// html = "<p>" + JSON.stringify(data[0]) + "</p>"

	html += "</tbody></table>";

	return html;
}

function construct_sls(data){
	var html = "<table class='table table-striped table-hover'><thead><tr>";

	html += "<th scope='col'>Taxable Month</th>\
		<th scope='col'>Taxpayer Identification Number</th>\
		<th scope='col'>Registered Name</th>\
		<th scope='col'>Gross Purchase</th>\
		<th scope='col'>Exempt Purchase</th>\
		<th scope='col'>Zero-rated Purchase</th>\
		<th scope='col'>Taxable Purchase</th>\
		<th scope='col'>Input Tax</th>\
		<th scope='col'>Gross Taxation</th>";

	var x;
	for(let y in data){
		x = JSON.parse(JSON.stringify(data[y]));

		html += "<tr>";
		html += "<th scope='row'></td>\
			<td>" + String(x.vat) + "</td>\
			<td>" + String(x.name) + "</td>\
			<td>" + String(x.gross_sales_po) + "</td>\
			<td>" + String(x.exempt) + "</td>\
			<td>" + String(x.zero_rated) + "</td>\
			<td>" + String(x.taxable) + "</td>\
			<td>" + String(x.tax) + "</td>\
			<td>" + String(x.gross_tax) + "</td>\
			";
		html += "</tr>"
	}

	// html = "<p>" + JSON.stringify(data[0]) + "</p>"

	html += "</tbody></table>";

	return html;
}
