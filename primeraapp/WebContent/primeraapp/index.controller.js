sap.ui.controller("primeraapp.index", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf primeraapp.index
*/
	onInit: function() {
	
		var url  = "proxy/https/apisalesdemo4.successfactors.com:443/odata/v2/";
		var oModel = new sap.ui.model.odata.ODataModel(url,true,null,null,
		{Authorization: "Basic REVNT19EVFRAYWNlOXEyOmRlbG9pdHRlMjAxNQ=="});
		
		sap.ui.getCore().setModel(oModel,"cust_reembolsos");
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf primeraapp.index
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf primeraapp.index
*/
	onAfterRendering: function() {
		$("#formId").hide();
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf primeraapp.index
*/
//	onExit: function() {
//
//	}

	resetForm: function(){
		$("externalCode").val('');
		$("cust_monto").val('');
	},
	
	create: function(){
		this.mode = 'create';
		this.resetForm();
		
	},
	
	edit: function(){
	this.mode = 'edit';
	
	var oTable = sap.ui.getCore().byId('tablaReem'); 
	
	var seleccion = oTable.getSelectedIndex();
	
	
	if(seleccion == -1){
		alert("Selecciona un registro");
	}else{
		
		$("#formId").slideDown(function(){
	    var datos = oTable.getModel('cust_reembolsos').oData['cust_reembolsos('+ seleccion +')'];
	    console.log(datos);
	    
	    
	    //var usuario = datos.cust_monto;
	    
		}
	)}
	
	},
	
	remove: function(){
		
		
	},
	
	save: function(){
		
		
	}
	
});