$(document).ready(function(){
	//on clicking "Clear All", reset the entire scoresheet
	$("#reset-all").on("click",function(){
		$("#form")[0].reset();
	});
	
	//on clicking clear in each section, reset only appropriate section
	$("#reset").on("click",function(){
		idClear=$(this).closest('.data-section').attr('id');
		console.log('#'+idClear+'')

		$('#'+idClear+'').find('input:text').val('');
		$('#'+idClear+'').find('select').val(this.defaultSelected);
		//$('#'+idClear+'').find('input:date').val('');
		//$("#information")[0].reset();
		// $(this).parents('div').find('input:text').val('');
		// $(this).parents('div').find('input:date').val('');
	});
	
	//on clicking plus sign, add fields accordingly and add minus sign
	addItem=[];
	$(".add").on("click",function(){
		addItem=$(this).closest('.fields-bin').find('.add-section').html();
		//$(this).closest('.fields-bin').append(addItem); this was to add the items to the parent div
		$(this).closest('.fields-bin').append('<div style="float:right; margin-right:5px; display:block"> '+addItem+'</div>');
		subtract=$(this).closest('.fields-bin').find('.remove');
		$(subtract).css("display","inline-block");
	});
});
