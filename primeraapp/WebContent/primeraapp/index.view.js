sap.ui.jsview("primeraapp.index", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf primeraapp.index
	*/ 
	getControllerName : function() {
		return "primeraapp.index";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf primeraapp.index
	*/ 
	createContent : function(oController) {

		var oMatrix = sap.ui.commons.layout.MatrixLayout({
		
				layoutFixed: true,
				width: '300px',
				columns:3
		});
		
		oMatrix.createRow(
				
				new sap.ui.commons.Button({
					text: "Create",
					width: '100px',
					press: function(){
						oController.create();
					}
				}),
				new sap.ui.commons.Button({
					text: "Edit",
					width: '100px',
					press: function(){
						oController.edit();
					}
				}),
				new sap.ui.commons.Button({
					text: "Delete",
					width: '100px',
					press: function(){
						oController.remove();
					}
				})
		);
		
			var oLayout = new sap.ui.layout.form.SimpleForm("formId", {
			
			title: "Reembolsos",
			content:[
			         new sap.ui.commons.Label({text: "externalCode"}),
			         new sap.ui.commons.TextField("externalCode",{width:'200px'}),
			         
			         new sap.ui.commons.Label({text: "cust_monto"}),
			         new sap.ui.commons.TextField("cust_monto",{width:'200px'}),
			         			
			         new sap.ui.commons.Label({text: "Date"}),
			         new sap.ui.commons.TextField("date",{width:'200px', value:"28/06/2016"}),
			         
			         new sap.ui.commons.Label({text:""}),
			         new sap.ui.commons.Button({
			        	text: "save",
			        	width: '100px',
			        	press: function() {
							oController.save()
						}
			        	 
			         })
			         ]
		});
			
		var oTable = new sap.ui.table.Table("tablaReem",{
			visisbleRowCount: 5,
			editable:false
		});

		oTable.addColumn(new sap.ui.table.Column({
			
			label: new sap.ui.commons.Label({text:"ExternalCode"}),
			visible: true,
			template: new sap.ui.commons.TextView({text: "{cust_reembolsos>externalCode}"})
		})
		);
		
		oTable.addColumn(new sap.ui.table.Column({
			
			label: new sap.ui.commons.Label({text:"ID"}),
			visible: true,
			template: new sap.ui.commons.TextView({text: "{cust_reembolsos>cust_monto}"})
		})
		);
		
		
		
		oTable.bindRows("cust_reembolsos>/cust_reembolsos");
		
		var ele = [oMatrix,oTable,oLayout];
		return ele;
	}
	
	
});
