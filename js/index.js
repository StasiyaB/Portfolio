'use strict';

var myCanvas = document.getElementById('my_canvas');

        var circle = new ProgressCircle({
            canvas: myCanvas,
        });

        circle.addEntry({
            fillColor: 'rgba(255, 255, 0, 0.5)',
            progressListener: function() {
                return THE_PROGRESS_VARIABLE_TO_LISTEN; // between 0 and 1
            },
        });


        /*circle.addEntry({
            fillColor: 'rgba(102, 255, 0, 0.5)',
            progressListener: function() {return p1;},
        }).addEntry({
            fillColor: 'rgba(255, 255, 0, 0.5)',
            progressListener: function() {return p2;},
        }).addEntry({
            fillColor: 'rgba(0, 0, 255, 0.5)',
            progressListener: function() {return p3;},
        });*/

        //circle.start(33); // 33 is the interval(ms) between each update


        //circle.stop();
