export default class LoadMoreBtn {
    constructor({ selector, isHidden = false }) {
      this.button = this.getBtn(selector);
  
      isHidden && this.hide();
      
    }
  
    getBtn(selector) {
      return document.querySelector(selector);
    }
  
    enable() {
      this.button.disabled = false;
      this.button.textContent = "Load More";
    }
  
    disable() {
      this.button.disabled = true;
      
    }
  
    hide() {
      this.button.classList.add("is-hidden");
    }
  
    show() {
      this.button.classList.remove("is-hidden");
    }
  }