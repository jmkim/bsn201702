<%--
  Created by IntelliJ IDEA.
  User: jmkim
  Date: 2/14/17
  Time: 7:46 PM
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         trimDirectiveWhitespaces="true"
         import="java.sql.*, javax.naming.*, javax.sql.*, java.text.DecimalFormat, java.util.UUID" %>
<%
    request.setCharacterEncoding("UTF-8");
    response.setContentType("application/json");

    String type = request.getParameter("type");
    type = (type == null) ? "" : type;

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
    DecimalFormat formatter = new DecimalFormat("00.00");

    Context ctx = null;
    Connection con = null;

    PreparedStatement countPs = null;
    PreparedStatement avgPs = null;
    ResultSet countRs = null;
    ResultSet avgRs = null;

    resultJson.append("{\"type\":\"");
    resultJson.append(type);
    resultJson.append("\"");
    resultJson.append(",\"start\":");
    resultJson.append(startYear);
    resultJson.append(",\"end\":");
    resultJson.append(endYear);
    try {
        ctx = new InitialContext();
        con = ((DataSource) ctx.lookup("java:comp/env/jdbc/bsn")).getConnection();

        countPs = con.prepareStatement("SELECT COUNT(*) AS SCHOOLCOUNT FROM SCHOOL_ACHIEVEMENT WHERE TYPE = ?");
        avgPs = con.prepareStatement("SELECT AVG(K2016) AS K2016, AVG(K2015) AS K2015, AVG(K2014) AS K2014, AVG(E2016) AS E2016, AVG(E2015) AS E2015, AVG(E2014) AS E2014, AVG(M2016) AS M2016, AVG(M2015) AS M2015, AVG(M2014) AS M2014 FROM SCHOOL_ACHIEVEMENT WHERE TYPE = ?");

        countPs.setString(1, type);
        avgPs.setString(1, type);

        countRs = countPs.executeQuery();
        avgRs = avgPs.executeQuery();

        if (!(countRs.next() && avgRs.next())) {
            resultJson.append(",\"error\":false,\"result\":null}");
        } else {
            resultJson.append(",\"error\":false");
            resultJson.append(",\"result\":{");

            resultJson.append("\"schoolCount\":");
            try {
                String result = countRs.getString("SCHOOLCOUNT");
                resultJson.append(result);
            } catch (SQLException e) {
                resultJson.append("null");
            }

            resultJson.append(",\"yearCount\":");
            resultJson.append(endYear - startYear + 1);
            resultJson.append(",\"yearScheme\":[");
            for (int year = startYear; year < endYear; ++year) {
                resultJson.append(year);
                resultJson.append(",");
            }
            resultJson.append(endYear);
            resultJson.append("]");

            resultJson.append(",\"score\":{");
            resultJson.append("\"korean\":[");
            for (int year = startYear; year < endYear; ++year) {
                try {
                    String result = formatter.format(avgRs.getFloat("K" + Integer.toString(year)) * 100);
                    resultJson.append(result);
                } catch (SQLException e) {
                    resultJson.append("null");
                } finally {
                    resultJson.append(",");
                }
            }
            try {
                String result = formatter.format(avgRs.getFloat("K" + Integer.toString(endYear)) * 100);
                resultJson.append(result);
            } catch (SQLException e) {
                resultJson.append("null");
            }
            resultJson.append("],");
            resultJson.append("\"math\":[");
            for (int year = startYear; year < endYear; ++year) {
                try {
                    String result = formatter.format(avgRs.getFloat("M" + Integer.toString(year)) * 100);
                    resultJson.append(result);
                } catch (SQLException e) {
                    resultJson.append("null");
                } finally {
                    resultJson.append(",");
                }
            }
            try {
                String result = formatter.format(avgRs.getFloat("M" + Integer.toString(endYear)) * 100);
                resultJson.append(result);
            } catch (SQLException e) {
                resultJson.append("null");
            }
            resultJson.append("],");
            resultJson.append("\"english\":[");
            for (int year = startYear; year < endYear; ++year) {
                try {
                    String result = formatter.format(avgRs.getFloat("E" + Integer.toString(year)) * 100);
                    resultJson.append(result);
                } catch (SQLException e) {
                    resultJson.append("null");
                } finally {
                    resultJson.append(",");
                }
            }
            try {
                String result = formatter.format(avgRs.getFloat("E" + Integer.toString(endYear)) * 100);
                resultJson.append(result);
            } catch (SQLException e) {
                resultJson.append("null");
            }
            resultJson.append("]");

            resultJson.append("}");
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
            avgRs.close();
        } catch (Exception e) {
        }

        try {
            avgPs.close();
        } catch (Exception e) {
        }

        try {
            countRs.close();
        } catch (Exception e) {
        }

        try {
            countPs.close();
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
