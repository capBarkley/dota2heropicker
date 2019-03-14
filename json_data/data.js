let data = [];
let i = 0;
// $(document).ready(() => {

// })

$("#addHero").click( () => {
	let name = $("#name").val();
	let primaryAttack = $("#primaryAttack").val();
	let attackType = $("#attackType").val();
	let durable = ($("#durable").prop("checked") == true) ? true : false;

	let carry = ($("#carry").prop("checked") == true) ? true : false;
	let mid = ($("#mid").prop("checked") == true) ? true : false;
	let off = ($("#off").prop("checked") == true) ? true : false;
	let roam = ($("#roam").prop("checked") == true) ? true : false;
	let sup = ($("#sup").prop("checked") == true) ? true : false;
	let role = {
		carry: carry,
		mid: mid,
		off: off,
		roam: roam,
		sup: sup
	}
	let imgURL = $("#imgURL").val();
	let hero = {
		id: i,
		name: name,
		primaryAttack: primaryAttack,
		attackType: attackType,
		durable: durable,
		role: role,
		imgURL: imgURL
	}
	console.log(imgURL);
	data[i++] = hero;

	// console.log("Name", name);
	// console.log("Primary Attack", primaryAttack);
	// console.log("Durable", durable);
	// console.log("Role", role);
	console.log(data);
	$("#outputData").html(JSON.stringify(data));
});

$("#imgURL").on("input", () => {
	$("img").attr("src", $("#imgURL").val());
});


const copyToClipboard = element => {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
  }
/*{
	{
		id: 0,
		name: "Alchemist",
		durable: true,
		role: {
			carry: true,
			mid: true,
			off: false,
			roam: true,
			sup: false
		}
	},
	{
		id: 1,
		name: "Abbadon",
		durable:true,
		role: {
			carry: true,
			mid: false,
			off: false,
			roam: true,
			sup: true
		}
	}
}*/