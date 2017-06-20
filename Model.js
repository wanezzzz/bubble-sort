let Model = function () {
    this.initialize = function () {
        this.mas = [];
        this.lgth = 0;
        this.current = 1;
        this.rLenght = 0;
    }

    this.generate = function (min, max) {
        this.mas = [];
        this.lgth = max - min;
        this.rLenght = this.lgth;
        for (let i = 0; i < max; i++) {
            this.mas[i] = i;
        }
        this.shuffle(this.mas);
        


    }
    this.setReady = function(){
        let i = 0;
        for (i = this.rLenght - 1; i > 0; i--){
            for (let j = i - 1; j > 0; --j){
                if(this.mas[i] < this.mas[j]) {return;}
            }
            this.rLenght--;
            return i;
        }
    } 
    
    this.reset = function(){
        this.current = 1;
        this.rLenght = this.lgth;
    }

    this.shuffle = function (arr) {
        var j, x, i;
        for (i = arr.length; i > 0; i--) {
            j = Math.floor(Math.random() * i);
            x = arr[i - 1];
            arr[i - 1] = arr[j];
            arr[j] = x;
        }
    }

    this.step = function () {
        while (this.mas[this.current - 1] < this.mas[this.current]) {
            this.current++;
            if (this.current == this.lgth) {
            this.current = 1;
        }
        }
        

        this.swap(this.current - 1, this.current);
        return (this.current);
    }

    this.swap = function (index1, index2) {
        let temp = 0;
        tmp = this.mas[index1];
        this.mas[index1] = this.mas[index2];
        this.mas[index2] = tmp;
    }

    this.isSorted = function () {
        for (let i = 0; i < this.lgth - 1; i++) {
            if (this.mas[i] > this.mas[i + 1]) {
                return false;
            }

        }
        return true;
    }
    this.initialize();


}
