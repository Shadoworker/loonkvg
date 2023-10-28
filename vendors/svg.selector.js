// SVG.js plugin for element selection
SVG.extend(SVG.Element, {
  // Add a 'selectable' method to SVG elements
  selectize: function(_loonki) {
    
      // Add a class to the element to mark it as selectable
      this.addClass('selectable');

      // Add a click event listener to toggle selection
      this.click(function() {
          
          console.log(_loonki.getMenuContext())

          if(_loonki.getMenuContext() == MENU_CONTEXT.EDIT)
          {
            this.toggleClass('selected');

            console.log("Edit")
            _loonki.activatePath(this)
          }
      });

      // Return the modified element
      return this;
  },
  // Check if the element is selected
  isSelected: function() {
    
      return this.hasClass('selected');
  }
});
