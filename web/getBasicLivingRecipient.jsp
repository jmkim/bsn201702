<%--
  Created by IntelliJ IDEA.
  User: jmkim
  Date: 2/15/17
  Time: 6:15 PM
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

    PreparedStatement basicLivingRecipientPs = null;
    ResultSet basicLivingRecipientRs = null;

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

        basicLivingRecipientPs = con.prepareStatement("SELECT * FROM BASIC_LIVING_RECIPIENT WHERE GU = ? ORDER BY DONG");
        basicLivingRecipientPs.setString(1, addressGu);
        basicLivingRecipientRs = basicLivingRecipientPs.executeQuery();

        resultJson.append(",\"error\":false");
        boolean next = basicLivingRecipientRs.next();
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

            resultJson.append(",\"basicLivingRecipient\":[");

            while (next) {
                try {
                    String result = basicLivingRecipientRs.getString("DONG");

                    resultJson.append("{\"addressDong\":\"");
                    resultJson.append(result);
                    resultJson.append("\"");

                    resultJson.append(",\"values\":[");

                    for (int year = startYear; year < endYear; ++year) {
                        try {
                            int value = basicLivingRecipientRs.getInt(Integer.toString(year));
                            resultJson.append(value);
                        } catch (SQLException e) {
                            resultJson.append("null");
                        } finally {
                            resultJson.append(",");
                        }
                    }
                    try {
                        int value = basicLivingRecipientRs.getInt(Integer.toString(endYear));
                        resultJson.append(value);
                    } catch (SQLException e) {
                        resultJson.append("null");
                    }

                    resultJson.append("]");

                    resultJson.append(",\"ratios\":[");

                    for (int year = startYear; year < endYear; ++year) {
                        try {
                            String ratio = formatter.format(basicLivingRecipientRs.getFloat(Integer.toString(year) + "PCT") * 100);
                            resultJson.append(ratio);
                        } catch (SQLException e) {
                            resultJson.append("null");
                        } finally {
                            resultJson.append(",");
                        }
                    }
                    try {
                        String ratio = formatter.format(basicLivingRecipientRs.getFloat(Integer.toString(endYear) + "PCT") * 100);
                        resultJson.append(ratio);
                    } catch (SQLException e) {
                        resultJson.append("null");
                    }

                    resultJson.append("]");

                    resultJson.append("}");
                } catch (SQLException e) {
                    resultJson.append("null");
                }
                resultJson.append((next = basicLivingRecipientRs.next()) ? "," : "");
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
            basicLivingRecipientRs.close();
        } catch (Exception e) {
        }

        try {
            basicLivingRecipientPs.close();
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
