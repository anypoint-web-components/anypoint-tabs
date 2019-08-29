import { html } from 'lit-html';
import { ArcDemoPage } from '@advanced-rest-client/arc-demo-helper/ArcDemoPage.js';
import '@advanced-rest-client/arc-demo-helper/arc-demo-helper.js';
import '@advanced-rest-client/arc-demo-helper/arc-interactive-demo.js';
import '@anypoint-web-components/anypoint-checkbox/anypoint-checkbox.js';
import '../anypoint-tabs.js';
import '../anypoint-tab.js';

class ComponentDemo extends ArcDemoPage {
  constructor() {
    super();
    this.initObservableProperties([
      'demoLegacy',
      'demoRtl',
      'demoAutoselect',
      'demoAlignBottom',
      'demoNoSlide',
      'dynamicTab'
    ]);
    this._componentName = 'anypoint-tabs';
    this.demoStates = ['Material', 'Anypoint'];

    this._mainDemoStateHandler = this._mainDemoStateHandler.bind(this);
    this._toggleMainOption = this._toggleMainOption.bind(this);
  }

  _mainDemoStateHandler(e) {
    const state = e.detail.value;
    switch (state) {
      case 0:
        this.demoLegacy = false;
        break;
      case 1:
        this.demoLegacy = true;
        break;
    }
  }

  _toggleMainOption(e) {
    const { name, checked } = e.target;
    this[name] = checked;
  }

  _demoTemplate() {
    const {
      demoStates,
      darkThemeActive,
      demoLegacy,
      demoRtl,
      demoAutoselect,
      demoAlignBottom,
      demoNoSlide
    } = this;
    return html`<section class="documentation-section">
    <h3>Interactive demo</h3>
    <p>
      This demo lets you preview the tabs element with various
      configuration options.
    </p>
    <arc-interactive-demo
      .states="${demoStates}"
      @state-chanegd="${this._mainDemoStateHandler}"
      ?dark="${darkThemeActive}"
    >
      <anypoint-tabs
        slot="content"
        ?compatibility="${demoLegacy}"
        dir="${demoRtl ? 'rtl' : 'ltr'}"
        selected="0"
        ?autoselect="${demoAutoselect}"
        ?alignBottom="${demoAlignBottom}"
        ?noSlide="${demoNoSlide}"
        >
        <anypoint-tab>Tab one</anypoint-tab>
        <anypoint-tab>Tab two</anypoint-tab>
        <anypoint-tab>Tab three</anypoint-tab>
      </anypoint-tabs>

      <label slot="options" id="mainOptionsLabel">Options</label>
      <anypoint-checkbox
        aria-describedby="mainOptionsLabel"
        slot="options"
        name="demoRtl"
        @change="${this._toggleMainOption}"
        >Right-to-left</anypoint-checkbox
      >
      <anypoint-checkbox
        aria-describedby="mainOptionsLabel"
        slot="options"
        name="demoAutoselect"
        @change="${this._toggleMainOption}"
        >Auto select</anypoint-checkbox
      >
      <anypoint-checkbox
        aria-describedby="mainOptionsLabel"
        slot="options"
        name="demoAlignBottom"
        @change="${this._toggleMainOption}"
        >Align bottom</anypoint-checkbox
      >
      <anypoint-checkbox
        aria-describedby="mainOptionsLabel"
        slot="options"
        name="demoNoSlide"
        @change="${this._toggleMainOption}"
        >No slide</anypoint-checkbox
      >
    </arc-interactive-demo>
    </section>`;
  }

  _introductionTemplate() {
    return html`
      <section class="documentation-section">
        <h3>Introduction</h3>
        <p>
          This component is based on Material Design menu and adjusted for
          Anypoint platform components.
        </p>
        <p>
          Anypoint web components are set of components that allows to build
          Anypoint enabled UI in open source projects.
        </p>
        <p>
          Tabs organize content across different screens, data sets, and other interactions.
        </p>
      </section>
    `;
  }

  _usageTemplate() {
    const scrollableItems = new Array(15);
    scrollableItems.fill(true);
    const fitItems = new Array(3);
    fitItems.fill(true);
    return html`
    <section class="documentation-section">
      <h2>Usage</h2>
      <p>Anypoint tabs comes with 2 predefined styles:</p>
      <ul>
        <li><b>Material</b> (default) - Material Design styled tabs</li>
        <li>
          <b>Compatibility</b> - To provide compatibility with Anypoint design
        </li>
      </ul>

      <p>
        See
        <a href="https://material.io/components/tabs/">Tabs</a>
        documentation in Material Design documentation for principles and
        anatomy of tabs.
      </p>

      <h3>Scrollable tabs</h3>
      <p>
        When tabs takes more place than available then set <code>scrollable</code>
        property to enable scrolling.
      </p>

      <div class="scrollable-container">
        <anypoint-tabs selected="0" scrollable>
          ${scrollableItems.map((_, index) => html`<anypoint-tab>Tab #${index}</anypoint-tab>`)}
        </anypoint-tabs>
      </div>

      <h3>Fit container</h3>
      <p>
        When <code>fitcontainer</code> is set the tabs expands to full width of the container.
      </p>

      <anypoint-tabs selected="0" fitcontainer>
        ${fitItems.map((_, index) => html`<anypoint-tab>Tab #${index}</anypoint-tab>`)}
      </anypoint-tabs>

      <p>Otherwise they stay aligned to left/right (depending on dir value)</p>
      <anypoint-tabs selected="0">
        ${fitItems.map((_, index) => html`<anypoint-tab>Tab #${index}</anypoint-tab>`)}
      </anypoint-tabs>

      <h3>Dynamic content</h3>
      <p>
        The tab resets when it's children changes.
      </p>

      <anypoint-tabs selected="0" fitcontainer>
        ${this.dynamicTab ? html`<anypoint-tab>Dynamic</anypoint-tab>` : ''}
        ${fitItems.map((_, index) => html`<anypoint-tab>Tab #${index}</anypoint-tab>`)}
      </anypoint-tabs>

      <anypoint-checkbox
        aria-label="Activate to add tab item"
        name="dynamicTab"
        @change="${this._toggleMainOption}"
        >Toggle tab in list</anypoint-checkbox
      >

      <p>
        Note that the tabs won't change the selection when children change. You need to handle this
        situation depending on your application context.
      </p>
    </section>
    `;
  }

  contentTemplate() {
    return html`
      <h2>Anypoint tabs</h2>
      ${this._demoTemplate()}
      ${this._introductionTemplate()}
      ${this._usageTemplate()}
    `;
  }
}

const instance = new ComponentDemo();
instance.render();
window.demo = instance;
