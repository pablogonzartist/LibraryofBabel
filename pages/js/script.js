//below script taken from: https://stackoverflow.com/questions/49590560/changing-color-effect-on-scrolling-with-js//

var tStart = 0 // Start transition 100px from top
  , tEnd = 300  // End at 500px
  , cStart = [255, 255, 255]  // Gold
  , cEnd = [0, 0, 00]   // Lime
  , cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] - cStart[0]];

$(document).ready(function(){
    $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $("body").css('background-color', 'rgb(' + cBg.join(',') +')');
    });
});

// Below Script taken from: https://www.sitepoint.com/community/t/simple-problem-jquery-color-change-with-scrolling/39325/4//

$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 150 ) {
            $('.left').css('color', '#fff');
        } else {
            $('.left').css('color', '#000');
        }
    });
});

$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 150 ) {
            $('.right').css('color', '#fff');
        } else {
            $('.right').css('color', '#000');
        }
    });
});