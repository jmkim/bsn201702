<%--
  Created by IntelliJ IDEA.
  User: jmkim
  Date: 2/16/17
  Time: 10:18 AM
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         trimDirectiveWhitespaces="true"
         import="java.sql.*, javax.naming.*, javax.sql.*, java.text.DecimalFormat, java.util.UUID" %>
<%
    request.setCharacterEncoding("UTF-8");
    response.setContentType("application/json");

    String addressGu = request.getParameter("addressGu");
    addressGu = (addressGu == null) ? "" : addressGu;

    int startYear;
    try {
        startYear = Integer.valueOf(request.getParameter("start"));
    } catch (NumberFormatException e) {
        startYear = 0;
    }

    int endYear;
    try {
        endYear = Integer.valueOf(request.getParameter("end"));
    } catch (NumberFormatException e) {
        endYear = 0;
    }

    StringBuilder resultJson = new StringBuilder();
    DecimalFormat formatter = new DecimalFormat("0.00");

    Context ctx = null;
    Connection con = null;

    PreparedStatement ps = null;
    ResultSet rs = null;

    resultJson.append("{\"addressGu\":\"");
    resultJson.append(addressGu);
    resultJson.append("\"");
    resultJson.append(",\"start\":");
    resultJson.append(startYear);
    resultJson.append(",\"end\":");
    resultJson.append(endYear);
    try {
        ctx = new InitialContext();
        con = ((DataSource) ctx.lookup("java:comp/env/jdbc/bsn")).getConnection();

        StringBuilder sqlString = new StringBuilder();

        sqlString.append("SELECT P.GU AS GU, ");
        /*
        for (int year = startYear; year <= endYear; ++year) {
            sqlString.append("COALESCE(P.`");
            sqlString.append(year);
            sqlString.append("`,0)+COALESCE(V.`");
            sqlString.append(year);
            sqlString.append("`,0) AS `");
            sqlString.append(year);
            sqlString.append("`");
            sqlString.append((year != endYear) ? ", " : " ");
        }
        */

        for (int year = 2005; year == 2005 || year == 2015; year += 10) {
            sqlString.append("COALESCE(P.`");
            sqlString.append(year);
            sqlString.append("`,0)+COALESCE(V.`");
            sqlString.append(year);
            sqlString.append("`,0) AS `");
            sqlString.append(year);
            sqlString.append("`");
            sqlString.append((year != endYear) ? ", " : " ");
        }

        sqlString.append("FROM P_MID_STUDENT_TRANSITION P INNER JOIN V_MID_STUDENT_TRANSITION V ON P.GU = V.GU WHERE P.GU = ?");

        ps = con.prepareStatement(sqlString.toString());
        ps.setString(1, addressGu);
        rs = ps.executeQuery();

        resultJson.append(",\"error\":false");
        boolean next = rs.next();
        if (!next) {
            resultJson.append(",\"result\":null}");
        } else {
            resultJson.append(",\"result\":{");

            resultJson.append("\"yearCount\":");
            resultJson.append(endYear - startYear + 1);
            resultJson.append(",\"yearScheme\":[");
            for (int year = startYear; year < endYear; ++year) {
                resultJson.append(year);
                resultJson.append(",");
            }
            resultJson.append(endYear);
            resultJson.append("]");

            resultJson.append(",\"values\":[");

                    for (int year = startYear; year < endYear; ++year) {
                        try {
                            int value = rs.getInt(Integer.toString(year));
                            resultJson.append(value);
                        } catch (SQLException e) {
                            resultJson.append("null");
                        } finally {
                            resultJson.append(",");
                        }
                    }
                    try {
                        int value = rs.getInt(Integer.toString(endYear));
                        resultJson.append(value);
                    } catch (SQLException e) {
                        resultJson.append("null");
                    }

                    resultJson.append("]");

            resultJson.append("}");
            resultJson.append("}");
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
            rs.close();
        } catch (Exception e) {
        }

        try {
            ps.close();
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
