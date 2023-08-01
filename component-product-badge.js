class ProductBadge extends HTMLElement {
  connectedCallback() {
    this._setup();
  }

  disconnectedCallback() {}

  get productId() {
    return this.getAttribute('product-id');
  }

  _setup() {
    const $blinks = document.querySelectorAll(
      `.product-item--badge-group-${this.productId}`
    );
    const $display = document.querySelector(
      `.product-item--badge-display-${this.productId}`
    );

    const $blinkLast = $blinks.length - 1;
    let count = 0;
    if ($display && $blinks[$blinkLast]) {
      $display.innerHTML = $blinks[$blinkLast].innerHTML;
    }
    if ($blinks.length > 1) {
      setInterval(function () {
        $display.innerHTML = $blinks[count].innerHTML;
        if (count == $blinkLast) {
          count = 0;
        } else {
          count++;
        }
      }, 2000);
    }
  }
}

window.customElements.define('product-badge', ProductBadge);
