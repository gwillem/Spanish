/*
 * This file is part of FlarumES/Spanish.
 * -----------------------------------------------------------------------
 * Copyright © 2015-2017 Toby Zerner and Flarum
 * Copyright © 2015-2017 Johann Rodríguez and Flarum en Español
 * -----------------------------------------------------------------------
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import SettingsModal from 'flarum/components/SettingsModal';

export default class SpanishSettingsModal extends SettingsModal {
  className() {
    return 'SpanishSettingsModal Modal--small';
  }

  title() {
    return "Spanish";
  }

  form() {
    return [
      <div className="Form-group">
        <fieldset class="BasicsPage-homePage">
        <legend>Mode</legend>
        <label class="checkbox">
        <input type="radio" bidi={this.setting('flarumes-spanish.mode')} value="formal"/>
        Formal</label>
        <label class="checkbox">
        <input type="radio" bidi={this.setting('flarumes-spanish.mode')} value="informal"/>
        Informal</label>
        </fieldset>
      </div>
    ];
  }
}
