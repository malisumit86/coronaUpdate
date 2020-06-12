function fetch() {
    $.get("https://api.covid19api.com/summary",
        function(data) {
            // console.log(data['Countries'].length);
            var tbval = document.getElementById("tbval");
            // console.log(data.Global.NewConfirmed);
            document.getElementById("GL").innerHTML = "Global";
            document.getElementById("TC").innerHTML = data.Global.TotalConfirmed;
            document.getElementById("TR").innerHTML = data.Global.TotalRecovered;
            document.getElementById("TD").innerHTML = data.Global.TotalDeaths;
            document.getElementById("NC").innerHTML = data.Global.NewConfirmed;
            document.getElementById("NR").innerHTML = data.Global.NewRecovered;
            document.getElementById("ND").innerHTML = data.Global.NewDeaths;
            // document.getElementById("UP").innerHTML = data['Countries'][1]['Date'];

            for (var j = 0; j < 7; j++) {
                tbval.rows[0].cells[j].style.background = '	rgb(240, 240, 240)';

                tbval.rows[1].cells[j].style.background = '#DC143C';

            }

            for (var i = 2; i < (data['Countries'].length); i++) {
                var x = tbval.insertRow();
                x.insertCell(0);

                tbval.rows[i].cells[0].innerHTML = data['Countries'][i - 2]['Country'];
                tbval.rows[i].cells[0].style.background = '	#800080';
                tbval.rows[i].cells[0].style.color = '#fff';

                x.insertCell(1);
                tbval.rows[i].cells[1].innerHTML = data['Countries'][i - 2]['TotalConfirmed'];
                tbval.rows[i].cells[1].style.background = '#4bb7d8';

                x.insertCell(2);
                tbval.rows[i].cells[2].innerHTML = data['Countries'][i - 2]['TotalRecovered'];
                tbval.rows[i].cells[2].style.background = '	#32CD32';

                x.insertCell(3);
                tbval.rows[i].cells[3].innerHTML = data['Countries'][i - 2]['TotalDeaths'];
                tbval.rows[i].cells[3].style.background = '#FF6347';

                x.insertCell(4);
                tbval.rows[i].cells[4].innerHTML = data['Countries'][i - 2]['NewConfirmed'];
                tbval.rows[i].cells[4].style.background = '#4bb7d8';

                x.insertCell(5);
                tbval.rows[i].cells[5].innerHTML = data['Countries'][i - 2]['NewRecovered'];
                tbval.rows[i].cells[5].style.background = '	#32CD32';

                x.insertCell(6);
                tbval.rows[i].cells[6].innerHTML = data['Countries'][i - 2]['NewDeaths'];
                tbval.rows[i].cells[6].style.background = '#FF6347';

                // x.insertCell(7);
                // tbval.rows[i].cells[7].innerHTML = data['Countries'][i - 2]['Date'];
                // tbval.rows[i].cells[7].style.background = '	#D2691E';
            }
        }
    );
}