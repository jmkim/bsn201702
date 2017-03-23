<%--
  Created by IntelliJ IDEA.
  User: jmkim
  Date: 2/14/17
  Time: 7:41 PM
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         trimDirectiveWhitespaces="true"
         import="java.sql.*, javax.naming.*, javax.sql.*, java.text.DecimalFormat, java.util.UUID" %>
<%
    request.setCharacterEncoding("UTF-8");
    response.setContentType("application/json");

    String name = request.getParameter("name");
    name = (name == null) ? "" : name;

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

    PreparedStatement ps = null;
    ResultSet rs = null;

    resultJson.append("{\"name\":\"");
    resultJson.append(name);
    resultJson.append("\"");
    resultJson.append(",\"start\":");
    resultJson.append(startYear);
    resultJson.append(",\"end\":");
    resultJson.append(endYear);
    try {
        ctx = new InitialContext();
        con = ((DataSource) ctx.lookup("java:comp/env/jdbc/bsn")).getConnection();

        ps = con.prepareStatement("SELECT * FROM SCHOOL_ACHIEVEMENT WHERE NAME = ?");
        ps.setString(1, name);
        rs = ps.executeQuery();

        resultJson.append(",\"error\":false");
        if (!rs.next()) {
            resultJson.append(",\"result\":null}");
        } else {
            resultJson.append(",\"result\":{");

            resultJson.append("\"category\":");
            try {
                String result = rs.getString("CAT");
                resultJson.append("\"");
                resultJson.append(result);
                resultJson.append("\"");
            } catch (SQLException e) {
                resultJson.append("null");
            }

            resultJson.append(",\"type\":");
            try {
                String result = rs.getString("TYPE");
                resultJson.append("\"");
                resultJson.append(result);
                resultJson.append("\"");
            } catch (SQLException e) {
                resultJson.append("null");
            }

            resultJson.append(",\"addressGu\":");
            try {
                String result = rs.getString("GU");
                resultJson.append("\"");
                resultJson.append(result);
                resultJson.append("\"");
            } catch (SQLException e) {
                resultJson.append("null");
            }

            resultJson.append(",\"addressDong\":");
            try {
                String result = rs.getString("DONG");
                resultJson.append("\"");
                resultJson.append(result);
                resultJson.append("\"");
            } catch (SQLException e) {
                resultJson.append("null");
            }


            resultJson.append(",\"yearCount\":");
            resultJson.append(endYear - startYear + 1);
            resultJson.append(",\"year\":[");
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
                    String result = formatter.format(rs.getFloat("K" + Integer.toString(year)) * 100);
                    resultJson.append(result);
                } catch (SQLException e) {
                    resultJson.append("null");
                } finally {
                    resultJson.append(",");
                }
            }
            try {
                String result = formatter.format(rs.getFloat("K" + Integer.toString(endYear)) * 100);
                resultJson.append(result);
            } catch (SQLException e) {
                resultJson.append("null");
            }
            resultJson.append("],");
            resultJson.append("\"math\":[");
            for (int year = startYear; year < endYear; ++year) {
                try {
                    String result = formatter.format(rs.getFloat("M" + Integer.toString(year)) * 100);
                    resultJson.append(result);
                } catch (SQLException e) {
                    resultJson.append("null");
                } finally {
                    resultJson.append(",");
                }
            }
            try {
                String result = formatter.format(rs.getFloat("M" + Integer.toString(endYear)) * 100);
                resultJson.append(result);
            } catch (SQLException e) {
                resultJson.append("null");
            }
            resultJson.append("],");
            resultJson.append("\"english\":[");
            for (int year = startYear; year < endYear; ++year) {
                try {
                    String result = formatter.format(rs.getFloat("E" + Integer.toString(year)) * 100);
                    resultJson.append(result);
                } catch (SQLException e) {
                    resultJson.append("null");
                } finally {
                    resultJson.append(",");
                }
            }
            try {
                String result = formatter.format(rs.getFloat("E" + Integer.toString(endYear)) * 100);
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
