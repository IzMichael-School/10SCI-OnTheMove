var pages = ['start', 'data', 'subject'];

loadPages(pages)

async function loadPages(arr) {
    arr.forEach(page => {
        fetch('/pages/' + page + '.html')
            .then(data => data.text())
            .then(html => process(html, page))
    });
    function process(data, id) {
        var newhtml = '<div id="' + id + '"';
        var html = data.replace('<div', newhtml);
        document.getElementById('pages').innerHTML += html;
    }
    await sleep(0.25)
    show('start')
}

function show(el) {
    hideAll()
    document.getElementById(el).classList.remove('hide')
    document.getElementById(el + 'Btn').classList.add('selected')
}

function hideAll() {
    pages.forEach(page => {
        document.getElementById(page).classList.add('hide');
        document.getElementById(page + 'Btn').classList.remove('selected');
    });
}

function splitString(string, search) {
    let isValid = string !== '' // Disallow Empty
        &&
        typeof string === 'string' // Allow strings
        ||
        typeof string === 'number' // Allow numbers

    if (!isValid) {
        return false
    } // Failed
    else {
        string += ''
    } // Ensure string type

    // Search
    let searchIndex = string.indexOf(search)
    let isBlank = ('' + search) === ''
    let isFound = searchIndex !== -1
    let noSplit = searchIndex === 0
    let parts = []

    // Remains whole
    if (!isFound || noSplit || isBlank) {
        parts[0] = string
    }
    // Requires splitting
    else {
        parts[0] = string.substring(0, searchIndex)
        parts[1] = string.substring(searchIndex).slice(0, 1)
        parts[2] = string.substring(searchIndex).slice(0, -1)
    }

    return parts
}

function write(destination, message, speed, type) {
    var i = 0;
    var interval = setInterval(function () {
        if (!type == '') {
            document.getElementById(destination).innerHTML = document.getElementById(destination).innerHTML.slice(0, -1);
        }
        document.getElementById(destination).innerHTML += message.charAt(i) + type;
        i++;
        if (i > message.length) {
            if (!type == '') {
                document.getElementById(destination).innerHTML = document.getElementById(destination).innerHTML.slice(0, -1);
            }
            clearInterval(interval);
        }
    }, speed * 1000);
}

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, (s*1000)));
}

function loadGraph() {
    var ctx = document.getElementById('myChart');
    var lineChart = new Chart(ctx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: '',
                showLine: false,
                fill: false,
                borderColor: 'rgba(255, 0, 0, 0)',
                backgroundColor: 'rgba(255, 0, 0, 0)',
                pointRadius: 0,
                tooltip: {
                    enabled: false
                },
                data: [{
                    y: 0,
                    x: 3.5
                },{
                    y: 10,
                    x: 0
                }]
            }, {
                label: 'Average',
                showLine: true,
                fill: false,
                borderColor: '#04E762',
                data: [{
                    y: 0,
                    x: 0
                }, {
                    y: 2.5,
                    x: 1.04
                }, {
                    y: 5,
                    x: 1.706
                }, {
                    y: 7.5,
                    x: 2.326
                }, {
                    y: 10,
                    x: 3.064
                }]
            }, {
                label: '1st Lap',
                showLine: true,
                fill: false,
                borderColor: '#231651',
                data: [{
                    y: 0,
                    x: 0
                }, {
                    y: 2.5,
                    x: 0.94
                }, {
                    y: 5,
                    x: 1.72
                }, {
                    y: 7.5,
                    x: 2.47
                }, {
                    y: 10,
                    x: 3.38
                }]
            }, {
                label: '2nd Lap',
                showLine: true,
                fill: false,
                borderColor: '#f25f5c',
                data: [{
                    y: 0,
                    x: 0
                }, {
                    y: 2.5,
                    x: 1.13
                }, {
                    y: 5,
                    x: 1.84
                }, {
                    y: 7.5,
                    x: 2.56
                }, {
                    y: 10,
                    x: 3.49
                }]
            }, {
                label: '3rd Lap',
                showLine: true,
                fill: false,
                borderColor: '#FFE066',
                data: [{
                    y: 0,
                    x: 0
                }, {
                    y: 2.5,
                    x: 0.97
                }, {
                    y: 5,
                    x: 1.47
                }, {
                    y: 7.5,
                    x: 2.13
                }, {
                    y: 10,
                    x: 2.66
                }]
            }, {
                label: '4th Lap',
                showLine: true,
                fill: false,
                borderColor: '#247BA0',
                data: [{
                    y: 0,
                    x: 0
                }, {
                    y: 2.5,
                    x: 1.13
                }, {
                    y: 5,
                    x: 1.78
                }, {
                    y: 7.5,
                    x: 2.25
                }, {
                    y: 10,
                    x: 2.87
                }]
            }, {
                label: '5th Lap',
                showLine: true,
                fill: false,
                borderColor: '#70C1B3',
                data: [{
                    y: 0,
                    x: 0
                }, {
                    y: 2.5,
                    x: 1.03
                }, {
                    y: 5,
                    x: 1.72
                }, {
                    y: 7.5,
                    x: 2.22
                }, {
                    y: 10,
                    x: 2.88
                }]
            }, {
                label: '',
                showLine: false,
                fill: false,
                borderColor: 'rgba(255, 0, 0, 0)',
                backgroundColor: 'rgba(255, 0, 0, 0)',
                pointRadius: 0,
                tooltip: {
                    enabled: false
                },
                data: [{
                    y: 10,
                    x: 0
                },{
                    y: 0,
                    x: 3.5
                }]
            }]
        },
        options: {
            animation: {
                duration: 0,
            }, title: {
                display: true,
                text: "How fast can Subject M run? (m/s)",
                fontSize: 20,
                fontColor: "#000000"
            }, scales: {
                yAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    scaleLabel: {
                        display: true,
                        labelString: "Distance (m)",
                        fontSize: 15,
                        fontColor: "#000000"
                    }
                }],
                xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    scaleLabel: {
                        display: true,
                        labelString: "Time (s)",
                        fontSize: 15,
                        fontColor: "#000000"
                    }
                }]
            }
        }
    });
}