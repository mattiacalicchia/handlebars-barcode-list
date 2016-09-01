// ANIMAL TEMPLATE

// sets variable source to the barcodeTemplate id in index.html
var source = document.getElementById("barcodeTemplate").innerHTML;

// Handlebars compiles the above source into a template
var template = Handlebars.compile(source);

// data
var data = {stock: [
 	{
		"code": "0247992351333",
		"quantity": 4
	},
	{
		"code": "2859495233099",
		"quantity": 17
	},
	{
		"code": "2967828471124",
		"quantity": 5
	},
	{
		"code": "0803668337489",
		"quantity": 11
	},
	{
		"code": "5139878801705",
		"quantity": 4
	},
	{
		"code": "1458676304697",
		"quantity": 6
	},
	{
		"code": "1619595087693",
		"quantity": 19
	},
	{
		"code": "6278305049365",
		"quantity": 15
	},
	{
		"code": "1409522845791",
		"quantity": 8
	},
	{
		"code": "6095482162032",
		"quantity": 14
	},
	{
		"code": "9931857772206",
		"quantity": 9
	},
	{
		"code": "1578743609545",
		"quantity": 13
	},
	{
		"code": "8239094139879",
		"quantity": 16
	},
	{
		"code": "1302362328377",
		"quantity": 12
	},
	{
		"code": "7349945751149",
		"quantity": 14
	},
	{
		"code": "9088451391625",
		"quantity": 2
	},
	{
		"code": "2158712714428",
		"quantity": 20
	},
	{
		"code": "5940494635778",
		"quantity": 17
	},
	{
		"code": "2218735594564",
		"quantity": 1
	},
	{
		"code": "9268814879289",
		"quantity": 6
	},
	{
		"code": "4711888823033",
		"quantity": 6
	},
	{
		"code": "1710700868873",
		"quantity": 12
	},
	{
		"code": "8885600323361",
		"quantity": 3
	},
	{
		"code": "1346989958080",
		"quantity": 15
	},
	{
		"code": "7195546276577",
		"quantity": 2
	},
	{
		"code": "7339713880319",
		"quantity": 20
	},
	{
		"code": "1198517497438",
		"quantity": 15
	},
	{
		"code": "6482260564244",
		"quantity": 16
	},
	{
		"code": "0691380817837",
		"quantity": 14
	},
	{
		"code": "8881623423795",
		"quantity": 11
	},
	{
		"code": "8320065885201",
		"quantity": 7
	},
	{
		"code": "3429045229285",
		"quantity": 18
	},
	{
		"code": "7952273094925",
		"quantity": 2
	},
	{
		"code": "7381352129305",
		"quantity": 14
	},
	{
		"code": "9911724412098",
		"quantity": 11
	},
	{
		"code": "5515518276388",
		"quantity": 3
	},
	{
		"code": "2057097681057",
		"quantity": 5
	},
	{
		"code": "2496666040713",
		"quantity": 18
	},
	{
		"code": "1494141277228",
		"quantity": 9
	},
	{
		"code": "5664848924137",
		"quantity": 13
	},
	{
		"code": "1089891670776",
		"quantity": 10
	},
	{
		"code": "1758538774823",
		"quantity": 18
	},
	{
		"code": "6328512337153",
		"quantity": 6
	},
	{
		"code": "8868072018096",
		"quantity": 7
	},
	{
		"code": "7635124149038",
		"quantity": 18
	},
	{
		"code": "6801791854442",
		"quantity": 19
	},
	{
		"code": "5226806107163",
		"quantity": 3
	},
	{
		"code": "0142075412070",
		"quantity": 7
	},
	{
		"code": "2369127171693",
		"quantity": 12
	},
	{
		"code": "6779533136054",
		"quantity": 1
	},
	{
		"code": "7378107163960",
		"quantity": 14
	},
	{
		"code": "6255268955302",
		"quantity": 16
	},
	{
		"code": "8377815558769",
		"quantity": 17
	},
	{
		"code": "7318007929234",
		"quantity": 11
	},
	{
		"code": "1276717879443",
		"quantity": 5
	},
	{
		"code": "3096804978756",
		"quantity": 8
	},
	{
		"code": "8515099559885",
		"quantity": 8
	},
	{
		"code": "5231443067122",
		"quantity": 14
	},
	{
		"code": "8030584051815",
		"quantity": 12
	},
	{
		"code": "9287937964248",
		"quantity": 15
	},
	{
		"code": "9970458692698",
		"quantity": 20
	},
	{
		"code": "0547503241581",
		"quantity": 9
	},
	{
		"code": "3137041872699",
		"quantity": 4
	},
	{
		"code": "6225980134913",
		"quantity": 19
	},
	{
		"code": "5682554279107",
		"quantity": 10
	},
	{
		"code": "5600898123778",
		"quantity": 2
	},
	{
		"code": "4412316839286",
		"quantity": 16
	},
	{
		"code": "7797351210102",
		"quantity": 7
	},
	{
		"code": "4483414969535",
		"quantity": 5
	},
	{
		"code": "4629110762633",
		"quantity": 15
	},
	{
		"code": "7806641884679",
		"quantity": 16
	},
	{
		"code": "2835454598899",
		"quantity": 12
	},
	{
		"code": "5822148606478",
		"quantity": 11
	},
	{
		"code": "4262887959163",
		"quantity": 7
	},
	{
		"code": "8401032514274",
		"quantity": 4
	},
	{
		"code": "6853331912298",
		"quantity": 7
	},
	{
		"code": "1286939854011",
		"quantity": 7
	},
	{
		"code": "9668814796781",
		"quantity": 7
	},
	{
		"code": "9124982309496",
		"quantity": 2
	},
	{
		"code": "1612229528769",
		"quantity": 15
	},
	{
		"code": "1405848211791",
		"quantity": 3
	},
	{
		"code": "4438311958341",
		"quantity": 7
	},
	{
		"code": "6084757924526",
		"quantity": 4
	},
	{
		"code": "5293204653599",
		"quantity": 17
	},
	{
		"code": "9136891422067",
		"quantity": 19
	},
	{
		"code": "7844654780402",
		"quantity": 18
	},
	{
		"code": "4126397386987",
		"quantity": 15
	},
	{
		"code": "4951667352611",
		"quantity": 2
	},
	{
		"code": "8420674389376",
		"quantity": 8
	},
	{
		"code": "6270477986729",
		"quantity": 14
	},
	{
		"code": "3451499232061",
		"quantity": 9
	},
	{
		"code": "8690703812063",
		"quantity": 8
	},
	{
		"code": "8533906815548",
		"quantity": 10
	},
	{
		"code": "8001194645731",
		"quantity": 8
	},
	{
		"code": "5868339258085",
		"quantity": 1
	},
	{
		"code": "4793470740924",
		"quantity": 2
	},
	{
		"code": "0771024046990",
		"quantity": 20
	},
	{
		"code": "2221134987797",
		"quantity": 20
	},
	{
		"code": "6073796304181",
		"quantity": 2
	},
	{
		"code": "6570547618556",
		"quantity": 16
	}
]};

// data is passed to above template
var output = template(data);

// HTML element with id "barcodeList" is set to the output above
document.getElementById("barcodeList").innerHTML = output;




