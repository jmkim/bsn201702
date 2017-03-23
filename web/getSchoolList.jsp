<%--
  Created by IntelliJ IDEA.
  User: jmkim
  Date: 2/14/17
  Time: 7:40 PM
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         trimDirectiveWhitespaces="true"
         import="java.sql.*, javax.naming.*, javax.sql.*, java.util.UUID" %>
<%
    request.setCharacterEncoding("UTF-8");
    response.setContentType("application/json");

    String addressGu = request.getParameter("addressGu");
    addressGu = (addressGu == null) ? "" : addressGu;

    StringBuilder resultJson = new StringBuilder();

    Context ctx = null;
    Connection con = null;

    PreparedStatement midSchoolPs = null;
    PreparedStatement highSchoolPs = null;
    ResultSet midSchoolRs = null;
    ResultSet highSchoolRs = null;

    resultJson.append("{\"addressGu\":\"");
    resultJson.append(addressGu);
    resultJson.append("\"");
    try {
        ctx = new InitialContext();
        con = ((DataSource) ctx.lookup("java:comp/env/jdbc/bsn")).getConnection();

        midSchoolPs = con.prepareStatement("SELECT NAME FROM SCHOOL_ACHIEVEMENT WHERE GU = ? AND TYPE = ? ORDER BY NAME ASC");
        highSchoolPs = con.prepareStatement("SELECT NAME FROM SCHOOL_ACHIEVEMENT WHERE GU = ? AND TYPE = ? ORDER BY NAME ASC");

        midSchoolPs.setString(1, addressGu);
        midSchoolPs.setString(2, "M");
        highSchoolPs.setString(1, addressGu);
        highSchoolPs.setString(2, "H");

        midSchoolRs = midSchoolPs.executeQuery();
        highSchoolRs = highSchoolPs.executeQuery();

        resultJson.append(",\"error\":false");
        boolean midNext = midSchoolRs.next();
        boolean highNext = highSchoolRs.next();
        if (!(midNext && highNext)) {
            resultJson.append(",\"result\":null}");
        } else {
            resultJson.append(",\"result\":{");

            resultJson.append("\"middleSchool\":[");

            while (midNext) {
                try {
                    String result = midSchoolRs.getString("NAME");

                    resultJson.append("\"");
                    resultJson.append(result);
                    resultJson.append("\"");
                } catch (SQLException e) {
                    resultJson.append("null");
                }
                resultJson.append((midNext = midSchoolRs.next()) ? "," : "");
            }
            resultJson.append("]");

            resultJson.append(",\"highSchool\":[");

            while (highNext) {
                try {
                    String result = highSchoolRs.getString("NAME");

                    resultJson.append("\"");
                    resultJson.append(result);
                    resultJson.append("\"");
                } catch (SQLException e) {
                    resultJson.append("null");
                }
                resultJson.append((highNext = highSchoolRs.next()) ? "," : "");
            }
            resultJson.append("]");

            resultJson.append("}}");
        }
    } catch (Exception e) {
        String logId = UUID.randomUUID().toString();

        resultJson.append(",\"error\":true,\"logId\":\"");
        resultJson.append(logId);
        resultJson.append("\"}");

        StringBuilder console = new StringBuilder();
        console.append("ERROR:\n");
        console.append("\tLOG_ID: ");
        console.append(logId);
        console.append("\n\t");
        console.append(e.toString());
        console.append("\n");
        System.err.print(console.toString());
    } finally {
        try {
            midSchoolRs.close();
        } catch (Exception e) {
        }

        try {
            midSchoolPs.close();
        } catch (Exception e) {
        }

        try {
            con.close();
        } catch (Exception e) {
        }

        try {
            ctx.close();
        } catch (Exception e) {
        }
    }

    out.print(resultJson.toString());
%>
