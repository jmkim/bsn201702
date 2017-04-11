<%--
  Created by IntelliJ IDEA.
  User: jmkim
  Date: 2/13/17
  Time: 7:48 PM
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         import="java.sql.*, javax.naming.*, javax.sql.*, java.text.DecimalFormat, java.util.UUID" %>
<%!
    private static DecimalFormat formatter = new DecimalFormat("00.00");

    private final String page_title = "2017 부산 학업성취도 지도";
    private final String page_title_no_wrap = "2017 부산 학업성취도 지도"; // 문장이 가로폭보다 길 때 끊는 부분(<wbr>) 포함
    private final int yearRangeStart = 2014;
    private final int yearRangeEnd = 2016;

    class ErrorHtml {
        String key;
        StringBuilder html;
        StringBuilder console;

        ErrorHtml(Exception e) {
            key = UUID.randomUUID().toString();

            console = new StringBuilder();
            console.append("ERROR:\n");
            console.append("\tLOG_ID: ");
            console.append(key);
            console.append("\n\t");
            console.append(e.toString());
            console.append("\n");

            html = new StringBuilder();
            html.append("    <section class=\"text-center\">\n");
            html.append("        <h5><span class=\"text-danger\">이런! 서버에 오류가 발생했어요…</span></h5>\n");
            html.append("        <p>죄송합니다!\n");
            html.append("            <br>빠르게 고칠 수 있도록 <a\n");
            html.append("                href=\"mailto:jmkim@pukyong.ac.kr?Subject=%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C%20%EC%A4%91%C2%B7%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90%20%ED%95%99%EC%97%85%EC%84%B1%EC%B7%A8%EB%8F%84%20%EC%A1%B0%ED%9A%8C%20%EC%98%A4%EB%A5%98%20%EB%B3%B4%EA%B3%A0&body=LOG%20ID%3A%20");
            html.append(key);
            html.append("\">관리자에게\n");
            html.append("        메일을 보내주세요</a>.\n");
            html.append("            <br>\n");
            html.append("            <small>LOG ID: <span class=\"text-monospace\">");
            html.append(key);
            html.append("</span></small>\n");
            html.append("        </p>\n");
            html.append("    </section>\n");
        }

        public String print() {
            System.err.print(console.toString());
            return (html.toString());
        }

        @Override
        public String toString() {
            return (console.toString());
        }
    }
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="<%= page_title %>">
    <meta name="keywords" content="부산,중학교,고등학교,학업성취도">
    <meta name="author"
          content="Ha-Joo Song <hajoosong@pknu.ac.kr>, Jongmin Kim <jmkim@pukyong.ac.kr>, Ho-Jun Kim <wlrhkvlf23@gmail.com>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="IE=edge">

    <title><%= page_title %>
    </title>

    <link rel="stylesheet" href="./css/bootstrap.min.css">
    <link rel="stylesheet" href="./css/tether.min.css">
    <link rel="stylesheet" href="css/bsn201702.css">
    <link rel="stylesheet" href="./css/dynomap.css">
</head>

<body>
<!-- 컨텐츠의 시작 -->
<div class="container">
    <!-- Header의 시작 -->
    <header>
        <h3><a class="text-primary text-no-wrap" href="./"><%= page_title_no_wrap %>
        </a></h3>
    </header>
    <!-- Header의 끝 -->

    <!-- Body의 시작 -->
    <section>
        <div class="row">
            <div class="col-sm-12 col-lg-6">
                <!-- Dynomap 시작 -->
                <div class="dynomap"></div>
                <!-- Dynomap 끝 -->
            </div>

            <div class="col-sm-12 col-lg-6">
                <!-- 구 정보의 시작 -->
                <div class="gis-gu-info"></div>
                <!-- 구 정보의 끝 -->
            </div>

            <!-- 학교 정보의 시작 -->
            <div id="school-info" class="col-12 gis-school-info"></div>
            <!-- 학교 정보의 끝 -->
        </div>
    </section>
    <!-- Body의 끝 -->

    <!-- Footer의 시작 -->
    <footer class="text-muted text-center">
        <p>Developed by <a class="text-muted" href="mailto:jmkim@pukyong.ac.kr">Jongmin Kim</a> &amp; <a
                class="text-muted" href="mailto:wlrhkvlf23@gmail.com">Ho-Jun Kim</a></p>
        <p><a class="text-muted" href="http://db.pknu.ac.kr">Information &amp; Database Systems Laboratory</a><br><a
                class="text-muted" href="http://www.pknu.ac.kr">Pukyong National University</a></p>
    </footer>
    <!-- Footer의 끝 -->
</div>
<!-- 컨텐츠의 끝 -->

<!--script type="text/javascript" src="./js/jquery-3.1.1.min.js"></script-->
<script type="text/javascript" src="./js/jquery-2.2.4.min.js"></script>
<script type="text/javascript" src="./js/tether.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>
<script type="text/javascript" src="./js/dynomap.js"></script>
<script type="text/javascript" src="js/bsn201702.js"></script>
<script type="text/javascript" src="./js/google-charts.js"></script>
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-91494408-1', 'auto');
    ga('send', 'pageview');
</script>
</body>
</html>
