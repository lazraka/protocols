$(document).ready(function(){
	//on clicking "Clear All", reset the entire scoresheet
	$("#reset-all").on("click",function(){
		$("#form")[0].reset();
	});
	//on clicking clear in each section, reset only appropriate section
	$("#reset").on("click",function(){
		console.log($(this).closest('h2').html());
		// $(this).parents('div').find('input:text').val('');
		// $(this).parents('div').find('input:date').val('');
	});
	//on clicking plus sign, add fields accordingly
	addItem=[];
	$(".add").on("click",function(){
		console.log(this.id);
		addItem=$(this).closest('.fields-bin').find('.add-section').html();
		console.log(addItem);
		$(this).closest('.fields-bin').append(addItem);
	});
});
