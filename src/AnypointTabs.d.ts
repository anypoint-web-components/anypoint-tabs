import { TemplateResult, LitElement, CSSResult } from 'lit-element';
import { AnypointMenubarMixin } from '@anypoint-web-components/anypoint-menu-mixin';
import { ArcResizableMixin } from '@advanced-rest-client/arc-resizable-mixin';

/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

/**
 * Calculates value in percentages
 * @param w Element width
 * @param w0 Parent width
 * @return The percentage of element's width relative to parent.
 */
export declare function calcPercent(w: number, w0: number): number;

export declare interface AnypointTabs {
  styles: CSSResult;

  /**
   * If true, the bottom bar to indicate the selected tab will not be shown.
   */
  noBar: boolean;
  /**
   * If true, the slide effect for the bottom bar is disabled.
   */
  noSlide: boolean;
  /**
   * If true, tabs are scrollable and the tab width is based on the label
   * width.
   */
  scrollable: boolean;
  /**
   * If true, tabs expand to fit their container. This currently only applies
   * when scrollable is true.
   */
  fitContainer: boolean;
  /**
   * If true, dragging on the tabs to scroll is disabled.
   */
  disableDrag: boolean;
  /**
   * If true, scroll buttons (left/right arrow) will be hidden for scrollable
   * tabs.
   */
  hideScrollButtons: boolean;

  /**
   * If true, the tabs are aligned to bottom (the selection bar appears at the
   * top).
   */
  alignBottom: boolean;

  /**
   * If true, tabs are automatically selected when focused using the
   * keyboard.
   */
  autoselect: boolean;

  /**
   * The delay (in milliseconds) between when the user stops interacting
   * with the tabs through the keyboard and when the focused item is
   * automatically selected (if `autoselect` is true).
   */
  autoselectDelay: number;
  /**
   * Enables compatibility with Anypoint components.
   */
  compatibility: boolean;
  /**
   * @deprecated Use `compatibility` instead
   */
  legacy: boolean;

  _leftHidden: boolean;
  _rightHidden: boolean;

  readonly _contentClass: string;

  readonly _selectionClass: string;

  readonly _leftButtonClass: string;

  readonly _rightButtonClass: string;

  readonly _tabsContainer: HTMLElement;

  readonly _tabsContent: HTMLElement;

  readonly _selectionBar: HTMLElement;

  readonly _tabContainerScrollSize: HTMLElement;

  connectedCallback(): void;

  disconnectedCallback(): void;

  _itemsHandler(e: CustomEvent): void;

  _sizingHandler(): void;

  _updateResized(): void;

  _selectHandler(e: CustomEvent): void;

  _deselectHandler(): void;

  _blurHandler(e: CustomEvent): void;

  _updateDeselect(): void;

  _scroll(dx: number): void;

  _affectScroll(dx: number): void;

  _tabChanged(tab: Element, old?: Element): void;

  _positionBar(width: number, left: number): void;

  _activateHandler(e: CustomEvent): void;

  _onKeydown(e: CustomEvent): void;

  _scheduleActivation(item: Element, delay: number): void;

  _delayedActivation(): void;

  _cancelPendingActivation(): void;

  _onBarTransitionEnd(): void;

  _compatibilityChanged(value: boolean): void;

  _scrollToSelectedIfNeeded(tabWidth: number, tabOffsetLeft: number): void;

  _computeScrollButtonClass(scrollable: boolean, hideScrollButtons: boolean): string;

  _onScrollButtonUp(): void;

  _onLeftScrollButtonDown(): void;

  _onRightScrollButtonDown(): void;

  _scrollToLeft(): void;

  _scrollToRight(): void;

  _touchMove(e: TouchEvent): void;

  _touchStart(e: TouchEvent): void;

  _touchEnd(): void;

  _leftButtonTemplate(scrollable: boolean): TemplateResult;

  _rightButtonTemplate(scrollable: boolean): TemplateResult;

  _selectionTemplate(): TemplateResult;

  render(): TemplateResult;
}


export declare class AnypointTabs extends ArcResizableMixin, AnypointMenubarMixin, LitElement {
}
