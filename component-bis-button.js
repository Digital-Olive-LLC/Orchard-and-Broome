class BISButton extends HTMLElement {
  constructor() {
    super();
    this.productForm = this.closest('[data-product-form]');
    this._handleVariantChange = this._handleVariantChange.bind(this);
    this._toggle = this.querySelector('button');
  }

  connectedCallback() {
    this._attachListeners();
  }

  disconnectedCallback() {
    this._removeListeners();
  }

  _handleVariantChange(event) {
    if (event.detail && event.detail.variant) {
      const variant = event.detail.variant;
      this._toggle.style.display = variant.available ? 'none' : '';
      this._toggle.setAttribute('data-variant-id', variant.id);
    } else {
      this._toggle.style.display = 'none';
    }
  }

  _attachListeners() {
    this.productForm.addEventListener(
      'variant-change',
      this._handleVariantChange
    );
  }

  _removeListeners() {
    this.productForm.removeEventListener(
      'variant-change',
      this._handleVariantChange
    );
  }
}

window.customElements.define('bis-button', BISButton);
