import { customElement, html, LitElement, TemplateResult } from 'lit-element';

(() => import('@material/mwc-button/mwc-button'))();

@customElement('fuse-bundler-button')
export default class FuseBundlerButton extends LitElement {
  render(): TemplateResult {
    return html`<mwc-button>FUSE BUNDLER</mwc-button>`;
  }
}
