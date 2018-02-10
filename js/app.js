var model = {
  currentCat: null,
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
    viewCat.init();
    viewCatList.init();
    // render the cat-view and the cat-view-list here
  },

  getCat: function(){
    return model.currentCat;
  },

  getAllCats: function(){
    return model.cats;
  },

  setCurrentCat: function(cat){
    model.currentCat = cat;
  },

  incrementClick: function(){
    model.currentCat.click++;
    viewCat.render();
    // re-render the view here
  }
}

var viewCat = {
  init: function(){

    // Tag the cat elements with the document elements.
    this.catElement = document.getElementById('cat');
    this.nameElement = document.getElementById('cat-name');
    this.imgElement = document.getElementById('cat-img');
    this.clickElement = document.getElementById('cat-click');

    this.imgElement.addEventListener('click', function(){
      octopus.incrementClick();
    })

    // Render the view of the respective cat. */
    this.render();
  },

  render: function(){
    // update values from the current cat that octopus pulls from the model
    var cat = octopus.getCat();
    this.nameElement.textContent = cat.name;
    this.imgElement.src = cat.src;
    this.clickElement.textContent = cat.click;
  }
}

var viewCatList = {
  init: function(){
    // tag the cat list element with the index.html file
    this.catListElement = document.getElementById('cat-list')

    // render the view!
    this.render();
  },
  render: function(){
    var cats, i, element;
    // get all the cats from the octopus
    cats = octopus.getAllCats();

    for (var i = 0; i < cats.length; i++){
      currentCat = cats[i];

      // create an element for every cat in the model
      element = document.createElement('li');
      element.textContent = currentCat.name;

      element.addEventListener('click', (function(catCopy){
        return function() {
          // whatever element we click on the list, we assign it to catCopy.
          // After doing so, the octopus controller sets the current cat to the
          // cat we just clicked
          octopus.setCurrentCat(catCopy);
          viewCat.render();
          console.log(catCopy.name)
        }
      })(currentCat));

      this.catListElement.appendChild(element);
    }


  }
}
octopus.init();
