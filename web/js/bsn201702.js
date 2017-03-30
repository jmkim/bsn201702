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
                'area': '182, 204,149, 205,135, 213,130, 222,123, 220,117, 211,111, 209,111, 213,117, 223,99, 221,87, 225,75, 239,75, 246,81, 254,92, 277,99, 283,91, 285,61, 280,39, 293,23, 294,10, 290,4, 294,20, 323,42, 329,44, 340,49, 347,55, 352,53, 356,43, 361,47, 364,43, 371,34, 371,33, 384,3, 408,3, 451,36, 508,47, 514,57,501,69, 475,71, 423,76, 415,114, 419,130, 403,133, 373,138, 367,139, 353,203, 190,201, 209,192, 228,192, 239,178, 245,171, 255,170, 296,160, 333,153, 344,146, 352',
                'title': '강서구',
                'overImg': './img/busanmap/busan_gangseogu.png',
                'downImg': './img/busanmap/busan_gangseogu.png',
                'clickedImg': './img/busanmap/busan_gangseogu.png',
                'visitedImg': ''
            },
            {
                'area': '232, 143,214, 162,203, 190,201, 209,192, 228,192, 239,205, 248,228, 249,242, 238,249, 238,250, 233,259, 231,260, 214,250, 148,242, 162,252, 173,252, 181,258, 183,252, 197,266, 202,267, 207',
                'title': '북구',
                'overImg': './img/busanmap/busan_bukgu.png',
                'downImg': './img/busanmap/busan_bukgu.png',
                'clickedImg': './img/busanmap/busan_bukgu.png',
                'visitedImg': ''
            },
            {
                'area': '178, 245,171, 255,170, 296,160, 333,173, 334,183, 341,188, 341,195, 336,212, 330,213, 325,211, 314,214, 312,192, 239,205, 248,228, 249,228, 258,219, 270,219, 281,226, 292,225, 307,221, 311',
                'title': '사상구',
                'overImg': './img/busanmap/busan_sasanggu.png',
                'downImg': './img/busanmap/busan_sasanggu.png',
                'clickedImg': './img/busanmap/busan_sasanggu.png',
                'visitedImg': ''
            },
            {
                'area': '153, 344,146, 352,148, 360,146, 368,146, 379,156, 371,156, 359,161, 353,167, 354,168, 365,163, 373,163, 406,167, 417,176, 426,181, 431,178, 443,188, 431,185, 428,195, 427,196, 421,187, 419,188, 411,198, 408,201, 414,204, 426,207, 429,213, 420,212, 415,206, 410,206, 386,211, 377,216, 380,160, 333,173, 334,183, 341,188, 341,195, 336,212, 330,212, 344,219, 350,218, 358,224, 365,226, 371,220, 378,224, 386,216, 384',
                'title': '사하구',
                'overImg': './img/busanmap/busan_sahagu.png',
                'downImg': './img/busanmap/busan_sahagu.png',
                'clickedImg': './img/busanmap/busan_sahagu.png',
                'visitedImg': ''
            },
            {
                'area': '291, 109,278, 125,262, 116,250, 148,242, 162,252, 173,252, 181,258, 183,252, 197,266, 202,267, 207,283, 202,295, 216,304, 217,314,224,319, 222,330, 215,323, 204,338, 198,312, 104,338, 118,333, 126,335, 138,325, 149,337,163,352, 175',
                'title': '금정구',
                'overImg': './img/busanmap/busan_geumjeonggu.png',
                'downImg': './img/busanmap/busan_geumjeonggu.png',
                'clickedImg': './img/busanmap/busan_geumjeonggu.png',
                'visitedImg': ''
            },
            {
                'area': '255, 244,273, 244,287, 236,299, 244,317, 245,249, 238,250, 233,259, 231,260, 214,267, 207,283, 202,295, 216,304, 217,314,224,319, 222,328,241,325, 260',
                'title': '동래구',
                'overImg': './img/busanmap/busan_dongnaegu.png',
                'downImg': './img/busanmap/busan_dongnaegu.png',
                'clickedImg': './img/busanmap/busan_dongnaegu.png',
                'visitedImg': ''
            },
            {
                'area': '258, 254,268, 257,275, 264,288, 264,287, 276,291, 288,303, 283,305, 268,307, 259,318, 263,325, 260,255, 244,273, 244,287, 236,299, 244,317, 245',
                'title': '연제구',
                'overImg': './img/busanmap/busan_yeonjegu.png',
                'downImg': './img/busanmap/busan_yeonjegu.png',
                'clickedImg': './img/busanmap/busan_yeonjegu.png',
                'visitedImg': ''
            },
            {
                'area': '228, 258,219, 270,219, 281,226, 292,225, 307,221, 311,224, 317,231, 315,234, 317,240, 317,249, 303,256, 302,266,309,228, 249,242, 238,249, 238,255, 244,258, 254,268, 257,275, 264,288, 264,287, 276,291, 288,285, 299,276, 301,274, 309',
                'title': '부산진구',
                'overImg': './img/busanmap/busan_busanjingu.png',
                'downImg': './img/busanmap/busan_busanjingu.png',
                'clickedImg': './img/busanmap/busan_busanjingu.png',
                'visitedImg': ''
            },
            {
                'area': '212, 344,219, 350,218, 358,224, 365,226, 371,220, 378,224, 386,216, 384,221, 416,224, 419,233, 410,233, 400,227, 391,229, 388,237, 388,239, 385,239, 366,231, 355,236, 346,221, 311,224, 317,231, 315,234, 317,212, 330,213, 325,211, 314,214, 312,232, 332,237, 338',
                'title': '서구',
                'overImg': './img/busanmap/busan_seogu.png',
                'downImg': './img/busanmap/busan_seogu.png',
                'clickedImg': './img/busanmap/busan_seogu.png',
                'visitedImg': ''
            },
            {
                'area': '232, 332,237, 338,246, 340,252, 345,261, 342,260, 329,265, 335,270, 335,270, 327,274, 309,275, 326,234, 317,240, 317,249, 303,256, 302,266,309',
                'title': '동구',
                'overImg': './img/busanmap/busan_donggu.png',
                'downImg': './img/busanmap/busan_donggu.png',
                'clickedImg': './img/busanmap/busan_donggu.png',
                'visitedImg': ''
            },
            {
                'area': '246, 366,250, 363,251, 355,257, 354,253, 350,237, 338,246, 340,252, 345,239, 366,231, 355,236, 346',
                'title': '중구',
                'overImg': './img/busanmap/busan_junggu.png',
                'downImg': './img/busanmap/busan_junggu.png',
                'clickedImg': './img/busanmap/busan_junggu.png',
                'visitedImg': ''
            },
            {
                'area': '336, 34,328, 79,312, 104,338, 118,333, 126,335, 138,325, 149,337,163,352, 175,361, 178,364, 192,378, 207,368, 220,372, 231,391, 233,394, 248,406, 234,418, 253,433, 252,464, 95,489, 75,502, 87,506, 71,484, 55,488, 40,465, 4,424, 14,400, 3,396, 40,374, 48',
                'title': '기장군',
                'overImg': './img/busanmap/busan_gijanggun.png',
                'downImg': './img/busanmap/busan_gijanggun.png',
                'clickedImg': './img/busanmap/busan_gijanggun.png',
                'visitedImg': ''
            },
            {
                'area': '328,241,325, 260,337, 280,348, 291,363, 291,375, 284,389, 386,403, 282,407, 264,352, 175,361, 178,364, 192,378, 207,368, 220,372, 231,391, 233,394, 248,406, 234,319, 222,330, 215,323, 204,338, 198',
                'title': '해운대구',
                'overImg': './img/busanmap/busan_haeundaegu.png',
                'downImg': './img/busanmap/busan_haeundaegu.png',
                'clickedImg': './img/busanmap/busan_haeundaegu.png',
                'visitedImg': ''
            },
            {
                'area': '246,204,234,183,221,183,221,193,215,202,222,206,226,220,235,224,241,230,239,222,235,218,240,216,238,211',
                'title': '수영구',
                'overImg': './img/busanmap/busan_suyeonggu.png',
                'downImg': './img/busanmap/busan_suyeonggu.png',
                'clickedImg': './img/busanmap/busan_suyeonggu.png',
                'visitedImg': ''
            },
            {
                'area': '224,220,223,212,221,205,209,203,205,213,197,211,196,238,198,250,211,251,213,257,226,258,230,252,237,256,243,255,245,243,243,234,236,223',
                'title': '남구',
                'overImg': './img/busanmap/busan_namgu.png',
                'downImg': './img/busanmap/busan_namgu.png',
                'clickedImg': './img/busanmap/busan_namgu.png',
                'visitedImg': ''
            },
            {
                'area': '245, 375,250, 383,264, 389,273, 397,284, 406,290, 407,297, 419,303, 421,309, 408,307, 402,301, 398,294, 396,295, 392,305, 392,307, 383,302, 387,294, 388,294, 381,284, 365,266, 356,259, 362,246, 366,250, 363',
                'title': '영도구',
                'overImg': './img/busanmap/busan_yeongdogu.png',
                'downImg': './img/busanmap/busan_yeongdogu.png',
                'clickedImg': './img/busanmap/busan_yeongdogu.png',
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
                    output += '                        <h5>중학생 수의 변동</h5>\n';
                    output += '                            <div class="row">\n';
                    output += '                                <div class="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9">\n';
                    output += '                                <table class="table">\n';
                    output += '                                    <tbody>\n';

                    output += '                                        <tr>\n';
                    output += '                                            <th>2005</th>\n';
                    output += '                                            <th>2015</th>\n';
                    output += '                                            <th>변동률</th>\n';
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
                output += '                        <h5>보통 학력 이상 학생의 비율 (단위: %)</h5>\n';
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
                    ['연도', '부산 소재 ' + schoolCount + '개 학교의 평균', {role: 'annotation'}, schoolName, {role: 'annotation'}],
                    ['2014', avgKorean[0], avgKorean[0], scoreKorean[0], scoreKorean[0]],
                    ['2015', avgKorean[1], avgKorean[1], scoreKorean[1], scoreKorean[1]],
                    ['2016', avgKorean[2], avgKorean[2], scoreKorean[2], scoreKorean[2]]
                ]);

                var data_math = google.visualization.arrayToDataTable([
                    ['연도', '부산 소재 ' + schoolCount + '개 학교의 평균', {role: 'annotation'}, schoolName, {role: 'annotation'}],
                    ['2014', avgMath[0], avgMath[0], scoreMath[0], scoreMath[0]],
                    ['2015', avgMath[1], avgMath[1], scoreMath[1], scoreMath[1]],
                    ['2016', avgMath[2], avgMath[2], scoreMath[2], scoreMath[2]]
                ]);

                var data_eng = google.visualization.arrayToDataTable([
                    ['연도', '부산 소재 ' + schoolCount + '개 학교의 평균', {role: 'annotation'}, schoolName, {role: 'annotation'}],
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

