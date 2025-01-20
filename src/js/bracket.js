

var minimalData = {
    teams: [
        ["28 och 3", "2"],
        ["3", "4"],
        ["5", "6"],
        ["7", "8"],

        ["9", "10"],
        ["11", "12"],
        ["13", "14"],
        ["15", "16"],
    ],
    results: [
        [[1 , 0], [ , ], [ , ], [ , ], [ , ], [ , ], [ , ], [ , ]], //ÅTTONDEL

        [[ , ], [ , ], [ , ], [ , ]], //KVARTAR

        [[ , ], [ , ]], //SEMIFINALER

        [[ , ], [ , ]], //FINAL + 

    ]
}

$(function() {
  $('#resultat').bracket({
    init: minimalData /* data to initialize the bracket with */ })
})