import { TemplateResult, CSSResult } from 'lit-element';
import '@polymer/paper-ripple/paper-ripple.js';
import { AnypointButton } from '@anypoint-web-components/anypoint-button/src/AnypointButton.js';

export class AnypointTab extends AnypointButton {
  styles: CSSResult;
  link: boolean;

  connectedCallback(): void;

  disconnectedCallback(): void;

  _clickHandler(e: MouseEvent): void;

  render(): TemplateResult;
}
