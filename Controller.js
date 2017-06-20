let Controller = function (model, view) {





    this.initialize = function () {
        //минимальное и максимальное значение range
        this.min = 0;
        this.max = 50;

        this.model = model;
        this.view = view;

        this.isPlaying = false;
        this.sortInterval = 0;
        
        //предыдущий остортированный элемент
        this.prew = 0;
        
        //привязка элементов к функциям
        this.setButton = document.getElementById('set');
        this.startButton = document.getElementById('start');

        this.setButton.onclick = this.set.bind(this);
        this.startButton.onclick = this.start.bind(this);

        this.range = document.getElementById('range');
        this.range.oninput = this.getRange.bind(this);

        this.resultButton = document.getElementById('result');
        this.resultButton.onclick = this.hideResult.bind(this);

        this.stepButton = document.getElementById('step');
        this.stepButton.onclick = this.step.bind(this);

        this.model.generate(this.min, this.max);
        this.view.render(model.mas);

        this.symbol = document.getElementById('symbol');

    }
    
    //геттер range
    this.getRange = function () {
        if (this.range.value > 100) {
            this.range.value = 100;
        }

        if (this.range.value < 1) {
            this.range.value = 1;
        }
        this.max = +(this.range.value);



    }


    //функция при нажатии кнопки set
    this.set = function () {

        $(this.symbol).removeClass('fa-pause');
        $(this.symbol).addClass('fa-play');
        clearInterval(this.sortInterval);
        this.sortInterval = null;
        this.model.generate(this.min, this.max);
        this.view.render(model.mas);
        model.reset();
        this.n = 0;
    }

    //функция при нажатии на кнопку play
    this.start = function () {
        
        //изменение стиля кнопки
        $(this.symbol).removeClass('fa-play');
        $(this.symbol).addClass('fa-pause');
        
        //если сортировка запущена, и нажата кнопка, то:
        if (this.sortInterval) {
            
            //меняю стиль кнопки
            $(this.symbol).removeClass('fa-pause');
            $(this.symbol).addClass('fa-play');
            
            //очищаю интервал
            clearInterval(this.sortInterval);
            this.sortInterval = null;


        } else {


            //если ещё не запущена, то запускаем
            this.sortInterval = setInterval(function () {
                this.move();

            }.bind(this), 110);

        }

    }
    this.move = function () {
        
        //если если элемент отсортирован, то
        let i = model.setReady();
        if (i) {
            //подсвечиваем
            view.setReady(i);
        }
        //текущий элемент сортировки
        let current = model.step();
        //визуально меняем местами
        view.animate(current, this.prew);
        //после того как поменяли, текщий элемент делаем предыдущим
        this.prew = current;
        
        //проверяем, не отсортировался ли наш массив
        if (model.isSorted()) {
            //если да, то чистим интервал
            clearInterval(this.sortInterval);
            this.sortInterval = null;
            $(this.symbol).removeClass('fa-pause');
            $(this.symbol).addClass('fa-play');
            view.complited(this.max);
            this.showResult();
            $(this.stepButton).css('display', 'none');
            return;
        }




    }
    this.step = function () {
        $(this.symbol).removeClass('fa-pause');
        $(this.symbol).addClass('fa-play');
        clearInterval(this.sortInterval);
        this.sortInterval = null;
        this.move();
    }
    this.hideResult = function () {
        $(".container").css('display', 'none');
    }
    this.showResult = function () {
        $(".container").css('display', 'block');
    }
    this.initialize();
}
