package com.dtt.demo.calculator;

import java.awt.List;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sap.conn.jco.AbapException;
import com.sap.conn.jco.JCo;
import com.sap.conn.jco.JCoDestination;
import com.sap.conn.jco.JCoDestinationManager;
import com.sap.conn.jco.JCoException;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoParameterList;
import com.sap.conn.jco.JCoRepository;
import com.sap.conn.jco.JCoTable;

import javax.servlet.http.HttpSession;

@WebServlet("/conexion")
public class ConnectivityRFCDemo extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
       
   
    public ConnectivityRFCDemo() {
        
    }  
  
	
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    	
    	PrintWriter responseWriter = response.getWriter();
        try
        {
            
            JCoDestination destination = JCoDestinationManager.getDestination("OP_Demo_Integra");

            
            JCoRepository repo = destination.getRepository();
            JCoFunction stfcConnection = repo.getFunction("ZHCM_PERSONAS");

            JCoParameterList imports = stfcConnection.getImportParameterList();
            
            int input1 = Integer.parseInt(request.getParameter("input1"));
            int input2 = Integer.parseInt(request.getParameter("input2"));
            
            stfcConnection.execute(destination);
            JCoParameterList exports = stfcConnection.getTableParameterList();
            //int result = Integer.parseInt(exports.getString("P_RESULT"));
            JCoTable tablaRetornoRFC = (JCoTable)exports.getTable("TI0002"); 
            String resJson = ""; 
                       
            tablaRetornoRFC.firstRow();
            for(int x=0;x<tablaRetornoRFC.getNumRows();x++){
            	resJson = resJson + "{\"PERNR\": \""+tablaRetornoRFC.getString("PERNR")+"\","
            			+ "\"ENDDA\": \""+tablaRetornoRFC.getString("ENDDA")+"\","
            			+ "\"UNAME\": \""+tablaRetornoRFC.getString("UNAME")+"\"},"; 
            	tablaRetornoRFC.nextRow();
            }
            String res = resJson.substring(0,resJson.length()-1);
            
            response.addHeader("Content-type", "text/html");
            responseWriter.println("<html><body>");
            responseWriter.println("<h1>Executed RFC in system PwC IDES	</h1>");
            responseWriter.println("<p>Total:<br>");
          //  responseWriter.println(result);
            responseWriter.println("</body></html>");
            
            HttpSession session = request.getSession(true); 
            //session.setAttribute("Result", result);
            response.sendRedirect("Result.jsp"); 
            response.setContentType("text/plain");
            //response.setIntHeader("Result: ", result);
        }
        catch (AbapException ae)
        {
        	response.addHeader("Content-type", "text/html");
            responseWriter.println("<html><body>");
            responseWriter.println("<h1>ABAP Exception occurred while executing RFC in IDES</h1>");
            responseWriter.println("<pre>");
            ae.printStackTrace(responseWriter);
            responseWriter.println("</pre>");
            responseWriter.println("</body></html>");
        }
        catch (JCoException e)
        {
            response.addHeader("Content-type", "text/html");
            responseWriter.println("<html><body>");
            responseWriter.println("<h1>Exception occurred while executing RFC in IDES</h1>");
            responseWriter.println("<pre>");
            e.printStackTrace(responseWriter);
            responseWriter.println("</pre>");
            responseWriter.println("</body></html>");
        }
		
	}

}