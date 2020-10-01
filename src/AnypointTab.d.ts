import { TemplateResult, CSSResult } from 'lit-element';
import '@polymer/paper-ripple/paper-ripple.js';
import { AnypointButton } from '@anypoint-web-components/anypoint-button/src/AnypointButton.js';

export class AnypointTab extends AnypointButton {
  styles: CSSResult;
  /**
   * If true, the tab will forward keyboard clicks (enter/space) to the first anchor element found in its descendants
   * @attribute
   */
  link: boolean;

  connectedCallback(): void;

  disconnectedCallback(): void;

  _clickHandler(e: MouseEvent): void;

  render(): TemplateResult;
}
