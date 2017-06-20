let View = function () {
    this.initialize = function () {
        this.isAnimated;
    }

    this.render = function (mas) {
        $(".line").remove();
        let height = 0;
        for (let i = 0; i < mas.length; i++) {
            height = mas[i] + 1;
            $('#lines').append('<div class = "line" style ="left:' + i + '%;  height: ' + 0.9 * height + '%;"  id="' + i + '"></div>');
        }
    }
    this.setReady= function(n){
        $('#' + n).addClass('line_complited')
    }

    this.animate = function (current, prew) {

        let currentBlock = $('#' + current);
        let preBlock = $('#' + (current - 1));
        
        let prewSortBlock1 = $('#' + prew);
        let prewSortBlock2 = $('#' + (prew - 1));

        currentBlock.animate({
            left: (current - 1) + "%"
        }, {
            duration: 50,
            start: function () {
                prewSortBlock1.removeClass('current1');
                prewSortBlock2.removeClass('current1');
                currentBlock.addClass('current1')
            }
        });

        preBlock.animate({
            left: (current) + "%"
        }, {
            duration: 50,
            start: function () {
                preBlock.addClass('current1')
            }
        });


        currentBlock.attr('id', current - 1);
        preBlock.attr('id', current);
    }
    
    

    this.complited = function (max) {
        for (i = 0; i < max; i++){
            $("#" + i).addClass('line_complited');
        }
    }

    this.initialize();
}
