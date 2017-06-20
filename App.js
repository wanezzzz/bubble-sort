// jshint esversion: 6

let files = ['Controller.js', 'View.js', 'Model.js'];

let App = function () {


    this.initialize = function () {
        this.Model = new Model();
        this.View = new View();
        this.Controller = new Controller(this.Model, this.View);
    };

    for (var i in files) {
        var script = document.createElement('script');
        script.src = files[i];
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    window.onload = this.initialize;
};

app = new App();
