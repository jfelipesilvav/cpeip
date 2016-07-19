package com.dtt.cpeip;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sap.conn.jco.JCoDestination;
import com.sap.conn.jco.JCoDestinationManager;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoParameterList;
import com.sap.conn.jco.JCoRepository;
import com.sap.conn.jco.JCoTable;

import com.google.gson.Gson;

/**
 * Servlet implementation class datosSostenedor
 */
@WebServlet("/datosSostenedor")
public class DatosSostenedor extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DatosSostenedor() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try{
			
			JCoDestination destination = JCoDestinationManager.getDestination("OP_Demo_Integra");

            
            JCoRepository repo = destination.getRepository();
            JCoFunction stfcConnection = repo.getFunction("ZHCM_PERSONAS");
                       
            stfcConnection.execute(destination);
            
            JCoParameterList exports = stfcConnection.getTableParameterList();

            JCoTable tablaRetornoRFC = (JCoTable)exports.getTable("TI0002"); 
            
            ArrayList<Pa0002> pa002li= new ArrayList<Pa0002>();
            
            tablaRetornoRFC.firstRow();
            
            for(int x=0;x<tablaRetornoRFC.getNumRows();x++){
            	tablaRetornoRFC.nextRow();            	
            	Pa0002 dato = new Pa0002();
            	dato.setPernr(tablaRetornoRFC.getString("PERNR"));
            	dato.setEndda(tablaRetornoRFC.getString("ENDDA"));
            	dato.setUname(tablaRetornoRFC.getString("UNAME"));
            	pa002li.add(dato);
            }
            
            String json = new Gson().toJson(pa002li);
            response.setContentType("application/json");
            response.getWriter().write(json);
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
