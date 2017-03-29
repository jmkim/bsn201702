Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

$(document).ready(function () {
    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages': ['corechart']});

    $('.dynomap').dynomap({
        'background': {
            'image': './img/busanmap/busan_background.png',
            'title': ''
        },
        'hotSpots': [
            {
                'area': '147,139,131,148,103,147,96,155,84,151,82,157,67,157,63,164,57,166,58,177,64,182,66,188,51,198,41,201,37,209,26,209,8,207,8,217,13,224,23,230,32,231,39,248,26,257,26,270,2,286,2,315,25,358,43,358,52,336,55,292,85,294,97,285,103,249,120,232,120,209,124,201,123,187,147,161',
                'title': '강서구',
                'overImg': './img/busanmap/busan_gangseogu.gif',
                'downImg': './img/busanmap/busan_gangseogu.gif',
                'clickedImg': './img/busanmap/busan_gangseogu.gif',
                'visitedImg': ''
            },
            {
                'area': '147,139,149,160,138,173,162,180,180,170,196,147,192,144,185,142,184,128,178,115,184,106,184,99,178,99,172,101,166,97,157,103',
                'title': '북구',
                'overImg': './img/busanmap/busan_bukgu.gif',
                'downImg': './img/busanmap/busan_bukgu.gif',
                'clickedImg': './img/busanmap/busan_bukgu.gif',
                'visitedImg': ''
            },
            {
                'area': '162,180,140,173,125,188,125,200,121,206,122,233,135,244,141,235,150,234,153,222,162,222,164,210,157,199,160,190,167,182',
                'title': '사상구',
                'overImg': './img/busanmap/busan_sasanggu.gif',
                'downImg': './img/busanmap/busan_sasanggu.gif',
                'clickedImg': './img/busanmap/busan_sasanggu.gif',
                'visitedImg': ''
            },
            {
                'area': '134,241,141,234,150,235,154,243,158,249,157,256,164,257,162,264,162,273,165,287,166,303,160,300,160,292,157,283,157,273,151,283,153,308,146,300,140,292,140,303,139,313,132,317,126,313,128,306,123,299,120,290,119,273,121,260,109,270,99,269,103,248,109,241,120,233',
                'title': '사하구',
                'overImg': './img/busanmap/busan_sahagu.gif',
                'downImg': './img/busanmap/busan_sahagu.gif',
                'clickedImg': './img/busanmap/busan_sahagu.gif',
                'visitedImg': ''
            },
            {
                'area': '224,75,209,78,206,84,198,89,193,85,184,95,184,106,178,115,185,130,185,143,193,143,195,148,204,146,215,154,223,155,230,156,237,152,236,143,248,138,251,127,247,115,236,117,233,111,239,108,237,100,237,91,241,85,239,80',
                'title': '금정구',
                'overImg': './img/busanmap/busan_geumjeonggu.gif',
                'downImg': './img/busanmap/busan_geumjeonggu.gif',
                'clickedImg': './img/busanmap/busan_geumjeonggu.gif',
                'visitedImg': ''
            },
            {
                'area': '193,147,181,170,192,177,200,177,201,171,213,171,221,177,234,174,235,167,231,162,230,155,215,155,206,146',
                'title': '동래구',
                'overImg': './img/busanmap/busan_dongnaegu.gif',
                'downImg': './img/busanmap/busan_dongnaegu.gif',
                'clickedImg': './img/busanmap/busan_dongnaegu.gif',
                'visitedImg': ''
            },
            {
                'area': '181,169,191,176,200,176,199,172,214,171,221,179,222,188,217,204,212,203,209,193,196,188,189,187,183,179',
                'title': '연제구',
                'overImg': './img/busanmap/busan_yeonjegu.gif',
                'downImg': './img/busanmap/busan_yeonjegu.gif',
                'clickedImg': './img/busanmap/busan_yeonjegu.gif',
                'visitedImg': ''
            },
            {
                'area': '211,203,209,193,194,189,184,180,181,170,162,180,167,183,159,191,157,200,163,208,160,225,166,226,172,225,177,221,179,216,197,221,196,212,206,213',
                'title': '부산진구',
                'overImg': './img/busanmap/busan_busanjingu.gif',
                'downImg': './img/busanmap/busan_busanjingu.gif',
                'clickedImg': './img/busanmap/busan_busanjingu.gif',
                'visitedImg': ''
            },
            {
                'area': '153,224,150,230,153,235,153,243,157,249,159,257,165,257,164,249,172,244,171,226,165,226,157,221',
                'title': '서구',
                'overImg': './img/busanmap/busan_seogu.gif',
                'downImg': './img/busanmap/busan_seogu.gif',
                'clickedImg': './img/busanmap/busan_seogu.gif',
                'visitedImg': ''
            },
            {
                'area': '171,226,172,243,183,248,197,239,196,220,178,216,177,222',
                'title': '동구',
                'overImg': './img/busanmap/busan_donggu.gif',
                'downImg': './img/busanmap/busan_donggu.gif',
                'clickedImg': './img/busanmap/busan_donggu.gif',
                'visitedImg': ''
            },
            {
                'area': '173,243,164,250,165,260,161,266,166,304,169,300,171,285,172,279,174,267,188,255,184,248',
                'title': '중구',
                'overImg': './img/busanmap/busan_junggu.gif',
                'downImg': './img/busanmap/busan_junggu.gif',
                'clickedImg': './img/busanmap/busan_junggu.gif',
                'visitedImg': ''
            },
            {
                'area': '273,34,253,24,241,25,242,37,235,44,238,52,231,56,226,62,224,75,239,81,237,89,238,106,232,112,237,116,247,115,251,128,257,124,270,145,261,160,269,168,277,166,282,178,288,174,291,166,298,167,296,185,325,187,326,172,318,156,331,132,334,95,339,76,337,69,345,64,350,70,359,71,365,68,370,59,361,44,352,44,349,40,351,32,346,29,351,20,334,0,326,1,323,4,318,2,317,8,302,8,288,2,283,6,290,13,288,23',
                'title': '기장군',
                'overImg': './img/busanmap/busan_gijanggun.gif',
                'downImg': './img/busanmap/busan_gijanggun.gif',
                'clickedImg': './img/busanmap/busan_gijanggun.gif',
                'visitedImg': ''
            },
            {
                'area': '259,125,250,126,248,137,236,144,238,151,231,156,231,164,236,174,221,177,221,184,235,183,241,196,248,206,260,209,268,206,289,202,297,192,297,167,289,166,284,176,277,167,267,166,261,159,271,144',
                'title': '해운대구',
                'overImg': './img/busanmap/busan_haeundaegu.gif',
                'downImg': './img/busanmap/busan_haeundaegu.gif',
                'clickedImg': './img/busanmap/busan_haeundaegu.gif',
                'visitedImg': ''
            },
            {
                'area': '246,204,234,183,221,183,221,193,215,202,222,206,226,220,235,224,241,230,239,222,235,218,240,216,238,211',
                'title': '수영구',
                'overImg': './img/busanmap/busan_suyeonggu.gif',
                'downImg': './img/busanmap/busan_suyeonggu.gif',
                'clickedImg': './img/busanmap/busan_suyeonggu.gif',
                'visitedImg': ''
            },
            {
                'area': '224,220,223,212,221,205,209,203,205,213,197,211,196,238,198,250,211,251,213,257,226,258,230,252,237,256,243,255,245,243,243,234,236,223',
                'title': '남구',
                'overImg': './img/busanmap/busan_namgu.gif',
                'downImg': './img/busanmap/busan_namgu.gif',
                'clickedImg': './img/busanmap/busan_namgu.gif',
                'visitedImg': ''
            },
            {
                'area': '174,266,181,258,191,253,198,253,207,261,208,269,217,283,224,288,223,301,210,300,209,290,201,292,202,285,192,285',
                'title': '영도구',
                'overImg': './img/busanmap/busan_yeongdogu.gif',
                'downImg': './img/busanmap/busan_yeongdogu.gif',
                'clickedImg': './img/busanmap/busan_yeongdogu.gif',
                'visitedImg': ''
            }
        ],
        // Click event callback
        clicked: function ($this, index) {
            var title = [
                '강서구',
                '북구',
                '사상구',
                '사하구',
                '금정구',
                '동래구',
                '연제구',
                '부산진구',
                '서구',
                '동구',
                '중구',
                '기장군',
                '해운대구',
                '수영구',
                '남구',
                '영도구'
            ];

            //alert('title['+index+']=' + title[index] + '\n');
            gis_print_gu_info(title[index]);
        }
    });

    function gis_print_gu_info(addressGu) {
        var schoolListObject;
        var schoolListJsonUri = 'getSchoolList.jsp?addressGu=' + encodeURIComponent(addressGu);

        var schoolListJson = $.get(schoolListJsonUri, function (res) {
            schoolListObject = res;
        }, 'json');

        var blrObject;
        var blrJsonUri = 'getBasicLivingRecipient.jsp?addressGu=' + encodeURIComponent(addressGu) + '&start=2011&end=2015';

        var blrJson = $.get(blrJsonUri, function (res) {
            blrObject = res;
        }, 'json');

        var midTransObject;
        var midTransJsonUri = 'getMidStudentTransition.jsp?addressGu=' + encodeURIComponent(addressGu) + '&start=2005&end=2015';

        var midTransJson = $.get(midTransJsonUri, function (res) {
            midTransObject = res;
        }, 'json');

        schoolListJson.always(function () {
            blrJson.always(function () {
                midTransJson.always(function () {
                    var output = '\n';
                    output += '                    <section>\n';
                    output += '                        <h3>' + addressGu + '</h3>\n';
                    output += '                    </section>\n';
                    //$('.gis-gu-info').html(JSON.stringify(res));

                    var blr = blrObject.result.basicLivingRecipient;
                    var blr2011 = blr[0].values[0];
                    var blr2015 = blr[0].values[4];
                    var blr2011pct = blr[0].ratios[0];
                    var blr2015pct = blr[0].ratios[4];

                    output += '                    <section>\n';
                    output += '                        <h5>기초생활수급자 · 차상위계층</h5>\n';
                    output += '                        <div class="row">\n';
                    output += '                            <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">\n';
                    output += '                                <table class="table">\n';
                    output += '                                    <tbody>\n';

                    output += '                                        <tr>\n';
                    output += '                                            <th>2011</th>\n';
                    output += '                                            <th>2015</th>\n';
                    output += '                                        </tr>\n';

                    output += '                                        <tr>\n';
                    output += '                                            <td>' + blr2011.formatMoney(0, '.', ',') + '명 (' + blr2011pct + '%)</td>\n';
                    output += '                                            <td>' + blr2015.formatMoney(0, '.', ',') + '명 (' + blr2015pct + '%)</td>\n';
                    output += '                                        </tr>\n';

                    output += '                                    </tbody>\n';
                    output += '                                </table>\n';
                    output += '                                <div class="text-right">\n';
                    output += '                                    <small class="text-muted">괄호 안의 값은 ' + addressGu + ' 해당 연도 인구 수에 대한 비율</small>\n';
                    output += '                                </div>\n';
                    output += '                            </div>\n';
                    output += '                        </div>\n';
                    output += '                    </section>\n';

                    var midTrans = midTransObject.result;
                    var midTrans2005 = midTrans.values[0];
                    var midTrans2015 = midTrans.values[10];
                    var midTransDiff = midTrans2015 - midTrans2005;
                    var midTransDiffPct = midTransDiff / midTrans2005 * 100;

                    output += '                    <section>\n';
                    output += '                        <h5>중학생 수 변화</h5>\n';
                    output += '                            <div class="row">\n';
                    output += '                                <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">\n';
                    output += '                                <table class="table">\n';
                    output += '                                    <tbody>\n';

                    output += '                                        <tr>\n';
                    output += '                                            <th>2005</th>\n';
                    output += '                                            <th>2015</th>\n';
                    output += '                                            <th><span class="sr-only">2005년과 2015년의 변화율</span></th>\n';
                    output += '                                        </tr>\n';

                    output += '                                        <tr>\n';
                    output += '                                            <td>' + midTrans2005.formatMoney(0, '.', ',') + '명</td>\n';
                    output += '                                            <td>' + midTrans2015.formatMoney(0, '.', ',') + '명</td>\n';
                    output += '                                            <td>';// + midTransDiff.formatMoney(0, '.', ',') + '명 ';
                    //output += '<span class="'
                    //output += (midTransDiffPct > 100.00) ? "text-primary" : "text-danger";
                    //output += '">';
                    output += (midTransDiffPct > 0.00) ? '+' : '';
                    output += midTransDiffPct.formatMoney(2, '.', ',');
                    output += '%';
                    //output += '</span>\n';
                    output += '</td>\n';
                    output += '                                        </tr>\n';

                    output += '                                    </tbody>\n';
                    output += '                                </table>\n';
                    output += '                            </div>\n';
                    output += '                        </div>\n';
                    output += '                    </section>\n';

                    var schoolCount =
                        schoolListObject.result.middleSchool.length +
                        schoolListObject.result.highSchool.length;

                    output += '                    <section>\n';
                    output += '                        <h5>소재 중학교</h5>\n';
                    for (var i = 0; i < schoolListObject.result.middleSchool.length; ++i) {
                        output += (i > 0) ? ', ' : '                        ';
                        output += '<a class="gis-btn-school-info text-no-wrap text-primary">';
                        output += schoolListObject.result.middleSchool[i];
                        output += '</a>';
                    }
                    output += '\n                    </section>\n';

                    output += '                    <section>\n';
                    output += '                        <h5>소재 고등학교</h5>\n';
                    for (var i = 0; i < schoolListObject.result.highSchool.length; ++i) {
                        output += (i > 0) ? ', ' : '                        ';
                        output += '<a class="gis-btn-school-info text-no-wrap text-primary">';
                        output += schoolListObject.result.highSchool[i];
                        output += '</a>';
                    }
                    output += '                    </section>\n';
                    output += '                ';

                    $('.gis-gu-info').html(output);
                    $('.gis-school-info').html(''); // Clear gis-school-info result area.
                    $('.gis-btn-school-info').click(gis_print_school_info);
                });
            });
        });
    }

    function gis_print_school_info() {
        var schoolObject;
        var avgObject;

        var schoolName = $(this).text().toString();
        var schoolJsonUri = './getSchoolInfo.jsp?name=' + encodeURIComponent(schoolName) + '&start=2014&end=2016';

        var avgJson = null;
        var schoolJson = $.get(schoolJsonUri, function (res) {
            schoolObject = res;
            var avgScoreUri = './getAvgScore.jsp?type=' + encodeURIComponent(schoolObject.result.type) + '&start=2014&end=2016';
            avgJson = $.get(avgScoreUri, function (res) {
                avgObject = res;
            }, 'json');
        }, 'json');

        schoolJson.always(function () {
            avgJson.always(function () {
                /*
                 $('.gis-school-info').html(JSON.stringify(schoolObject));
                 $('.gis-school-info').append(JSON.stringify(avgObject));
                 */

                var schoolName = schoolObject.name;
                var category = schoolObject.result.category == 'P' ? '공립' : '사립';

                var addressGu = schoolObject.result.addressGu;
                var addressDong = schoolObject.result.addressDong;
                var address = addressGu + ' ' + addressDong;

                var scoreKorean = schoolObject.result.score.korean;
                var scoreMath = schoolObject.result.score.math;
                var scoreEnglish = schoolObject.result.score.english;

                var yearCount = schoolObject.result.yearCount;
                var year = schoolObject.result.year;

                var schoolCount = avgObject.result.schoolCount;
                var avgKorean = avgObject.result.score.korean;
                var avgMath = avgObject.result.score.math;
                var avgEnglish = avgObject.result.score.english;

                var output = '\n';
                output += '                    <section>\n';
                output += '                        <h3>' + schoolName + '<small>(' + category + ', ' + address + ')</small></h3>\n';
                output += '                    </section>\n';

                output += '                    <section>\n';
                output += '                        <h5>보통 학력 이상 학생의 비율</h5>\n';
                output += '                        <div class="row">';
                output += '                            <div class="col-xs-12 col-md-4">';
                output += '                                <div id="chart_div_kor" class="chart"></div\n>';
                output += '                            </div>';
                output += '                            <div class="col-xs-12 col-md-4">';
                output += '                                <div id="chart_div_math" class="chart"></div\n>';
                output += '                            </div>';
                output += '                            <div class="col-xs-12 col-md-4">';
                output += '                                <div id="chart_div_eng" class="chart"></div\n>';
                output += '                            </div>';
                output += '                        </div>';

                /*
                 output += '                        <table class="table">\n';
                 output += '                            <tbody>\n';

                 output += '                                <tr>\n';
                 output += '                                    <th>연도</th>\n';
                 for (var i = yearCount - 1; i >= 0; --i) {
                 output += '                                    <th>' + year[i] + '</th>\n';
                 }
                 output += '                                </tr>\n';

                 output += '                                <tr>\n';
                 output += '                                    <th>국어</th>\n';
                 for (var i = yearCount - 1; i >= 0; --i) {
                 output += '                                    <td>' + scoreKorean[i] + ' (' + avgKorean[i] + ')</td>\n';
                 }
                 output += '                                </tr>\n';

                 output += '                                <tr>\n';
                 output += '                                    <th>수학</th>\n';
                 for (var i = yearCount - 1; i >= 0; --i) {
                 output += '                                    <td>' + scoreMath[i] + ' (' + avgMath[i] + ')</td>\n';
                 }
                 output += '                                </tr>\n';

                 output += '                                <tr>\n';
                 output += '                                    <th>영어</th>\n';
                 for (var i = yearCount - 1; i >= 0; --i) {
                 output += '                                    <td>' + scoreEnglish[i] + ' (' + avgEnglish[i] + ')</td>\n';
                 }
                 output += '                                </tr>\n';

                 output += '                            </tbody>\n';
                 output += '                        </table>\n';
                 output += '                        <div class="text-right">\n';
                 output += '                            <small class="text-muted">단위: %, 괄호 안의 값은 부산광역시에 소재한 ' + schoolCount + '개 학교의 평균</small>\n';
                 output += '                        </div>\n';
                 */

                output += '                    </section>\n';
                output += '                ';

                $('.gis-school-info').html(output);

                // Create the data table.
                var data_kor = google.visualization.arrayToDataTable([
                    ['연도', '평균', {role: 'annotation'}, schoolName, {role: 'annotation'}],
                    ['2014', avgKorean[0], avgKorean[0], scoreKorean[0], scoreKorean[0]],
                    ['2015', avgKorean[1], avgKorean[1], scoreKorean[1], scoreKorean[1]],
                    ['2016', avgKorean[2], avgKorean[2], scoreKorean[2], scoreKorean[2]]
                ]);

                var data_math = google.visualization.arrayToDataTable([
                    ['연도', '평균', {role: 'annotation'}, schoolName, {role: 'annotation'}],
                    ['2014', avgMath[0], avgMath[0], scoreMath[0], scoreMath[0]],
                    ['2015', avgMath[1], avgMath[1], scoreMath[1], scoreMath[1]],
                    ['2016', avgMath[2], avgMath[2], scoreMath[2], scoreMath[2]]
                ]);

                var data_eng = google.visualization.arrayToDataTable([
                    ['연도', '평균', {role: 'annotation'}, schoolName, {role: 'annotation'}],
                    ['2014', avgEnglish[0], avgEnglish[0], scoreEnglish[0], scoreEnglish[0]],
                    ['2015', avgEnglish[1], avgEnglish[1], scoreEnglish[1], scoreEnglish[1]],
                    ['2016', avgEnglish[2], avgEnglish[2], scoreEnglish[2], scoreEnglish[2]]
                ]);

                var options_kor = {
                    title: schoolName + '의 국어 성취도',
                    hAxis: {},
                    vAxis: {
                        title: '보통 학력 이상 학생의 비율 (단위: %)', titleTextStyle: {color: '#333'},
                        maxValue: 100
                    }
                };

                var options_math = {
                    title: schoolName + '의 수학 성취도',
                    hAxis: {},
                    vAxis: {
                        title: '보통 학력 이상 학생의 비율 (단위: %)', titleTextStyle: {color: '#333'},
                        maxValue: 100
                    }
                };

                var options_eng = {
                    title: schoolName + '의 영어 성취도',
                    hAxis: {},
                    vAxis: {
                        title: '보통 학력 이상 학생의 비율 (단위: %)', titleTextStyle: {color: '#333'},
                        maxValue: 100
                    },
                    displayAnnotations: true
                };

                // Instantiate and draw our chart, passing in some options.
                new google.visualization.LineChart(document.getElementById('chart_div_kor')).draw(data_kor, options_kor);
                new google.visualization.LineChart(document.getElementById('chart_div_math')).draw(data_math, options_math);
                new google.visualization.LineChart(document.getElementById('chart_div_eng')).draw(data_eng, options_eng);
            }, 'json');
        })
    }
});

