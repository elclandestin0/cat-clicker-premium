var model = {
  currentCat: null;
  cats: [
    {
      name: "Fluffy",
      src: "img/fluffy.jpg",
      click:  0
    },
    {
      name: "Assad",
      src: "img/assad.jpg",
      click:  0
    },
    {
      name: "Nemer",
      src: "img/nemer.jpeg",
      click:  0
    },
    {
      name: "Mitsy",
      src: "img/mitsy.jpg",
      click: 0
    }
  ]
}

var octopus = {
  init: function(){
    model.currentCat = model.cats[0];
    // render the cat-view and the cat-view-list here
  }

  getCat: function(){
    return model.currentCat;
  }

  getAllCats: function(){
    return model.cats;
  }

  setCurrentCat: function(cat){
    model.currentCat(cat);
  }

  incremenetClick: function(){
    model.currentCat.click++;
    // re-render the view here
  }
}
