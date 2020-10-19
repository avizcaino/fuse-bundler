import { customElement, html, LitElement, TemplateResult } from 'lit-element';
(() => import('./components/button'))();

@customElement('fuse-bundler-app')
export default class FuseBundlerApp extends LitElement {
  private deletingSplash = false;
  render(): TemplateResult {
    const splash = document.body.querySelector('.splash');
    if (splash && !this.deletingSplash) {
      this.deletingSplash = true;
      setTimeout(() => document.body.removeChild(splash), 1000);
    }
    return html`<div class="content"><fuse-bundler-button></fuse-bundler-button></div>`;
  }
}
