/* model starts */
var studentModel = Backbone.Model.extend({
    defaults: {
        fname: 'rakesh',
        lname: 'jella',
        age: 26
    }

});

//collection for student model
var collection1 = Backbone.Collection.extend({
    model: studentModel
});

//student view
var studentview1 = Backbone.View.extend({
    tagName: 'li', 
    studentTemp: _.template($("#student-panel-temp").html()),
    initialize: function () {
        console.log('initializing...');

        this.render();
    },
    render: function () {

        var htmlStudentData = this.studentTemp(this.model.toJSON());

       // $(".student-panel").html(htmlStudentData);
       return htmlStudentData;

    }

});
var scollection = new collection1([
    new studentModel({fname: 'uday', lname: 'surendra', age: 25}),
    new studentModel({fname: 'gupta', lname: 'gullapudi', age: 28}),
    new studentModel({fname: 'samanth', lname: 'vallabannnei', age: 29})

]);
//students collection view
var studentcollectionview = Backbone.View.extend({
    tagName:"ul",
    collection:scollection,
    studentTemp: _.template($("#student-panel-temp").html()),
    initialize:function (){
    this.render();
    },
    render:function(){
      this.collection.each(this.addStudent, this);
      
    },
    addStudent:function(studentModel){
        console.log(this);
        var studentView = new studentview1({ model:studentModel });
        $(".student-panel").append(studentView.render());
    }
});





var smodel = new studentModel;

var studentview = new studentview1({model: smodel});
new studentcollectionview();
